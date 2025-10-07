import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import resumePdf from './assets/Resume_v1.pdf'
import CodeIcon from '@mui/icons-material/Code'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import TerminalIcon from '@mui/icons-material/Terminal'
import ApiIcon from '@mui/icons-material/Api'
import BuildIcon from '@mui/icons-material/Build'
import StorageIcon from '@mui/icons-material/Storage'
import BoltIcon from '@mui/icons-material/Bolt'
import { Typewriter } from 'react-simple-typewriter'
import logoUrl from './assets/philtech..svg'
import iotImg from './assets/images/iot.png'
import personalizedImg from './assets/images/personalizedwebsite.png'
import resortImg from './assets/images/reservationresort.png'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur animate-fadeIn">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
          <a href="#home" className="flex items-center">
            <img src={logoUrl} alt="PhilTech" className="h-12 w-auto" />
          </a>
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <a href="#projects" className="text-zinc-300 hover:text-white">Projects</a>
            <a href="#services" className="text-zinc-300 hover:text-white">Services</a>
            <a href="#about" className="text-zinc-300 hover:text-white">About</a>
            <a href="#skills" className="text-zinc-300 hover:text-white">Skills</a>
            <a href="#experience" className="text-zinc-300 hover:text-white">Experience</a>
            <a href="#education" className="text-zinc-300 hover:text-white">Education</a>
            <a href="#faq" className="text-zinc-300 hover:text-white">FAQ</a>
            <a href="#contact" className="text-zinc-300 hover:text-white">Contact</a>
            <a href="#home" className="ml-4 inline-flex">
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl items-center px-8 py-16 sm:py-20">
        {/* Tech grid background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="animated-gradient" />
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.10),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.10),transparent_45%),radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.10),transparent_42%),radial-gradient(circle_at_90%_90%,rgba(14,165,233,0.10),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-fuchsia-500/10 to-emerald-500/5" />
        </div>
        <div className="grid w-full items-center gap-14 sm:grid-cols-2">
          <div className="animate-slideUp">
            <p className="text-sm uppercase tracking-widest text-zinc-400">Web Developer</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-r from-white via-zinc-300 to-white bg-clip-text text-transparent whitespace-nowrap">
                <Typewriter
                  words={["Antoine Philipp Ochea","Antoine Philipp"]}
                  loop={0}
                  typeSpeed={85}
                  deleteSpeed={50}
                  delaySpeed={1200}
                  cursor
                  cursorStyle="|"
                />
              </span>
            </h1>
            <p className="mt-3 text-lg text-zinc-300">
              I turn ideas into production‑ready apps with clarity, performance, and maintainability.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:from-indigo-400 hover:to-fuchsia-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/40"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/40"
              >
                Contact Me
              </a>
              <a
                href={resumePdf}
                download
                className="rounded-lg bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/40"
              >
                Download Resume
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/antoinephil" target="_blank" rel="noreferrer" className="text-zinc-400 transition hover:text-white">
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </a>
              <a aria-label="Facebook" href="https://www.facebook.com/antoine.philipp.ochea" target="_blank" rel="noreferrer" className="text-zinc-400 transition hover:text-white">
                <FacebookIcon sx={{ fontSize: 20 }} />
              </a>
              <a aria-label="Twitter" href="https://x.com/zyukirax" target="_blank" rel="noreferrer" className="text-zinc-400 transition hover:text-white">
                <TwitterIcon sx={{ fontSize: 20 }} />
              </a>
              <a aria-label="Email" href="mailto:antoineochea0321@gmail.com" className="text-zinc-400 transition hover:text-white">
                <EmailIcon sx={{ fontSize: 20 }} />
              </a>
              <a aria-label="GitHub" href="https://github.com/Anoncasphil" className="text-zinc-400 transition hover:text-white">
                <GitHubIcon sx={{ fontSize: 20 }} />
        </a>
      </div>
          </div>
          <div className="relative hidden justify-end sm:flex animate-fadeIn">
            <div className="w-full max-w-sm rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 backdrop-blur">
              <p className="text-sm font-medium text-white">Student Developer</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-zinc-800/60 p-3">
                  <p className="text-xs text-zinc-400">Status</p>
                  <p className="text-base font-semibold text-white">Student</p>
                </div>
                <div className="rounded-lg border border-zinc-800/60 p-3">
                  <p className="text-xs text-zinc-400">Location</p>
                  <p className="text-base font-semibold text-white">PH</p>
                </div>
                <div className="rounded-lg border border-zinc-800/60 p-3">
                  <p className="text-xs text-zinc-400">Focus</p>
                  <p className="text-base font-semibold text-white">Full‑Stack</p>
                </div>
                <div className="rounded-lg border border-zinc-800/60 p-3">
                  <p className="text-xs text-zinc-400">Available</p>
                  <p className="text-base font-semibold text-white">Internships</p>
                </div>
              </div>
              
            </div>
            <span className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
            <span className="pointer-events-none absolute -right-10 bottom-0 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-2xl" />
            <span className="pointer-events-none absolute left-1/3 -bottom-6 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-8 py-20">
        <div className="mb-8">
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(236,72,153,0.15)]">
                Projects
              </span>
            </h2>
          </div>
          <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-fuchsia-500/70 via-indigo-500/70 to-emerald-400/70" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Sustainable IoT-Based Water Monitoring and Management',
              img: iotImg,
              tech: ['PHP', 'MySQL', 'Arduino', 'C++', 'JavaScript', 'Git'],
              href: '#',
              desc:
                'An IoT-driven web platform for real‑time monitoring of turbidity, TDS, pH, and temperature. Includes automated control routines that filter and dispense water based on sensor thresholds to promote sustainable usage.'
            },
            {
              title: 'Resort Reservation System',
              img: resortImg,
              tech: ['PHP', 'MySQL', 'JavaScript', 'Git', 'Docker'],
              href: '#',
              desc:
                'A reservation website for an eco‑resort featuring bookings, availability management, and administrative tools. Designed for reliability and smooth guest workflow.'
            },
            {
              title: 'Personalized Company Website with Inventory Management',
              img: personalizedImg,
              tech: ['PHP', 'MySQL', 'JavaScript', 'Git'],
              href: '#',
              desc:
                'An auto‑supply business website integrated with a basic inventory module for tracking products and stock levels, aimed at improving browsing and day‑to‑day operations.'
            },
          ].map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:bg-zinc-900/50 animate-slideUp"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <a
                href={p.href}
                className="outline-none"
                aria-label={`${p.title} project`}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold tracking-tight text-white">{p.title}</h3>
                    <OpenInNewIcon sx={{ fontSize: 18 }} className="text-zinc-400 transition-colors group-hover:text-white" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-zinc-300 ring-1 ring-white/10"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-zinc-300 ring-1 ring-white/10">+{p.tech.length - 4}</span>
                    )}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-8 py-20">
        <h2 className="text-3xl font-semibold tracking-tight"><span className="bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">About</span></h2>
        <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/30 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-sm">
          <p className="max-w-3xl text-zinc-300">
            BSIT student at National University Manila (Mobile & Internet Technology). Built a Resort
            Reservation System and other academic projects; comfortable with React, TypeScript, Node.js,
            MySQL, and Tailwind. Seeking internship opportunities to grow as a full‑stack developer.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-8 py-20">
        <h2 className="text-3xl font-semibold tracking-tight"><span className="bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">Skills</span></h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {[
            { name: 'React', Icon: CodeIcon },
            { name: 'TypeScript', Icon: IntegrationInstructionsIcon },
            { name: 'JavaScript', Icon: BoltIcon },
            { name: 'Node.js', Icon: TerminalIcon },
            { name: 'APIs', Icon: ApiIcon },
            { name: 'CSS / Tailwind', Icon: BuildIcon },
            { name: 'Databases', Icon: StorageIcon },
            { name: 'General Web', Icon: CodeIcon },
          ].map((s, i) => (
            <div key={s.name} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 ring-1 ring-white/5 animate-slideUp" style={{ animationDelay: `${i * 70}ms` }}>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10">
                <s.Icon sx={{ fontSize: 16 }} />
              </span>
              {s.name}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-8 py-20">
        <h2 className="text-3xl font-semibold tracking-tight"><span className="bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">Services</span></h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: 'Web App Development', desc: 'Modern, performant React/TS apps.' , Icon: CodeIcon },
            { title: 'API & Integrations', desc: 'Robust REST integrations and backends.', Icon: ApiIcon },
            { title: 'UI Engineering', desc: 'Accessible, responsive interfaces.', Icon: BuildIcon },
          ].map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-zinc-900/50 animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-white ring-1 ring-white/10"><s.Icon sx={{ fontSize: 18 }} /></span>
                <h3 className="text-base font-medium">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-8 py-20">
        <h2 className="text-3xl font-semibold tracking-tight"><span className="bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">Experience</span></h2>
        <ol className="mt-6 space-y-6">
          {[
            { role: 'Reservation System Developer (Capstone)', company: 'National University Fairview', period: 'Mar 2025', summary: 'Resort reservation system with booking, payments, and admin features. Backend with Node.js + MySQL.' },
            { role: 'Social Media Manager', company: 'Codability Tech Student Organization', period: '2023', summary: 'Managed content and campaigns for tech events; improved visibility and attendance.' },
            { role: 'School Event Volunteer', company: 'National University Fairview', period: 'Jan 2023', summary: 'Supported event logistics, setup, and coordination with peers and faculty.' },
            { role: 'Intern', company: 'Hytec Power Inc.', period: '2022', summary: 'Assisted in testing, maintenance, troubleshooting, and documentation.' },
          ].map((e, i) => (
            <li key={e.role} className="relative rounded-2xl border border-white/10 bg-zinc-900/30 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-sm animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">{e.role} · <span className="text-zinc-400">{e.company}</span></h3>
                <span className="text-xs text-zinc-400">{e.period}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{e.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="mx-auto max-w-6xl px-8 py-20">
        <h2 className="text-3xl font-semibold tracking-tight"><span className="bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">Education & Certifications</span></h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-sm animate-fadeIn">
            <h3 className="text-base font-medium">BS Information Technology — Mobile & Internet Technology</h3>
            <p className="mt-1 text-sm text-zinc-400">National University Manila · Aug 2022 — Present</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-sm animate-fadeIn" style={{ animationDelay: '100ms' }}>
            <h3 className="text-base font-medium">Senior High School — STEM</h3>
            <p className="mt-1 text-sm text-zinc-400">St. Francis Technical Institute · Jun 2020 — Jul 2022</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-8 py-20">
        <h2 className="text-3xl font-semibold tracking-tight"><span className="bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">Testimonials</span></h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[1,2].map((i) => (
            <blockquote key={i} className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5 italic text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-sm animate-fadeIn" style={{ animationDelay: `${i * 80}ms` }}>
              “Antoine delivered excellent work on time. Great communication and attention to detail.”
              <footer className="mt-3 text-sm not-italic text-zinc-400">— Client Name, Role</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-8 py-20">
        <h2 className="text-3xl font-semibold tracking-tight"><span className="bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">FAQ</span></h2>
        <div className="mt-6 space-y-3">
          {[
            { q: 'What services do you offer?', a: 'End-to-end web development: frontend, APIs, and integrations.' },
            { q: 'Are you available for freelance?', a: 'Yes—feel free to reach out with scope and timelines.' },
            { q: 'Preferred stack?', a: 'React, TypeScript, Node.js, Tailwind, and Vite/Next.js.' },
          ].map((f, i) => (
            <details key={f.q} className="group rounded-2xl border border-white/10 bg-zinc-900/30 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-sm animate-slideUp" style={{ animationDelay: `${i * 80}ms` }}>
              <summary className="cursor-pointer list-none text-sm font-medium text-white">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-zinc-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-8 py-20">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-sm">
          <h2 className="text-3xl font-semibold tracking-tight"><span className="bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">Contact</span></h2>
          <p className="mt-2 text-zinc-300">Reach out via email or socials above.</p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Zm2.443.75a.75.75 0 0 0-.443.137l7.25 5.438 7.25-5.438a.75.75 0 0 0-.443-.137H4.693Zm15.057 1.878-6.91 5.184a.75.75 0 0 1-.88 0L5.05 9.378V16.5a.75.75 0 0 0 .75.75h12.4a.75.75 0 0 0 .75-.75V9.378Z" />
            </svg>
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10">
        <div className="mx-auto max-w-6xl px-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Antoine Philipp Ochea. All rights reserved.
        </div>
      </footer>
      </div>
  )
}

export default App

