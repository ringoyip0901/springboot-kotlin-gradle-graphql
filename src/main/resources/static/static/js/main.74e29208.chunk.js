(this["webpackJsonpapollo-family-tree"]=this["webpackJsonpapollo-family-tree"]||[]).push([[0],{32:function(e,n,t){e.exports=t(50)},37:function(e,n,t){},48:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t.n(a),o=t(27),i=t.n(o),c=(t(37),t(8)),l=t(5),u=t(13),m=t(31),s=t(1),f=t(10),p=t(11),d=(t(17),new u.a({uri:"https://damp-temple-96211.herokuapp.com/graphql"}));console.log("environmental variables: ",Object({NODE_ENV:"production",PUBLIC_URL:""}));var v=new m.a({uri:"wss://damp-temple-96211.herokuapp.com/subscriptions"}),b=Object(l.d)((function(e){var n=e.query,t=Object(s.l)(n);return"OperationDefinition"===t.kind&&"subscription"===t.operation}),v,d),g=new f.c({link:b,cache:new p.a}),E=(t(48),t(20)),h=t(14),O=t(15),j=t(12);function $(){var e=Object(h.a)(["\n  mutation ($name: String!, $image: String) {\n    createPerson(name: $name, image: $image) {\n        edges {\n            node {\n                id\n                name\n                image\n            }\n        }\n    }\n  }\n"]);return $=function(){return e},e}var w=Object(j.a)($()),y=function(){var e,n,t=Object(O.a)(w),a=Object(E.a)(t,2),o=a[0];a[1].data;return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),o({variables:{name:n.value,image:e.value}}),n.value="",e.value=""}},r.a.createElement("input",{placeholder:"Name",ref:function(e){n=e}}),r.a.createElement("input",{placeholder:"image",ref:function(n){e=n}}),r.a.createElement("button",{type:"submit"},"Add Person"))};function k(){var e=Object(h.a)(["\n  subscription subscribeToFamily($offset: Int, $after: String) {\n    getEveryone(offset: $offset) {\n        allPeople(first: $offset, after: $after) {\n          edges {\n            node {\n              id\n              name\n              image\n            }\n          }\n        }\n    }\n  }\n\n"]);return k=function(){return e},e}function S(){var e=Object(h.a)(["\n    subscription getTimerSub {\n      timer {\n        x\n      }\n    }\n"]);return S=function(){return e},e}function P(){var e=Object(h.a)(["\n subscription ($offset: Int!, $after: String){\n   getEveryone(offset: $offset) {\n       allPeople(first: $offset, after: $after) {\n           edges {\n             node {\n               id\n               name\n               image\n             }\n           }\n       }\n   }\n }\n"]);return P=function(){return e},e}Object(j.a)(P()),Object(j.a)(S());var N=Object(j.a)(k()),I=function(){var e=Object(O.b)(N,{variables:{offset:1,after:"1"}}),n=e.loading,t=e.error,o=e.data;console.log(o);var i=Object(a.useState)({id:"pc"}),c=Object(E.a)(i,2);c[0],c[1];if(n)return r.a.createElement("div",null,"Loading...");if(t)return r.a.createElement("div",null,"Error...");var l=o&&o.getEveryone.allPeople.edges;return r.a.createElement("div",null,l.map((function(e,n){return r.a.createElement("div",{key:n},r.a.createElement("p",{key:n},e.node.name),r.a.createElement("img",{src:e.node.image}))})),r.a.createElement(y,null))},A=function(){return r.a.createElement(c.a,{client:g},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(I,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.74e29208.chunk.js.map