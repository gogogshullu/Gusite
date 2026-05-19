import { ReactNode, useState } from "react";
import {
  FileText, Eye, ArrowUpRight, Mail, Globe, Linkedin, Calendar, Briefcase,
  GraduationCap, Award, MapPin, Download, BookOpen, ExternalLink,
  Music, Film, Palette, FlaskConical, Dumbbell, Star,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PageShell } from "@/components/SiteChrome";
import { useReveal } from "@/hooks/useReveal";

type IconCmp = React.ComponentType<{ className?: string }>;

const LONG_CV_URL = "/GeetikaGehlot-LongCV.pdf";
const RESUME_URL = "/Geetika_Gehlot_Resume.pdf";

const CVResume = () => {
  useReveal();

  return (
    <PageShell>
      <section className="container pt-16 md:pt-24 pb-12">
        <div className="flex items-baseline gap-6 mb-8 animate-fade-in">
          <span className="font-mono text-xs tracking-[0.3em] text-gold">004</span>
          <span className="eyebrow">CV & Documents</span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <div className="flex items-start gap-5 mb-6 animate-fade-in">
          <FileText className="w-6 h-6 text-gold shrink-0 mt-2" />
          <h1 className="display-xl text-xl md:text-2xl lg:text-3xl text-balance max-w-5xl animate-fade-up">
            Documents
          </h1>
        </div>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed font-accent italic animate-fade-up">
          The full record, interactive, downloadable PDF, and printable CV and résumé.
        </p>
        <div className="rule-gold mt-10" />
      </section>

      <section className="container pb-8 space-y-8">
        <CVFeatureBlock />
        <CVDocumentGrid />
      </section>

    </PageShell>
  );
};

