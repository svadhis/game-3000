(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){e.exports=n(167)},106:function(e,t,n){},107:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},120:function(e,t,n){},122:function(e,t,n){},160:function(e,t){},167:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),l=(n(106),n(7)),o=n(6),s=(n(107),n(32)),u=n(3),m=n(59),d=n(2),p=(n(122),function(){var e=Object(u.c)(function(e){return e.room.number});return r.a.createElement("div",{className:"room-ribbon"},e)}),f=n(94),v=n.n(f),b=(n(67),function(){return Object(a.useEffect)(function(){var e=document.querySelector(".connecting-container");v()(e,{fromOpacity:0,opacity:.4,duration:300})},[]),r.a.createElement("div",{className:"connecting-container"},r.a.createElement("div",{className:"connecting"}))}),y=function(){return r.a.createElement("div",{className:"played-container"},r.a.createElement("h2",{className:""},"en attente des autres joueurs..."))},E=n(48);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var j=Object(E.withSnackbar)(function(e){var t=Object(u.c)(function(e){return[e,e.room.number,e.room.view,e.room.props,e.socket,e.playerName,e.player,e.owner,e.played,e.connected]}),n=Object(o.a)(t,10),c=n[0],i=n[1],f=n[2],v=n[3],E=n[4],j=n[5],g=n[6],O=n[7],w=n[8],S=n[9],k=Object(u.b)(),x=Object(s.useCurrentWidth)(),N=1===g?"player":1===O?"owner":x<=576?"player":"owner";return Object(a.useEffect)(function(){E.on("connect_error",function(e){k(d.setState("connected",0))}),E.on("connect",function(){k(d.setState("connected",1))}),E.on("action",function(e){var t=d[e.action],n=e.payload;k(t(n))}),E.on("flash",function(t){(t.target===N||"all"===t.target)&&e.enqueueSnackbar(t.message,{variant:t.type,autoHideDuration:3e3})})},[]),Object(a.useEffect)(function(){E.on("connect",function(){1===g?E.emit("heartbeat",{status:"player",room:i,player:j}):1===O&&E.emit("heartbeat",{status:"player",room:i})})},[i]),Object(a.useEffect)(function(){0===S?e.enqueueSnackbar("Pas de connexion au serveur...",{variant:"error",persist:!0,preventDuplicate:!0}):e.closeSnackbar()},[S]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(Object(m.a)(f,N),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},v)||null)),console.log(c),i&&1===O&&r.a.createElement(p),!0===w&&f&&r.a.createElement(y),0===S&&r.a.createElement(b))}),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var w=n(43),S=n(21),k=n(95),x=n.n(k),N=n(96),P=n.n(N),C={socket:x()("https://server-3000.herokuapp.com"),noSleep:new P.a,timer:-1,showIns:!0,problemDefault:0,placeholder:"",played:!1,brush:"#444",gameData:{},dataPart:"start",connected:1,owner:0,player:0,playerName:"",money:-1,investment:{},room:{view:"Home"}};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var T=Object(w.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=I({},e);switch(t.type){case"UPDATE_ROOM_STATE":n.flash="",n.room=I({},n.room,{},t.room);break;case"SET":n[t.state]=t.value;break;case"ADD":n[t.state]=n[t.state]+t.value;break;case"TOGGLE":n[t.state]=!n[t.state];break;case"PUSH":n[t.state]=[].concat(Object(S.a)(n[t.state]),[t.value]);break;case"KEY":n[t.state]=I({},n[t.state],Object(l.a)({},t.key,t.value));break;case"IS_PLAYER":n.player=t.player,n.playerName=t.name}return n});i.a.render(r.a.createElement(u.a,{store:T},r.a.createElement(s.BreakpointProvider,null,r.a.createElement(E.SnackbarProvider,{maxSnack:3},r.a.createElement(j,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");g?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):O(t,e)})}}()},2:function(e,t,n){"use strict";n.r(t),n.d(t,"updateRoomState",function(){return a}),n.d(t,"setState",function(){return r}),n.d(t,"addToState",function(){return c}),n.d(t,"toggleState",function(){return i}),n.d(t,"pushToArray",function(){return l}),n.d(t,"pushToObject",function(){return o}),n.d(t,"isPlayer",function(){return s});var a=function(e){return{type:"UPDATE_ROOM_STATE",room:e.room,player:e.data}},r=function(e,t){return{type:"SET",state:e,value:t}},c=function(e,t){return{type:"ADD",state:e,value:t}},i=function(e){return{type:"TOGGLE",state:e}},l=function(e,t){return{type:"PUSH",state:e,value:t}},o=function(e,t,n){return{type:"KEY",state:e,key:t,value:n}},s=function(e,t){return{type:"IS_PLAYER",player:e,name:t}}},28:function(e,t,n){},59:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return r});var a=n(97),r=function(e,t){var n="player"===t?1:0;return a.a[e][n]}}).call(this,n(31))},63:function(e,t,n){},67:function(e,t,n){},97:function(e,t,n){"use strict";var a=n(21),r=n(6),c=n(0),i=n.n(c),l=n(3),o=(n(59),n(2)),s=(n(63),n(32),n(188)),u=(n(112),function(e){return i.a.createElement("button",{className:e.type+"-button",id:e.id,onClick:function(){e.onClick(e.data)},disabled:e.disabled},e.value)}),m=(n(113),n(184)),d=function(e){return i.a.createElement("button",{className:"color-button",onClick:function(){return e.onClick(e.color)}},"undo"===e.value?i.a.createElement(m.a,{className:"undo"}):i.a.createElement("div",{class:e.value}))},p=(n(114),function(e){return i.a.createElement("h1",{className:"mytitle "+e.size},i.a.createElement("span",null,"G"),i.a.createElement("span",null,"A"),i.a.createElement("span",null,"M"),i.a.createElement("span",null,"E"),i.a.createElement("span",null," : "),i.a.createElement("span",null,"3"),i.a.createElement("span",null,"0"),i.a.createElement("span",null,"0"),i.a.createElement("span",null,"0"))}),f=(n(115),function(e){return i.a.createElement(s.a,{className:e.type+"-input",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},i.a.createElement("input",{type:"text",id:e.id,placeholder:e.value,disabled:e.disabled,onKeyPress:function(t){"Enter"===t.key&&e.onKeyPress(e.data)}}),i.a.createElement("div",{className:"line"}))}),v=(n(116),function(e){return i.a.createElement("div",{className:"illustration"},i.a.createElement("img",{src:e.image}))}),b=(n(117),n(22)),y=function(e){return i.a.createElement("div",{id:"vote-container-"+e.player},i.a.createElement(s.a,{id:"vote-card-"+e.player,className:"vote-card",width:"40vw",height:"7vw",minHeight:"75px",display:"flex",justifyContent:"flex-start",alignItems:"center"},i.a.createElement("div",{className:"player-picture"},i.a.createElement(b.a,{hideGrid:!0,canvasWidth:.065*window.innerWidth,canvasHeight:.065*window.innerWidth,disabled:!0,saveData:e.drawing,immediateLoading:!0})),i.a.createElement("div",{className:"vote-card-data"},i.a.createElement("h1",null,e.name),i.a.createElement("h3",null,e.catch))))},E=(n(120),function(){var e=Object(l.c)(function(e){return[e.socket,e.room.view,e.timer,e.room.subtitles,e.room.presentOrder,e.room.players.length]}),t=Object(r.a)(e,6),n=t[0],a=t[1],s=t[2],u=t[3],m=t[4],d=(t[5],Object(l.b)()),p={};switch(a){case"CreatingStep":0===s&&n.emit("set-view",["MakeProblem"]),p.time=1,p.image="https://www.setaswall.com/wp-content/uploads/2018/05/Space-Planet-2-Wallpaper-800x480.jpg",p.view=function(){return s>15?i.a.createElement("div",null,"Nous sommes entour\xe9s de toutes sortes d'objets pratiques qui r\xe9pondent \xe0 nos besoins."):s>10?i.a.createElement("div",null,"Beaucoup proviennent de Corp 3000, une entreprise florissante qui propose des solutions innovantes dans toute la Galaxie."):s>5?i.a.createElement("div",null,"Mais savez-vous comment sont con\xe7us ces produits utiles \xe0 la vie de tous les jours ?"):s>0&&i.a.createElement("div",null,"Tout commence au d\xe9partement de recensement, qui se charge d'identifier les probl\xe8mes auxquels nous faisons face au quotidien.")};break;case"StartDrawing":0===s&&(d(Object(o.setState)("timer",-1)),n.emit("set-view",["GetProblem"])),p.time=5,p.image="https://www.setaswall.com/wp-content/uploads/2018/05/Space-Planet-2-Wallpaper-800x480.jpg",p.view=function(){return s>15?i.a.createElement("div",null,"premieres instructions"):s>10?i.a.createElement("div",null,"deuxiemes instructions"):s>5?i.a.createElement("div",null,"troisiemes instructions"):s>0&&i.a.createElement("div",null,"On confie alors ces probl\xe8mes \xe0 l'\xe9quipe des ing\xe9nieurs, qui mettent au point des solutions efficaces.")};break;case"GetProblem":0===s&&n.emit("set-view",["MakeDrawing"]),p.time=5,p.image="https://www.setaswall.com/wp-content/uploads/2018/05/Space-Planet-2-Wallpaper-800x480.jpg",p.view=function(){return s>15?i.a.createElement("div",null,"premieres instructions"):s>10?i.a.createElement("div",null,"deuxiemes instructions"):s>5?i.a.createElement("div",null,"troisiemes instructions"):s>0&&i.a.createElement("div",null,"VOILA TON PROBLEME !")};break;case"StartData":0===s&&n.emit("set-view",["MakeData"]),p.time=5,p.image="https://www.setaswall.com/wp-content/uploads/2018/05/Space-Planet-2-Wallpaper-800x480.jpg",p.view=function(){return s>15?i.a.createElement("div",null,"premieres instructions"):s>10?i.a.createElement("div",null,"deuxiemes instructions"):s>5?i.a.createElement("div",null,"troisiemes instructions"):s>0&&i.a.createElement("div",null,"Une fois les objets con\xe7us, c'est au d\xe9partement marketing d'entrer en action pour assurer la r\xe9ussite commerciale de ces produits.")};break;case"PresentingStep":0===s&&n.emit("set-view",["StartPresentation"]),p.time=5,p.image="https://www.setaswall.com/wp-content/uploads/2018/05/Space-Planet-2-Wallpaper-800x480.jpg",p.view=function(){return s>15?i.a.createElement("div",null,"premieres instructions"):s>10?i.a.createElement("div",null,"deuxiemes instructions"):s>5?i.a.createElement("div",null,"troisiemes instructions"):s>0&&i.a.createElement("div",null,"Les projets ainsi termin\xe9s sont alors pr\xe9sent\xe9s devant le comit\xe9 de l'entreprise.")};break;case"EndPresentation":0===s&&(d(Object(o.setState)("timer",-1)),m[0]?n.emit("set-view",["StartPresentation"]):n.emit("set-view",["VotingStep"])),p.time=5,p.image="https://www.setaswall.com/wp-content/uploads/2018/05/Space-Planet-2-Wallpaper-800x480.jpg",p.view=function(){return s>15?i.a.createElement("div",null,"premieres instructions"):s>10?i.a.createElement("div",null,"deuxiemes instructions"):s>5?i.a.createElement("div",null,"troisiemes instructions"):s>0&&i.a.createElement("div",null,"Superbe pr\xe9sentation !")};break;case"VotingStep":0===s&&n.emit("set-view",["MakeVote"]),p.time=5,p.image="https://www.setaswall.com/wp-content/uploads/2018/05/Space-Planet-2-Wallpaper-800x480.jpg",p.view=function(){return s>15?i.a.createElement("div",null,"premieres instructions"):s>10?i.a.createElement("div",null,"deuxiemes instructions"):s>5?i.a.createElement("div",null,"troisiemes instructions"):s>0&&i.a.createElement("div",null,"Enfin, le commitee proc\xe8de \xe0 un vote pour s\xe9lectionner le meilleur produit \xe0 mettre sur le march\xe9.")}}return Object(c.useEffect)(function(){d(Object(o.setState)("timer",-1))},[]),Object(c.useEffect)(function(){var e=-1===s?p.time:s-1,t=0!==s&&setTimeout(function(){d(Object(o.setState)("timer",e))},1e3);return function(){clearTimeout(t)}},[s]),i.a.createElement("div",{className:"owner-screen"},i.a.createElement(v,{image:p.image}),!0===u&&i.a.createElement("div",{className:"subtitle"},p.view()))}),h=n(185),j=function(){var e=Object(l.c)(function(e){return[e.socket,e.room.instructions,e.timer,e.room.view,e.room.step,e.room.presenting]}),t=Object(r.a)(e,6),n=t[0],a=t[1],u=t[2],m=t[3],d=t[4],p=t[5],f=Object(l.b)(),v=1;switch(m){case"MakeProblem":case"MakeDrawing":v=80;break;case"MakeData":v=30;break;case"MakeVote":v=40;break;case"StartPresentation":v=60;break;default:v=50}return Object(c.useEffect)(function(){f(Object(o.setState)("timer",!0===a?-15:0))},[]),Object(c.useEffect)(function(){var e=u>=100?setInterval(function(){n.emit("end-step")},2e3):setTimeout(function(){f(Object(o.setState)("timer",u+v/100))},100);return function(){clearTimeout(e)}},[u,d]),i.a.createElement("div",{className:"owner-screen"},i.a.createElement(h.a,{variant:"determinate",value:u}),i.a.createElement(s.a,{height:"80vh",display:"flex",justifyContent:"center",alignItems:"center"},"StartPresentation"===m?i.a.createElement("div",null,i.a.createElement("h1",{className:"big"},"C'est \xe0 toi"),i.a.createElement("h1",{className:"very-big"},p)):i.a.createElement("h1",{className:"big"},"\xe0 vous de jouer")))},g=n(186),O=function(){var e=Object(l.c)(function(e){return[e.room.view,e.playerName,e.room.players]}),t=Object(r.a)(e,3),n=t[0],a=t[1],o=t[2],u="";if("GetProblem"===n){var m={};o.forEach(function(e){e.name===a&&(m=e)}),u=m.entry.problem}return Object(c.useEffect)(function(){"GetProblem"===n&&navigator.vibrate(Array(5).fill(100))},[]),i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},"GetProblem"===n?i.a.createElement("h1",{className:"big"},u):i.a.createElement(g.a,null)))},w=(n(28),n(7));function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}n(93),n(121),t.a={Home:[function(){var e=Object(l.c)(function(e){return[e.socket,e.noSleep]}),t=Object(r.a)(e,2),n=t[0],c=t[1],m=Object(l.b)();return i.a.createElement("div",{className:"owner-screen"},i.a.createElement("div",{className:"home"},i.a.createElement(s.a,{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},i.a.createElement("div",{className:"title-screen"},i.a.createElement(p,{size:"very-big"}),i.a.createElement(u,{id:"send",type:"home",value:"nouvelle partie",onClick:function(){c.enable(),m(Object(o.setState)("owner",1)),n.emit("new-room",Object(a.a)(Array(4)).map(function(e){return(~~(26*Math.random()+10)).toString(36)}).join("").toUpperCase())}})))))},function(){var e=Object(l.c)(function(e){return[e.socket,e.noSleep]}),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(l.b)(),m=function(){a.enable(),c(Object(o.isPlayer)(1,document.querySelector("input#name").value.toUpperCase())),n.emit("join-room",{room:document.querySelector("input#room").value.toUpperCase(),player:document.querySelector("input#name").value.toUpperCase()})};return i.a.createElement("div",{className:"homeplayer player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},i.a.createElement(p,{size:"big"}),i.a.createElement("div",{className:"player-join"},i.a.createElement("div",null,i.a.createElement(f,{type:"home",id:"name",value:"nom",onKeyPress:function(){document.querySelector("input#room").focus()}})),i.a.createElement("div",null,i.a.createElement(f,{type:"home",id:"room",value:"room",onKeyPress:m}))),i.a.createElement(u,{id:"send",type:"homeplayer",value:"rejoindre",onClick:m})))}],Lobby:[function(){var e=Object(l.c)(function(e){return[e.room,e.socket]}),t=Object(r.a)(e,2),n=t[0];t[1],Object(l.b)();return i.a.createElement("div",{className:"owner-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly"},i.a.createElement("h1",null,"rejoignez la partie !"),i.a.createElement(s.a,{className:"lobby-player-list",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},n.players.map(function(e,t){return i.a.createElement(u,{type:"default",id:"player-"+t,value:e.name})}))))},function(){var e=Object(l.c)(function(e){return[e.playerName,e.room,e.socket,e.noSleep]}),t=Object(r.a)(e,4),n=t[0],a=t[1],c=t[2],m=t[3],d=Object(l.b)();return i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly"},a.players[0].name===n&&i.a.createElement("div",null,i.a.createElement("label",{className:"player-label"}," INSTRUCTIONS",i.a.createElement("input",{type:"checkbox",checked:a.instructions,onClick:function(){c.emit("toggle-instructions",!a.instructions)}}),i.a.createElement("span",{className:"checkmark"})),i.a.createElement("label",{className:"player-label"}," SOUS TITRES",i.a.createElement("input",{type:"checkbox",checked:a.subtitles,onClick:function(){c.emit("toggle-subtitles",!a.subtitles)}}),i.a.createElement("span",{className:"checkmark"}))),a.players[0].name===n&&a.players.length>=1&&i.a.createElement(u,{id:"start",type:"default",value:"d\xe9marrer",onClick:function(){c.emit("start-game")}}),i.a.createElement(u,{id:"start",type:"default",value:"quitter",onClick:function(){m.disable(),c.emit("leave-room"),d(Object(o.setState)("room",{view:"Home"}))}})))}],CreatingStep:[E,O],MakeProblem:[j,function(){var e=Object(l.c)(function(e){return[e.socket,e.room.instructions,e.showIns,e.playerName,e.room.players,e.problemDefault,e.room.step,e.played]}),t=Object(r.a)(e,8),n=t[0],a=t[1],m=t[2],d=t[3],p=t[4],v=t[5],b=t[6],y=t[7],E=Object(l.b)(),h={};p.forEach(function(e){e.name===d&&(h=e)});var j=h.problem;console.log(h);var g=function(e){var t=document.querySelector("input"),a={step:"problem",value:"1"===e?t.value:j.default[Math.floor(Math.random()*Math.floor(j.default.length))]};t.value=a.value,E(Object(o.setState)("played",!0)),n.emit("send-data",a)};return Object(c.useEffect)(function(){return navigator.vibrate(Array(9).fill(50)),E(Object(o.setState)("played",!1)),a===m===!0&&setTimeout(function(){E(Object(o.setState)("showIns",!1))},6e3),function(){E(Object(o.setState)("played",!1)),E(Object(o.setState)("showIns",!0))}},[]),Object(c.useEffect)(function(){if(!1===a||!1===m){var e=document.querySelector("input"),t="",n=j.default[v],r=0,c=setInterval(function(){t+=n[r],e.placeholder=t,++r==n.length&&clearInterval(c)},60),i=j.default[v+1]?v+1:0;setTimeout(function(){E(Object(o.setState)("problemDefault",i))},3e3)}},[v,m]),Object(c.useEffect)(function(){"end"===b&&!1===y&&(document.querySelector("input").value.length>0?g("1"):g("0"))},[b]),i.a.createElement("div",{className:"play"},function(){if(a===m===!0)return i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement("h2",null,"D\xe9finis un probl\xe8me auquel on peut \xeatre confront\xe9, ou choisis-en un parmi ceux recens\xe9s."),i.a.createElement("h2",null,"N'h\xe9site pas \xe0 te montrer imaginatif ! ")));var e=j.phrase.split("**");return i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement(s.a,{height:"160px",display:"flex",flexDirection:"column",justifyContent:"space-evenly"},i.a.createElement("div",null,e[0]),i.a.createElement(f,{type:"playing",disabled:y,onKeyPress:g,data:"1"}),i.a.createElement("div",null,e[1])),i.a.createElement("div",null,i.a.createElement(u,{type:"default",id:"send",onClick:g,data:"1",disabled:y,value:"valider"}),i.a.createElement(u,{type:"default",id:"auto",onClick:g,data:"0",disabled:y,value:"al\xe9atoire"}))))}())}],StartDrawing:[E,O],GetProblem:[E,O],MakeDrawing:[j,function(){var e=Object(l.c)(function(e){return[e.socket,e.room.instructions,e.showIns,e.playerName,e.room.players,e.room.step,e.brush,e.played]}),t=Object(r.a)(e,8),n=t[0],a=t[1],m=t[2],p=t[3],f=t[4],v=t[5],y=t[6],E=t[7],h=Object(l.b)(),j={};f.forEach(function(e){e.name===p&&(j=e)});var g=j.entry.problem,O=Object(c.useRef)(null),w=function(){var e={step:"drawing",value:O.current.getSaveData()};h(Object(o.setState)("played",!0)),n.emit("send-data",e)},S=function(){O.current.undo()},k=function(e){h(Object(o.setState)("brush",e))};return Object(c.useEffect)(function(){return navigator.vibrate(Array(9).fill(50)),h(Object(o.setState)("played",!1)),a===m===!0&&setTimeout(function(){h(Object(o.setState)("showIns",!1))},6e3),function(){h(Object(o.setState)("played",!1)),h(Object(o.setState)("showIns",!0))}},[]),Object(c.useEffect)(function(){"end"===v&&!1===E&&w()},[v]),i.a.createElement("div",null,a===m===!0?i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement("h2",null,"Tu dois r\xe9soudre le probl\xe8me qui t'a \xe9t\xe9 assign\xe9."),i.a.createElement("h2",null,"Tu as quelques minutes pour imaginer une solution et dessiner ton objet."),i.a.createElement("h2",null,"Sois cr\xe9atif, un bon ing\xe9nieur est un ing\xe9nieur inspir\xe9 !"))):i.a.createElement("div",{className:"drawing player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement("h3",null,g),i.a.createElement("div",{className:"player-canvas"},i.a.createElement(b.a,{ref:O,lazyRadius:1,brushRadius:4,brushColor:y,hideGrid:!0,catenaryColor:"transparent",canvasWidth:.9*window.innerWidth,canvasHeight:.9*window.innerWidth,disabled:E})),i.a.createElement(s.a,{width:"100vw",display:"flex",justifyContent:"space-evenly"},i.a.createElement(d,{value:"undo",onClick:S}),i.a.createElement(d,{value:"default",color:"#444",onClick:k}),i.a.createElement(d,{value:"red",color:"#F00",onClick:k}),i.a.createElement(d,{value:"green",color:"#0F0",onClick:k}),i.a.createElement(d,{value:"blue",color:"#00F",onClick:k}),i.a.createElement(d,{value:"yellow",color:"#FF0",onClick:k})),i.a.createElement(u,{id:"send",type:"default",value:"valider",onClick:w,disabled:E}))))}],StartData:[E,O],MakeData:[j,function(){var e=Object(l.c)(function(e){return[e.socket,e.room.instructions,e.showIns,e.playerName,e.room.players,e.room.step,e.dataPart,e.gameData,e.played]}),t=Object(r.a)(e,9),n=t[0],a=t[1],m=t[2],d=(t[3],t[4]),p=t[5],v=t[6],b=t[7],y=t[8],E=Object(l.b)();d.forEach(function(e){e.name});var h=function(e){1===e?(E(Object(o.setState)("dataPart","catch")),"start"===v?E(Object(o.setState)("gameData",{name:document.querySelector("input").value,catch:""})):"name"===v&&E(Object(o.pushToObject)("gameData","catch",document.querySelector("input").value))):"start"===v?E(Object(o.setState)("dataPart","name")):"name"===v&&E(Object(o.setState)("dataPart","catch"))};return Object(c.useEffect)(function(){return navigator.vibrate(Array(9).fill(50)),E(Object(o.setState)("played",!1)),a===m===!0&&setTimeout(function(){E(Object(o.setState)("showIns",!1))},6e3),function(){E(Object(o.setState)("played",!1)),E(Object(o.setState)("showIns",!0))}},[]),Object(c.useEffect)(function(){if(!1===a||!1===m){var e=document.querySelector("input");"start"!==v&&E(Object(o.pushToObject)("gameData",v,e.value)),e.value="",e.focus()}},[v,m]),Object(c.useEffect)(function(){if("catch"===v){var e={step:"data",value:b};E(Object(o.setState)("played",!0)),n.emit("send-data",e)}},[b]),Object(c.useEffect)(function(){"end"===p&&!1===y&&h(1)},[p]),i.a.createElement("div",{className:"play"},function(){if(a===m===!0)return i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement("h2",null,"D\xe9finis un nom pour ton objet, et trouve un slogan aguicheur."),i.a.createElement("h2",null,"Creuse-toi la t\xeate pour que ce soit vendeur ! ")));var e="start"===v?"Nom de votre solution":"Slogan";return i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement("div",null,i.a.createElement("h3",null,e),i.a.createElement(f,{type:"playing2",disabled:y,onKeyPress:h})),i.a.createElement(u,{id:"send",type:"default",value:"valider",onClick:h,disabled:y})))}())}],PresentingStep:[E,O],StartPresentation:[j,function(){var e=Object(l.c)(function(e){return[e.socket,e.room.instructions,e.showIns,e.playerName,e.room.step,e.room.presenting]}),t=Object(r.a)(e,6),n=t[0],a=t[1],m=t[2],d=t[3],p=t[4],f=t[5],v=Object(l.b)(),b=function(){n.emit("set-view",["MakePresentation"])};return Object(c.useEffect)(function(){return f===d&&(navigator.vibrate(Array(5).fill(100)),a===m===!0&&setTimeout(function(){v(Object(o.setState)("showIns",!1))},6e3)),function(){return v(Object(o.setState)("showIns",!0))}},[]),Object(c.useEffect)(function(){"end"===p&&b()},[p]),i.a.createElement("div",{className:"play"},f===d?a===m===!0?i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement("h2",null,"Fais une pr\xe9sentation de ton objet, tu peux afficher sur l'\xe9cran principal les \xe9l\xe9ments de ton projet dans l'ordre de ton choix."),i.a.createElement("h2",null,"Sois d\xe9monstratif et enthousiaste, tu dois convaincre le comit\xe9 que ton id\xe9e est g\xe9niale ! "))):i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement("h3",null,"\xe0 toi de jouer !"),i.a.createElement(u,{id:"start",type:"default",value:"commencer",onClick:b}))):i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement(g.a,null))))}],MakePresentation:[function(){var e=Object(l.c)(function(e){return[e.socket,e.timer,e.room.step,e.room.presentation]}),t=Object(r.a)(e,4),n=t[0],a=t[1],u=t[2],m=t[3],d=Object(l.b)();return Object(c.useEffect)(function(){d(Object(o.setState)("timer",0))},[]),Object(c.useEffect)(function(){var e=a>=100?setInterval(function(){n.emit("end-step")},2e3):setTimeout(function(){d(Object(o.setState)("timer",a+.2))},100);return function(){clearTimeout(e)}},[a,u]),i.a.createElement("div",null,i.a.createElement(h.a,{variant:"determinate",value:a}),i.a.createElement("div",{className:"owner-screen"},i.a.createElement("h1",null,"probleme : ",m.problem),i.a.createElement(s.a,{height:"85vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement(s.a,{width:"45vw",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},m.steps[0]&&i.a.createElement("h1",{className:"very-big"},m.data.name),m.steps[1]&&i.a.createElement("h1",null,m.data.catch)),i.a.createElement(s.a,{width:"45vw",display:"flex",justifyContent:"center",alignItems:"center"},m.steps[2]&&i.a.createElement(b.a,{hideGrid:!0,canvasWidth:Math.round(.36*window.innerWidth),canvasHeight:Math.round(.36*window.innerWidth),disabled:!0,saveData:m.drawing,immediateLoading:!0})))))},function(){var e=Object(l.c)(function(e){return[e.socket,e.playerName,e.room.step,e.room.presenting,e.room.presentation]}),t=Object(r.a)(e,5),n=t[0],a=t[1],o=t[2],m=t[3],d=t[4],p=function(e){var t={step:"presentation",value:e};n.emit("send-data",t)};return Object(c.useEffect)(function(){"end"===o&&p("end")},[o]),i.a.createElement("div",{className:"play"},m===a?i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"},!d.steps[2]&&i.a.createElement(u,{id:"drawing",type:"card",value:i.a.createElement(s.a,{display:"flex",justifyContent:"center"},i.a.createElement(b.a,{hideGrid:!0,canvasWidth:Math.round(.3*window.innerWidth),canvasHeight:Math.round(.3*window.innerWidth),disabled:!0,saveData:d.drawing,immediateLoading:!0})),onClick:p,data:"2"}),!d.steps[0]&&i.a.createElement(u,{id:"name",type:"card-name",value:d.data.name,onClick:p,data:"0"}),!d.steps[1]&&i.a.createElement(u,{id:"catch",type:"card-slogan",value:d.data.catch,onClick:p,data:"1"}),i.a.createElement(u,{id:"end",type:"card",value:"terminer",onClick:p,data:"end"}))):i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement(g.a,null))))}],EndPresentation:[E,O],VotingStep:[E,O],MakeVote:[function(){var e=Object(l.c)(function(e){return[e.socket,e.timer,e.room.players,e.room.step,e.room.solutions]}),t=Object(r.a)(e,5),n=t[0],a=t[1],u=t[2],m=t[3],d=t[4],p=Object(l.b)();return Object(c.useEffect)(function(){p(Object(o.setState)("timer",0))},[]),Object(c.useEffect)(function(){var e=a>=100?setInterval(function(){n.emit("end-step")},2e3):setTimeout(function(){p(Object(o.setState)("timer",a+.2))},100);return function(){clearTimeout(e)}},[a,m]),i.a.createElement("div",null,i.a.createElement("div",{className:"owner-screen"},i.a.createElement(h.a,{variant:"determinate",value:a}),i.a.createElement(s.a,{width:"100vw",height:"80vh",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center"},u.map(function(e){return i.a.createElement(y,{player:e.name,name:d[e.name].data.name,catch:d[e.name].data.catch,drawing:d[e.name].drawing})}))))},function(){var e=Object(l.c)(function(e){return[e.socket,e.room.instructions,e.showIns,e.playerName,e.room.players,e.room.step,e.played,e.room.solutions,e.money,e.investment]}),t=Object(r.a)(e,10),n=t[0],a=t[1],m=t[2],d=t[3],p=t[4],f=t[5],v=t[6],b=t[7],y=t[8],E=t[9],h=Object(l.b)(),j=function(e){y>0&&("end"===e?h(Object(o.setState)("money",0)):(h(Object(o.addToState)("money",-1)),h(Object(o.setState)("investment",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach(function(t){Object(w.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},E,Object(w.a)({},e,E[e]+y||y))))))};return Object(c.useEffect)(function(){return navigator.vibrate(Array(9).fill(50)),h(Object(o.setState)("money",p.length<=3?2:3)),h(Object(o.setState)("played",!1)),a===m===!0&&setTimeout(function(){h(Object(o.setState)("showIns",!1))},6e3),function(){h(Object(o.setState)("played",!1)),h(Object(o.setState)("showIns",!0))}},[]),Object(c.useEffect)(function(){if((!1===a||!1===m)&&0===y){var e={step:"vote",value:E};h(Object(o.setState)("played",!0)),n.emit("send-data",e)}},[y,m]),Object(c.useEffect)(function(){"end"===f&&!1===v&&j("end")},[f]),i.a.createElement("div",{className:"play"},a===m===!0?i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement("h2",null,"Vote pour les projets que tu pr\xe9f\xe8res, en commen\xe7ant par celui qui te pla\xeet le plus."),i.a.createElement("h2",null,"\xc0 toi de choisir si c'est le plus convaincant, le plus cr\xe9atif ou le plus fun ! "))):i.a.createElement("div",{className:"player-screen"},i.a.createElement(s.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},i.a.createElement("h3",null,"ordre de pr\xe9f\xe9rence"),p.map(function(e,t){return e.name!==d&&i.a.createElement(u,{id:"player-"+t,type:"card-slogan",value:b[e.name].data.name,onClick:j,data:e.name})}))))}],Results:[function(){var e=Object(l.c)(function(e){return[e.socket,e.room.players,e.room.step,e.room.solutions,e.room.results]}),t=Object(r.a)(e,5),n=t[0],a=t[1],c=(t[2],t[3]),o=t[4],m=(Object(l.b)(),""),d=function(){n.emit("restart")};return i.a.createElement("div",null,i.a.createElement("div",{className:"owner-screen"},a.map(function(e){return e.name===function(){for(var e=0,t=0,n=Object.entries(o);t<n.length;t++){var a=n[t],c=Object(r.a)(a,2),i=c[0],l=c[1];l>e&&(e=l,m=i)}return m}()&&i.a.createElement(s.a,{width:"100vw",height:"60vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},i.a.createElement("h1",{className:"big"},"bravo ",e.name),i.a.createElement(y,{player:e.name,name:c[e.name].data.name,catch:c[e.name].data.catch,drawing:c[e.name].drawing}))}),i.a.createElement(u,{id:"restart",type:"default",value:"rejouer",onClick:d})))},O]}}},[[101,1,2]]]);
//# sourceMappingURL=main.6871e4c1.chunk.js.map