"use strict";(self.webpackChunksuperAdmin=self.webpackChunksuperAdmin||[]).push([[840],{7556:(C,f,n)=>{n.d(f,{e:()=>_});var r=n(7323),g=n(8937),e=n(5e3),t=n(6185);let _=(()=>{class m{constructor(o,i){this.auth=o,this.afs=i,this.commisions=i.collection("commision"),this.settings=i.collection("settings")}login({email:o,password:i}){return(0,r.e5)(this.auth,o,i)}loginWithGoogle(){return(0,r.rh)(this.auth,new g.hJ)}register({email:o,password:i}){return(0,r.Xb)(this.auth,o,i)}logout(){return(0,r.w7)(this.auth)}getAllDrivers(){return this.afs.collection("/drivers").snapshotChanges()}getAllPassengers(){return this.afs.collection("/users").snapshotChanges()}getAllOrders(){return this.afs.collection("/orders").snapshotChanges()}getAllTaxis(){return this.afs.collection("/locations").snapshotChanges()}getUserDoc(o){return this.afs.collection("drivers").doc(o).valueChanges()}getAllOrdersByDriver(o){return this.afs.collection("orders",i=>i.where("driverId","==",o)).snapshotChanges()}getPassengerDoc(o){return this.afs.collection("users").doc(o).valueChanges()}getAllOrdersByPassenger(o){return this.afs.collection("orders",i=>i.where("userId","==",o)).snapshotChanges()}getOrderDoc(o){return this.afs.collection("orders").doc(o).valueChanges()}getAllOrdersByID(o){return this.afs.collection("orders",i=>i.where("timestamp","==",o)).snapshotChanges()}getAllSettings(){return this.afs.collection("/settings").snapshotChanges()}getSettingDoc(o){return this.afs.collection("settings").doc(o).valueChanges()}getCommisionDoc(o){return this.afs.collection("commision").doc("commisionPercent").valueChanges()}updateCommision(o){return this.commisions.doc("commisionPercent/").update(o)}updateSettings(o,i){return this.settings.doc(o).update(i)}}return m.\u0275fac=function(o){return new(o||m)(e.LFG(r.gx),e.LFG(t.ST))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},3840:(C,f,n)=>{n.r(f),n.d(f,{EditTaxiTypeModule:()=>v});var r=n(9808),g=n(1402),e=n(3075),t=n(5e3),_=n(7556),m=n(5019),T=n(4594),o=n(6688),i=n(4106),M=n(7531);const a=[{path:"",component:(()=>{class s{constructor(l,d,h,A,x){this.route=l,this.authService=d,this.router=h,this.db=A,this.fb=x,this.taxiTypes=[],this.longText="text",this.dataSource=[],this.displayedColumns=["position","name","weight","symbol","action"],this.hideRequiredControl=new e.NI(!1),this.floatLabelControl=new e.NI("auto");const P=A.list("settings");this.id=this.route.snapshot.paramMap.get("id"),console.log(this.id),this.authService.getSettingDoc(this.id).subscribe(y=>{console.log(y),this.driverInfo=y,this.options=x.group({hideRequired:this.hideRequiredControl,floatLabel:this.floatLabelControl,key:[this.driverInfo.key,[e.kI.required]],price:[this.driverInfo.price,e.kI.required],timePrice:[this.driverInfo.timePrice,[e.kI.required]],image:[this.driverInfo.image,e.kI.required]}),console.log(this.driverInfo)}),this.options=x.group({hideRequired:this.hideRequiredControl,floatLabel:this.floatLabelControl,key:["",[e.kI.required]],price:["",e.kI.required],timePrice:["",[e.kI.required]],image:["",e.kI.required]}),P.valueChanges().subscribe(y=>{null!=y&&(this.taxiTypes.push(y),console.log(this.taxiTypes))}),console.log(this.taxiTypes)}ngOnInit(){}logout(){this.authService.logout().then(()=>this.router.navigate(["/"])).catch(l=>console.log(l.message))}goToDrivers(){this.router.navigate(["/drivers"])}goToPassengers(){this.router.navigate(["/passengers"])}goToHome(){this.router.navigate(["/dashboard"])}goToOrders(){this.router.navigate(["/orders"])}goToMap(){this.router.navigate(["/maps"])}goToSettings(){this.router.navigate(["/settings"])}navigateTaxiType(l){console.log(l),this.router.navigate(["/editTaxiType",l])}onSubmit(){console.log("on submit");const l={key:this.options.value.key,price:this.options.value.price,timePrice:this.options.value.timePrice,image:this.options.value.image};this.authService.updateSettings(l.key,l).then(()=>{this.router.navigate(["/dashboard"])}).catch(d=>console.log(d))}}return s.\u0275fac=function(l){return new(l||s)(t.Y36(g.gz),t.Y36(_.e),t.Y36(g.F0),t.Y36(m.KQ),t.Y36(e.qu))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-edit-taxi-type"]],decls:60,vars:2,consts:[["aria-label","Color selection",1,"mat-chip-list-stacked"],[2,"background-color","rgb(214, 100, 43)"],[2,"color","white","justify-content","left","font-size","25px"],[1,"example-spacer"],[3,"click"],[2,"color","white",3,"click"],[1,"background"],[1,"form",3,"formGroup","ngSubmit"],[2,"flex","1"],[1,"form-control"],[2,"color","black"],["matInput","","formControlName","key","type","text","required","","readonly",""],["matInput","","formControlName","price","type","number","required",""],["matInput","","formControlName","timePrice","type","number","required",""],["matInput","","formControlName","image","type","text","required",""],[1,"form-footer",2,"background-color","#cb572d","border-radius","50px","justify-content","center","text-align","center"],["mat-raised-button","","type","submit",2,"background-color","transparent","border","0","width","100%",3,"disabled"],[2,"color","white"]],template:function(l,d){1&l&&(t.TgZ(0,"mat-toolbar")(1,"mat-chip-list",0)(2,"mat-chip",1)(3,"span",2),t._uU(4,"Super-Admin "),t.qZA()()(),t._UZ(5,"span",3),t.TgZ(6,"a",4),t.NdJ("click",function(){return d.goToHome()}),t._uU(7,"Home"),t.qZA(),t.TgZ(8,"a",4),t.NdJ("click",function(){return d.goToDrivers()}),t._uU(9,"Drivers"),t.qZA(),t.TgZ(10,"a",4),t.NdJ("click",function(){return d.goToPassengers()}),t._uU(11,"Passengers"),t.qZA(),t.TgZ(12,"a",4),t.NdJ("click",function(){return d.goToOrders()}),t._uU(13,"Orders"),t.qZA(),t.TgZ(14,"a",4),t.NdJ("click",function(){return d.goToMap()}),t._uU(15,"Track Drivers"),t.qZA(),t.TgZ(16,"a",4),t.NdJ("click",function(){return d.goToSettings()}),t._uU(17,"Settings"),t.qZA(),t._UZ(18,"span",3)(19,"span",3)(20,"span",3)(21,"span",3)(22,"span",3)(23,"span",3)(24,"span",3)(25,"span",3)(26,"span",3)(27,"span",3),t.TgZ(28,"mat-chip-list",0)(29,"mat-chip",1)(30,"a",5),t.NdJ("click",function(){return d.logout()}),t._uU(31,"Log out"),t.qZA()()()(),t.TgZ(32,"div",6)(33,"h1"),t._uU(34,"Edit Taxi type info"),t.qZA(),t.TgZ(35,"form",7),t.NdJ("ngSubmit",function(){return d.onSubmit()}),t.TgZ(36,"div",8)(37,"mat-form-field",9)(38,"mat-label",10),t._uU(39,"Taxi type name"),t.qZA(),t._UZ(40,"input",11),t.qZA()(),t.TgZ(41,"div")(42,"mat-form-field",9)(43,"mat-label",10),t._uU(44,"Kilometer Price"),t.qZA(),t._UZ(45,"input",12),t.qZA()(),t.TgZ(46,"div")(47,"mat-form-field",9)(48,"mat-label",10),t._uU(49,"Time Price"),t.qZA(),t._UZ(50,"input",13),t.qZA()(),t.TgZ(51,"div")(52,"mat-form-field",9)(53,"mat-label",10),t._uU(54,"Image Path"),t.qZA(),t._UZ(55,"input",14),t.qZA()(),t.TgZ(56,"div",15)(57,"button",16)(58,"p",17),t._uU(59," Submit"),t.qZA()()()()()),2&l&&(t.xp6(35),t.Q6J("formGroup",d.options),t.xp6(22),t.Q6J("disabled",d.options.invalid))},directives:[T.Ye,o.qn,o.HS,e._Y,e.JL,e.sg,i.KE,i.hX,M.Nt,e.Fj,e.JJ,e.u,e.Q7,e.wV],styles:["h1[_ngcontent-%COMP%]{color:#fff;font-size:30px;font-weight:bolder;background-color:#cb572d;width:-moz-fit-content;width:fit-content;border-radius:10%}h2[_ngcontent-%COMP%]{color:#698893;margin-bottom:50px}a[_ngcontent-%COMP%]{color:#fff;border-bottom:2px solid transparent;transition:1s border-bottom;padding:10px;justify-content:center;text-align:center}a[_ngcontent-%COMP%]:hover{color:#cb572d;border-bottom:2px solid transparent;font-size:20px;background-color:#fff;border-radius:10%;padding:4px}mat-toolbar[_ngcontent-%COMP%]{background-color:#dd9176;opacity:1;display:flex;justify-items:flex-start}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-row[_ngcontent-%COMP%]:nth-child(even){background-color:#cb572d}.mat-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#cb572d}.mat-header-cell[_ngcontent-%COMP%]{background-color:#32b5c1}.background[_ngcontent-%COMP%]{justify-items:flex-start;box-sizing:border-box;display:flex;flex-direction:column;height:calc(100vh - 6px);padding:20px;background-color:#fff;opacity:.9}mat-form-field[_ngcontent-%COMP%]{width:100%}.btn[_ngcontent-%COMP%]{background-color:#cb572d;border-radius:20px;color:#fff;padding:10px 30px;text-decoration:none;transition:.5s background-color}a[_ngcontent-%COMP%]:hover{border-bottom:2px solid #cb572d;cursor:pointer}.btn[_ngcontent-%COMP%]:hover{background-color:#52b7c0}table[_ngcontent-%COMP%]{width:100%}"]}),s})()}];let p=(()=>{class s{}return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[g.Bz.forChild(a)],g.Bz]}),s})();var c=n(8099),u=n(4999);let v=(()=>{class s{}return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[{provide:i.o2,useValue:{floatLabel:"always"}}],imports:[[r.ez,p,T.g0,o.Hi,c.Ps,i.lN,M.c,u.p0,e.UX,e.u5]]}),s})()},4594:(C,f,n)=>{n.d(f,{Ye:()=>i,g0:()=>E});var r=n(5e3),g=n(508),e=n(9808),t=n(925);const _=["*",[["mat-toolbar-row"]]],m=["*","mat-toolbar-row"],T=(0,g.pj)(class{constructor(a){this._elementRef=a}});let o=(()=>{class a{}return a.\u0275fac=function(c){return new(c||a)},a.\u0275dir=r.lG2({type:a,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),a})(),i=(()=>{class a extends T{constructor(c,u,v){super(c),this._platform=u,this._document=v}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return a.\u0275fac=function(c){return new(c||a)(r.Y36(r.SBq),r.Y36(t.t4),r.Y36(e.K0))},a.\u0275cmp=r.Xpm({type:a,selectors:[["mat-toolbar"]],contentQueries:function(c,u,v){if(1&c&&r.Suo(v,o,5),2&c){let s;r.iGM(s=r.CRH())&&(u._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(c,u){2&c&&r.ekj("mat-toolbar-multiple-rows",u._toolbarRows.length>0)("mat-toolbar-single-row",0===u._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[r.qOj],ngContentSelectors:m,decls:2,vars:0,template:function(c,u){1&c&&(r.F$t(_),r.Hsn(0),r.Hsn(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],encapsulation:2,changeDetection:0}),a})(),E=(()=>{class a{}return a.\u0275fac=function(c){return new(c||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[[g.BQ],g.BQ]}),a})()}}]);