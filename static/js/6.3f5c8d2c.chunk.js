(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{208:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var r=a(4),c=a(1),n=a(35),s=a(32),i=a(49),o=(a(97),a.p+"static/media/mjolnir.61f31e18.png"),l=a(0),u=function(e){var t=e.data,a=t.name,r=t.description,c=t.thumbnail,n=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:c,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:a}),Object(l.jsx)("p",{className:"randomchar__descr",children:r}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],n=t[1],j=Object(s.a)(),b=j.getCharacter,m=j.clearError,d=j.process,h=j.setProcess;Object(c.useEffect)((function(){O();var e=setInterval(O,6e4);return function(){clearInterval(e)}}),[]);var f=function(e){n(e)},O=function(){m();var e=Math.floor(400*Math.random())+1011e3;b(e).then(f).then((function(){return h("confirmed")}))};return Object(l.jsxs)("div",{className:"randomchar",children:[Object(i.a)(d,u,a),Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:O,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},b=a(31),m=a(38),d=a(33),h=(a(98),function(e){var t=Object(c.useState)([]),a=Object(r.a)(t,2),n=a[0],i=a[1],o=Object(c.useState)(!1),u=Object(r.a)(o,2),j=u[0],h=u[1],f=Object(c.useState)(210),O=Object(r.a)(f,2),p=O[0],x=O[1],v=Object(c.useState)(!1),g=Object(r.a)(v,2),_=g[0],y=g[1],N=Object(s.a)(),k=N.getAllCharacters,w=N.process,C=N.setProcess;Object(c.useEffect)((function(){T(p,!0)}),[]);var T=function(e,t){h(!t),k(e).then(E).then((function(){return C("confirmed")}))},E=function(e){var t=!1;e.length<9&&(t=!0),i((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e))})),h((function(e){return!1})),x((function(e){return e+9})),y((function(e){return t}))},S=Object(c.useRef)([]),F=function(e){S.current.forEach((function(e){return e.classList.remove("char__item_selected")})),S.current[e].classList.add("char__item_selected"),S.current[e].focus()};var P=Object(c.useMemo)((function(){return function(e,t,a){switch(e){case"waiting":return Object(l.jsx)(m.a,{});case"loading":return a?Object(l.jsx)(t,{}):Object(l.jsx)(m.a,{});case"confirmed":return Object(l.jsx)(t,{});case"error":return Object(l.jsx)(d.a,{});default:throw new Error("Unexpected process state")}}(w,(function(){return function(t){var a=t.map((function(t,a){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(r={objectFit:"unset"}),Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return S.current[a]=e},onClick:function(){e.onCharSelected(t.id),F(a)},onKeyPress:function(r){" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(t.id),F(a))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:r}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:a})}(n)}),j)}),[w]);return Object(l.jsxs)("div",{className:"char__list",children:[P,Object(l.jsx)("button",{className:"button button__main button__long",disabled:j,style:{display:_?"none":"block"},onClick:function(){return T(p)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),f=(a(99),function(e){var t=e.data,a=t.name,r=t.description,c=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:c,alt:a,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:a}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:r}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),O=function(e){var t=Object(c.useState)(null),a=Object(r.a)(t,2),n=a[0],o=a[1],u=Object(s.a)(),j=u.getCharacter,b=u.clearError,m=u.process,d=u.setProcess;Object(c.useEffect)((function(){h()}),[e.charId]);var h=function(){var t=e.charId;t&&(b(),j(t).then(O).then((function(){return d("confirmed")})))},O=function(e){o(e)};return Object(l.jsx)("div",{className:"char__info",children:Object(i.a)(m,f,n)})},p=a(213),x=a(214),v=a(5),g=(a(208),function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(s.a)(),o=i.loading,u=i.error,j=i.getCharacterByName,b=i.clearError,m=function(e){n(e)},h=u?Object(l.jsx)("div",{className:"char__search-critical-error",children:Object(l.jsx)(d.a,{})}):null,f=a?a.length>0?Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",a[0].name," page?"]}),Object(l.jsx)(v.b,{to:"/characters/".concat(a[0].id),className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"To page"})})]}):Object(l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(l.jsxs)("div",{className:"char__search-form",children:[Object(l.jsx)(p.d,{initialValues:{charName:""},validationSchema:x.a({charName:x.b().required("This field is required")}),onSubmit:function(e){var t,a=e.charName;t=a,b(),j(t).then(m)},children:Object(l.jsxs)(p.c,{children:[Object(l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(p.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(l.jsx)("button",{type:"submit",className:"button button__main",disabled:o,children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(p.a,{component:"div",className:"char__search-error",name:"charName"})]})}),f,h]})}),_=a(23),y=a(24),N=a(28),k=a(29),w=function(e){Object(N.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(_.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={error:!1},e}return Object(y.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(d.a,{}):this.props.children}}]),a}(a(11).Component),C=a.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(l.jsx)("title",{children:"Marvel information portal"})]}),Object(l.jsx)(w,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(w,{children:Object(l.jsx)(h,{onCharSelected:function(e){s(e)}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(w,{children:Object(l.jsx)(O,{charId:a})}),Object(l.jsx)(w,{children:Object(l.jsx)(g,{})})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:C,alt:"vision"})]})}},32:function(e,t,a){"use strict";var r=a(36),c=a.n(r),n=a(37),s=a(4),i=a(1);t.a=function(){var e=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),a=t[0],r=t[1];return{request:Object(i.useCallback)(function(){var e=Object(n.a)(c.a.mark((function e(t){var a,n,s,i,o,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},r("loading"),e.prev=4,e.next=7,fetch(t,{method:a,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),r("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){r("loading")}),[]),process:a,setProcess:r}}(),t=e.request,a=e.clearError,r=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=440faf1adce315bae9ba2b5a45d3b170",j=function(){var e=Object(n.a)(c.a.mark((function e(){var a,r,n=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:210,e.next=3,t("".concat(l,"characters?limit=9&offset=").concat(a,"&").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(c.a.mark((function e(a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters?name=").concat(a,"&").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(f));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(c.a.mark((function e(a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters/").concat(a,"?").concat(u));case 2:return r=e.sent,e.abrupt("return",f(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(c.a.mark((function e(){var a,r,n=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,t("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(a,"&").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(n.a)(c.a.mark((function e(a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"comics/").concat(a,"?").concat(u));case 2:return r=e.sent,e.abrupt("return",O(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return{id:e.id,name:e.name,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",wiki:e.urls[1].url,homepage:e.urls[0].url,comics:e.comics.items}},O=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"}};return{clearError:a,process:r,setProcess:o,getAllCharacters:j,getCharacterByName:b,getCharacter:m,getAllComics:d,getComic:h}}},33:function(e,t,a){"use strict";var r=a.p+"static/media/error.42292aa1.gif",c=a(0);t.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},38:function(e,t,a){"use strict";var r=a(0);t.a=function(){return Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(r.jsx)("g",{transform:"translate(80,50)",children:Object(r.jsx)("g",{transform:"rotate(0)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(r.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(r.jsx)("g",{transform:"rotate(45)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(r.jsx)("g",{transform:"translate(50,80)",children:Object(r.jsx)("g",{transform:"rotate(90)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(r.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(r.jsx)("g",{transform:"rotate(135)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(r.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(r.jsx)("g",{transform:"rotate(180)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(r.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(r.jsx)("g",{transform:"rotate(225)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(r.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(r.jsx)("g",{transform:"rotate(270)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(r.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(r.jsx)("g",{transform:"rotate(315)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})}},49:function(e,t,a){"use strict";var r=a(38),c=a(33),n=(a(51),a(0)),s=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,a){switch(e){case"waiting":return Object(n.jsx)(s,{});case"loading":return Object(n.jsx)(r.a,{});case"confirmed":return Object(n.jsx)(t,{data:a});case"error":return Object(n.jsx)(c.a,{});default:throw new Error("Unexpected process state")}}},51:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}}]);
//# sourceMappingURL=6.3f5c8d2c.chunk.js.map