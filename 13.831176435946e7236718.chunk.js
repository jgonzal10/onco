webpackJsonp([13],{"D+jU":function(e,n,l){"use strict";function o(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,null,null,34,"div",[],null,null,null,null,null)),(e()(),t["\u0275ted"](null,["\n  "])),(e()(),t["\u0275ted"](null,["\n\n\n"])),(e()(),t["\u0275eld"](0,null,null,30,"p-dataTable",[["dataKey","medicineId"]],null,[[null,"selectionChange"],[null,"onRowSelect"],[null,"onRowUnselect"]],function(e,n,l){var o=!0,t=e.component;if("selectionChange"===n){o=!1!==(t.selectedMedicine=l)&&o}if("onRowSelect"===n){o=!1!==t.onRowSelect(l)&&o}if("onRowUnselect"===n){o=!1!==t.onRowUnselect(l)&&o}return o},c.b,c.a)),t["\u0275prd"](512,null,r.DomHandler,r.DomHandler,[]),t["\u0275prd"](512,null,m.ObjectUtils,m.ObjectUtils,[]),t["\u0275did"](14139392,null,6,s.DataTable,[t.ElementRef,r.DomHandler,t.IterableDiffers,t.Renderer2,t.ChangeDetectorRef,m.ObjectUtils,t.NgZone],{dataKey:[0,"dataKey"],value:[1,"value"],selection:[2,"selection"]},{selectionChange:"selectionChange",onRowSelect:"onRowSelect",onRowUnselect:"onRowUnselect"}),t["\u0275qud"](335544320,1,{header:0}),t["\u0275qud"](335544320,2,{footer:0}),t["\u0275qud"](603979776,3,{templates:1}),t["\u0275qud"](603979776,4,{cols:1}),t["\u0275qud"](335544320,5,{headerColumnGroup:0}),t["\u0275qud"](335544320,6,{footerColumnGroup:0}),(e()(),t["\u0275ted"](null,["\n    "])),(e()(),t["\u0275eld"](0,null,0,2,"p-header",[],null,null,null,p.o,p.g)),t["\u0275did"](49152,[[1,4]],0,f.Header,[],null,null),(e()(),t["\u0275ted"](0,["Dispensaci\xf3n de Medicamentos de Hoy"])),(e()(),t["\u0275ted"](null,["\n\n    "])),(e()(),t["\u0275eld"](0,null,null,4,"p-column",[["field","medicineId"],["selectionMode","single"]],null,null,null,p.n,p.a)),t["\u0275did"](1097728,[[4,4]],2,f.Column,[],{field:[0,"field"],style:[1,"style"],selectionMode:[2,"selectionMode"]},null),t["\u0275qud"](603979776,7,{templates:1}),t["\u0275qud"](335544320,8,{template:0}),t["\u0275pod"](["width"]),(e()(),t["\u0275ted"](null,["\n    "])),(e()(),t["\u0275eld"](0,null,null,3,"p-column",[["field","medicineName"],["header","Medicamento"]],null,null,null,p.n,p.a)),t["\u0275did"](1097728,[[4,4]],2,f.Column,[],{field:[0,"field"],header:[1,"header"]},null),t["\u0275qud"](603979776,9,{templates:1}),t["\u0275qud"](335544320,10,{template:0}),(e()(),t["\u0275ted"](null,["\n    "])),(e()(),t["\u0275eld"](0,null,null,3,"p-column",[["field","total"],["header","Total"]],null,null,null,p.n,p.a)),t["\u0275did"](1097728,[[4,4]],2,f.Column,[],{field:[0,"field"],header:[1,"header"]},null),t["\u0275qud"](603979776,11,{templates:1}),t["\u0275qud"](335544320,12,{template:0}),(e()(),t["\u0275ted"](null,["\n    \n\n\n"])),(e()(),t["\u0275ted"](null,["\n\n  "]))],function(e,n){var l=n.component;e(n,6,0,"medicineId",l.medicinetotals,l.selectedMedicine);e(n,19,0,"medicineId",e(n,22,0,"5%"),"single");e(n,25,0,"medicineName","Medicamento");e(n,30,0,"total","Total")},null)}Object.defineProperty(n,"__esModule",{value:!0});var t=l("/oeL"),d=function(){return function(){}}(),i=l("BkNc"),a=l("bm2B"),u=function(){function e(e,n){this._fb=e,this.router=n,this.medicinetotals=[{medicineId:1.3545345345345435e22,medicineName:"Acetaminofem",total:45345345},{medicineId:34543,medicineName:"Dolex",total:100043},{medicineId:34543,medicineName:"Dolex",total:100043},{medicineId:456546,medicineName:"PmMe2",total:100043344},{medicineId:4534543,medicineName:"PmMe256",total:567100043},{medicineId:65734435543,medicineName:"DolexAc",total:567100043},{medicineId:65734543,medicineName:"Primosta",total:78100043}]}return e.prototype.ngOnInit=function(){this.medicinetotals.length;this.myForm=this._fb.group({name:[""],total:["",[a.Validators.required,a.Validators.minLength(5)]],dispensations:this._fb.array([this.initDispensation()])})},e.prototype.initDispensation=function(){return this._fb.group({medicineBrandId:["",a.Validators.required],quantity:["",a.Validators.required],lote:[""]})},e.prototype.addDispensation=function(){this.myForm.controls.dispensations.push(this.initDispensation())},e.prototype.removeDispensation=function(e){this.myForm.controls.dispensations.removeAt(e)},e.prototype.save=function(e){console.log(e)},e.prototype.clickMedicine=function(e){console.log(e),this.router.navigate(["/medicinedispenseform",e])},e.prototype.onRowSelect=function(e){console.log(e.data.medicineId),console.log(e.data.medicineName),console.log(e.data.total),this.router.navigate(["/medicinedispenseform",e.data])},e.prototype.onRowUnselect=function(e){console.log(e.data.medicineId),console.log(e.data.medicineName),console.log(e.data.total)},e.ctorParameters=function(){return[{type:a.FormBuilder},{type:i.l}]},e}(),c=l("hinO"),r=l("4cOY"),m=l("P0cP"),s=l("pQo2"),p=l("HXr0"),f=l("/zAi"),M=[[""]],h=t["\u0275crt"]({encapsulation:0,styles:M,data:{}}),g=t["\u0275ccf"]("app-medicinedispense",u,function(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,null,null,1,"app-medicinedispense",[],null,null,null,o,h)),t["\u0275did"](114688,null,0,u,[a.FormBuilder,i.l],null,null)],function(e,n){e(n,1,0)},null)},{},{},[]),y=l("qbdv"),R=function(){function e(){}return e.ctorParameters=function(){return[]},e}(),v=function(){return function(){}}(),C=l("tCmA"),D=l("Il9Y"),b=l("01UM"),I=l("Rs3a"),N=l("AS1N"),q=l("kmr5"),F=l("RMGI");l.d(n,"MedicineDispenseModuleNgFactory",function(){return w});var w=t["\u0275cmf"](d,[],function(e){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[g]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,y.NgLocalization,y.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,a.FormBuilder,a.FormBuilder,[]),t["\u0275mpd"](4608,a["\u0275i"],a["\u0275i"],[]),t["\u0275mpd"](4608,R,R,[]),t["\u0275mpd"](512,y.CommonModule,y.CommonModule,[]),t["\u0275mpd"](512,i.o,i.o,[[2,i.t],[2,i.l]]),t["\u0275mpd"](512,v,v,[]),t["\u0275mpd"](512,C.a,C.a,[]),t["\u0275mpd"](512,f.SharedModule,f.SharedModule,[]),t["\u0275mpd"](512,D.PanelModule,D.PanelModule,[]),t["\u0275mpd"](512,a["\u0275ba"],a["\u0275ba"],[]),t["\u0275mpd"](512,a.ReactiveFormsModule,a.ReactiveFormsModule,[]),t["\u0275mpd"](512,b.ButtonModule,b.ButtonModule,[]),t["\u0275mpd"](512,I.PaginatorModule,I.PaginatorModule,[]),t["\u0275mpd"](512,a.FormsModule,a.FormsModule,[]),t["\u0275mpd"](512,s.DataTableModule,s.DataTableModule,[]),t["\u0275mpd"](512,N.CalendarModule,N.CalendarModule,[]),t["\u0275mpd"](512,q.MultiSelectModule,q.MultiSelectModule,[]),t["\u0275mpd"](512,F.OrderListModule,F.OrderListModule,[]),t["\u0275mpd"](512,d,d,[]),t["\u0275mpd"](1024,i.j,function(){return[[{path:"",component:u}]]},[])])})}});