import { useEffect, useRef, useState } from "react";
import type { TopicData } from "@/data/clusters";
import achCasual from "@assets/unnamed_1779118514805.jpg";
import achAbacus from "@assets/unnamed_1779118522303.jpg";
import achCrown from "@assets/unnamed_1779118490987.jpg";
import achSinging from "@assets/unnamed_1779118497700.jpg";

function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)); }
function lerp(a: number, b: number, t: number) { return a + (b - a) * clamp(t, 0, 1); }
function easeOut(t: number) { return 1 - Math.pow(1 - clamp(t, 0, 1), 3); }

const EXPAND_END = 0.12;
const ESSAY_END = 0.88;

function EssayPhoto({ src, alt, caption, align = "right" }: { src: string; alt: string; caption: string; align?: "left" | "right" | "full" }) {
  if (align === "full") return (
    <figure className="my-8 w-full clear-both">
      <div className="relative w-full overflow-hidden border border-white/10" style={{ aspectRatio: "21/8" }}>
        <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-contain" />
        <span className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
      </div>
      <figcaption className="mt-2 text-center font-mono uppercase tracking-[0.2em] text-white/30" style={{ fontSize: "8px" }}>{caption}</figcaption>
    </figure>
  );
  return (
    <figure className={`my-0 mb-4 ${align === "right" ? "float-right ml-7" : "float-left mr-7"} w-32 md:w-48`}>
      <div className="relative overflow-hidden border border-white/10" style={{ aspectRatio: "4/5" }}>
        <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-contain" />
        <span className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none" />
      </div>
      <figcaption className="mt-1.5 font-mono uppercase tracking-[0.2em] text-white/28" style={{ fontSize: "7px" }}>{caption}</figcaption>
    </figure>
  );
}

