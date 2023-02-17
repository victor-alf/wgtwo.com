"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[9218],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5241:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={slug:"choosing-erlang-formatter/",title:"Choosing an Erlang formatter",date:new Date("2020-05-18T00:00:00.000Z"),tags:["erlang","rebar3","coding","culture"],authors:"seba"},s=void 0,d={permalink:"/jp/blog/choosing-erlang-formatter/",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2020-05-18-formatting-erlang.md",source:"@site/../blog/2020-05-18-formatting-erlang.md",title:"Choosing an Erlang formatter",description:"There are many different Erlang formatters, and as a hack day project",date:"2020-05-18T00:00:00.000Z",formattedDate:"May 18, 2020",tags:[{label:"erlang",permalink:"/jp/blog/tags/erlang"},{label:"rebar3",permalink:"/jp/blog/tags/rebar-3"},{label:"coding",permalink:"/jp/blog/tags/coding"},{label:"culture",permalink:"/jp/blog/tags/culture"}],readingTime:7.88,hasTruncateMarker:!0,authors:[{name:"Sebastian Weddmark Olsson",title:"Tech Lead for Session Management & Protocol Termination",url:"https://www.linkedin.com/in/sebastian-weddmark-olsson/",imageURL:"/img/author-photos/swo.jpg",key:"seba"}],frontMatter:{slug:"choosing-erlang-formatter/",title:"Choosing an Erlang formatter",date:"2020-05-18T00:00:00.000Z",tags:["erlang","rebar3","coding","culture"],authors:"seba"},prevItem:{title:"Building software for a telecom core network",permalink:"/jp/blog/building-software-for-a-telecom-core-network"},nextItem:{title:"VoWifi leaking IMSI",permalink:"/jp/blog/vowifi-imsi-leak/"}},u={authorsImageUrls:[void 0]},p=[{value:"rebar3_fmt",id:"rebar3_fmt",level:2},{value:"steamroller",id:"steamroller",level:2},{value:"erl_tidy and erl_tidy",id:"erl_tidy-and-erl_tidy",level:2},{value:"rebar3_format",id:"rebar3_format",level:2},{value:"eryngii",id:"eryngii",level:2},{value:"elvis",id:"elvis",level:2}],m={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are many different Erlang formatters, and as a hack day project\nI investigated which options exist for us at ",(0,o.kt)("strong",{parentName:"p"},"wgtwo"),". There\nare two main alternatives, but sadly both have problems.  I've also\nbriefly looked at an Erlang linter."),(0,o.kt)("h1",{id:"background"},"Background"),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"wgtwo")," we use a bunch of different programming\nlanguages, and we all have different experiences and are used to\ndifferent languages and environments. We are pretty autonomous and we\nare expected to jump in and out in different services to fix bugs and\nadd features."),(0,o.kt)("p",null,"We like when the code is uniform, because it makes it easier to focus\non the business logic. That is why we want to use tools to make sure\nour code is consistent no matter who is the author, or which IDE is\nused, or in which part of the system the code resides."),(0,o.kt)("p",null,"About half a year ago there was a discussion about code style within\n",(0,o.kt)("strong",{parentName:"p"},"wgtwo")," that resulted in formatting tools being applied for\nKotlin, Bazel, Go and Java. It also resulted in an internal wiki page\ncontaining guidelines about code style."),(0,o.kt)("p",null,"That document highlights some of the problems with mixing different\ncode-styles. It should be easy for newcomers to maintain the coding\nstyle. It should also be easy to read diffs, and the discussions about\ncode style and formatting will be minimized because there is a\nconcensus."),(0,o.kt)("h1",{id:"this-is-nice-i-want-it-for-erlang"},"This is nice, I want it for Erlang"),(0,o.kt)("p",null,"As some of our services are written in Erlang, I wanted to investigate\nwhich formatters exist for Erlang, and what state they are in. I used\nour last hack day for this purpose."),(0,o.kt)("p",null,"The requirements I had was that it should be reproducable. Calling the\nformatter multiple times should not change the structure more than\nonce (first time of being called). The formatter should also\npreferably work with rebar3 (the most used Erlang build tool).  The\ntool should not use external tooling that wouldn't work for all\ndevelopers flow."),(0,o.kt)("p",null,"I also wanted it to have a short execution time, at least after the\ninitial formatting."),(0,o.kt)("h1",{id:"benchmark"},"Benchmark"),(0,o.kt)("p",null,"I searched for formatting tools on hex.pm, github.com, duckduckgo.com,\ngoogle.com and came up with the following arbitrary list of Erlang\nformatters. There is probably others, but these seems to be the most\nused."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"rebar3_fmt"),(0,o.kt)("li",{parentName:"ul"},"steamroller"),(0,o.kt)("li",{parentName:"ul"},"otp/erl_tidy"),(0,o.kt)("li",{parentName:"ul"},"tsloughter/erl_tidy"),(0,o.kt)("li",{parentName:"ul"},"rebar3_format"),(0,o.kt)("li",{parentName:"ul"},"eryngii")),(0,o.kt)("h2",{id:"rebar3_fmt"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/fenollp/erlang-formatter"},"rebar3_fmt")),(0,o.kt)("p",null,"One big problem with this is that it uses Emacs ",(0,o.kt)("inlineCode",{parentName:"p"},"erlang-mode")," for\nformatting. Sure, I am an Emacs user and the ",(0,o.kt)("inlineCode",{parentName:"p"},"erlang-mode")," and its\nformatting is maintained and supperted by OTP, but my non-Emacs\ncoworkers would not be happy if they need to install Emacs every time\nthey want to format the code."),(0,o.kt)("h2",{id:"steamroller"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/old-reliable/steamroller/"},"steamroller")),(0,o.kt)("p",null,"Though it was easy to setup (just add it to dependencies in your Rebar\nconfig and run ",(0,o.kt)("inlineCode",{parentName:"p"},"rebar3 steamroll"),"), my first impression of the\nexecution was that it was really slow. Even when running subsequent\ncalls on my Dell XPS 13 P82G it took around 3.5 minutes to format."),(0,o.kt)("p",null,"The plugin had some support for increasing the number of workers from\nthe default ",(0,o.kt)("inlineCode",{parentName:"p"},"--J=1"),", but that did not seem to help with the execution\ntime."),(0,o.kt)("p",null,"The default steamroller formatting options specify 2 spaces instead of\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"erlang-mode")," 4 spaces standard that is used in our code base."),(0,o.kt)("p",null,"Here is a sample of a complex record structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-                   components =\n-                       [{invoke,\n-                         #'Invoke'{\n-                            invokeID = 1,linkedID = asn1_NOVALUE,\n-                            operationCode = updateLocation,\n-                            parameter =\n-                                #'UpdateLocationArg'{\n-                                   imsi = IMSI,\n-                                   'msc-Number' = CallingGTBCD,\n-                                   'vlr-Number' = CallingGTBCD}}}]},\n+   components =\n+     [\n+       {\n+         invoke,\n+         #'Invoke'{\n+           invokeID = 1,\n+           linkedID = asn1_NOVALUE,\n+           operationCode = updateLocation,\n+           parameter =\n+             #'UpdateLocationArg'{\n+               imsi = IMSI,\n+               'msc-Number' = CallingGTBCD,\n+               'vlr-Number' = CallingGTBCD\n+             }\n+         }\n+       }\n+     ]\n+ },\n")),(0,o.kt)("p",null,"I was quite happy with the results, even though they were slow, until\nI saw how it treated maps"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-      parameters =\n-          #{called_party_addr =>\n-                #sccp_addr{\n-                ... },\n-            calling_party_addr =>\n-                #sccp_addr{\n-                ... },\n-            data =>\n-                #'Continue'{\n+         parameters =\n+             #{\n+                 called_party_addr\n+                 =>\n+                 #sccp_addr{\n+                   ...\n+                 },\n+                 calling_party_addr\n+                 =>\n+                 #sccp_addr{\n+                   ...\n+                 },\n+                 data\n+                 =>\n+                 #'Continue'{\n")),(0,o.kt)("p",null,"I can't say that I easily understand what the parameters are and which\nthe values are with this formatting. It burns in my eyes."),(0,o.kt)("h2",{id:"erl_tidy-and-erl_tidy"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/tsloughter/erl_tidy"},"erl_tidy")," and ",(0,o.kt)("a",{parentName:"h2",href:"https://erlang.org/documentation/doc-11.2/lib/syntax_tools-2.5/doc/html/erl_tidy.html"},"erl_tidy")),(0,o.kt)("p",null,"So I found two ",(0,o.kt)("inlineCode",{parentName:"p"},"erl_tidy")," projects, one is included in the Erlang/OTP\nlibraries. The other one seems just to be a rebar3 wrapper around the\nfirst one, so I'll just talk about the former one."),(0,o.kt)("p",null,"Under the hood this library uses ",(0,o.kt)("inlineCode",{parentName:"p"},"erl_prettypr:format/2"),", which prints\nthe abstract syntax tree. This should work well, but gives weird\nindentation problems.  For instance when it comes to records it will\nnot add a newline before the first field, so the lines will become\nquite long, and when the lines become close to the paper width of the\ndocument then it inserts too many newlines."),(0,o.kt)("p",null,"Visualising with this example again"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-        components =\n-            [{invoke,\n-              #'Invoke'{\n-                 invokeID = 1,linkedID = asn1_NOVALUE,\n-                 operationCode = updateLocation,\n-                 parameter =\n-                     #'UpdateLocationArg'{\n-                        imsi = IMSI,\n-                        'msc-Number' = CallingGTBCD,\n-                        'vlr-Number' = CallingGTBCD}}}]},\n+     components =\n+    [{invoke,\n+      #'Invoke'{invokeID\n+            =\n+            1,\n+            linkedID\n+            =\n+            asn1_NOVALUE,\n+            operationCode\n+            =\n+            updateLocation,\n+            parameter\n+            =\n+            #'UpdateLocationArg'{imsi\n+                         =\n+                         IMSI,\n+                         'msc-Number'\n+                         =\n+                         CallingGTBCD,\n+                         'vlr-Number'\n+                         =\n+                         CallingGTBCD}}}]},\n")),(0,o.kt)("p",null,"There are also some issues with ",(0,o.kt)("inlineCode",{parentName:"p"},"erl_prettypr"),"; it throws an exception\nwhen there are argumented macro functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-erlang"},"-define(MACRO(), object).\nfoo(?MACRO()) ->\n  ok.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-erlang"},"** exception exit: no_translation\n     in function  io:put_chars/3\n        called as io:put_chars(<0.4843.0>,unicode,\n                               [...])\n     in call from erl_tidy:output/4 (erl_tidy.erl, line 431)\n     in call from erl_tidy:write_module/3 (erl_tidy.erl, line 413)\n     in call from erl_tidy:file_2/2 (erl_tidy.erl, line 335)\n     in call from erl_tidy:file_1/3 (erl_tidy.erl, line 310)\n")),(0,o.kt)("h2",{id:"rebar3_format"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/AdRoll/rebar3_format"},"rebar3_format")),(0,o.kt)("p",null,"I had an issue when installing this plugin. It was not as easy as\nadding ",(0,o.kt)("inlineCode",{parentName:"p"},"rebar3_format")," to plugins in the rebar3 config. The reason I\nhad problems with it was that the plugin depends on\n",(0,o.kt)("inlineCode",{parentName:"p"},"inaka/katana_code")," which for some reason did not get pulled in\nproperly and was missing some vital files. The issue could be resolved\nby deleting the user rebar3 cache (",(0,o.kt)("inlineCode",{parentName:"p"},"rm -rf ~/.cache/rebar3/"),") as\nexplained in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdRoll/rebar3_format/issues/80"},"this issue")),(0,o.kt)("p",null,"After installation you need to specify where the source files for\nformatting can be found. This would probably not be needed if we did\nnot use an Erlang umberella project (an umberella project is when\nthere are subapplications residing in your main application).  Here is\nwhere I found out that the command line option ",(0,o.kt)("inlineCode",{parentName:"p"},"--files\napps/**/{src,include}/*.?rl")," is apparantly not the same as specifying\n",(0,o.kt)("inlineCode",{parentName:"p"},"{format, [{files, [\u201capps/**/{src,include}/*.?rl\u201d]}]}")," in the\nconfig. The command line options finds only one file, while the config\nparameter works as expected."),(0,o.kt)("p",null,"Formatting-wise it is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"erl_tidy"),". This is because it uses\ninakas ",(0,o.kt)("inlineCode",{parentName:"p"},"katana_code")," which in its turn uses ",(0,o.kt)("inlineCode",{parentName:"p"},"erl_tidy"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-           components =\n-               [{invoke,\n-                 #'Invoke'{\n-                    invokeID = 1,linkedID = asn1_NOVALUE,\n-                    operationCode = updateLocation,\n-                    parameter =\n-                        #'UpdateLocationArg'{\n-                           imsi = IMSI,\n-                           'msc-Number' = CallingGTBCD,\n-                           'vlr-Number' = CallingGTBCD}}}]},\n+                                      components =\n+                                          [{invoke,\n+                                            #'Invoke'{invokeID = 1,\n+                                                      linkedID =\n+                                                          asn1_NOVALUE,\n+                                                      operationCode =\n+                                                          updateLocation,\n+                                                      parameter =\n+                                                          #'UpdateLocationArg'{imsi\n+                                                                                   =\n+                                                                                   IMSI,\n+                                                                               'msc-Number'\n+                                                                                   =\n+                                                                                   CallingGTBCD,\n+                                                                               'vlr-Number'\n+                                                                                   =\n+                                                                                   CallingGTBCD}}}]},\n")),(0,o.kt)("p",null,"Problem is that both ",(0,o.kt)("inlineCode",{parentName:"p"},"erl_tidy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"katana_code")," have multiple issues\nwith macros. It is hard to process format code which include macros\nwithout preprocessing the macros."),(0,o.kt)("h2",{id:"eryngii"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/shiguredo/eryngii"},"eryngii")),(0,o.kt)("p",null,"This was a project I found in github. It is written in oCaml, and has\nbeen archived by it's owner. I really do not want to install oCaml, so\nI just leave it here as a reference."),(0,o.kt)("h2",{id:"elvis"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/inaka/elvis"},"elvis")),(0,o.kt)("p",null,"This is a bonus; it is not a formatter but a linter."),(0,o.kt)("p",null,"One difference between formatters and linters are that formatters\nchange the code into a uniform format, and linters warn or fail when\nrules are broken. Linters can also check other things as nesting level."),(0,o.kt)("p",null,"This article by Brujo Benavides describe it pretty well."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@elbrujohalcon/are-formatters-better-than-linters-cbab91189be3"},"Are formatters better than linters?")),(0,o.kt)("p",null,"Setting it up you need to configure a ruleset and save in a special\nElvis config file in the repo. This config specifies which linting\nrules to apply to which files."),(0,o.kt)("p",null,"For me it took 8-9 minutes for it to execute linting on our code base\nwith the example ruleset that is proposed by the tool."),(0,o.kt)("h1",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Sadly I couldn't find any good alternatives that fits our\npurposes. There are issues with macros, or execution time."),(0,o.kt)("p",null,"I have to put this on the shelf again for a while, with just a dream\nof uniform code."),(0,o.kt)("h1",{id:"edit-2020-10-01"},"Edit: 2020-10-01"),(0,o.kt)("p",null,"I forgot to update this blogpost, but something amazing happend."),(0,o.kt)("p",null,"After I wrote this blog post I contacted the maintainer of\nsteamroller, and told him about the slowness I experienced, and some\nother difficulties.  One day later he had found and fixed an algorithm\ngoing from an ",(0,o.kt)("inlineCode",{parentName:"p"},"O(n^2)")," complexity to an ",(0,o.kt)("inlineCode",{parentName:"p"},"O(n)"),". When retrying it on our\ncode base, things went from minutes to seconds!"),(0,o.kt)("p",null,"He also removed and improved some of the ambiguous configuration\nparameters."),(0,o.kt)("p",null,"I haven't yet started to look at the map formatting issues I had, but\nmaybe that is improved as well. Anyway I'll have to leave that for\nanother hackday."))}c.isMDXComponent=!0}}]);