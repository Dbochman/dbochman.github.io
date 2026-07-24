const e={schemaVersion:1,id:"roadmap",title:"Site Roadmap",columns:[{id:"ideas",title:"Ideas",description:"Draft plans and attach them, then move to To Do",cards:[{id:"logql-builder",title:"LogQL / CloudWatch Insights Builder",description:`Visual query builder for LogQL and CloudWatch Insights. Language toggle, stream selectors, pipeline stages, and presets for common queries.
`,labels:["Medium","SRE","Tool"],checklist:[{id:"lql-1",text:"Create language toggle (LogQL vs CloudWatch Insights)",completed:!1},{id:"lql-2",text:"Build LogQL stream selector with label matchers",completed:!1},{id:"lql-3",text:"Build pipeline stage builder (filters, parsers, formatters)",completed:!1},{id:"lql-4",text:"Build CloudWatch command builder (fields, filter, stats, sort)",completed:!1},{id:"lql-5",text:"Add query preview with syntax highlighting and copy",completed:!1},{id:"lql-6",text:"Add presets for common queries",completed:!1},{id:"lql-7",text:"Implement debounced async generation with cancellation",completed:!1}],planFile:"docs/plans/39-logql-builder.md",createdAt:"2026-01-17T00:00:00.000Z",history:[]},{id:"metric-naming-linter",title:"Metric Naming Linter",description:`Lint metric names against Prometheus/OTel conventions. Severity-coded issues, auto-fix suggestions, bulk apply and export.
`,labels:["Small","SRE","Tool"],checklist:[{id:"mnl-1",text:"Create metric name input (one per line, optional type hints)",completed:!1},{id:"mnl-2",text:"Build standard selector (Prometheus, OTel, custom)",completed:!1},{id:"mnl-3",text:"Implement lint rules with severity levels",completed:!1},{id:"mnl-4",text:"Show before/after diff for auto-fix suggestions",completed:!1},{id:"mnl-5",text:"Add bulk apply for auto-fixable rules",completed:!1},{id:"mnl-6",text:"Export results as text/JSON report",completed:!1}],planFile:"docs/plans/46-metric-naming-linter.md",createdAt:"2026-01-17T00:00:00.000Z",history:[]},{id:"react-component-xray",title:"React Component X-ray",description:`Analyze React code to visualize component trees. Flag render anti-patterns (inline functions, missing keys, unstable deps).
`,labels:["Medium","Learning","Tool"],checklist:[{id:"rcx-1",text:"Create code editor for React/TSX input",completed:!1},{id:"rcx-2",text:"Implement AST parsing in Web Worker (Babel/TS)",completed:!1},{id:"rcx-3",text:"Derive component tree from AST",completed:!1},{id:"rcx-4",text:"Visualize tree with props and render hints",completed:!1},{id:"rcx-5",text:"Detect issues (inline functions, missing keys, unstable deps)",completed:!1},{id:"rcx-6",text:"Build issue list with line refs and severity",completed:!1},{id:"rcx-7",text:"Add suggested fix panel with copyable snippets",completed:!1}],planFile:"docs/plans/48-react-component-xray.md",createdAt:"2026-01-17T00:00:00.000Z",history:[]},{id:"recording-rules-generator",title:"Prometheus Recording Rules Generator",description:`Generate recording rules from PromQL queries. Naming conventions, analysis hints, YAML export with presets for HTTP/K8s rules.
`,labels:["Medium","SRE","Tool"],checklist:[{id:"rrg-1",text:"Create PromQL input with syntax highlighting",completed:!1},{id:"rrg-2",text:"Implement query analysis (rate, aggregation, grouping hints)",completed:!1},{id:"rrg-3",text:"Build naming config (level:metric:operations format)",completed:!1},{id:"rrg-4",text:"Add evaluation interval and extra labels config",completed:!1},{id:"rrg-5",text:"Export YAML for rule groups",completed:!1},{id:"rrg-6",text:"Add presets for HTTP and Kubernetes rules",completed:!1},{id:"rrg-7",text:"Add bulk entry mode for multiple queries",completed:!1}],planFile:"docs/plans/42-recording-rules-generator.md",createdAt:"2026-01-17T00:00:00.000Z",history:[]},{id:"regex-log-parser",title:"Regex Log Parser",description:`Build regex parsing rules interactively. Highlight fields, live matching preview, export to grok/Logstash/Fluent Bit/Vector formats.
`,labels:["Medium","SRE","Tool"],checklist:[{id:"rlp-1",text:"Create sample log input area (1-20 lines)",completed:!1},{id:"rlp-2",text:"Build field highlight and naming UI",completed:!1},{id:"rlp-3",text:"Add pattern templates (timestamp, IP, UUID, etc.)",completed:!1},{id:"rlp-4",text:"Implement live match preview with Web Worker",completed:!1},{id:"rlp-5",text:"Add export to regex, grok, Logstash, Fluent Bit, Vector",completed:!1},{id:"rlp-6",text:"Show non-matching lines indicator",completed:!1}],planFile:"docs/plans/40-regex-log-parser.md",createdAt:"2026-01-17T00:00:00.000Z",history:[]}]},{id:"todo",title:"To Do",description:"Planned tasks ready to start",cards:[]},{id:"in-progress",title:"In Progress",color:"blue",cards:[]},{id:"in-review",title:"In Review",color:"pink",cards:[]},{id:"changelog",title:"Change Log",cards:[{id:"2026-07-24-the-state-of-being-home",title:"Blog: The State of Being Home",labels:["Blog"],checklist:[],createdAt:"2026-07-24T13:29:31.000Z",updatedAt:"2026-07-24T13:29:31.000Z",history:[{type:"column",timestamp:"2026-07-24T13:29:31.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Our home presence detector evolved from fuzzy phone matching into a privacy-scoped evidence system with exact identities, explicit uncertainty, durable transitions, and staged authority."},{id:"2026-07-20-the-har-was-the-easy-part",title:"Blog: The HAR Was the Easy Part",labels:["Blog"],checklist:[],createdAt:"2026-07-20T12:47:19.000Z",updatedAt:"2026-07-20T12:47:19.000Z",history:[{type:"column",timestamp:"2026-07-20T12:47:19.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Seven browser-driven financial scrapers grew into an HTTP-first collection system with versioned contracts, current-run artifacts, guarded imports, bounded recovery, and durable failure alerts."},{id:"harden-monitoring-alert-lifecycle",title:"harden monitoring alert lifecycle",labels:["Bugfix","PR #320"],checklist:[],createdAt:"2026-07-13T01:40:02.000Z",updatedAt:"2026-07-13T01:40:02.000Z",history:[{type:"column",timestamp:"2026-07-13T01:40:02.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Replace noisy overlapping-window analytics alerts with finalized, confidence-aware detection and incident lifecycle management. Pin production browser checks to the deployed SHA and harden recovery evidence across GA4, Search Console, and Lighthouse."},{id:"2026-07-12-the-home-automation-system-that-is-not-allowed-to-automate",title:"Blog: The Home Event System That Is Not Allowed to Automate",labels:["Blog"],checklist:[],createdAt:"2026-07-12T16:31:31.000Z",updatedAt:"2026-07-12T16:31:31.000Z",history:[{type:"column",timestamp:"2026-07-12T16:31:31.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"We built a durable local event bus for doorbell activity and presence, with read-only lock observations alongside a separate camera path. Its correlator can record and explain decisions, but it cannot notify or operate a device."},{id:"satisfy-slop-guard",title:"satisfy slop guard",labels:["Bugfix"],checklist:[],createdAt:"2026-07-03T17:39:48.000Z",updatedAt:"2026-07-03T17:39:48.000Z",history:[{type:"column",timestamp:"2026-07-03T17:39:48.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"satisfy slop guard"},{id:"strengthen-indexing-signals",title:"strengthen indexing signals",labels:["Bugfix"],checklist:[],createdAt:"2026-07-03T17:33:27.000Z",updatedAt:"2026-07-03T17:33:27.000Z",history:[{type:"column",timestamp:"2026-07-03T17:33:27.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"strengthen indexing signals"},{id:"correct-search-console-collection",title:"correct Search Console collection",labels:["Bugfix"],checklist:[],createdAt:"2026-06-24T00:11:28.000Z",updatedAt:"2026-06-24T00:11:28.000Z",history:[{type:"column",timestamp:"2026-06-24T00:11:28.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"correct Search Console collection"},{id:"deploy-daily-analytics-updates",title:"deploy daily analytics updates",labels:["Bugfix"],checklist:[],createdAt:"2026-06-23T23:41:49.000Z",updatedAt:"2026-06-23T23:41:49.000Z",history:[{type:"column",timestamp:"2026-06-23T23:41:49.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"deploy daily analytics updates"},{id:"scope-profilepage-schema-to-homepage",title:"scope ProfilePage schema to homepage",labels:["Bugfix"],checklist:[],createdAt:"2026-06-22T02:17:39.000Z",updatedAt:"2026-06-22T02:17:39.000Z",history:[{type:"column",timestamp:"2026-06-22T02:17:39.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"scope ProfilePage schema to homepage"},{id:"use-valid-profilepage-datetimes",title:"use valid ProfilePage datetimes",labels:["Bugfix"],checklist:[],createdAt:"2026-06-22T01:06:54.000Z",updatedAt:"2026-06-22T01:06:54.000Z",history:[{type:"column",timestamp:"2026-06-22T01:06:54.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"use valid ProfilePage datetimes"},{id:"2026-06-21-decap-cms-hook-netlify-build-config-yml",title:"Blog: Decap CMS hook: netlify-build does not belong in config.yml",labels:["Blog"],checklist:[],createdAt:"2026-06-22T00:49:05.000Z",updatedAt:"2026-06-22T00:49:05.000Z",history:[{type:"column",timestamp:"2026-06-22T00:49:05.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"There is no hook: netlify-build setting in Decap CMS. Here is the correct config.yml for Git Gateway, when Netlify rebuilds automatically, and when to use a Netlify build hook."},{id:"remove-duplicate-apfs-transcript",title:"remove duplicate APFS transcript",labels:["Bugfix"],checklist:[],createdAt:"2026-06-22T00:13:30.000Z",updatedAt:"2026-06-22T00:13:30.000Z",history:[{type:"column",timestamp:"2026-06-22T00:13:30.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"remove duplicate APFS transcript"},{id:"restore-bundle-budget-headroom",title:"restore bundle budget headroom",labels:["Bugfix"],checklist:[],createdAt:"2026-06-22T00:12:05.000Z",updatedAt:"2026-06-22T00:12:05.000Z",history:[{type:"column",timestamp:"2026-06-22T00:12:05.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"restore bundle budget headroom"},{id:"2026-06-21-disk-utility-said-it-fixed-my-mac",title:"Blog: Disk Utility said it fixed my Mac. fsck_apfs disagreed.",labels:["Blog"],checklist:[],createdAt:"2026-06-22T00:04:31.000Z",updatedAt:"2026-06-22T00:04:31.000Z",history:[{type:"column",timestamp:"2026-06-22T00:04:31.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"macOS Tahoe's Disk Utility reported a successful APFS repair, but the same four inode warnings survived Recovery. The difference was hiding in fsck_apfs flags and one misleading exit code."},{id:"add-median-sampling-follow-up-to-the-gauge-post-bl",title:"add median-sampling follow-up to the gauge post [blog:perf]",labels:[],checklist:[],createdAt:"2026-06-13T02:29:41.000Z",updatedAt:"2026-06-13T02:29:41.000Z",history:[{type:"column",timestamp:"2026-06-13T02:29:41.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`The post diagnosed the dashboard's noise; #312 fixed it. Add a paragraph
to 'A gauge worth reading' covering the median-of-3 sampling and the
visible min-max spread now shown beneath each score. Updates the
run-to-run swing figure to ten-to-twenty points to match the landed
3-run data (spreads up to 21 points). slop-guard 100/100.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`},{id:"median-of-3-lighthouse-sampling-with-visible-sprea",title:"median-of-3 Lighthouse sampling with visible spread",labels:["Performance","PR #312"],checklist:[],createdAt:"2026-06-13T02:21:55.000Z",updatedAt:"2026-06-13T02:21:55.000Z",history:[{type:"column",timestamp:"2026-06-13T02:21:55.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`A single Lighthouse run on a shared CI runner swings 10-15 points
between back-to-back passes (CPU contention skews TBT and LCP most),
which is how one frozen score masqueraded as truth for five months.

- lighthouse-multi-page.mjs now audits each page RUNS times (default 3,
  LIGHTHOUSE_RUNS=1 for fast local) and keeps the representative median
  run: the run whose performance score is nearest the median, LCP as
  tie-break. Picks a real run rather than synthesizing per-metric medians
  (which would describe a run that never happened). Per-run temp reports
  are cleaned up; the median run's full report is kept under the
  canonical name.
- summary.json gains runs, performanceRange, and tbtRangeMs (additive;
  optional in the LighthousePageScore type so old files still parse).
- The scores table shows the min-max performance range under each score
  so the dashboard communicates noise instead of hiding it.
- lighthouse.yml timeout 10 -> 20 min for the ~3x audit time.

Verified: tsc/eslint/216 tests clean; median + tie-break + single-run
selection covered by synthetic cases; 2-run live pass produced correct
medians, spread fields, and temp-file cleanup across all 8 pages.

Co-authored-by: Claude Fable 5 <noreply@anthropic.com>`},{id:"2026-06-12-the-dashboard-that-measured-january",title:"Blog: The Dashboard That Measured January",labels:["Blog"],checklist:[],createdAt:"2026-06-13T02:07:34.000Z",updatedAt:"2026-06-13T02:07:34.000Z",history:[{type:"column",timestamp:"2026-06-13T02:07:34.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Our analytics page reported a Lighthouse performance score of 95. The real number was closer to 52, and had been for months. Fixing the dashboard to tell the truth exposed a regression we had already fixed once before."},{id:"serve-fresh-lighthouse-scores-on-projects-analytic",title:"serve fresh Lighthouse scores on /projects/analytics",labels:["Bugfix","PR #311"],checklist:[],createdAt:"2026-06-13T01:56:03.000Z",updatedAt:"2026-06-13T01:56:03.000Z",history:[{type:"column",timestamp:"2026-06-13T01:56:03.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`* fix(analytics): pull fresh Lighthouse summary from lighthouse-metrics branch at build time

The /projects/analytics dashboard served lighthouse-reports/summary.json
from main, last updated 2026-01-13 (home perf 95 vs ~52-75 measured now).
Lighthouse CI commits fresh results only to the lighthouse-metrics branch,
so the deployed copy never updated.

copy-metrics-to-public.js now fetches summary.json from the
lighthouse-metrics branch via raw.githubusercontent.com during
build:content, falling back to the tracked copy when offline. Also
refreshes the tracked fallback to the 2026-06-11 run (project-uptime
page replaced by project-slo in the audit set).

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>

* perf: stop shipping mermaid to chartless pages, defer gtag.js [blog:perf]

Three compounding fixes for the Lighthouse regressions surfaced by the
fresh dashboard data:

1. vite.config.ts: d3 modules (shared by recharts via victory-vendor and
   by mermaid) had no manualChunks assignment, so Rollup inlined them
   into the mermaid chunk — every chart chunk then statically imported
   ~700KB of mermaid. Pin d3/victory-vendor to their own 'd3' chunk so
   the mermaid chunk is reachable only via dynamic import again.

2. prerender.mjs: DOM snapshots captured the modulepreload links Vite's
   runtime preload helper inserted for lazy chunks, baking them into the
   static HTML. Keep only the template's own preloads.

3. index.html: load gtag.js (152KB, 470ms script eval) after window load
   + idle instead of at startup; gtag() calls queue in dataLayer
   meanwhile. Prerender strips the runtime-injected tag from snapshots.

Local Lighthouse (throttled, preview server):
  blog-post-404: perf 57 -> 79 (FCP 8.0s -> 2.6s, LCP 9.0s -> 4.7s)
  home:          perf 52 -> 92 (TBT 690ms -> 20ms)
Verified mermaid still renders on /projects/incident-command-diagrams.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>

---------

Co-authored-by: Claude Fable 5 <noreply@anthropic.com>`},{id:"2026-06-10-the-day-every-fix-uncovered-the-next-bug",title:"Blog: The Day Every Fix Uncovered the Next Bug",labels:["Blog"],checklist:[],createdAt:"2026-06-11T03:34:55.000Z",updatedAt:"2026-06-11T03:34:55.000Z",history:[{type:"column",timestamp:"2026-06-11T03:34:55.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"A failed Search Console validation turned into four production fixes: a redirect file that did nothing, 700KB of diagram library on every page, a CI step hung on a CDN, and the wrong snippet on our best-ranking query."},{id:"clarify-build-hook-vs-config-yml-feature-the-dotfi",title:"clarify build hook vs config.yml; feature the dotfiles post",labels:[],checklist:[],createdAt:"2026-06-11T03:29:30.000Z",updatedAt:"2026-06-11T03:29:30.000Z",history:[{type:"column",timestamp:"2026-06-11T03:29:30.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Search Console query data shows the dominant cluster for the Decap
post is "decap cms hook netlify-build config.yml" — searchers asking
where the hook goes relative to config.yml. The post never answered
that directly; new subsection settles it (the hook is Netlify-side,
config.yml only needs the git-gateway backend).

Featured post moves from retrospectives to the AI dotfiles post: it's
the site's #2 query cluster (claude/codex dotfiles, pos 4-10) and the
strongest candidate for compounding search momentum.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`},{id:"drop-duplicate-meta-descriptions-from-prerendered-",title:"drop duplicate meta descriptions from prerendered pages [blog]",labels:["Bugfix","PR #309"],checklist:[],createdAt:"2026-06-11T03:17:24.000Z",updatedAt:"2026-06-11T03:17:24.000Z",history:[{type:"column",timestamp:"2026-06-11T03:17:24.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Every blog post shipped two meta description tags: the site-wide bio
hardcoded in index.html first, then the correct per-post one from
react-helmet. Crawlers take the first, so Google's snippet for every
post was an SRE bio — a direct CTR hit (0.42% at avg position 7.5,
where 2-4% is typical). Same duplication affected og:/twitter: tags.

The prerender step now removes static template tags whenever helmet
rendered the same key (data-rh), so exactly one value ships per tag.

Also: retargeted the Decap CMS post description toward the dominant
query cluster from Search Console data (build hooks + config.yml,
~98% of site impressions), and documented where unsanitized query
data lives (docs/metrics) vs the public copy that strips it.

Co-authored-by: Claude Fable 5 <noreply@anthropic.com>`},{id:"2026-05-25-the-indexing-audit-that-found-a-redirect-loop",title:"Blog: The Indexing Audit That Found a Redirect Loop",labels:["Blog"],checklist:[],createdAt:"2026-05-25T23:22:58.000Z",updatedAt:"2026-05-25T23:22:58.000Z",history:[{type:"column",timestamp:"2026-05-25T23:22:58.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Google Search Console reported seven flavors of indexing trouble. Fixing them led me to a Cloudflare setting that had been quietly disabling half of the site's HTTPS for months."},{id:"redirect-stale-2025-blog-urls-align-home-canonical",title:"redirect stale 2025 blog URLs + align home canonical [skip-review]",labels:["Bugfix","PR #302"],checklist:[],createdAt:"2026-05-25T22:37:40.000Z",updatedAt:"2026-05-25T22:37:40.000Z",history:[{type:"column",timestamp:"2026-05-25T22:37:40.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Search Console flagged real issues uncovered after PR #301 deployed:

- 5 blog posts with legacy 2025-MM-DD URLs were renamed to 2026-MM-DD
  without redirects, so Google was hitting genuine 404s. Add explicit
  static redirects to their canonical 2026 counterparts (or their
  custom-slug canonical for the two posts that have one).
- Home page <Seo> didn't pass a url prop, so the canonical rendered
  as https://dylanbochman.com (no trailing slash) while the sitemap
  advertises https://dylanbochman.com/. The mismatch likely triggered
  the Soft 404 classification on home-page URL variants. Pass url="/"
  so the canonical exactly matches the sitemap entry.

After deploy, the Not Found (404) bucket should validate cleanly and
the Soft 404 bucket should converge once Enforce HTTPS is also on in
the repo Pages settings.

Co-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`},{id:"align-prerender-sitemap-add-trailing-slash-and-leg",title:"align prerender + sitemap, add trailing-slash and legacy redirects",labels:["Bugfix"],checklist:[],createdAt:"2026-05-25T22:14:22.000Z",updatedAt:"2026-05-25T22:14:22.000Z",history:[{type:"column",timestamp:"2026-05-25T22:14:22.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Fixes the route generation issues behind the Search Console indexing buckets by aligning sitemap URLs, prerendered artifacts, and canonical tags.\n\n- prerender sitemap-facing routes as slashless `.html` files for GitHub Pages\n- emit static meta-refresh artifacts for every trailing-slash variant and legacy slug (manifest-driven blog aliases + a small hardcoded list in `src/data/seo-redirects.json`)\n- omit draft projects from the sitemap; use the generated blog manifest so custom slugs receive real prerendered pages\n- move canonical URL generation into the React SEO component to avoid duplicate/root canonicals\n- add `verify-seo-routes` as a pre-deploy gate (canonical artifacts + matching trailing-slash and legacy redirects, derived from sitemap and `seo-redirects.json`)\n- add `smoke-live-routes` in a separate post-deploy job that polls `/build-info.json` for the new build's sha, then verifies live routes serve real content or the expected redirect — catches any GitHub Pages serving regression that pure dist checks can't see\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)"},{id:"restore-supply-chain-in-title",title:'restore "Supply Chain" in title',labels:[],checklist:[],createdAt:"2026-05-18T01:16:22.000Z",updatedAt:"2026-05-18T01:16:22.000Z",history:[{type:"column",timestamp:"2026-05-18T01:16:22.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:'"Two Attacks in One Day" was too generic without the security framing.'},{id:"retitle-and-tighten-voice",title:"retitle and tighten voice",labels:[],checklist:[],createdAt:"2026-05-18T01:08:04.000Z",updatedAt:"2026-05-18T01:08:04.000Z",history:[{type:"column",timestamp:"2026-05-18T01:08:04.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`- Retitle to "Two Attacks in One Day"; the previous parenthetical was
  the AI-flavored part
- Break the rule-of-three opener
- Replace five em dashes with periods or parens
- Vary the engineered subheader parallelism in "What we changed"
- Rewrite "What I keep thinking about" as "What stuck"; cut the
  meta-introspection and the prior-post callback that restated points
  already made in the body
- Drop dramatic flourishes ("The economics changed", "the most
  underestimated attack vector")

slop-guard score unchanged at 100/100; em dashes 5 -> 0.`},{id:"prerender-root-route-to-eliminate-soft-404-reports",title:"prerender root route to eliminate Soft 404 reports",labels:["Bugfix","PR #299"],checklist:[],createdAt:"2026-05-18T00:37:08.000Z",updatedAt:"2026-05-18T00:37:08.000Z",history:[{type:"column",timestamp:"2026-05-18T00:37:08.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Google Search Console flagged http://dylanbochman.com/index.html (and
www variant) as Soft 404. The prerender script generated content for
/blog, /projects, etc., but not for /, so dist/index.html shipped as
the empty Vite SPA shell. Googlebot's no-JS pass saw an empty body and
classified it as Soft 404.

Adding / to the prerender routes overwrites dist/index.html with the
fully rendered homepage (~120KB vs. 10KB shell), matching the pattern
used for every other route. Both / and /index.html serve the same
file on GitHub Pages, so this fixes both reported URLs.

Co-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`},{id:"restore-prerendered-deploys-for-indexed-routes",title:"restore prerendered deploys for indexed routes",labels:["Bugfix"],checklist:[],createdAt:"2026-05-08T12:49:13.000Z",updatedAt:"2026-05-08T12:49:13.000Z",history:[{type:"column",timestamp:"2026-05-08T12:49:13.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"restore prerendered deploys for indexed routes"},{id:"migrate-to-lucide-react-1-x",title:"migrate to lucide-react 1.x",labels:["Bugfix","PR #293"],checklist:[],createdAt:"2026-05-01T00:55:12.000Z",updatedAt:"2026-05-01T00:55:12.000Z",history:[{type:"column",timestamp:"2026-05-01T00:55:12.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`* deps(deps): bump lucide-react from 0.563.0 to 1.8.0

Bumps [lucide-react](https://github.com/lucide-icons/lucide/tree/HEAD/packages/lucide-react) from 0.563.0 to 1.8.0.
- [Release notes](https://github.com/lucide-icons/lucide/releases)
- [Commits](https://github.com/lucide-icons/lucide/commits/1.8.0/packages/lucide-react)

---
updated-dependencies:
- dependency-name: lucide-react
  dependency-version: 1.8.0
  dependency-type: direct:production
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] <support@github.com>

* fix(deps): migrate to lucide-react 1.x

Lucide 1.x dropped brand icons (no Linkedin) and made LucideIcon
type-only. This bundles the major bump with the source-side fixes
so the dependabot PR #292 can be replaced cleanly.

- Add src/components/icons/LinkedinIcon.tsx as a small inline-SVG
  component matching the GitHubMark pattern. Uses currentColor so
  it inherits text color the same way the lucide icon did.
- Switch HeroSection and ContactSection to import LinkedinIcon
  instead of Linkedin from lucide-react.
- Fix the value-import of LucideIcon in MetricCard.tsx — it's a
  type now, not a runtime export.

All 215 tests pass; typecheck clean.

Closes #292

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>

---------

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
Co-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`},{id:"2026-04-30-two-supply-chain-attacks-in-one-day",title:"Blog: Two Supply Chain Attacks in One Day (and a Setting I Used to Argue Against)",labels:["Blog"],checklist:[],createdAt:"2026-05-01T00:32:02.000Z",updatedAt:"2026-05-01T00:32:02.000Z",history:[{type:"column",timestamp:"2026-05-01T00:32:02.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Lightning on PyPI and intercom-client on npm got compromised the same morning by what looks like the same attacker. We weren't exposed, but the threat shape changed enough that I walked back a position I took a month ago."},{id:"refactor-search-console-fetch-and-add-summary-only",title:"refactor Search Console fetch and add summary-only mode",labels:["Feature"],checklist:[],createdAt:"2026-04-26T01:46:01.000Z",updatedAt:"2026-04-26T01:46:01.000Z",history:[{type:"column",timestamp:"2026-04-26T01:46:01.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`- Split Search Console query into two calls: an authoritative
  no-dimension summary and a dimensional rows fetch. Previously the
  summary was derived by summing rows, which under-counted clicks/
  impressions because the row response is capped and aggregated by
  (query, page) — a single page can split across many rows.
- Replace ad-hoc reductions with summarizeRows / aggregateRows /
  weightedAveragePosition helpers; impression-weighted positions
  replace simple averages.
- Make the daily history write idempotent (update existing date entry
  instead of appending a duplicate).
- Add --update-summary-only mode that re-reads the latest history
  entry and rewrites docs/metrics/latest.json, preserving the original
  timestamp. The daily workflow now invokes this after fetch-ga4-data.js
  so the GA4 step's latest.json overwrite doesn't drop fresh Search
  Console numbers.
- updateMetricsSummary now takes a lastCheck override so the summary-
  only path doesn't bump the timestamp to "now".

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`},{id:"make-blog-the-first-and-default-tab",title:"make Blog the first and default tab",labels:["Feature"],checklist:[],createdAt:"2026-04-26T01:39:01.000Z",updatedAt:"2026-04-26T01:39:01.000Z",history:[{type:"column",timestamp:"2026-04-26T01:39:01.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Reorders ANALYTICS_TABS so Blog is first and sets it as the initial
activeTab. Also fixes the Search CTR display (averageCTR is already a
percentage; the extra *100 was double-scaling it).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`},{id:"add-preinstall-guard-section",title:"add preinstall guard section",labels:[],checklist:[],createdAt:"2026-03-31T13:31:10.000Z",updatedAt:"2026-03-31T13:31:10.000Z",history:[{type:"column",timestamp:"2026-03-31T13:31:10.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Documents the npm install blocker that forces npm ci usage,
closing the gap between having a lockfile and actually using it.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>`},{id:"fix-quarantine-section-min-release-age-not-enforce",title:"fix quarantine section — min-release-age not enforced in npm 11",labels:[],checklist:[],createdAt:"2026-03-31T13:26:04.000Z",updatedAt:"2026-03-31T13:26:04.000Z",history:[{type:"column",timestamp:"2026-03-31T13:26:04.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`npm warns "Unknown user config" for min-release-age, so it's not
actually protecting anything. Kept uv exclude-newer (which works)
and noted npm doesn't have an equivalent yet.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>`},{id:"add-7-day-quarantine-hardening-section",title:"add 7-day quarantine hardening section",labels:[],checklist:[],createdAt:"2026-03-31T13:23:16.000Z",updatedAt:"2026-03-31T13:23:16.000Z",history:[{type:"column",timestamp:"2026-03-31T13:23:16.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Added min-release-age=7 (npm) and exclude-newer (uv) as a third
hardening measure alongside save-exact and version pinning.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>`},{id:"consolidate-tags-remove-8-singletons",title:"consolidate tags — remove 8 singletons",labels:[],checklist:[],createdAt:"2026-03-31T11:28:33.000Z",updatedAt:"2026-03-31T11:28:33.000Z",history:[{type:"column",timestamp:"2026-03-31T11:28:33.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Merged low-use tags into existing ones:
- Observability, Automation → SRE
- CMS, SEO, Node.js → Web Dev (or removed)
- Spotify → Projects (removed)
- Supply Chain → Security (removed)

21 tags → 13.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>`},{id:"2026-03-31-axios-supply-chain-attack",title:"Blog: Anatomy of the axios Supply Chain Attack (and How We Checked Our Machines in 10 Minutes)",labels:["Blog"],checklist:[],createdAt:"2026-03-31T11:14:35.000Z",updatedAt:"2026-03-31T11:14:35.000Z",history:[{type:"column",timestamp:"2026-03-31T11:14:35.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"A compromised npm maintainer account pushed malware into axios. Here's how the attack worked, what it installed, and how we checked our machines in 10 minutes."},{id:"eliminate-ai-slop-patterns-across-24-posts",title:"eliminate AI slop patterns across 24 posts",labels:["PR #272"],checklist:[],createdAt:"2026-03-28T18:25:48.000Z",updatedAt:"2026-03-28T18:25:48.000Z",history:[{type:"column",timestamp:"2026-03-28T18:25:48.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`* blog: eliminate AI slop patterns across 24 posts

Run slop-guard (https://github.com/eric-tramel/slop-guard) across all
blog posts and rewrite flagged patterns. All 30 posts now score >= 81/100
(up from a low of 8/100).

Changes across all posts:
- Replaced slop words (reflecting, narrative, leverage, significantly,
  surprisingly, navigate, collaborative, comprehensive, notable)
- Rewrote "X, not Y" contrast pairs as direct claims
- Removed "This is not X. It is Y" setup-resolution patterns
- Expanded or cut pithy one-liner fragments
- Converted bold-bullet listicle blocks to prose paragraphs
- Reduced excessive bullet runs and triadic list cadences
- Varied repeated phrases
- Cut slop phrases ("the key insight", "deliberate choice", "feel free to")

All frontmatter, code blocks, React components, internal links, and
ASCII diagrams preserved unchanged.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>

* blog: fix writing quality violations from proposed slop-guard rules

Address violations from proposed writing quality rules (eric-tramel/slop-guard#9):
- "tip of the iceberg" cliche → "symptoms of deeper structural issues"
- "deep dive" cliche → "full technical breakdown"
- "best practices" cliche → "web standards"
- "very" qualifier → cut
- "wonderful" ecstatic adjective → "disarming"
- "naturally tried to optimize" (over-explanation + pretentious) → "tried to shrink"

Intentionally kept:
- "obviously" in echonest-sync (intentional humor about airhorns)
- "## The Journey" headings (inside code blocks, referencing template name)
- "subsequent" in theme-persistence (technical term: "subsequent navigation")
- "rather" in "rather than" comparisons (conjunction, not hedging qualifier)

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>

---------

Co-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>`},{id:"inline-diff-in-codex-review-prompt-to-avoid-sandbo",title:"inline diff in codex review prompt to avoid sandbox errors",labels:["Bugfix","PR #271"],checklist:[],createdAt:"2026-03-28T16:26:04.000Z",updatedAt:"2026-03-28T16:26:04.000Z",history:[{type:"column",timestamp:"2026-03-28T16:26:04.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`The Codex CLI read-only sandbox (bwrap) blocks file reads with
"RTM_NEWADDR: Operation not permitted". Fix by passing the diff
directly in the prompt instead of writing to pr_diff.txt and
asking Codex to read it.

Co-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>`},{id:"add-60-day-rolling-window-and-remove-redundant-leg",title:"add 60-day rolling window and remove redundant legend",labels:["Bugfix","PR #270"],checklist:[],createdAt:"2026-03-28T16:19:25.000Z",updatedAt:"2026-03-28T16:19:25.000Z",history:[{type:"column",timestamp:"2026-03-28T16:19:25.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`* fix(analytics): add 60-day rolling window and remove redundant legend

- Filter Sessions Over Time, Search Performance, and Blog Traffic charts
  to show only the last 60 days instead of all historical data
- Remove redundant legend from Device Breakdown donut chart (labels
  already display device name and percentage)

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>

* fix: bundle mermaid+dagre together and add missing react-is dep

- Add manualChunks rule to bundle mermaid and dagre into a single chunk,
  preventing stale hash errors when cached mermaid chunks reference
  old dagre chunk filenames after redeployment
- Add react-is as a direct dependency (required by recharts at build
  time but only present as a transitive dev dependency)

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>

---------

Co-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>`},{id:"deduplicate-anomaly-alerts-for-sustained-trends",title:"deduplicate anomaly alerts for sustained trends",labels:["Bugfix"],checklist:[],createdAt:"2026-03-28T15:57:22.000Z",updatedAt:"2026-03-28T15:57:22.000Z",history:[{type:"column",timestamp:"2026-03-28T15:57:22.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Instead of creating a new issue every day during a prolonged traffic
decline, append updates as comments on the most recent open anomaly
issue (within 3 days). New issues are still created for fresh incidents.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>`},{id:"tweak-wording-in-watchdogs-post",title:"tweak wording in watchdogs post",labels:[],checklist:[],createdAt:"2026-03-14T15:15:46.000Z",updatedAt:"2026-03-14T15:15:46.000Z",history:[{type:"column",timestamp:"2026-03-14T15:15:46.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"},{id:"2026-03-14-watchdogs-and-launchagents",title:"Blog: Watchdogs and LaunchAgents: Managing Systems That Want to Break",labels:["Blog"],checklist:[],createdAt:"2026-03-14T14:57:07.000Z",updatedAt:"2026-03-14T14:57:07.000Z",history:[{type:"column",timestamp:"2026-03-14T14:57:07.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"What we learned building a watchdog for BlueBubbles and OpenClaw on a headless Mac Mini. Health monitors that cause the instability they're designed to detect, and how to fix them."},{id:"use-7-day-rolling-average-for-analytics-anomaly-de",title:"use 7-day rolling average for analytics anomaly detection",labels:["Bugfix","PR #258"],checklist:[],createdAt:"2026-03-07T00:50:55.000Z",updatedAt:"2026-03-07T00:50:55.000Z",history:[{type:"column",timestamp:"2026-03-07T00:50:55.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`The previous day-over-day comparison triggered false positives when traffic
returned to baseline after a spike (e.g. 573→318 = -45%, but 318 is normal).

Now compares against the 7-day rolling average with a -40% threshold, which
is more resilient to natural traffic fluctuations.

Closes #256

Co-authored-by: Claude Opus 4.6 <noreply@anthropic.com>`},{id:"2026-02-26-echonest-sync-and-the-spotify-api-shakeup",title:"Blog: EchoNest Sync and the Spotify API Shakeup",labels:["Blog"],checklist:[],createdAt:"2026-02-27T00:26:38.000Z",updatedAt:"2026-02-27T00:26:38.000Z",history:[{type:"column",timestamp:"2026-02-27T00:26:38.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"We built a desktop sync app for EchoNest. Then Spotify changed its API in ways that made us glad we did."},{id:"streamline-blog-post-build-deploy-pipeline",title:"Streamline blog post build/deploy pipeline",labels:["Medium"],checklist:[],createdAt:"2026-02-24T23:10:07.895Z",updatedAt:"2026-02-24T23:23:14.565Z",history:[{type:"column",timestamp:"2026-02-24T23:10:07.895Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-02-24T23:23:14.565Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Added a `detect-changes` job to `deploy.yml` that classifies pushes as content-only or full-build. Content-only deploys skip Playwright tests, unit tests, Sentry source maps, security audit, and bundle size checks. Deployed in PR #249. Full pipeline: ~10min → Content-only: ~2min."},{id:"harden-openclaw-post-security-posture",title:"harden OpenClaw post security posture",labels:["PR #248"],checklist:[],createdAt:"2026-02-24T22:56:10.000Z",updatedAt:"2026-02-24T22:56:10.000Z",history:[{type:"column",timestamp:"2026-02-24T22:56:10.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`* blog: harden OpenClaw post security posture

- Remove specific locations, chat counts, plist names, exact schedules
- Generalize infrastructure to "Mac-class device" / "system service"
- Describe guardrails as principles (least privilege, separate service
  accounts, out-of-band approval) rather than exact mechanisms
- Reframe hard parts as lessons learned, not precise failure modes
- Remove personal schedule details; add consent language for shared data
- Add monitoring/detection section (weekly activity report, anomaly alerts)
- Remove GOG_KEYRING_PASSWORD and other implementation specifics

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>

* blog: humanizer pass on OpenClaw post

- Remove formulaic openers ("The lesson:", "The takeaway:", "The goal")
- Break up rule-of-three/five feature lists into shorter sentences
- Rewrite security paragraph from brochure tone to plain language
- Cut negative parallelism ("not just X, but Y")
- Vary sentence structure and rhythm throughout

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>

---------

Co-authored-by: Claude Opus 4.6 <noreply@anthropic.com>`},{id:"improve-openclaw-post-intro-and-link",title:"improve OpenClaw post intro and link",labels:["PR #247"],checklist:[],createdAt:"2026-02-24T21:39:52.000Z",updatedAt:"2026-02-24T21:39:52.000Z",history:[{type:"column",timestamp:"2026-02-24T21:39:52.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`* blog: improve OpenClaw post intro with context and link

- Link OpenClaw to https://openclaw.ai/
- Frame as exploration of an open-source AI agent framework
- Add context on what OpenClaw is and why it's notable
- Fix location: Mac Mini is in the cabin, not apartment

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>

* blog: reframe OpenClaw post and run humanizer pass

- Reframe as experimentation with safety-first approach
- Remove camera snapshot section
- Link OpenClaw to https://openclaw.ai/
- Fix Mac Mini location (cabin not apartment)
- Humanizer pass: remove bolded inline headers, reduce AI
  vocabulary, vary sentence structure, cut promotional tone

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>

---------

Co-authored-by: Claude Opus 4.6 <noreply@anthropic.com>`},{id:"rework-blog-analytics-dashboard",title:"rework blog analytics dashboard",labels:["Feature","PR #246"],checklist:[],createdAt:"2026-02-24T21:33:28.000Z",updatedAt:"2026-02-24T21:33:28.000Z",history:[{type:"column",timestamp:"2026-02-24T21:33:28.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`* feat(analytics): rework blog analytics dashboard

- Add all-time leaderboard aggregating GA4 history across all entries
- Fix slug matching for renamed posts via alias map + year normalization
- Replace single-line blog traffic chart with stacked area (top 5 posts)
- Replace avg reading time metric with all-time views; add WoW trend
- Switch tag breakdown to all-time data; remove sparse category pie chart
- Trim 7d table to top 5, streamline columns

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>

* fix(analytics): address Codex review feedback

- Remove risky partial substring matching in slug resolver to prevent
  silent data misattribution; add min key length guard (>=10 chars)
- Use Date.getTime() for firstSeen/lastSeen comparisons instead of
  string comparison to handle non-ISO date formats safely

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>

---------

Co-authored-by: Claude Opus 4.6 <noreply@anthropic.com>`},{id:"make-security-audit-non-blocking-in-deploy-workflo",title:"make security audit non-blocking in deploy workflow",labels:["Bugfix","PR #245"],checklist:[],createdAt:"2026-02-24T21:24:15.000Z",updatedAt:"2026-02-24T21:24:15.000Z",history:[{type:"column",timestamp:"2026-02-24T21:24:15.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`The deploy workflow's npm audit step was failing the entire build due to
transitive dependency vulnerabilities in dev tools (eslint, minimatch, glob).
These are not exploitable in production.

Aligns with pr-checks.yml which already has continue-on-error: true and
--omit=dev for the audit step.

Co-authored-by: Claude Opus 4.6 <noreply@anthropic.com>`},{id:"2026-02-24-openclaw-the-home-agent",title:"Blog: OpenClaw: Experimenting with a personal AI agent",labels:["Blog"],checklist:[],createdAt:"2026-02-24T20:53:10.000Z",updatedAt:"2026-02-24T20:53:10.000Z",history:[{type:"column",timestamp:"2026-02-24T20:53:10.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"What I learned running an open-source AI agent on a self-hosted Mac Mini. Least privilege, version-controlled config, and the boring plumbing that makes it work."},{id:"rework-tablist-mobile-selector",title:"Rework TabList Mobile Selector",summary:"Replace horizontal-scroll/flex-wrap TabList with Select dropdown on mobile (<640px)",labels:["PR #230","Enhancement","UX"],checklist:[],planFile:"docs/plans/62-rework-tablist-mobile-selector.md",createdAt:"2026-02-10T01:47:50.564Z",updatedAt:"2026-02-10T19:00:51.898Z",history:[{type:"column",timestamp:"2026-02-10T01:47:50.564Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-02-10T19:00:51.898Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"feb-2-inp-performance-optimization",title:"Feb 2: INP Performance Optimization",labels:["Performance","PR #222"],checklist:[],createdAt:"2026-02-02T17:13:02.971Z",history:[{type:"column",timestamp:"2026-02-02T17:13:02.971Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Reduced Interaction to Next Paint from 493ms (poor) to <50ms (good). Throttled Kanban drag handlers, deferred analytics to idle time, debounced K8s form inputs, and memoized heatmap computations."},{id:"k8s-resource-right-sizer",title:"K8s Resource Right-Sizer",labels:["Feature","SRE","Calculator"],checklist:[],createdAt:"2026-01-31T03:26:51.742Z",history:[{type:"column",timestamp:"2026-01-31T03:26:51.742Z",columnId:"changelog",columnTitle:"Change Log"}],description:"K8s CPU/memory rightsizing calculator with percentile-based recommendations, risk slider, savings estimates, and YAML export. Includes combobox inputs with tooltips and dropdown presets for easy exploration."},{id:"jan-28-hero-github",title:"Jan 28: Hero GitHub Button",summary:"Added GitHub profile button to hero section",labels:["UI","Enhancement"],checklist:[],createdAt:"2026-01-28T00:00:00.000Z",updatedAt:"2026-01-29T02:36:13.000Z",history:[{type:"column",timestamp:"2026-01-29T02:36:13.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Added GitHub button to hero section alongside the Email button:
- Solid variant for visual hierarchy
- Renamed "Get In Touch" to "Email" for clarity
- Updated tests for new button layout

Commits: b98efed, 0e53f51, acf7603, bd55d64`},{id:"github-actions-billing-dashboard",title:"GitHub Actions Billing Dashboard",labels:["Medium","Feature"],checklist:[],createdAt:"2026-01-29T01:05:21.141Z",updatedAt:"2026-01-29T02:07:59.040Z",history:[{type:"column",timestamp:"2026-01-29T01:05:21.141Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-29T02:07:59.040Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Track Actions minutes/spend in analytics dashboard. Phase 0 (API validation) complete - uses new Enhanced Billing endpoint. See docs/plans/60-github-actions-billing-dashboard.md"},{id:"jan-28-seo-schema",title:"Jan 28: SEO Schema Improvements",summary:"ProfilePage schema, blog breadcrumbs, sameAs social links",labels:["PR #212","SEO","Enhancement"],checklist:[],planFile:"docs/plans/61-seo-profilepage-schema.md",createdAt:"2026-01-28T00:00:00.000Z",updatedAt:"2026-01-29T01:28:24.000Z",history:[{type:"column",timestamp:"2026-01-29T01:28:24.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Enhanced structured data for better search visibility:
- Added ProfilePage JSON-LD schema to homepage
- Added BreadcrumbList schema to blog posts
- Fixed LinkedIn URL in social links
- Added author.sameAs to BlogPosting schema

Plan: [docs/plans/61-seo-profilepage-schema.md](/docs/plans/61-seo-profilepage-schema.md)`},{id:"jan-28-blog-dates",title:"Jan 28: Blog Post Date Rename",summary:"Renamed all 2025 blog posts to 2026 dates",labels:["PR #211","Content","Cleanup"],checklist:[],createdAt:"2026-01-28T00:00:00.000Z",updatedAt:"2026-01-28T14:14:23.000Z",history:[{type:"column",timestamp:"2026-01-28T14:14:23.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Renamed all blog post files and frontmatter dates from 2025 to 2026 to reflect correct publication year."},{id:"jan-27-404s-sequel",title:"Jan 27: The 404s Came Back",summary:"Sequel blog post on debugging 404 errors from CI traffic",labels:["PR #209","PR #210","Blog","Content"],checklist:[],createdAt:"2026-01-27T00:00:00.000Z",updatedAt:"2026-01-28T02:56:51.000Z",history:[{type:"column",timestamp:"2026-01-28T02:50:15.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Published sequel to the original 404 debugging post, covering:
- Mysterious traffic from CI/CD pipelines
- HeadlessChrome user agent detection
- Analytics filtering for bot traffic

Also improved Top Pages table readability on mobile (PR #210).

Related: [Blog post](/blog/2026-01-27-the-404s-came-back)`},{id:"jan-27-seo-prerender",title:"Jan 27: SEO Pre-render All Routes",summary:"Fixed Googlebot crawlability by pre-rendering all routes",labels:["SEO","Infrastructure"],checklist:[],createdAt:"2026-01-27T00:00:00.000Z",updatedAt:"2026-01-27T00:00:00.000Z",history:[{type:"column",timestamp:"2026-01-27T00:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Pre-rendered all routes at build time to ensure Googlebot can crawl them without JavaScript execution. SPAs on GitHub Pages return 404 for direct URL access without pre-rendering.

Commit: 4eee9a8`},{id:"jan-25-dotfiles-blog",title:"Jan 25: Dotfiles for AI-Assisted Development",summary:"Blog post on configuring Claude Code with dotfiles and CLAUDE.md patterns",labels:["PR #205","Blog","Content"],checklist:[],createdAt:"2026-01-25T00:00:00.000Z",updatedAt:"2026-01-26T02:18:11.000Z",history:[{type:"column",timestamp:"2026-01-26T02:18:11.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:`Published blog post covering dotfiles patterns for AI-assisted development:
- CLAUDE.md project instructions
- Global vs project-specific rules
- Session notes for context persistence
- Commit message conventions with flags

Related: [Blog post](/blog/2026-01-25-dotfiles-for-ai-assisted-development)`},{id:"jan-25-nvidia-update",title:"Jan 25: Employment Update",summary:"Updated role to Nvidia Technical Incident Manager",labels:["PR #83","Content"],checklist:[],createdAt:"2026-01-25T00:00:00.000Z",updatedAt:"2026-01-25T00:00:00.000Z",history:[{type:"column",timestamp:"2026-01-25T00:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}],description:"Updated employment information to reflect new role as Technical Incident Manager at Nvidia."},{id:"kanban-system-durability-improvements",title:"Kanban System Durability Improvements",summary:"Address validation gaps and edge cases from architecture review (7.5/10 durability score)",labels:["Medium","Kanban","Technical Debt"],checklist:[{id:"ksd-p0-1",text:"P0: Move description into YAML frontmatter (avoid --- boundary issue)",completed:!0},{id:"ksd-p0-2",text:"P0: Add schema versioning with explicit detection (no default)",completed:!0},{id:"ksd-p1-3",text:"P1: Validate ALLOWED_ORIGINS parsing (reject empty/invalid)",completed:!0},{id:"ksd-p1-4",text:"P1: Extract hardcoded values to env vars (wrangler.toml)",completed:!0},{id:"ksd-p1-5",text:"P1: Make history schema forward-compatible (.passthrough)",completed:!0},{id:"ksd-p2-6",text:"P2: Add field validation limits (labels, summary, archiveReason)",completed:!0},{id:"ksd-p2-7",text:"P2: Add history compaction (max 100 entries)",completed:!0},{id:"ksd-p2-8",text:"P2: Track title changes in history",completed:!0},{id:"ksd-p3-9",text:"P3: Persist deletedCardIds with multi-tab sync",completed:!0},{id:"ksd-p3-10",text:"P3: Return warning (not failure) on dispatch error",completed:!0}],planFile:"docs/plans/59-kanban-durability-improvements.md",createdAt:"2026-01-23T19:08:16.405Z",updatedAt:"2026-01-23T21:20:18.222Z",history:[{type:"column",timestamp:"2026-01-23T19:08:16.405Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-23T19:31:00.000Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-23T21:20:18.222Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"new-board-feature",title:"New Board Creation",description:`Add ability to create new kanban boards from the UI. Board selector dropdown to switch between boards, plus 'New Board' button to create fresh boards.

**Architecture Decision**: Dynamic board discovery (Option A from plan). Worker scans \`content/kanban/\` to discover boards, no hardcoded allowlist.

**Codex Review Complete** (2026-01-23):
- Race condition handling with retry logic on 409
- Markdown fallback for new boards before precompile
- Column ID validation with \`SAFE_ID\`
- Optimistic UI with \`precompiled: false\` indicator

See \`docs/plans/58-new-board-creation.md\` for full implementation plan.
`,labels:["Medium","Kanban","Feature"],checklist:[{id:"nbf-1",text:"Worker: Add GET /boards endpoint with dynamic discovery",completed:!0},{id:"nbf-2",text:"Worker: Add markdown fallback to GET /board/:id (before precompile)",completed:!0},{id:"nbf-3",text:"Worker: Add POST /boards endpoint with retry logic for 409",completed:!0},{id:"nbf-4",text:"Worker: Add column/size validation (SAFE_ID, max limits)",completed:!0},{id:"nbf-5",text:"Frontend: BoardSelector component with dropdown",completed:!0},{id:"nbf-6",text:"Frontend: CreateBoardModal with title/ID inputs",completed:!0},{id:"nbf-7",text:"Frontend: Remove static VALID_BOARDS allowlist",completed:!0},{id:"nbf-8",text:"Frontend: Handle precompiled:false response (optimistic UI)",completed:!0}],planFile:"docs/plans/58-new-board-creation.md",prStatus:"pending",createdAt:"2026-01-22T00:00:00.000Z",updatedAt:"2026-01-23T17:14:22.317Z",history:[{type:"column",timestamp:"2026-01-22T00:00:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-23T00:00:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-23T00:00:00.000Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-23T17:14:22.317Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"markdown-based-kanban",title:"Migrate Kanban to Markdown Files",description:`Replace monolithic roadmap-board.json with individual markdown files per card. Adopt Backlog.md pattern or Astro Content Collections approach.

Problem: 1665-line JSON file is error-prone for manual editing (trailing commas, bracket mismatches).

Options evaluated:
- Backlog.md (ready-made, Claude Code compatible)
- Astro Content Collections pattern (gray-matter + Zod)
- YAML files
- TypeScript data files
`,labels:["Medium","DX","Infrastructure"],checklist:[{id:"mbk-1",text:"Evaluate Backlog.md vs custom Content Collections approach",completed:!0},{id:"mbk-2",text:"Design folder structure and frontmatter schema",completed:!0},{id:"mbk-3",text:"Create migration script (JSON → markdown files)",completed:!0},{id:"mbk-4",text:"Build aggregation utility (markdown files → typed data)",completed:!0},{id:"mbk-5",text:"Update useChangelogData hook to use new source",completed:!0},{id:"mbk-6",text:"Migrate roadmap-board.json",completed:!0},{id:"mbk-7",text:"Migrate house-board.json",completed:!0}],createdAt:"2026-01-22T00:00:00.000Z",updatedAt:"2026-01-23T16:00:00.000Z",history:[{type:"column",timestamp:"2026-01-22T00:00:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-22T12:00:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-23T15:34:46.043Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-23T16:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"phase-2-markdown-only-saves",title:"Phase 2: Markdown-Only Saves",description:`Eliminate dual maintenance by making markdown the single source of truth.

Current state: JSON files are edited by save workflow, markdown files power ChangelogExplorer.

Target state: Save workflow writes .md files directly via GitHub API, precompile runs on every push.

Benefits:
- Single source of truth (no sync issues)
- Better git diffs for card changes
- Easier manual editing when needed
- CLI tools work with same format
`,labels:["Medium","Kanban","Infrastructure"],checklist:[{id:"p2-1",text:"Update save workflow to write .md files instead of JSON",completed:!0},{id:"p2-2",text:"Generate card IDs from title slug (like CLI does)",completed:!0},{id:"p2-3",text:"Handle card renames (rename .md file)",completed:!0},{id:"p2-4",text:"Handle card deletion (delete .md file)",completed:!0},{id:"p2-5",text:"Trigger precompile after save (GitHub Action or webhook)",completed:!0},{id:"p2-6",text:"Remove JSON files after validation",completed:!0}],createdAt:"2026-01-23T00:00:00.000Z",updatedAt:"2026-01-23T16:00:00.000Z",history:[{type:"column",timestamp:"2026-01-23T00:00:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-23T10:00:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-23T15:34:40.506Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-23T16:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"jan-23-kanban-phase-2",title:"Jan 23: Kanban Phase 2 Complete",summary:"Markdown is now the single source of truth for kanban boards",description:`## Phase 2: Markdown-Only Saves

Completed the migration to make markdown the single source of truth for kanban boards.

### Key Changes

- **Eliminated JSON files**: Removed \`roadmap-board.json\`, \`house-board.json\`, and \`roadmap-archive.json\`
- **Worker writes directly to markdown**: Save flow now commits \`.md\` files via GitHub Trees API
- **Commit SHA conflict detection**: Replaced timestamp-based detection with atomic commit SHA comparison
- **Precompiled JS fallback**: Board loads from worker API (primary) or generated JS (offline fallback)

### Bug Fixes

- Fixed UTF-8 encoding corruption for non-ASCII characters (arrows, emojis)
- Fixed duplicate history entries during drag operations (moved tracking from \`handleDragOver\` to \`handleDragEnd\`)
- Fixed Cloudflare Workers 50 subrequest limit by using inline content in tree items
- Fixed open redirect vulnerability in OAuth return_to validation

### Architecture

\`\`\`
Save: UI → Worker → GitHub Trees API → content/kanban/*.md
                ↓
      repository_dispatch → precompile-content.yml
                ↓
      src/generated/kanban/*.js

Load: UI → Worker API (primary) → precompiled JS (fallback)
\`\`\`

Related PRs: #195, #198
`,labels:["Infrastructure","Kanban"],checklist:[],createdAt:"2026-01-23T16:00:00.000Z",updatedAt:"2026-01-23T16:00:00.000Z",history:[{type:"column",timestamp:"2026-01-23T16:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"analytics-bot-ci-tagging",title:"Analytics Bot & CI Traffic Tagging",description:`Tag suspicious traffic with custom dimension instead of filtering. Enables analysis of bot patterns while keeping data.

Implemented in \`src/lib/analytics/clientTrafficClassifier.ts\`:
- Known bot user agents (Googlebot, Bingbot, HeadlessChrome, etc.)
- CI/automation user agents (GitHub Actions runners, Playwright)
- Known probe paths (wp-admin, .env, xmlrpc.php, etc.)
- Sessions tagged on first pageview with GA4 custom dimension
`,labels:["Small","Analytics"],checklist:[{id:"abt-1",text:"Create traffic classification utility (bot, ci, human)",completed:!0},{id:"abt-2",text:"Detect CI via user agent (HeadlessChrome, Playwright)",completed:!0},{id:"abt-3",text:"Add custom dimension to GA4 config",completed:!0},{id:"abt-4",text:"Tag sessions on first pageview",completed:!0},{id:"abt-5",text:"Add traffic type filter to analytics dashboard",completed:!0},{id:"abt-6",text:"Document patterns discovered for future reference",completed:!0}],planFile:"docs/plans/56-analytics-bot-ci-tagging.md",createdAt:"2026-01-19T00:00:00.000Z",updatedAt:"2026-01-23T00:00:00.000Z",history:[{type:"column",timestamp:"2026-01-19T00:00:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-21T00:00:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-23T00:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"analytics-event-tracking",title:"Analytics Event Tracking",description:`Add GA4 events for interactive tool usage. Track calculator submissions, tab switches, copy-to-clipboard actions.

Implemented in \`src/lib/trackToolEvent.ts\` with events firing in:
- SLO Calculator: tab_switch, calculate, period_change
- CLI Playground: command_run, tool_select, mode_switch, preset_select, share_copy
- On-Call Coverage: model_select
`,labels:["Small","Analytics"],checklist:[{id:"aet-1",text:"Define event schema (tool_interaction, action, tool_name)",completed:!0},{id:"aet-2",text:"Add events to SLO Calculator (tab switch, calculate, copy)",completed:!0},{id:"aet-3",text:"Add events to CLI Playground (run command, preset select)",completed:!0},{id:"aet-4",text:"Add events to On-Call Coverage (timezone add, model switch)",completed:!0},{id:"aet-5",text:"Update analytics dashboard to show tool engagement",completed:!0}],createdAt:"2026-01-19T00:00:00.000Z",updatedAt:"2026-01-23T00:00:00.000Z",history:[{type:"column",timestamp:"2026-01-19T00:00:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-21T00:00:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-23T00:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"lighthouse-a11y-seo-focus",title:"Lighthouse: A11y & SEO Focus",description:`Lab Lighthouse provides unique value for accessibility audits and SEO checks that field CWV data can't capture. Reframed the workflow to focus on these strengths.

Implemented in \`.github/workflows/lighthouse.yml\`:
- Path-based triggers (only runs on UI changes to src/pages, components, CSS)
- Multi-page testing with thresholds: A11y ≥95, SEO ≥90, Best Practices ≥90
- Results stored in lighthouse-metrics branch for historical tracking
`,labels:["Small","Analytics","Accessibility"],checklist:[{id:"las-1",text:"Review current Lighthouse workflow frequency and categories",completed:!0},{id:"las-2",text:"Configure Lighthouse to focus on a11y and SEO categories",completed:!0},{id:"las-3",text:"Reduce run frequency (weekly or on significant changes)",completed:!0},{id:"las-4",text:"Add a11y score to analytics dashboard",completed:!0}],planFile:"docs/plans/57-lighthouse-a11y-seo-focus.md",createdAt:"2026-01-19T00:00:00.000Z",updatedAt:"2026-01-23T00:00:00.000Z",history:[{type:"column",timestamp:"2026-01-19T00:00:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-21T00:00:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-23T00:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"tailwind-v4",title:"Tailwind CSS v4 Upgrade",description:`Migrate to v4: CSS-based config, Vite plugin, updated utilities. ~116 class renames across 59 files.

Completed Jan 21. See blog post: "Tailwind v4 Upgrade: The Performance Tradeoff"
`,labels:["Medium-Large","Infrastructure"],checklist:[{id:"tw-1",text:"Run npx @tailwindcss/upgrade on feature branch",completed:!0},{id:"tw-2",text:"Update PostCSS config (remove autoprefixer)",completed:!0},{id:"tw-3",text:"Consider Vite plugin migration",completed:!0},{id:"tw-4",text:"Fix shadow/blur/rounded utility renames",completed:!0},{id:"tw-5",text:"Update outline-none → outline-hidden",completed:!0},{id:"tw-6",text:"Migrate tailwindcss-animate plugin",completed:!0},{id:"tw-7",text:"Remove @tailwindcss/container-queries (now built-in)",completed:!0},{id:"tw-8",text:"Test dark mode and animations",completed:!0},{id:"tw-9",text:"Run Lighthouse audit before/after",completed:!0}],planFile:"docs/plans/22-tailwind-v4-upgrade.md",createdAt:"2026-01-08T00:00:00.000Z",updatedAt:"2026-01-21T00:00:00.000Z",history:[{type:"column",timestamp:"2026-01-08T00:00:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-20T00:00:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-21T00:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"react-hook-form-update",title:"react-hook-form & @hookform/resolvers Update",summary:"Dependency updates to unblock form validation library",description:`Updated react-hook-form from 7.53.0 to 7.71.1 and @hookform/resolvers from 3.10.0 to 5.2.2. The resolvers package had a peer dependency requiring react-hook-form >=7.55.0.
`,labels:["PR #165","Infrastructure"],checklist:[{id:"rhf-1",text:"Update react-hook-form to latest 7.x",completed:!0},{id:"rhf-2",text:"Run tests to verify form functionality",completed:!0},{id:"rhf-3",text:"Merge @hookform/resolvers PR #165",completed:!0}],createdAt:"2026-01-19T00:00:00.000Z",updatedAt:"2026-01-19T20:40:00.000Z",history:[{type:"column",timestamp:"2026-01-19T20:00:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-19T20:40:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"animated-mermaid-diagrams",title:"Animated Mermaid Diagrams",summary:"Interactive step-by-step walkthrough for incident command flowcharts",description:`Added animated walkthrough mode to incident-command-diagrams with:

- Step-by-step animation with play/pause/skip/back controls
- Decision nodes that pause for user to choose a path (branching logic)
- Link nodes for cross-diagram navigation and external tool links
- Side-by-side layout with sticky context panel
- Auto-scroll to center active node in viewport
- Progress bar and step counter
- Lazy-loaded Mermaid rendering with theme support
`,labels:["PR #162","Feature","SRE"],checklist:[],createdAt:"2026-01-18T00:00:00.000Z",updatedAt:"2026-01-18T19:30:00.000Z",history:[{type:"column",timestamp:"2026-01-18T16:49:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-18T19:30:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"cli-tool-playground",title:"CLI Tool Playground",summary:"In-browser kubectl/jq/grep/sed/awk with Learn and Play modes",description:`Interactive in-browser demos for CLI tools. Pure JS implementations (no WASM).

Features:
- Tool selector: kubectl, jq, grep, sed, awk
- Learn mode with goals, hints, and command chips
- Playground mode for freeform experimentation
- Command explainer with flag breakdowns and 'Try next' suggestions
- Shareable URL state (tool, mode, input, command)
- 5 presets per tool covering common use cases

kubectl simulator:
- 5 triage scenarios (CrashLoopBackOff, ImagePullBackOff, Service Mismatch, Rollout Regression, Node Pressure)
- Full K8s resource schema (pods, deployments, services, nodes, events)
- Supports: get, describe, logs, rollout, top, events
- Session state mutation for rollback commands

Security fixes:
- Replaced Function() with safe regex parser (XSS)
- URL param validation with fallbacks
- Race condition guards for async results
`,labels:["PR #156","Feature","Learning","Tool"],checklist:[{id:"ctp-1",text:"Create tool selector (kubectl, jq, grep, sed, awk)",completed:!0},{id:"ctp-2",text:"Build input editor with sample data presets",completed:!0},{id:"ctp-3",text:"Build command editor with syntax highlighting",completed:!0},{id:"ctp-4",text:"Implement pure JS execution engines",completed:!0},{id:"ctp-5",text:"Create output panel with copy and clear",completed:!0},{id:"ctp-6",text:"Add explanation panel for command breakdown",completed:!0},{id:"ctp-7",text:"Implement shareable URL state (input + command)",completed:!0},{id:"ctp-8",text:"Add kubectl simulator with 5 triage scenarios",completed:!0},{id:"ctp-9",text:"Add --help for all tools",completed:!0},{id:"ctp-10",text:"Security fixes (XSS, URL validation, race conditions)",completed:!0}],planFile:"docs/plans/47-cli-tool-playground.md",createdAt:"2026-01-17T00:00:00.000Z",updatedAt:"2026-01-18T01:15:00.000Z",history:[{type:"column",timestamp:"2026-01-17T21:30:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-18T01:15:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"error-budget-burndown",title:"Error Budget Burndown",description:`Visualize how quickly you're consuming error budget. Input SLO target + incident history to see burn rate and projected exhaustion date.
`,labels:["PR #136","SRE","Calculator"],checklist:[{id:"ebb-1",text:"Create ErrorBudgetBurndown component",completed:!0},{id:"ebb-2",text:"Add to project registry with route",completed:!0},{id:"ebb-3",text:"Build SLO configuration inputs",completed:!0},{id:"ebb-4",text:"Build incident input form",completed:!0},{id:"ebb-5",text:"Implement budget calculations",completed:!0},{id:"ebb-6",text:"Create burndown chart with Recharts",completed:!0},{id:"ebb-7",text:"Add summary cards with key metrics",completed:!0},{id:"ebb-8",text:"Mobile responsive layout",completed:!0}],planFile:"docs/plans/26-error-budget-burndown.md",createdAt:"2026-01-16",updatedAt:"2026-01-17T14:00:00.000Z",history:[{type:"column",timestamp:"2026-01-16T04:30:00.000Z",columnId:"todo",columnTitle:"To Do"},{type:"column",timestamp:"2026-01-16T05:00:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-17T14:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"programmatic-og-images",title:"Programmatic OG Image Generation",summary:"Build-time OG images via satori + resvg for project pages",description:`Generate Open Graph images at build time for project pages using satori + @resvg/resvg-js.

Implemented:
- Build-time generation via scripts/generate-og-images.mjs
- Build-time validation via scripts/validate-projects.mjs
- Dark theme template with icon, title, description, tags
- Inter font (regular + bold) for typography
- Added to build pipeline in package.json
- Extracted project metadata to projects-meta.json
- Simplified projects.ts by removing inline metadata
- Fail-fast guards for CI (exits 1 on generation or validation failures)
`,labels:["PR #150","Enhancement","Infrastructure"],checklist:[{id:"og-1",text:"Research @vercel/og vs satori for static generation",completed:!0},{id:"og-2",text:"Design OG image template (layout, colors, typography)",completed:!0},{id:"og-3",text:"Create generateOgImages.mjs script",completed:!0},{id:"og-4",text:"Add to build pipeline",completed:!0},{id:"og-5",text:"Update Project.tsx to use generated images",completed:!0},{id:"og-6",text:"Generate images for all active projects",completed:!0}],planFile:"docs/plans/33-programmatic-og-images.md",createdAt:"2026-01-17T00:00:00.000Z",updatedAt:"2026-01-17T03:15:00.000Z",history:[{type:"column",timestamp:"2026-01-17T02:45:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-17T02:49:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-17T03:15:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"slo-calculator-seo",title:"SLO Calculator SEO",description:`Added JSON-LD structured data and keyword optimization for SLO Calculator project page.

Implemented:
- WebApplication JSON-LD schema for active projects
- BreadcrumbList JSON-LD schema for navigation
- Keywords and ogImage fields in ProjectMeta type
- SEO-optimized keywords for SLO Calculator
- resolveOgImage helper for absolute URL handling

OG image generation moved to separate task (Programmatic OG Image Generation).
`,labels:["PR #149","SEO","Enhancement"],checklist:[{id:"seo-1",text:"Add WebApplication JSON-LD schema to Project.tsx",completed:!0},{id:"seo-2",text:"Add BreadcrumbList JSON-LD schema",completed:!0},{id:"seo-3",text:"Add keywords field to ProjectMeta type",completed:!0},{id:"seo-4",text:"Update SLO Calculator with keywords",completed:!0},{id:"seo-5",text:"Fix ogImage to use absolute URLs",completed:!0}],createdAt:"2026-01-16T00:00:00.000Z",updatedAt:"2026-01-17T03:00:00.000Z",history:[{type:"column",timestamp:"2026-01-16T23:30:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-17T02:30:00.000Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-17T03:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"slo-tool-ux-improvements",title:"SLO Tool UX Improvements",summary:"Better defaults, collapsible sections, burn rate simulator",description:`Polished the SLO Calculator with better defaults and new burn rate simulator.

Changes:
- Realistic default response times (26m MTTR)
- Collapsible Response Times section (shows Alert latency by default)
- Removed redundant burndown charts from Achievable/Target tabs
- Added interactive Burn Rate Simulator slider (0.1x-5x)
- Explanatory text for the 'ideal' line concept
- Fixed slider resync when inputs change (Codex finding)
- Fixed edge case when zero incidents (Codex finding)
`,labels:["PR #151","Enhancement","SRE"],checklist:[],createdAt:"2026-01-17T00:00:00.000Z",updatedAt:"2026-01-17T01:37:34.000Z",history:[{type:"column",timestamp:"2026-01-17T01:37:34.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"grafana-dashboard-builder",title:"Grafana Dashboard JSON Builder",description:`Visual editor for Grafana dashboards. Drag-and-drop panel layout, panel type picker, export schema v38+ JSON.
`,labels:["Deferred","Large","SRE","Tool"],checklist:[],planFile:"docs/plans/41-grafana-dashboard-builder.md",createdAt:"2026-01-17T00:00:00.000Z",archivedAt:"2026-01-19T00:00:00.000Z",archiveReason:"Too large for current priorities. Consider revisiting when smaller SRE tools are complete.",history:[]},{id:"log-pattern-extractor",title:"Log Pattern Extractor",description:`Detect recurring log patterns from raw lines. Auto-group by template, field type inference, export to regex/grok/logstash format.
`,labels:["Deferred","Medium","SRE","Tool"],checklist:[],planFile:"docs/plans/45-log-pattern-extractor.md",createdAt:"2026-01-17T00:00:00.000Z",archivedAt:"2026-01-19T00:00:00.000Z",archiveReason:"Overlaps significantly with regex-log-parser. Build that first, then evaluate if this adds enough value.",history:[]},{id:"retention-cost-estimator",title:"Retention Cost Estimator",description:`Estimate observability costs across providers (Datadog, Grafana Cloud, New Relic). Side-by-side comparison, retention tradeoffs.
`,labels:["Deferred","Medium","SRE","Calculator"],checklist:[],planFile:"docs/plans/43-retention-cost-estimator.md",createdAt:"2026-01-17T00:00:00.000Z",archivedAt:"2026-01-19T00:00:00.000Z",archiveReason:"Pricing models change frequently. Maintenance burden outweighs value for a personal site.",history:[]},{id:"slo-tools-cross-pollination",title:"SLO Tools Cross-Pollination",description:`Connected SLO tools with shared presets and cross-linking. Unified sloPresets.ts, slider magnetism, flexible input ranges (0-99.999%), and URL param sync for SLO + incidents.
`,labels:["PR #143","PR #144","Enhancement","SRE"],checklist:[{id:"slo-xp-1",text:"Create shared sloPresets.ts with target, label, budget description",completed:!0},{id:"slo-xp-2",text:"Update Error Budget Burndown to use shared presets",completed:!0},{id:"slo-xp-3",text:"Update Uptime Calculator to use shared presets",completed:!0},{id:"slo-xp-4",text:"Add 'See impact on Error Budget' link from Uptime Calculator insights",completed:!0},{id:"slo-xp-5",text:"Add 'Improve response times' link from Error Budget Burndown",completed:!0},{id:"slo-xp-6",text:"Pass context via URL params for pre-populated views",completed:!0}],planFile:"docs/plans/31-slo-tools-cross-pollination.md",createdAt:"2026-01-16",updatedAt:"2026-01-16T23:30:00.000Z",history:[{type:"column",timestamp:"2026-01-16T19:45:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-16T22:45:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-16T22:55:00.000Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-16T23:30:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"unified-slo-tool",title:"Unified SLO Calculator",summary:"Merged SLO Calculator + Error Budget into 3-tab interface",description:`Consolidated SLO Calculator and Error Budget Burndown into one project with three tabs:

- What can I achieve? (response time inputs directly visible)
- Can I meet this SLO? (collapsible config)
- Budget Burndown (full chart view)

Removed 2,700+ lines of redundant code. Collapsible configuration for target/burndown tabs, direct inputs for achievable tab.
`,labels:["PR #145","PR #146","Feature","SRE"],checklist:[{id:"ust-1",text:"Create unified calculations.ts",completed:!0},{id:"ust-2",text:"Create SloConfiguration with period selector",completed:!0},{id:"ust-3",text:"Create ResponseTimeInputs with toggles",completed:!0},{id:"ust-4",text:"Create BudgetChart (compact/full modes)",completed:!0},{id:"ust-5",text:"Create AchievableTab",completed:!0},{id:"ust-6",text:"Create TargetTab",completed:!0},{id:"ust-7",text:"Create BurndownTab",completed:!0},{id:"ust-8",text:"Add to project registry",completed:!0},{id:"ust-9",text:"Remove old SLO Calculator and Error Budget Burndown",completed:!0}],planFile:"docs/plans/32-unified-slo-tool.md",createdAt:"2026-01-16T00:00:00.000Z",updatedAt:"2026-01-16T23:00:00.000Z",history:[{type:"column",timestamp:"2026-01-16T20:45:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-16T21:00:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-16T23:45:00.000Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-16T23:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"slo-burndown-integration",title:"SLO Calculator Burndown Integration",description:`Add 'SLO Burndown' tab to SLO Uptime Calculator. Reuse BurndownChart from Error Budget Burndown, generate simulated incidents from 'incidents per month' input.
`,labels:["PR #142","Enhancement","SRE"],checklist:[{id:"sbi-1",text:"Export BurndownChart and calculations from error-budget-burndown",completed:!0},{id:"sbi-2",text:"Create SloBurndownPanel component",completed:!0},{id:"sbi-3",text:"Add generateSimulatedIncidents helper",completed:!0},{id:"sbi-4",text:"Add 'SLO Burndown' tab to UptimeCalculator",completed:!0},{id:"sbi-5",text:"Wire up inputs and add burn rate summary",completed:!0},{id:"sbi-6",text:"Mobile responsive check",completed:!0}],planFile:"docs/plans/27-slo-calculator-burndown-integration.md",createdAt:"2026-01-17",updatedAt:"2026-01-16T20:15:00.000Z",history:[{type:"column",timestamp:"2026-01-17T14:10:00.000Z",columnId:"todo",columnTitle:"To Do"},{type:"column",timestamp:"2026-01-16T18:48:53.156Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-16T18:48:53.165Z",columnId:"todo",columnTitle:"To Do"},{type:"column",timestamp:"2026-01-16T18:48:53.187Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-16T19:30:00.000Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-16T20:15:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"precommit-hooks",title:"Pre-commit Hooks (Husky + lint-staged)",description:`Add Husky + lint-staged for pre-commit hooks. Runs ESLint with auto-fix on staged TS/JS files before every commit.
`,labels:["PR #137","Infrastructure","DX"],checklist:[{id:"pch-1",text:"Install husky and lint-staged",completed:!0},{id:"pch-2",text:"Initialize husky and create pre-commit hook",completed:!0},{id:"pch-3",text:"Add lint-staged config to package.json",completed:!0},{id:"pch-4",text:"Test with intentional lint error",completed:!0},{id:"pch-5",text:"Verify normal commits work",completed:!0}],createdAt:"2026-01-16T19:30:00.000Z",updatedAt:"2026-01-16T20:00:00.000Z",history:[{type:"column",timestamp:"2026-01-16T19:30:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-16T19:45:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-16T19:55:00.000Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-16T20:00:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"kanban-external-change-detection",title:"Kanban External Change Detection",summary:"Toast notification when board is updated externally",description:`Detect when board is updated externally (e.g., by Claude commits). Check on tab focus + every 15s while visible. Show toast with reload button to prevent save conflicts.
`,labels:["PR #141","UX","Kanban"],checklist:[{id:"ecd-1",text:"Add checkForExternalChanges callback",completed:!0},{id:"ecd-2",text:"Add visibility change listener and 15s polling",completed:!0},{id:"ecd-3",text:"Show Sonner toast with reload action",completed:!0},{id:"ecd-4",text:"Use toast ID to prevent duplicates",completed:!0},{id:"ecd-5",text:"Clean up interval and listener on unmount",completed:!0},{id:"ecd-6",text:"Test external change detection",completed:!0}],planFile:"docs/plans/30-kanban-external-change-detection.md",createdAt:"2026-01-16T20:15:00.000Z",updatedAt:"2026-01-16T18:50:00.000Z",history:[{type:"column",timestamp:"2026-01-16T20:15:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-16T18:45:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-16T18:50:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"gr9qef9",title:"Change Log Explorer Project",description:`Visualize completed work from kanban changelog and archive. Rich expandable cards with PR links, plan file content, and completion history.
`,labels:["PR #140","Feature","Meta"],checklist:[{id:"cle-1",text:"Create useChangelogData hook to fetch and merge data",completed:!0},{id:"cle-2",text:"Create ChangelogExplorer main component",completed:!0},{id:"cle-3",text:"Create ChangelogCard with expand/collapse animation",completed:!0},{id:"cle-4",text:"Create ExpandedDetails with plan rendering",completed:!0},{id:"cle-5",text:"Add filter controls and PR link badges",completed:!0},{id:"cle-6",text:"Add to project registry with route",completed:!0},{id:"cle-7",text:"Mobile responsive layout and loading skeletons",completed:!0}],planFile:"docs/plans/28-changelog-explorer-project.md",createdAt:"2026-01-16T14:45:36.426Z",updatedAt:"2026-01-16T18:35:00.000Z",history:[{type:"column",timestamp:"2026-01-16T14:45:36.426Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-16T17:50:00.000Z",columnId:"todo",columnTitle:"To Do"},{type:"column",timestamp:"2026-01-16T21:00:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-16T18:14:27.000Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-16T18:35:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"kanban-url-cleanup",title:"Kanban URL Simplification",description:"Remove URL state persistence, keep just `?board=roadmap`. Add deep linking with `?card=id` to open specific cards on load.\n",labels:["PR #139","Cleanup","UX"],checklist:[{id:"kus-1",text:"Delete useKanbanPersistence.ts",completed:!0},{id:"kus-2",text:"Remove URL persistence from KanbanBoard.tsx",completed:!0},{id:"kus-3",text:"Add initialCardId prop and auto-open logic",completed:!0},{id:"kus-4",text:"Update index.tsx to read card param",completed:!0},{id:"kus-5",text:"Update Share button to copy clean URL",completed:!0},{id:"kus-6",text:"Add Copy Card Link to card menu",completed:!0},{id:"kus-7",text:"Remove lz-string dependency",completed:!0}],planFile:"docs/plans/29-kanban-url-simplification.md",createdAt:"2026-01-16T17:55:00.000Z",updatedAt:"2026-01-16T18:14:27.000Z",history:[{type:"column",timestamp:"2026-01-16T17:55:00.000Z",columnId:"ideas",columnTitle:"Ideas"},{type:"column",timestamp:"2026-01-16T18:05:00.000Z",columnId:"todo",columnTitle:"To Do"},{type:"column",timestamp:"2026-01-16T21:00:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-16T18:14:27.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"preview-deploys",title:"Preview Deployments",description:`Deploy PRs to unique preview URLs via Cloudflare Pages. Enables visual review before merge.

Preview URL: https://personal-website-adg.pages.dev
Branch pattern: <branch>.personal-website-adg.pages.dev
`,labels:["Infrastructure"],checklist:[{id:"pd-1",text:"Set up Cloudflare Pages with GitHub repo",completed:!0},{id:"pd-2",text:"Configure preview URL pattern",completed:!0},{id:"pd-3",text:"Create PR comment workflow with preview link",completed:!0},{id:"pd-4",text:"Configure environment variables (disable analytics in preview)",completed:!0},{id:"pd-5",text:"Add PreviewBanner component for visual indicator",completed:!0}],planFile:"docs/plans/10-preview-deployments.md",createdAt:"2026-01-13",updatedAt:"2026-01-16T03:35:00.000Z",history:[{type:"column",timestamp:"2026-01-16T02:58:32.294Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-16T03:22:00.000Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-16T03:35:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"kanban-giscus",title:"Kanban Card Comments",description:`Add giscus discussion threads to kanban cards. Reuse existing blog Comments pattern with theme matching. Also fixed blog Comments to use ThemeContext.
`,labels:["PR #131","Feature"],checklist:[{id:"gc-1",text:"Create reusable CardComments component",completed:!0},{id:"gc-2",text:"Add theme matching (sync with site dark/light mode)",completed:!0},{id:"gc-3",text:"Add to CardEditorModal with lazy loading",completed:!0},{id:"gc-4",text:"Use card.id as discussion term",completed:!0},{id:"gc-5",text:"Test theme switching and comment persistence",completed:!0}],planFile:"docs/plans/25-kanban-card-comments.md",createdAt:"2026-01-16",updatedAt:"2026-01-16T02:30:00.000Z",history:[{type:"column",timestamp:"2026-01-16T02:20:00.000Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-16T02:25:00.000Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-16T02:30:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"sentry-enhancement",title:"Sentry Error Tracking Enhancement",description:`Source maps for readable stack traces, React error boundaries, release tracking, and improved debugging context.

Codex Review of PR #130:
- High (fixed): Sentry lazy loading inconsistency - ErrorBoundary imported but Sentry.init deferred. Fixed: now initializes synchronously before render.
- Medium (fixed): Source maps publicly served exposing source code. Fixed: using hidden sourcemaps + delete after Sentry upload.
`,labels:["PR #130","Observability"],checklist:[{id:"se-1",text:"Install @sentry/cli and add auth token to GitHub secrets",completed:!0},{id:"se-2",text:"Add source map upload to deploy workflow",completed:!0},{id:"se-3",text:"Wrap App in Sentry.ErrorBoundary with fallback UI",completed:!0},{id:"se-4",text:"Add release tracking with commit SHA",completed:!0},{id:"se-5",text:"Verify source maps appear in Sentry dashboard",completed:!0}],planFile:"docs/plans/23-sentry-error-tracking.md",createdAt:"2026-01-15",updatedAt:"2026-01-16T02:10:00.000Z",history:[{type:"column",timestamp:"2026-01-16T01:22:48.676Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-16T01:41:18.527Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-16T02:10:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"analytics-dedupe",title:"Analytics Data Deduplication",description:`Deduplicate time-series data in useAnalyticsData hook. ga4-history.json has multiple entries per date from automated collection.
`,labels:["Small","Bug Fix"],checklist:[{id:"ad-1",text:"Add deduplicateByDate helper function",completed:!0},{id:"ad-2",text:"Apply to ga4History and searchHistory data",completed:!0},{id:"ad-3",text:"Verify charts show one point per date",completed:!0}],planFile:"docs/plans/24-analytics-data-deduplication.md",createdAt:"2026-01-15",updatedAt:"2026-01-16T01:35:00.000Z",history:[{type:"column",timestamp:"2026-01-15T12:00:00.000Z",columnId:"todo",columnTitle:"To Do"},{type:"column",timestamp:"2026-01-16T01:22:46.568Z",columnId:"in-progress",columnTitle:"In Progress"},{type:"column",timestamp:"2026-01-16T01:22:46.910Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-16T01:35:00.000Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"pr-127",title:"Kanban Board Save Feature",description:`GitHub OAuth login, Cloudflare Worker proxy, save to GitHub via Actions. Includes conflict detection, unsaved changes warning.
`,labels:["PR #127","Feature"],checklist:[],createdAt:"2026-01-15T00:00:00.000Z",updatedAt:"2026-01-15T23:03:36.667Z",history:[{type:"column",timestamp:"2026-01-15T22:29:58.815Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-15T23:03:36.401Z",columnId:"changelog",columnTitle:"Change Log"},{type:"column",timestamp:"2026-01-15T23:03:36.413Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-15T23:03:36.443Z",columnId:"changelog",columnTitle:"Change Log"},{type:"column",timestamp:"2026-01-15T23:03:36.465Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-15T23:03:36.489Z",columnId:"changelog",columnTitle:"Change Log"},{type:"column",timestamp:"2026-01-15T23:03:36.509Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-15T23:03:36.532Z",columnId:"changelog",columnTitle:"Change Log"},{type:"column",timestamp:"2026-01-15T23:03:36.555Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-15T23:03:36.579Z",columnId:"changelog",columnTitle:"Change Log"},{type:"column",timestamp:"2026-01-15T23:03:36.599Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-15T23:03:36.622Z",columnId:"changelog",columnTitle:"Change Log"},{type:"column",timestamp:"2026-01-15T23:03:36.643Z",columnId:"in-review",columnTitle:"In Review"},{type:"column",timestamp:"2026-01-15T23:03:36.667Z",columnId:"changelog",columnTitle:"Change Log"}]},{id:"jan-14-15",title:"Jan 14-15: Infrastructure & Polish",description:`View Transitions API, RUM with web-vitals, CI/CD improvements with PR checks, Container Queries, MCP testing workflows
`,labels:["PR #109","PR #113","PR #115-117"],checklist:[],createdAt:"2026-01-15T00:00:00.000Z",history:[]},{id:"pr-124",title:"React Performance Optimizations",description:`Analytics CLS 0.71→0.10, scroll throttling, React.memo, lazy-loaded charts, skeleton loaders
`,labels:["PR #124","Performance"],checklist:[],createdAt:"2026-01-15T00:00:00.000Z",history:[]},{id:"pr-125",title:"Dynamic PR Status Indicator",description:`Live CI status for In Review cards via GitHub API, merged icon for changelog PRs
`,labels:["PR #125","UX"],checklist:[],createdAt:"2026-01-15T00:00:00.000Z",history:[]},{id:"pr-126",title:"Framer Motion Animations",description:`Stagger animations for grids, scroll reveals, tab transitions, mobile nav stagger. Respects prefers-reduced-motion.
`,labels:["PR #126","UX"],checklist:[],planFile:"docs/plans/11-framer-motion-animations.md",createdAt:"2026-01-15T00:00:00.000Z",history:[]},{id:"jan-14",title:"Jan 14: Kanban & UX",description:`Kanban board with drag-and-drop, card colors, House Projects board, performance budgets, ARIA live regions, deploy notifications
`,labels:["PR #97-108"],checklist:[],createdAt:"2026-01-14T00:00:00.000Z",history:[]},{id:"renovate-wontdo",title:"Renovate Automation",description:`Decided against: overhead not justified for actively-maintained personal project. Manual npm update works fine.
`,labels:["Won't Do"],checklist:[],planFile:"docs/plans/07-renovate-automation.md",createdAt:"2026-01-14T00:00:00.000Z",history:[]},{id:"jan-13",title:"Jan 13: Analytics & Accessibility",description:`Analytics Dashboard, On-Call Coverage Explorer, Skip Navigation, Footer/Nav cleanup
`,labels:["PR #94","PR #96"],checklist:[],createdAt:"2026-01-13T00:00:00.000Z",history:[]},{id:"jan-12",title:"Jan 12: Projects Page Launch",description:`SLO Calculator, Status Page Generator, registry pattern
`,labels:["PR #88-92"],checklist:[],createdAt:"2026-01-12T00:00:00.000Z",history:[]},{id:"jan-11",title:"Jan 11: MDX Precompilation",description:`Blog LCP 5.6s → 3.1s (45% faster)
`,labels:["PR #84","Performance"],checklist:[],createdAt:"2026-01-11T00:00:00.000Z",history:[]},{id:"jan-8",title:"Jan 8: Blog Phase 4 & 5",description:`Comments, syntax highlighting, RSS, structured data
`,labels:["Feature"],checklist:[],createdAt:"2026-01-08T00:00:00.000Z",history:[]},{id:"jan-6-7",title:"Jan 6-7: Node.js v24 + Perf",description:`55 → 98 Lighthouse, system fonts, Radix cleanup
`,labels:["Performance"],checklist:[],createdAt:"2026-01-07T00:00:00.000Z",history:[]}]}],createdAt:"2026-01-16T14:45:27.429Z",updatedAt:"2026-07-24T13:30:12.451Z"},t=Object.freeze(Object.defineProperty({__proto__:null,board:e},Symbol.toStringTag,{value:"Module"}));export{t as _};