const ESSAY_H3 = { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(13px,1.1vw,15px)", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "hsl(43 70% 58%)", marginBottom: "1rem", opacity: 0.85 };
const ESSAY_SUB = { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(11px,0.9vw,13px)", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "hsl(220 15% 50%)", marginBottom: "0.4rem", marginTop: "1.2rem" };
const ESSAY_P = { fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(15px,1.25vw,17px)", lineHeight: 1.82, color: "hsl(220 15% 78%)", marginBottom: "1rem" };
const ESSAY_LI = { fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(14px,1.1vw,16px)", lineHeight: 1.72, color: "hsl(220 15% 72%)", marginBottom: "0.4rem", paddingLeft: "1rem", borderLeft: "1px solid hsl(43 60% 55% / 0.18)" };

function BulletList({ items }: { items: string[] }) {
  return (
    <div style={{ marginBottom: "0.75rem" }}>
      {items.map(item => <p key={item} style={ESSAY_LI}>{item}</p>)}
    </div>
  );
}

function Essay() {
  return (
    <article style={{ maxWidth: "760px", margin: "0 auto" }}>

      {/* PROFILE */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>Profile</h3>
        <EssayPhoto src={achCasual} alt="Geetika Gehlot, Montréal 2024" caption="Montréal, 2024" align="right" />
        <p style={ESSAY_P}>
          <span style={{ float: "left", fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(3.2rem,5vw,4.2rem)", lineHeight: 0.78, fontWeight: 700, color: "hsl(43 78% 62%)", marginRight: "0.18em", marginTop: "0.08em" }}>M</span>
          ultidisciplinary student with advanced knowledge in physics, mathematics, biology, computer science, engineering, music, media production, and storytelling. Experience: robotics, competitive academics, scientific research exposure, performing arts, television, music production, leadership, mentoring, and multimedia creation across India and Canada.
        </p>
        <p style={ESSAY_P}>Known for combining technical depth with large-scale creative execution across scientific, artistic, and entrepreneurial domains.</p>
      </section>

      {/* EDUCATION */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>Education</h3>
        <EssayPhoto src={achAbacus} alt="Academic achievements and medals" caption="Mental math, always" align="left" />
        <p style={{ ...ESSAY_SUB, marginTop: 0 }}>Westmount High School</p>
        <BulletList items={[
          "Secondary V: Expected Graduation: 2026",
          "Québec secondary education system",
          "Strong performance in mathematics, sciences, and humanities",
          "Member of jazz music ensemble",
          "YMCA Youth Co-op leadership involvement",
        ]} />
        <p style={ESSAY_SUB}>Narayana Co Kaveri School</p>
        <BulletList items={[
          "Advanced secondary academic program",
          "Studied in one of India's rigorous academic streams",
          "Intensive STEM-focused preparation",
        ]} />
        <p style={ESSAY_SUB}>Allen Career Institute: Top-most Batch</p>
        <BulletList items={[
          "Advanced preparation environment for competitive STEM examinations",
          "Exposure to Olympiad and engineering-level problem solving",
        ]} />
      </section>

      {/* ACADEMIC ACHIEVEMENTS */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>Academic Achievements</h3>
        <EssayPhoto src={achCrown} alt="Recognition and awards portrait" caption="School President & Class Valedictorian, Twice" align="right" />
        <BulletList items={[
          "Excelled AP Chemistry, AP Biology, AP Environmental Science, AP Physics C: Mechanics, and AP Physics C: Electricity & Magnetism during Grade 10, first year in Canada",
          "Prepared for SAT, AP Calculus BC, IIT JEE Mains & Advanced, NEET, Physics Olympiads, and Mathematics Olympiads",
          "Achieved 100 in History and Mathematics and 97 in Science on EMSB ministry examinations",
          "Winner of TCS ION IntelliGem national competition twice",
          "Competed in SOF Olympiads, IOQM, JSO, and RMO-related mathematics and science pathways and achieved high rankings and certificates in all",
          "Extensive self-study in university-level physics, chemistry, biology, and mathematics beginning around age 10–11, contacts with high-tier professors in those areas",
          "Advanced independent study in quantum mechanics, relativity, supersymmetry, astrophysics, engineering and particle physics",
          "Youngest attendee at Jun Ye physics seminar, conversed with Jun Ye and Kenneth Ragan, Head of McGill's Physics Department",
          "Participated in hands-on cancer cell laboratory work including pipetting and gel electrophoresis",
          "CPR & First Aid Certified",
        ]} />

        <p style={ESSAY_SUB}>Research &amp; Scientific Interests</p>
        <BulletList items={["High-energy physics", "Quantum mechanics", "Particle physics", "Astrophysics", "Supersymmetry", "Engineering systems", "Machine learning"]} />

        <p style={ESSAY_SUB}>Mentorship &amp; Academic Guidance</p>
        <BulletList items={[
          "Guidance from Amandeep Bakshi, Arpi Hamalian, and Ailie Cleghorn",
          "Connected with Professor Mariana Frank regarding particle physics mentorship and research direction",
        ]} />
      </section>

      {/* ENGINEERING */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>Engineering, Robotics &amp; Technical Work</h3>
        <p style={{ ...ESSAY_SUB, marginTop: 0 }}>FIRST Robotics Competition: Team 7700</p>
        <BulletList items={[
          "Worked on robotics engineering and fabrication processes",
          "Experience with CAD, systems thinking, fabrication workflows, and competition preparation",
          "Exposure to robotics workshop environments and technical collaboration",
        ]} />

        <p style={ESSAY_SUB}>Technical Skills</p>
        <BulletList items={["React", "TypeScript", "Python", "CAD", "Robotics fabrication", "Systems thinking", "Multimedia systems", "Machine learning fundamentals"]} />

        <p style={ESSAY_SUB}>Software &amp; Production</p>
        <BulletList items={[
          "FL Studio music production since 2020",
          "DaVinci Resolve video editing, colour grading",
          "Graphic and multimedia production, cinematography",
          "Photography and visual editing",
          "Scriptwriting",
        ]} />
      </section>

      {/* LEADERSHIP */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>Leadership &amp; Community Work</h3>
        <p style={{ ...ESSAY_SUB, marginTop: 0 }}>YMCA Youth Co-op: President (NDG-Westmount 2025)</p>
        <BulletList items={[
          "Led a youth cooperative team in Montréal",
          "Participated in finance, marketing, HR, and organizational development",
          "Helped establish the co-op structure and public outreach",
        ]} />

        <p style={ESSAY_SUB}>Westmount Library Studio Volunteering</p>
        <BulletList items={[
          "Assisted children with coding and creative technology activities",
          "Mentored younger students in digital creativity and learning",
        ]} />

        <p style={ESSAY_SUB}>Mentoring</p>
        <BulletList items={[
          "Peer mentoring and collaborative academic support",
          "Strong communication and leadership experience from school and extracurricular environments",
        ]} />
      </section>

      {/* CREATIVE WRITING */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>Creative Writing &amp; Storytelling</h3>
        <p style={{ ...ESSAY_SUB, marginTop: 0 }}>Endless Portals: An Infinite Saga of Enchanted Tales</p>
        <BulletList items={[
          "Creator of a long-form fantasy and science-fiction universe",
          "Wrote over 40+ drafted chapters across interconnected storylines",
          "Focused on multiverse themes, fantasy systems, and large-scale fictional worldbuilding with interlooping plots in stories",
        ]} />

        <p style={ESSAY_SUB}>Screenwriting &amp; Narrative Development</p>
        <BulletList items={["Story architecture", "Dialogue writing", "Character systems", "Serialized storytelling"]} />
      </section>

      {/* FILM & MEDIA */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>Film, Television &amp; Media</h3>
        <EssayPhoto src={achSinging} alt="Singing performance on stage" caption="Hindustani Classical Music Singing" align="left" />

        <p style={{ ...ESSAY_SUB, marginTop: 0 }}>Television &amp; Acting Credits</p>
        <BulletList items={[
          "Lead role in Salaam India on DD Kisan",
          "Appearance in Woh Apna Sa on Zee TV",
          "Worked on Iss Pyar Ko Kya Naam Doon / Star Parivaar productions",
          "Lead performer in multiple children's rhyme productions for ALTBalaji",
          "Featured in 9XM 70th Independence Day promotional campaign",
          "Appeared in Asian Paints advertisement campaigns",
        ]} />

        <p style={ESSAY_SUB}>Dubbing &amp; Voice Acting</p>
        <BulletList items={[
          "Voice work for Veere Di Wedding, Bollywood Blockbuster Film",
          "Voice work for Hindi Medium, Bollywood Blockbuster Film",
          "Experience in dubbing and vocal synchronization",
        ]} />

        <p style={ESSAY_SUB}>Industry Exposure</p>
        <p style={{ ...ESSAY_P, fontSize: "clamp(13px,1vw,14px)", marginBottom: "0.4rem" }}>Worked alongside or appeared with figures associated with Indian television productions including:</p>
        <BulletList items={["Barun Sobti", "Dalljiet Kaur", "Ridhi Dogra", "Sudeep Sahir", "Amit Behl", "Priyanka Sharma", "Jayshree T.", "Utkarsha Naik"]} />
      </section>

      {/* MUSIC */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>Music &amp; Performing Arts</h3>

        <p style={{ ...ESSAY_SUB, marginTop: 0 }}>Vocal Performance</p>
        <BulletList items={["Hindustani classical singing", "Stage performance experience", "Advanced vocal technique development"]} />

        <p style={ESSAY_SUB}>Instruments</p>
        <BulletList items={["Electric guitar", "Piano / keyboard", "Self-taught advanced guitar progression"]} />

        <p style={ESSAY_SUB}>Jazz Ensemble</p>
        <BulletList items={["Participated in Grade 10 jazz concerts at Westmount High School"]} />

        <p style={ESSAY_SUB}>Dance &amp; Performance</p>
        <BulletList items={["Bharatnatyam", "Rajasthani folk dance", "Freestyle dance", "Gymnastics-related performance", "Hula hoop performance arts", "Aerobics and stage choreography"]} />

        <p style={ESSAY_SUB}>Music Production &amp; DJ Work</p>
        <BulletList items={[
          "FL Studio composition and sound design",
          "DJ mixing and event performance",
          "Rhythm experimentation and advanced rap structure design",
        ]} />

        <p style={ESSAY_SUB}>Music Recognition</p>
        <BulletList items={["Band-it Festival 2019: Level 2 participant through Furtado's School of Music"]} />
      </section>

      {/* VISUAL ARTS */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>Visual Arts &amp; Design</h3>
        <BulletList items={[
          "Canvas painting",
          "Intricate Rangoli art across residential communities during festivals",
          "Embroidery",
          "Henna art",
          "Graphic design",
          "Fashion customization and freelance design work",
          "Photography including moon and nature photography",
        ]} />

        <p style={ESSAY_SUB}>Entrepreneurship &amp; Freelance Work</p>
        <BulletList items={[
          "Freelance design projects including apparel and accessories",
          "Event hosting and paid performance/event coordination experience",
          "Multimedia branding and digital content creation",
        ]} />
      </section>

      {/* SPORTS */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>Sports &amp; Activities</h3>
        <BulletList items={["Badminton", "Table tennis", "Chess", "Karate", "Abacus mathematics", "Physical coordination and freestyle performance activities"]} />
      </section>

      {/* AWARDS */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>Awards &amp; Recognition</h3>
        <BulletList items={[
          "Hundreds of school-level and academic awards across multiple disciplines",
          "School President and Female Class Valedictorian in Grades 3 and 5",
          "Top finalist in Gladrags Little Miss India",
          "Participant in Gladrags group dance finals",
          "National competition recognitions in academics and arts",
        ]} />

        <p style={ESSAY_SUB}>Cultural &amp; International Experience</p>
        <BulletList items={[
          "Born in India; relocated to Montréal, Canada in October 2024",
          "Experience adapting between Indian and Québec educational and cultural systems",
          "Strong engagement with Rajasthani cultural traditions and arts",
          "Preference for Québec French learning and integration",
        ]} />
      </section>

      {/* INTERESTS */}
      <section style={{ marginBottom: "3rem" }}>
        <h3 style={ESSAY_H3}>Interests</h3>
        <BulletList items={[
          "Quantum mechanics",
          "Astronomy and stargazing",
          "Particle physics",
          "Engineering innovation",
          "Story systems",
          "Music production",
          "Scientific research",
          "Multimedia creation",
          "Entrepreneurship",
          "Technology design",
          "Global cuisine exploration",
        ]} />
      </section>

    </article>
  );
}

export function AboutCardStack({ topics: _topics }: { topics: TopicData[] }) {
  const shellRef = useRef<HTMLDivElement>(null);
  const essayContainerRef = useRef<HTMLDivElement>(null);
  const essayContentRef = useRef<HTMLDivElement>(null);
  const [maxEssayScroll, setMaxEssayScroll] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [vw, setVw] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);
  const [vh, setVh] = useState(typeof window !== "undefined" ? window.innerHeight : 900);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    const onResize = () => { setVw(window.innerWidth); setVh(window.innerHeight); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const totalScroll = shellRef.current ? Math.max(1, shellRef.current.offsetHeight - vh) : 1;
  const t = clamp(scrollY / totalScroll, 0, 1);

  const expandT = easeOut(clamp(t / EXPAND_END, 0, 1));

  const START_W = Math.min(440, vw * 0.88);
  const START_H = Math.min(300, vh * 0.45);

  const cardW = lerp(START_W, vw, expandT);
  const cardH = lerp(START_H, vh, expandT);
  const cardLeft = lerp((vw - START_W) / 2, 0, expandT);
  const cardTop = lerp((vh - START_H) / 2, 0, expandT);
  const cardRadius = lerp(20, 0, expandT);
  const cardPad = lerp(20, 32, expandT);

  const contentVisible = expandT > 0.7;
  const contentOpacity = easeOut(clamp((expandT - 0.7) / 0.3, 0, 1));

  useEffect(() => {
    const measure = () => {
      if (essayContainerRef.current && essayContentRef.current) {
        const containerH = essayContainerRef.current.offsetHeight;
        const contentH = essayContentRef.current.scrollHeight;
        setMaxEssayScroll(Math.max(0, contentH - containerH));
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (essayContainerRef.current) ro.observe(essayContainerRef.current);
    if (essayContentRef.current) ro.observe(essayContentRef.current);
    return () => ro.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentVisible, cardPad]);

  const initialLabelOpacity = easeOut(clamp((expandT < 0.5 ? expandT / 0.35 : 1 - (expandT - 0.35) / 0.3), 0, 1));

  const essayPhaseT = clamp((t - EXPAND_END) / Math.max(0.001, ESSAY_END - EXPAND_END), 0, 1);

  const headerOpacity = clamp(1 - (expandT * 3), 0, 1);

  return (
    <>
      <section ref={shellRef} className="relative w-full" style={{ height: "350vh" }}>
        <div className="sticky top-0 h-screen overflow-hidden" style={{ background: "hsl(220 30% 5%)" }}>

          {expandT < 0.95 && (
            <div
              style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                padding: "5rem 2rem 0",
                zIndex: 0,
                opacity: headerOpacity,
                pointerEvents: "none",
              }}
            >
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(13px,1vw,15px)", fontStyle: "italic", color: "hsl(220 15% 45%)", textAlign: "center" }}>
                Scroll to read the essay ↓
              </p>
            </div>
          )}

          <div
            style={{
              position: "absolute",
              left: `${cardLeft}px`,
              top: `${cardTop}px`,
              width: `${cardW}px`,
              height: `${cardH}px`,
              borderRadius: `${cardRadius}px`,
              background: "hsl(220 28% 6.5%)",
              border: `1px solid hsl(43 60% 50% / ${lerp(0.18, 0.12, expandT)})`,
              boxShadow: `0 ${Math.round(lerp(8, 40, expandT))}px ${Math.round(lerp(24, 80, expandT))}px -${Math.round(lerp(8, 20, expandT))}px hsl(220 90% 2% / 0.7)`,
              overflow: "hidden",
              transition: "border-color 200ms ease",
              willChange: "left, top, width, height",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 1 - contentOpacity,
                pointerEvents: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <div style={{ opacity: initialLabelOpacity }}>
                <div style={{ fontFamily: "ui-monospace, monospace", fontSize: "8px", letterSpacing: "0.35em", textTransform: "uppercase", color: "hsl(43 70% 55% / 0.6)", textAlign: "center", marginBottom: "0.6rem" }}>001 · Personal Profile</div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, color: "hsl(38 35% 90%)", textAlign: "center", lineHeight: 1.1 }}>Geetika Gehlot</h2>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(12px, 1vw, 14px)", fontStyle: "italic", color: "hsl(220 15% 55%)", textAlign: "center", marginTop: "0.4rem" }}>Montréal · India-born · Multidisciplinary</p>
              </div>
            </div>

            {contentVisible && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: contentOpacity,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    padding: `${cardPad}px ${cardPad}px 0`,
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 6, overflow: "hidden", border: "1px solid hsl(43 60% 50% / 0.2)", flexShrink: 0 }}>
                    <img src={achCasual} alt="Profile portrait" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "ui-monospace, monospace", fontSize: "7px", letterSpacing: "0.32em", textTransform: "uppercase", color: "hsl(43 70% 55% / 0.65)", marginBottom: "0.25rem" }}>001 · Personal Profile</div>
                    <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(16px,1.8vw,22px)", fontWeight: 600, color: "hsl(38 35% 92%)", lineHeight: 1 }}>Geetika Gehlot</h2>
                  </div>
                  <div style={{ marginLeft: "auto", fontFamily: "ui-monospace, monospace", fontSize: "7px", letterSpacing: "0.22em", textTransform: "uppercase", color: "hsl(220 15% 40%)" }}>Scroll ↓</div>
                </div>

                <div style={{ height: 1, background: "hsl(43 60% 50% / 0.1)", margin: `${Math.round(cardPad * 0.6)}px ${cardPad}px` }} />

                <div
                  ref={essayContainerRef}
                  style={{
                    flex: 1,
                    overflow: "hidden",
                    padding: `0 ${cardPad}px 0`,
                  }}
                >
                  <div
                    ref={essayContentRef}
                    style={{
                      willChange: "transform",
                      transform: `translateY(-${essayPhaseT * maxEssayScroll}px)`,
                    }}
                  >
                    <Essay />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
