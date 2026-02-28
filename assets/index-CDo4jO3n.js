import{r as w,j as l,aK as le,aL as ce,aM as de,a6 as pe,ao as be,a as ye,N as xe,aN as ve,aO as we,O as Te,ae as $e,t as ke,E as Ne,aP as Ee,b as Re,i as Se}from"./vendor-DeyLhXpq.js";import{g as Ce,c as ne,f as M,i as ee,j as te,k as se,x as je}from"./index-C80gN8Bw.js";import{D as Pe,a as Ie,b as Oe,c as Ae}from"./dropdown-menu-DsCbc20s.js";import{t as B}from"./trackToolEvent-dYL5XBH_.js";import"./monitoring-C74x5Iy6.js";import"./ui-BQCqNqg0.js";import"./theme-CfHJhC9-.js";const ue=Ce("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),Le=w.forwardRef(({className:e,variant:a,size:s,...t},r)=>l.jsx(le,{ref:r,className:ne(ue({variant:a,size:s,className:e})),...t}));Le.displayName=le.displayName;const me=w.createContext({size:"default",variant:"default"}),ae=w.forwardRef(({className:e,variant:a,size:s,children:t,...r},n)=>l.jsx(ce,{ref:n,className:ne("flex items-center justify-center gap-1",e),...r,children:l.jsx(me.Provider,{value:{variant:a,size:s},children:t})}));ae.displayName=ce.displayName;const K=w.forwardRef(({className:e,children:a,variant:s,size:t,...r},n)=>{const d=w.useContext(me);return l.jsx(de,{ref:n,className:ne(ue({variant:d.variant||s,size:d.size||t}),e),...r,children:a})});K.displayName=de.displayName;const j={jq:{name:"jq",description:"Command-line JSON processor",placeholder:".",presets:[{name:"Select field",description:"Extract a specific field from JSON",input:'{"name": "Alice", "age": 30, "city": "NYC"}',command:".name",expectedOutputIncludes:"Alice"},{name:"Filter array",description:"Filter array elements by condition",input:'[{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}, {"name": "Carol", "age": 35}]',command:".[] | select(.age > 28)",expectedOutputIncludes:"Carol"},{name:"Structured Logs",description:"Parse structured JSON logs from ELK or CloudWatch",input:'[{"timestamp": "2024-01-15T10:23:45Z", "level": "info", "service": "api", "message": "Request received"}, {"timestamp": "2024-01-15T10:23:46Z", "level": "error", "service": "api", "message": "Database timeout", "error_code": "DB_TIMEOUT"}, {"timestamp": "2024-01-15T10:23:47Z", "level": "warn", "service": "api", "message": "Slow query"}, {"timestamp": "2024-01-15T10:23:48Z", "level": "error", "service": "db", "message": "Connection pool full"}]',command:'.[] | select(.level == "error")',expectedOutputIncludes:"Database timeout"},{name:"Nested Errors",description:"Extract error objects from nested JSON structures (includes null for successful requests)",input:'[{"request_id": "req-001", "status": 200, "error": null}, {"request_id": "req-002", "status": 500, "error": {"code": "DB_ERROR", "message": "Connection timeout", "details": {"host": "db-01"}}}, {"request_id": "req-003", "status": 200, "error": null}, {"request_id": "req-004", "status": 503, "error": {"code": "SERVICE_UNAVAILABLE", "message": "Upstream service down"}}]',command:".[] | .error",expectedOutputIncludes:"DB_ERROR"},{name:"Filter by Severity",description:"Filter logs by severity level (error, warn, etc.)",input:'[{"timestamp": "2024-01-15T10:23:45Z", "severity": "info", "message": "Health check OK"}, {"timestamp": "2024-01-15T10:23:46Z", "severity": "error", "message": "Database connection failed"}, {"timestamp": "2024-01-15T10:23:47Z", "severity": "warn", "message": "High latency detected"}, {"timestamp": "2024-01-15T10:23:48Z", "severity": "critical", "message": "Service unavailable"}, {"timestamp": "2024-01-15T10:23:49Z", "severity": "info", "message": "Request processed"}]',command:'.[] | select(.severity == "error")',expectedOutputIncludes:"Database connection failed"},{name:"Extract Services",description:"Extract service names from log entries",input:'[{"service": "api", "level": "info", "message": "Request"}, {"service": "api", "level": "error", "message": "Failed"}, {"service": "db", "level": "info", "message": "Query"}, {"service": "api", "level": "warn", "message": "Slow"}, {"service": "cache", "level": "info", "message": "Hit"}]',command:".[] | .service",expectedOutputIncludes:"api"},{name:"Request Metrics",description:"Extract request duration and status codes",input:'[{"path": "/api/users", "method": "GET", "status": 200, "duration_ms": 234, "user_id": "user-123"}, {"path": "/api/orders", "method": "POST", "status": 201, "duration_ms": 567, "user_id": "user-456"}, {"path": "/api/products", "method": "GET", "status": 200, "duration_ms": 89, "user_id": "user-789"}, {"path": "/api/search", "method": "GET", "status": 500, "duration_ms": 2341, "user_id": "user-123"}]',command:"[.[] | {path: .path, status: .status, duration: .duration_ms}]",expectedOutputIncludes:'"duration": 234'}]},grep:{name:"grep",description:"Search text using patterns",placeholder:"pattern",presets:[{name:"Simple match",description:"Find lines containing a word",input:`apple pie
banana bread
apple crumble
cherry tart`,command:"apple",expectedOutputIncludes:"apple pie"},{name:"Case insensitive",description:"Match regardless of case (-i)",input:`Error: Connection failed
WARNING: Timeout
error: Invalid input
Info: Success`,command:"-i error",expectedOutputIncludes:"Error: Connection failed"},{name:"Find Errors",description:"Extract error messages from application logs",input:`2024-01-15T10:23:45.123Z INFO  Request received: GET /api/users
2024-01-15T10:23:45.456Z INFO  Processing request
2024-01-15T10:23:46.789Z ERROR Database connection failed: timeout
2024-01-15T10:23:46.790Z ERROR Failed to initialize connection pool
2024-01-15T10:23:47.123Z INFO  Request completed: 200 OK
2024-01-15T10:23:48.456Z WARN  Slow query detected: 2.5s
2024-01-15T10:23:49.789Z ERROR Authentication failed for user: alice@example.com`,command:"-i error",expectedOutputIncludes:"Database connection failed"},{name:"Slow Requests",description:"Identify requests taking longer than 1 second",input:`2024-01-15T10:23:45.123Z GET /api/users 200 234ms
2024-01-15T10:23:46.456Z POST /api/orders 201 1567ms
2024-01-15T10:23:47.789Z GET /api/products 200 89ms
2024-01-15T10:23:48.012Z GET /api/search 200 2341ms
2024-01-15T10:23:49.345Z DELETE /api/users/123 204 456ms`,command:'-E "[0-9]{4,}ms"',expectedOutputIncludes:"1567ms"},{name:"Auth Failures",description:"Find authentication and authorization failures",input:`2024-01-15T10:23:45.123Z INFO  User login attempt: alice@example.com
2024-01-15T10:23:45.456Z ERROR Authentication failed: invalid credentials
2024-01-15T10:23:46.789Z WARN  Unauthorized access attempt: /api/admin/users
2024-01-15T10:23:47.012Z INFO  User authenticated: bob@example.com
2024-01-15T10:23:48.345Z ERROR 403 Forbidden: insufficient permissions
2024-01-15T10:23:49.678Z INFO  Login successful: carol@example.com`,command:'-iE "(auth|login|unauthorized|forbidden|401|403)"',expectedOutputIncludes:"Authentication failed"},{name:"Trace IDs",description:"Extract distributed trace IDs for correlation",input:`2024-01-15T10:23:45.123Z INFO  trace_id=abc123def456 service=api request_id=req-001
2024-01-15T10:23:45.124Z INFO  trace_id=abc123def456 service=db query=SELECT users
2024-01-15T10:23:45.125Z INFO  trace_id=xyz789uvw012 service=cache operation=get
2024-01-15T10:23:45.126Z INFO  trace_id=abc123def456 service=api response=200
2024-01-15T10:23:45.127Z INFO  trace_id=xyz789uvw012 service=api request_id=req-002`,command:'-iE "trace_id=[a-z0-9]+"',expectedOutputIncludes:"trace_id=abc123def456"},{name:"Critical Errors",description:"Filter for ERROR and FATAL level messages",input:`2024-01-15T10:23:45.123Z INFO  Application started
2024-01-15T10:23:46.456Z WARN  High memory usage: 85%
2024-01-15T10:23:47.789Z ERROR Connection pool exhausted
2024-01-15T10:23:48.012Z FATAL Out of memory: cannot allocate
2024-01-15T10:23:49.345Z INFO  Health check passed
2024-01-15T10:23:50.678Z ERROR Failed to process request`,command:'-E "(ERROR|FATAL|CRITICAL)"',expectedOutputIncludes:"FATAL Out of memory"}]},sed:{name:"sed",description:"Stream editor for text transformation",placeholder:"s/old/new/",presets:[{name:"Replace first",description:"Replace first occurrence per line",input:`hello world world
world hello world`,command:"s/world/universe/",expectedOutputIncludes:"hello universe world"},{name:"Replace all",description:"Replace all occurrences (global)",input:`the cat sat on the mat
the cat ate the rat`,command:"s/the/a/g",expectedOutputIncludes:"a cat sat on a mat"},{name:"Delete lines",description:"Delete lines matching pattern",input:`# This is a comment
code line 1
# Another comment
code line 2`,command:"/^#/d",expectedOutputIncludes:"code line 1"},{name:"Extract part",description:"Extract using capture groups",input:`user: alice (admin)
user: bob (guest)
user: carol (admin)`,command:"s/user: \\([^ ]*\\).*/\\1/",expectedOutputIncludes:"alice"},{name:"Multiple commands",description:"Chain multiple transformations",input:`  hello   world  
  foo   bar  `,command:"s/^[ ]*//; s/[ ]*$//; s/  */ /g",expectedOutputIncludes:"hello world"}]},awk:{name:"awk",description:"Pattern scanning and processing",placeholder:"{print $1}",presets:[{name:"Print column",description:"Extract specific columns",input:`alice 30 engineer
bob 25 designer
carol 35 manager`,command:"{print $1, $3}",expectedOutputIncludes:"alice engineer"},{name:"Sum column",description:"Calculate sum of numeric column",input:`apple 5
banana 3
orange 7
grape 2`,command:'{sum += $2} END {print "Total:", sum}',expectedOutputIncludes:"Total: 17"},{name:"Access Log Parsing",description:"Parse access logs and extract key fields",input:`192.168.1.100 GET /api/users 200 1234
192.168.1.101 POST /api/orders 201 5678
192.168.1.102 GET /api/products 200 890
192.168.1.103 GET /api/search 500 2341`,command:"{print $1, $3, $4}",expectedOutputIncludes:"/api/users 200"},{name:"Response Time Average",description:"Calculate average response time from logs",input:`/api/users 200 234
/api/orders 201 567
/api/products 200 89
/api/search 200 1234
/api/users 200 456
/api/orders 201 789`,command:'{sum += $3; count++} END {print "Average:", sum/count}',expectedOutputIncludes:"Average:"},{name:"IP Request Counts",description:"Count requests per IP address",input:`192.168.1.100 GET /api/users 200
192.168.1.101 POST /api/orders 201
192.168.1.100 GET /api/products 200
192.168.1.102 GET /api/search 200
192.168.1.100 POST /api/users 201
192.168.1.103 GET /api/health 200`,command:"{count[$1]++} END {for (k in count) print k, count[k]}",expectedOutputIncludes:"192.168.1.100 3"},{name:"CSV Metrics",description:"Parse CSV metrics exports from monitoring tools",input:`service,metric,value,timestamp
api,requests_per_sec,150,2024-01-15T10:23:45Z
api,error_rate,0.02,2024-01-15T10:23:45Z
db,connections,45,2024-01-15T10:23:45Z
cache,hit_rate,0.85,2024-01-15T10:23:45Z
api,latency_p95,234,2024-01-15T10:23:46Z`,command:"-F, 'NR>1 {print $1, $3}'",expectedOutputIncludes:"api 150"},{name:"Slow Requests Filter",description:"Filter requests exceeding latency threshold",input:`/api/users GET 200 234
/api/orders POST 201 1567
/api/products GET 200 89
/api/search GET 200 2341
/api/users GET 200 456
/api/admin DELETE 204 3456`,command:"$4 > 1000 {print $1, $2, $4}",expectedOutputIncludes:"/api/orders POST 1567"}]},kubectl:{name:"kubectl",description:"Kubernetes cluster management",placeholder:"get pods",hideStdin:!0,presets:[{name:"CrashLoopBackOff",description:"Triage: CrashLoopBackOff after deploy",input:"",command:"get pods -n payments",fixture:"crashloop",namespace:"payments",objective:"Find the CrashLooping pod and confirm why it keeps restarting",expectedOutputIncludes:"CrashLoopBackOff"},{name:"ImagePullBackOff",description:"Triage: Image pull failures",input:"",command:"get pods -n frontend",fixture:"imagepull",namespace:"frontend",objective:"Find the pod stuck pulling its image and identify the exact error",expectedOutputIncludes:"ImagePullBackOff"},{name:"Service Mismatch",description:"Triage: Service with no endpoints",input:"",command:"get svc,endpoints -n api",fixture:"service-mismatch",namespace:"api",objective:"Find why the service has no endpoints and fix the selector mismatch",expectedOutputRegex:"api-server\\s+<none>"},{name:"Rollout Regression",description:"Triage: Bad deploy, needs rollback",input:"",command:"rollout status deployment/web -n production",fixture:"rollout-regression",namespace:"production",objective:"Identify the failing deployment and roll back to the previous version",expectedOutputIncludes:'deployment "web"'},{name:"Node Pressure",description:"Triage: Node under resource pressure",input:"",command:"get nodes",fixture:"node-pressure",namespace:"default",objective:"Find the node under pressure and identify which pods are being evicted",expectedOutputIncludes:"DiskPressure"}]}},oe={tool:"kubectl",input:j.kubectl.presets[0].input,command:j.kubectl.presets[0].command,output:"",isLoading:!1},Fe=["kubectl","jq","grep","sed","awk"];function Ze({tool:e,mode:a,currentPreset:s,onToolChange:t,onModeChange:r,onPresetSelect:n,onReset:d}){const i=j[e],p=async()=>{await navigator.clipboard.writeText(window.location.href),B({tool_name:"cli_playground",action:"share_copy",event_label:e}),je.success("Link copied to clipboard")};return l.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[l.jsx(ae,{type:"single",value:e,onValueChange:o=>o&&t(o),className:"bg-zinc-200 dark:bg-zinc-800 p-1 rounded-lg",children:Fe.map(o=>l.jsx(K,{value:o,"aria-label":`Select ${o}`,className:"font-mono text-sm px-3 data-[state=on]:bg-background data-[state=on]:shadow-xs",children:o},o))}),l.jsxs(Pe,{children:[l.jsx(Ie,{asChild:!0,children:l.jsxs(M,{variant:"outline",size:"sm",className:"h-8 gap-1.5 text-sm font-normal",children:[l.jsx("span",{className:"max-w-[140px] truncate",children:s?.name||"Select lesson"}),l.jsx(pe,{className:"h-3.5 w-3.5 opacity-50"})]})}),l.jsx(Oe,{align:"start",className:"w-56",children:i.presets.map(o=>l.jsxs(Ae,{onClick:()=>n(o),className:"flex flex-col items-start gap-0.5 py-2",children:[l.jsx("span",{className:"font-medium",children:o.name}),l.jsx("span",{className:"text-xs text-muted-foreground",children:o.description})]},o.name))})]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs(ae,{type:"single",value:a,onValueChange:o=>o&&r(o),className:"bg-zinc-200 dark:bg-zinc-800 p-1 rounded-lg",children:[l.jsxs(K,{value:"learn","aria-label":"Learn mode",className:"text-sm px-3 gap-1.5 data-[state=on]:bg-background data-[state=on]:shadow-xs",children:[l.jsx(be,{className:"h-3.5 w-3.5"}),l.jsx("span",{className:"hidden sm:inline",children:"Learn"})]}),l.jsxs(K,{value:"playground","aria-label":"Playground mode",className:"text-sm px-3 gap-1.5 data-[state=on]:bg-background data-[state=on]:shadow-xs",children:[l.jsx(ye,{className:"h-3.5 w-3.5"}),l.jsx("span",{className:"hidden sm:inline",children:"Play"})]})]}),l.jsxs("div",{className:"flex items-center gap-0.5 border-l pl-2 ml-1",children:[l.jsxs(ee,{children:[l.jsx(te,{asChild:!0,children:l.jsxs(M,{variant:"ghost",size:"icon",onClick:d,className:"h-8 w-8",children:[l.jsx(xe,{className:"h-4 w-4"}),l.jsx("span",{className:"sr-only",children:"Reset"})]})}),l.jsx(se,{children:"Reset to default"})]}),l.jsxs(ee,{children:[l.jsx(te,{asChild:!0,children:l.jsxs(M,{variant:"ghost",size:"icon",onClick:p,className:"h-8 w-8",children:[l.jsx(ve,{className:"h-4 w-4"}),l.jsx("span",{className:"sr-only",children:"Share"})]})}),l.jsx(se,{children:"Copy link"})]})]})]})]})}function Me({tool:e,command:a,isLoading:s,onCommandChange:t,onRun:r}){const n=w.useRef(null);w.useEffect(()=>{n.current?.focus()},[e]);const d=i=>{i.key==="Enter"&&(i.metaKey||i.ctrlKey)&&(i.preventDefault(),r())};return l.jsxs("div",{className:"flex items-center gap-2 bg-muted/30 border rounded-lg p-2",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-muted-foreground font-mono text-sm shrink-0",children:[l.jsx("span",{className:"text-green-500",children:"$"}),l.jsx("span",{className:"text-primary",children:e})]}),l.jsx("input",{ref:n,type:"text",value:a,onChange:i=>t(i.target.value),onKeyDown:d,placeholder:"Enter command...",className:"flex-1 bg-transparent border-none outline-hidden font-mono text-sm placeholder:text-muted-foreground/50",spellCheck:!1,autoComplete:"off"}),l.jsxs(M,{onClick:r,disabled:s,size:"sm",className:"shrink-0 gap-1.5",children:[s?l.jsx(we,{className:"h-4 w-4 animate-spin"}):l.jsx(Te,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Run"}),l.jsxs("kbd",{className:"hidden sm:inline-flex h-5 items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-1",children:[l.jsx("span",{className:"text-xs",children:"⌘"}),"↵"]})]})]})}function Q({count:e}){return l.jsx("div",{className:"select-none text-right pr-2 text-muted-foreground/50 font-mono text-xs leading-5 pt-3 pb-3",children:Array.from({length:Math.max(e,1)},(a,s)=>l.jsx("div",{children:s+1},s))})}function De({input:e,output:a,error:s,isLoading:t,mode:r,tool:n,command:d,goalStatus:i,explanation:p,hideStdin:o,emptyStatePrompt:f,onInputChange:c,onTryCommand:u}){const[x,h]=w.useState(!1),[m,$]=w.useState(!1),[T,v]=w.useState("output"),k=e.split(`
`).length,R=(s||a||"").split(`
`).length,N=async()=>{const b=s||a;b&&(await navigator.clipboard.writeText(b),h(!0),setTimeout(()=>h(!1),2e3))},I=w.useMemo(()=>{const b=["output"];return n==="sed"&&b.push("diff"),r==="learn"&&b.push("explain"),b},[n,r]),q=I.length>1,H=n==="grep"&&!s&&!!a&&!t,g=b=>{const C=b.match(/^(-[invE]+\s+)?(.+)$/);if(!C)return null;const Z=C[1]?.trim()||"";if(Z.includes("v"))return null;let S=C[2].trim();(S.startsWith('"')&&S.endsWith('"')||S.startsWith("'")&&S.endsWith("'"))&&(S=S.slice(1,-1));const P=Z.includes("i"),A=Z.includes("E"),O=P?"gi":"g",z=A?S:S.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");try{return new RegExp(z,O)}catch{return null}},y=(b,C,Z)=>{C.lastIndex=0;const S=[];let P=0,A;for(;(A=C.exec(b))!==null;){const O=A.index??0,z=O+A[0].length;O>P&&S.push(b.slice(P,O)),S.push(l.jsx("mark",{className:"bg-amber-200/40 text-foreground rounded-sm px-0.5",children:b.slice(O,z)},`${Z}-${O}`)),P=z}return P<b.length&&S.push(b.slice(P)),S.length>0?S:b},E=H?g(d):null,he=E&&a.trim()!=="(no matches)"?a.split(`
`).map((b,C,Z)=>l.jsxs("span",{children:[y(b,E,C),C<Z.length-1?`
`:null]},`${C}`)):a,ge=()=>{const b=e.split(`
`),C=a.split(`
`),Z=Math.max(b.length,C.length),S=[];for(let P=0;P<Z;P+=1){const A=b[P]??"",O=C[P]??"";A===O?S.push({type:"same",text:A}):(A&&S.push({type:"remove",text:A}),O&&S.push({type:"add",text:O}))}return S},G=q?T:"output";return w.useEffect(()=>{I.includes(T)||v("output")},[I,T]),l.jsxs("div",{className:`grid gap-3 ${o?"":"lg:grid-cols-2"} min-h-[200px]`,children:[!o&&l.jsxs("div",{className:"flex flex-col border rounded-lg overflow-hidden bg-muted/20",children:[l.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 bg-muted/50 border-b",children:[l.jsx("span",{className:"text-xs font-medium text-muted-foreground",children:"stdin"}),l.jsx(M,{variant:"ghost",size:"sm",className:"h-6 px-1.5 lg:hidden",onClick:()=>$(!m),children:m?l.jsx(pe,{className:"h-3.5 w-3.5"}):l.jsx($e,{className:"h-3.5 w-3.5"})})]}),l.jsxs("div",{className:`flex flex-1 ${m?"hidden lg:flex":""}`,children:[l.jsx(Q,{count:k}),l.jsx("textarea",{value:e,onChange:b=>c(b.target.value),placeholder:"Paste or type input data...",className:"flex-1 bg-transparent border-none outline-hidden resize-none font-mono text-sm leading-5 p-3 pl-0 min-h-[150px]",spellCheck:!1})]})]}),l.jsxs("div",{className:"flex flex-col border rounded-lg overflow-hidden bg-muted/20",children:[l.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 bg-muted/50 border-b",children:[q?l.jsx("div",{className:"flex items-center gap-1",children:I.map(b=>{const C=b==="output"?s?"Error":"Output":b==="diff"?"Diff":"Explain";return l.jsx("button",{onClick:()=>v(b),className:`text-xs font-medium px-2 py-0.5 rounded transition-colors ${G===b?"bg-background text-foreground shadow-xs":"text-muted-foreground hover:text-foreground"}`,children:C},b)})}):l.jsx("span",{className:"text-xs font-medium text-muted-foreground",children:s?"Error":"Output"}),l.jsxs("div",{className:"flex items-center gap-2",children:[i&&l.jsx("span",{className:`text-[11px] font-medium px-2 py-0.5 rounded-full border ${i.status==="pass"?"border-green-500/30 text-green-600 bg-green-500/10":i.status==="fail"?"border-red-500/30 text-red-500 bg-red-500/10":"border-amber-500/30 text-amber-600 bg-amber-500/10"}`,children:i.label}),G==="output"&&l.jsxs(M,{variant:"ghost",size:"sm",className:"h-6 px-1.5 gap-1",onClick:N,disabled:!a&&!s,children:[x?l.jsx(ke,{className:"h-3 w-3 text-green-500"}):l.jsx(Ne,{className:"h-3 w-3"}),l.jsx("span",{className:"text-xs",children:"Copy"})]})]})]}),G==="output"&&l.jsxs("div",{className:"flex flex-1",children:[l.jsx(Q,{count:R}),l.jsx("pre",{className:`flex-1 font-mono text-sm leading-5 p-3 pl-0 overflow-auto whitespace-pre-wrap min-h-[150px] ${s?"text-red-400":""}`,children:t?l.jsx("span",{className:"text-muted-foreground animate-pulse",children:"Running..."}):s||(a?he:l.jsx("span",{className:"text-muted-foreground/50",children:f||"Output will appear here..."}))})]}),G==="diff"&&l.jsxs("div",{className:"flex flex-1",children:[l.jsx(Q,{count:Math.max(R,k)}),l.jsx("pre",{className:"flex-1 font-mono text-sm leading-5 p-3 pl-0 overflow-auto whitespace-pre-wrap min-h-[150px]",children:t?l.jsx("span",{className:"text-muted-foreground animate-pulse",children:"Running..."}):s?l.jsx("span",{className:"text-red-400",children:s}):a?ge().map((b,C)=>l.jsxs("span",{className:b.type==="add"?"text-emerald-500":b.type==="remove"?"text-red-500":"text-muted-foreground",children:[b.type==="add"?"+ ":b.type==="remove"?"- ":"  ",b.text,`
`]},`${b.type}-${C}`)):l.jsx("span",{className:"text-muted-foreground/50",children:"Run the command to see a diff."})})]}),G==="explain"&&l.jsx("div",{className:"flex-1 p-4 overflow-auto min-h-[150px] space-y-4",children:p?l.jsxs(l.Fragment,{children:[l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1",children:"What it does"}),l.jsx("p",{className:"text-sm",children:p.summary})]}),p.flags.length>0&&l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2",children:"Flags used"}),l.jsx("div",{className:"space-y-1.5",children:p.flags.map(b=>l.jsxs("div",{className:"flex items-start gap-2 text-sm",children:[l.jsx("code",{className:"bg-muted px-1.5 py-0.5 rounded text-xs font-mono shrink-0",children:b.flag}),l.jsx("span",{className:"text-muted-foreground",children:b.meaning})]},b.flag))})]}),p.tryNext.length>0&&l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2",children:"Try next"}),l.jsx("div",{className:"flex flex-wrap gap-2",children:p.tryNext.map(b=>l.jsxs(M,{variant:"outline",size:"sm",className:"h-7 text-xs gap-1",onClick:()=>{u(b.command),v("output")},children:[b.label,l.jsx(Ee,{className:"h-3 w-3"})]},b.label))})]})]}):l.jsx("p",{className:"text-sm text-muted-foreground",children:"Enter a command to see an explanation."})})]})]})}function fe(e,a){switch(e){case"jq":return _e(a);case"grep":return Ge(a);case"sed":return Ue(a);case"awk":return We(a);case"kubectl":return Be(a);default:return{summary:"Unknown command",flags:[],tryNext:[]}}}function _e(e){const a=[],s=[];let t="";if(e===".")t="Identity filter - outputs the input unchanged.",s.push({label:"Get keys",command:"keys"},{label:"Get length",command:"length"});else if(e==="keys")t="Returns the keys of an object as an array.",s.push({label:"Get values",command:"values"},{label:"Count keys",command:"keys | length"});else if(e==="values")t="Returns the values of an object as an array.",s.push({label:"Get keys",command:"keys"});else if(e==="length")t="Returns the length of arrays, strings, or number of keys in objects.",s.push({label:"Get keys",command:"keys"});else if(e.startsWith(".")&&!e.includes("[")&&!e.includes("|"))t=`Extracts the "${e.slice(1)}" field from the input object.`,s.push({label:"Get all keys",command:"keys"},{label:"Get type",command:`${e} | type`});else if(e===".[]")t="Iterates over array elements or object values, outputting each separately.",s.push({label:"Get first",command:".[0]"},{label:"Count items",command:". | length"});else if(e.includes("select(")){t="Filters elements that match the condition inside select().";const r=e.match(/select\(([^)]+)\)/);r&&a.push({flag:`select(${r[1]})`,meaning:`Keep items where ${r[1]} is true`}),s.push({label:"Remove filter",command:".[]"})}else t=`Applies the jq filter "${e}" to transform the JSON input.`;return{summary:t,flags:a,tryNext:s}}function Ge(e){const a=[],s=[],t=e.match(/^(-[a-zA-Z]+\s+)?(.+)$/),r=t?.[1]?.trim()||"",n=t?.[2]?.trim()||e;let d=`Searches for lines matching "${n}".`;return r.includes("i")&&a.push({flag:"-i",meaning:"Case-insensitive matching"}),r.includes("v")&&(a.push({flag:"-v",meaning:"Invert match - show lines that do NOT match"}),d=`Shows lines that do NOT contain "${n}".`),r.includes("n")&&a.push({flag:"-n",meaning:"Show line numbers"}),r.includes("E")&&a.push({flag:"-E",meaning:"Extended regex - enables +, ?, |, (), etc."}),r.includes("i")||s.push({label:"Case insensitive",command:`-i ${n}`}),r.includes("n")||s.push({label:"Show line numbers",command:`${r?r+" ":""}-n ${n}`.trim().replace(/\s+/g," ")}),r.includes("v")||s.push({label:"Invert match",command:`-v ${n}`}),{summary:d,flags:a,tryNext:s}}function Ue(e){const a=[],s=[];let t="";if(e.startsWith("s/")){const r=e.match(/^s\/(.+?)\/(.*)\/([gi]*)$/);if(r){const[,n,d,i]=r;t=`Replaces "${n}" with "${d}".`,i.includes("g")?a.push({flag:"g",meaning:"Global - replace all occurrences, not just the first"}):s.push({label:"Replace all",command:`s/${n}/${d}/g`}),i.includes("i")&&a.push({flag:"i",meaning:"Case-insensitive matching"}),i.includes("g")||s.push({label:"Global replace",command:`s/${n}/${d}/g`})}}else if(e.includes("/d")){const r=e.match(/^\/(.+)\/d$/);r&&(t=`Deletes lines matching the pattern "${r[1]}".`,s.push({label:"Keep matches instead",command:`/${r[1]}/!d`}))}else t=`Applies the sed expression "${e}" to transform text.`;return{summary:t,flags:a,tryNext:s}}function We(e){const a=[],s=[];let t="";if(e.startsWith("-F")){const r=e.match(/^-F(.)\s+/);r&&a.push({flag:`-F${r[1]}`,meaning:`Use "${r[1]}" as the field separator`})}if(e.includes("print $")){const r=e.match(/print\s+\$(\d+)/);r&&(t=`Prints column ${r[1]} from each line.`,parseInt(r[1],10)>1&&s.push({label:"Print column 1",command:"{print $1}"}),s.push({label:"Print all columns",command:"{print $0}"}))}else e.includes("sum +=")?(t="Calculates a running sum of a numeric field.",s.push({label:"Count lines",command:"{count++} END {print count}"})):e.includes("END")?(t="Processes all lines, then executes the END block for final output.",a.push({flag:"END {...}",meaning:"Code to run after all input is processed"})):t=`Processes each line with the awk program "${e}".`;return{summary:t,flags:a,tryNext:s}}function Be(e){const a=[],s=[];let t="";const r=e.trim().split(/\s+/);let n=0;r[n]==="kubectl"&&n++;const d=r[n]||"";n++;const i=r[n]||"",p=e.includes(" -n ")||e.includes(" --namespace"),o=e.includes("-A")||e.includes("--all-namespaces"),f=e.includes("-o wide"),c=e.includes("-o yaml"),u=e.includes("-o json"),x=e.includes("--tail"),m=e.match(/-n\s+(\S+)/)?.[1];switch(d){case"get":i.includes("pod")?(t="Lists pods - check STATUS and RESTARTS columns for issues.",f&&a.push({flag:"-o wide",meaning:"Shows IP addresses and node placement"}),f||s.push({label:"Show IPs & nodes",command:`kubectl get pods${m?` -n ${m}`:""} -o wide`}),s.push({label:"Describe unhealthy",command:`kubectl describe pod <name>${m?` -n ${m}`:""}`}),s.push({label:"View logs",command:`kubectl logs <pod-name>${m?` -n ${m}`:""}`})):i.includes("deploy")?(t="Lists deployments - READY shows available/desired replicas.",s.push({label:"Check rollout",command:`kubectl rollout status deployment/<name>${m?` -n ${m}`:""}`}),s.push({label:"View history",command:`kubectl rollout history deployment/<name>${m?` -n ${m}`:""}`})):i.includes("svc")||i.includes("service")?(t="Lists services - check if EXTERNAL-IP is assigned and ports are correct.",s.push({label:"Check endpoints",command:`kubectl get endpoints${m?` -n ${m}`:""}`})):i.includes("endpoints")||i.includes("ep")?(t="Shows service endpoints - <none> means no pods match the service selector.",s.push({label:"Check pod labels",command:`kubectl get pods --show-labels${m?` -n ${m}`:""}`}),s.push({label:"Describe service",command:`kubectl describe svc <name>${m?` -n ${m}`:""}`})):i.includes("node")?(t="Lists cluster nodes - look for NotReady status or conditions like MemoryPressure.",s.push({label:"Describe node",command:"kubectl describe node <name>"}),s.push({label:"Check resources",command:"kubectl top nodes"})):i.includes("event")&&(t="Shows cluster events - filter by type Warning for issues.",s.push({label:"All namespaces",command:"kubectl get events -A --sort-by=.lastTimestamp"}));break;case"describe":i.includes("pod")?(t="Shows detailed pod info - check Events section at bottom for errors.",a.push({flag:"describe",meaning:"Full details including events, conditions, and container states"}),s.push({label:"Get logs",command:`kubectl logs <pod>${m?` -n ${m}`:""}`}),s.push({label:"Previous logs",command:`kubectl logs <pod> --previous${m?` -n ${m}`:""}`})):i.includes("deploy")?(t="Shows deployment details - check Conditions and replica counts.",s.push({label:"Rollout status",command:`kubectl rollout status deployment/<name>${m?` -n ${m}`:""}`})):i.includes("node")?(t="Shows node details - check Conditions for MemoryPressure, DiskPressure.",a.push({flag:"describe",meaning:"Shows allocatable resources, taints, and conditions"}),s.push({label:"Check pods on node",command:"kubectl get pods -A --field-selector spec.nodeName=<node>"})):(i.includes("svc")||i.includes("service"))&&(t="Shows service details - verify Selector matches pod labels.",s.push({label:"Check endpoints",command:`kubectl get endpoints${m?` -n ${m}`:""}`}));break;case"logs":if(t="Shows container logs - look for ERROR, FATAL, or stack traces.",x){const $=e.match(/--tail\s+(\d+)/);$&&a.push({flag:`--tail ${$[1]}`,meaning:`Show last ${$[1]} lines only`})}x||s.push({label:"Last 50 lines",command:`kubectl logs <pod> --tail=50${m?` -n ${m}`:""}`}),s.push({label:"Previous crash",command:`kubectl logs <pod> --previous${m?` -n ${m}`:""}`}),s.push({label:"Follow live",command:`kubectl logs <pod> -f${m?` -n ${m}`:""}`});break;case"rollout":{const $=i;$==="status"?(t="Shows rollout progress - watch for stuck or failed updates.",s.push({label:"View history",command:`kubectl rollout history deployment/<name>${m?` -n ${m}`:""}`}),s.push({label:"Undo rollout",command:`kubectl rollout undo deployment/<name>${m?` -n ${m}`:""}`})):$==="history"?(t="Shows deployment revision history with change causes.",s.push({label:"Undo to previous",command:`kubectl rollout undo deployment/<name>${m?` -n ${m}`:""}`}),s.push({label:"Undo to specific",command:`kubectl rollout undo deployment/<name> --to-revision=<N>${m?` -n ${m}`:""}`})):$==="undo"&&(t="Rolls back to the previous deployment revision.",s.push({label:"Check status",command:`kubectl rollout status deployment/<name>${m?` -n ${m}`:""}`}),s.push({label:"Verify pods",command:`kubectl get pods${m?` -n ${m}`:""}`}));break}case"top":i.includes("pod")?(t="Shows pod resource usage - identify high CPU/memory consumers.",s.push({label:"Node usage",command:"kubectl top nodes"}),s.push({label:"Sort by memory",command:`kubectl top pods --sort-by=memory${m?` -n ${m}`:""}`})):i.includes("node")&&(t="Shows node resource usage - high memory% may cause evictions.",s.push({label:"Pod usage",command:"kubectl top pods -A"}),s.push({label:"Describe node",command:"kubectl describe node <name>"}));break;default:t="kubectl command for Kubernetes cluster management.",s.push({label:"List pods",command:"kubectl get pods"}),s.push({label:"List nodes",command:"kubectl get nodes"})}return p&&m&&a.push({flag:`-n ${m}`,meaning:`Target the ${m} namespace`}),o&&a.push({flag:"-A",meaning:"Search across all namespaces"}),c&&a.push({flag:"-o yaml",meaning:"Output full resource definition in YAML"}),u&&a.push({flag:"-o json",meaning:"Output full resource definition in JSON"}),{summary:t,flags:a,tryNext:s}}const qe={jq:[{label:"Get field",command:".name"},{label:"List keys",command:"keys"},{label:"Get age",command:".age"},{label:"Get city",command:".city"}],grep:[{label:"Match text",command:"apple"},{label:"Ignore case",command:"-i apple"},{label:"Line numbers",command:"-n apple"},{label:"Extended regex",command:'-E "(apple|banana)"'}],sed:[{label:"Replace first",command:"s/old/new/"},{label:"Replace all",command:"s/old/new/g"},{label:"Delete lines",command:"/^#/d"}],awk:[{label:"First column",command:"{print $1}"},{label:"Multiple cols",command:"{print $1, $2}"},{label:"Sum values",command:"{sum += $2} END {print sum}"}],kubectl:[{label:"Get pods",command:"get pods"},{label:"Describe pod",command:"describe pod"},{label:"Tail logs",command:"logs"},{label:"Get events",command:"get events"}]};function He({tool:e,preset:a,onTryCommand:s}){if(!a)return null;const t=fe(e,a.command).tryNext,r=qe[e],n=t.length>0?t:r,d=t.length>0?3:4,p=(e==="kubectl"&&a.namespace&&n===r?r.map(f=>({...f,command:f.command.includes("-n ")?f.command:`${f.command} -n ${a.namespace}`})):n).slice(0,d),o=e==="kubectl"&&a.objective||a.description;return l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg",children:[l.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[l.jsx(Re,{className:"h-4 w-4 text-blue-500 shrink-0"}),l.jsx("span",{className:"text-sm",children:o})]}),l.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[l.jsx("span",{className:"text-xs text-muted-foreground mr-1",children:"Try:"}),p.map(f=>l.jsxs(ee,{children:[l.jsx(te,{asChild:!0,children:l.jsx(M,{variant:"outline",size:"sm",className:"h-6 px-2 text-xs",onClick:()=>s(f.command),children:f.label})}),l.jsx(se,{children:l.jsx("code",{className:"font-mono text-xs",children:f.command})})]},f.label))]})]})}const ze={crashloop:Ve(),imagepull:Ke(),"service-mismatch":Je(),"rollout-regression":Ye(),"node-pressure":Qe()};function Ve(){const e="2024-01-15T10:20:00Z";return{pods:[{metadata:{name:"payment-api-7d4f8b9c5-x2k9m",namespace:"payments",labels:{app:"payment-api","pod-template-hash":"7d4f8b9c5",version:"v2.1.0"},creationTimestamp:e,uid:"pod-1-uid"},spec:{nodeName:"worker-1",containers:[{name:"payment-api",image:"myregistry/payment-api:v2.1.0",ports:[{containerPort:8080}]}]},status:{phase:"Running",podIP:"10.244.1.15",hostIP:"10.0.1.10",startTime:e,conditions:[{type:"Initialized",status:"True",lastTransitionTime:e},{type:"Ready",status:"False",lastTransitionTime:e,reason:"ContainersNotReady",message:"containers with unready status: [payment-api]"},{type:"ContainersReady",status:"False",lastTransitionTime:e},{type:"PodScheduled",status:"True",lastTransitionTime:e}],containerStatuses:[{name:"payment-api",image:"myregistry/payment-api:v2.1.0",imageID:"docker-pullable://myregistry/payment-api@sha256:abc123",ready:!1,restartCount:5,state:{waiting:{reason:"CrashLoopBackOff",message:"back-off 2m40s restarting failed container"}},lastState:{terminated:{exitCode:1,reason:"Error",message:"Container exited with code 1",finishedAt:e}}}]}},{metadata:{name:"payment-api-7d4f8b9c5-h8j3n",namespace:"payments",labels:{app:"payment-api","pod-template-hash":"7d4f8b9c5",version:"v2.1.0"},creationTimestamp:e,uid:"pod-2-uid"},spec:{nodeName:"worker-2",containers:[{name:"payment-api",image:"myregistry/payment-api:v2.1.0"}]},status:{phase:"Running",podIP:"10.244.2.22",hostIP:"10.0.1.11",startTime:e,conditions:[{type:"Ready",status:"False",lastTransitionTime:e}],containerStatuses:[{name:"payment-api",image:"myregistry/payment-api:v2.1.0",imageID:"docker-pullable://myregistry/payment-api@sha256:abc123",ready:!1,restartCount:5,state:{waiting:{reason:"CrashLoopBackOff",message:"back-off 2m40s restarting failed container"}},lastState:{terminated:{exitCode:1,reason:"Error",finishedAt:e}}}]}},{metadata:{name:"payment-db-0",namespace:"payments",labels:{app:"payment-db","statefulset.kubernetes.io/pod-name":"payment-db-0"},creationTimestamp:"2024-01-10T10:00:00Z",uid:"pod-3-uid"},spec:{nodeName:"worker-1",containers:[{name:"postgres",image:"postgres:15",ports:[{containerPort:5432}]}]},status:{phase:"Running",podIP:"10.244.1.8",hostIP:"10.0.1.10",startTime:"2024-01-10T10:00:00Z",conditions:[{type:"Ready",status:"True",lastTransitionTime:"2024-01-10T10:00:00Z"}],containerStatuses:[{name:"postgres",image:"postgres:15",imageID:"docker-pullable://postgres@sha256:def456",ready:!0,restartCount:0,state:{running:{startedAt:"2024-01-10T10:00:00Z"}}}]}}],deployments:[{metadata:{name:"payment-api",namespace:"payments",labels:{app:"payment-api"},creationTimestamp:"2024-01-15T10:20:00Z",uid:"deploy-1-uid"},spec:{replicas:2,selector:{matchLabels:{app:"payment-api"}},template:{metadata:{labels:{app:"payment-api"}}}},status:{replicas:2,readyReplicas:0,updatedReplicas:2,availableReplicas:0,conditions:[{type:"Available",status:"False",lastUpdateTime:e,lastTransitionTime:e,reason:"MinimumReplicasUnavailable",message:"Deployment does not have minimum availability."},{type:"Progressing",status:"True",lastUpdateTime:e,lastTransitionTime:e,reason:"ReplicaSetUpdated",message:'ReplicaSet "payment-api-7d4f8b9c5" has successfully progressed.'}]},revisions:[{revision:3,image:"myregistry/payment-api:v2.1.0",changeCause:"kubectl set image deployment/payment-api payment-api=myregistry/payment-api:v2.1.0"},{revision:2,image:"myregistry/payment-api:v2.0.0",changeCause:"kubectl set image deployment/payment-api payment-api=myregistry/payment-api:v2.0.0"},{revision:1,image:"myregistry/payment-api:v1.9.0",changeCause:"Initial deployment"}]}],replicaSets:[{metadata:{name:"payment-api-7d4f8b9c5",namespace:"payments",labels:{app:"payment-api","pod-template-hash":"7d4f8b9c5"},creationTimestamp:e,uid:"rs-1-uid"},spec:{replicas:2,selector:{matchLabels:{app:"payment-api","pod-template-hash":"7d4f8b9c5"}}},status:{replicas:2,readyReplicas:0,availableReplicas:0}}],services:[{metadata:{name:"payment-api",namespace:"payments",labels:{app:"payment-api"},creationTimestamp:"2023-12-15T10:00:00Z",uid:"svc-1-uid"},spec:{type:"ClusterIP",clusterIP:"10.96.45.12",ports:[{port:8080,targetPort:8080,protocol:"TCP"}],selector:{app:"payment-api"}}},{metadata:{name:"payment-db",namespace:"payments",labels:{app:"payment-db"},creationTimestamp:"2023-12-15T10:00:00Z",uid:"svc-2-uid"},spec:{type:"ClusterIP",clusterIP:"10.96.45.20",ports:[{port:5432,targetPort:5432,protocol:"TCP"}],selector:{app:"payment-db"}}}],endpoints:[{metadata:{name:"payment-api",namespace:"payments",creationTimestamp:"2023-12-15T10:00:00Z",uid:"ep-1-uid"},subsets:[]},{metadata:{name:"payment-db",namespace:"payments",creationTimestamp:"2023-12-15T10:00:00Z",uid:"ep-2-uid"},subsets:[{addresses:[{ip:"10.244.1.8",nodeName:"worker-1"}],ports:[{port:5432,protocol:"TCP"}]}]}],nodes:[F("worker-1"),F("worker-2")],events:[L("pod","payment-api-7d4f8b9c5-x2k9m","payments","Warning","BackOff","kubelet","Back-off restarting failed container","2m",5),L("pod","payment-api-7d4f8b9c5-h8j3n","payments","Warning","BackOff","kubelet","Back-off restarting failed container","2m",5),L("pod","payment-api-7d4f8b9c5-x2k9m","payments","Normal","Pulled","kubelet",'Container image "myregistry/payment-api:v2.1.0" already present on machine',"12m",1)],logs:{"payment-api-7d4f8b9c5-x2k9m":{"payment-api":`2024-01-15T10:23:45.123Z INFO  Starting payment-api v2.1.0
2024-01-15T10:23:45.456Z INFO  Connecting to database...
2024-01-15T10:23:46.789Z ERROR Database connection failed: FATAL: password authentication failed for user "payment_svc"
2024-01-15T10:23:46.790Z ERROR Failed to initialize database pool
2024-01-15T10:23:46.791Z FATAL Application startup failed: DatabaseConnectionError
panic: runtime error: database connection required`},"payment-api-7d4f8b9c5-h8j3n":{"payment-api":`2024-01-15T10:23:47.123Z INFO  Starting payment-api v2.1.0
2024-01-15T10:23:47.456Z INFO  Connecting to database...
2024-01-15T10:23:48.789Z ERROR Database connection failed: FATAL: password authentication failed for user "payment_svc"
2024-01-15T10:23:48.790Z FATAL Application startup failed`}}}}function Ke(){const e="2024-01-15T10:00:00Z";return{pods:[{metadata:{name:"frontend-web-5f6d7c8b9-k3m2n",namespace:"frontend",labels:{app:"frontend-web","pod-template-hash":"5f6d7c8b9"},creationTimestamp:e,uid:"pod-1-uid"},spec:{nodeName:"worker-1",containers:[{name:"frontend",image:"gcr.io/myproject/frontend:v3.0.0"}]},status:{phase:"Pending",conditions:[{type:"Ready",status:"False",lastTransitionTime:e}],containerStatuses:[{name:"frontend",image:"gcr.io/myproject/frontend:v3.0.0",imageID:"",ready:!1,restartCount:0,state:{waiting:{reason:"ImagePullBackOff",message:'Back-off pulling image "gcr.io/myproject/frontend:v3.0.0"'}}}]}},{metadata:{name:"frontend-api-6b7c8d9e0-j4k5l",namespace:"frontend",labels:{app:"frontend-api","pod-template-hash":"6b7c8d9e0"},creationTimestamp:"2024-01-13T10:00:00Z",uid:"pod-2-uid"},spec:{nodeName:"worker-1",containers:[{name:"api",image:"myregistry/frontend-api:v2.0.0"}]},status:{phase:"Running",podIP:"10.244.1.30",conditions:[{type:"Ready",status:"True",lastTransitionTime:"2024-01-13T10:00:00Z"}],containerStatuses:[{name:"api",image:"myregistry/frontend-api:v2.0.0",imageID:"docker-pullable://myregistry/frontend-api@sha256:abc",ready:!0,restartCount:0,state:{running:{startedAt:"2024-01-13T10:00:00Z"}}}]}}],deployments:[{metadata:{name:"frontend-web",namespace:"frontend",labels:{app:"frontend-web"},creationTimestamp:e,uid:"deploy-1-uid"},spec:{replicas:1,selector:{matchLabels:{app:"frontend-web"}},template:{metadata:{labels:{app:"frontend-web"}}}},status:{replicas:1,readyReplicas:0,updatedReplicas:1,availableReplicas:0}},{metadata:{name:"frontend-api",namespace:"frontend",labels:{app:"frontend-api"},creationTimestamp:"2024-01-13T10:00:00Z",uid:"deploy-2-uid"},spec:{replicas:1,selector:{matchLabels:{app:"frontend-api"}},template:{metadata:{labels:{app:"frontend-api"}}}},status:{replicas:1,readyReplicas:1,updatedReplicas:1,availableReplicas:1}}],replicaSets:[],services:[{metadata:{name:"frontend-web",namespace:"frontend",labels:{app:"frontend-web"},creationTimestamp:"2023-12-15T10:00:00Z",uid:"svc-1-uid"},spec:{type:"LoadBalancer",clusterIP:"10.96.100.10",ports:[{port:80,targetPort:80,protocol:"TCP",nodePort:31234}],selector:{app:"frontend-web"}},status:{loadBalancer:{ingress:[{ip:"34.120.55.80"}]}}}],endpoints:[{metadata:{name:"frontend-web",namespace:"frontend",creationTimestamp:"2023-12-15T10:00:00Z",uid:"ep-1-uid"},subsets:[]}],nodes:[F("worker-1")],events:[L("pod","frontend-web-5f6d7c8b9-k3m2n","frontend","Warning","Failed","kubelet",'Failed to pull image "gcr.io/myproject/frontend:v3.0.0": rpc error: code = Unknown desc = Error response from daemon: unauthorized: authentication required',"8m",3),L("pod","frontend-web-5f6d7c8b9-k3m2n","frontend","Warning","Failed","kubelet","Error: ImagePullBackOff","7m",1),L("pod","frontend-web-5f6d7c8b9-k3m2n","frontend","Normal","BackOff","kubelet",'Back-off pulling image "gcr.io/myproject/frontend:v3.0.0"',"5m",10)],logs:{}}}function Je(){const e="2024-01-15T09:00:00Z";return{pods:[{metadata:{name:"api-server-8f9g0h1i2-m5n6o",namespace:"api",labels:{app:"api-server",version:"v2","pod-template-hash":"8f9g0h1i2"},creationTimestamp:e,uid:"pod-1-uid"},spec:{nodeName:"worker-2",containers:[{name:"api",image:"myregistry/api-server:v2.0.0",ports:[{containerPort:8080}]}]},status:{phase:"Running",podIP:"10.244.2.50",conditions:[{type:"Ready",status:"True",lastTransitionTime:e}],containerStatuses:[{name:"api",image:"myregistry/api-server:v2.0.0",imageID:"docker-pullable://myregistry/api-server@sha256:abc",ready:!0,restartCount:0,state:{running:{startedAt:e}}}]}},{metadata:{name:"api-server-8f9g0h1i2-p7q8r",namespace:"api",labels:{app:"api-server",version:"v2","pod-template-hash":"8f9g0h1i2"},creationTimestamp:e,uid:"pod-2-uid"},spec:{nodeName:"worker-1",containers:[{name:"api",image:"myregistry/api-server:v2.0.0",ports:[{containerPort:8080}]}]},status:{phase:"Running",podIP:"10.244.1.51",conditions:[{type:"Ready",status:"True",lastTransitionTime:e}],containerStatuses:[{name:"api",image:"myregistry/api-server:v2.0.0",imageID:"docker-pullable://myregistry/api-server@sha256:abc",ready:!0,restartCount:0,state:{running:{startedAt:e}}}]}}],deployments:[{metadata:{name:"api-server",namespace:"api",labels:{app:"api-server"},creationTimestamp:e,uid:"deploy-1-uid"},spec:{replicas:2,selector:{matchLabels:{app:"api-server",version:"v2"}},template:{metadata:{labels:{app:"api-server",version:"v2"}}}},status:{replicas:2,readyReplicas:2,updatedReplicas:2,availableReplicas:2}}],replicaSets:[],services:[{metadata:{name:"api-server",namespace:"api",labels:{app:"api-server"},creationTimestamp:"2023-12-15T10:00:00Z",uid:"svc-1-uid"},spec:{type:"ClusterIP",clusterIP:"10.96.200.15",ports:[{port:8080,targetPort:8080,protocol:"TCP"}],selector:{app:"api-server",version:"v1"}}}],endpoints:[{metadata:{name:"api-server",namespace:"api",creationTimestamp:"2023-12-15T10:00:00Z",uid:"ep-1-uid"},subsets:[]}],nodes:[F("worker-1"),F("worker-2")],events:[],logs:{"api-server-8f9g0h1i2-m5n6o":{api:`2024-01-15T09:00:00.000Z INFO  API server started on :8080
2024-01-15T09:00:01.000Z INFO  Health check endpoint ready
2024-01-15T09:00:02.000Z INFO  Connected to database`}}}}function Ye(){const e="2024-01-15T14:30:00Z";return{pods:[{metadata:{name:"web-7a8b9c0d1-e2f3g",namespace:"production",labels:{app:"web",version:"v4.2.0","pod-template-hash":"7a8b9c0d1"},creationTimestamp:e,uid:"pod-1-uid"},spec:{nodeName:"worker-1",containers:[{name:"web",image:"myregistry/web:v4.2.0",ports:[{containerPort:8080}]}]},status:{phase:"Running",podIP:"10.244.1.100",conditions:[{type:"Ready",status:"True",lastTransitionTime:e}],containerStatuses:[{name:"web",image:"myregistry/web:v4.2.0",imageID:"docker-pullable://myregistry/web@sha256:v420",ready:!0,restartCount:0,state:{running:{startedAt:e}}}]}},{metadata:{name:"web-7a8b9c0d1-h4i5j",namespace:"production",labels:{app:"web",version:"v4.2.0","pod-template-hash":"7a8b9c0d1"},creationTimestamp:e,uid:"pod-2-uid"},spec:{nodeName:"worker-2",containers:[{name:"web",image:"myregistry/web:v4.2.0",ports:[{containerPort:8080}]}]},status:{phase:"Running",podIP:"10.244.2.101",conditions:[{type:"Ready",status:"True",lastTransitionTime:e}],containerStatuses:[{name:"web",image:"myregistry/web:v4.2.0",imageID:"docker-pullable://myregistry/web@sha256:v420",ready:!0,restartCount:0,state:{running:{startedAt:e}}}]}}],deployments:[{metadata:{name:"web",namespace:"production",labels:{app:"web"},creationTimestamp:"2023-10-15T10:00:00Z",uid:"deploy-1-uid"},spec:{replicas:2,selector:{matchLabels:{app:"web"}},template:{metadata:{labels:{app:"web"}}}},status:{replicas:2,readyReplicas:2,updatedReplicas:2,availableReplicas:2,conditions:[{type:"Available",status:"True",lastUpdateTime:e,lastTransitionTime:e,reason:"MinimumReplicasAvailable",message:"Deployment has minimum availability."},{type:"Progressing",status:"True",lastUpdateTime:e,lastTransitionTime:e,reason:"NewReplicaSetAvailable",message:'ReplicaSet "web-7a8b9c0d1" has successfully progressed.'}]},revisions:[{revision:5,image:"myregistry/web:v4.2.0",changeCause:"kubectl set image deployment/web web=myregistry/web:v4.2.0"},{revision:4,image:"myregistry/web:v4.1.0",changeCause:"kubectl set image deployment/web web=myregistry/web:v4.1.0"},{revision:3,image:"myregistry/web:v4.0.0",changeCause:"kubectl set image deployment/web web=myregistry/web:v4.0.0"}]}],replicaSets:[{metadata:{name:"web-7a8b9c0d1",namespace:"production",labels:{app:"web","pod-template-hash":"7a8b9c0d1"},creationTimestamp:e,uid:"rs-1-uid"},spec:{replicas:2,selector:{matchLabels:{app:"web","pod-template-hash":"7a8b9c0d1"}}},status:{replicas:2,readyReplicas:2,availableReplicas:2}},{metadata:{name:"web-6z9y8x7w6",namespace:"production",labels:{app:"web","pod-template-hash":"6z9y8x7w6"},creationTimestamp:"2024-01-14T10:00:00Z",uid:"rs-2-uid"},spec:{replicas:0,selector:{matchLabels:{app:"web","pod-template-hash":"6z9y8x7w6"}}},status:{replicas:0,readyReplicas:0,availableReplicas:0}}],services:[{metadata:{name:"web",namespace:"production",labels:{app:"web"},creationTimestamp:"2023-10-15T10:00:00Z",uid:"svc-1-uid"},spec:{type:"LoadBalancer",clusterIP:"10.96.50.50",ports:[{port:443,targetPort:8080,protocol:"TCP",nodePort:32e3}],selector:{app:"web"}},status:{loadBalancer:{ingress:[{ip:"35.200.100.50"}]}}}],endpoints:[{metadata:{name:"web",namespace:"production",creationTimestamp:"2023-10-15T10:00:00Z",uid:"ep-1-uid"},subsets:[{addresses:[{ip:"10.244.1.100"},{ip:"10.244.2.101"}],ports:[{port:8080,protocol:"TCP"}]}]}],nodes:[F("worker-1"),F("worker-2")],events:[L("deployment","web","production","Normal","ScalingReplicaSet","deployment-controller","Scaled up replica set web-7a8b9c0d1 to 2","5m",1)],logs:{"web-7a8b9c0d1-e2f3g":{web:`2024-01-15T14:30:00.000Z INFO  Starting web v4.2.0
2024-01-15T14:30:01.000Z INFO  Server listening on :8080
2024-01-15T14:30:15.000Z ERROR TypeError: Cannot read property 'userId' of undefined
2024-01-15T14:30:15.001Z ERROR     at handleCheckout (/app/routes/checkout.js:42)
2024-01-15T14:30:16.000Z ERROR TypeError: Cannot read property 'userId' of undefined
2024-01-15T14:30:20.000Z WARN  Error rate exceeds threshold: 45%`},"web-7a8b9c0d1-h4i5j":{web:`2024-01-15T14:30:00.000Z INFO  Starting web v4.2.0
2024-01-15T14:30:01.000Z INFO  Server listening on :8080
2024-01-15T14:30:18.000Z ERROR TypeError: Cannot read property 'userId' of undefined
2024-01-15T14:30:22.000Z WARN  Error rate exceeds threshold: 42%`}}}}function Qe(){const e="2024-01-15T09:30:00Z";return{pods:[{metadata:{name:"worker-job-a1b2c3d4",namespace:"default",labels:{job:"worker","batch.kubernetes.io/job-name":"worker-job"},creationTimestamp:"2024-01-15T09:00:00Z",uid:"pod-1-uid"},spec:{nodeName:"worker-3",containers:[{name:"worker",image:"myregistry/worker:latest"}]},status:{phase:"Failed",conditions:[{type:"Ready",status:"False",lastTransitionTime:e,reason:"PodFailed"}],containerStatuses:[{name:"worker",image:"myregistry/worker:latest",imageID:"docker-pullable://myregistry/worker@sha256:abc",ready:!1,restartCount:0,state:{terminated:{exitCode:137,reason:"OOMKilled",message:"Container was OOM killed",finishedAt:e}}}]}},{metadata:{name:"cache-redis-0",namespace:"default",labels:{app:"cache-redis","statefulset.kubernetes.io/pod-name":"cache-redis-0"},creationTimestamp:"2024-01-13T10:00:00Z",uid:"pod-2-uid"},spec:{nodeName:"worker-3",containers:[{name:"redis",image:"redis:7",ports:[{containerPort:6379}]}]},status:{phase:"Running",podIP:"10.244.3.10",conditions:[{type:"Ready",status:"True",lastTransitionTime:"2024-01-13T10:00:00Z"}],containerStatuses:[{name:"redis",image:"redis:7",imageID:"docker-pullable://redis@sha256:abc",ready:!0,restartCount:2,state:{running:{startedAt:e}}}]}}],deployments:[],replicaSets:[],services:[],endpoints:[],nodes:[F("worker-1"),F("worker-2"),Xe("worker-3")],events:[L("pod","worker-job-a1b2c3d4","default","Warning","Evicted","kubelet","The node was low on resource: memory. Container worker was using 1.8Gi, which exceeds its request of 512Mi.","10m",1),L("node","worker-3","","Warning","NodeHasDiskPressure","node-controller","Node worker-3 status is now: NodeHasDiskPressure","15m",1),L("node","worker-3","","Warning","NodeHasMemoryPressure","node-controller","Node worker-3 status is now: NodeHasMemoryPressure","20m",1)],logs:{}}}function F(e){return{metadata:{name:e,labels:{"kubernetes.io/hostname":e,"node.kubernetes.io/instance-type":"m5.large"},creationTimestamp:"2023-12-01T10:00:00Z",uid:`node-${e}-uid`},spec:{},status:{conditions:[{type:"MemoryPressure",status:"False",lastHeartbeatTime:"2024-01-15T10:00:00Z",lastTransitionTime:"2023-12-01T10:00:00Z",reason:"KubeletHasSufficientMemory",message:"kubelet has sufficient memory available"},{type:"DiskPressure",status:"False",lastHeartbeatTime:"2024-01-15T10:00:00Z",lastTransitionTime:"2023-12-01T10:00:00Z",reason:"KubeletHasNoDiskPressure",message:"kubelet has no disk pressure"},{type:"PIDPressure",status:"False",lastHeartbeatTime:"2024-01-15T10:00:00Z",lastTransitionTime:"2023-12-01T10:00:00Z",reason:"KubeletHasSufficientPID",message:"kubelet has sufficient PID available"},{type:"Ready",status:"True",lastHeartbeatTime:"2024-01-15T10:00:00Z",lastTransitionTime:"2023-12-01T10:00:00Z",reason:"KubeletReady",message:"kubelet is posting ready status"}],addresses:[{type:"InternalIP",address:`10.0.1.${10+parseInt(e.replace("worker-",""))}`},{type:"Hostname",address:e}],capacity:{cpu:"4",memory:"16Gi",pods:"110"},allocatable:{cpu:"3920m",memory:"15Gi",pods:"110"},nodeInfo:{kubeletVersion:"v1.28.2",osImage:"Ubuntu 22.04.3 LTS",kernelVersion:"5.15.0-1052-aws",containerRuntimeVersion:"containerd://1.6.24"}}}}function Xe(e){const a=F(e);return a.spec.unschedulable=!0,a.spec.taints=[{key:"node.kubernetes.io/unschedulable",effect:"NoSchedule"}],a.status.conditions=[{type:"MemoryPressure",status:"True",lastHeartbeatTime:"2024-01-15T10:00:00Z",lastTransitionTime:"2024-01-15T09:40:00Z",reason:"KubeletHasInsufficientMemory",message:"kubelet has insufficient memory available"},{type:"DiskPressure",status:"True",lastHeartbeatTime:"2024-01-15T10:00:00Z",lastTransitionTime:"2024-01-15T09:45:00Z",reason:"KubeletHasDiskPressure",message:"kubelet has disk pressure"},{type:"PIDPressure",status:"False",lastHeartbeatTime:"2024-01-15T10:00:00Z",lastTransitionTime:"2023-12-01T10:00:00Z",reason:"KubeletHasSufficientPID",message:"kubelet has sufficient PID available"},{type:"Ready",status:"True",lastHeartbeatTime:"2024-01-15T10:00:00Z",lastTransitionTime:"2023-12-01T10:00:00Z",reason:"KubeletReady",message:"kubelet is posting ready status"}],a.status.allocatable={cpu:"3920m",memory:"8Gi",pods:"110"},a}function L(e,a,s,t,r,n,d,i,p){return{metadata:{name:`${a}.${Date.now().toString(36)}`,namespace:s||"default",creationTimestamp:"2024-01-15T10:00:00Z",uid:`event-${a}-${r}-uid`},involvedObject:{kind:e.charAt(0).toUpperCase()+e.slice(1),name:a,namespace:s||void 0,uid:`${e}-${a}-uid`},reason:r,message:d,source:{component:n},firstTimestamp:"2024-01-15T10:00:00Z",lastTimestamp:"2024-01-15T10:00:00Z",count:p,type:t}}let U=null;function et(e){if(U&&U.fixtureId===e)return U.fixture;const a=ze[e];if(!a)throw new Error(`Unknown fixture: ${e}`);return U={fixtureId:e,fixture:JSON.parse(JSON.stringify(a))},U.fixture}function tt(e){const a={verb:"",resources:[],allNamespaces:!1,follow:!1,showLabels:!1,watch:!1,previous:!1,help:!1},s=[];let t="",r=!1,n="";for(const i of e)(i==='"'||i==="'")&&!r?(r=!0,n=i):i===n&&r?(r=!1,n=""):i===" "&&!r?t&&(s.push(t),t=""):t+=i;t&&s.push(t);let d=0;for(s[d]==="kubectl"&&d++,a.verb=s[d]||"",d++;d<s.length&&!s[d].startsWith("-");){const i=s[d];if(i.includes("/")){const[p,o]=i.split("/");(!a.resources.length||a.verb==="logs")&&a.resources.push(p),a.name=o}else i.includes(",")?a.resources.push(...i.split(",")):a.resources.length?a.name||(a.name=i):a.resources.push(i);d++}for(;d<s.length;){const i=s[d];if(i.includes("=")){const[p,o]=i.split("=");switch(p){case"--namespace":case"-n":a.namespace=o;break;case"--output":case"-o":a.output=o;break;case"--selector":case"-l":a.labelSelector=W(o);break;case"--field-selector":a.fieldSelector=W(o);break;case"--container":case"-c":a.container=o;break;case"--tail":a.tail=parseInt(o,10);break;case"--since":a.since=o;break;case"--sort-by":a.sortBy=o;break}}else switch(i){case"-n":case"--namespace":a.namespace=s[++d];break;case"-A":case"--all-namespaces":a.allNamespaces=!0;break;case"-o":case"--output":a.output=s[++d];break;case"-l":case"--selector":a.labelSelector=W(s[++d]);break;case"--field-selector":a.fieldSelector=W(s[++d]);break;case"-c":case"--container":a.container=s[++d];break;case"--tail":a.tail=parseInt(s[++d],10);break;case"--since":a.since=s[++d];break;case"-f":case"--follow":a.follow=!0;break;case"--sort-by":a.sortBy=s[++d];break;case"--show-labels":a.showLabels=!0;break;case"-w":case"--watch":a.watch=!0;break;case"-p":case"--previous":a.previous=!0;break;case"-h":case"--help":a.help=!0;break;default:i.startsWith("-o")?a.output=i.slice(2):i.startsWith("-n")&&i.length>2?a.namespace=i.slice(2):i.startsWith("-l")&&i.length>2?a.labelSelector=W(i.slice(2)):i.startsWith("-c")&&i.length>2&&(a.container=i.slice(2))}d++}return a}function W(e){const a={};for(const s of e.split(",")){const[t,r]=s.split("=");t&&r!==void 0&&(a[t.trim()]=r.trim())}return a}function X(e,a){return e?Object.entries(a).every(([s,t])=>e[s]===t):!1}function D(e){return{"2024-01-15T10:20:00Z":"12m","2024-01-15T10:00:00Z":"8m","2024-01-15T09:00:00Z":"1h","2024-01-15T14:30:00Z":"5m","2024-01-15T09:30:00Z":"30m","2024-01-10T10:00:00Z":"5d","2024-01-13T10:00:00Z":"2d","2023-12-15T10:00:00Z":"30d","2023-12-01T10:00:00Z":"45d","2023-10-15T10:00:00Z":"90d"}[e]||"1d"}function st(e){const a=e.status.containerStatuses?.[0];return a?.state.waiting?a.state.waiting.reason||"Waiting":a?.state.terminated?a.state.terminated.reason==="OOMKilled"?"OOMKilled":a.state.terminated.reason||"Terminated":e.status.phase==="Failed"?"Error":e.status.phase}function at(e){const a=e.spec.containers.length;return`${e.status.containerStatuses?.filter(t=>t.ready).length||0}/${a}`}function nt(e){return e.status.containerStatuses?.reduce((a,s)=>a+s.restartCount,0)||0}function rt(e,a,s,t){if(e.length===0)return"No resources found.";let r=t?"NAMESPACE     ":"";r+="NAME                                   READY   STATUS             RESTARTS   AGE",a&&(r+="     IP            NODE"),s&&(r+="   LABELS");const n=e.map(d=>{let i=t?`${(d.metadata.namespace||"default").padEnd(13)} `:"";if(i+=`${d.metadata.name.padEnd(39)} ${at(d).padEnd(7)} ${st(d).padEnd(18)} ${String(nt(d)).padEnd(10)} ${D(d.metadata.creationTimestamp)}`,a&&(i+=`     ${(d.status.podIP||"<none>").padEnd(13)} ${d.spec.nodeName||"<none>"}`),s){const p=d.metadata.labels?Object.entries(d.metadata.labels).map(([o,f])=>`${o}=${f}`).join(","):"<none>";i+=`   ${p}`}return i});return[r,...n].join(`
`)}function ot(e,a){if(e.length===0)return"No resources found.";let s=a?"NAMESPACE     ":"";s+="NAME                    READY   UP-TO-DATE   AVAILABLE   AGE";const t=e.map(r=>{const n=`${r.status.readyReplicas||0}/${r.spec.replicas}`;let d=a?`${(r.metadata.namespace||"default").padEnd(13)} `:"";return d+=`${r.metadata.name.padEnd(23)} ${n.padEnd(7)} ${String(r.status.updatedReplicas||0).padEnd(12)} ${String(r.status.availableReplicas||0).padEnd(11)} ${D(r.metadata.creationTimestamp)}`,d});return[s,...t].join(`
`)}function it(e,a){if(e.length===0)return"No resources found.";let s=a?"NAMESPACE     ":"";s+="NAME                    DESIRED   CURRENT   READY   AGE";const t=e.map(r=>{let n=a?`${(r.metadata.namespace||"default").padEnd(13)} `:"";return n+=`${r.metadata.name.padEnd(23)} ${String(r.spec.replicas).padEnd(9)} ${String(r.status.replicas).padEnd(9)} ${String(r.status.readyReplicas||0).padEnd(7)} ${D(r.metadata.creationTimestamp)}`,n});return[s,...t].join(`
`)}function lt(e,a){if(e.length===0)return"No resources found.";let s=a?"NAMESPACE     ":"";s+="NAME                TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)          AGE";const t=e.map(r=>{const n=r.status?.loadBalancer?.ingress?.[0]?.ip||r.spec.externalIPs?.[0]||"<none>",d=r.spec.ports.map(p=>p.nodePort?`${p.port}:${p.nodePort}/${p.protocol}`:`${p.port}/${p.protocol}`).join(",");let i=a?`${(r.metadata.namespace||"default").padEnd(13)} `:"";return i+=`${r.metadata.name.padEnd(19)} ${r.spec.type.padEnd(14)} ${r.spec.clusterIP.padEnd(15)} ${n.padEnd(15)} ${d.padEnd(16)} ${D(r.metadata.creationTimestamp)}`,i});return[s,...t].join(`
`)}function ct(e,a){if(e.length===0)return"No resources found.";let s=a?"NAMESPACE     ":"";s+="NAME                ENDPOINTS                      AGE";const t=e.map(r=>{const n=r.subsets?.flatMap(i=>(i.addresses||[]).flatMap(p=>(i.ports||[]).map(o=>`${p.ip}:${o.port}`))).join(",")||"<none>";let d=a?`${(r.metadata.namespace||"default").padEnd(13)} `:"";return d+=`${r.metadata.name.padEnd(19)} ${n.slice(0,30).padEnd(30)} ${D(r.metadata.creationTimestamp)}`,d});return[s,...t].join(`
`)}function dt(e){if(e.length===0)return"No resources found.";const a="NAME         STATUS                     ROLES    AGE    VERSION",s=e.map(t=>{let n=t.status.conditions.find(o=>o.type==="Ready")?.status==="True"?"Ready":"NotReady";t.spec.unschedulable&&(n+=",SchedulingDisabled");const d=t.status.conditions.find(o=>o.type==="MemoryPressure"&&o.status==="True"),i=t.status.conditions.find(o=>o.type==="DiskPressure"&&o.status==="True");d&&(n=n.replace("Ready","Ready,MemoryPressure")),i&&(n=n.replace("Ready","Ready,DiskPressure"));const p=t.metadata.labels?.["node-role.kubernetes.io/control-plane"]?"control-plane":"<none>";return`${t.metadata.name.padEnd(12)} ${n.padEnd(26)} ${p.padEnd(8)} ${D(t.metadata.creationTimestamp).padEnd(6)} ${t.status.nodeInfo.kubeletVersion}`});return[a,...s].join(`
`)}function pt(e,a){if(e.length===0)return"No events found.";let s=a?"NAMESPACE     ":"";s+="LAST SEEN   TYPE      REASON                  OBJECT                                MESSAGE";const t=e.map(r=>{const n=`${r.involvedObject.kind.toLowerCase()}/${r.involvedObject.name}`;let d=a?`${(r.metadata.namespace||"default").padEnd(13)} `:"";return d+=`${D(r.lastTimestamp).padEnd(11)} ${r.type.padEnd(9)} ${r.reason.padEnd(23)} ${n.padEnd(37)} ${r.message.slice(0,50)}`,d});return[s,...t].join(`
`)}function ut(e,a){const s=e.status.containerStatuses?.[0],t=e.spec.containers[0],r=a.filter(o=>o.involvedObject.name===e.metadata.name&&o.involvedObject.kind==="Pod"),n=s?.state.waiting?`Waiting
      Reason:       ${s.state.waiting.reason}
      Message:      ${s.state.waiting.message||""}`:s?.state.running?`Running
      Started:      ${s.state.running.startedAt}`:s?.state.terminated?`Terminated
      Reason:       ${s.state.terminated.reason}
      Exit Code:    ${s.state.terminated.exitCode}
      Message:      ${s.state.terminated.message||""}`:"Unknown",d=s?.lastState?.terminated?`Terminated
      Reason:       ${s.lastState.terminated.reason}
      Exit Code:    ${s.lastState.terminated.exitCode}
      Finished:     ${s.lastState.terminated.finishedAt}`:"<none>",i=e.status.conditions?.map(o=>`  ${o.type.padEnd(20)} ${o.status}`).join(`
`)||"  <none>",p=r.length>0?r.map(o=>`  ${o.type.padEnd(9)} ${o.reason.padEnd(20)} ${D(o.lastTimestamp).padEnd(8)} ${o.source.component.padEnd(25)} ${o.message}`).join(`
`):"  <none>";return`Name:             ${e.metadata.name}
Namespace:        ${e.metadata.namespace||"default"}
Priority:         0
Service Account:  default
Node:             ${e.spec.nodeName||"<none>"}/${e.status.podIP||"<none>"}
Start Time:       ${e.status.startTime||"<unknown>"}
Labels:           ${e.metadata.labels?Object.entries(e.metadata.labels).map(([o,f])=>`${o}=${f}`).join(`
                  `):"<none>"}
Status:           ${e.status.phase}
IP:               ${e.status.podIP||"<none>"}
Controlled By:    ReplicaSet/${e.metadata.name.split("-").slice(0,-1).join("-")}
Containers:
  ${t.name}:
    Container ID:   docker://${e.metadata.uid.slice(0,12)}
    Image:          ${t.image}
    Image ID:       ${s?.imageID||"docker-pullable://"+t.image}
    Port:           ${t.ports?.[0]?.containerPort||"<none>"}/TCP
    Host Port:      0/TCP
    State:          ${n}
    Last State:     ${d}
    Ready:          ${s?.ready||!1}
    Restart Count:  ${s?.restartCount||0}
Conditions:
  Type              Status
${i}
Events:
${p}`}function mt(e,a){const s=Object.entries(e.spec.selector.matchLabels).map(([d,i])=>`${d}=${i}`).join(","),t=e.status.conditions?.map(d=>`  ${d.type.padEnd(15)} ${d.status.padEnd(7)} ${d.reason}`).join(`
`)||"  <none>",r=a.find(d=>d.status.replicas>0),n=a.filter(d=>d.status.replicas===0);return`Name:                   ${e.metadata.name}
Namespace:              ${e.metadata.namespace||"default"}
CreationTimestamp:      ${e.metadata.creationTimestamp}
Labels:                 ${e.metadata.labels?Object.entries(e.metadata.labels).map(([d,i])=>`${d}=${i}`).join(","):"<none>"}
Annotations:            deployment.kubernetes.io/revision: ${e.revisions?.length||1}
Selector:               ${s}
Replicas:               ${e.spec.replicas} desired | ${e.status.updatedReplicas||0} updated | ${e.status.replicas||0} total | ${e.status.availableReplicas||0} available | ${(e.spec.replicas||0)-(e.status.availableReplicas||0)} unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        0
RollingUpdateStrategy:  25% max unavailable, 25% max surge
Pod Template:
  Labels:  ${Object.entries(e.spec.template.metadata.labels).map(([d,i])=>`${d}=${i}`).join(",")}
Conditions:
  Type           Status  Reason
${t}
OldReplicaSets:  ${n.length>0?n.map(d=>`${d.metadata.name} (${d.status.replicas}/${d.spec.replicas} replicas created)`).join(", "):"<none>"}
NewReplicaSet:   ${r?`${r.metadata.name} (${r.status.replicas}/${r.spec.replicas} replicas created)`:"<none>"}
Events:          <none>`}function ft(e){const a=e.status.conditions.map(t=>`  ${t.type.padEnd(20)} ${t.status.padEnd(9)} ${t.lastHeartbeatTime}   ${t.reason.padEnd(30)} ${t.message}`).join(`
`),s=e.spec.taints?.map(t=>`${t.key}=${t.value||""}:${t.effect}`).join(`
                    `)||"<none>";return`Name:               ${e.metadata.name}
Roles:              ${e.metadata.labels?.["node-role.kubernetes.io/control-plane"]?"control-plane":"<none>"}
Labels:             ${Object.entries(e.metadata.labels||{}).map(([t,r])=>`${t}=${r}`).join(`
                    `)}
Annotations:        node.alpha.kubernetes.io/ttl: 0
CreationTimestamp:  ${e.metadata.creationTimestamp}
Taints:             ${s}
Unschedulable:      ${e.spec.unschedulable||!1}
Conditions:
  Type                 Status    LastHeartbeatTime                 Reason                         Message
${a}
Addresses:
  InternalIP:  ${e.status.addresses.find(t=>t.type==="InternalIP")?.address||"<none>"}
  Hostname:    ${e.status.addresses.find(t=>t.type==="Hostname")?.address||e.metadata.name}
Capacity:
  cpu:                ${e.status.capacity.cpu}
  memory:             ${e.status.capacity.memory}
  pods:               ${e.status.capacity.pods}
Allocatable:
  cpu:                ${e.status.allocatable.cpu}
  memory:             ${e.status.allocatable.memory}
  pods:               ${e.status.allocatable.pods}
System Info:
  Kernel Version:             ${e.status.nodeInfo.kernelVersion}
  OS Image:                   ${e.status.nodeInfo.osImage}
  Container Runtime Version:  ${e.status.nodeInfo.containerRuntimeVersion}
  Kubelet Version:            ${e.status.nodeInfo.kubeletVersion}`}function ht(e,a){const s=e.spec.selector?Object.entries(e.spec.selector).map(([n,d])=>`${n}=${d}`).join(","):"<none>",t=e.status?.loadBalancer?.ingress?.[0]?.ip||"<none>",r=a?.subsets?.flatMap(n=>(n.addresses||[]).flatMap(d=>(n.ports||[]).map(i=>`${d.ip}:${i.port}`))).join(",")||"<none>";return`Name:              ${e.metadata.name}
Namespace:         ${e.metadata.namespace||"default"}
Labels:            ${e.metadata.labels?Object.entries(e.metadata.labels).map(([n,d])=>`${n}=${d}`).join(","):"<none>"}
Annotations:       <none>
Selector:          ${s}
Type:              ${e.spec.type}
IP Family Policy:  SingleStack
IP Families:       IPv4
IP:                ${e.spec.clusterIP}
IPs:               ${e.spec.clusterIP}
${e.spec.type==="LoadBalancer"?`LoadBalancer Ingress:  ${t}
`:""}Port:              <unset>  ${e.spec.ports[0].port}/${e.spec.ports[0].protocol}
TargetPort:        ${e.spec.ports[0].targetPort}/${e.spec.ports[0].protocol}
${e.spec.ports[0].nodePort?`NodePort:          <unset>  ${e.spec.ports[0].nodePort}/${e.spec.ports[0].protocol}
`:""}Endpoints:         ${r}
Session Affinity:  None
Events:            <none>`}function gt(e){return(e.status.availableReplicas||0)===e.spec.replicas?`deployment "${e.metadata.name}" successfully rolled out`:`Waiting for deployment "${e.metadata.name}" rollout to finish: ${e.status.availableReplicas||0} of ${e.spec.replicas} updated replicas are available...`}function bt(e){const a=e.revisions||[],s="REVISION  CHANGE-CAUSE",t=a.map(r=>`${r.revision}         ${r.changeCause||"<none>"}`);return`deployment.apps/${e.metadata.name}
${s}
${t.join(`
`)}`}function _(e){return JSON.stringify(e,null,2).replace(/"/g,"").replace(/,$/gm,"").replace(/^\{$/gm,"---").replace(/^\}$/gm,"")}const V={"":`kubectl - Kubernetes CLI Playground

This is a simulated kubectl environment for learning Kubernetes troubleshooting.
Commands run against mock cluster fixtures, not a real cluster.

Available Commands:
  get         Display resources (pods, deployments, services, nodes, events)
  describe    Show detailed information about a resource
  logs        Print container logs
  rollout     Manage deployments (status, history, undo)
  top         Display resource usage (simulated metrics)

Common Flags:
  -n, --namespace     Target namespace
  -A, --all-namespaces  Query all namespaces
  -o, --output        Output format (wide, json, yaml)
  -l, --selector      Filter by label selector
  --help              Show help for a command

Examples:
  get pods -n payments
  describe pod payment-api-7d4f8b9c5-x2k9m -n payments
  logs payment-api-7d4f8b9c5-x2k9m -n payments
  rollout history deployment/web -n production

Limitations:
  • Read-only simulation (no create, apply, delete, edit, exec, port-forward)
  • Fixed fixture data per lesson (5 troubleshooting scenarios)
  • Rollout undo mutates session state but resets on lesson change

Use --help with any command for detailed usage.`,get:`kubectl get - Display resources

Usage:
  kubectl get <resource> [name] [flags]

Supported Resources:
  pods, po              List pods with status, ready count, restarts, age
  deployments, deploy   List deployments with replica counts
  replicasets, rs       List replica sets
  services, svc         List services with type, cluster IP, ports
  endpoints, ep         List service endpoints
  nodes, no             List cluster nodes with status and roles
  events, ev            List cluster events (warnings, errors)

Flags:
  -n, --namespace string    Target namespace (default: from lesson)
  -A, --all-namespaces      Query across all namespaces
  -o, --output string       Output format: wide, json, yaml
  -l, --selector string     Filter by label (e.g., -l app=web)
  --show-labels             Show all labels in output
  --sort-by string          Sort by field (e.g., .metadata.name)

Examples:
  get pods -n payments
  get pods -o wide
  get pods -l app=payment-api
  get svc,endpoints -n api
  get events -A --sort-by=.lastTimestamp

Multi-Resource:
  get svc,endpoints         Query multiple resource types at once

Limitations:
  • No support for: configmaps, secrets, ingress, pvc, jobs, cronjobs
  • Field selectors partially supported (spec.nodeName only)
  • Custom columns (-o custom-columns) not supported`,describe:`kubectl describe - Show detailed resource information

Usage:
  kubectl describe <resource> [name] [flags]

Supported Resources:
  pod         Full pod details: containers, conditions, events
  deployment  Deployment status, strategy, replica sets
  node        Node conditions, capacity, allocatable resources
  service     Service details, selector, endpoints

Output Includes:
  • Metadata (name, namespace, labels, creation time)
  • Spec (containers, volumes, selectors)
  • Status (conditions, phase, IP addresses)
  • Events (recent warnings and normal events)

Flags:
  -n, --namespace string    Target namespace

Examples:
  describe pod payment-api-7d4f8b9c5-x2k9m -n payments
  describe deployment web -n production
  describe node worker-1
  describe svc api-gateway -n api

Tips:
  • Look at the Events section for troubleshooting clues
  • Check Conditions for Ready, Initialized status
  • Container State shows CrashLoopBackOff, ImagePullBackOff details

Limitations:
  • No describe for: configmap, secret, ingress, pvc, rs
  • Single resource at a time (no wildcards)`,logs:`kubectl logs - Print container logs

Usage:
  kubectl logs <pod> [flags]
  kubectl logs <type>/<name> [flags]

Flags:
  -n, --namespace string    Target namespace
  -c, --container string    Container name (if pod has multiple)
  --tail int                Lines of recent logs to show
  --since string            Only logs newer than duration (e.g., 1h, 30m)
  -p, --previous            Show logs from previous container instance
  -f, --follow              Stream logs (simulated - returns current logs)

Examples:
  logs payment-api-7d4f8b9c5-x2k9m -n payments
  logs deployment/web -n production
  logs web-abc123 --tail=50
  logs web-abc123 --previous
  logs web-abc123 -c sidecar

Output:
  • Timestamped log entries
  • Includes ERROR, FATAL, panic messages for troubleshooting
  • Previous logs available for crashed containers

Limitations:
  • Logs are pre-generated per fixture (not real-time)
  • --follow returns immediately (no streaming)
  • --since filters by line number approximation`,rollout:`kubectl rollout - Manage deployment rollouts

Usage:
  kubectl rollout <subcommand> <resource> [flags]

Subcommands:
  status      Show rollout status
  history     View rollout revision history
  undo        Rollback to previous revision

Examples:
  rollout status deployment/web -n production
  rollout history deployment/web -n production
  rollout undo deployment/web -n production
  rollout undo deployment/web --to-revision=2 -n production

Flags:
  -n, --namespace string    Target namespace
  --to-revision int         Rollback to specific revision (with undo)

Status Output:
  • "successfully rolled out" - deployment complete
  • Progress messages for ongoing rollouts

History Output:
  • Revision numbers with change causes
  • Shows image versions for each revision

Undo Behavior:
  • Reverts to previous revision (or --to-revision)
  • Session state is mutated until lesson change
  • Use Reset button to restore original fixture state

Limitations:
  • No rollout pause, resume, restart
  • Only deployments supported (not daemonsets, statefulsets)
  • State resets when switching lessons`,top:`kubectl top - Display resource usage

Usage:
  kubectl top <resource> [name] [flags]

Supported Resources:
  pods        Show pod CPU and memory usage
  nodes       Show node CPU and memory usage

Flags:
  -n, --namespace string    Target namespace (for pods)
  --sort-by string          Sort by cpu or memory

Examples:
  top pods -n payments
  top pods --sort-by=memory
  top nodes

Output (Pods):
  NAME        CPU(cores)   MEMORY(bytes)
  web-abc123  125m         256Mi

Output (Nodes):
  NAME      CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
  worker-1  1250m        32%    8192Mi          51%

Note:
  • Metrics are deterministic per fixture (hash-based)
  • Useful for identifying resource-heavy pods
  • Node metrics help diagnose pressure conditions

Limitations:
  • No real metrics-server integration
  • Values are simulated but consistent
  • No container-level metrics (--containers)`,events:`kubectl get events - View cluster events

Usage:
  kubectl get events [flags]

Events show important cluster activity:
  • Pod scheduling, pulling images, starting containers
  • Warnings: CrashLoopBackOff, ImagePullBackOff, FailedScheduling
  • Node conditions: MemoryPressure, DiskPressure

Flags:
  -n, --namespace string    Target namespace
  -A, --all-namespaces      Events from all namespaces
  --sort-by string          Sort by field (e.g., .lastTimestamp)
  --field-selector string   Filter by field

Examples:
  get events -n payments
  get events -A --sort-by=.lastTimestamp
  get events --field-selector type=Warning

Output Columns:
  LAST SEEN   TYPE      REASON    OBJECT          MESSAGE

Tips:
  • Filter by type=Warning to focus on problems
  • Sort by timestamp to see recent activity
  • Events expire after ~1 hour in real clusters

Limitations:
  • Events are pre-generated per fixture
  • No watch mode (-w)
  • Limited field selector support`};function yt(e,a){return e&&V[e]?V[e]:e==="get"&&a.includes("events")?V.events:V[""]}function xt(e,a){try{const s=et(a.fixtureId),t=tt(e);if(t.help||t.verb==="--help"||t.verb==="-h"||t.verb==="help"||!e.trim()||e.trim()==="kubectl")return{stdout:yt(t.verb==="--help"||t.verb==="-h"||t.verb==="help"?"":t.verb,t.resources),stderr:"",exitCode:0};const r=t.namespace||a.defaultNamespace,n=p=>t.allNamespaces?p:p.filter(o=>(o.metadata.namespace||"default")===r),d=p=>t.labelSelector?p.filter(o=>X(o.metadata.labels,t.labelSelector)):p,i=(p,o)=>{if(!o)return p;const f=o.replace(/^\{?\.?/,"").replace(/\}?$/,"").split(".");return[...p].sort((c,u)=>{let x=c,h=u;for(const m of f)x=x?.[m],h=h?.[m];return String(x||"").localeCompare(String(h||""))})};switch(t.verb){case"get":{const p=[];for(const o of t.resources){const f=o.toLowerCase();switch(f){case"pods":case"pod":case"po":{let c=d(n(s.pods));t.name&&(c=c.filter(u=>u.metadata.name===t.name||u.metadata.name.startsWith(t.name))),c=i(c,t.sortBy),t.output==="json"?p.push(JSON.stringify(c.length===1?c[0]:{items:c},null,2)):t.output==="yaml"?p.push(c.map(u=>_(u)).join(`
---
`)):p.push(rt(c,t.output==="wide",t.showLabels,t.allNamespaces));break}case"deployments":case"deployment":case"deploy":{let c=d(n(s.deployments));t.name&&(c=c.filter(u=>u.metadata.name===t.name)),c=i(c,t.sortBy),t.output==="json"?p.push(JSON.stringify(c.length===1?c[0]:{items:c},null,2)):t.output==="yaml"?p.push(c.map(u=>_(u)).join(`
---
`)):p.push(ot(c,t.allNamespaces));break}case"replicasets":case"replicaset":case"rs":{let c=d(n(s.replicaSets));t.name&&(c=c.filter(u=>u.metadata.name===t.name)),c=i(c,t.sortBy),t.output==="json"?p.push(JSON.stringify(c.length===1?c[0]:{items:c},null,2)):t.output==="yaml"?p.push(c.map(u=>_(u)).join(`
---
`)):p.push(it(c,t.allNamespaces));break}case"services":case"service":case"svc":{let c=d(n(s.services));t.name&&(c=c.filter(u=>u.metadata.name===t.name)),c=i(c,t.sortBy),t.output==="json"?p.push(JSON.stringify(c.length===1?c[0]:{items:c},null,2)):t.output==="yaml"?p.push(c.map(u=>_(u)).join(`
---
`)):p.push(lt(c,t.allNamespaces));break}case"endpoints":case"ep":{let c=n(s.endpoints);t.name&&(c=c.filter(u=>u.metadata.name===t.name)),c=i(c,t.sortBy),t.output==="json"?p.push(JSON.stringify(c.length===1?c[0]:{items:c},null,2)):t.output==="yaml"?p.push(c.map(u=>_(u)).join(`
---
`)):p.push(ct(c,t.allNamespaces));break}case"nodes":case"node":case"no":{let c=t.name?s.nodes.filter(u=>u.metadata.name===t.name):s.nodes;c=i(c,t.sortBy),t.output==="json"?p.push(JSON.stringify(c.length===1?c[0]:{items:c},null,2)):t.output==="yaml"?p.push(c.map(u=>_(u)).join(`
---
`)):p.push(dt(c));break}case"events":case"event":case"ev":{let c=t.allNamespaces?s.events:s.events.filter(u=>(u.metadata.namespace||"default")===r||!u.involvedObject.namespace);c=i(c,t.sortBy||".lastTimestamp"),t.output==="json"?p.push(JSON.stringify({items:c},null,2)):t.output==="yaml"?p.push(c.map(u=>_(u)).join(`
---
`)):p.push(pt(c,t.allNamespaces));break}default:return{stdout:"",stderr:`error: the server doesn't have a resource type "${f}"`,exitCode:1}}}return{stdout:p.join(`

`),stderr:"",exitCode:0}}case"describe":{const p=t.resources[0]?.toLowerCase();switch(p){case"pod":case"pods":case"po":{const o=n(s.pods),f=t.name?o.find(c=>c.metadata.name===t.name||c.metadata.name.startsWith(t.name)):o[0];return f?{stdout:ut(f,s.events),stderr:"",exitCode:0}:{stdout:"",stderr:`Error from server (NotFound): pods "${t.name||""}" not found`,exitCode:1}}case"deployment":case"deployments":case"deploy":{const o=n(s.deployments),f=t.name?o.find(u=>u.metadata.name===t.name):o[0];if(!f)return{stdout:"",stderr:`Error from server (NotFound): deployments.apps "${t.name||""}" not found`,exitCode:1};const c=n(s.replicaSets).filter(u=>X(u.metadata.labels,f.spec.selector.matchLabels));return{stdout:mt(f,c),stderr:"",exitCode:0}}case"node":case"nodes":{const o=t.name?s.nodes.find(f=>f.metadata.name===t.name):s.nodes[0];return o?{stdout:ft(o),stderr:"",exitCode:0}:{stdout:"",stderr:`Error from server (NotFound): nodes "${t.name||""}" not found`,exitCode:1}}case"service":case"services":case"svc":{const o=n(s.services),f=t.name?o.find(u=>u.metadata.name===t.name):o[0];if(!f)return{stdout:"",stderr:`Error from server (NotFound): services "${t.name||""}" not found`,exitCode:1};const c=n(s.endpoints).find(u=>u.metadata.name===f.metadata.name);return{stdout:ht(f,c),stderr:"",exitCode:0}}default:return{stdout:"",stderr:`error: the server doesn't have a resource type "${p||""}"`,exitCode:1}}}case"logs":{const p=n(s.pods),o=t.resources[0]||t.name,f=p.find(m=>m.metadata.name===o||m.metadata.name.startsWith(o||""));if(!f)return{stdout:"",stderr:`Error from server (NotFound): pods "${o||""}" not found in namespace "${r}"`,exitCode:1};const c=s.logs[f.metadata.name];if(!c){const m=f.status.containerStatuses?.[0];return m?.state.waiting?{stdout:"",stderr:`Error from server: container "${t.container||f.spec.containers[0].name}" in pod "${f.metadata.name}" is waiting to start: ${m.state.waiting.reason}`,exitCode:1}:{stdout:"",stderr:`Error from server: container "${t.container||f.spec.containers[0].name}" in pod "${f.metadata.name}" has no logs`,exitCode:1}}const u=Object.keys(c);if(u.length>1&&!t.container)return{stdout:"",stderr:`Error from server: a container name must be specified for pod ${f.metadata.name}, choose one of: [${u.join(" ")}]`,exitCode:1};const x=t.container||u[0];let h=c[x];return h?(t.tail&&(h=h.split(`
`).slice(-t.tail).join(`
`)),{stdout:h,stderr:"",exitCode:0}):{stdout:"",stderr:`Error from server: container "${x}" not found in pod "${f.metadata.name}"`,exitCode:1}}case"rollout":{const p=t.resources[0],o=t.name,c=n(s.deployments).find(u=>u.metadata.name===o);if(!c)return{stdout:"",stderr:`Error from server (NotFound): deployments.apps "${o||""}" not found`,exitCode:1};switch(p){case"status":return{stdout:gt(c),stderr:"",exitCode:0};case"history":return{stdout:bt(c),stderr:"",exitCode:0};case"undo":{if(c.revisions&&c.revisions.length>1){const u=c.revisions[1],x=n(s.pods).filter(h=>X(h.metadata.labels,c.spec.selector.matchLabels));for(const h of x){const m=h.spec.containers[0];m&&(m.image=u.image),h.metadata.labels&&(h.metadata.labels.version=u.image.split(":")[1]||"unknown")}}return{stdout:`deployment.apps/${c.metadata.name} rolled back`,stderr:"",exitCode:0}}default:return{stdout:"",stderr:`error: unknown command "${p||""}"`,exitCode:1}}}case"top":{const p=t.resources[0]?.toLowerCase();if(p==="pods"||p==="pod"){const o=n(s.pods).filter(u=>u.status.phase==="Running");if(o.length===0)return{stdout:"",stderr:"error: Metrics API not available",exitCode:1};const f="NAME                                   CPU(cores)   MEMORY(bytes)",c=o.map(u=>{const x=u.metadata.name.split("").reduce((h,m)=>h+m.charCodeAt(0),0);return`${u.metadata.name.padEnd(39)} ${x%500}m         ${x%512}Mi`});return{stdout:[f,...c].join(`
`),stderr:"",exitCode:0}}if(p==="nodes"||p==="node"){const o="NAME         CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%",f=s.nodes.map(c=>{const u=c.metadata.name.split("").reduce((m,$)=>m+$.charCodeAt(0),0),h=c.status.conditions.find(m=>m.type==="MemoryPressure"&&m.status==="True")?92:u%60+20;return`${c.metadata.name.padEnd(12)} ${u%4e3}m         ${u%80}%     ${Math.floor(h*80)}Mi          ${h}%`});return{stdout:[o,...f].join(`
`),stderr:"",exitCode:0}}return{stdout:"",stderr:"error: unknown resource type",exitCode:1}}default:return{stdout:"",stderr:`Error: unknown command "${t.verb}"

Usage:
  kubectl get (pods|deployments|services|endpoints|nodes|events) [flags]
  kubectl describe (pod|deployment|service|node) [name] [flags]
  kubectl logs pod-name [-c container] [--tail N] [flags]
  kubectl rollout (status|history|undo) deployment/name [flags]
  kubectl top (pods|nodes) [flags]`,exitCode:1}}}catch(s){return{stdout:"",stderr:s instanceof Error?s.message:"Unknown error",exitCode:1}}}const J={jq:`jq - Command-line JSON Processor (Playground)

This is a simplified jq implementation for learning JSON manipulation.
Not all jq features are supported.

Usage:
  <filter>              Apply filter to JSON input

Supported Filters:
  .                     Identity - output input unchanged
  .field                Access object field
  .field.subfield       Access nested fields
  .[0]                  Access array element by index
  .[]                   Iterate over array/object values
  keys                  Get object keys as array
  values                Get object values as array
  length                Get length of array/string/object
  type                  Get type of value

Filtering & Transformation:
  .[] | .field          Extract field from each array element
  .[] | select(.x > N)  Filter elements by condition
  [.[] | {...}]         Map array to new objects

Examples:
  .name                 Extract "name" field
  .users[0].email       Get first user's email
  keys                  List all keys
  .[] | select(.age > 25)   Filter array by age
  [.[] | {n: .name}]    Transform array elements

Supported Operators in select():
  >  <  >=  <=  ==  !=

Limitations:
  • No pipe chains beyond simple .[] | .field | select()
  • No arithmetic operations (+, -, *, /)
  • No string interpolation
  • No recursive descent (..)
  • No @base64, @uri, @csv formatters
  • No --raw-output, --slurp flags
  • No define functions or variables`,grep:`grep - Search Text Using Patterns (Playground)

Search for lines matching a pattern in the input text.

Usage:
  <pattern>             Search for pattern
  -flags <pattern>      Search with flags

Supported Flags:
  -i                    Case-insensitive matching
  -v                    Invert match (show non-matching lines)
  -n                    Show line numbers
  -E                    Extended regex (enables +, ?, |, (), etc.)

Flags can be combined: -inv, -En, etc.

Examples:
  error                 Find lines containing "error"
  -i error              Case-insensitive search
  -v error              Lines NOT containing "error"
  -n error              Show line numbers with matches
  -E "err|warn"         Match "err" OR "warn"
  -E "[0-9]+"           Match one or more digits
  -inv TODO             Case-insensitive, inverted, with line numbers

Regex Support:
  .                     Any character
  *                     Zero or more of previous
  +                     One or more (with -E)
  ?                     Zero or one (with -E)
  [abc]                 Character class
  [^abc]                Negated character class
  ^                     Start of line
  $                     End of line
  |                     Alternation (with -E)
  ()                    Grouping (with -E)

Output:
  • Matching lines (or non-matching with -v)
  • "(no matches)" if nothing found
  • Line numbers prefixed with -n

Limitations:
  • No -c (count only)
  • No -l (filenames only)
  • No -A/-B/-C (context lines)
  • No -r (recursive)
  • No -w (word match)
  • No -o (only matching part)
  • No PCRE features (lookahead, lookbehind)`,sed:`sed - Stream Editor for Text Transformation (Playground)

Transform text using substitution and deletion commands.

Usage:
  s/pattern/replacement/[flags]    Substitute text
  /pattern/d                       Delete matching lines

Substitution Flags:
  g                     Global - replace all occurrences per line
  i                     Case-insensitive matching

Multiple Commands:
  Separate with semicolons: s/a/b/; s/c/d/

Examples:
  s/old/new/            Replace first "old" with "new" per line
  s/old/new/g           Replace ALL "old" with "new"
  s/error/ERROR/gi      Replace case-insensitive, globally
  /^#/d                 Delete lines starting with #
  /^$/d                 Delete empty lines
  s/  */ /g             Collapse multiple spaces to one
  s/^/prefix: /         Add prefix to each line
  s/$/ suffix/          Add suffix to each line

Capture Groups:
  Use \\( \\) to capture and \\1, \\2 to reference:
  s/\\([a-z]*\\)/[\\1]/    Wrap lowercase words in brackets

Chained Commands:
  s/^[ ]*//; s/[ ]*$//    Trim leading and trailing spaces

Limitations:
  • No address ranges (1,5s/.../)
  • No line number addressing
  • No hold space (h, H, g, G, x)
  • No branching (b, t, T)
  • No append/insert/change (a, i, c)
  • No read/write files (r, w)
  • No print (p) - all output is automatic
  • No -n flag (suppress auto-print)
  • No -i flag (in-place editing)`,awk:`awk - Pattern Scanning and Processing (Playground)

Process structured text data with pattern-action rules.

Usage:
  {action}                    Apply action to all lines
  condition {action}          Apply action when condition is true
  -F<sep> 'program'          Set field separator

Field Variables:
  $0                    Entire line
  $1, $2, ...           Individual fields (space-separated)
  NR                    Current line number
  NF                    Number of fields in current line

Examples:
  {print $1}                  Print first column
  {print $1, $3}              Print columns 1 and 3
  {print $NF}                 Print last column
  $2 > 80 {print $1}          Print col 1 where col 2 > 80
  {sum += $2} END {print sum} Sum column 2
  {count++} END {print count} Count lines
  -F, '{print $2}'            Use comma as separator

END Block:
  Code after END runs once after all input:
  {sum += $1} END {print "Total:", sum}

Counting Patterns:
  {count[$1]++} END {for (k in count) print k, count[k]}
  Count occurrences of each unique value in column 1

CSV Processing:
  -F, 'NR>1 {print $1, $3}'   Skip header, print cols 1 & 3

Conditions:
  $2 > 100                    Numeric comparison
  $1 == "error"               String equality
  NR > 1                      Skip first line

Limitations:
  • No regular expression matching (/pattern/)
  • No printf formatting
  • No multiple -F separators
  • No getline
  • No arrays beyond counting pattern
  • No user-defined functions
  • No BEGIN block (only END)
  • No next, exit commands
  • No FILENAME, FNR variables
  • Limited string functions (no substr, split, gsub)`};function Y(e){const a=e.trim();return a==="--help"||a==="-h"||a==="help"||a.endsWith(" --help")||a.endsWith(" -h")}function vt(e,a){if(a===".")return e;if(a==="keys"){if(typeof e=="object"&&e!==null&&!Array.isArray(e))return Object.keys(e);throw new Error("keys requires an object input")}if(a==="values"){if(typeof e=="object"&&e!==null&&!Array.isArray(e))return Object.values(e);throw new Error("values requires an object input")}if(a==="length")return Array.isArray(e)||typeof e=="string"?e.length:typeof e=="object"&&e!==null?Object.keys(e).length:1;if(a==="type")return e===null?"null":Array.isArray(e)?"array":typeof e;const s=a.match(/^\.([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*)$/);if(s){const i=s[1].split(".");let p=e;for(const o of i){if(p==null)return null;if(typeof p!="object")throw new Error(`Cannot index ${typeof p} with "${o}"`);p=p[o]}return p}const t=a.match(/^\.([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*)?\[(\d+)\]$/);if(t){let i=e;if(t[1]){const o=t[1].split(".");for(const f of o){if(i===null||typeof i!="object")return null;i=i[f]}}const p=parseInt(t[2],10);if(!Array.isArray(i))throw new Error("Cannot index non-array with number");return i[p]}if(a===".[]"){if(Array.isArray(e))return e;if(typeof e=="object"&&e!==null)return Object.values(e);throw new Error("Cannot iterate over "+typeof e)}const r=a.match(/^\.\[\]\s*\|\s*select\(\.([a-zA-Z_][a-zA-Z0-9_]*)\s*([><=!]+)\s*(\d+|"[^"]*")\)$/);if(r){if(!Array.isArray(e))throw new Error("select requires array input");const i=r[1],p=r[2];let o=r[3];return o.startsWith('"')?o=o.slice(1,-1):o=parseFloat(o),e.filter(f=>{const c=f[i];switch(p){case">":return c>o;case"<":return c<o;case">=":return c>=o;case"<=":return c<=o;case"==":return c===o;case"!=":return c!==o;default:return!1}})}const n=a.match(/^\.\[\]\s*\|\s*\.([a-zA-Z_][a-zA-Z0-9_]*)$/);if(n){if(!Array.isArray(e))throw new Error("Cannot iterate over non-array");const i=n[1];return e.map(p=>p[i])}const d=a.match(/^\[\.\[\]\s*\|\s*\{([^}]+)\}\]$/);if(d){if(!Array.isArray(e))throw new Error("Cannot iterate over non-array");const p=d[1].split(",").map(o=>o.trim());return e.map(o=>{const f={};for(const c of p){const[u,x]=c.split(":").map(h=>h.trim());if(x.startsWith(".")){const h=x.slice(1);f[u]=o[h]}else x.startsWith("("),f[u]=x}return f})}throw new Error(`Unsupported jq filter: ${a}

Supported filters:
- . (identity)
- .field, .field.subfield
- .[0], .field[0]
- .[], .[] | .field
- .[] | select(.field > value)
- keys, values, length, type`)}async function wt(e,a){if(Y(a))return J.jq;let s;try{s=JSON.parse(e)}catch{throw new Error("Invalid JSON input")}const t=vt(s,a.trim());return typeof t=="string"?JSON.stringify(t):JSON.stringify(t,null,2)}function Tt(e,a){if(Y(a))return J.grep;const s=e.split(`
`),t=a.match(/^(-[invE]+\s+)?(.+)$/);if(!t)throw new Error("Invalid grep command");const r=t[1]?.trim()||"";let n=t[2].trim();(n.startsWith('"')&&n.endsWith('"')||n.startsWith("'")&&n.endsWith("'"))&&(n=n.slice(1,-1));const d=r.includes("i"),i=r.includes("v"),p=r.includes("n"),o=r.includes("E");let f;try{const u=d?"i":"";f=o?new RegExp(n,u):new RegExp(n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),u)}catch{throw new Error(`Invalid regex pattern: ${n}`)}const c=[];return s.forEach((u,x)=>{const h=f.test(u);(i?!h:h)&&(p?c.push(`${x+1}:${u}`):c.push(u))}),c.length===0?"(no matches)":c.join(`
`)}function $t(e,a){if(Y(a))return J.sed;const s=e.split(`
`),t=a.split(";").map(n=>n.trim()).filter(Boolean);let r=s;for(const n of t){const d=n.match(/^\/(.+)\/d$/);if(d){const p=new RegExp(d[1]);r=r.filter(o=>!p.test(o));continue}const i=n.match(/^s\/(.+?)\/(.*)\/([gi]*)$/);if(i){const[,p,o,f]=i,c=f.includes("g"),u=f.includes("i"),x=o.replace(/\\(\d)/g,"$$$1");try{const h=new RegExp(p,(c?"g":"")+(u?"i":""));r=r.map(m=>m.replace(h,x))}catch{throw new Error(`Invalid sed pattern: ${p}`)}continue}throw new Error(`Unsupported sed command: ${n}`)}return r.join(`
`)}function kt(e,a){if(Y(a))return J.awk;const s=e.split(`
`).filter(u=>u.trim());let t=/\s+/,r=a;const n=a.match(/^-F([^\s]+)\s+(.+)$/);if(n){const u=n[1];t=u===","?/,/:new RegExp(u),r=n[2]}(r.startsWith("'")&&r.endsWith("'")||r.startsWith('"')&&r.endsWith('"'))&&(r=r.slice(1,-1)),r.match(/BEGIN\s*\{([^}]+)\}/);const d=r.match(/END\s*\{([^}]+)\}/),i=r.replace(/BEGIN\s*\{[^}]+\}/,"").replace(/END\s*\{[^}]+\}/,"").trim(),p=[],o={NR:0,NF:0},f=(u,x)=>{let h=u.replace(/\$(\d+)/g,(k,R)=>{const N=parseInt(R,10);return N===0?x.join(" "):x[N-1]||""});for(const[k,R]of Object.entries(o))h=h.replace(new RegExp(`\\b${k}\\b`,"g"),String(R));const m=/[<>=!]{1,2}/.test(h),$=h.match(/^\s*(-?\d+(?:\.\d+)?)\s*([<>=!]+)\s*(-?\d+(?:\.\d+)?)\s*$/);if($){const k=parseFloat($[1]),R=$[2],N=parseFloat($[3]);switch(R){case">":return k>N;case"<":return k<N;case">=":return k>=N;case"<=":return k<=N;case"==":return k===N;case"!=":return k!==N;default:return!1}}const T=h.match(/^\s*"?([^"]*)"?\s*(==|!=)\s*"([^"]*)"\s*$/);if(T){const k=T[1],R=T[2],N=T[3];switch(R){case"==":return k===N;case"!=":return k!==N;default:return!1}}if(m)return!1;const v=h.match(/^\s*(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)\s*$/);if(v){const k=parseFloat(v[1]),R=v[2],N=parseFloat(v[3]);switch(R){case"+":return k+N;case"-":return k-N;case"*":return k*N;case"/":return N!==0?k/N:0;default:return h}}return h},c=(u,x)=>{const h=u.match(/print\s+(.+)/);if(h){const T=h[1],v=[],k=T.split(/,\s*/);for(const R of k)if(R.startsWith('"')&&R.endsWith('"'))v.push(R.slice(1,-1));else{const N=f(R.trim(),x);v.push(String(N))}p.push(v.join(" "))}const m=u.match(/(\w+)\s*\+=\s*(.+)/);if(m){const T=m[1],v=f(m[2],x);o[T]=(Number(o[T])||0)+Number(v)}const $=u.match(/(\w+)\[(.+?)\]\+\+/);if($){const T=$[1],v=String(f($[2],x));o[`${T}_${v}`]||(o[`${T}_${v}`]=0),o[`${T}_${v}`]=Number(o[`${T}_${v}`])+1}};for(let u=0;u<s.length;u++){const h=s[u].split(t);if(o.NR=u+1,o.NF=h.length,i){const m=i.match(/^([^{]+)\s*\{(.+)\}$/);if(m){const $=m[1].trim(),T=m[2].trim(),v=f($,h);v&&v!=="false"&&v!==0&&c(T,h)}else i.startsWith("{")&&i.endsWith("}")&&c(i.slice(1,-1).trim(),h)}}if(d){const u=d[1],x=u.match(/for\s*\((\w+)\s+in\s+(\w+)\)\s*print\s+(.+)/);if(x){const[,h,m,$]=x,T=Object.keys(o).filter(v=>v.startsWith(`${m}_`)).map(v=>v.replace(`${m}_`,""));for(const v of T){const k=o[`${m}_${v}`],N=$.replace(new RegExp(`\\b${h}\\b`,"g"),v).replace(new RegExp(`${m}\\[${h}\\]`,"g"),String(k)).split(/,\s*/).map(I=>I.startsWith('"')&&I.endsWith('"')?I.slice(1,-1):I);p.push(N.join(" "))}}else{const h=u.match(/print\s+(.+)/);if(h){let m=h[1];for(const[T,v]of Object.entries(o))m=m.replace(new RegExp(`\\b${T}\\b`,"g"),String(v));const $=m.split(/,\s*/).map(T=>T.startsWith('"')&&T.endsWith('"')?T.slice(1,-1):T);p.push($.join(" "))}}}return p.join(`
`)||"(no output)"}async function Nt(e,a,s,t){if(e!=="kubectl"&&!a.trim())throw new Error("Input is empty");if(!s.trim())throw new Error("Command is empty");switch(e){case"jq":return wt(a,s);case"grep":return Tt(a,s);case"sed":return $t(a,s);case"awk":return kt(a,s);case"kubectl":{const r={fixtureId:t?.fixture||"crashloop",defaultNamespace:t?.namespace||"default"},n=xt(s,r);if(n.exitCode!==0)throw new Error(n.stderr||"Command failed");return n.stdout}default:throw new Error(`Unknown tool: ${e}`)}}const Et=Object.keys(j),Rt=["learn","playground"];function St(e){return e!==null&&Et.includes(e)}function Ct(e){return e!==null&&Rt.includes(e)}const ie=new Map;function Zt(){const[e,a]=Se(),[s,t]=w.useTransition(),r=w.useRef(0),[n,d]=w.useState(()=>{const g=e.get("tool"),y=St(g)?g:oe.tool,E=e.get("input")||j[y].presets[0].input,re=e.get("cmd")||j[y].presets[0].command;return{...oe,tool:y,input:E,command:re}}),[i,p]=w.useState(()=>{const g=e.get("mode");return Ct(g)?g:"learn"}),o=n.isLoading||s,[f,c]=w.useState(0),u=w.useMemo(()=>j[n.tool].presets[f]||null,[n.tool,f]),x=w.useMemo(()=>n.command.trim()?fe(n.tool,n.command):null,[n.tool,n.command]),h=w.useMemo(()=>{if(!(i!=="learn"||!u))return n.tool==="kubectl"&&u.namespace?`Press ⌘+Enter to ${n.command.split(" ")[0]||"get"} resources in ${u.namespace}`:"Press ⌘+Enter to run the command"},[i,u,n.tool,n.command]),m=w.useMemo(()=>{if(i!=="learn"||!u)return;const g=u.expectedOutputIncludes,y=u.expectedOutputRegex;if(!g&&!y)return;if(n.isLoading||o)return{status:"pending",label:"Checking..."};if(!n.output&&!n.error)return{status:"pending",label:"Run to check"};if(n.error)return{status:"fail",label:"Goal not met"};let E=!0;if(g&&(E=E&&n.output.includes(g)),y)try{E=E&&new RegExp(y).test(n.output)}catch{E=!1}return{status:E?"pass":"fail",label:E?"Goal met":"Goal not met"}},[i,u,n.output,n.error,n.isLoading,o]);w.useEffect(()=>{const g=setTimeout(()=>{const y=new URLSearchParams;y.set("tool",n.tool),y.set("mode",i),n.input!==j[n.tool].presets[0].input&&y.set("input",n.input),n.command!==j[n.tool].presets[0].command&&y.set("cmd",n.command),a(y,{replace:!0})},500);return()=>clearTimeout(g)},[n.tool,n.input,n.command,i,a]);const $=w.useCallback(async()=>{const g=++r.current;B({tool_name:"cli_playground",action:"command_run",event_label:n.tool}),d(y=>({...y,isLoading:!0,error:void 0}));try{const y=await Nt(n.tool,n.input,n.command,{fixture:u?.fixture,namespace:u?.namespace});if(r.current!==g)return;t(()=>{d(E=>({...E,output:y,error:void 0,isLoading:!1}))})}catch(y){if(r.current!==g)return;t(()=>{d(E=>({...E,output:"",error:y instanceof Error?y.message:"Unknown error",isLoading:!1}))})}},[n.tool,n.input,n.command,u?.fixture,u?.namespace]),T=w.useRef(!1);w.useEffect(()=>{i==="learn"&&!T.current&&!n.output&&!n.isLoading&&(T.current=!0,$())},[i,n.output,n.isLoading,$]),w.useEffect(()=>{T.current=!1},[f,n.tool]),w.useEffect(()=>{const g=y=>{y.key==="Enter"&&(y.metaKey||y.ctrlKey)&&(y.preventDefault(),$())};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[$]);const v=w.useCallback(g=>{r.current++,B({tool_name:"cli_playground",action:"tool_select",event_label:g}),ie.set(n.tool,{input:n.input,command:n.command,presetIndex:f});const y=ie.get(g);if(y)d({tool:g,input:y.input,command:y.command,output:"",error:void 0,isLoading:!1}),c(y.presetIndex);else{const E=j[g].presets[0];d({tool:g,input:E.input,command:E.command,output:"",error:void 0,isLoading:!1}),c(0)}},[n.tool,n.input,n.command,f]),k=w.useCallback(g=>{p(g),B({tool_name:"cli_playground",action:"mode_switch",event_label:g})},[]),R=w.useCallback(g=>{r.current++,B({tool_name:"cli_playground",action:"preset_select",event_label:g.name});const y=j[n.tool].presets.findIndex(E=>E.name===g.name);c(y>=0?y:0),d(E=>({...E,input:g.input,command:g.command,output:"",error:void 0}))},[n.tool]),N=w.useCallback(g=>{d(y=>({...y,input:g}))},[]),I=w.useCallback(g=>{d(y=>({...y,command:g}))},[]),q=w.useCallback(()=>{const g=j[n.tool].presets[0];d({tool:n.tool,input:g.input,command:g.command,output:"",error:void 0,isLoading:!1}),c(0)},[n.tool]),H=w.useCallback(g=>{d(y=>({...y,command:g}))},[]);return l.jsxs("div",{className:"space-y-4",children:[l.jsx(Ze,{tool:n.tool,mode:i,currentPreset:u,onToolChange:v,onModeChange:k,onPresetSelect:R,onReset:q}),i==="learn"&&l.jsx(He,{tool:n.tool,preset:u,onTryCommand:H}),l.jsx(Me,{tool:n.tool,command:n.command,isLoading:n.isLoading||s,onCommandChange:I,onRun:$}),l.jsx(De,{input:n.input,output:n.output,error:n.error,isLoading:n.isLoading||s,mode:i,tool:n.tool,command:n.command,goalStatus:m,explanation:x,hideStdin:j[n.tool].hideStdin,emptyStatePrompt:h,onInputChange:N,onTryCommand:H})]})}export{Zt as default};
