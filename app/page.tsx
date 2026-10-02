const EMAIL = "nishantghosle7@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/nishant-ghosle-b28a14247"; // TODO: add your LinkedIn URL

const nav = ["About", "Experience", "Projects", "Skills", "Contact"];

const stats = [
  { v: "3 yrs", l: "building production software" },
  { v: "10K+", l: "concurrent users served" },
  { v: "89%", l: "context precision in RAG" },
  { v: "−45%", l: "agent workflow failures" },
];

const pillars = [
  { t: "AI engineering", d: "RAG pipelines, multi-step agents, structured outputs, and evaluation loops that catch regressions." },
  { t: "Backend engineering", d: "FastAPI and Node.js microservices, async workers, caching, and secure APIs with RBAC." },
  { t: "Cloud infrastructure", d: "Dockerised releases, CI/CD on AWS, and observability so systems stay debuggable." },
];

const jobs = [
  {
    org: "Pqxel Inc", role: "Full Stack AI Engineer", when: "Jan 2024 – Present", where: "Canada, Remote",
    points: [
      "Built enterprise RAG pipelines on FastAPI, LangChain and pgvector; hybrid retrieval lifted context precision from 68% to 89% and cut hallucinations by 32%.",
      "Engineered stateful LangGraph and Celery agent workflows, reducing execution failures by 45%.",
      "Scaled Node.js and FastAPI services to 10K+ concurrent users while holding p95 latency.",
      "Added Redis caching and tuned MongoDB aggregations, reducing server load by 35%.",
    ],
  },
  {
    org: "InfusAi Solutions", role: "Associate Consultant", when: "Sep 2023 – Dec 2023", where: "Bhopal, India",
    points: [
      "Built REST microservices in Node.js and FastAPI, plus Python automation engines.",
      "Resolved 20+ critical backend and concurrency bugs, improving availability.",
      "Integrated secure payment and third-party business APIs.",
    ],
  },
];

const projects = [
  {
    name: "Enterprise RAG Knowledge Hub",
    d: "End-to-end RAG with hybrid semantic retrieval, Redis semantic caching, SSE token streaming, and a Ragas + LangSmith evaluation pipeline for regression testing.",
    m: [["+85%", "retrieval relevance"], ["−38%", "LLM token cost"]],
    tech: ["FastAPI", "LangChain", "pgvector", "Redis", "Ragas", "React"],
    flow: ["Query", "Hybrid retrieve", "Rerank", "LLM", "Evaluate"],
  },
  {
    name: "Agentic AI Workflow System",
    d: "Multi-agent LangGraph workflows with dynamic tool calling, structured-output validation, self-healing steps, and Redis checkpointing that survives worker restarts.",
    m: [["−40%", "tool execution failures"], ["0", "lost runs on restart"]],
    tech: ["LangGraph", "LangChain", "FastAPI", "Redis", "OpenAI", "React"],
    flow: ["Plan", "Tool call", "Validate", "Recover", "Checkpoint"],
  },
  {
    name: "AI-Powered Job Portal Platform",
    d: "Semantic matching across 10k+ listings, a resume ingestion pipeline using Structured Outputs and Pydantic, and distributed parsing and indexing with Celery.",
    m: [["+45%", "match relevance"], ["−60%", "onboarding latency"]],
    tech: ["FastAPI", "pgvector", "Celery", "Redis", "Pydantic", "OpenAI"],
    flow: ["Upload", "Parse", "Embed", "Index", "Match"],
  },
  {
    name: "Real-Time Booking Engine",
    d: "Concurrent reservations with Redis distributed locks and atomic operations to prevent double-booking, plus Stripe webhooks with idempotency keys and retries.",
    m: [["0", "double bookings"], ["Idempotent", "payment handling"]],
    tech: ["Node.js", "React", "Redis", "MongoDB", "Stripe"],
    flow: ["Request", "Lock", "Reserve", "Pay", "Confirm"],
  },
];

