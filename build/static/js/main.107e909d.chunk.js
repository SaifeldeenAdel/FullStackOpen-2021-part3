(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(15),o=t.n(c),u=t(6),a=t(3),i=t(0),s=function(e){var n=e.filterString,t=e.handleInput;return Object(i.jsxs)("div",{children:["filter: ",Object(i.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.newName,t=e.handleNameInput,r=e.newNumber,c=e.handleNumberInput,o=e.handleSubmit;return Object(i.jsxs)("form",{onSubmit:o,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:t,required:!0})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:r,onChange:c,required:!0})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},b=t(4),d=t.n(b),j="/api/persons",f=function(){return d.a.get(j).then((function(e){return e.data}))},h=function(e){return d.a.post(j,e).then((function(e){return e.data}))},m=function(e){return d.a.put("".concat(j,"/").concat(e.id),e).then((function(e){return e.data}))},O=function(e){return d.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))},p=function(e){var n=e.person,t=e.deletePerson;return Object(i.jsxs)("div",{children:[n.name,": ",n.number," ",Object(i.jsx)("button",{onClick:function(){return t(n)},children:"delete"})]})},v=function(e){var n=e.personsToShow,t=e.deletePerson;return Object(i.jsx)(i.Fragment,{children:n.map((function(e){return Object(i.jsx)(p,{person:e,deletePerson:t},e.name)}))})},x=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"notification",children:n})},w=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},g=function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),b=Object(a.a)(o,2),d=b[0],j=b[1],p=Object(r.useState)(""),g=Object(a.a)(p,2),S=g[0],N=g[1],C=Object(r.useState)(""),k=Object(a.a)(C,2),I=k[0],L=k[1],P=Object(r.useState)(null),y=Object(a.a)(P,2),T=y[0],E=y[1],q=Object(r.useState)(null),A=Object(a.a)(q,2),D=A[0],J=A[1];Object(r.useEffect)((function(){f().then((function(e){c(e)}))}),[]),Object(r.useEffect)((function(){var e=setTimeout((function(){J(null),E(null)}),3e3);return function(){clearTimeout(e)}}),[D,T]);var B=""===I?t:t.filter((function(e){if(e.name.toLowerCase().startsWith(I.toLowerCase()))return e}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(x,{message:T}),Object(i.jsx)(w,{message:D}),Object(i.jsx)(s,{filterString:I,handleInput:function(e){L(e.target.value)}}),Object(i.jsx)("h2",{children:"Add a new person"}),Object(i.jsx)(l,{newName:d,handleNameInput:function(e){j(e.target.value)},newNumber:S,handleNumberInput:function(e){(""===e.target.value||/^[0-9-\b]+$/.test(e.target.value))&&N(e.target.value)},handleSubmit:function(e){if(e.preventDefault(),t.find((function(e){if(e.name.toLowerCase()===d.toLowerCase())return!0}))){if(window.confirm("".concat(d," is already in the phonebook, do you want to replace their old number with the new one?"))){var n=t.find((function(e){return e.name.toLowerCase()===d.toLowerCase()})),r=Object(u.a)(Object(u.a)({},n),{},{number:S});m(r).then((function(e){c(t.map((function(n){return n.id!==e.id?n:e}))),j(""),N(""),E("Updated ".concat(e.name,"'s number"))})).catch((function(e){J("".concat(r.name," has been removed from the server"))}))}}else h({name:d,number:S}).then((function(e){c(t.concat(e)),j(""),N(""),E("Added ".concat(d," to phonebook"))}))}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(v,{personsToShow:B,deletePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&O(e.id).then((function(e){f().then((function(e){c(e)}))}))}})]})};t(39);o.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.107e909d.chunk.js.map