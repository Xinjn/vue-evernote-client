webpackJsonp([5],{"9Is+":function(t,e){},HpUY:function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"//note-server.hunger-valley.com"}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=n("zL8q"),a=n.n(r),u=(n("tvR6"),n("Dd8w")),s=n.n(u),i=n("//Fk"),c=n.n(i),d=n("mtWM"),l=n.n(d),f=n("Jdfc"),h=n.n(f);function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new c.a(function(o,a){var u={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?u.params=n:u.data=n,l()(u).then(function(t){200===t.status?o(t.data):(r.Message.error(t.data.msg),a(t.data))}).catch(function(t){r.Message.error("网络异常"),a({msg:"网络异常"})})})}l.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",l.a.defaults.baseURL=h.a.baseURL,l.a.defaults.withCredentials=!0;var b="/auth/register",m="/auth/login",v="/auth/logout",k="/auth",I=function(t){var e=t.username,n=t.password;return p(b,"POST",{username:e,password:n})},N=function(t){var e=t.username,n=t.password;return p(m,"POST",{username:e,password:n})},g=function(){return p(v)},A=function(){return p(k)},T=(new o.default,n("NYxO")),E={data:function(){return{}},created:function(){this.setUser()},methods:s()({},Object(T.b)({setUser:"checkLogin"})),computed:s()({},Object(T.c)(["username","slug"]),{slug:function(){return this.username.charAt(0)}})},w={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.username}},[this._v("\n    "+this._s(this.slug)+"\n")])},staticRenderFns:[]};var D={components:{avatar:n("VU/8")(E,w,!1,function(t){n("HpUY")},"data-v-2b7f4f1f",null).exports},methods:s()({},Object(T.b)(["logout"]),{onLogout:function(){this.logout({path:"/login"})}})},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout",on:{click:this.onLogout}},[e("i",{staticClass:"iconfont icon-logout"})])],1)},staticRenderFns:[]};var L={name:"App",components:{sidebar:n("VU/8")(D,y,!1,function(t){n("9Is+")},"data-v-2a688a9b",null).exports}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var U=n("VU/8")(L,O,!1,function(t){n("qA8a")},null,null).exports,C=n("/ocq"),j=C.a.prototype.push;C.a.prototype.push=function(t){return j.call(this,t).catch(function(t){return t})};var F=C.a.prototype.replace;C.a.prototype.replace=function(t){return F.call(this,t).catch(function(t){return t})},o.default.use(C.a);var _=new C.a({routes:[{path:"/",alias:"/notebooks",component:function(){return n.e(3).then(n.bind(null,"C3fl"))}},{path:"/login",component:function(){return n.e(2).then(n.bind(null,"xJsL"))}},{path:"/note",component:function(){return n.e(0).then(n.bind(null,"Gb2o"))}},{path:"/trash",component:function(){return n.e(1).then(n.bind(null,"WMg/"))}}]}),M=n("VmfC"),P={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},R=function(){return new c.a(function(t,e){p(P.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt?1:t.createdAt===e.createdAt?0:-1}),e.data.forEach(function(t){t.createdAtFriendly=Object(M.a)(t.createdAt),t.updatedAtFriendly=Object(M.a)(t.updatedAt)}),t(e)}).catch(function(t){e(t)})})},G=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""}).title,n=void 0===e?"":e;return p(P.UPDATE.replace(":id",t),"PATCH",{title:n})},x=function(t){return p(P.DELETE.replace(":id",t),"DELETE")},B=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""}).title,e=void 0===t?"":t;return new c.a(function(t,n){p(P.ADD,"POST",{title:e}).then(function(e){e.data.createdAtFriendly=Object(M.a)(e.data.createdAt),e.data.updatedAtFriendly=Object(M.a)(e.data.updatedAt),t(e)}).catch(function(t){n(t)})})},H={notebooks:null,curBookId:null},V={state:H,getters:{notebooks:function(t){return t.notebooks||[]},curBook:function(t){return Array.isArray(t.notebooks)?t.curBookId?t.notebooks.find(function(e){return e.id==t.curBookId})||{}:t.notebooks[0]||{}:{}}},mutations:{setNotebooks:function(t,e){t.notebooks=e.notebooks},addNotebook:function(t,e){t.notebooks.unshift(e.notebook)},updateNotebook:function(t,e){(t.notebooks.find(function(t){return t.id==e.notebookId})||{}).title=e.title},deleteNotebook:function(t,e){t.notebooks=t.notebooks.filter(function(t){return t.id!=e.notebookId})},setCurBook:function(t,e){t.curBookId=e.curBookId}},actions:{getNotebooks:function(t){var e=t.commit;return null!==H.notebooks?c.a.resolve():R().then(function(t){e("setNotebooks",{notebooks:t.data})})},addNotebook:function(t,e){var n=t.commit;return B({title:e.title}).then(function(t){n("addNotebook",{notebook:t.data}),r.Message.success(t.msg)})},updateNotebook:function(t,e){var n=t.commit;return G(e.notebookId,{title:e.title}).then(function(t){n("updateNotebook",{notebookId:e.notebookId,title:e.title}),r.Message.success(t.msg)})},deleteNotebook:function(t,e){var n=t.commit;return x(e.notebookId).then(function(t){n("deleteNotebook",{notebookId:e.notebookId}),r.Message.success(t.msg)})}}},S={GET:"/notes/from/:notebookId",ADD:"/notes/to/:notebookId",UPDATE:"/notes/:noteId",DELETE:"/notes/:noteId"},q=function(t){var e=t.notebookId;return new c.a(function(t,n){p(S.GET.replace(":notebookId",e)).then(function(e){e.data=e.data.map(function(t){return t.createdAtFriendly=Object(M.a)(t.createdAt),t.updatedAtFriendly=Object(M.a)(t.updatedAt),t}).sort(function(t,e){return t.updatedAt<e.updatedAt?1:t.updatedAt===e.updatedAt?0:-1}),t(e)}).catch(function(t){n(t)})})},J=function(t,e){var n=t.noteId,o=e.title,r=e.content;return p(S.UPDATE.replace(":noteId",n),"PATCH",{title:o,content:r})},Y=function(t){var e=t.noteId;return p(S.DELETE.replace(":noteId",e),"DELETE")},W=function(t){var e=t.notebookId,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:"",content:""},o=n.title,r=void 0===o?"":o,a=n.content,u=void 0===a?"":a;return new c.a(function(t,n){p(S.ADD.replace(":notebookId",e),"POST",{title:r,content:u}).then(function(e){e.data.createdAtFriendly=Object(M.a)(e.data.createdAt),e.data.updatedAtFriendly=Object(M.a)(e.data.updatedAt),t(e)}).catch(function(t){n(t)})})},$={state:{notes:null,curNoteId:null},getters:{notes:function(t){return t.notes||{}},curNote:function(t){return Array.isArray(t.notes)?t.curNoteId?t.notes.find(function(e){return e.id==t.curNoteId})||{title:"",content:""}:t.notes[0]||{title:"",content:""}:{title:"",content:""}}},mutations:{setNotes:function(t,e){t.notes=e.notes},addNote:function(t,e){t.notes.unshift(e.note)},updateNote:function(t,e){var n=t.notes.find(function(t){return t.id===e.noteId})||{};n.title=e.title,n.content=e.content},deleteNote:function(t,e){t.notes=t.notes.filter(function(t){return t.id!==e.noteId})},setCurNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curNoteId=e.curNoteId}},actions:{getNotes:function(t,e){var n=t.commit,o=e.notebookId;return q({notebookId:o}).then(function(t){n("setNotes",{notes:t.data})})},addNote:function(t,e){var n=t.commit,o=e.notebookId,r=e.title,a=e.content;return W({notebookId:o},{title:r,content:a}).then(function(t){n("addNote",{note:t.data})})},updateNote:function(t,e){var n=t.commit,o=e.noteId,r=e.title,a=e.content;return J({noteId:o},{title:r,content:a}).then(function(t){n("updateNote",{noteId:o,title:r,content:a})})},deleteNote:function(t,e){var n=t.commit,o=e.noteId;return Y({noteId:o}).then(function(t){n("deleteNote",{noteId:o}),r.Message.success(t.msg)})}}},z={GET:"/notes/trash",REVERT:"/notes/:noteId/revert",DELETE:"/notes/:noteId/confirm"},K=function(){return new c.a(function(t,e){p(z.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt?-1:(t.createdAt=e.createdAt)?0:1}),e.data.forEach(function(t){t.createdAtFriendly=Object(M.a)(t.createdAt),t.updatedAtFriendly=Object(M.a)(t.updatedAt)}),t(e)}).catch(function(t){e(t)})})},Q=function(t){var e=t.noteId;return p(z.DELETE.replace(":noteId",e),"DELETE")},X=function(t){var e=t.noteId;return p(z.REVERT.replace(":noteId",e),"PATCH")},Z={state:{trashNotes:null,curTrashNoteId:null},getters:{trashNotes:function(t){return t.trashNotes||{}},curTrashNote:function(t,e){return t.curTrashNoteId?t.trashNotes.find(function(e){return e.id==t.curTrashNoteId})||{}:e.trashNotes[0]||{}},belongTo:function(t,e,n,o){return(o.notebooks.find(function(t){return t.id==e.curTrashNote.notebookId})||{}).title||""}},mutations:{setTrashNotes:function(t,e){t.trashNotes=e.trashNotes},addTrashNote:function(t,e){setTrashNotes.unshift(e.note)},deleteTrashNote:function(t,e){t.trashNotes=t.trashNotes.filter(function(t){return t.id!=e.noteId})},setCurTrashNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curTrashNoteId=e.curTrashNoteId}},actions:{getTrashNotes:function(t){var e=t.commit;return K().then(function(t){e("setTrashNotes",{trashNotes:t.data})})},deleteTrashNote:function(t,e){var n=t.commit,o=e.noteId;return Q({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),r.Message.success(t.msg)})},revertTrashNote:function(t,e){var n=t.commit,o=e.noteId;return X({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),r.Message.success(t.msg)})}}};window.router=_;var tt={user:null},et={state:tt,getters:{username:function(t){return null===t.user?"未登录":t.user.username},slug:function(t){return null===t.user?"未":t.user.username.chartAt(0)}},mutations:{setUser:function(t,e){t.user=e.user}},actions:{login:function(t,e){var n=t.commit,o=e.username,r=e.password;return N({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},register:function(t,e){var n=t.commit,o=e.username,r=e.password;return I({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},logout:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/login"};return g().then(function(t){e("setUser",{user:null}),_.push(n)})},checkLogin:function(t,e){var n=t.commit;return null!==tt.user?c.a.resolve():A().then(function(t){t.isLogin?n("setUser",{user:t.data}):(console.log("jump"),_.push(e))})}}};o.default.use(T.a);var nt=new T.a.Store({modules:{notebook:V,note:$,trash:Z,user:et}});o.default.use(a.a),o.default.config.productionTip=!1,new o.default({store:nt,el:"#app",router:_,components:{App:U},template:"<App/>"})},VmfC:function(t,e,n){"use strict";e.a=function(t){var e=("object"===(void 0===t?"undefined":r()(t))?t:new Date(t)).getTime(),n=Date.now()-e,o="";switch(!0){case n<6e4:o="刚刚";break;case n<36e5:o=Math.floor(n/6e4)+"分钟前";break;case n<864e5:o=Math.floor(n/36e5)+"小时前";break;default:o=Math.floor(n/864e5)+"天前"}return o};var o=n("pFYg"),r=n.n(o)},qA8a:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3c538c44fdc5c121e1ec.js.map