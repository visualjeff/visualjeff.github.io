import{j as f}from"./jsx-runtime.B6N9iRLn.js";import{u as c}from"./index.BDWyZ8Gq.js";import{r as t}from"./index.DNi1g-pO.js";import{B as l}from"./TerminalPanel.B8BSOEHI.js";import{a as p}from"./index.DgoachrA.js";import{l as h,a as d}from"./webcontainer.BDuVMs12.js";import"./_slug_.89f348d8.BKx4Q3iB.js";import"./index.DDEQXXIH.js";import"./is-preview-message.ZaUdCj-5.js";const u=p({status:"no-auth"});function z(){const r=t.useRef(0),o=c(u),[s,i]=t.useState(!0),[n,e]=t.useState(!1);function m(){s?(e(!0),clearTimeout(r.current),r.current=setTimeout(()=>{e(!1)},1e3),h().then(()=>{u.set({status:"authorized"})})):d()}return t.useEffect(()=>{i(o.status!=="authorized"),e(a=>a&&o.status==="auth-failed"?!1:a)},[o.status]),f.jsx(l,{className:"ml-2",variant:s?"primary":"secondary",disabled:n,onClick:m,children:s?"Login":"Logout"})}export{z as LoginButton};
