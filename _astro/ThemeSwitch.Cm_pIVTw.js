import{j as o}from"./jsx-runtime.B6N9iRLn.js";import{u as s}from"./index.BDWyZ8Gq.js";import{r as t}from"./index.DNi1g-pO.js";import{t as m,a}from"./theme-store.BkTMmRgV.js";import"./index.DgoachrA.js";const p=t.memo(()=>{const e=s(a),[r,n]=t.useState(!1);return t.useEffect(()=>{n(!0)},[]),r&&o.jsx("button",{className:"flex items-center text-2xl text-tk-elements-topBar-iconButton-iconColor hover:text-tk-elements-topBar-iconButton-iconColorHover transition-theme bg-tk-elements-topBar-iconButton-backgroundColor hover:bg-tk-elements-topBar-iconButton-backgroundColorHover p-1 rounded-md",title:"Toggle Theme",onClick:()=>m(),children:o.jsx("div",{className:e==="dark"?"i-ph-sun-dim-duotone":"i-ph-moon-stars-duotone"})})});export{p as ThemeSwitch};