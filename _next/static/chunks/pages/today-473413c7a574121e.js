(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[963],{8573:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/today",function(){return t(2783)}])},8465:function(e,n,t){"use strict";t.d(n,{B:function(){return D}});var r=t(5893),s=t(3113),i=t(2765),c=t(7294),l=t(471);let o=(0,c.memo)(function(){return(0,r.jsxs)(s.kC,{justify:"center",align:"center",direction:"column",css:{gap:"1rem",width:"100%",height:"100%",color:i.Fe.mauve8},children:[(0,r.jsx)(l.wOx,{size:256}),(0,r.jsxs)(s.kC,{direction:"column",align:"center",css:{gap:"0.5rem"},children:[(0,r.jsx)(s.xu,{css:{fontSize:"2rem",fontWeight:"bold"},children:"Empty List!"}),(0,r.jsx)(s.xu,{css:{fontSize:"1.25rem",fontWeight:"bold"},children:"タスクがありません"})]})]})});var u=t(7484),d=t.n(u);let a=e=>d()(e).format("ddd, MMM DD");var x=t(8193),h=t(5434),f=t(8583),m=t(4914),j=t(3053),p=t(655);let b=e=>{let n=(0,f.Dv)(j.JV),t=(0,p.hA)(),r=(0,p.HK)(),s=(0,m.ys)(),i=(0,c.useCallback)(()=>t(e),[e,t]),l=(0,c.useCallback)(()=>{r(e),s()},[s,e,r]);return{tagDict:n,handleCompleteButtonClick:i,handleEditButtonClick:l}};var g=t(837);let C=(0,c.memo)(function(e){let{tagDict:n,handleCompleteButtonClick:t,handleEditButtonClick:c}=b(e.id);return(0,r.jsxs)(s.kC,{justify:"between",css:{userSelect:"none",borderRadius:8,border:"1px solid black"},children:[(0,r.jsxs)(s.kC,{align:"center",children:[(0,r.jsx)(s.kC,{justify:"center",align:"center",css:{p:"1rem"},children:(0,r.jsx)(k,{onClick:t,children:e.complete&&(0,r.jsx)(x.bzc,{size:20})})}),(0,r.jsxs)(s.kC,{direction:"column",css:{gap:"0.5rem",p:"1rem"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(s.xu,{css:{fontWeight:"bold"},children:e.title}),e.dueDate&&(0,r.jsx)(s.xu,{css:{fontSize:"0.8rem",fontWeight:"bold",color:i.ae.slate10},children:a(e.dueDate)})]}),e.tags&&(0,r.jsx)(s.kC,{wrap:"wrap",css:{gap:"1rem"},children:e.tags.map(e=>(0,r.jsx)(s.Ct,{children:n[e]},e))})]})]}),(0,r.jsx)(s.kC,{justify:"center",align:"center",css:{p:"1rem"},children:(0,r.jsx)(v,{onClick:c,children:(0,r.jsx)(h.zmo,{size:20})})})]})}),k=(0,g.zo)("button",{display:"inline-flex",justifyContent:"center",alignItems:"center",size:"2rem",borderRadius:"100%",border:"1px solid currentColor","&:focus":{boxShadow:"0 0 0 2px currentColor"}}),v=(0,g.zo)("button",{zIndex:"$docked",color:i.ae.slate10,display:"inline-flex",justifyContent:"center",alignItems:"center",size:"2rem",borderRadius:"100%","&:focus":{boxShadow:"0 0 0 2px currentColor"}});var w=t(5495),y=t(8820);let z=e=>e,_=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=(0,f.Dv)(y.W),t=(0,c.useCallback)(t=>e(t).filter(e=>{let t=new Set(e.tags);return n.every(e=>t.has(e))}),[n,e]),r=(0,f.Dv)((0,w.kv)(p.b$,t));return r},D=e=>{let n=_(e.selector);return n.length?(0,r.jsx)(s.kC,{direction:"column",css:{gap:"1rem"},children:n.map(e=>(0,r.jsx)(C,{...e},e.id))}):(0,r.jsx)(o,{})}},2783:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(5893),s=t(7484),i=t.n(s),c=t(7294),l=t(8465);let o=()=>{let e=(0,c.useCallback)(e=>e.filter(e=>i()(e.dueDate).isSame(i()(),"day")),[]);return(0,r.jsx)(l.B,{selector:e})},u=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o,{})});var d=u}},function(e){e.O(0,[617,955,774,888,179],function(){return e(e.s=8573)}),_N_E=e.O()}]);