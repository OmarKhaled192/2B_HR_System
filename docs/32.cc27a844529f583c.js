"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[32],{8032:(J,T,r)=>{r.d(T,{o:()=>ae});var u=r(6814),f=r(9862),s=r(6223),D=r(6472),c=r(5219),b=r(707),d=r(3530),Z=r(3965),F=r(3722),P=r(5167),A=r(3714),y=r(6218),U=r(1865),S=r(6022),w=r(4480),h=r(9552),N=r(4104),v=r(6340),M=r(3999),x=r(6997),L=r(8608),O=r(6651),I=r(1230),q=r(6760),E=r(5609),Q=r(9108),e=r(8109),G=r(4175);let R=(()=>{class i extends G.P{constructor(t){super(t)}getEnum(t){return this.http.get(`${this.baseurl}/Enums/${t}/?culture=${this.culture}`)}getDropdownField(t){return this.http.get(`${this.baseurl}/${t}/getDropDown/?culture=${this.culture}`)}resetMacAddress(t){return this.http.get(`${this.baseurl}/Employee/ResetMacAddres?Employeeid=${t}`)}static#e=this.\u0275fac=function(o){return new(o||i)(e.LFG(f.eN))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var k=r(258);const j=["dt"],$=["manageItems"];function B(i,p){if(1&i){const t=e.EpF();e.TgZ(0,"div",71)(1,"button",72),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.deleteSelectedProducts())}),e.ALo(2,"translate"),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("label",e.lcZ(2,2,"Delete"))("disabled",!t.selectedItems||!t.selectedItems.length)}}function H(i,p){if(1&i){const t=e.EpF();e.TgZ(0,"button",73),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.exportCSV())}),e.ALo(1,"translate"),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("label",e.lcZ(1,2,"Export"))("disabled",!t.selectedItems||!t.selectedItems.length)}}function K(i,p){if(1&i){const t=e.EpF();e.TgZ(0,"div",52)(1,"label",74),e._uU(2,"Name English "),e.qZA(),e.TgZ(3,"input",75),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.newNameEn=n)}),e.qZA()(),e.TgZ(4,"div",52)(5,"label",76),e._uU(6,"Name Arabic "),e.qZA(),e.TgZ(7,"input",77),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.newNameAr=n)}),e.qZA()(),e.TgZ(8,"div",52)(9,"label",78),e._uU(10,"dayCount"),e.qZA(),e.TgZ(11,"input",79),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.dayCount=n)}),e.qZA()(),e.TgZ(12,"div",52)(13,"label",80),e._uU(14,"Notes"),e.qZA(),e.TgZ(15,"textarea",81),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.newNotes=n)}),e.qZA()(),e.TgZ(16,"div",52)(17,"label",80),e._uU(18,"Vacation Start After how many months"),e.qZA(),e.TgZ(19,"input",82),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.newVacationStart=n)}),e.qZA()(),e.TgZ(20,"div",83)(21,"div",84)(22,"label",85),e._uU(23,"mangerApproved"),e.qZA(),e.TgZ(24,"p-inputSwitch",86),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.mangerApproved=n)}),e.qZA()(),e.TgZ(25,"div",84)(26,"label",85),e._uU(27,"hrApproved"),e.qZA(),e.TgZ(28,"p-inputSwitch",86),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.hrApproved=n)}),e.qZA()(),e.TgZ(29,"div",84)(30,"label",87),e._uU(31,"stockVacation"),e.qZA(),e.TgZ(32,"p-inputSwitch",86),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.stockVacation=n)}),e.qZA()()(),e.TgZ(33,"div",52)(34,"button",88),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.addNew())}),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.newNameEn),e.xp6(4),e.Q6J("ngModel",t.newNameAr),e.xp6(4),e.Q6J("ngModel",t.dayCount),e.xp6(4),e.Q6J("ngModel",t.newNotes),e.xp6(4),e.Q6J("ngModel",t.newVacationStart),e.xp6(5),e.Q6J("ngModel",t.mangerApproved),e.xp6(4),e.Q6J("ngModel",t.hrApproved),e.xp6(4),e.Q6J("ngModel",t.stockVacation)}}function V(i,p){if(1&i){const t=e.EpF();e.TgZ(0,"div",89)(1,"h5",90,91),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"span",92),e._UZ(6,"i",93),e.TgZ(7,"input",94),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.nameFilter=n)})("input",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.loadFilteredData())}),e.ALo(8,"translate"),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(3),e.hij(" ",e.lcZ(4,3,"Manage Items")," "),e.xp6(4),e.Q6J("ngModel",t.nameFilter)("placeholder",e.lcZ(8,5,"Search..."))}}function Y(i,p){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"th",95),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th",96),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.sortById(n))}),e._uU(4),e.ALo(5,"translate"),e._UZ(6,"p-sortIcon",97),e.qZA(),e.TgZ(7,"th",98),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.sortByName(n))}),e._uU(8),e.ALo(9,"translate"),e._UZ(10,"p-sortIcon",99),e.qZA(),e.TgZ(11,"th"),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"th"),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"th"),e._uU(18),e.ALo(19,"translate"),e.qZA(),e.TgZ(20,"th"),e._uU(21),e.ALo(22,"translate"),e.qZA(),e.TgZ(23,"th"),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.TgZ(26,"th"),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"th"),e._uU(30),e.ALo(31,"translate"),e.qZA(),e.TgZ(32,"th"),e._uU(33),e.ALo(34,"translate"),e.qZA(),e.TgZ(35,"th"),e._uU(36),e.ALo(37,"translate"),e.qZA(),e.TgZ(38,"th"),e._uU(39),e.ALo(40,"translate"),e.qZA(),e.TgZ(41,"th"),e._uU(42),e.ALo(43,"translate"),e.qZA(),e.TgZ(44,"th"),e._uU(45),e.ALo(46,"translate"),e.qZA()()}2&i&&(e.xp6(4),e.hij(" ",e.lcZ(5,14,"Id")," "),e.xp6(4),e.hij(" ",e.lcZ(9,16,"Name")," "),e.xp6(4),e.Oqu(e.lcZ(13,18,"phone")),e.xp6(3),e.Oqu(e.lcZ(16,20,"BirthDate")),e.xp6(3),e.Oqu(e.lcZ(19,22,"Email")),e.xp6(3),e.Oqu(e.lcZ(22,24,"National Id")),e.xp6(3),e.Oqu(e.lcZ(25,26,"Department Name")),e.xp6(3),e.Oqu(e.lcZ(28,28,"Partation Name")),e.xp6(3),e.Oqu(e.lcZ(31,30,"creationTime")),e.xp6(3),e.Oqu(e.lcZ(34,32,"lastModificationTime")),e.xp6(3),e.Oqu(e.lcZ(37,34,"creatorName")),e.xp6(3),e.Oqu(e.lcZ(40,36,"lastModifierName")),e.xp6(3),e.Oqu(e.lcZ(43,38,"MacAdress")),e.xp6(3),e.Oqu(e.lcZ(46,40,"Actions")))}const m=i=>({"null-color":i});function z(i,p){if(1&i){const t=e.EpF();e.TgZ(0,"tr",100),e.NdJ("click",function(){const l=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.editProduct(l))}),e.TgZ(1,"td"),e._UZ(2,"p-tableCheckbox",101),e.qZA(),e.TgZ(3,"td")(4,"span",102),e._uU(5,"Id"),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"td",103)(8,"span",102),e._uU(9,"Name"),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"td",103)(12,"span",102),e._uU(13,"phone"),e.qZA(),e._uU(14),e.qZA(),e.TgZ(15,"td",103)(16,"span",102),e._uU(17,"birthDate"),e.qZA(),e._uU(18),e.ALo(19,"date"),e.qZA(),e.TgZ(20,"td",103)(21,"span",102),e._uU(22,"email"),e.qZA(),e._uU(23),e.qZA(),e.TgZ(24,"td",103)(25,"span",102),e._uU(26,"nationalId"),e.qZA(),e._uU(27),e.qZA(),e.TgZ(28,"td",103)(29,"span",102),e._uU(30,"departmentName"),e.qZA(),e._uU(31),e.qZA(),e.TgZ(32,"td",103)(33,"span",102),e._uU(34,"partationName"),e.qZA(),e._uU(35),e.qZA(),e.TgZ(36,"td",103)(37,"span",102),e._uU(38,"creationTime"),e.qZA(),e._uU(39),e.ALo(40,"date"),e.qZA(),e.TgZ(41,"td",103)(42,"span",102),e._uU(43,"lastModificationTime"),e.qZA(),e._uU(44),e.ALo(45,"date"),e.qZA(),e.TgZ(46,"td",103)(47,"span",102),e._uU(48,"creatorName"),e.qZA(),e._uU(49),e.qZA(),e.TgZ(50,"td",103)(51,"span",102),e._uU(52,"lastModifierName"),e.qZA(),e._uU(53),e.qZA(),e.TgZ(54,"td")(55,"div",104)(56,"button",105),e.NdJ("click",function(n){const a=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.resetMacAddress(a,n))}),e.qZA()()(),e.TgZ(57,"td")(58,"div",104)(59,"button",106),e.NdJ("click",function(n){const a=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.deleteProduct(a,n))}),e.qZA()()()()}if(2&i){const t=p.$implicit;e.xp6(2),e.Q6J("value",t),e.xp6(4),e.hij(" ",t.id?t.id:""," "),e.xp6(1),e.Q6J("ngClass",e.VKq(33,m,!t.name)),e.xp6(3),e.hij(" ",t.name?t.name:""," "),e.xp6(1),e.Q6J("ngClass",e.VKq(35,m,!t.phone)),e.xp6(3),e.hij(" ",t.phone?t.phone:""," "),e.xp6(1),e.Q6J("ngClass",e.VKq(37,m,!t.birthDate)),e.xp6(3),e.hij(" ",e.xi3(19,24,t.birthDate,"dd/MM/YYYY")," "),e.xp6(2),e.Q6J("ngClass",e.VKq(39,m,!t.email)),e.xp6(3),e.hij(" ",t.email?t.email:""," "),e.xp6(1),e.Q6J("ngClass",e.VKq(41,m,!t.nationalId)),e.xp6(3),e.hij(" ",t.nationalId?t.nationalId:""," "),e.xp6(1),e.Q6J("ngClass",e.VKq(43,m,!t.departmentName)),e.xp6(3),e.hij(" ",t.departmentName," "),e.xp6(1),e.Q6J("ngClass",e.VKq(45,m,!t.partationName)),e.xp6(3),e.hij(" ",t.partationName," "),e.xp6(1),e.Q6J("ngClass",e.VKq(47,m,!t.creationTime)),e.xp6(3),e.hij(" ",e.xi3(40,27,t.creationTime,"dd/MM/YYYY - h:mm a")," "),e.xp6(2),e.Q6J("ngClass",e.VKq(49,m,!t.lastModificationTime)),e.xp6(3),e.hij(" ",e.xi3(45,30,t.lastModificationTime,"dd/MM/YYYY - h:mm a")," "),e.xp6(2),e.Q6J("ngClass",e.VKq(51,m,!t.creatorName)),e.xp6(3),e.hij(" ",t.creatorName?t.creatorName:""," "),e.xp6(1),e.Q6J("ngClass",e.VKq(53,m,!t.lastModifierName)),e.xp6(3),e.hij(" ",t.lastModifierName?t.lastModifierName:""," ")}}function X(i,p){1&i&&(e.TgZ(0,"small",110),e._uU(1,"Arabic Name is required."),e.qZA())}const W=i=>({"ng-invalid ng-dirty":i});function ee(i,p){if(1&i){const t=e.EpF();e.TgZ(0,"div",52)(1,"label",107),e._uU(2,"Current MacAddress "),e.qZA(),e.TgZ(3,"input",108),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.product.name=n)}),e.qZA(),e.YNc(4,X,2,0,"small",109),e.qZA()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.product.name)("ngClass",e.VKq(3,W,t.submitted&&!t.product.name)),e.xp6(1),e.Q6J("ngIf",t.submitted&&!t.product.name)}}function te(i,p){if(1&i){const t=e.EpF();e.TgZ(0,"button",111),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.hideDialog())}),e.qZA(),e.TgZ(1,"button",112),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.saveProduct(n.product.id,n.product))}),e.qZA()}}function ne(i,p){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.TgZ(3,"b"),e._uU(4),e.qZA(),e._uU(5,"?"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij("",e.lcZ(2,2,"Are you sure you want to delete")," "),e.xp6(3),e.Oqu(t.product.name)}}function oe(i,p){if(1&i){const t=e.EpF();e.TgZ(0,"button",113),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.deleteProductDialog=!1)}),e.ALo(1,"translate"),e.qZA(),e.TgZ(2,"button",114),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.confirmDelete(n.product.id))}),e.ALo(3,"translate"),e.qZA()}2&i&&(e.Q6J("label",e.lcZ(1,2,"No")),e.xp6(2),e.Q6J("label",e.lcZ(3,4,"Yes")))}function le(i,p){if(1&i){const t=e.EpF();e.TgZ(0,"button",115),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.deleteProductsDialog=!1)}),e.qZA(),e.TgZ(1,"button",116),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.confirmDeleteSelected())}),e.qZA()}}const C=()=>({width:"450px"});let ae=(()=>{class i{constructor(t,o,n,l,a){this._EmployeeService=t,this.messageService=o,this.DatePipe=n,this.translate=l,this.router=a,this.allData=[],this.page=1,this.itemsPerPage=Q.b,this.selectedItems=[],this.cols=[],this.loading=!0,this.deleteProductDialog=!1,this.deleteProductsDialog=!1,this.submitted=!1,this.productDialog=!1,this.showFormNew=!1,this.sortField="id",this.sortOrder="asc",this.selectedState=null,this.selectedGovernment=null,this.selectedNationalId=null,this.selectedPartitions=null,this.selectedGender=null,this.selectedMaritalStatus=null,this.selectedQualification=null,this.selectedJob=null,this.selectedReligin=null,this.selectedShift=null,this.selectedBank=null,this.selectedGrade=null,this.selectedjobNature=null,this.selectedRecuritmentSource=null,this.selectedContactType=null,this.selectedIsInsured=null,this.selectedIsManager=null,this.selectedDepartment=null,this.selectedBloodType=null,this.uploadedFiles=[],this.filterForm=new s.cw({birthDate:new s.NI(null),bloodTypes:new s.NI(null),departmentId:new s.NI(null),gender:new s.NI(null),governmentId:new s.NI(null),hirDate:new s.NI(null),jobId:new s.NI(null),joininDate:new s.NI(null),maritalStatus:new s.NI(null),partationId:new s.NI(null),qualificationId:new s.NI(null),shiftId:new s.NI(null),resignationDate:new s.NI(null),ismanger:new s.NI(null),isInsured:new s.NI(null),religion:new s.NI(null),bankId:new s.NI(null),gradeId:new s.NI(null),jobNatureId:new s.NI(null),recuritmentSourceId:new s.NI(null),contractTypeId:new s.NI(null)})}ngOnInit(){this.endPoint="Employee",x.O.getMainLangChanges().subscribe(t=>{console.log("Main language changed to:",t),this._EmployeeService.setCulture(t),this._EmployeeService.setEndPoint(this.endPoint),this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder),this.getDropDowns()}),this.cols=[{field:"name",header:"Name"},{field:"notes",header:"Notes"},{field:"creationTime",header:"creationTime"},{field:"lastModificationTime",header:"lastModificationTime"},{field:"creatorName",header:"creatorName"},{field:"lastModifierName",header:"lastModifierName"}]}getDropDowns(){this.getDropDownEnum({field:"dropdownItemsBloodTypes",enum:"getBloodTypes"}),this.getDropDownEnum({field:"dropdownItemsGender",enum:"getGender"}),this.getDropDownEnum({field:"dropdownItemsMaritalStatus",enum:"getMaritalStatus"}),this.getDropDownEnum({field:"dropdownItemsReligin",enum:"getReligion"}),this.getDropDownField({field:"dropdownItemsReligin",enum:"getReligion"}),this.getDropDownField({field:"dropdownItemsGovernment",enum:"Government"}),this.getDropDownField({field:"dropdownItemsQualification",enum:"Qualification"}),this.getDropDownField({field:"dropdownItemsJob",enum:"Job"}),this.getDropDownField({field:"dropdownItemsDepartment",enum:"Department"}),this.getDropDownField({field:"dropdownItemsPartition",enum:"Partation"}),this.getDropDownField({field:"dropdownItemsShift",enum:"Shift"}),this.getDropDownField({field:"dropdownItemsBank",enum:"Bank"}),this.getDropDownField({field:"dropdownItemsGrade",enum:"Grade"}),this.getDropDownField({field:"dropdownItemsJobNature",enum:"JobNature"}),this.getDropDownField({field:"dropdownItemsRecuritmentSource",enum:"RecuritmentSource"}),this.getDropDownField({field:"dropdownItemsContractType",enum:"ContractType"}),x.O.getMainLangChanges().subscribe(t=>{console.log("Main language changed to:",t),this._EmployeeService.setCulture(t),this._EmployeeService.setEndPoint(this.endPoint),this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)}),this.cols=[{field:"name",header:"Name"},{field:"notes",header:"Notes"},{field:"creationTime",header:"creationTime"},{field:"lastModificationTime",header:"lastModificationTime"},{field:"creatorName",header:"creatorName"},{field:"lastModifierName",header:"lastModifierName"}]}getDropDownEnum(t){this._EmployeeService.getEnum(t.enum).subscribe({next:o=>{this[t.field]=o.data},error:o=>{console.log(`error in ${t.field}`),console.log(o)}})}getDropDownField(t){this._EmployeeService.getDropdownField(t.enum).subscribe({next:o=>{this[t.field]=o.data},error:o=>{console.log(`error in ${t.field}`),console.log(o)}})}onSelect(t){console.log(t),this.messageService.add({severity:"info",summary:"File Uploaded",detail:""})}splitCamelCase(t){return t.replace(/([A-Z])/g," $1").trim().replace(/\s+/g," ").split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" ")}resetMacAddress(t,o){o.stopPropagation(),this._EmployeeService.resetMacAddress(t.id).subscribe({next:n=>{this.messageService.add({severity:"success",summary:"Successful",detail:"Mac Address reseted Success",life:3e3})},error:n=>{console.log(n),this.messageService.add({severity:"error in reset Mac Address",summary:"Error",detail:n,life:3e3})}})}editProduct(t){console.log(t.id),this._EmployeeService.GetById(t.id).subscribe({next:o=>{console.log(o.data);const l=this.router.createUrlTree(["/Edit"],{queryParams:{Id:t.id}}),a=this.router.serializeUrl(l);console.log("Constructed URL:",a),this.router.navigate(["/info/employees/edit",t.id],{queryParams:{Id:t.id}})},error:o=>{console.log(o)}})}confirmDelete(t){this._EmployeeService.DeleteSoftById(t).subscribe({next:o=>{console.log(o),this.deleteProductDialog=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3}),this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)},error:o=>{console.log(o)}})}addNew(){this._EmployeeService.Register({name:this.newNameAr,notes:this.newNotes,engName:this.newNameEn}).subscribe({next:o=>{console.log(o),this.showFormNew=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"inserted success",life:3e3}),this.setFieldsNulls(),this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)},error:o=>{this.showFormNew=!1,console.log(o)}})}loadFilteredData(){this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)}setFieldsNulls(){this.newNameAr=null,this.newNameEn=null,this.newNotes=null}loadData(t,o,n,l,a){this.loading=!0;let g={pageNumber:t,pageSize:o,filterValue:n,filterType:l,sortType:a};g.sortType=this.sortOrder,this._EmployeeService.GetPage(g).subscribe({next:_=>{console.log(_),this.allData=_.data,console.log(_.data),this.totalItems=_.totalItems,this.loading=!1},error:_=>{console.log(_),this.loading=!1}})}onPageChange(t){let o;console.log(t),this.page=Number(t.first/t.rows)+1,o=1===t.sortOrder?"asc":"dsc",this.sortOrder=o,this.itemsPerPage=t.rows,this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)}deleteSelectedProducts(){this.deleteProductsDialog=!0}hideDialog(){this.productDialog=!1,this.submitted=!1}deleteProduct(t,o){this.deleteProductDialog=!0,this.product={...t},o.stopPropagation()}saveProduct(t,o){this.submitted=!0,console.log(t),console.log(o),this._EmployeeService.Edit({engName:o.engName,name:o.name,id:o.id,notes:o.notes}).subscribe({next:()=>{this.hideDialog(),this.messageService.add({severity:"success",summary:"Successful",detail:"You Edit This Item",life:3e3}),this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)},error:l=>{console.log(l),alert(l)}})}toggleNew(){this.showFormNew=!this.showFormNew}exportCSV(){const n="\ufeff"+this.convertToCSV(this.selectedItems),l=new Blob([n],{type:"text/csv;charset=utf-8;"}),a=document.createElement("a");a.href=URL.createObjectURL(l),a.download=`${this.endPoint}_${(new Date).getTime()}.csv`,a.click()}convertToCSV(t){if(!t||!t.length)return"";let n=[];this.cols.forEach(a=>{n.push(a.field)}),console.log(n);const l=t.map(a=>n.map(g=>`"${a[g]}"`).join(","));return l.unshift(n.join(",")),l.join("\r\n")}confirmDeleteSelected(){let t=[];console.log("Selected Items :"),this.selectedItems.forEach(o=>{t.push(o.id)}),this._EmployeeService.DeleteRangeSoft(t).subscribe({next:o=>{this.deleteProductsDialog=!1,this.messageService.add({severity:"success",summary:"Success",detail:"items deleted successfully",life:3e3}),this.selectedItems=[],this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)},error:o=>{this.messageService.add({severity:"error",summary:"Failure",detail:o.statusText,life:3e3}),this.deleteProductsDialog=!1,this.loadData(this.page,this.itemsPerPage,this.nameFilter,this.sortField,this.sortOrder)}})}sortById(t){this.sortField="id","asc"===this.sortOrder?this.sortOrder="dsc":"dsc"===this.sortOrder&&(this.sortOrder="asc")}sortByName(t){this.sortField="ar"==this.translate.currentLang?"nameAr":"englishName"}submitForm(t){t.patchValue({bloodTypes:this.selectedBloodType?.id,governmentId:this.selectedGovernment?.id,qualificationId:this.selectedQualification?.id,gender:this.selectedGender?.id,maritalStatus:this.selectedMaritalStatus?.id,jobId:this.selectedJob?.id,jobNatureId:this.selectedjobNature?.id,departmentId:this.selectedDepartment?.id,partationId:this.selectedPartitions?.id,shiftId:this.selectedShift?.id,bankId:this.selectedBank?.id,gradeId:this.selectedGrade?.id,contractTypeId:this.selectedContactType?.id,recuritmentSourceId:this.selectedRecuritmentSource?.id,religion:this.selectedReligin?.id,joininDate:this.DatePipe.transform(this.filterForm.get("joininDate").value,"yyyy-MM-ddTHH:mm:ss"),birthDate:this.DatePipe.transform(this.filterForm.get("birthDate").value,"yyyy-MM-ddTHH:mm:ss"),hirDate:this.DatePipe.transform(this.filterForm.get("hirDate").value,"yyyy-MM-ddTHH:mm:ss"),resignationDate:this.DatePipe.transform(this.filterForm.get("resignationDate").value,"yyyy-MM-ddTHH:mm:ss")}),console.log(t.value);const o=t.value,n=Object.keys(o).filter(l=>null!=o[l]).reduce((l,a)=>(l[a]=o[a],l),{});console.log("filteredData :"),console.log(n),this._EmployeeService.GetPage(n).subscribe({next:l=>{this.manageItems.nativeElement.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollY=1e3,this.allData=l.data,console.log("result"),console.log(l)},error:l=>{console.log(l)}})}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(R),e.Y36(c.ez),e.Y36(u.uU),e.Y36(M.sK),e.Y36(k.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-employee"]],viewQuery:function(o,n){if(1&o&&(e.Gf(j,5),e.Gf($,5)),2&o){let l;e.iGM(l=e.CRH())&&(n.dt=l.first),e.iGM(l=e.CRH())&&(n.manageItems=l.first)}},inputs:{endPoint:"endPoint"},standalone:!0,features:[e._Bn([c.ez,u.uU]),e.jDz],decls:147,vars:150,consts:[[3,"header","toggleable","collapsed"],["method","post",3,"formGroup","submit"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-4"],["htmlFor","government"],["optionLabel","name","formControlName","governmentId",3,"options","ngModel","ngModelChange"],[1,"field","col-12","md:col-3"],["htmlFor","BirthDate"],["inputId","BirthDate","formControlName","birthDate",3,"showIcon","iconDisplay"],["htmlFor","Religin"],["formControlName","religion","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","maritalStatus"],["formControlName","maritalStatus","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","Blood"],["formControlName","bloodTypes","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","gender"],["formControlName","gender","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","Qualification"],["formControlName","qualificationId","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","Job"],["formControlName","jobId","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","department"],["formControlName","departmentId","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","Partition"],["formControlName","partationId","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","Shift"],["formControlName","shiftId","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","Bank"],["formControlName","bankId","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","Grade"],["formControlName","gradeId","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","jobNature"],["formControlName","jobNatureId","optionLabel","name",3,"options","ngModel","ngModelChange"],[1,"field","col-12","md:col-3","flex","gap-3","align-items-center"],["formControlName","isInsured",3,"ngModel","ngModelChange"],["htmlFor","isInsured"],["formControlName","ismanger",3,"ngModel","ngModelChange"],["htmlFor","ismanger"],["htmlFor","recuritmentSource"],["formControlName","recuritmentSourceId","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","ContractType"],["formControlName","contractTypeId","optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","joininDate"],["inputId","joininDate","formControlName","joininDate",3,"showIcon","iconDisplay"],["htmlFor","hirDate"],["inputId","hirDate","formControlName","hirDate",3,"showIcon","iconDisplay"],["htmlFor","resignationDate"],["inputId","resignationDate","formControlName","resignationDate",3,"showIcon","iconDisplay"],[1,"btn-filter-submit-container"],[1,"field"],["pButton","","type","submit"],[1,"pi","pi-filter"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["header","Add New",1,"p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["selectionMode","multiple","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","dataKey","id",3,"value","paginator","rows","columns","totalRecords","selection","showCurrentPageReport","lazy","selectionChange","onLazyLoad"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Edit MacAddress",1,"p-fluid",3,"visible","modal","visibleChange"],["pTemplate","footer"],[3,"visible","header","modal","visibleChange"],[1,"flex","align-items-center","justify-content-center"],[1,"pi","pi-exclamation-triangle","mr-3",2,"font-size","2rem"],[4,"ngIf"],[1,"my-2"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-danger","mx-2","px-5",3,"label","disabled","click"],["pButton","","pRipple","","icon","pi pi-upload","pTooltip","CSV",1,"p-button-help","mx-2","px-5",3,"label","disabled","click"],["htmlFor","name-en"],["pInputText","","placeholder","Enter Name Here","id","name-en","type","text",3,"ngModel","ngModelChange"],["htmlFor","name-ar"],["pInputText","","placeholder","Enter Name Here","id","name-ar","type","text",3,"ngModel","ngModelChange"],["htmlFor","numberOfHours"],["pInputText","","placeholder","Enter number Of days","id","numberOfHours","type","number",3,"ngModel","ngModelChange"],["htmlFor","new-notes"],["pInputTextarea","","id","new-notes","placeholder","Enter Notes Here","type","text",3,"ngModel","ngModelChange"],["pInputText","","id","new-notes","placeholder","Enter number of months to start vacation","type","number",3,"ngModel","ngModelChange"],[1,"fields-aprrove"],[1,"field","field-approve"],["for","mangerApproved"],[3,"ngModel","ngModelChange"],["for","stockVacation"],["pButton","","label","Insert New",1,"w-25",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0","manageItems"],["manageItems",""],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","id","filter-name","type","text",1,"w-full","sm:w-auto",3,"ngModel","placeholder","ngModelChange","input"],[2,"width","3rem"],["pSortableColumn","id",3,"click"],["field","id"],["pSortableColumn","name",3,"click"],["field","name"],[1,"tableRow",3,"click"],[3,"value"],[1,"p-column-title"],[3,"ngClass"],[1,"flex","crud-operations"],["pButton","","pRipple","","icon","pi pi-undo",1,"p-button-rounded","p-button-info","p-button-outlined","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-outlined","p-button-danger",3,"click"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModel","ngClass","ngModelChange"],["class","ng-dirty ng-invalid",4,"ngIf"],[1,"ng-dirty","ng-invalid"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-times",1,"p-button-text",3,"label","click"],["pButton","","pRipple","","icon","pi pi-check",1,"p-button-text",3,"label","click"],["pButton","","pRipple","","icon","pi pi-times","label","No",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Yes",1,"p-button-text",3,"click"]],template:function(o,n){1&o&&(e._UZ(0,"p-toast"),e.TgZ(1,"p-panel",0),e.ALo(2,"translate"),e.TgZ(3,"form",1),e.NdJ("submit",function(){return n.submitForm(n.filterForm)}),e.TgZ(4,"div",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"p-dropdown",8),e.NdJ("ngModelChange",function(a){return n.selectedGovernment=a}),e.qZA()(),e.TgZ(13,"div",9)(14,"label",10),e._uU(15),e.ALo(16,"translate"),e.qZA(),e._UZ(17,"p-calendar",11),e.qZA(),e.TgZ(18,"div",9)(19,"label",12),e._uU(20),e.ALo(21,"translate"),e.qZA(),e.TgZ(22,"p-dropdown",13),e.NdJ("ngModelChange",function(a){return n.selectedReligin=a}),e.qZA()(),e.TgZ(23,"div",9)(24,"label",14),e._uU(25),e.ALo(26,"translate"),e.qZA(),e.TgZ(27,"p-dropdown",15),e.NdJ("ngModelChange",function(a){return n.selectedMaritalStatus=a}),e.qZA()(),e.TgZ(28,"div",9)(29,"label",16),e._uU(30),e.ALo(31,"translate"),e.qZA(),e.TgZ(32,"p-dropdown",17),e.NdJ("ngModelChange",function(a){return n.selectedBloodType=a}),e.qZA()(),e.TgZ(33,"div",9)(34,"label",18),e._uU(35),e.ALo(36,"translate"),e.qZA(),e.TgZ(37,"p-dropdown",19),e.NdJ("ngModelChange",function(a){return n.selectedGender=a}),e.qZA()(),e.TgZ(38,"div",9)(39,"label",20),e._uU(40),e.ALo(41,"translate"),e.qZA(),e.TgZ(42,"p-dropdown",21),e.NdJ("ngModelChange",function(a){return n.selectedQualification=a}),e.qZA()(),e.TgZ(43,"div",9)(44,"label",22),e._uU(45),e.ALo(46,"translate"),e.qZA(),e.TgZ(47,"p-dropdown",23),e.NdJ("ngModelChange",function(a){return n.selectedJob=a}),e.qZA()(),e.TgZ(48,"div",9)(49,"label",24),e._uU(50),e.ALo(51,"translate"),e.qZA(),e.TgZ(52,"p-dropdown",25),e.NdJ("ngModelChange",function(a){return n.selectedDepartment=a}),e.qZA()(),e.TgZ(53,"div",9)(54,"label",26),e._uU(55),e.ALo(56,"translate"),e.qZA(),e.TgZ(57,"p-dropdown",27),e.NdJ("ngModelChange",function(a){return n.selectedPartitions=a}),e.qZA()(),e.TgZ(58,"div",9)(59,"label",28),e._uU(60),e.ALo(61,"translate"),e.qZA(),e.TgZ(62,"p-dropdown",29),e.NdJ("ngModelChange",function(a){return n.selectedShift=a}),e.qZA()(),e.TgZ(63,"div",9)(64,"label",30),e._uU(65),e.ALo(66,"translate"),e.qZA(),e.TgZ(67,"p-dropdown",31),e.NdJ("ngModelChange",function(a){return n.selectedBank=a}),e.qZA()(),e.TgZ(68,"div",9)(69,"label",32),e._uU(70),e.ALo(71,"translate"),e.qZA(),e.TgZ(72,"p-dropdown",33),e.NdJ("ngModelChange",function(a){return n.selectedGrade=a}),e.qZA()(),e.TgZ(73,"div",9)(74,"label",34),e._uU(75),e.ALo(76,"translate"),e.qZA(),e.TgZ(77,"p-dropdown",35),e.NdJ("ngModelChange",function(a){return n.selectedjobNature=a}),e.qZA()(),e.TgZ(78,"div",36)(79,"p-inputSwitch",37),e.NdJ("ngModelChange",function(a){return n.selectedIsInsured=a}),e.qZA(),e.TgZ(80,"label",38),e._uU(81),e.ALo(82,"translate"),e.qZA()(),e.TgZ(83,"div",36)(84,"p-inputSwitch",39),e.NdJ("ngModelChange",function(a){return n.selectedIsManager=a}),e.qZA(),e.TgZ(85,"label",40),e._uU(86),e.ALo(87,"translate"),e.qZA()(),e.TgZ(88,"div",9)(89,"label",41),e._uU(90),e.ALo(91,"translate"),e.qZA(),e.TgZ(92,"p-dropdown",42),e.NdJ("ngModelChange",function(a){return n.selectedRecuritmentSource=a}),e.qZA()(),e.TgZ(93,"div",9)(94,"label",43),e._uU(95),e.ALo(96,"translate"),e.qZA(),e.TgZ(97,"p-dropdown",44),e.NdJ("ngModelChange",function(a){return n.selectedContactType=a}),e.qZA()(),e.TgZ(98,"div",9)(99,"label",45),e._uU(100),e.ALo(101,"translate"),e.qZA(),e._UZ(102,"p-calendar",46),e.qZA(),e.TgZ(103,"div",9)(104,"label",47),e._uU(105),e.ALo(106,"translate"),e.qZA(),e._UZ(107,"p-calendar",48),e.qZA(),e.TgZ(108,"div",9)(109,"label",49),e._uU(110),e.ALo(111,"translate"),e.qZA(),e._UZ(112,"p-calendar",50),e.qZA(),e.TgZ(113,"div",51)(114,"div",52)(115,"button",53),e._UZ(116,"i",54),e.TgZ(117,"span"),e._uU(118),e.ALo(119,"translate"),e.qZA()()()()()()()()()(),e.TgZ(120,"p-toolbar",55),e.YNc(121,B,3,4,"ng-template",56)(122,H,2,4,"ng-template",57),e.qZA(),e.TgZ(123,"p-dialog",58),e.NdJ("visibleChange",function(a){return n.showFormNew=a}),e.YNc(124,K,35,8,"ng-template",59),e.qZA(),e.TgZ(125,"p-table",60,61),e.NdJ("selectionChange",function(a){return n.selectedItems=a})("onLazyLoad",function(a){return n.onPageChange(a)}),e.YNc(127,V,9,7,"ng-template",62)(128,Y,47,42,"ng-template",63)(129,z,60,55,"ng-template",64),e.qZA(),e.TgZ(130,"p-dialog",65),e.NdJ("visibleChange",function(a){return n.productDialog=a}),e.YNc(131,ee,5,5,"ng-template",59)(132,te,2,0,"ng-template",66),e.qZA(),e.TgZ(133,"p-dialog",67),e.NdJ("visibleChange",function(a){return n.deleteProductDialog=a}),e.ALo(134,"translate"),e.TgZ(135,"div",68),e._UZ(136,"i",69),e.YNc(137,ne,6,4,"span",70),e.qZA(),e.YNc(138,oe,4,6,"ng-template",66),e.qZA(),e.TgZ(139,"p-dialog",67),e.NdJ("visibleChange",function(a){return n.deleteProductsDialog=a}),e.ALo(140,"translate"),e.TgZ(141,"div",68),e._UZ(142,"i",69),e.TgZ(143,"span"),e._uU(144),e.ALo(145,"translate"),e.qZA()(),e.YNc(146,le,2,0,"ng-template",66),e.qZA()),2&o&&(e.xp6(1),e.Q6J("header",e.lcZ(2,94,"Filter"))("toggleable",!0)("collapsed",!0),e.xp6(2),e.Q6J("formGroup",n.filterForm),e.xp6(7),e.Oqu(e.lcZ(11,96,"Government")),e.xp6(2),e.Q6J("options",n.dropdownItemsGovernment)("ngModel",n.selectedGovernment),e.xp6(3),e.hij(" ",e.lcZ(16,98,"BirthDate"),""),e.xp6(2),e.Q6J("showIcon",!0)("iconDisplay","input"),e.xp6(3),e.Oqu(e.lcZ(21,100,"Religin")),e.xp6(2),e.Q6J("options",n.dropdownItemsReligin)("ngModel",n.selectedReligin),e.xp6(3),e.Oqu(e.lcZ(26,102,"Martial Status")),e.xp6(2),e.Q6J("options",n.dropdownItemsMaritalStatus)("ngModel",n.selectedMaritalStatus),e.xp6(3),e.Oqu(e.lcZ(31,104,"Blood Types")),e.xp6(2),e.Q6J("options",n.dropdownItemsBloodTypes)("ngModel",n.selectedBloodType),e.xp6(3),e.Oqu(e.lcZ(36,106,"Gender Types")),e.xp6(2),e.Q6J("options",n.dropdownItemsGender)("ngModel",n.selectedGender),e.xp6(3),e.Oqu(e.lcZ(41,108,"Qualification")),e.xp6(2),e.Q6J("options",n.dropdownItemsQualification)("ngModel",n.selectedQualification),e.xp6(3),e.Oqu(e.lcZ(46,110,"Job")),e.xp6(2),e.Q6J("options",n.dropdownItemsJob)("ngModel",n.selectedJob),e.xp6(3),e.Oqu(e.lcZ(51,112,"Department")),e.xp6(2),e.Q6J("options",n.dropdownItemsDepartment)("ngModel",n.selectedDepartment),e.xp6(3),e.Oqu(e.lcZ(56,114,"Partition")),e.xp6(2),e.Q6J("options",n.dropdownItemsPartition)("ngModel",n.selectedPartitions),e.xp6(3),e.Oqu(e.lcZ(61,116,"Shift")),e.xp6(2),e.Q6J("options",n.dropdownItemsShift)("ngModel",n.selectedShift),e.xp6(3),e.Oqu(e.lcZ(66,118,"Bank")),e.xp6(2),e.Q6J("options",n.dropdownItemsBank)("ngModel",n.selectedBank),e.xp6(3),e.Oqu(e.lcZ(71,120,"Grade")),e.xp6(2),e.Q6J("options",n.dropdownItemsGrade)("ngModel",n.selectedGrade),e.xp6(3),e.Oqu(e.lcZ(76,122,"job Nature")),e.xp6(2),e.Q6J("options",n.dropdownItemsJobNature)("ngModel",n.selectedjobNature),e.xp6(2),e.Q6J("ngModel",n.selectedIsInsured),e.xp6(2),e.hij("",e.lcZ(82,124,"Is Insured")," "),e.xp6(3),e.Q6J("ngModel",n.selectedIsManager),e.xp6(2),e.hij("",e.lcZ(87,126,"Is Manager")," "),e.xp6(4),e.Oqu(e.lcZ(91,128,"Recuritment Source")),e.xp6(2),e.Q6J("options",n.dropdownItemsRecuritmentSource)("ngModel",n.selectedRecuritmentSource),e.xp6(3),e.Oqu(e.lcZ(96,130,"Contract Type")),e.xp6(2),e.Q6J("options",n.dropdownItemsContractType)("ngModel",n.selectedContactType),e.xp6(3),e.Oqu(e.lcZ(101,132,"Join In Date")),e.xp6(2),e.Q6J("showIcon",!0)("iconDisplay","input"),e.xp6(3),e.Oqu(e.lcZ(106,134,"Hiring Date")),e.xp6(2),e.Q6J("showIcon",!0)("iconDisplay","input"),e.xp6(3),e.Oqu(e.lcZ(111,136,"Resignation Date")),e.xp6(2),e.Q6J("showIcon",!0)("iconDisplay","input"),e.xp6(6),e.hij(" ",e.lcZ(119,138,"Filter")," "),e.xp6(5),e.Akn(e.DdM(146,C)),e.Q6J("visible",n.showFormNew)("modal",!0),e.xp6(2),e.Q6J("value",n.allData)("paginator",!0)("rows",n.itemsPerPage)("columns",n.cols)("totalRecords",n.totalItems)("selection",n.selectedItems)("showCurrentPageReport",!0)("lazy",!0),e.xp6(5),e.Akn(e.DdM(147,C)),e.Q6J("visible",n.productDialog)("modal",!0),e.xp6(3),e.Akn(e.DdM(148,C)),e.Q6J("visible",n.deleteProductDialog)("header",e.lcZ(134,140,"Confirm Delete"))("modal",!0),e.xp6(4),e.Q6J("ngIf",n.product),e.xp6(2),e.Akn(e.DdM(149,C)),e.Q6J("visible",n.deleteProductsDialog)("header",e.lcZ(140,142,"Confirm Delete"))("modal",!0),e.xp6(5),e.Oqu(e.lcZ(145,144,"Are you sure you want to delete selected products?")))},dependencies:[u.ez,u.mk,u.O5,u.uU,D.JX,v.V,v.o,h.U$,h.iA,c.jx,h.lQ,h.fz,h.UA,h.Mo,w.T,w.H,F.O,b.Hq,f.JF,b.hJ,s.u5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.Q7,s.On,d.S,d.V,N.EV,N.FN,S.Xt,A.j,A.o,y.A,y.g,Z.kW,Z.Lt,U.cc,P.L$,s.UX,s.sg,s.u,M.aw,M.X$,L.TX,I.Q,I.s,O.q,q._8,q.f,E.Iu,E.Ql],styles:[".p-panel-container[_ngcontent-%COMP%]{margin-bottom:15px}.btn-filter-submit-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:end;margin-top:48px}.btn-filter-submit-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.tableRow[_ngcontent-%COMP%]{cursor:pointer}  .p-panel .p-panel-icons-end{margin:unset}"]})}return i})()},4175:(J,T,r)=>{r.d(T,{P:()=>D});var u=r(553),f=r(8109),s=r(9862);let D=(()=>{class c{constructor(d){this.http=d,this.baseurl=u.N.baseurl}setEndPoint(d){this.endPoint=d}setCulture(d){this.culture=d}GetById(d){return this.http.get(`${this.baseurl}/${this.endPoint}/${d}/?culture=${this.culture}`)}GetAll(d){return this.http.post(`${this.baseurl}/${this.endPoint}/?culture=${this.culture}`,d)}GetPage(d){return this.http.post(`${this.baseurl}/${this.endPoint}/?culture=${this.culture}`,d)}Register(d){return this.http.post(`${this.baseurl}/${this.endPoint}/register/?culture=${this.culture}`,d)}Edit(d){return this.http.post(`${this.baseurl}/${this.endPoint}/Edit/?culture=${this.culture}`,d)}DeleteSoftById(d){return this.http.delete(`${this.baseurl}/${this.endPoint}/DeleteSoftById/${d}/?culture=${this.culture}`)}DeleteRangeSoft(d){return this.http.post(`${this.baseurl}/${this.endPoint}/DeleteRangeSoft/?culture=${this.culture}`,d)}getDropdown(){return this.http.get(`${this.baseurl}/${this.endPoint}/getDropDown`)}DeleteRange(d){return this.http.post(`${this.baseurl}/${this.endPoint}/DeleteRange/?culture=${this.culture}`,d)}static#e=this.\u0275fac=function(Z){return new(Z||c)(f.LFG(s.eN))};static#t=this.\u0275prov=f.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()}}]);