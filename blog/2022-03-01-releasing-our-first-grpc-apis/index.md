---
slug: releasing-our-first-grpc-apis
title: "We are releasing our first production-ready gRPC APIs!"
date: 2022-03-01
tags: [api]
authors: [gunnar-inge, noy]
---

At **wgtwo** we have been offering public APIs for a long time using major version zero.

They have been great for playing around with and we have learned a lot about what we actually need. So now its time to step up our game.

We are releasing our first production ready gRPC APIs!

<!--truncate-->
Have you ever received a welcome SMS when toggling flight mode off as you were on your way out of a plane starting off your awesome vacation? In this blog post we will describe our approach to supporting that vacation-feeling SMS, and how we transitioned to using gRPC streams to support it and greatly improve the flexibility of our platform.

![](./welcome.png)

As a quick first version, we have implemented a service that listens to location update events happening in our core and decides whether a user has changed country or not according to our records of your previous and new location. If a user did change country, we would fire a simple POST request to a configured endpoint hosted by the operator with this information. This has for most parts been good enough to get the job done, but it creates an explicit dependency between our core and our partner operator service being up and responsive, which makes the solution prone to errors and makes the system less flexible.

At **wgtwo**, we are relying heavily on gRPC APIs, and we are now ready to officially release our first gRPC API after playing around with our v0 APIs for a long time.

To get notifications of a phone attaching to a network in another country, you may use our `StreamCountryChangeEvents` API.

By calling this API, you initiate a server stream where you will receive this type of event for your customers. The API requires that you send an acknowledgement message when you have successfully processed the event; failing to do so will make it resend after a given timeout.

You may control load for your clients by setting how many concurrent events should be in-flight, and you may create multiple connections to share load between your servers.  This gives both us and the users of our API greater flexibility in consuming events that happen in the core of our network, and it gives the caller of the API the freedom to react in a way they believe is best for their user base. This is true for all the event-type server streams we offer.

All in all, we feel that moving to gRPC, where we give the client flexibility in how these events should be consumed and protect the client from high load, is the right move. This is instead of spending energy on adding resending and failure handling to our previous solution.


### The APIs


Our first batch of gRPC APIs is listed below.

All our event-based APIs have a common metadata field, which contains the subscriber identifier (using Pairwise Pseudonymous Identifier) and the identifier used for acknowledging the messages. For brevity this is not included in the examples below.


#### StreamCountryChangeEvents

This one is explained in the intro section and will let you listen to a stream of events for when the SIM first attaches to a network in another country.

##### Example
```json
{
  "metadata": { ... },
  "countryChangeEvent": {
    "previous": {
      "code": "NO",
      "name": "Norway"
    },
    "current": {
      "code": "SE",
      "name": "Sweden"
    }
  }
}
```

Read the docs: [Get country change events](https://v1.docs.wgtwo.com/guide/subscription/v1/how-to-get-country-change-events.html)


#### StreamHandsetChangeEvents

This lets you listen to a stream of events for when a SIM attaches via a new handset. This is typically used for sending you new APN settings as you set up your new phone.

##### Example
```json
{
  "metadata": { ... },
  "handsetChangeEvent": {
    "previous": {
      "imeiSv": {
        "imei": "86700000000000",
        "softwareVersion": "64"
      }
    },
    "current": {
      "imeiSv": {
        "imei": "86700000000001",
        "softwareVersion": "65"
      }
    },
    "imsi": {
      "value": "(...)"
    }
  }
}
```

Read the docs: [Get handset change events](https://v1.docs.wgtwo.com/guide/subscription/v1/how-to-get-handset-change-events.html)


#### StreamFirstAttachmentEvents

This lets you listen to a stream of events for when the SIM attaches to the network for the first time. In other words, it gives an operator a simple way to see that a SIM has been taken in use.

##### Example
```json
{
  "metadata": { ... },
  "firstAttachmentEvent": {
    "number": {
      "e164": "+47xxxxxxxx",
    },
    "imsi": {
      "value": "24206000010001"
    }
  }
}
```

Read the docs: [Get first attachment events
](https://v1.docs.wgtwo.com/guide/subscription/v1/how-to-get-first-attachment-events.html)


#### StreamPeriodicCountryEvents

This API has some similarities to the StreamCountryChangeEvents API. It will periodically send events related to the country a SIM card is located in.

This may be used if you want a message to be sent out when a user has a longer stay in another country, and you want to ensure the user has the required information about roaming prices.

##### Example
```json
{
  "metadata": { ... },
  "periodicCountryEvent": {
    "number": {
      "e164": "+4799990000"
    },
    "imsi": {
      "value": "242010000000000"
    },
    "country": {
      "code": "SE",
      "name": "Sweden"
    }
  }
}
```

Read the docs: [Get periodic country events](https://v1.docs.wgtwo.com/guide/subscription/v1/how-to-get-periodic-country-events.html)


#### SMS APIs

We have also launched three SMS APIs, which will be covered more in depth in a later post:


##### Send text SMS from subscriber

This allows you to text messages from a subscriber to any phone number.


##### Send text SMS to subscriber

This allows a service to send regular text messages to a subscriber from either a phone number or an alphanumeric sender ID.


##### Send data SMS to subscriber

This allows a service to send binary messages to a subscriber from either a phone number or an alphanumeric sender ID.

This may be used to, for example, send APN settings when your subscribers swap phones.


### Why we chose gRPC

Using gRPC, our published proto-files are the contract for our APIs. This makes documentation easier, and makes it easy to ensure we don’t break our existing APIs.

Many of the APIs listed here are streaming APIs. In our experience gRPC makes implementing streams easy. We do also use protobufs a lot internally, and we have found that it helps us implement changes in a non-breaking way and has also aided us in making communication between services written in different languages work without too much hassle.


### Our API playground

A lot of our APIs are still in v0. The v0 APIs is our playground where we have been testing out what functionality we actually need, and how we can expose that in a way that is easy to use.

This includes APIs for receiving SMS, building WebRTC clients, setting up SIP integrations, and more.

For production usage, we do recommend that you stick to our released APIs as we may make breaking changes to our v0 APIs without any notice. You are however free to use them for demo purposes, and we would be very happy to receive feedback if there is anything you need to build your next product.

If you have any questions, feel free to reach out at products@wgtwo.com and visit our docs website for a deeper dive and more code examples of the various APIs we provide: https://v1.docs.wgtwo.com/.