function CVFeatureBlock() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group fancy-tile w-full text-left border border-border bg-paper hover:border-gold transition-all duration-700 ease-cinematic hover:-translate-y-1 hover:scale-[1.005] overflow-hidden"
        >
          <div className="grid md:grid-cols-[1fr,380px]">
            {/* Left, CTA */}
            <div className="p-8 md:p-12 flex flex-col justify-between gap-8">
              <div>
                <p className="label-gold mb-4">Curriculum Vitae · 2025</p>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-ink group-hover:text-gold transition-colors duration-500 leading-tight">
                  Geetika Gehlot
                </h2>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">
                  Secondary V Student · Montréal, QC · Graduating 2026
                </p>
                <p className="mt-2 font-mono text-xs text-ink-soft/60 tracking-wide">
                  Physics · Engineering · Multimedia · Performing Arts · Leadership
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Robotics", "STEM Research", "Music", "Writing", "Leadership", "Visual Art", "Film & TV", "Physics"].map((tag) => (
                  <span key={tag} className="inline-block border border-border px-3 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-ink-soft group-hover:border-gold/60 transition-colors duration-500">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold border border-gold/30">
                  <Eye className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg text-ink group-hover:text-gold transition-colors duration-300">Open Interactive CV</p>
                  <p className="text-xs text-ink-soft font-mono tracking-wide">Click to expand the full record</p>
                </div>
                <ArrowUpRight className="ml-auto h-5 w-5 text-ink-soft group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </div>
            </div>

            {/* Right, mini peek preview */}
            <div className="hidden md:block border-l border-border bg-paper-deep p-6 overflow-hidden relative">
              <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
              <p className="label-gold mb-4 text-[0.55rem]">Preview</p>
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-gradient-to-br from-gold/40 to-navy-deep/30 border border-border shrink-0" />
                  <div>
                    <p className="font-display text-sm text-ink">Geetika Gehlot</p>
                    <p className="font-mono text-[0.55rem] text-ink-soft">Secondary V Student · she/her</p>
                  </div>
                </div>
                <div className="rule-gold opacity-60" />
                <div className="space-y-2">
                  {[
                    { label: "STEM & Robotics", sub: "FRC Team 7700" },
                    { label: "President, YMCA Youth Co-op", sub: "Leadership 2025" },
                    { label: "Hindustani Classical Vocals", sub: "Stage performer" },
                    { label: "Film & Television", sub: "DD Kisan · Zee TV · Star Plus" },
                    { label: "AP Track · Montréal", sub: "Education" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-2 opacity-70">
                      <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="font-display text-xs text-ink leading-tight">{row.label}</p>
                        <p className="font-mono text-[0.5rem] uppercase tracking-wider text-ink-soft">{row.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-paper-deep to-transparent" />
              </div>
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-6xl w-[calc(100vw-1.25rem)] sm:w-[calc(100vw-2rem)] max-h-[calc(100vh-1.25rem)] sm:max-h-[calc(100vh-2rem)] p-0 overflow-hidden bg-paper">
        <DialogTitle className="sr-only">Curriculum Vitae: Geetika Gehlot</DialogTitle>
        <DialogDescription className="sr-only">Full CV with experience, education, skills, and contact.</DialogDescription>
        <div className="overflow-y-auto max-h-[calc(100vh-1.25rem)] sm:max-h-[calc(100vh-2rem)]">
          <CVContent />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function PDFEmbedBox({
  title,
  subtitle,
  badge,
  pdfUrl,
  icon: Icon,
  footerMeta,
}: {
  title: string;
  subtitle: string;
  badge: string;
  pdfUrl: string;
  icon: IconCmp;
  footerMeta: string;
}) {
  return (
    <div className="fancy-tile border border-border bg-paper overflow-hidden">
      {/* Header bar */}
      <div className="border-b border-border p-4 md:p-5 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest border border-gold text-gold bg-gold/10">
            <Icon className="w-3 h-3" />
            {title}
          </span>
        </div>

        <span className="flex-1" />

        <a
          href={pdfUrl}
          download
          className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-widest text-ink-soft hover:text-gold transition-colors"
        >
          <Download className="w-3 h-3" />
          Download {title}
        </a>
        <span className="text-ink-soft/40">·</span>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-widest text-ink-soft hover:text-gold transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          Open in new tab
        </a>
        <span className="font-mono text-[0.55rem] uppercase tracking-widest border border-border px-2 py-0.5 text-ink-soft">
          {badge}
        </span>
      </div>

      {/* PDF embed */}
      <div className="relative w-full" style={{ height: "45vh", minHeight: "320px" }}>
        <iframe
          src={pdfUrl}
          title={`${title} PDF`}
          className="absolute inset-0 w-full h-full"
          style={{ border: "none" }}
        />
      </div>

      {/* Footer info */}
      <div className="border-t border-border p-4 md:p-5 flex flex-wrap items-center gap-3 text-ink-soft">
        <span className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-widest">
          <span>📄</span> {subtitle}
        </span>
        <span className="text-ink-soft/30">|</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-widest">
          <span>📐</span> {badge}
        </span>
        <span className="text-ink-soft/30">|</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-widest">
          <span>🔍</span> Scroll to browse
        </span>
        <span className="flex-1" />
        <span className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-widest">
          <span>✨</span> {footerMeta}
        </span>
      </div>
    </div>
  );
}

function CVDocumentGrid() {
  return (
    <div className="space-y-6">
      {/* CV + Résumé side by side */}
      <div className="grid md:grid-cols-2 gap-4">
        <PDFEmbedBox
          title="CV"
          subtitle="Full curriculum vitae"
          badge="PDF · A4"
          pdfUrl={LONG_CV_URL}
          icon={FileText}
          footerMeta="Updated 2025"
        />
        <PDFEmbedBox
          title="Résumé"
          subtitle="One-page condensed version"
          badge="PDF · Letter"
          pdfUrl={RESUME_URL}
          icon={BookOpen}
          footerMeta="Updated 2025"
        />
      </div>

      {/* LinkedIn tile */}
      <a
        href="https://www.linkedin.com/in/geetika-gehlot"
        target="_blank"
        rel="noreferrer"
        className="fancy-tile group block border border-border bg-paper hover:border-gold transition-all duration-700 ease-cinematic hover:-translate-y-1 overflow-hidden p-6"
      >
        <div className="flex items-start justify-between mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold border border-gold/20">
            <Linkedin className="h-4 w-4" />
          </span>
          <span className="font-mono text-[0.55rem] uppercase tracking-widest border border-border px-2 py-1 text-ink-soft group-hover:border-gold/50 transition-colors duration-500">
            External
          </span>
        </div>
        <p className="font-display text-lg text-ink group-hover:text-gold transition-colors duration-300 leading-tight">LinkedIn Profile</p>
        <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-wider text-ink-soft">Connect or view professional timeline</p>
        <ArrowUpRight className="mt-4 h-4 w-4 text-ink-soft group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
      </a>
    </div>
  );
}

function CVContent() {
  const skills = [
    "React", "TypeScript", "Python", "CAD (Onshape / SolidWorks)",
    "Robotics (FRC)", "Systems Thinking", "Robotics Fabrication",
    "FL Studio", "DaVinci Resolve", "Music Production",
    "Video Editing & Colour Grading", "Photography",
    "Graphic & Multimedia Production", "Scriptwriting",
    "Cinematography", "Machine Learning Fundamentals",
    "Freelance Design", "Event Hosting & Production",
  ];
  const languages = ["English", "French", "Hindi", "Marwari"];

  const experience = [
    {
      role: "President",
      date: "2025 – Present",
      org: "YMCA Youth Co-op (NDG-Westmount)",
      place: "Montréal, QC",
      desc: "Led a youth cooperative team in Montréal. Participated in finance, marketing, HR, and organizational development. Helped establish co-op structure and public outreach.",
    },
    {
      role: "Engineer",
      date: "2024 – Present",
      org: "FIRST Robotics Competition: Team 7700",
      place: "Montréal, QC",
      desc: "Worked on robotics engineering and fabrication processes. Experience with CAD, systems thinking, fabrication workflows, and competition preparation. Exposure to robotics workshop environments and technical collaboration.",
    },
    {
      role: "Studio Volunteer",
      date: "2025",
      org: "Westmount Library",
      place: "Montréal, QC",
      desc: "Assisted children with coding and creative technology activities. Mentored younger students in digital creativity and learning.",
    },
  ];

  const education = [
    {
      role: "Secondary V: Expected 2026",
      date: "2024 – 2026",
      org: "Westmount High School",
      place: "Montréal, QC",
      desc: "Québec secondary curriculum. Strong performance in mathematics, sciences, and humanities. Jazz ensemble member. YMCA Youth Co-op leadership involvement.",
    },
    {
      role: "Advanced Secondary Program",
      date: "2022 – 2024",
      org: "Narayana Co Kaveri School",
      place: "India",
      desc: "Studied in one of India's rigorous academic streams. Intensive STEM-focused preparation. University-level coursework in physics, chemistry, mathematics, and biology.",
    },
    {
      role: "Top-most Batch",
      date: "2022 – 2024",
      org: "Allen Career Institute",
      place: "India",
      desc: "Advanced preparation environment for competitive STEM examinations. Exposure to Olympiad and engineering-level problem solving.",
    },
  ];

  const certs = [
    { title: "CPR & First Aid Certified", date: "Montréal" },
    { title: "TCS ION IntelliGem: National Winner", date: "Twice" },
    { title: "Top Finalist: Gladrags Little Miss India", date: "" },
    { title: "School President & Class Valedictorian", date: "Grades 3 & 5" },
    { title: "SOF Olympiads, IOQM, JSO: High Rankings", date: "India" },
    { title: "100 History & Math, 97 Science: EMSB Exams", date: "2024" },
    { title: "Participant in Gladrags Group Dance Finals", date: "" },
    { title: "National Competition Recognitions", date: "Academics & Arts" },
  ];

  const academicAchievements = [
    "Excelled AP Chemistry, AP Biology, AP Environmental Science, AP Physics C: Mechanics, and AP Physics C: Electricity & Magnetism during Grade 10, first year in Canada",
    "Prepared for SAT, AP Calculus BC, IIT JEE Mains & Advanced, NEET, Physics Olympiads, and Mathematics Olympiads",
    "Achieved 100 in History and Mathematics and 97 in Science on EMSB ministry examinations",
    "Winner of TCS ION IntelliGem national competition twice",
    "Competed in SOF Olympiads, IOQM, JSO, and RMO-related mathematics and science pathways: high rankings and certificates in all",
    "Extensive self-study in university-level physics, chemistry, biology, and mathematics beginning around age 10–11; contacts with high-tier professors in those areas",
    "Advanced independent study in quantum mechanics, relativity, supersymmetry, astrophysics, engineering and particle physics",
    "Youngest attendee at Jun Ye physics seminar; conversed with Jun Ye and Kenneth Ragan, Head of McGill's Physics Department",
    "Participated in hands-on cancer cell laboratory work including pipetting and gel electrophoresis",
    "CPR & First Aid Certified",
  ];

  const filmCredits = [
    "Lead role in Salaam India on DD Kisan",
    "Appearance in Woh Apna Sa on Zee TV",
    "Worked on Iss Pyar Ko Kya Naam Doon / Star Parivaar productions",
    "Lead performer in multiple children's rhyme productions for ALTBalaji",
    "Featured in 9XM 70th Independence Day promotional campaign",
    "Appeared in Asian Paints advertisement campaigns",
    "Voice work for Veere Di Wedding (Bollywood Blockbuster Film)",
    "Voice work for Hindi Medium (Bollywood Blockbuster Film)",
    "Experience in dubbing and vocal synchronization",
  ];

  const industryExposure = [
    "Barun Sobti", "Dalljiet Kaur", "Ridhi Dogra", "Sudeep Sahir",
    "Amit Behl", "Priyanka Sharma", "Jayshree T.", "Utkarsha Naik",
  ];

  const musicItems = [
    "Hindustani classical singing: guru-shishya tradition, stage performance experience, advanced vocal technique development",
    "Electric guitar · Piano / keyboard · Self-taught advanced guitar progression",
    "Jazz ensemble performer at Westmount High School: Grade 10 jazz concerts",
    "Bharatnatyam · Rajasthani folk dance · Freestyle dance · Gymnastics-related performance · Hula hoop performance arts · Aerobics and stage choreography",
    "FL Studio composition and sound design: DJ mixing and event performance: Rhythm experimentation and advanced rap structure design",
    "DaVinci Resolve video editing and colour grading",
    "Band-it Festival 2019: Level 2 participant through Furtado's School of Music",
  ];

  const visualArts = [
    "Canvas painting",
    "Intricate Rangoli art across residential communities during festivals",
    "Embroidery",
    "Henna art",
    "Graphic design",
    "Fashion customization and freelance design work",
    "Photography including moon and nature photography",
  ];

  const writingItems = [
    "Creator of Endless Portals: An Infinite Saga of Enchanted Tales: long-form fantasy and science-fiction universe with 40+ drafted chapters",
    "Focused on multiverse themes, fantasy systems, and large-scale fictional worldbuilding with interlooping plots",
    "Story architecture · Dialogue writing · Character systems · Serialized storytelling",
    "Screenwriting & Narrative Development",
  ];

  const sports = ["Badminton", "Table Tennis", "Chess", "Karate", "Abacus Mathematics", "Gymnastics", "Athletics"];

  const researchInterests = [
    "High-energy physics", "Quantum mechanics", "Particle physics",
    "Astrophysics", "Supersymmetry", "Engineering systems", "Machine learning",
  ];

  const interests = [
    "Quantum mechanics", "Astronomy and stargazing", "Particle physics",
    "Engineering innovation", "Story systems", "Music production",
    "Scientific research", "Multimedia creation", "Entrepreneurship",
    "Technology design", "Global cuisine exploration",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] bg-paper text-ink">
      <aside className="border-b md:border-b-0 md:border-r border-border p-6 md:p-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-14 w-14 rounded-full bg-gradient-to-br from-gold/40 to-primary/30 border border-border" />
          <div>
            <h2 className="font-display text-xl text-ink leading-tight">Geetika Gehlot</h2>
            <p className="text-xs text-ink-soft">Secondary V · she/her</p>
          </div>
        </div>

        <CVSection label="About">
          <p className="text-sm leading-relaxed">Multidisciplinary student · Physics · Engineering · Music · Media · Writing · Leadership · Montréal, QC</p>
          <p className="text-xs text-ink-soft mt-1">React · TypeScript · Python · FL Studio · DaVinci Resolve</p>
        </CVSection>

        <CVSection label="Contact">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gold" /><a className="hover:text-gold break-all" href="mailto:geetikagehlot2009@gmail.com">geetikagehlot2009@gmail.com</a></li>
            <li className="flex items-center gap-2"><Globe className="h-3.5 w-3.5 text-gold" /><span>438-505-9956</span></li>
            <li className="flex items-center gap-2"><Linkedin className="h-3.5 w-3.5 text-gold" /><span className="text-xs">linkedin.com/in/geetika-gehlot</span></li>
          </ul>
        </CVSection>

        <CVSection label="Skills">
          <div className="flex flex-wrap gap-1.5">{skills.map((s) => <CVPill key={s}>{s}</CVPill>)}</div>
        </CVSection>

        <CVSection label="Languages">
          <div className="flex flex-wrap gap-1.5">{languages.map((s) => <CVPill key={s}>{s}</CVPill>)}</div>
        </CVSection>

        <CVSection label="Research Interests">
          <div className="flex flex-wrap gap-1.5">{researchInterests.map((s) => <CVPill key={s}>{s}</CVPill>)}</div>
        </CVSection>
      </aside>

      <main className="p-6 md:p-10 space-y-10 overflow-y-auto max-h-[80vh]">
        <section>
          <CVEyebrow>Profile</CVEyebrow>
          <div className="space-y-3 text-base leading-relaxed max-w-2xl text-ink-soft">
            <p>Multidisciplinary student with advanced knowledge in physics, mathematics, biology, computer science, engineering, music, media production, and storytelling. Experience: robotics, competitive academics, scientific research exposure, performing arts, television, music production, leadership, mentoring, and multimedia creation across India and Canada.</p>
            <p>Known for combining technical depth with large-scale creative execution across scientific, artistic, and entrepreneurial domains. Born in India; relocated to Montréal, Canada in October 2024.</p>
          </div>
        </section>

        <section>
          <CVEyebrow>Education</CVEyebrow>
          <div className="space-y-3">{education.map((e) => <CVEntry key={e.org} icon={GraduationCap} {...e} />)}</div>
        </section>

        <section>
          <CVEyebrow>Experience & Leadership</CVEyebrow>
          <div className="space-y-3">{experience.map((e) => <CVEntry key={e.role + e.org} icon={Briefcase} {...e} />)}</div>
        </section>

        <section>
          <CVEyebrow>Academic Achievements</CVEyebrow>
          <div className="grid sm:grid-cols-2 gap-2 max-w-3xl">
            <ul className="grid gap-2 sm:col-span-2">
              {academicAchievements.map((item) => (
                <li key={item} className="border border-border bg-card px-3 py-2 text-xs text-ink-soft leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <CVEyebrow icon={Film}>Film, Television & Voice Acting</CVEyebrow>
          <div className="grid sm:grid-cols-2 gap-2 max-w-3xl mb-4">
            <ul className="grid gap-2 sm:col-span-2">
              {filmCredits.map((item) => (
                <li key={item} className="border border-border bg-card px-3 py-2 text-xs text-ink-soft leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-ink-soft font-mono uppercase tracking-wider mb-2">Worked alongside:</p>
          <div className="flex flex-wrap gap-1.5">
            {industryExposure.map((s) => <CVPill key={s}>{s}</CVPill>)}
          </div>
        </section>

        <section>
          <CVEyebrow icon={Music}>Music & Performing Arts</CVEyebrow>
          <div className="grid sm:grid-cols-2 gap-2 max-w-3xl">
            <ul className="grid gap-2 sm:col-span-2">
              {musicItems.map((item) => (
                <li key={item} className="border border-border bg-card px-3 py-2 text-xs text-ink-soft leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <CVEyebrow icon={Palette}>Visual Arts & Design</CVEyebrow>
          <div className="flex flex-wrap gap-1.5">
            {visualArts.map((s) => <CVPill key={s}>{s}</CVPill>)}
          </div>
        </section>

        <section>
          <CVEyebrow>Creative Writing & Storytelling</CVEyebrow>
          <div className="grid sm:grid-cols-2 gap-2 max-w-3xl">
            <ul className="grid gap-2 sm:col-span-2">
              {writingItems.map((item) => (
                <li key={item} className="border border-border bg-card px-3 py-2 text-xs text-ink-soft leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <CVEyebrow icon={Award}>Awards & Recognition</CVEyebrow>
          <div className="grid sm:grid-cols-2 gap-3">
            {certs.map((c) => (
              <div key={c.title} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold shrink-0"><Award className="h-4 w-4" /></span>
                <div>
                  <p className="font-display text-sm text-ink">{c.title}</p>
                  {c.date && <p className="text-xs text-ink-soft mt-0.5">{c.date}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <CVEyebrow icon={FlaskConical}>Research & Scientific Interests</CVEyebrow>
          <div className="flex flex-wrap gap-1.5">
            {researchInterests.map((s) => <CVPill key={s}>{s}</CVPill>)}
          </div>
        </section>

        <section>
          <CVEyebrow icon={Dumbbell}>Sports & Activities</CVEyebrow>
          <div className="flex flex-wrap gap-1.5">
            {sports.map((s) => <CVPill key={s}>{s}</CVPill>)}
          </div>
        </section>

        <section>
          <CVEyebrow>Cultural & International Experience</CVEyebrow>
          <div className="grid sm:grid-cols-2 gap-2 max-w-3xl">
            <ul className="grid gap-2 sm:col-span-2">
              {[
                "Born in India; relocated to Montréal, Canada in October 2024",
                "Experience adapting between Indian and Québec educational and cultural systems",
                "Strong engagement with Rajasthani cultural traditions and arts",
                "Preference for Québec French learning and integration",
              ].map(item => (
                <li key={item} className="border border-border bg-card px-3 py-2 text-xs text-ink-soft leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <CVEyebrow icon={Star}>Interests</CVEyebrow>
          <div className="flex flex-wrap gap-1.5">
            {interests.map((s) => <CVPill key={s}>{s}</CVPill>)}
          </div>
        </section>

        <section>
          <CVEyebrow>Mentorship & Academic Guidance</CVEyebrow>
          <div className="grid sm:grid-cols-2 gap-2 max-w-3xl">
            <ul className="grid gap-2 sm:col-span-2">
              {[
                "Guidance from Amandeep Bakshi, Arpi Hamalian, and Ailie Cleghorn",
                "Connected with Professor Mariana Frank regarding particle physics mentorship and research direction",
              ].map(item => (
                <li key={item} className="border border-border bg-card px-3 py-2 text-xs text-ink-soft leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

function CVSection({ label, children }: { label: string; children: ReactNode }) {
  return <div className="mb-6"><p className="eyebrow mb-2">{label}</p>{children}</div>;
}
function CVEyebrow({ children, icon: Icon }: { children: ReactNode; icon?: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {Icon && <Icon className="h-3.5 w-3.5 text-gold" />}
      <p className="eyebrow">{children}</p>
    </div>
  );
}
function CVPill({ children }: { children: ReactNode }) {
  return <span className="inline-block rounded-full border border-border bg-card px-2.5 py-1 text-xs text-ink">{children}</span>;
}
function CVEntry({ icon: Icon, role, date, org, place, desc }: { icon: IconCmp; role: string; date: string; org: string; place: string; desc: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold"><Icon className="h-4 w-4" /></span>
        <div className="flex-1 min-w-0">
          <h4 className="font-display text-base text-ink">{role}</h4>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-soft">
            <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{date}</span>
            <span>{org}</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{place}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default CVResume;
