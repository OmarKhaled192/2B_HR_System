"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[493],{6493:(L,h,s)=>{s.r(h),s.d(h,{PaginationPopupModule:()=>V});var m=s(6814),N=s(6472),r=s(9552),f=s(4480),w=s(3722),A=s(9862),P=s(6340),C=s(707),c=s(6223),x=s(3530),T=s(4104),M=s(6022),Z=s(3714),b=s(6218),y=s(3965),D=s(1865),F=s(5167),_=s(5219),v=s(258),t=s(8109),J=s(1987);const k=["dt"];function S(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"div",16)(1,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.toggleNew())}),t.qZA(),t.TgZ(2,"button",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteSelectedProducts())}),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(2),t.Q6J("disabled",!e.selectedItems||!e.selectedItems.length)}}function I(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.exportCSV())}),t.qZA()}}function U(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"div",20)(1,"label",21),t._uU(2,"Name"),t.qZA(),t.TgZ(3,"input",22),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.newName=n)}),t.qZA()(),t.TgZ(4,"div",20)(5,"label",23),t._uU(6,"Notes"),t.qZA(),t.TgZ(7,"textarea",24),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.newNotes=n)}),t.qZA()(),t.TgZ(8,"div",20)(9,"button",25),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.addNew())}),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.newName),t.xp6(4),t.Q6J("ngModel",e.newNotes)}}function q(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"div",26)(1,"h5",27),t._uU(2,"Manage Items"),t.qZA(),t.TgZ(3,"span",28),t._UZ(4,"i",29),t.TgZ(5,"input",30),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.nameFilter=n)})("input",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.loadFilteredData())}),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(5),t.Q6J("ngModel",e.nameFilter)}}function H(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"th",31),t._UZ(2,"p-tableHeaderCheckbox"),t.qZA(),t.TgZ(3,"th",32),t.NdJ("click",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.sortById(n))}),t._uU(4," Id "),t._UZ(5,"p-sortIcon",33),t.qZA(),t.TgZ(6,"th",34),t.NdJ("click",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.sortByName(n))}),t._uU(7," Name "),t._UZ(8,"p-sortIcon",35),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Notes"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Actions"),t.qZA()()}}function G(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"p-tableCheckbox",36),t.qZA(),t.TgZ(3,"td")(4,"span",37),t._uU(5,"Id"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"span",37),t._uU(9,"Name"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"span",37),t._uU(13,"Notes"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"div",38)(17,"button",39),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.editProduct(a))}),t.qZA(),t.TgZ(18,"button",40),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.deleteProduct(a))}),t.qZA()()()()}if(2&i){const e=p.$implicit;t.xp6(2),t.Q6J("value",e),t.xp6(4),t.hij(" ",e.id,""),t.xp6(4),t.hij(" ",e.name,""),t.xp6(4),t.hij(" ",e.notes," ")}}function K(i,p){1&i&&(t.TgZ(0,"small",46),t._uU(1,"Name is required."),t.qZA())}const O=i=>({"ng-invalid ng-dirty":i});function R(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"div",20)(1,"label",41),t._uU(2,"Name"),t.qZA(),t.TgZ(3,"input",42),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.product.name=n)}),t.qZA(),t.YNc(4,K,2,0,"small",43),t.qZA(),t.TgZ(5,"div",20)(6,"label",44),t._uU(7,"Notes"),t.qZA(),t.TgZ(8,"textarea",45),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.product.notes=n)}),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.product.name)("ngClass",t.VKq(4,O,e.submitted&&!e.product.name)),t.xp6(1),t.Q6J("ngIf",e.submitted&&!e.product.name),t.xp6(4),t.Q6J("ngModel",e.product.notes)}}function B(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"button",47),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.hideDialog())}),t.qZA(),t.TgZ(1,"button",48),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.saveProduct(n.product.id,n.product))}),t.qZA()}}function E(i,p){if(1&i&&(t.TgZ(0,"span"),t._uU(1,"Are you sure you want to delete "),t.TgZ(2,"b"),t._uU(3),t.qZA(),t._uU(4,"?"),t.qZA()),2&i){const e=t.oxw();t.xp6(3),t.Oqu(e.product.name)}}function Q(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"button",49),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteProductDialog=!1)}),t.qZA(),t.TgZ(1,"button",50),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.confirmDelete(n.product.id))}),t.qZA()}}function j(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"button",49),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteProductsDialog=!1)}),t.qZA(),t.TgZ(1,"button",50),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.confirmDeleteSelected())}),t.qZA()}}const u=()=>({width:"450px"});let z=(()=>{class i{constructor(e,o){this._PaginationService=e,this.messageService=o,this.allData=[],this.page=1,this.itemsPerPage=3,this.selectedItems=[],this.cols=[],this.loading=!0,this.nameFilter="",this.deleteProductDialog=!1,this.deleteProductsDialog=!1,this.submitted=!1,this.productDialog=!1,this.showFormNew=!1,this.sortField="id",this.sortOrder="asc"}ngOnInit(){this.endPoint="Department",this.cols=[{field:"name",header:"Name"},{field:"notes",header:"Notes"}]}editProduct(e){this.product={...e},this.productDialog=!0}confirmDelete(e){this._PaginationService.DeleteSoftById(e).subscribe({next:()=>{this.deleteProductDialog=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},error:o=>{console.log(o)}})}addNew(){this._PaginationService.Register({name:this.newName,notes:this.newNotes}).subscribe({next:o=>{console.log(o),this.showFormNew=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"inserted success",life:3e3}),this.setFieldsNulls(),this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)},error:o=>{this.showFormNew=!1,console.log(o)}})}loadFilteredData(){this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)}setFieldsNulls(){this.newName=null,this.newNotes=null}loadData(e,o,n,a,l){this.loading=!0;let g={pageNumber:e,pageSize:o,filterValue:n,filterType:a,sortType:l};g.sortType=this.sortOrder,this._PaginationService.GetPage(g).subscribe({next:d=>{console.log(d),this.allData=d.data,console.log(d.data),this.totalItems=d.totalItems,this.loading=!1,console.log(this.selectedItems)},error:d=>{console.log(d),this.loading=!1}})}onPageChange(e){let o;console.log(e),this.page=Number(e.first/e.rows)+1,o=1===e.sortOrder?"asc":"dsc",this.sortOrder=o,this.itemsPerPage=e.rows,this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)}deleteSelectedProducts(){this.deleteProductsDialog=!0}hideDialog(){this.productDialog=!1,this.submitted=!1}deleteProduct(e){this.deleteProductDialog=!0,this.product={...e}}saveProduct(e,o){this.submitted=!0,console.log(e),console.log(o),this._PaginationService.Edit({id:o.id,name:o.name,notes:o.notes}).subscribe({next:()=>{this.hideDialog(),this.messageService.add({severity:"success",summary:"Successful",detail:"You Edit This Item",life:3e3}),this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)},error:a=>{console.log(a),alert(a)}})}toggleNew(){this.showFormNew=!this.showFormNew}exportCSV(){const n="\ufeff"+this.convertToCSV(this.selectedItems),a=new Blob([n],{type:"text/csv;charset=utf-8;"}),l=document.createElement("a");l.href=URL.createObjectURL(a),l.download="data_export_"+(new Date).getTime()+".csv",l.click()}convertToCSV(e){if(!e||!e.length)return"";let n=[];this.cols.forEach(l=>{n.push(l.field)}),console.log(n);const a=e.map(l=>n.map(g=>`"${l[g]}"`).join(","));return a.unshift(n.join(",")),a.join("\r\n")}confirmDeleteSelected(){let e=[];console.log("Selected Items :"),this.selectedItems.forEach(o=>{e.push(o.id)}),this._PaginationService.DeleteRangeSoft(e).subscribe({next:o=>{this.deleteProductsDialog=!1,this.messageService.add({severity:"success",summary:"Success",detail:"items deleted successfully",life:3e3}),this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)},error:o=>{this.messageService.add({severity:"error",summary:"Failure",detail:o.statusText,life:3e3}),this.deleteProductsDialog=!1,this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)}})}sortById(e){this.sortField="id","asc"===this.sortOrder?this.sortOrder="dsc":"dsc"===this.sortOrder&&(this.sortOrder="asc")}sortByName(e){this.sortField="name"}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(J.N),t.Y36(_.ez))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-pagination-popup"]],viewQuery:function(o,n){if(1&o&&t.Gf(k,5),2&o){let a;t.iGM(a=t.CRH())&&(n.dt=a.first)}},decls:25,vars:29,consts:[["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["header","Add New",1,"p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["selectionMode","multiple","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","dataKey","id",3,"value","paginator","rows","columns","totalRecords","selection","showCurrentPageReport","lazy","selectionChange","onLazyLoad"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Product Details",1,"p-fluid",3,"visible","modal","visibleChange"],["pTemplate","footer"],["header","Confirm",3,"visible","modal","visibleChange"],[1,"flex","align-items-center","justify-content-center"],[1,"pi","pi-exclamation-triangle","mr-3",2,"font-size","2rem"],[4,"ngIf"],[1,"my-2"],["pButton","","pRipple","","label","Add New","icon","pi pi-plus",1,"p-button-info","mx-2","px-5",3,"click"],["pButton","","pRipple","","label","Delete","icon","pi pi-trash",1,"p-button-danger","mx-2","px-5",3,"disabled","click"],["pButton","","pRipple","","label","Export","icon","pi pi-upload","pTooltip","CSV",1,"p-button-help","mx-2","px-5",3,"click"],[1,"field"],["htmlFor","new-name"],["pInputText","","placeholder","Enter Name Here","id","new-name","type","text",3,"ngModel","ngModelChange"],["htmlFor","new-notes"],["pInputTextarea","","id","new-notes","placeholder","Enter Notes Here","type","text",3,"ngModel","ngModelChange"],["pButton","","label","Insert New",1,"w-25",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","id","filter-name","type","text","placeholder","Search...",1,"w-full","sm:w-auto",3,"ngModel","ngModelChange","input"],[2,"width","3rem"],["pSortableColumn","id",3,"click"],["field","id"],["pSortableColumn","name",3,"click"],["field","name"],[3,"value"],[1,"p-column-title"],[1,"flex","crud-operations"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-info","p-button-outlined","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-outlined","p-button-danger",3,"click"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModel","ngClass","ngModelChange"],["class","ng-dirty ng-invalid",4,"ngIf"],["for","notes"],["id","notes","pInputTextarea","","required","","rows","3","cols","20",3,"ngModel","ngModelChange"],[1,"ng-dirty","ng-invalid"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-times","label","No",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Yes",1,"p-button-text",3,"click"]],template:function(o,n){1&o&&(t._UZ(0,"p-toast"),t.TgZ(1,"p-toolbar",0),t.YNc(2,S,3,1,"ng-template",1)(3,I,1,0,"ng-template",2),t.qZA(),t.TgZ(4,"p-dialog",3),t.NdJ("visibleChange",function(l){return n.showFormNew=l}),t.YNc(5,U,10,2,"ng-template",4),t.qZA(),t.TgZ(6,"p-table",5,6),t.NdJ("selectionChange",function(l){return n.selectedItems=l})("onLazyLoad",function(l){return n.onPageChange(l)}),t.YNc(8,q,6,1,"ng-template",7)(9,H,13,0,"ng-template",8)(10,G,19,4,"ng-template",9),t.qZA(),t.TgZ(11,"p-dialog",10),t.NdJ("visibleChange",function(l){return n.productDialog=l}),t.YNc(12,R,9,6,"ng-template",4)(13,B,2,0,"ng-template",11),t.qZA(),t.TgZ(14,"p-dialog",12),t.NdJ("visibleChange",function(l){return n.deleteProductDialog=l}),t.TgZ(15,"div",13),t._UZ(16,"i",14),t.YNc(17,E,5,1,"span",15),t.qZA(),t.YNc(18,Q,2,0,"ng-template",11),t.qZA(),t.TgZ(19,"p-dialog",12),t.NdJ("visibleChange",function(l){return n.deleteProductsDialog=l}),t.TgZ(20,"div",13),t._UZ(21,"i",14),t.TgZ(22,"span"),t._uU(23,"Are you sure you want to delete selected products?"),t.qZA()(),t.YNc(24,j,2,0,"ng-template",11),t.qZA()),2&o&&(t.xp6(4),t.Akn(t.DdM(25,u)),t.Q6J("visible",n.showFormNew)("modal",!0),t.xp6(2),t.Q6J("value",n.allData)("paginator",!0)("rows",n.itemsPerPage)("columns",n.cols)("totalRecords",n.totalItems)("selection",n.selectedItems)("showCurrentPageReport",!0)("lazy",!0),t.xp6(5),t.Akn(t.DdM(26,u)),t.Q6J("visible",n.productDialog)("modal",!0),t.xp6(3),t.Akn(t.DdM(27,u)),t.Q6J("visible",n.deleteProductDialog)("modal",!0),t.xp6(3),t.Q6J("ngIf",n.product),t.xp6(2),t.Akn(t.DdM(28,u)),t.Q6J("visible",n.deleteProductsDialog)("modal",!0))},dependencies:[m.mk,m.O5,P.o,r.iA,_.jx,r.lQ,r.fz,r.UA,r.Mo,f.H,C.Hq,c.Fj,c.JJ,c.Q7,c.On,x.V,T.FN,Z.o,b.g],styles:[".w-25[_ngcontent-%COMP%]{width:25%!important}textarea[_ngcontent-%COMP%]{resize:none}"]})}return i})(),Y=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[v.Bz.forChild([{path:"",component:z}]),v.Bz]})}return i})(),V=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({providers:[_.ez],imports:[Y,m.ez,N.JX,P.V,r.U$,f.T,w.O,A.JF,C.hJ,c.u5,x.S,T.EV,M.Xt,Z.j,b.A,y.kW,D.cc,F.L$,c.UX]})}return i})()}}]);