"use strict";(self.webpackChunksuperAdmin=self.webpackChunksuperAdmin||[]).push([[38],{9038:(I,_,l)=>{l.r(_),l.d(_,{OrderInfoModule:()=>R});var s=l(9808),f=l(1402),o=l(5e3),b=l(7556),T=l(5019),m=l(4594),p=l(6688),e=l(9224),a=l(4999);function A(t,i){1&t&&(o.TgZ(0,"th",21),o._uU(1," Start Address"),o.qZA())}function M(t,i){if(1&t&&(o.TgZ(0,"td",22),o._uU(1),o.qZA()),2&t){const r=i.$implicit;o.xp6(1),o.hij(" ",r.originAddress," ")}}function d(t,i){1&t&&(o.TgZ(0,"th",21),o._uU(1," End Address"),o.qZA())}function h(t,i){if(1&t&&(o.TgZ(0,"td",22),o._uU(1),o.qZA()),2&t){const r=i.$implicit;o.xp6(1),o.hij(" ",r.destinationAddress," ")}}function c(t,i){1&t&&(o.TgZ(0,"th",21),o._uU(1," Car Brand "),o.qZA())}function u(t,i){if(1&t&&(o.TgZ(0,"td",22),o._uU(1),o.qZA()),2&t){const r=i.$implicit;o.xp6(1),o.hij(" ",r.carBrand," ")}}function C(t,i){1&t&&(o.TgZ(0,"th",21),o._uU(1," Car Model "),o.qZA())}function v(t,i){if(1&t&&(o.TgZ(0,"td",22),o._uU(1),o.qZA()),2&t){const r=i.$implicit;o.xp6(1),o.hij(" ",r.carModel," ")}}function Z(t,i){1&t&&(o.TgZ(0,"th",21),o._uU(1," Car Number "),o.qZA())}function w(t,i){if(1&t&&(o.TgZ(0,"td",22),o._uU(1),o.qZA()),2&t){const r=i.$implicit;o.xp6(1),o.hij(" ",r.carNumber," ")}}function x(t,i){1&t&&(o.TgZ(0,"th",21),o._uU(1," Total "),o.qZA())}function D(t,i){if(1&t&&(o.TgZ(0,"td",22),o._uU(1),o.qZA()),2&t){const r=i.$implicit;o.xp6(1),o.hij(" ",r.totalPayment,"$ ")}}function P(t,i){1&t&&o._UZ(0,"tr",23)}function U(t,i){1&t&&o._UZ(0,"tr",24)}function B(t,i){if(1&t&&(o.TgZ(0,"table",10),o.ynx(1,11),o.YNc(2,A,2,0,"th",12),o.YNc(3,M,2,1,"td",13),o.BQk(),o.ynx(4,14),o.YNc(5,d,2,0,"th",12),o.YNc(6,h,2,1,"td",13),o.BQk(),o.ynx(7,15),o.YNc(8,c,2,0,"th",12),o.YNc(9,u,2,1,"td",13),o.BQk(),o.ynx(10,16),o.YNc(11,C,2,0,"th",12),o.YNc(12,v,2,1,"td",13),o.BQk(),o.ynx(13,17),o.YNc(14,Z,2,0,"th",12),o.YNc(15,w,2,1,"td",13),o.BQk(),o.ynx(16,18),o.YNc(17,x,2,0,"th",12),o.YNc(18,D,2,1,"td",13),o.BQk(),o._uU(19," orderInfo "),o.YNc(20,P,1,0,"tr",19),o.YNc(21,U,1,0,"tr",20),o.qZA()),2&t){const r=o.oxw();o.Q6J("dataSource",r.driversList),o.xp6(20),o.Q6J("matHeaderRowDef",r.displayedColumns),o.xp6(1),o.Q6J("matRowDefColumns",r.displayedColumns)}}const k=[{path:"",component:(()=>{class t{constructor(r,n,g,O){this.route=r,this.authService=n,this.router=g,this.orders=[],this.orders2=[],this.orderInfo2={},this.driversList=[],this.displayedColumns=["weight","symbol","carBrand","carModel","carNumber","carType"],this.id=this.route.snapshot.paramMap.get("id"),console.log(this.id),console.log(this.id),O.object("orders/"+this.id),this.authService.getOrderDoc(this.id).subscribe(y=>{console.log(y),this.orderInfo=y,console.log(this.orderInfo),this.orders2.push(this.orderInfo),console.log(this.orders2)}),this.getAllOrders(this.id)}ngOnInit(){}ngAfterViewInit(){}getAllOrders(r){this.authService.getAllOrdersByID(r).subscribe(n=>{this.driversList=n.map(g=>{const O=g.payload.doc.data();return O.id=g.payload.doc.id,O}),console.log(this.driversList)},n=>{alert("error")}),console.log(this.driversList)}logout(){this.authService.logout().then(()=>this.router.navigate(["/"])).catch(r=>console.log(r.message))}goToDrivers(){this.router.navigate(["/drivers"])}goToPassengers(){this.router.navigate(["/passengers"])}goToHome(){this.router.navigate(["/dashboard"])}goToOrders(){this.router.navigate(["/orders"])}goToMaps(){this.router.navigate(["/maps"])}goToSettings(){this.router.navigate(["/settings"])}}return t.\u0275fac=function(r){return new(r||t)(o.Y36(f.gz),o.Y36(b.e),o.Y36(f.F0),o.Y36(T.KQ))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-order-info"]],decls:57,vars:11,consts:[["aria-label","Color selection",1,"mat-chip-list-stacked"],[2,"background-color","rgb(214, 100, 43)"],[2,"color","white","justify-content","left","font-size","25px"],[1,"example-spacer"],[3,"click"],[2,"color","white",3,"click"],[1,"background"],[1,"example-card"],["mat-card-sm-image","",3,"src"],["mat-table","","class","mat-elevation-z8",3,"dataSource",4,"ngIf"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","weight"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","symbol"],["matColumnDef","carBrand"],["matColumnDef","carModel"],["matColumnDef","carNumber"],["matColumnDef","carType"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(r,n){1&r&&(o.TgZ(0,"mat-toolbar")(1,"mat-chip-list",0)(2,"mat-chip",1)(3,"span",2),o._uU(4,"Super-Admin "),o.qZA()()(),o._UZ(5,"span",3),o.TgZ(6,"a",4),o.NdJ("click",function(){return n.goToHome()}),o._uU(7,"Home"),o.qZA(),o.TgZ(8,"a",4),o.NdJ("click",function(){return n.goToDrivers()}),o._uU(9,"Drivers"),o.qZA(),o.TgZ(10,"a",4),o.NdJ("click",function(){return n.goToPassengers()}),o._uU(11,"Passengers"),o.qZA(),o.TgZ(12,"a",4),o.NdJ("click",function(){return n.goToOrders()}),o._uU(13,"Orders"),o.qZA(),o.TgZ(14,"a",4),o.NdJ("click",function(){return n.goToMaps()}),o._uU(15,"Track Drivers"),o.qZA(),o.TgZ(16,"a",4),o.NdJ("click",function(){return n.goToSettings()}),o._uU(17,"Settings"),o.qZA(),o._UZ(18,"span",3)(19,"span",3)(20,"span",3)(21,"span",3)(22,"span",3)(23,"span",3)(24,"span",3)(25,"span",3)(26,"span",3)(27,"span",3),o.TgZ(28,"mat-chip-list",0)(29,"mat-chip",1)(30,"a",5),o.NdJ("click",function(){return n.logout()}),o._uU(31,"Log out"),o.qZA()()()(),o.TgZ(32,"div",6)(33,"h1"),o._uU(34,"Driver & Passenger Information"),o.qZA()(),o.TgZ(35,"mat-card",7)(36,"mat-card-title-group")(37,"mat-card-title"),o._uU(38),o.qZA(),o.TgZ(39,"mat-card-subtitle"),o._uU(40),o.qZA(),o._UZ(41,"img",8),o.qZA(),o.TgZ(42,"mat-card-content"),o._uU(43),o.qZA()(),o.TgZ(44,"mat-card",7)(45,"mat-card-title-group")(46,"mat-card-title"),o._uU(47),o.qZA(),o.TgZ(48,"mat-card-subtitle"),o._uU(49,"Hadriel Passenger Application"),o.qZA(),o._UZ(50,"img",8),o.qZA(),o.TgZ(51,"mat-card-content"),o._uU(52),o.qZA()(),o.TgZ(53,"div",6)(54,"h1"),o._uU(55,"Order Information"),o.qZA(),o.YNc(56,B,22,3,"table",9),o.qZA()),2&r&&(o.xp6(38),o.Oqu(null==n.orderInfo?null:n.orderInfo.driverName),o.xp6(2),o.HOy("",null==n.orderInfo?null:n.orderInfo.carBrand," ",null==n.orderInfo?null:n.orderInfo.carModel," ",null==n.orderInfo?null:n.orderInfo.carNumber," ",null==n.orderInfo?null:n.orderInfo.carType,""),o.xp6(1),o.s9C("src",null==n.orderInfo?null:n.orderInfo.driverPhoto,o.LSH),o.xp6(2),o.hij(" Phone : ",null==n.orderInfo?null:n.orderInfo.driverPhone," "),o.xp6(4),o.Oqu(null==n.orderInfo?null:n.orderInfo.userName),o.xp6(3),o.s9C("src",null==n.orderInfo?null:n.orderInfo.userPhoto,o.LSH),o.xp6(2),o.hij(" Phone : ",null==n.orderInfo?null:n.orderInfo.userPhone," "),o.xp6(4),o.Q6J("ngIf",n.driversList))},directives:[m.Ye,p.qn,p.HS,e.a8,e.C1,e.n5,e.$j,e.vP,e.dn,s.O5,a.BZ,a.w1,a.fO,a.ge,a.Dz,a.ev,a.as,a.XQ,a.nj,a.Gk],styles:["h1[_ngcontent-%COMP%]{color:#fff;font-size:30px;font-weight:bolder;background-color:#cb572d;width:-moz-fit-content;width:fit-content;border-radius:10%}h2[_ngcontent-%COMP%]{color:#698893;margin-bottom:50px}a[_ngcontent-%COMP%]{color:#fff;border-bottom:2px solid transparent;transition:1s border-bottom;padding:10px;justify-content:center;text-align:center}a[_ngcontent-%COMP%]:hover{color:#cb572d;border-bottom:2px solid transparent;font-size:20px;background-color:#fff;border-radius:10%;padding:4px}mat-toolbar[_ngcontent-%COMP%]{background-color:#dd9176;opacity:1;display:flex;justify-items:flex-start}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-row[_ngcontent-%COMP%]:nth-child(even){background-color:#dd9176;opacity:.9}.mat-row[_ngcontent-%COMP%]:nth-child(even):hover{background-color:#dd9176;opacity:1}.mat-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#dd9176;opacity:.8}.mat-row[_ngcontent-%COMP%]:nth-child(odd):hover{background-color:#dd9176;opacity:1}.mat-header-cell[_ngcontent-%COMP%]{background-color:#d57856;font-size:medium;font-weight:700;opacity:1}.background[_ngcontent-%COMP%]{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;height:calc(100vh - 650px);padding:20px;background-color:#fff}.btn[_ngcontent-%COMP%]{background-color:#2d3dcb;border-radius:20px;color:#fff;padding:10px 30px;text-decoration:none;transition:.5s background-color}a[_ngcontent-%COMP%]:hover{border-bottom:2px solid #2d3dcb;cursor:pointer}.btn[_ngcontent-%COMP%]:hover{background-color:#cb572d}table[_ngcontent-%COMP%]{width:100%}.example-card[_ngcontent-%COMP%]{background-color:#dd9176;transition:.5s background-color;padding:20px;margin:20px}"]}),t})()}];let N=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[f.Bz.forChild(k)],f.Bz]}),t})();var E=l(7423);let R=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.ez,N,m.g0,a.p0,p.Hi,E.ot,e.QW]]}),t})()},7556:(I,_,l)=>{l.d(_,{e:()=>T});var s=l(7323),f=l(8937),o=l(5e3),b=l(6185);let T=(()=>{class m{constructor(e,a){this.auth=e,this.afs=a,this.commisions=a.collection("commision"),this.settings=a.collection("settings")}login({email:e,password:a}){return(0,s.e5)(this.auth,e,a)}loginWithGoogle(){return(0,s.rh)(this.auth,new f.hJ)}register({email:e,password:a}){return(0,s.Xb)(this.auth,e,a)}logout(){return(0,s.w7)(this.auth)}getAllDrivers(){return this.afs.collection("/drivers").snapshotChanges()}getAllPassengers(){return this.afs.collection("/users").snapshotChanges()}getAllOrders(){return this.afs.collection("/orders").snapshotChanges()}getAllTaxis(){return this.afs.collection("/locations").snapshotChanges()}getUserDoc(e){return this.afs.collection("drivers").doc(e).valueChanges()}getAllOrdersByDriver(e){return this.afs.collection("orders",a=>a.where("driverId","==",e)).snapshotChanges()}getPassengerDoc(e){return this.afs.collection("users").doc(e).valueChanges()}getAllOrdersByPassenger(e){return this.afs.collection("orders",a=>a.where("userId","==",e)).snapshotChanges()}getOrderDoc(e){return this.afs.collection("orders").doc(e).valueChanges()}getAllOrdersByID(e){return this.afs.collection("orders",a=>a.where("timestamp","==",e)).snapshotChanges()}getAllSettings(){return this.afs.collection("/settings").snapshotChanges()}getSettingDoc(e){return this.afs.collection("settings").doc(e).valueChanges()}getCommisionDoc(e){return this.afs.collection("commision").doc("commisionPercent").valueChanges()}updateCommision(e){return this.commisions.doc("commisionPercent/").update(e)}updateSettings(e,a){return this.settings.doc(e).update(a)}}return m.\u0275fac=function(e){return new(e||m)(o.LFG(s.gx),o.LFG(b.ST))},m.\u0275prov=o.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},4594:(I,_,l)=>{l.d(_,{Ye:()=>a,g0:()=>M});var s=l(5e3),f=l(508),o=l(9808),b=l(925);const T=["*",[["mat-toolbar-row"]]],m=["*","mat-toolbar-row"],p=(0,f.pj)(class{constructor(d){this._elementRef=d}});let e=(()=>{class d{}return d.\u0275fac=function(c){return new(c||d)},d.\u0275dir=s.lG2({type:d,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),d})(),a=(()=>{class d extends p{constructor(c,u,C){super(c),this._platform=u,this._document=C}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return d.\u0275fac=function(c){return new(c||d)(s.Y36(s.SBq),s.Y36(b.t4),s.Y36(o.K0))},d.\u0275cmp=s.Xpm({type:d,selectors:[["mat-toolbar"]],contentQueries:function(c,u,C){if(1&c&&s.Suo(C,e,5),2&c){let v;s.iGM(v=s.CRH())&&(u._toolbarRows=v)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(c,u){2&c&&s.ekj("mat-toolbar-multiple-rows",u._toolbarRows.length>0)("mat-toolbar-single-row",0===u._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[s.qOj],ngContentSelectors:m,decls:2,vars:0,template:function(c,u){1&c&&(s.F$t(T),s.Hsn(0),s.Hsn(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],encapsulation:2,changeDetection:0}),d})(),M=(()=>{class d{}return d.\u0275fac=function(c){return new(c||d)},d.\u0275mod=s.oAB({type:d}),d.\u0275inj=s.cJS({imports:[[f.BQ],f.BQ]}),d})()}}]);