(this["webpackJsonpnasa-today"]=this["webpackJsonpnasa-today"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/nasa-logo.6099842f.png"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),l=(a(14),a(15),a(8)),s=a.n(l),c=a(1),m=a(2),d=a(5),u=a(4),p=a(3),h=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onClose=function(t){e.props.onClose&&e.props.onClose(t)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return this.props.show?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modal-content"},this.props.children,o.a.createElement("button",{onClick:function(t){return e.onClose(t)},className:"modal-close-button"},"\xd7")))):o.a.createElement(o.a.Fragment,null)}}]),a}(o.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).showModal=function(t){e.setState({show:!e.state.show})},e.state={show:!1},e}return Object(m.a)(a,[{key:"render",value:function(){return new RegExp(/(www.youtube.com)/).test(this.props.info.imageSource)?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"video-display"},o.a.createElement("div",{className:"video-container"},o.a.createElement("iframe",{src:this.props.info.imageSource,title:this.props.info.title,frameBorder:"0",className:"apod-video",allowFullScreen:"true"}),o.a.createElement("button",{className:"show-modal-button",onClick:this.showModal},"More Info")),o.a.createElement(h,{onClose:this.showModal,show:this.state.show},o.a.createElement("div",{className:"modal-box"},o.a.createElement("iframe",{src:this.props.info.imageSource,title:this.props.info.title,frameBorder:"0",className:"apod-video-modal",allowFullScreen:"true"})),o.a.createElement("div",{className:"modal-box"},o.a.createElement("div",{className:"modal-information"},o.a.createElement("p",{id:"image-title"},this.props.info.title),o.a.createElement("br",null),o.a.createElement("p",{id:"image-date"},this.props.info.date),o.a.createElement("br",null),o.a.createElement("p",{id:"image-description"},this.props.info.description)))))):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"image-display"},o.a.createElement("img",{src:this.props.info.imageSource,alt:this.props.info.title,className:"apod-image",onClick:this.showModal}),o.a.createElement(h,{onClose:this.showModal,show:this.state.show},o.a.createElement("div",{className:"modal-box"},o.a.createElement("img",{src:this.props.info.imageSource,alt:this.props.info.title,id:"apod-hd-image"})),o.a.createElement("div",{className:"modal-box"},o.a.createElement("div",{className:"modal-information"},o.a.createElement("p",{id:"image-title"},this.props.info.title),o.a.createElement("br",null),o.a.createElement("p",{id:"image-date"},this.props.info.date),o.a.createElement("br",null),o.a.createElement("p",{id:"image-description"},this.props.info.description),o.a.createElement("br",null),o.a.createElement("p",{id:"image-open-hd"},o.a.createElement("a",{id:"image-open-hd-a",href:this.props.info.hdSource,target:"_blank",rel:"noopener noreferrer"},"Open Full Size Image")))))))}}]),a}(o.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={images:[],length:0},e.loadMoreImages=e.loadMoreImages.bind(Object(d.a)(e)),e}return Object(m.a)(a,[{key:"addToList",value:function(e,t,a){var n=this,o="https://api.nasa.gov/planetary/apod?date=".concat(e,"-").concat(t,"-").concat(a,"&api_key=").concat("AaQ9U1djcIeHrpWVG2uEZeTuodH4QcoBngaoVsNI");fetch(o,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){if(null!=e.url){var t={imageSource:e.url,hdSource:e.hdurl,description:e.explanation,title:e.title,date:e.date},a=n.state.images;a.push(t),a.sort((function(e,t){return e.date<t.date?1:-1})),n.setState({images:a,length:a.length})}})).catch((function(e){console.log(e),alert("Server Timeout")}))}},{key:"loadMoreImages",value:function(){var e=new Date,t=this.state.length;e.setDate(e.getDate()-t);for(var a=0;a<18;a++){var n=e.getFullYear(),o=e.getMonth()+1,r=e.getDate();this.addToList(n,o,r),e.setDate(e.getDate()-1)}}},{key:"componentDidMount",value:function(){for(var e=new Date,t=0;t<18;t++){var a=e.getFullYear(),n=e.getMonth()+1,o=e.getDate();this.addToList(a,n,o),e.setDate(e.getDate()-1)}}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},this.state.images.map((function(e){return o.a.createElement(f,{info:e})}))),o.a.createElement("button",{className:"extend-button",onClick:this.loadMoreImages},"More Images"))}}]),a}(o.a.Component);var E=function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"header"},o.a.createElement("img",{src:s.a,className:"logo",alt:"NASA Logo"}),o.a.createElement("span",{className:"title"},"Astronomy Pictures of the Day")),o.a.createElement("div",{className:"content"},o.a.createElement(g,null)),o.a.createElement("div",{className:"footer"},"Website made by Tyler Ruth"," ",o.a.createElement("a",{className:"github-link",href:"https://github.com/tjruth99"},"(@tjruth99)")," ","and is not affiliated with NASA"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.222342db.chunk.js.map