const skills: Record<string, string[]> = {
  "AI & LLMs": ["Generative AI", "RAG", "LLMs", "Agentic AI", "LangChain", "LangGraph", "MCP", "OpenAI"],
  Backend: ["Python", "FastAPI", "Node.js"],
  Frontend: ["React", "JavsScript", "TypeScript", "NextJS"],
  Data: ["PostgreSQL", "pgvector", "MongoDB", "Redis", "Pinecone"],
  Cloud: ["AWS", "Docker", "CI/CD"],
};

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs text-mute" aria-label="Workflow">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className="rounded border border-line bg-paper px-2 py-1 text-ink">{s}</span>
          {i < steps.length - 1 && <span aria-hidden className="h-px w-4 bg-accent/60" />}
        </li>
      ))}
    </ol>
  );
}

function HeroVisual() {
  const nodes = [["Query", 20], ["Retrieve", 110], ["Reason", 200], ["Verify", 290]] as const;
  return (
    <svg viewBox="0 0 520 330" role="img" aria-label="Diagram of an AI workflow: query, retrieve, reason, verify" className="w-full max-w-md">
      <path className="draw" d="M70 60 C 70 110, 160 90, 160 140 S 250 170, 250 220 S 340 250, 340 290" fill="none" stroke="#3D6B73" strokeWidth="1.5" />
      {nodes.map(([label, y], i) => {
        const x = 40 + i * 90;
        return (
          <g key={label}>
            <rect x={x} y={y} width="150" height="44" rx="4" fill="#F7F6F3" stroke="#E2E0D9" />
            <circle cx={x + 18} cy={y + 22} r="4" fill="#3D6B73" />
            <text x={x + 34} y={y + 26} fontSize="13" fill="#151515" fontFamily="var(--font-mono)">{label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function Heading({ id, children, note }: { id: string; children: React.ReactNode; note?: string }) {
  return (
    <div className="mb-12 grid gap-2 md:grid-cols-[12rem_1fr]">
      <p className="font-mono text-sm text-accent">{note}</p>
      <h2 id={id} className="font-display text-3xl font-medium tracking-tight md:text-4xl">{children}</h2>
    </div>
  );
}

const wrap = "mx-auto w-full max-w-5xl px-6";
const btn = "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-paper focus:p-2">Skip to content</a>
      <header className="sticky top-0 z-10 border-b border-line bg-paper/95 backdrop-blur-sm">
        <nav className={`${wrap} flex h-16 items-center justify-between`} aria-label="Primary">
          <a href="#top" className="font-display text-lg font-medium">Nishant Ghosle</a>
          <ul className="hidden items-center gap-7 text-sm text-mute md:flex">
            {nav.map((n) => (<li key={n}><a className="hover:text-ink" href={`#${n.toLowerCase()}`}>{n}</a></li>))}
          </ul>
          <a href="#contact" className={`${btn} bg-ink text-paper hover:bg-accent`}>Let&rsquo;s talk</a>
        </nav>
      </header>

      <main id="main">
        <section id="top" className={`${wrap} grid items-center gap-12 py-20 md:grid-cols-[1.3fr_1fr] md:py-32`}>
          <div>
            <p className="mb-6 font-mono text-sm text-mute">Senior Full-Stack AI Engineer · Bhopal, India</p>
            <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              Building intelligent systems that turn LLMs into <span className="font-serif italic font-normal">real products.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
              I design RAG pipelines, agentic workflows, and the backend infrastructure behind them, with a focus on retrieval quality, reliability, and latency.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className={`${btn} bg-ink text-paper hover:bg-accent`}>View projects</a>
              <a href="#contact" className={`${btn} border border-ink hover:bg-ink hover:text-paper`}>Let&rsquo;s connect</a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end"><HeroVisual /></div>
        </section>

        <section id="about" aria-labelledby="about-h" className={`${wrap} border-t border-line py-20`}>
          <Heading id="about-h" note="About">Production AI sits on top of solid engineering.</Heading>
          <div className="grid gap-12 md:grid-cols-[12rem_1fr]">
            <div />
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-mute">
                I&rsquo;m an AI engineer with three years of experience shipping Generative AI products on high-scale backends. I like the unglamorous parts that make LLM features trustworthy: hybrid retrieval, evaluation, recovery, and caching.
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                {pillars.map((p) => (
                  <div key={p.t} className="border-t border-ink pt-4">
                    <h3 className="font-display text-lg font-medium">{p.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{p.d}</p>
                  </div>
                ))}
              </div>
              <dl className="mt-12 grid grid-cols-2 gap-y-8 md:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.l}>
                    <dt className="font-display text-3xl font-medium">{s.v}</dt>
                    <dd className="mt-1 max-w-[10rem] text-sm text-mute">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="exp-h" className={`${wrap} border-t border-line py-20`}>
          <Heading id="exp-h" note="Experience">Where I&rsquo;ve built.</Heading>
          <div className="space-y-12">
            {jobs.map((j) => (
              <article key={j.org} className="grid gap-4 md:grid-cols-[12rem_1fr]">
                <p className="font-mono text-sm text-mute">{j.when}<br />{j.where}</p>
                <div>
                  <h3 className="font-display text-xl font-medium">{j.org}</h3>
                  <p className="text-accent">{j.role}</p>
                  <ul className="mt-4 max-w-2xl space-y-2 text-mute">
                    {j.points.map((p) => (<li key={p} className="flex gap-3 leading-relaxed"><span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-accent" />{p}</li>))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="proj-h" className={`${wrap} border-t border-line py-20`}>
          <Heading id="proj-h" note="Projects">Selected work.</Heading>
          <div className="space-y-px overflow-hidden rounded-lg border border-line bg-line">
            {projects.map((p) => (
              <article key={p.name} className="grid gap-6 bg-paper p-6 md:grid-cols-[1fr_16rem] md:p-8">
                <div>
                  <h3 className="font-display text-2xl font-medium">{p.name}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-mute">{p.d}</p>
                  <div className="mt-6"><Flow steps={p.flow} /></div>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                    {p.tech.map((t) => (<li key={t} className="font-mono text-xs text-mute before:mr-2 before:text-accent before:content-['/']">{t}</li>))}
                  </ul>
                </div>
                <dl className="grid grid-cols-2 gap-4 self-start md:grid-cols-1">
                  {p.m.map(([v, l]) => (
                    <div key={l} className="border-l border-accent pl-4">
                      <dt className="font-display text-2xl font-medium">{v}</dt>
                      <dd className="text-sm text-mute">{l}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-h" className={`${wrap} border-t border-line py-20`}>
          <Heading id="skills-h" note="Skills">Tools I reach for.</Heading>
          <div className="space-y-6">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="grid gap-3 border-b border-line pb-6 md:grid-cols-[12rem_1fr]">
                <h3 className="font-mono text-sm text-mute">{group}</h3>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 font-display text-lg">
                  {items.map((i) => (<li key={i}>{i}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="phil-h" className="border-y border-line bg-ink py-24 text-paper">
          <div className={wrap}>
            <h2 id="phil-h" className="sr-only">Philosophy</h2>
            <blockquote className="max-w-3xl font-serif text-3xl leading-snug sm:text-4xl md:text-5xl">
              Production AI is not just about the model. It&rsquo;s about retrieval, reliability, evaluation, latency, and the systems around it.
            </blockquote>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-h" className={`${wrap} py-24`}>
          <h2 id="contact-h" className="font-display text-4xl font-medium tracking-tight md:text-6xl">Let&rsquo;s build something intelligent.</h2>
          <p className="mt-5 text-lg text-mute">Open to remote roles and consulting engagements.</p>
          <dl className="mt-10 grid max-w-xl gap-4 text-lg">
            <div className="flex gap-6 border-b border-line pb-3"><dt className="w-24 font-mono text-sm text-mute">Email</dt><dd><a className="underline decoration-accent underline-offset-4" href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
            <div className="flex gap-6 border-b border-line pb-3"><dt className="w-24 font-mono text-sm text-mute">LinkedIn</dt><dd><a className="underline decoration-accent underline-offset-4" href={LINKEDIN} rel="noopener noreferrer" target="_blank">Connect on LinkedIn</a></dd></div>
            <div className="flex gap-6 border-b border-line pb-3"><dt className="w-24 font-mono text-sm text-mute">Location</dt><dd>Bhopal, India</dd></div>
            <div className="flex gap-6"><dt className="w-24 font-mono text-sm text-mute">Availability</dt><dd>Remote, worldwide time zones</dd></div>
          </dl>
        </section>
      </main>

      <footer className={`${wrap} border-t border-line py-8 font-mono text-xs text-mute`}>
        © {new Date().getFullYear()} Nishant Ghosle
      </footer>
    </>
  );
}
