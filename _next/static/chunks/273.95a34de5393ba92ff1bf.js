"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{7273:function(e,t,o){o.r(t);var n=o(7294),l=o(8064),a=(o(9411),o(7787),o(2270),o(2827),o(6266),o(348),o(5188),o(787),o(3783),o(2679),o(3162)),i=o(5893),s=["dracula","tomorrow_night","nord_dark","monokai","solarized_dark","gruvbox","idle_fingers","terminal"],r=localStorage.getItem("colorscheme")?localStorage.getItem("colorscheme").toString():s[Math.floor(Math.random()*s.length)];t.default=function(e){var t=e.text,o=e.setText,c=(0,n.useState)(t),u=c[0],h=c[1];(0,n.useEffect)((function(){console.clear(),console.table(s),console.log("Do this To Change Or Set Colorscheme ( Will be applied only on reload )\n\n\t localStorage.setItem('colorscheme', nameofthecolorscheme)")}),[]);var d=(0,n.useCallback)((function(e){h(e)}),[h]),f=(0,n.useCallback)((function(){o(u)}),[o,u]);return(0,i.jsxs)("div",{className:"editor-area",children:[(0,i.jsx)(l.ZP,{value:u,mode:"markdown",height:"100%",fontSize:20,width:"100%",highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0},onChange:function(e){d(e)},theme:r,className:"full-height"}),(0,i.jsx)("input",{type:"file",accept:"/*.md/",className:"Fileinput",onChange:function(e){return function(e){var t=new FileReader;t.onload=function(){null!=t.result&&h(t.result.toString())},null!=e.target.files&&t.readAsText(e.target.files[0])}(e)}}),(0,i.jsx)("div",{className:"FakeFileInput",children:"Upload Files"}),(0,i.jsx)("button",{onClick:function(){var e=new Blob([t],{type:"text/plain;charset=utf-8"});(0,a.saveAs)(e,"gen.md")},children:"Save the files"}),(0,i.jsx)("button",{className:"showPreviewButton",onClick:f,children:"Preview"})]})}}}]);