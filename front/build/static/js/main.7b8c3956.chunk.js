(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{24:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(17),r=c.n(s),i=c(9),o=c(36),d=c(11),l=c(4),u="SET_PRODUCTS",j="SET_PRODUCT",m="SET_CART",b="SET_CHECKED_ITEMS",h={cart:[]},_={products:[],product:{},checkedItems:[]},p=Object(d.b)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{products:t.payload});case j:return Object(l.a)(Object(l.a)({},e),{},{product:t.payload});case b:return Object(l.a)(Object(l.a)({},e),{},{checkedItems:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(l.a)(Object(l.a)({},e),{},{cart:t.payload});default:return e}}}),O=c(23),x=c(35),f=c.n(x),v="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,N={key:"root",storage:f.a},g=Object(O.a)(N,p),k=Object(d.d)(g,v(Object(d.a)(o.a))),C=Object(O.b)(k),y=c(3),S=c(38),E=c(2),w=c(5),T=(c(24),c(0)),q=function(){return Object(T.jsxs)("div",{className:"breadcrumbs",children:[Object(T.jsx)(i.b,{to:"/",children:Object(T.jsx)("span",{className:"breadcrumbs__text",children:"Inicio"})}),Object(T.jsx)("i",{className:"bx bx-chevron-right breadcrumbs__icon"}),Object(T.jsx)("span",{className:"breadcrumbs__text",children:"Productos"})]})},B=[{name:"Mac"},{name:"iPad"},{name:"iPhone"},{name:"Watch"},{name:"Audio"},{name:"Accesorios"},{name:"Ofertas"}],I=c(10),P=c.n(I),A="https://ecomsur.herokuapp.com",L=function(e){return{type:m,payload:e}},M=c(14),R=function(e,t){return t.quantity<t.countInStock?e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity+(e._id===t._id?1:0)})})):(P.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",P.a.stopTimer),e.addEventListener("mouseleave",P.a.resumeTimer)}}).fire({icon:"info",title:"Llegaste al stock maximo de este producto"}),e)},$=function(e){return e.reduce((function(e,t){return e+t.price*(t.quantity||1)}),0).toFixed(3)},D=function(e,t,c,n){if(void 0===t.find((function(t){return t._id===e._id}))){c(n([].concat(Object(M.a)(t),[Object(l.a)(Object(l.a)({},e),{},{quantity:1})]))),P.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2500,timerProgressBar:!0,showCloseButton:!0,didOpen:function(e){e.addEventListener("mouseenter",P.a.stopTimer),e.addEventListener("mouseleave",P.a.resumeTimer)}}).fire({icon:"success",inputLabel:"Message",title:"Producto: <br>".concat(e.name,"<br>Agregado Correctamente")})}else{var a=null===t||void 0===t?void 0:t.find((function(t){return t._id===e._id}));c(n(R(t,a))),P.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2500,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",P.a.stopTimer),e.addEventListener("mouseleave",P.a.resumeTimer)}}).fire({icon:"info",title:"Ya agregaste este producto"})}},F=(c(64),function(){var e=Object(y.c)((function(e){return e.cart})).cart,t=Object(y.b)();return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"cart",children:[e.length?Object(T.jsxs)(T.Fragment,{children:[e.map((function(c,n){return Object(T.jsx)("div",{className:"cart-content",children:Object(T.jsxs)("div",{className:"cart__item",children:[Object(T.jsx)("img",{src:"".concat(A).concat(c.image),alt:"",width:50}),Object(T.jsxs)("div",{className:"cart__item-info",children:[Object(T.jsx)("span",{children:c.name}),Object(T.jsx)("span",{className:"cart__item-info__price",children:"$".concat(c.price)}),Object(T.jsxs)("div",{className:"cart__item-info-quantity",children:[Object(T.jsxs)("div",{className:"cart__item-info-quantity btn",children:[Object(T.jsx)("div",{className:"cart__item-info-quantity__more",onClick:function(){return function(c){var n=[];n=c.quantity>1?e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity-(e._id===c._id?1:0)})})):e.filter((function(e){return e._id!==c._id})),t(L(n))}(c)},children:Object(T.jsx)("span",{className:"text-btn",children:"-"})}),Object(T.jsx)("span",{className:"text-btn",children:c.quantity}),Object(T.jsx)("div",{className:"cart__item-info-quantity__more",onClick:function(){return t(L(R(e,c)))},children:Object(T.jsx)("span",{className:"text-btn",children:"+"})})]}),Object(T.jsx)("div",{className:"cart__item-info-deleted",onClick:function(){return n=c,void P.a.fire({text:"\xbfSeguro que desea eliminar este art\xedculo del carrito de la compra?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Eliminar"}).then((function(c){if(c.isConfirmed){var a=e.filter((function(e){return e._id!==n._id}));t(L(a))}}));var n},children:Object(T.jsx)("i",{className:"bx bx-trash pointer"})})]})]})]})},n)})),Object(T.jsxs)("p",{className:"cart__subtotal",children:["Subtotal: \xa0",Object(T.jsx)("span",{className:"cart__subtotal-numb",children:"$".concat($(e))})]}),Object(T.jsx)(i.b,{to:"/checkout",className:"link",children:Object(T.jsx)("button",{className:"cart__pedidoBtn",children:"Realizar Pedido"})})]}):Object(T.jsx)("p",{className:"cart__texts",children:"No tienes ning\xfan art\xedculo en tu carrito."}),Object(T.jsx)("p",{className:"cart__textShopping",children:"Continar comprando"}),Object(T.jsx)("h3",{className:"cart__textSend",children:"El env\xedo es GRATIS"})]})})}),U=function(){return Object(T.jsx)("input",{className:"input-search",type:"text",placeholder:"Buscar producto"})},X=function(){var e=Object(y.c)((function(e){return e.cart})).cart,t=Object(n.useState)(!1),c=Object(w.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!1),o=Object(w.a)(r,2),d=o[0],l=o[1],u=function(){s(!a)};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("header",{className:"header",children:[Object(T.jsx)("div",{className:"header__logo",children:Object(T.jsx)(i.b,{to:"/",children:Object(T.jsx)("img",{src:"../../../assets/img/logo.svg",alt:"logo"})})}),a?Object(T.jsx)("div",{className:"header__search",children:Object(T.jsx)(U,{})}):Object(T.jsx)("nav",{className:"header__navigation",children:B.map((function(e,t){return Object(T.jsxs)("div",{className:"header__navigation-item pointer",children:[Object(T.jsx)("span",{className:"header__navigation-item__text",children:e.name},t),Object(T.jsx)("img",{src:"../../../assets/img/select-bg.svg",className:"header__navigation-item__select",alt:"select-bg.svg"})]},t)}))}),Object(T.jsxs)("div",{className:"header__information",children:[!a&&Object(T.jsxs)("div",{className:"header__information-store",children:[Object(T.jsx)("img",{src:"../../../assets/img/tiendas.svg",alt:"store"}),Object(T.jsx)("span",{className:"header__information-store__text",children:"Tiendas"})]}),Object(T.jsxs)("div",{className:"header__information-user",children:[a?Object(T.jsx)("div",{className:"header__information-user-hide pointer",onClick:u,children:Object(T.jsx)("span",{className:"bold",children:"X"})}):Object(T.jsx)("i",{className:"bx bx-search header__information-user__icon pointer",onClick:u}),Object(T.jsxs)("div",{className:"relative",children:[Object(T.jsx)("i",{className:"bx bx-cart header__information-user__icon pointer",onClick:function(){return l(!d)}}),Object(T.jsxs)("div",{className:"ball",children:[Object(T.jsx)("span",{className:"ball__numb",children:e.length})," "]})]}),Object(T.jsx)("i",{className:"bx bx-user header__information-user__icon pointer"})]})]})]}),d&&Object(T.jsx)("div",{className:"cart__content",children:Object(T.jsx)(F,{})}),Object(T.jsx)(q,{})]})},z=(c(65),function(e){var t=e.name,c=void 0===t?"":t,n=e.checked,a=void 0!==n&&n,s=e.onChange,r=void 0===s?function(){}:s;return Object(T.jsxs)("div",{className:"checkboxItem pointer",children:[Object(T.jsx)("input",{className:"checkboxItem__checkbox pointer",type:"checkbox",id:c,name:c,onChange:r,checked:a}),Object(T.jsx)("label",{htmlFor:c,className:"checkboxItem__label pointer",children:c})]})}),G=c(22),J=c.n(G),H=c(39),K=c(40),V=c.n(K),W=function(e){for(var t=[],c=String(e).includes("."),n=1;n<=5;n++)n<=Math.ceil(e)?n===Math.ceil(e)&&c?t.push("bxs-star-half"):t.push("bxs-star"):t.push("bx-star");return t},Y=function(e){var t=e.rating,c=void 0===t?1:t,a=Object(n.useState)([]),s=Object(w.a)(a,2),r=s[0],i=s[1],o=Object(n.useState)(c),d=Object(w.a)(o,2),l=d[0],u=d[1],j=Object(n.useState)(!0),m=Object(w.a)(j,2),b=m[0],h=m[1];return Object(n.useEffect)((function(){return i(W(c))}),[c]),Object(T.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(e,t){return Object(T.jsx)("i",{className:"bx ".concat(e," rating-star"),onClick:function(){u(t+1),h(!1)},onMouseOver:function(){i(W(t+1)),h(!0)},onMouseLeave:function(){return b&&i(W(l))}},"star".concat(t))}))})},Q=(c(85),function(e){var t=e.item,c=Object(y.b)(),n=Object(y.c)((function(e){return e.cart})).cart,a=t.name,s=t.price,r=t.image,o=t.countInStock,d=t.rating;return Object(T.jsxs)("div",{className:"product-cart",children:[Object(T.jsx)(i.b,{to:"/product/".concat(t._id),onClick:function(){return c({type:j,payload:t})},children:Object(T.jsx)("img",{src:"".concat(A).concat(r),alt:r,width:200})}),Object(T.jsx)("h3",{className:"product-cart__text",children:a}),Object(T.jsx)(Y,{rating:d}),Object(T.jsx)("p",{className:"product-cart__price",children:"$".concat(s)}),o?Object(T.jsx)("button",{className:"product-cart__addCart",onClick:function(){return D(t,n,c,L)},children:Object(T.jsx)("i",{className:"bx bxs-cart-add"})}):Object(T.jsx)("span",{className:"product__description-stock min",children:"Agotado"})]})}),Z=function(e,t){return Array.from(new Set(e.map((function(e){return e[t]}))))},ee=(c(86),function(){var e=Object(y.b)(),t=Object(y.c)((function(e){return e.products})),c=t.products,a=t.checkedItems,s=Object(n.useState)(c),r=Object(w.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)(""),l=Object(w.a)(d,2),j=l[0],m=l[1];Object(n.useEffect)((function(){e(function(){var e=Object(H.a)(J.a.mark((function e(t){var c,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.a.get("".concat("https://ecomsur.herokuapp.com/api/products"));case 3:c=e.sent,n=c.data,t({type:u,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(n.useEffect)((function(){o(h().length?h():c)}),[a]);var h=function(){var e=["name","brand"];return c.filter((function(t){return e.some((function(e){return null===a||void 0===a?void 0:a.includes(t[e])}))}))},_=function(t){var c=t.target,n=c.name,s=c.checked?[].concat(Object(M.a)(a),[n]):null===a||void 0===a?void 0:a.filter((function(e){return e!==n}));e(function(e){return{type:b,payload:e}}(s))};return Object(T.jsxs)("div",{className:"product-list",children:[Object(T.jsxs)("div",{className:"product-list__filter",children:[Object(T.jsx)("h4",{className:"product-list__filter-text",children:"Tipo de Producto"}),Object(T.jsx)("div",{className:"product-list__filter-checkbox",children:Z(c,"name").map((function(e){return Object(T.jsx)(z,{name:e,checked:null===a||void 0===a?void 0:a.includes(e),onChange:_},e)}))}),Object(T.jsx)("h4",{className:"product-list__filter-text",children:"Marca"}),Object(T.jsx)("div",{className:"product-list__filter-checkbox",children:Z(c,"brand").map((function(e){return Object(T.jsx)(z,{name:e,checked:null===a||void 0===a?void 0:a.includes(e),onChange:_},e)}))}),Object(T.jsx)("h4",{className:"product-list__filter-text",children:"Categor\xeda"}),Object(T.jsx)("div",{className:"product-list__filter-checkbox",children:Z(c,"category").map((function(e){return Object(T.jsx)(z,{name:e,checked:null===a||void 0===a?void 0:a.includes(e),onChange:_},e)}))})]}),Object(T.jsxs)("div",{className:"product-list__cart",children:[Object(T.jsxs)("div",{className:"product-list__cart-filter",children:[Object(T.jsxs)("span",{className:"product-list__cart-filter__text",children:[i.length," Art\xedculo","".concat(i.length>1?"s":"")]}),Object(T.jsxs)("select",{className:"product-list__cart-filter__select pointer",onChange:function(e){var t,n,a=e.target.value;m(a),o("all"===a?c:(t=Object(M.a)(c),n=a,t.sort((function(e,t){return t[n]-e[n]}))))},value:j,children:[Object(T.jsx)("option",{value:"all",children:"All"}),Object(T.jsx)("option",{value:"numReviews",children:"Relevancia "}),Object(T.jsx)("option",{value:"rating",children:"Rating"})]})]}),Object(T.jsx)("div",{className:"product-list__cart-content",children:i.map((function(e){return Object(T.jsx)(Q,{item:e},e._id)}))})]})]})}),te=(c(87),function(){var e=Object(y.c)((function(e){return e.products})).product,t=Object(y.c)((function(e){return e.cart})).cart,c=Object(y.b)(),n=e.name,a=e.image,s=e.price,r=e.description,i=e.countInStock,o=e.rating;return Object(T.jsxs)("div",{className:"product",children:[Object(T.jsx)("div",{className:"product__img",children:Object(T.jsx)("img",{src:"".concat(A).concat(a),alt:a,width:900})}),Object(T.jsxs)("div",{className:"product__description",children:[Object(T.jsx)("span",{className:"product__description-name",children:n}),Object(T.jsx)("span",{className:"product__description-price",children:"$".concat(s)}),Object(T.jsx)(Y,{rating:o}),!i&&Object(T.jsx)("span",{className:"product__description-stock",children:"Agotado"}),Object(T.jsx)("span",{className:"product__description-description",children:r}),i?Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("button",{className:"cart__pedidoBtn",onClick:function(){return D(e,t,c,L)},children:"Agregar al Carrito"})}):null]})]})}),ce=c(18),ne=(c(88),function(){var e=Object(n.useState)({name:"",document:"",lastName:"",addres:"",phone:""}),t=Object(w.a)(e,2),c=t[0],a=t[1],s=c.name,r=c.document,i=c.lastName,o=c.addres,d=c.phone,u=function(e){var t=e.target;a(Object(l.a)(Object(l.a)({},c),{},Object(ce.a)({},t.name,t.value)))};return Object(T.jsxs)("form",{className:"form",children:[Object(T.jsxs)("select",{className:"form__input",id:"category",children:[Object(T.jsx)("option",{value:"C\xe9dula de Ciudadanpia",children:"C\xe9dula de Ciudadan\xeda"}),Object(T.jsx)("option",{value:"C\xe9dula de Extranjeria",children:"C\xe9dula de Extranjeria "})]}),Object(T.jsx)("input",{className:"form__input",type:"number",name:"document",onChange:u,value:r,placeholder:"No. de C\xe9dula"}),Object(T.jsx)("input",{className:"form__input",type:"text",name:"name",value:s,placeholder:"Nombre",onChange:u}),Object(T.jsx)("input",{className:"form__input",type:"text",placeholder:"2do Nombre (Opcional)"}),Object(T.jsx)("input",{className:"form__input",type:"text",name:"lastName",placeholder:"Apellido",value:i,onChange:u}),Object(T.jsx)("input",{className:"form__input",type:"text",placeholder:"2do Apellido (Opcional)"}),Object(T.jsx)("input",{className:"form__input",type:"addres",name:"addres",placeholder:"Direcci\xf3n",value:o,onChange:u}),Object(T.jsx)("input",{className:"form__input",type:"number",name:"phone",placeholder:"Telefono",value:d,onChange:u})]})}),ae=(c(89),function(){var e=Object(y.c)((function(e){return e.cart})).cart;return Object(T.jsxs)("div",{className:"checkout",children:[Object(T.jsxs)("div",{className:"checkout__form",children:[Object(T.jsx)("div",{className:"checkout__form-logo",children:Object(T.jsx)("img",{src:"../../../assets/img/logo.svg",alt:"logo",width:250})}),Object(T.jsxs)("div",{className:"checkout__form-progress",children:[Object(T.jsx)(i.b,{to:"/",children:Object(T.jsx)("span",{className:"breadcrumbs__text bold grey",children:"Carrito"})}),Object(T.jsx)("i",{className:"bx bx-chevron-right breadcrumbs__icon"}),Object(T.jsx)("span",{className:"breadcrumbs__text bold grey-2",children:"1.Entrega"}),Object(T.jsx)("i",{className:"bx bx-chevron-right breadcrumbs__icon"}),Object(T.jsx)("span",{className:"breadcrumbs__text",children:"2.Pago"})]}),Object(T.jsx)("h3",{className:"grey-2 bold",children:"Direcci\xf3n Principal"}),Object(T.jsx)("div",{className:"checkout__form-data",children:Object(T.jsx)(ne,{})})]}),Object(T.jsxs)("div",{className:"checkout__products",children:[e.map((function(e,t){return Object(T.jsxs)("div",{className:"checkout__products-information",children:[Object(T.jsx)("div",{className:"checkout__products-information-img",children:Object(T.jsx)("img",{src:"".concat(A).concat(e.image),alt:"",width:40})}),Object(T.jsxs)("div",{className:"checkout__products-information-descrip",children:[Object(T.jsx)("span",{className:"checkout__products-information-descrip__name",children:e.name}),Object(T.jsxs)("span",{className:"checkout__products-information-descrip__code",children:["Codigo de producto: ",Object(T.jsx)("span",{className:"ligth",children:e._id})]}),Object(T.jsxs)("span",{className:"checkout__products-information-descrip__code",children:["Cantidad: ",Object(T.jsx)("span",{className:"ligth",children:e.quantity})]}),Object(T.jsx)("span",{className:"checkout__products-information-descrip__price",children:"$".concat(e.price*e.quantity)})]})]},t)})),Object(T.jsxs)("div",{className:"checkout__products-subtotal",children:[Object(T.jsx)("span",{className:"checkout__products-information-descrip__code",children:"Subtotal:"}),Object(T.jsx)("span",{className:"checkout__products-information-descrip__code",children:"$".concat($(e))})]}),Object(T.jsxs)("div",{className:"checkout__products-subtotal",children:[Object(T.jsx)("span",{className:"checkout__products-information-descrip__code",children:"Impuestos:"}),Object(T.jsx)("span",{className:"checkout__products-information-descrip__code",children:"$0"})]}),Object(T.jsxs)("div",{className:"checkout__products-subtotal",children:[Object(T.jsx)("span",{className:"checkout__products-information-descrip__code",children:"Costo - Entrega a Domicilio GRATIS:"}),Object(T.jsx)("span",{className:"checkout__products-information-descrip__code",children:"$0"})]}),Object(T.jsxs)("div",{className:"checkout__products-total",children:[Object(T.jsx)("span",{className:"checkout__products-information-descrip__code total",children:"Total del Pedido"}),Object(T.jsx)("span",{className:"checkout__products-information-descrip__code total-num",children:"$".concat($(e))})]}),Object(T.jsx)("div",{className:"checkout__products-btn",children:Object(T.jsx)("button",{className:"cart__pedidoBtn",children:"Finalizar Pedido"})})]})]})}),se=function(){var e=Object(E.e)().pathname;return Object(T.jsx)(y.a,{store:k,children:Object(T.jsxs)(S.a,{loading:null,persistor:C,children:["/checkout"!==e&&Object(T.jsx)(X,{}),Object(T.jsxs)(E.c,{children:[Object(T.jsx)(E.a,{path:"/",element:Object(T.jsx)(ee,{})}),Object(T.jsx)(E.a,{path:"/product/:id",element:Object(T.jsx)(te,{})}),Object(T.jsx)(E.a,{path:"/checkout",element:Object(T.jsx)(ae,{})})]})]})})};c(90);r.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(i.a,{children:Object(T.jsx)(se,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.7b8c3956.chunk.js.map