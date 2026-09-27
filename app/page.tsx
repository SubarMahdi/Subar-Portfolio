"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const navItems = [
    ["about", "About"], ["education", "Education"], ["crob", "Internship"],
    ["academic", "Academic"], ["beyond", "Beyond"], ["research", "Research"],
    ["skills", "Skills"], ["experience", "Roles"], ["contact", "Contact"],
  ];
  useEffect(() => {
    if (!menuOpen) return;
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }
    const wide = window.matchMedia("(min-width: 1280px)");
    function resize() { if (wide.matches) setMenuOpen(false); }
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    wide.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
      wide.removeEventListener("change", resize);
    };
  }, [menuOpen]);
  useEffect(() => {
    if (!activeModal) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const panel = document.querySelector<HTMLElement>("[data-portfolio-dialog]");
    const main = document.querySelector("main");
    const scrollY = window.scrollY;
    const previousStyle = document.body.getAttribute("style");
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    if (main) main.inert = true;
    panel?.querySelector<HTMLButtonElement>('button[aria-label^="Close"]')?.focus();
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveModal(null);
      if (event.key !== "Tab" || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), video[controls], [tabindex="0"]'
      )).filter(item => item.getClientRects().length > 0);
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first?.focus();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      if (previousStyle === null) document.body.removeAttribute("style");
      else document.body.setAttribute("style", previousStyle);
      if (main) main.inert = false;
      window.scrollTo(0, scrollY);
      previousFocus?.focus({ preventScroll: true });
    };
  }, [activeModal]);

  const [thermalMediaIndex, setThermalMediaIndex] = useState(0);
  const softwareTools = [
    { name: "Fusion 360 — CAD modelling & assemblies" },
    { name: "Autodesk Inventor — CAD modelling" },
    { name: "ROS 2 — Research-lab exposure" },
    { name: "Arduino — Embedded project development" },
    { name: "Excel — Data analysis" },
  ];

  const [crobMediaIndex, setCrobMediaIndex] = useState(0);
  const [crobMediaError, setCrobMediaError] = useState(false);
  const crobMedia = [
    { type: "image", src: "/projects/thermal/Crob/gripper-v2-cad.jpeg", title: "CAD / Design", caption: "The V2 assembly in Fusion 360: a simplified manual two-jaw mechanism, developed as a practical CAD and prototyping exercise." },
    { type: "image", src: "/projects/thermal/Crob/Gripper%20v1%20(1).jpeg", title: "V1 / Physical prototype", caption: "The first 3D-printed gripper prototype, connecting the design with a physical assembly and manual jaw movement." },
    { type: "image", src: "/projects/thermal/Crob/Gripper%20v2%20(1).jpeg", title: "V2 / Robotics lab", caption: "The revised manual gripper shown alongside Spot. The prototype was a separate design exercise, not a production Spot end-effector or an autonomous gripper." },
    { type: "video", src: "/projects/thermal/Crob/Me%20Controlling%20Robot%20(1).mp4", title: "Hands-on / Robot interaction", caption: "Hands-on robot interaction during the internship, complementing the gripper design and prototyping work. The lab experience also introduced the ROS 2 communication and NVIDIA Isaac simulation context behind wider robotics workflows." },
  ];
  function selectCrobMedia(index: number) {
    setCrobMediaIndex(index);
    setCrobMediaError(false);
  }
  function openCrobMedia(index: number) {
    selectCrobMedia(index);
    setActiveModal("crob");
  }
  const thermalMedia = [
    {
      type: "video",
      src: "/projects/thermal/Thermal -Build-1.mp4",
      alt: "Thermal monitoring system test video 01",
    },
    {
      type: "video",
      src: "/projects/thermal/Thermal-build-2.mp4",
      alt: "Thermal monitoring system test video 02",
    },
  ];

  return (
    <>
      <style>{`
/* Each ball rotates around the centre of its matching ring. */
@keyframes heroOrbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.hero-orbit {
  transform-origin: center;
  animation: heroOrbit 32s linear infinite;
}
.hero-orbit-outer { animation-delay: -5s; }
.hero-orbit-middle {
  animation-duration: 25s;
  animation-direction: reverse;
  animation-delay: -16s;
}
.hero-orbit-inner {
  animation-duration: 19s;
  animation-delay: -7s;
}
@media (prefers-reduced-motion: reduce) {
  .hero-orbit { animation: none; }
  .hero-orbit-outer { transform: rotate(55deg); }
  .hero-orbit-middle { transform: rotate(230deg); }
  .hero-orbit-inner { transform: rotate(130deg); }
}

/* Responsive layout stays alongside the page for reliable preview updates. */
.portfolio-main > section[id], #thermal-build-media { scroll-margin-top: 100px; }
.portfolio-main :is(h2,h3,h4,p,li), [data-portfolio-dialog] :is(h3,p,li) { overflow-wrap: break-word; }
.portfolio-main .grid > *, [data-portfolio-dialog] .grid > * { min-width: 0; }
.portfolio-main button, [data-portfolio-dialog] button { min-height: 44px; }
.portfolio-main a[class*="rounded"], [data-portfolio-dialog] a[class*="rounded"] { min-height: 44px; }
.portfolio-main :is(a,button):focus-visible, [data-portfolio-dialog] :is(a,button,video):focus-visible {
  outline: 3px solid #527998; outline-offset: 3px;
}
.portfolio-nav-link { display: inline-flex; align-items: center; min-height: 44px; }
.mobile-menu { max-height: calc(100dvh - 84px); overflow-y: auto; overscroll-behavior: contain; }
[data-portfolio-dialog] { max-height: calc(100dvh - 48px); overscroll-behavior: contain; }
[data-portfolio-dialog] video { max-width: 100%; }
.portfolio-hero { min-height: 100svh; padding-bottom: 88px; }
.hero-art { position: absolute; inset: 0; pointer-events: none; }
@media (max-width: 1023px) {
  .hero-art { opacity: .38; }
  #about img { height: auto; max-height: 560px; }
}
@media (max-width: 767px) {
  .portfolio-main > section { padding-left: 20px; padding-right: 20px; }
  .portfolio-main > section[id] { padding-top: 64px; padding-bottom: 64px; }
  .portfolio-main > section h2 { font-size: clamp(2rem, 8.5vw, 2.75rem); line-height: 1.12; }
  .portfolio-main > section h3 { font-size: 1.65rem; line-height: 1.25; }
  .portfolio-main article { padding-left: 20px; padding-right: 20px; }
  #crob article, #academic article { padding: 0; }
  #crob article > div, #academic article > div { padding: 24px 20px; }
  #about .grid { gap: 32px; }
  #about .grid.grid-cols-2 { gap: 0; }
  .portfolio-hero { padding-top: 128px; padding-bottom: 56px; }
  .hero-content { position: relative; z-index: 1; }
  .hero-art { left: 40%; opacity: .22; }
  .hero-content > p:first-child { font-size: 10px; letter-spacing: .18em; }
  .hero-content > div:first-of-type span { font-size: 10px; letter-spacing: .09em; }
  .hero-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .hero-actions a { width: 100%; padding-left: 10px; padding-right: 10px; }
  .portfolio-modal-backdrop { padding: 12px; }
  [data-portfolio-dialog] { max-height: calc(100dvh - 24px); border-radius: 20px; }
  [data-portfolio-dialog] > div { padding: 20px; }
  [data-portfolio-dialog] > div:first-child { gap: 12px; }
  [data-portfolio-dialog] h3 { font-size: 1.4rem; line-height: 1.25; }
  [data-portfolio-dialog] button[aria-label^="Close"] { margin-left: 0; }
  [data-portfolio-dialog] figure img, [data-portfolio-dialog] figure video { min-height: 0; }
  #skills .animate-marquee { animation: none; width: 100%; flex-wrap: wrap; gap: 8px; }
  #skills [data-duplicate="true"] { display: none; }
  #skills .animate-marquee > div { max-width: 100%; white-space: normal; padding: 10px 14px; }
  #skills .animate-marquee span { font-size: 10px; line-height: 1.6; letter-spacing: .08em; }
}
@media (prefers-reduced-motion: reduce) {
  .animate-marquee { animation: none; width: 100%; flex-wrap: wrap; }
  #skills [data-duplicate="true"] { display: none; }
}
      `}</style>
      <main id="main-content" className="portfolio-main min-h-screen bg-[#f7f2eb] text-[#1d1b18]">
      <nav ref={navRef} aria-label="Main navigation" className="fixed left-0 top-0 z-50 w-full border-b border-[#e5ddd3] bg-[#f7f2eb]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#" aria-label="Subar Mahdi home" className="portfolio-nav-link shrink-0 font-serif text-2xl tracking-tight">SM<span className="text-[#b57967]">✦</span></a>
          <div className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600 xl:flex">
            {navItems.map(([id, label]) => <a key={id} className="portfolio-nav-link" href={`#${id}`}>{label}</a>)}
          </div>
          <div className="flex items-center gap-3">
            <a href="/documents/Subar-Mahdi-CV-627a7d73ab9a.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-xl border border-[#ded3c7] px-4 py-2 text-sm font-semibold">CV ↗</a>
            <button ref={menuButtonRef} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl border border-[#ded3c7] px-4 py-2 text-sm font-semibold xl:hidden">{menuOpen ? "Close menu" : "Menu ☰"}</button>
          </div>
        </div>
        {menuOpen && (
          <div id="mobile-navigation" className="mobile-menu border-t border-[#e5ddd3] bg-[#f7f2eb] px-5 py-4 shadow-lg xl:hidden">
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2">
              {[...navItems, ["testimonials", "Testimonial"]].map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="portfolio-nav-link rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 hover:bg-[#ead4cd]">{label}</a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="portfolio-hero relative flex min-h-screen items-center overflow-hidden px-8 pt-24">
        <div className="hero-art" aria-hidden="true">
        <div className="pointer-events-none absolute right-[-170px] top-[120px] h-[720px] w-[720px] rounded-full border border-[#c89484]/30" />
        <div className="pointer-events-none absolute right-[-90px] top-[200px] h-[560px] w-[560px] rounded-full border border-[#c89484]/25" />
        <div className="pointer-events-none absolute right-[-10px] top-[280px] h-[400px] w-[400px] rounded-full border border-[#c89484]/25" />
        <div className="pointer-events-none absolute right-[90px] top-[380px] h-[230px] w-[230px] rounded-full border border-[#c89484]/35" />

        <div aria-hidden="true" className="pointer-events-none absolute right-[-170px] top-[120px] h-[720px] w-[720px] hero-orbit hero-orbit-outer">
          <span className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b57967] shadow-xl" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute right-[-90px] top-[200px] h-[560px] w-[560px] hero-orbit hero-orbit-middle">
          <span className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#82a9c9] shadow-lg" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute right-[-10px] top-[280px] h-[400px] w-[400px] hero-orbit hero-orbit-inner">
          <span className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#caa36b] shadow-lg" />
        </div>

        </div>

        <div className="hero-content mx-auto w-full max-w-6xl">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b57967]">
            <span className="h-px w-10 bg-[#b57967]" />
            Engineering · Research · Physical Systems
          </p>

          <h1 className="font-serif text-7xl leading-[0.95] tracking-tight md:text-9xl">
            Subar
            <br />
            <span className="italic text-[#b57967]">Mahdi</span>
          </h1>

          <div className="mt-8 flex max-w-4xl flex-wrap gap-3">
            <span className="max-w-full rounded-full bg-[#18324a] px-4 py-2 font-mono text-xs uppercase leading-6 tracking-[0.14em] text-[#9bb8d1]">
              Cardiff University · BEng Mechanical &amp; Electrical Engineering
            </span>
          </div>

          <div className="hero-actions mt-12 flex w-full flex-wrap gap-4">
            <a
              href="#crob"
              className="flex h-14 w-44 items-center justify-center rounded-md bg-[#1d1b18] px-6 text-center text-sm font-semibold text-white transition duration-300 hover:opacity-90"
            >
              Explore Internship
            </a>
            <a
              href="/documents/Subar-Mahdi-CV-627a7d73ab9a.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-44 items-center justify-center rounded-md border border-[#ded3c7] bg-white/70 px-6 text-center text-sm font-semibold transition hover:bg-white"
            >
              View CV
            </a>
          </div>

          <a
            href="#about"
            className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-center text-xs uppercase tracking-[0.25em] text-neutral-400 transition hover:text-[#b57967] md:block"
            aria-label="Scroll to about section"
          >
            <p>Scroll</p>
            <p className="mt-2 text-xl">⌄</p>
          </a>
        </div>

        <div className="absolute left-2 top-1/2 hidden -translate-y-1/2 rotate-90 text-xs uppercase tracking-[0.25em] text-neutral-300 md:block">
          Portfolio 2026
        </div>
      </section>


      <section
        id="about"
        className="min-h-screen border-t border-[#e5ddd3] bg-[#f7f2eb] px-8 py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b57967]">
              <span className="h-px w-10 bg-[#b57967]" />
              About
            </p>

            <h2 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl">
              Systems Thinker.
              <br />
              <span className="italic">Builder.</span>
            </h2>

            <div className="mt-10 space-y-7 text-lg leading-9 text-neutral-700">
              <p>I am drawn to engineering where ideas become physical systems: a mechanism that moves, a sensor that reveals something useful, or a prototype that improves through testing. My interests sit at the intersection of mechanical design, electronics and robotics.</p>
              <p>That direction took me to USP Center for Robotics — CRob in São Carlos, Brazil, for a robotics internship. I worked on a manual two-jaw gripper, using Fusion 360 and 3D printing to connect CAD decisions with physical prototypes, alongside hands-on interaction with robots in the lab.</p>
              <p>I value the work between an initial idea and a convincing result: understanding how parts fit, assembling a build, observing its behaviour and using evidence to decide what should change. My thermal monitoring, RC car and smart lamp projects have each developed a different part of that approach.</p>
              <p>Research is another part of how I work. As a Junior Analyst with Bristol Academic Research Society, I contributed to a published scoping review on self-healing composites for satellite applications, developing my ability to assess technical literature and communicate findings clearly.</p>
              <p>I am now studying Mechanical and Electrical Engineering with a Year in Industry at Cardiff University, following my completed Bristol foundation year. My ambition is to build the breadth and practical judgement to contribute across mechanical and electrical systems, with robotics as a central interest.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-[#e3d7cc] bg-white p-3 shadow-sm">
              <img
                src="/profile/subar-profile.jpeg"
                alt="Subar Mahdi"
                className="h-[620px] w-full rounded-[1.5rem] object-cover object-top"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#e3d7cc] bg-white shadow-sm">
              <div className="bg-[#18324a] p-6 text-white">
                <p className="font-serif text-2xl">Cardiff University</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                  BEng Mechanical and Electrical Engineering with a Year in Industry · 2026–present
                </p>
              </div>

              <div className="divide-y divide-[#e3d7cc]">
                <div className="p-6">
                  <p className="font-serif text-3xl">
                    Physical Systems Engineering
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Mechanics · Electronics · Testing
                  </p>
                </div>

                <div className="grid grid-cols-2 divide-x divide-[#e3d7cc]">
                  <div className="p-6">
                    <p className="font-serif text-4xl">4</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                      Engineering Projects
                    </p>
                  </div>

                  <div className="p-6">
                    <p className="font-serif text-4xl">1</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                      Published Research Review
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-serif text-4xl">1</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Completed Internship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="scroll-mt-24 border-t border-[#e5ddd3] bg-[#fbf8f3] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b57967]"><span className="h-px w-10 bg-[#b57967]" />Education</p>
          <h2 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl">Education</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-[#e3d7cc] bg-white p-8 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#b57967]">Current · 2026–present</p>
              <h3 className="mt-5 font-serif text-3xl">Cardiff University</h3>
              <p className="mt-5 text-lg leading-8 text-neutral-700">BEng Mechanical and Electrical Engineering with a Year in Industry</p>
            </article>
            <article className="rounded-[1.75rem] border border-[#e3d7cc] bg-white p-8 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#b57967]">2025–2026 · CertHE completed</p>
              <h3 className="mt-5 font-serif text-3xl">University of Bristol</h3>
              <p className="mt-5 text-lg leading-8 text-neutral-700">Foundation Year in Science, Engineering and Mathematics</p>
            </article>
          </div>
        </div>
      </section>

      <section id="crob" className="scroll-mt-24 border-t border-[#e5ddd3] bg-[#f7f2eb] px-8 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b57967]">
            <span className="h-px w-10 bg-[#b57967]" />Featured Experience · International Internship
          </p>
          <h2 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl">Internship.<br /><span className="italic">From Design to the Lab.</span></h2>
          <article className="mt-14 overflow-hidden rounded-[2rem] border border-[#e3d7cc] bg-white shadow-sm">
            <div className="bg-[#18324a] p-8 text-white md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9bb8d1]">Robotics Engineer Intern</p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">USP Center for Robotics — CRob</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">São Carlos, Brazil · Jun 2026–Sep 2026</p>
                </div>
                <span className="rounded-full border border-white/20 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/80">Completed Internship</span>
              </div>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/85">A three-month international robotics internship spanning gripper design, physical prototyping and hands-on robot interaction, with exposure to the ROS 2 and NVIDIA Isaac tools behind the lab’s robotics workflows.</p>
            </div>
            <div className="grid gap-10 p-8 lg:grid-cols-[1.05fr_0.95fr] md:p-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#b57967]">Mechanical design &amp; prototyping</p>
                <h4 className="mt-5 font-serif text-3xl leading-tight">From a CAD assembly<br /><span className="italic">to a working mechanism.</span></h4>
                <div className="mt-6 space-y-5 text-base leading-8 text-neutral-700">
                  <p>My practical design work centred on a simplified manual two-jaw gripper. I used Fusion 360 to model the assembly and developed physical versions through 3D printing, connecting digital geometry with the way parts fit and move in an assembled mechanism.</p>
                  <p>The V1 and V2 prototypes provided a physical basis for exploring jaw movement, assembly and the relationship between component shape and function. Working between CAD and printed parts helped me understand why a mechanism needs to be assessed as a build, as well as a model.</p>
                  <p>The gripper was a focused mechanical prototype within a much broader robotics environment. Seeing it alongside platforms such as Spot connected the design exercise with wider questions around robot hardware, manipulation and how mechanical components relate to a complete system.</p>
                </div>
              </div>
              <div className="rounded-3xl border border-[#e3d7cc] bg-[#f7f2eb] p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#b57967]">Robot interaction &amp; lab workflows</p>
                <h4 className="mt-5 font-serif text-3xl leading-tight">Understanding the system<br /><span className="italic">behind the movement.</span></h4>
                <div className="mt-6 space-y-5 text-base leading-8 text-neutral-700">
                  <p>Alongside prototyping, I took part in hands-on robot interaction in the lab. This brought the work beyond an isolated mechanism into an environment where operator input, robot movement and feedback form part of a larger control system.</p>
                  <p>The interaction footage shows the physical side of that experience. Behind a robot’s visible response are software interfaces that pass instructions to the control system and make information about its state available. My exposure to ROS 2 helped place that relationship between commands, movement and feedback in context.</p>
                </div>
              </div>
            </div>
            <div className="border-t border-[#e3d7cc] px-8 py-8 md:px-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#b57967]">Technical context · ROS 2 &amp; NVIDIA Isaac</p>
              <h4 className="mt-6 font-serif text-2xl">Software context around the physical system</h4>
              <div className="mt-4 max-w-4xl space-y-5 text-base leading-8 text-neutral-700">
                <p>ROS 2 and NVIDIA Isaac formed part of the wider robotics environment at CRob. Through the lab’s workflows and hands-on interaction with robotic platforms, I gained introductory exposure to how software communication, robot commands, state feedback and simulation connect with physical hardware.</p>
                <p>This gave me a clearer system-level understanding of how a mechanical platform fits within an integrated mechanical, software and control system, rather than viewing the robot purely as a physical machine. My practical work centred on CAD, 3D-printed gripper prototyping and hands-on robot interaction, while the software environment provided valuable context for how those physical systems are controlled, observed and developed.</p>
              </div>
            </div>
            <div className="border-t border-[#e3d7cc] bg-[#f7f2eb] px-8 py-8 md:px-10">
              <h4 className="font-serif text-2xl">What the internship developed</h4>
              <p className="mt-4 max-w-4xl text-base leading-8 text-neutral-700">Across the three months, I connected mechanical design and manufacturing with the wider operation of robotic systems. The experience developed my practical understanding of CAD-to-prototype work, gave me direct contact with research-lab robotics and strengthened my interest in the interaction between mechanics, electronics and control.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Fusion 360 CAD", "3D Printing & Assembly", "Robot Interaction", "ROS 2 Exposure", "Simulation Context"].map((tag) => (
                  <span key={tag} className="rounded-md border border-[#ded3c7] bg-white px-3 py-2 font-mono text-xs uppercase tracking-[0.1em] text-neutral-500">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 border-t border-[#e3d7cc] bg-[#fbf8f3] p-8 md:flex-row md:items-center md:px-10">
              <div><p className="font-serif text-2xl">Explore the work</p><p className="mt-2 text-sm leading-6 text-neutral-600">3 images · 1 video · CAD → V1 → V2 → lab interaction</p></div>
              <div className="flex flex-wrap gap-3">
                <button type="button" onClick={() => openCrobMedia(0)} className="rounded-md bg-[#1d1b18] px-6 py-4 text-sm font-semibold text-white transition hover:opacity-90">View Project Gallery ↗</button>
                <button type="button" onClick={() => openCrobMedia(3)} className="rounded-md border border-[#ded3c7] px-6 py-4 text-sm font-semibold transition hover:bg-white">Watch Lab Video ▷</button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        id="academic"
        className="scroll-mt-24 border-t border-[#e5ddd3] bg-[#f7f2eb] px-8 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b57967]">
            <span className="h-px w-10 bg-[#b57967]" />
            Academic Engineering
          </p>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl">
              Coursework &
              <br />
              <span className="italic">Engineering Investigation</span>
            </h2>

            <p className="max-w-md text-lg leading-8 text-neutral-600">
              A foundation engineering project developed as a complete case study:
              hardware build, sensor integration, experimental testing, data
              analysis and technical reporting.
            </p>
          </div>

          <article className="mt-14 overflow-hidden rounded-[2rem] border border-[#e3d7cc] bg-white shadow-sm">
            <div className="p-8 md:p-10">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md bg-[#ead4cd] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">
                      Embedded Systems
                    </span>
                    <span className="rounded-md bg-[#ead4cd] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">
                      Thermal Imaging
                    </span>
                    <span className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
                      Data Analysis
                    </span>
                    <span className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
                      Arduino
                    </span>
                  </div>

                  <h3 className="mt-7 font-serif text-3xl leading-tight md:text-4xl">
                    Smart Thermal Temperature Monitoring System
                  </h3>

                  <p className="mt-3 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">
                    Arduino Uno · DS18B20 · AMG8833 8×8 Thermal Array · LCD · LEDs
                  </p>
                </div>

                <p className="font-mono text-sm uppercase tracking-[0.14em] text-neutral-400">
                  2026
                </p>
              </div>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-6 text-lg leading-9 text-neutral-700">
                  <p className="italic text-neutral-500">
                    A low-cost temperature monitoring and alert system combining
                    point-based sensing with spatial thermal imaging.
                  </p>

                  <p>
                    This academic engineering project investigated whether combining
                    a DS18B20 point temperature sensor with an AMG8833 thermal camera
                    could improve interpretation of thermal conditions compared with
                    a single threshold-based sensor.
                  </p>

                  <p>
                    The system was developed in two stages. The baseline system used
                    an Arduino Uno, DS18B20 sensor and red/green LEDs to trigger a
                    warning above a 30°C threshold. The extension build added a 16×2
                    LCD display and an AMG8833 8×8 infrared thermal array to provide
                    spatial heat information and laptop-based heatmap visualisation.
                  </p>

                  <p>
                    Experimental testing covered threshold response, ambient stability,
                    thermal condition classification and distance sensitivity. The
                    project showed why a single point sensor can miss localised heat,
                    while a thermal array can identify warmer and cooler regions across
                    a field of view.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#e3d7cc] bg-[#f7f2eb] p-6">
                  <h4 className="font-serif text-2xl">Engineering focus</h4>
                  <ul className="mt-6 space-y-4 text-sm leading-6 text-neutral-700">
                    <li>→ Built and tested an Arduino-based temperature monitoring prototype.</li>
                    <li>→ Integrated DS18B20 point sensing with AMG8833 thermal imaging.</li>
                    <li>→ Tested threshold alerts using LEDs and LCD feedback.</li>
                    <li>→ Collected experimental datasets for heating, cooling, stability and distance response.</li>
                    <li>→ Compared numerical sensor readings with visual thermal heatmaps.</li>
                    <li>→ Evaluated limitations including low 8×8 thermal resolution, distance sensitivity and prototype reliability.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 border-t border-[#e3d7cc] pt-7">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/documents/Temperature-Sensor-Dissertation.docx"
                    className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-[#f7f2eb]"
                  >
                    📄 Dissertation
                  </a>
                  <a
                    href="/documents/Temperature-sensor-Poster.pptx"
                    className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-[#f7f2eb]"
                  >
                    📊 Poster
                  </a>
                  <a
                    href="#thermal-build-media"
                    className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-[#f7f2eb]"
                  >
                    🎥 Build Media
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveModal("thermal")}
                    className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-[#f7f2eb]"
                  >
                    🔎 Case Study
                  </button>
                </div>
              </div>
            </div>
            <div id="thermal-build-media" className="border-t border-[#e3d7cc] bg-[#fbf8f3] p-8 md:p-10">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">
                Build media
              </p>

              <div className="rounded-3xl border border-[#e3d7cc] bg-white p-4">
                <div
  key={thermalMedia[thermalMediaIndex].src}
  className="overflow-hidden rounded-2xl bg-[#f7f2eb] animate-media-fade"
>
                  {thermalMedia[thermalMediaIndex].type === "image" ? (
                    <img
                      src={thermalMedia[thermalMediaIndex].src}
                      alt={thermalMedia[thermalMediaIndex].alt}
                      className="max-h-[560px] w-full object-contain"
                    />
                  ) : (
                    <video
                      src={thermalMedia[thermalMediaIndex].src}
                      className="max-h-[560px] w-full bg-black object-contain"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  )}
                </div>
<p className="mt-3 text-sm leading-6 text-neutral-600">
  {thermalMediaIndex === 0
    ? "Safety-threshold test: the screen shows the live temperature reading, while the LED changes from green to red when the system detects an unsafe temperature."
    : "Thermal-camera test: the sensor detects body heat and turns the temperature readings into a live heat map, showing where the warm area is located."}
</p>
                <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                  {thermalMedia.map((item, index) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setThermalMediaIndex(index)}
                      className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                        thermalMediaIndex === index
                          ? "border-[#b57967] ring-2 ring-[#b57967]/30"
                          : "border-[#ded3c7] opacity-75 hover:opacity-100"
                      }`}
                      aria-label={`Open thermal build media ${index + 1}`}
                    >
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <video
                          src={item.src}
                          className="h-full w-full bg-black object-cover"
                          muted
                          playsInline
                          preload="metadata"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        id="beyond"
        className="scroll-mt-24 border-t border-[#e5ddd3] bg-[#f7f2eb] px-5 py-28 sm:px-8"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b57967]">
            <span className="h-px w-10 bg-[#b57967]" />
            Beyond the Curriculum
          </p>

          <h2 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl">
            Beyond the
            <br />
            <span className="italic">Curriculum</span>
          </h2>

          <div className="mx-auto mt-14 grid w-full max-w-5xl gap-6 md:max-w-none md:grid-cols-2">

            <article className="w-full rounded-[1.75rem] border border-[#e3d7cc] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-[#ead4cd] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">
                  Vehicle Design
                </span>
                <span className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
                  CAD
                </span>
                <span className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
                  Mechanical Design
                </span>
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-neutral-400">
                Sep 2025 · May 2026
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight">
                RC Car
              </h3>
              <p className="mt-3 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">
                Mechanical Design · CAD · Packaging
              </p>
              <p className="mt-6 text-base leading-8 text-neutral-700">
                Worked on the mechanical and electrical development of a scaled racing car, including drivetrain packaging, steering concepts, CAD-based layout and manufacturing constraints for laser-cut and 3D-printed parts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-[#e3d7cc] pt-6">
                <button
                  type="button"
                  onClick={() => setActiveModal("bristol-racing")}
                  className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-[#f7f2eb]"
                >
                  🔎 Full Project
                </button>
              </div>
            </article>

            <article className="w-full rounded-[1.75rem] border border-[#e3d7cc] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-[#ead4cd] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">
                  Embedded Systems
                </span>
                <span className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
                  Electromechanical
                </span>
                <span className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
                  Build Integration
                </span>
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-neutral-400">
                Sep 2025 · Dec 2025
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight">
                Smart Lamp · Embedded Electromechanical System
              </h3>
              <p className="mt-3 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">
                Arduino · Sensors · Build Integration · Product-style build
              </p>
              <p className="mt-6 text-base leading-8 text-neutral-700">
                Built and tested an Arduino-based smart lamp to develop practical understanding of sensor integration, LED responses, wiring and hardware troubleshooting.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-[#e3d7cc] pt-6">
                <button
                  type="button"
                  onClick={() => setActiveModal("smart-lamp")}
                  className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-[#f7f2eb]"
                >
                  🔎 Full Project
                </button>
              </div>
            </article>

          </div>
        </div>
      </section>

<section
        id="research"
        className="relative overflow-hidden border-t border-[#1f3042] bg-[#243244] px-8 py-28 text-white"
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/40" />
          <div className="absolute left-[48%] top-[12%] h-1 w-1 rounded-full bg-white/40" />
          <div className="absolute right-[22%] top-[20%] h-1.5 w-1.5 rounded-full bg-white/40" />
          <div className="absolute right-[10%] top-[55%] h-1 w-1 rounded-full bg-white/40" />
          <div className="absolute bottom-[18%] left-[18%] h-1 w-1 rounded-full bg-white/40" />
          <div className="absolute bottom-[12%] right-[30%] h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            <span className="h-px w-10 bg-white/60" />
            Research
          </p>

          <h2 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl">
            Research & Scholarly Work
            <br />
            <span className="italic">Published Review · Ongoing Research</span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            A completed materials scoping review and a separate ongoing robotics research collaboration, grounded in literature review and practical lab exposure.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-8 shadow-sm backdrop-blur">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/60">
                  Published Scoping Review
                </span>
              </div>

              <h3 className="mt-7 font-serif text-3xl leading-tight text-white">
                Multifunctional Self-Healing Structural Composites for Load Bearing Satellite Applications: A Qualitative Scoping Review
              </h3>

              <p className="mt-6 text-base leading-8 text-white/65">
                Published qualitative scoping review of multifunctional self-healing structural composites for load bearing satellite applications. I contributed as a Junior Analyst, reviewing literature and helping communicate the material trade-offs and limitations identified in the review.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/55">
                  Materials Engineering
                </span>
                <span className="rounded-md border border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/55">
                  Literature Review
                </span>
                <span className="rounded-md border border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/55">
                  Satellite Applications
                </span>
              </div>

              <p className="mt-10 font-mono text-sm leading-7 tracking-[0.14em] text-white/50">
                Bristol Academic Research Society · Junior Analyst
              </p>
              <div className="mt-6 flex flex-wrap gap-3"><a href="https://bristolressoc.com/Paper/2/" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/25 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Read published paper ↗</a><button type="button" onClick={() => setActiveModal("resoc")} className="rounded-md border border-white/25 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Review contribution</button></div>
            </article>

            <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-8 shadow-sm backdrop-blur">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/60">
                  Ongoing Research
                </span>
                <span className="rounded-md bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/60">
                  Research Collaboration
                </span>
              </div>

              <h3 className="mt-7 font-serif text-3xl leading-tight text-white">
                Robotics Research Collaboration
              </h3>

              <p className="mt-6 text-base leading-8 text-white/65">
                Ongoing research collaboration with USP Center for Robotics — CRob following my completed internship in São Carlos, Brazil. The research context connects robotic data acquisition, manipulation and the relationship between physical platforms and supporting software workflows. My internship experience combined gripper prototyping, robot interaction and introductory exposure to ROS 2 and NVIDIA Isaac in the lab.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/55">
                  Sensor Integration
                </span>
                <span className="rounded-md border border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/55">
                  Data Acquisition
                </span>
                <span className="rounded-md border border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/55">
                  Robotic Manipulation
                </span>
              </div>

              <p className="mt-10 font-mono text-sm leading-7 tracking-[0.14em] text-white/50">
                USP Center for Robotics — CRob · Ongoing collaboration
              </p>
            </article>
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="relative z-10 overflow-hidden border-t border-[#e5ddd3] bg-[#fbf8f3] px-8 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b57967]">
            <span className="h-px w-10 bg-[#b57967]" />
            Technical Skills
          </p>

          <h2 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl">
            Tools &
            <br />
            <span className="italic">Capabilities</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-6xl overflow-hidden py-2">
          <div className="flex w-max animate-marquee gap-4">
            {[...softwareTools, ...softwareTools].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                data-duplicate={index >= softwareTools.length}
                aria-hidden={index >= softwareTools.length ? true : undefined}
                className="flex shrink-0 items-center rounded-full border border-[#e3d7cc] bg-[#fbf8f3] px-6 py-3 shadow-sm"
              >
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2">
          {[
            [
              "Mechanical Design & Physical Systems",
              [
                "Basic CAD Modelling",
                "3D Printing & Prototyping",
                "Mechanical Assembly",
              ],
            ],
            [
              "Electronics & Testing",
              [
                "Arduino Project Exposure",
                "Sensor Integration",
                "Hardware Testing",
              ],
            ],
            [
              "Experimental Work & Research",
              [
                "Experimental Testing",
                "Data Acquisition",
                "Technical Reporting",
                "Literature Review",
              ],
            ],
          ].map(([category, skills]) => (
            <div
              key={category as string}
              className="rounded-[1.5rem] border border-[#e3d7cc] bg-white p-6 shadow-sm last:md:col-span-2"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#b57967]">
                {category as string}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {(skills as string[]).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#ded3c7] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.10em] text-neutral-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section
        id="testimonials"
        className="border-t border-[#e5ddd3] bg-[#f7f2eb] px-8 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b57967]">
            <span className="h-px w-10 bg-[#b57967]" />
            Recommendations
          </p>

          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            What People
            <br />
            <span className="italic">Have Said</span>
          </h2>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <figure className="m-0 border-l border-[#e3d7cc] pl-5 sm:pl-8">
            <p className="max-w-3xl font-serif text-lg italic leading-8 text-neutral-700 md:text-xl md:leading-9">
              “Subar has been highly motivated and enthusiastic in developing his engineering knowledge. He is well organised, determined and consistently willing to explore new ideas and challenges. His curiosity, work ethic and commitment to learning have stood out throughout his studies, and he approaches engineering problems with maturity, independence and a positive attitude.”
            </p>

            <div className="mt-8">
              <p className="font-semibold text-neutral-800">Dr Saeed Jahdi</p>
              <p className="mt-1 font-mono text-[11px] uppercase leading-5 tracking-[0.14em] text-neutral-500">
                Senior Lecturer in Power Electronics · University of Bristol
              </p>
            </div>
          </figure>
          <figure className="m-0 border-l border-[#e3d7cc] pl-5 sm:pl-8">
            <blockquote className="font-serif text-lg italic leading-8 text-neutral-700 md:text-xl md:leading-9">
              “Mr. Mahdi demonstrated curiosity, initiative and a willingness to engage with unfamiliar engineering problems. He approached practical work thoughtfully, sought to understand the reasoning behind technical decisions and showed a commitment to developing his knowledge through experience.”
            </blockquote>
            <figcaption className="mt-8">
              <p className="font-semibold text-neutral-800">Marcelo Becker</p>
              <p className="mt-1 font-mono text-[11px] uppercase leading-5 tracking-[0.14em] text-neutral-500">
                Associate Professor · USP Center for Robotics — CRob
              </p>
              <a
                href="/documents/Marcelo-Becker-Recommendation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#18354a] bg-[#18354a] px-5 py-3 text-center text-sm font-semibold !text-white transition hover:bg-[#24465e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18354a]"
                aria-label="View Marcelo Becker’s letter of recommendation (PDF, opens in a new tab)"
              >
                View Letter of Recommendation <span aria-hidden="true">↗</span>
              </a>
            </figcaption>
          </figure>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-t border-[#e5ddd3] bg-[#f7f2eb] px-8 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b57967]">
            <span className="h-px w-10 bg-[#b57967]" />
            Experience & Leadership
          </p>

          <h2 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl">
            Roles &
            <br />
            <span className="italic">Responsibilities</span>
          </h2>

          <div className="mt-12 space-y-9 border-l border-[#e3d7cc] pl-6 md:pl-8">
            <article className="relative">
              <span className="absolute -left-[33px] top-2 h-2 w-2 rounded-full bg-[#b57967] md:-left-[37px]" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-2xl leading-tight md:text-3xl">
                    Robotics Engineer Intern
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#b57967]">
                    USP Center for Robotics — CRob
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                    On-site · São Carlos, Brazil · Completed internship
                  </p>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                  Jun 2026–Sep 2026
                </p>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
                Completed a robotics internship focused on practical design and lab exposure. Worked on a simplified manual two-jaw gripper using Fusion 360 CAD and 3D-printed prototypes, developing an understanding of physical iteration and assembly.
              </p>
              <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-700">
                Took part in hands-on robot interaction and gained introductory exposure to ROS 2 workflows and NVIDIA Isaac within the lab environment, developing an understanding of how robot commands, feedback and simulation relate to physical systems. The research collaboration with CRob remains ongoing.
              </p>
              <a href="#crob" className="mt-5 inline-flex text-sm font-semibold text-[#b57967] underline underline-offset-4">View gripper project and lab media ↗</a>
            </article>

            <article className="relative border-t border-[#e3d7cc] pt-9">
              <span className="absolute -left-[33px] top-11 h-2 w-2 rounded-full bg-[#b57967] md:-left-[37px]" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-2xl leading-tight md:text-3xl">
                    Mechanical Engineer · Formula Student
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#b57967]">
                    Bristol Racing
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                    RC Car Division · CAD · Mechanical Packaging
                  </p>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                  Sep 2025 · Jul 2026
                </p>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
                Worked on mechanical and electrical aspects of a scaled race car used for Formula Student. Focused on drivetrain and steering concepts, CAD-based packaging, wiring layouts and manufacturability considerations for laser-cut and 3D-printed parts. The role developed practical judgement around how design choices affect assembly, tolerances, testing and physical reliability.
              </p>
            </article>

            <article className="relative border-t border-[#e3d7cc] pt-9">
              <span className="absolute -left-[33px] top-11 h-2 w-2 rounded-full bg-[#b57967] md:-left-[37px]" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-2xl leading-tight md:text-3xl">
                    Junior Analyst · Engineering & Technology
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#b57967]">
                    Bristol Academic Research Society · ResSoc
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                    Applied Research · Technical Briefs · Literature Review
                  </p>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                  Sep 2025 · Jul 2026
                </p>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
                Contributed as a Junior Analyst to the completed and published qualitative scoping review of multifunctional self-healing structural composites for load bearing satellite applications. Reviewed technical literature and contributed to clear research summaries through Bristol Academic Research Society.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-[#1d1b18] px-8 py-24 text-white"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            <span className="h-px w-10 bg-white/40" />
            LET&apos;S CONNECT
            <span className="h-px w-10 bg-white/40" />
          </p>

          <h2 className="mb-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Get In Touch
          </h2>

          <div className="mx-auto mb-10 max-w-2xl space-y-5 text-base leading-7 text-white/70">
            <p>
              I’m always interested in connecting with engineers, researchers, academics and industry professionals working on challenging technical problems.
            </p>
            <p>
              My goal is to develop a broad understanding of how complex systems are designed, integrated, tested and improved, spanning multiple engineering disciplines and environments.
            </p>
            <p>
              I am open to research collaborations, engineering opportunities, future internships, industry conversations and professional networking. Whether you’d like to discuss a project, share ideas, explore opportunities or simply connect, I’d be happy to hear from you.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:subar.mahdi@hotmail.com"
              className="rounded-md border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/smahdi98/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              LinkedIn ↗
            </a>
            <a
              href="/documents/Subar-Mahdi-CV-627a7d73ab9a.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View CV
            </a>
          </div>
        </div>
      </section>
      </main>
      {activeModal === "crob" && (
        <div className="portfolio-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
          <div data-portfolio-dialog tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="crob-gallery-title" className="max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] text-[#1d1b18] shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-[#e3d7cc] bg-[#fbf8f3]/95 p-6 backdrop-blur">
              <div><p className="font-mono text-xs uppercase tracking-[0.14em] text-[#b57967]">USP Center for Robotics — CRob</p><h3 id="crob-gallery-title" className="mt-3 font-serif text-3xl">Design, prototypes &amp; lab experience</h3></div>
              <button type="button" onClick={() => setActiveModal(null)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ded3c7] bg-white text-2xl" aria-label="Close robotics gallery">×</button>
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-6 flex flex-wrap gap-2" aria-label="Choose project media">
                {crobMedia.map((item, index) => (
                  <button key={item.src} type="button" onClick={() => selectCrobMedia(index)} aria-pressed={index === crobMediaIndex} className={`rounded-md border px-3 py-2 text-sm transition ${index === crobMediaIndex ? "border-[#18324a] bg-[#18324a] text-white" : "border-[#ded3c7] bg-white text-neutral-600 hover:bg-[#ead4cd]"}`}>{index + 1}. {item.title}</button>
                ))}
              </div>
              <figure>
                <div className="overflow-hidden rounded-2xl border border-[#e3d7cc] bg-[#eee7df]">
                  {crobMediaError ? (
                    <div className="flex min-h-64 items-center justify-center p-8 text-center text-neutral-600"><p>This media could not be loaded. Please try another item.</p></div>
                  ) : crobMedia[crobMediaIndex].type === "image" ? (
                    <img key={crobMedia[crobMediaIndex].src} src={crobMedia[crobMediaIndex].src} alt={crobMedia[crobMediaIndex].caption} onError={() => setCrobMediaError(true)} className="max-h-[55vh] min-h-48 w-full object-contain" />
                  ) : (
                    <video key={crobMedia[crobMediaIndex].src} src={crobMedia[crobMediaIndex].src} aria-label={crobMedia[crobMediaIndex].title} onError={() => setCrobMediaError(true)} controls playsInline preload="metadata" className="max-h-[55vh] min-h-48 w-full bg-black object-contain" />
                  )}
                </div>
                <figcaption className="mt-6" aria-live="polite"><p className="font-mono text-xs uppercase tracking-[0.16em] text-[#b57967]">{crobMediaIndex + 1} / {crobMedia.length} · {crobMedia[crobMediaIndex].title}</p><p className="mt-3 max-w-3xl text-base leading-8 text-neutral-700">{crobMedia[crobMediaIndex].caption}</p></figcaption>
              </figure>
              <div className="mt-6 flex justify-between gap-4 border-t border-[#e3d7cc] pt-6">
                <button type="button" onClick={() => selectCrobMedia((crobMediaIndex + crobMedia.length - 1) % crobMedia.length)} className="rounded-md border border-[#ded3c7] px-4 py-3 text-sm hover:bg-white">← Previous</button>
                <button type="button" onClick={() => selectCrobMedia((crobMediaIndex + 1) % crobMedia.length)} className="rounded-md border border-[#ded3c7] px-4 py-3 text-sm hover:bg-white">Next →</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeModal === "thermal" && (
        <div
          className="portfolio-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            data-portfolio-dialog tabIndex={-1} role="dialog" aria-modal="true" aria-label="Thermal monitoring case study"
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] text-[#1d1b18] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-[#e3d7cc] bg-[#fbf8f3]/95 p-6 backdrop-blur">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-[#ead4cd] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">
                    Embedded Systems
                  </span>
                  <span className="rounded-md bg-[#ead4cd] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">
                    Thermal Imaging
                  </span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
                    2026
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                  Smart Thermal Temperature Monitoring System
                </h3>

                <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">
                  Arduino Uno · DS18B20 · AMG8833 · LCD · LEDs
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="ml-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ded3c7] bg-white text-2xl leading-none transition hover:bg-[#f7f2eb]"
                aria-label="Close case study"
              >
                ×
              </button>
            </div>

            <div className="space-y-10 p-6 md:p-10">
              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">
                  Project aim
                </p>

                <p className="mt-4 text-lg leading-9 text-neutral-700">
                  I designed and tested a low-cost smart temperature monitoring system that combined a DS18B20 point temperature sensor with an AMG8833 8×8 thermal array. The aim was to test whether adding spatial thermal information could make a basic threshold alert system more useful for identifying heat sources, hotspots and different thermal conditions.
                </p>
              </section>

              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">
                  What I did
                </p>

                <ul className="mt-4 space-y-4 text-base leading-8 text-neutral-700">
                  <li>→ Built a baseline Arduino system using a DS18B20 digital temperature sensor to collect point temperature readings.</li>
                  <li>→ Built and tested the threshold-alert system: readings above 30°C triggered a red warning LED, while a green LED indicated readings below the threshold.</li>
                  <li>→ Added an LCD display so live temperature values and system states could be read directly from the prototype rather than only through the serial monitor.</li>
                  <li>→ Integrated an AMG8833 8×8 infrared thermal camera to collect 64 spatial temperature readings across the field of view.</li>
                  <li>→ Used laptop-based thermal visualisation to turn the AMG8833 readings into heatmaps for room temperature, human heat, hot object and cold object tests.</li>
                  <li>→ Collected experimental data for threshold response, ambient sensor stability, thermal classification and distance sensitivity.</li>
                  <li>→ Analysed the difference between peak thermal readings, average thermal readings and the DS18B20 point sensor output to understand where each sensing method was useful or limited.</li>
                </ul>
              </section>

              <section className="rounded-3xl border border-[#e3d7cc] bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">
                  Key engineering result
                </p>

                <p className="mt-4 text-lg leading-9 text-neutral-700">
                  The DS18B20 worked well as a stable point sensor and successfully detected when the 30°C warning threshold was crossed. However, the thermal array showed what the point sensor could not: where heat was located. In the hot object test, the point sensor remained close to room temperature because it was not placed directly on the heat source, while the AMG8833 clearly detected a localised hot region in the heatmap. This demonstrated the value of combining point sensing with spatial thermal data.
                </p>
              </section>

              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">
                  Build evidence
                </p>

                <div className="mt-5 rounded-3xl border border-[#e3d7cc] bg-white p-4">
                  <div
  key={thermalMedia[thermalMediaIndex].src}
  className="overflow-hidden rounded-2xl bg-[#f7f2eb] animate-media-fade"
>
                    {thermalMedia[thermalMediaIndex].type === "image" ? (
                      <img
                        src={thermalMedia[thermalMediaIndex].src}
                        alt={thermalMedia[thermalMediaIndex].alt}
                        className="max-h-[520px] w-full object-contain"
                      />
                    ) : (
                      <video
                        src={thermalMedia[thermalMediaIndex].src}
                        className="max-h-[520px] w-full bg-black object-contain"
                        controls
                        playsInline
                        preload="metadata"
                      />
                    )}
                  </div>
<p className="mt-3 text-sm leading-6 text-neutral-600">
  {thermalMediaIndex === 0
    ? "Safety-threshold test: the screen shows the live temperature reading, while the LED changes from green to red when the system detects an unsafe temperature."
    : "Thermal-camera test: the sensor detects body heat and turns the temperature readings into a live heat map, showing where the warm area is located."}
</p>
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                    {thermalMedia.map((item, index) => (
                      <button
                        key={item.src}
                        type="button"
                        onClick={() => setThermalMediaIndex(index)}
                        className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                          thermalMediaIndex === index
                            ? "border-[#b57967] ring-2 ring-[#b57967]/30"
                            : "border-[#ded3c7] opacity-75 hover:opacity-100"
                        }`}
                        aria-label={`Open thermal build media ${index + 1}`}
                      >
                        {item.type === "image" ? (
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <video
                            src={item.src}
                            className="h-full w-full bg-black object-cover"
                            muted
                            playsInline
                            preload="metadata"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">
                  What I learned
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#e3d7cc] bg-white p-5 text-sm leading-7 text-neutral-700">
                    Combining complementary sensors can make a simple monitoring system more useful by combining reliable point measurements with broader spatial context.
                  </div>
                  <div className="rounded-2xl border border-[#e3d7cc] bg-white p-5 text-sm leading-7 text-neutral-700">
                    Low-cost thermal hardware needs careful testing because resolution, wiring reliability, calibration and distance all affect system performance.
                  </div>
                  <div className="rounded-2xl border border-[#e3d7cc] bg-white p-5 text-sm leading-7 text-neutral-700">
                    Experimental design matters: stable readings, repeatable test conditions and consistent data logging are essential before drawing conclusions.
                  </div>
                  <div className="rounded-2xl border border-[#e3d7cc] bg-white p-5 text-sm leading-7 text-neutral-700">
                    Visual data can make engineering systems easier to interpret, especially when the problem is not only detecting heat but locating it.
                  </div>
                </div>
              </section>

              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">
                  Next iteration
                </p>

                <p className="mt-4 text-lg leading-9 text-neutral-700">
                  A stronger version of this prototype would use a higher-resolution thermal sensor, improved calibration, wireless alerting, cleaner data logging and a more robust enclosure with secure sensor mounting. The project gave me practical experience in embedded sensing, experimental testing, hardware reliability, data interpretation and technical reporting.
                </p>
              </section>

              <section className="border-t border-[#e3d7cc] pt-6">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/documents/Temperature-Sensor-Dissertation.docx"
                    className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-white"
                  >
                    📄 Dissertation
                  </a>
                  <a
                    href="/documents/Temperature-sensor-Poster.pptx"
                    className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-white"
                  >
                    📊 Poster
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      {activeModal === "bristol-racing" && (
        <div
          className="portfolio-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            data-portfolio-dialog tabIndex={-1} role="dialog" aria-modal="true" aria-label="RC car project"
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] text-[#1d1b18] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-[#e3d7cc] bg-[#fbf8f3]/95 p-6 backdrop-blur">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-[#ead4cd] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">Mechanical Design</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Vehicle Packaging</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">CAD</span>
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">RC Car</h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">Mechanical Design · CAD · Packaging</p>
              </div>
              <button type="button" onClick={() => setActiveModal(null)} className="ml-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ded3c7] bg-white text-2xl leading-none transition hover:bg-[#f7f2eb]" aria-label="Close Bristol Racing modal">×</button>
            </div>

            <div className="space-y-10 p-6 md:p-10">
              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">What I did</p>
                <ul className="mt-4 space-y-4 text-base leading-8 text-neutral-700">
                  <li>→ Worked on the mechanical and electrical development of a scaled racing car.</li>
                  <li>→ Focused on drivetrain packaging, steering concepts, component placement and layout decisions under tight packaging constraints.</li>
                  <li>→ Used CAD-based thinking to translate dimensions, wheel spacing, axle positioning and mounting choices into buildable geometry.</li>
                  <li>→ Designed around manufacturing limits including laser-cut parts, 3D-printed components, drilling positions and assembly tolerances.</li>
                  <li>→ Learned how small physical decisions affect stability, manufacturability, serviceability and testing.</li>
                </ul>
              </section>

              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">Media</p>
                <div className="mt-5 rounded-3xl border border-[#e3d7cc] bg-white p-4">
                  <img src="/projects/thermal/Extra/RC%20Car.jpeg" alt="Bristol Racing RC car project" className="max-h-[560px] w-full rounded-2xl object-contain" />
                </div>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
  Final RC car build showing the completed chassis, wheel layout, steering arrangement, electronics placement and drivetrain packaging after assembly and testing.
</p>
              </section>

              <section className="rounded-3xl border border-[#e3d7cc] bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">Engineering value</p>
                <p className="mt-4 text-lg leading-9 text-neutral-700">This project shows practical mechanical judgement: not just drawing an idea, but understanding whether it can be built, assembled, tested and improved with real constraints.</p>
              </section>
            </div>
          </div>
        </div>
      )}


      {activeModal === "smart-lamp" && (
        <div
          className="portfolio-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            data-portfolio-dialog tabIndex={-1} role="dialog" aria-modal="true" aria-label="Smart lamp project"
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] text-[#1d1b18] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-[#e3d7cc] bg-[#fbf8f3]/95 p-6 backdrop-blur">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-[#ead4cd] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">Embedded Systems</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Build Integration</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Electromechanical</span>
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">Smart Lamp · Embedded Electromechanical System</h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">Arduino · Sensors · LEDs · Build Integration · Hardware Debugging</p>
              </div>
              <button type="button" onClick={() => setActiveModal(null)} className="ml-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ded3c7] bg-white text-2xl leading-none transition hover:bg-[#f7f2eb]" aria-label="Close Smart Lamp modal">×</button>
            </div>

            <div className="space-y-10 p-6 md:p-10">
              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">What I did</p>
                <ul className="mt-4 space-y-4 text-base leading-8 text-neutral-700">
                  <li>→ Designed and assembled an embedded electronics system using a microcontroller, LED output, sensors, resistors and power supply.</li>
                  <li>→ Integrated and tested Arduino-based sensor inputs and LED responses, observing timing and switching behaviour.</li>
                  <li>→ Worked with PIR and sound sensing concepts to explore interaction-based control.</li>
                  <li>→ Explored LED switching and dimming behaviour as part of the Arduino-based build.</li>
                  <li>→ Investigated build issues across wiring, sensor connections, power delivery and component choice.</li>
                  <li>→ Practised iterative engineering: build, test, diagnose, refine.</li>
                </ul>
              </section>

              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">Media</p>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-3xl border border-[#e3d7cc] bg-white p-3">
                    <video
                      src="/projects/thermal/Extra/Smart Lamp 1.mp4"
                      className="aspect-video w-full rounded-2xl bg-black object-contain"
                      controls
                      playsInline
                      preload="metadata"
                    />
                    <p className="mt-3 text-sm leading-6 text-neutral-600">
                      Sound-control test: the lamp turns on and off when the sound sensor detects a click or clap, showing basic hands-free control through an Arduino input.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-[#e3d7cc] bg-white p-3">
                    <video
                      src="/projects/thermal/Extra/Smart Lamp 2.mp4"
                      className="aspect-video w-full rounded-2xl bg-black object-contain"
                      controls
                      playsInline
                      preload="metadata"
                    />
                    <p className="mt-3 text-sm leading-6 text-neutral-600">
                      Motion-sensor test: the lamp reacts when the PIR sensor detects movement, switching the light on and off automatically based on nearby motion.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-[#e3d7cc] bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">Engineering value</p>
                <p className="mt-4 text-lg leading-9 text-neutral-700">The smart lamp helped bridge the gap between theoretical electronics and actual embedded behaviour. It developed practical understanding of sensor responses, wiring, current limits and iterative hardware testing.</p>
              </section>
            </div>
          </div>
        </div>
      )}


      {activeModal === "resoc" && (
        <div
          className="portfolio-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            data-portfolio-dialog tabIndex={-1} role="dialog" aria-modal="true" aria-label="Published research contribution"
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] text-[#1d1b18] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-[#e3d7cc] bg-[#fbf8f3]/95 p-6 backdrop-blur">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-[#ead4cd] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">Research</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Materials</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Satellite Structures</span>
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">Bristol Academic Research Society · Engineering & Technology</h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">Multifunctional Self-Healing Structural Composites for Load Bearing Satellite Applications: A Qualitative Scoping Review</p>
              </div>
              <button type="button" onClick={() => setActiveModal(null)} className="ml-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ded3c7] bg-white text-2xl leading-none transition hover:bg-[#f7f2eb]" aria-label="Close research modal">×</button>
            </div>

            <div className="space-y-10 p-6 md:p-10">
              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">Research focus</p>
                <p className="mt-4 text-lg leading-9 text-neutral-700">This published qualitative scoping review investigated multifunctional self-healing composites for satellite structural applications, assessing how materials that can repair damage may improve durability for spacecraft exposed to thermal cycling, radiation, vacuum and micrometeoroid risk.</p>
              </section>
              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">My contribution · Junior Analyst</p>
                <ul className="mt-4 space-y-4 text-base leading-8 text-neutral-700">
                  <li>→ Conducted structured literature review across self-healing materials, composites and satellite structures.</li>
                  <li>→ Compared capsule-based, vascular and intrinsic self-healing approaches.</li>
                  <li>→ Assessed trade-offs between healing performance, mechanical strength, mass, manufacturability and space-environment suitability.</li>
                  <li>→ Translated complex academic literature into clear technical summaries and research arguments.</li>
                  <li>→ Contributed as a Junior Analyst to the completed review published by Bristol Academic Research Society.</li>
                </ul>
                <a href="https://bristolressoc.com/Paper/2/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-md border border-[#ded3c7] px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:bg-white">Read published paper ↗</a>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}