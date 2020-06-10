(this["webpackJsonpdocker-linter"]=this["webpackJsonpdocker-linter"]||[]).push([[0],{14:function(r,l,U){},21:function(r,l,U){},22:function(r,l,U){"use strict";U.r(l);var e=U(0),t=U.n(e),E=U(4),B=U.n(E),h=(U(14),U(8)),n=U(5),i=U.n(n),a=U(1),o=U(6),c=U.n(o),A=U(7),g=U.n(A);U(18),U(19),U(20),U(21);var I=function(){var r=Object(e.useState)("FROM ubuntu:18.04\n\nRUN apt-get update -y && \\\n    apt-get install -y g++ build-essential gcc libc6-dev python2.7 python2.7-dev supervisor cron vim unzip curl wget tree\n\nCOPY jdk-8u191-linux-x64.tar.gz .\n\nRUN mkdir -p /opt/jdk && \\\n    tar -zvxf jdk-8u191-linux-x64.tar.gz -C /opt/jdk && \\\n    rm jdk-8u191-linux-x64.tar.gz\n\nRUN update-alternatives --install /usr/bin/java java /opt/jdk/jdk1.8.0_191/bin/java 100 && \\\n    update-alternatives --install /usr/bin/javac javac /opt/jdk/jdk1.8.0_191/bin/javac 100 && \\\n    update-alternatives --display java && \\\n    update-alternatives --display javac && \\\n    java -version\n\nCMD java -version"),l=Object(h.a)(r,2),U=l[0],E=l[1],B=c()(U),n=B.valid,o=B.errors;return Object(e.useEffect)((function(){console.log("\x1b[33m%s\x1b[0m","Contribute to this project on GitHub at https://github.com/LogicFoundry/docker-linter")}),[]),t.a.createElement("div",{className:"App"},t.a.createElement("header",{className:"App-header"},t.a.createElement("div",{className:"Editor"},t.a.createElement(i.a,{value:U,onValueChange:E,highlight:function(r){return Object(a.highlight)(r,a.languages.js,"docker")},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:16,width:800}})),t.a.createElement("div",{className:"Text"},t.a.createElement("h4",null,n?t.a.createElement("img",{alt:"checkmark",src:g.a,className:"Checkmark"}):t.a.createElement("p",{style:{fontSize:"1.75vh"}},o[0].message,o[0].line&&" at line ".concat(o[0].line))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));B.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(r){r.unregister()})).catch((function(r){console.error(r.message)}))},7:function(r,l){r.exports="data:image/png;base64,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"},9:function(r,l,U){r.exports=U(22)}},[[9,1,2]]]);
//# sourceMappingURL=main.4c5a1bc8.chunk.js.map