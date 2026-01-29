import{r as l,j as i,o as p,a2 as h}from"./vendor-Dg2ssGmK.js";import{C as u,b as m,d as g,e as f,f as b,g as w}from"./index-tIqlee23.js";import{T as v,a as y,b as C,c as x}from"./tabs-CuKqjOE-.js";import{A as P}from"./AnimatedMermaidDiagram-Cu-yLmKN.js";import"./monitoring-SVb-Wmei.js";import"./ui-BQCqNqg0.js";import"./theme-By48gh4v.js";const o=[{id:"incident-escalation",title:"Incident Escalation Process",description:"Route incidents based on severity and decide when to involve additional on-call support.",code:`---
config:
  layout: fixed
---
flowchart TD
  A[Incident reported] --> B[Triage and classify severity]
  B --> C{High severity?}
  C -->|Yes| D[Page On-Call]
  D --> E[Incident Management Process 🔗]
  click E "#incident-management" "Open Incident Management Process"
  C -->|No| F[Incident team investigates]
  F --> G{Escalation needed?}
  G -->|No| H[Continue response and resolve]
  G -->|Yes, promote to high severity| D
  class E jump;
`,nodes:[{id:"A",label:"Incident reported",description:"An incident has been identified and reported to the response team."},{id:"B",label:"Triage and classify severity",description:"Assess the impact and urgency to determine severity level (P1-P4)."},{id:"C",label:"High severity?",type:"decision",branches:[["High Severity",3],["Low Severity",5]],description:"Is this a P1/P2 incident affecting customers or critical systems?"},{id:"D",label:"Page On-Call",type:"link",linkTo:"service-owner-paging",description:"Alert the on-call engineer immediately via PagerDuty or similar."},{id:"E",label:"Incident Management Process",type:"link",linkTo:"incident-management",description:"Hand off to the formal incident management workflow."},{id:"F",label:"Incident team investigates",description:"The current team continues investigating without escalation."},{id:"G",label:"Escalation needed?",type:"decision",branches:[["Escalate",3],["Continue",7]],description:"Has the situation worsened or stalled? Should we escalate?"},{id:"H",label:"Continue response and resolve",type:"link",linkTo:"incident-management",description:"Proceed with mitigation and resolution without further escalation."}]},{id:"incident-management",title:"Incident Management Process",description:"Establish roles, keep stakeholders informed, and close the loop on resolution.",code:`---
config:
  layout: fixed
---
flowchart TD
  A[On-Call Paged] --> B[Triage and Assess Severity]
  B --> C{Need additional responders?}
  C -->|Yes| D[Page Additional On-Call 🔗]
  C -->|No| E[Proceed with current responders]
  D --> F[Investigate and Mitigate Issues]
  E --> F
  F --> G[Monitor progress and share updates]
  G --> H{Customer impact?}
  H -->|Yes| I[Post updates to status page]
  H -->|No| J[Issue Mitigated]
  I --> J
  J --> K{Confirm stability}
  K -->|Yes| L[Resolve StatusPage Incident]
  K -->|No| M[Continue mitigation]
  M --> F
  L --> N[Incident Resolution]
  click D "#service-owner-paging" "Open Service Owner Paging Path"
  class D jump;
`,nodes:[{id:"A",label:"On-Call Paged",description:"The on-call engineer has been alerted and is responding."},{id:"B",label:"Triage and Assess Severity",description:"Quickly assess what's happening and confirm severity level."},{id:"C",label:"Need additional responders?",type:"decision",branches:[["Page More",3],["Proceed Solo",4]],description:"Can you handle this alone, or do you need specialists?"},{id:"D",label:"Page Additional On-Call",type:"link",linkTo:"service-owner-paging",description:"Bring in service owners or specialists who can help."},{id:"E",label:"Proceed with current responders",description:"Continue with the current team."},{id:"F",label:"Investigate and Mitigate Issues",description:"Dig into root cause while working on mitigation."},{id:"G",label:"Monitor progress and share updates",description:"Keep stakeholders informed with regular updates."},{id:"H",label:"Customer impact?",type:"decision",branches:[["Yes",8],["No",9]],description:"Are customers affected by this incident?"},{id:"I",label:"Post updates to status page",type:"link",linkTo:"/projects/statuspage-update",description:"Communicate externally via status page."},{id:"J",label:"Issue Mitigated",description:"The immediate problem has been addressed."},{id:"K",label:"Confirm stability",type:"decision",branches:[["Stable",11],["Not Stable",5]],description:"Are we confident the fix is holding?"},{id:"L",label:"Resolve StatusPage Incident",description:"Mark the external incident as resolved."},{id:"N",label:"Incident Resolution",description:"Close out the internal incident ticket."}]},{id:"service-owner-paging",title:"Service Owner Paging Path",description:"Find the right on-call responder using the service catalog and escalation paths.",code:`---
config:
  layout: fixed
---
flowchart TD
  A[Issue identified in a specific service] --> B[Search service catalog for owner info]
  B -->|On-call link found| C[Page On-Call]
  B -->|No owner info found| D[Search on-call tool for service]
  D -->|Service found| E[Page On-Call]
  D -->|Can't find service| F[Check Slack/Teams/Email]
  F --> G{Service Owner Found}
  G -->|Page On-Call| H[Page On-Call]
  G -->|No On-Call Found| J[Escalate within your team]
`,nodes:[{id:"A",label:"Issue identified in a specific service",description:"You've identified which service is causing the problem."},{id:"B",label:"Search service catalog for owner info",description:"Check your service catalog/registry for ownership info."},{id:"C",label:"Page On-Call",description:"Use the catalog link to page the service owner."},{id:"D",label:"Search on-call tool for service",description:"Search PagerDuty/OpsGenie directly for the service."},{id:"E",label:"Page On-Call",description:"Found it - page the service owner."},{id:"F",label:"Check Slack/Teams/Email",description:"Try communication channels to find the owner."},{id:"G",label:"Service Owner Found",type:"decision",branches:[["Found",7],["Not Found",8]],description:"Were you able to locate someone responsible?"},{id:"H",label:"Page On-Call",description:"Successfully located owner - page them."},{id:"J",label:"Escalate within your team",description:"No owner found - escalate to your leadership."}]}];function k({title:r,description:a,code:t,nodes:d,onLinkClick:e}){const[n,s]=l.useState(!1),c=async()=>{await navigator.clipboard.writeText(t.trim()),s(!0),setTimeout(()=>s(!1),2e3)};return i.jsxs(u,{children:[i.jsxs(m,{children:[i.jsx(g,{as:"h2",className:"text-xl",children:r}),i.jsx(f,{children:a})]}),i.jsxs(b,{className:"space-y-4",children:[i.jsx(P,{code:t,nodes:d,speed:1500,onLinkClick:e}),i.jsxs("details",{className:"rounded-md border border-dashed px-4 py-3 text-sm",children:[i.jsx("summary",{className:"cursor-pointer text-muted-foreground",children:"View Mermaid source"}),i.jsxs("div",{className:"mt-3 space-y-3",children:[i.jsxs(w,{variant:"outline",size:"sm",onClick:c,className:"gap-2",children:[n?i.jsx(p,{className:"h-4 w-4"}):i.jsx(h,{className:"h-4 w-4"}),n?"Copied":"Copy Mermaid"]}),i.jsx("pre",{className:"whitespace-pre-wrap text-xs text-muted-foreground",children:t.trim()})]})]})]})]})}function O(){const[r,a]=l.useState(o[0].id);l.useEffect(()=>{const e=()=>{const n=window.location.hash.replace("#","");o.some(s=>s.id===n)&&a(n)};return e(),window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]);const t=e=>{a(e),typeof window<"u"&&window.history.replaceState(null,"",`#${e}`)},d=e=>{e.startsWith("/")?window.open(e,"_blank"):t(e)};return i.jsxs("div",{className:"space-y-6",children:[i.jsx("p",{className:"text-sm text-muted-foreground",children:"Three incident command flowcharts that you can reuse, edit, and export as Mermaid. Use the tabs to switch views and copy the underlying diagram code."}),i.jsxs(v,{value:r,onValueChange:t,className:"space-y-4",children:[i.jsx(y,{className:"h-auto w-fit max-w-full flex-wrap justify-start gap-1 rounded-lg bg-zinc-200 p-1 text-muted-foreground dark:bg-zinc-800",children:o.map(e=>i.jsx(C,{value:e.id,className:"rounded-md px-3 py-1.5 text-xs data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs sm:text-sm",children:e.title},e.id))}),o.map(e=>i.jsx(x,{value:e.id,id:e.id,children:i.jsx(k,{title:e.title,description:e.description,code:e.code,nodes:e.nodes,onLinkClick:d})},e.id))]})]})}export{O as default};
