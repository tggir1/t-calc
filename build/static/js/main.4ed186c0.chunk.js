(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,s){t.exports=s(18)},16:function(t,e,s){},17:function(t,e,s){},18:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s.n(a),l=s(9),i=s.n(l),c=(s(16),s(7)),u=s(1),r=s(2),o=s(4),h=s(3),m=s(6),p=s(5),d=(s(17),function(t){function e(){return Object(u.a)(this,e),Object(o.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"Viewbar"}," ",this.props.display," ")}}]),e}(a.Component)),b=function(t){function e(){return Object(u.a)(this,e),Object(o.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"Keypad"}," ",this.props.children," ")}}]),e}(a.Component),f=function(t){function e(){return Object(u.a)(this,e),Object(o.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"Button ".concat(this.props.className),onClick:this.props.onClick,name:this.props.name},this.props.label)}}]),e}(a.Component),k=function(t){function e(){return Object(u.a)(this,e),Object(o.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"History"}," ",this.props.children," ")}}]),e}(a.Component),H=function(t){function e(t){var s;return Object(u.a)(this,e),(s=Object(o.a)(this,Object(h.a)(e).call(this,t))).sortClick=function(t){var e=t.target.getAttribute("name");if(/[0-9]/.test(e))"c"===s.state.cQuence&&s.setState({cQuence:"Num"}),s.setState({fullInput:s.state.fullInput+e});else switch(e){case"del":s.handleDel(e);break;case"c":s.handleClear();break;case"q":s.handleEq();break;case"+":case"-":case"x":case"/":s.handleOp(e);break;case".":s.handleDec();break;case"s":alert("Gothca!");break;default:alert("sorry, it appears that something broke.")}},s.handleDel=function(){"."===s.state.fullInput[s.state.fullInput.length-1]?s.setState({decCount:s.state.decCount-1,fullInput:s.state.fullInput.slice(0,-1),cQuence:"del"}):" "===s.state.fullInput[s.state.fullInput.length-1]?s.setState({fullInput:s.state.fullInput.slice(0,-3),cQuence:"del"}):s.setState({fullInput:s.state.fullInput.slice(0,-1),cQuence:"del"})},s.handleClear=function(){"c"===s.state.cQuence?window.confirm("This will erase all history. Are you sure?")&&s.setState({fullInput:"",cQuence:"",decCount:0,num1Hist:[],opHist:[],num2Hist:[],resultHist:[]}):s.setState({fullInput:"",cQuence:"c",decCount:0})},s.handleEq=function(){var t=s.state.fullInput,e=t.search(/-|\+|x|\//),a=t.charAt(e),n=parseFloat(t.slice(0,e-1)),l=parseFloat(t.slice(e+2)),i=[n,l].reduce({"+":function(t,e){return t+e},"-":function(t,e){return t-e},x:function(t,e){return t*e},"/":function(t,e){return t/e}}[a]);s.setState({fullInput:"".concat(i),cQuence:"",decCount:0,num1Hist:[n].concat(Object(c.a)(s.state.num1Hist)),opHist:[a].concat(Object(c.a)(s.state.opHist)),num2Hist:[l].concat(Object(c.a)(s.state.num2Hist)),resultHist:[i].concat(Object(c.a)(s.state.resultHist))})},s.state={fullInput:"",cQuence:"",decCount:0,num1Hist:[],opHist:[],num2Hist:[],resultHist:[]},s.sortClick=s.sortClick.bind(Object(m.a)(s)),s.handleClear=s.handleClear.bind(Object(m.a)(s)),s.handleDec=s.handleDec.bind(Object(m.a)(s)),s.handleDel=s.handleDel.bind(Object(m.a)(s)),s.handleOp=s.handleOp.bind(Object(m.a)(s)),s.handleEq=s.handleEq.bind(Object(m.a)(s)),s}return Object(p.a)(e,t),Object(r.a)(e,[{key:"handleDec",value:function(){-1===this.state.fullInput.indexOf(".")?this.setState({fullInput:this.state.fullInput+".",cQuence:".",decCount:1}):this.state.fullInput.indexOf(".")<this.state.fullInput.indexOf(this.state.cQuence)&&1===this.state.decCount&&this.setState({fullInput:this.state.fullInput+".",cQuence:".",decCount:2})}},{key:"handleOp",value:function(t){/x|-|\/|\+/g.test(this.state.fullInput)||this.setState({fullInput:this.state.fullInput+" "+t+" ",cQuence:t})}},{key:"handleKeyDown",value:function(t){if(t.ctrlKey&&"z"===t.key)this.handleClear();else if(t.shiftKey&&"+"===t.key)/x|-|\/|\+/g.test(this.state.fullInput)||this.setState({fullInput:this.state.fullInput+" "+t.key+" ",cQuence:"+"});else switch(t.key){case"=":case"Enter":this.handleEq();break;case"Backspace":this.handleDel();break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":"c"===this.state.cQuence&&this.setState({cQuence:"Num"}),this.setState({fullInput:this.state.fullInput+t.key});break;case"-":case"x":case"/":/x|-|\/|\+/g.test(this.state.fullInput)||this.setState({fullInput:this.state.fullInput+" "+t.key+" ",cQuence:t.key});break;case".":this.handleDec()}}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown.bind(this))}},{key:"render",value:function(){return n.a.createElement("div",{className:"Calc"},n.a.createElement("h1",null,"T Wizard"),n.a.createElement(d,{display:this.state.fullInput}),n.a.createElement("div",{className:"KeyHistCont"},n.a.createElement(b,null,n.a.createElement("div",{className:"Row"},n.a.createElement(f,{name:"c",label:"c",className:"Command",onClick:this.sortClick}),n.a.createElement(f,{name:"del",label:"del",className:"Command",onClick:this.sortClick}),n.a.createElement(f,{name:"q",label:"=",className:"Command",onClick:this.sortClick})),n.a.createElement("div",{className:"Row"},n.a.createElement(f,{name:"7",label:"7",className:"Num",onClick:this.sortClick}),n.a.createElement(f,{name:"8",label:"8",className:"Num",onClick:this.sortClick}),n.a.createElement(f,{name:"9",label:"9",className:"Num",onClick:this.sortClick}),n.a.createElement(f,{name:"x",label:"x",className:"Op",onClick:this.sortClick})),n.a.createElement("div",{className:"Row"},n.a.createElement(f,{name:"4",label:"4",className:"Num",onClick:this.sortClick}),n.a.createElement(f,{name:"5",label:"5",className:"Num",onClick:this.sortClick}),n.a.createElement(f,{name:"6",label:"6",className:"Num",onClick:this.sortClick}),n.a.createElement(f,{name:"/",label:"\xf7",className:"Op",onClick:this.sortClick})),n.a.createElement("div",{className:"Row"},n.a.createElement(f,{name:"1",label:"1",className:"Num",onClick:this.sortClick}),n.a.createElement(f,{name:"2",label:"2",className:"Num",onClick:this.sortClick}),n.a.createElement(f,{name:"3",label:"3",className:"Num",onClick:this.sortClick}),n.a.createElement(f,{name:"+",label:"+",className:"Op",onClick:this.sortClick})),n.a.createElement("div",{className:"Row"},n.a.createElement(f,{name:"s",label:"\ud83d\ude36",className:"Num",onClick:this.sortClick}),n.a.createElement(f,{name:"0",label:"0",className:"Num",onClick:this.sortClick}),n.a.createElement(f,{name:".",label:".",className:"Num",onClick:this.sortClick}),n.a.createElement(f,{name:"-",label:"-",className:"Op",onClick:this.sortClick}))),n.a.createElement(k,null,n.a.createElement("span",null," ",this.state.num1Hist[0]," ",this.state.opHist[0]," ",this.state.num2Hist[0]," ",null!=this.state.resultHist[0]?" = ":""," ",this.state.resultHist[0]," "),n.a.createElement("span",null," ",this.state.num1Hist[1]," ",this.state.opHist[1]," ",this.state.num2Hist[1]," ",null!=this.state.resultHist[1]?" = ":"",this.state.resultHist[1]," "),n.a.createElement("span",null," ",this.state.num1Hist[2]," ",this.state.opHist[2]," ",this.state.num2Hist[2]," ",null!=this.state.resultHist[2]?" = ":"",this.state.resultHist[2]," "),n.a.createElement("span",null," ",this.state.num1Hist[3]," ",this.state.opHist[3]," ",this.state.num2Hist[3]," ",null!=this.state.resultHist[3]?" = ":"",this.state.resultHist[3]," "),n.a.createElement("span",null," ",this.state.num1Hist[4]," ",this.state.opHist[4]," ",this.state.num2Hist[4]," ",null!=this.state.resultHist[4]?" = ":"",this.state.resultHist[4]," "),n.a.createElement("span",null," ",this.state.num1Hist[5]," ",this.state.opHist[5]," ",this.state.num2Hist[5]," ",null!=this.state.resultHist[5]?" = ":"",this.state.resultHist[5]," "),n.a.createElement("span",null," ",this.state.num1Hist[6]," ",this.state.opHist[6]," ",this.state.num2Hist[6]," ",null!=this.state.resultHist[6]?" = ":"",this.state.resultHist[6]," "),n.a.createElement("span",null," ",this.state.num1Hist[7]," ",this.state.opHist[7]," ",this.state.num2Hist[7]," ",null!=this.state.resultHist[7]?" = ":"",this.state.resultHist[7]," "),n.a.createElement("span",null," ",this.state.num1Hist[8]," ",this.state.opHist[8]," ",this.state.num2Hist[8]," ",null!=this.state.resultHist[8]?" = ":"",this.state.resultHist[8]," "),n.a.createElement("span",null," ",this.state.num1Hist[9]," ",this.state.opHist[9]," ",this.state.num2Hist[9]," ",null!=this.state.resultHist[9]?" = ":"",this.state.resultHist[9]," "))))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.4ed186c0.chunk.js.map