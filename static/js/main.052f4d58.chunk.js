(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),r=a(7),n=a.n(r),d=(a(12),a(13),a(6)),l=a(3),s={light:{appBg:"#DDDDDD",textColor:"#FFFFFF",inputColor:"#AAAAAA",addBtnColor:"#40D1FF",cardBgGreen:"#59BA50",cardBgRed:"#BA5050",delBtnColor:"rgba(196, 196, 196, 0.5)",delBtnTextColor:"#FFFFFF"},dark:{appBg:"#333333",textColor:"#DDDDDD",inputColor:"#555555",addBtnColor:"#265766",cardBgGreen:"#2D4A2A",cardBgRed:"#552828",delBtnColor:"rgba(37, 37, 37, 0.5)",delBtnTextColor:"rgba(221, 221, 221, 0.5)"}},i=o.a.createContext(),u=a(0);function j(e){var t=e.addCard,a=Object(c.useContext)(i),r=o.a.useState(""),n=Object(l.a)(r,2),d=n[0],s=n[1];return Object(u.jsxs)("form",{className:"add-card",onSubmit:function(e){d&&(t(d),s("")),e.preventDefault()},children:[Object(u.jsx)("input",{className:"add-card__input-field",value:d,onChange:function(e){s(e.target.value)},type:"text",placeholder:"enter new task...",style:{backgroundColor:a.inputColor,color:a.textColor}}),Object(u.jsx)("input",{className:"add-card__btn",type:"submit",value:"+",style:{backgroundColor:a.addBtnColor,color:a.textColor}})]})}function b(e){var t=e.changeTheme;return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"themeCheckbox",children:[Object(u.jsx)("input",{className:"check",type:"checkbox",id:"newchec",onChange:function(){t()}}),Object(u.jsx)("label",{htmlFor:"newchec"})]})})}function m(e){var t,a=e.card,o=e.index,r=e.markCard,n=e.deleteCard,d=Object(c.useContext)(i);return Object(u.jsxs)("div",{className:"card",onClick:function(){r(o)},style:{backgroundColor:a.isDone?d.cardBgGreen:d.cardBgRed},children:[Object(u.jsx)("div",{className:"card__text",style:{color:d.textColor},children:a.text}),Object(u.jsx)("div",{className:"card__delete-btn",onClick:function(e){e.stopPropagation(),n(o)},style:{backgroundColor:d.delBtnColor,color:d.delBtnTextColor},children:"+"}),Object(u.jsx)("div",{className:"card__status",style:{color:d.textColor},children:a.isDone?"completed":"not completed"}),Object(u.jsxs)("div",{className:"card_timestamp",style:{color:d.textColor},children:[" ",(t=new Date(a.timestamp),"".concat(t.toLocaleDateString().slice(0,5),"\xa0\xa0").concat(t.toLocaleTimeString().slice(0,5)))]})]})}function x(e){var t=e.cards,a=e.markCard,c=e.deleteCard;return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"cards",children:t.map((function(e,t){return Object(u.jsx)(m,{card:e,index:t,markCard:a,deleteCard:c},e.id)}))})})}var p=a(17);function C(){var e=Object(c.useState)(s.light),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(c.useState)(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[{id:Object(p.a)(),text:"This is a simple todo",isDone:!1,timestamp:new Date}]),n=Object(l.a)(r,2),m=n[0],C=n[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(m))})),Object(u.jsx)(i.Provider,{value:a,children:Object(u.jsxs)("div",{className:"app",style:{backgroundColor:a.appBg},children:[Object(u.jsx)(b,{changeTheme:function(){o(a===s.dark?s.light:s.dark)}}),Object(u.jsx)(j,{addCard:function(e){C([].concat(Object(d.a)(m),[{id:Object(p.a)(),text:e,isDone:!1,timestamp:new Date}]))}}),Object(u.jsx)(x,{cards:m,markCard:function(e){C(m.map((function(t,a){return a===e&&(t.isDone=!t.isDone),t})))},deleteCard:function(e){var t=Object(d.a)(m);t.splice(e,1),C(t)}})]})})}n.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.052f4d58.chunk.js.map