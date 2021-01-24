(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),o=n(20),i=n.n(o),c=(n(27),n(2)),u=n(6),l=n(4),h=n(3),d=(n(28),n(29),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsxs)("div",{className:"event-overview",children:[Object(a.jsx)("h2",{className:"summary",children:t.summary}),Object(a.jsx)("p",{className:"location",children:t.location}),Object(a.jsx)("p",{className:"start-time",children:t.start.dateTime}),!e&&Object(a.jsx)("button",{className:"details-btn",onClick:this.handleShowDetails,children:"Show Event Details"}),e&&Object(a.jsx)("button",{className:"details-btn",onClick:this.handleShowDetails,children:"Hide Event Details"})]}),e&&Object(a.jsxs)("div",{className:"event-details",children:[Object(a.jsx)("p",{className:"description",children:t.description}),Object(a.jsx)("p",{className:"end-time",children:t.end.dateTime}),Object(a.jsx)("p",{className:"time-zone",children:t.start.timeZone}),Object(a.jsx)("p",{className:"organizer-email",children:t.organizer.email})]})]})}}]),n}(r.Component)),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(a.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(d,{event:e})},e.id)}))})}}]),n}(r.Component),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(p),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(p),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)(m,{text:this.state.infoText}),Object(a.jsx)("h2",{className:"citysearch-instruction",children:"Choose your closest city"}),Object(a.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},placeholder:"Search for a City"}),Object(a.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.Component),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.props.updateEvents(null,n),e.setState({numberOfEvents:n}),n<1?e.setState({infoText:"Please choose a number of events between 1 and 32"}):e.setState({infoText:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"number-of-events",children:[Object(a.jsx)(v,{text:this.state.infoText}),Object(a.jsx)("label",{className:"number-of-events-label",children:"Number of Events: "}),Object(a.jsx)("input",{type:"number",className:"event-number",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]})}}]),n}(r.Component),g=n(7),w=n.n(g),O=n(8),y=n(21),x=n(10),k=n.n(x),S=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],T=n(9),C=n.n(T),E=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))},N=function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(O.a)(w.a.mark((function e(){var t,n,a,r,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),navigator.onLine||window.location.href.startsWith("http://localhost")){e.next=5;break}return t=localStorage.getItem("lastEvents"),C.a.done(),e.abrupt("return",JSON.parse(t).events);case 5:if(!window.location.href.startsWith("http://localhost")){e.next=8;break}return C.a.done(),e.abrupt("return",S);case 8:return e.next=10,D();case 10:if(!(n=e.sent)){e.next=20;break}return I(),a="https://jwyioruftd.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,k.a.get(a);case 16:return(r=e.sent).data&&(s=E(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(s))),C.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(O.a)(w.a.mark((function e(){var t,n,a,r,s,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,N(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,k.a.get("https://jwyioruftd.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&A(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},A=function(){var e=Object(O.a)(w.a.mark((function e(t){var n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://jwyioruftd.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",alertText:""},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,s=a.numberOfEvents;t?Z().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,s);e.setState({events:a,currentLocation:t})})):Z().then((function(t){var a=("all"===r?t:t.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a,numberOfEvents:n})}))},e.offlineAlert=function(){!1===navigator.onLine?e.setState({alertText:"You are currently offline. Please connect to the internet for an updated list of events"}):e.setState({alertText:""})},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(",").shift(),number:t}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,Z().then((function(t){e.mounted&&e.setState({events:t,locations:E(t)})})),window.addEventListener("online",this.offlineAlert())}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Meet-Us"}),Object(a.jsx)(b,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(a.jsx)(j,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(a.jsx)("div",{className:"data-vis-wrapper",children:Object(a.jsx)("h4",{children:"Events in each city"})}),Object(a.jsx)(f,{events:this.state.events})]})}}]),n}(r.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),M()}},[[49,1,2]]]);
//# sourceMappingURL=main.03976cc9.chunk.js.map