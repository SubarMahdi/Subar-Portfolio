"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);


  const [thermalMediaIndex, setThermalMediaIndex] = useState(0);
  const softwareTools = [
    {
      name: "Fusion 360",
      icon: "https://cdn.simpleicons.org/autodesk/0696D7",
      fallback: "F360",
    },
    {
      name: "Inventor",
      icon: "https://cdn.simpleicons.org/autodesk/0696D7",
      fallback: "INV",
    },
    {
      name: "Arduino IDE",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
      fallback: "∞",
    },
    {
      name: "MATLAB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
      fallback: "M",
    },
    {
      name: "Excel",
      icon: "https://cdn.simpleicons.org/microsoftexcel/217346",
      fallback: "X",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      fallback: "Py",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      fallback: "GH",
    },
    {
      name: "LaTeX",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",
      fallback: "TeX",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      fallback: "VS",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      fallback: "N",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      fallback: "TS",
    },
    {
      name: "OpenRocket",
      icon: "",
      fallback: "🚀",
    },
    {
      name: "ROS 2",
      icon: "https://cdn.simpleicons.org/ros/22314E",
      fallback: "ROS",
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      fallback: "LX",
    },
    {
      name: "Jupyter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      fallback: "J",
    },
    {
      name: "Google Colab",
      icon: "https://cdn.simpleicons.org/googlecolab/F9AB00",
      fallback: "GC",
    },
    {
      name: "ANSYS",
      icon: "",
      fallback: "A",
    },
    {
      name: "SolidWorks",
      icon: "https://cdn.simpleicons.org/dassaultsystemes/005386",
      fallback: "SW",
    },
    {
      name: "LTspice",
      icon: "",
      fallback: "LT",
    },
    {
      name: "Multisim",
      icon: "https://cdn.simpleicons.org/ni/00A3E0",
      fallback: "NI",
    },
  ];

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
      <main className="min-h-screen bg-[#f7f2eb] text-[#1d1b18]">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#e5ddd3] bg-[#f7f2eb]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <a href="#" className="font-serif text-2xl tracking-tight">
            SM<span className="text-[#b57967]">✦</span>
          </a>

          <div className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 md:flex">
            <a href="#about">About</a>
            <a href="#academic">Academic</a>
            <a href="#beyond">Beyond</a>
            <a href="#research">Research</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Roles</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="/cv.pdf"
            download="Subar-Mahdi-CV.pdf"
            className="rounded-xl border border-[#ded3c7] px-4 py-2 text-sm font-semibold"
          >
            CV ↓
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-8 pt-24">
        <div className="pointer-events-none absolute right-[-170px] top-[120px] h-[720px] w-[720px] rounded-full border border-[#c89484]/30" />
        <div className="pointer-events-none absolute right-[-90px] top-[200px] h-[560px] w-[560px] rounded-full border border-[#c89484]/25" />
        <div className="pointer-events-none absolute right-[-10px] top-[280px] h-[400px] w-[400px] rounded-full border border-[#c89484]/25" />
        <div className="pointer-events-none absolute right-[90px] top-[380px] h-[230px] w-[230px] rounded-full border border-[#c89484]/35" />

        <div className="pointer-events-none absolute right-[75px] top-[235px] h-10 w-10 animate-pulse rounded-full bg-[#b57967] shadow-xl" />
        <div className="pointer-events-none absolute right-[330px] top-[430px] h-6 w-6 animate-bounce rounded-full bg-[#82a9c9] shadow-lg" />
        <div className="pointer-events-none absolute right-[-5px] top-[670px] h-8 w-8 animate-pulse rounded-full bg-[#caa36b] shadow-lg" />

        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b57967]">
            <span className="h-px w-10 bg-[#b57967]" />
            Engineering · Research · Physical Systems
          </p>

          <h1 className="font-serif text-7xl leading-[0.95] tracking-tight md:text-9xl">
            Subar
            <br />
            <span className="italic text-[#b57967]">Mahdi</span>
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-8 text-neutral-600">
            Designing, building and understanding real-world engineered systems.
          </p>

          <div className="mt-8 flex max-w-4xl flex-wrap gap-3">
            <span className="rounded-full bg-[#18324a] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9bb8d1]">
              USP São Paulo · Robotics Internship
            </span>

            <span className="rounded-full bg-[#ead4cd] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">
              Formula Student
            </span>

            <span className="rounded-full bg-[#ead4cd] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">
              Rocketry Systems Engineer
            </span>

            <span className="rounded-full border border-[#ded3c7] bg-white/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600">
              Research Collaboration
            </span>

            <span className="rounded-full border border-[#ded3c7] bg-white/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600">
              Former Programmatic Lead
            </span>
          </div>

          <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:max-w-xl">
                        <a
              href="#academic"
              className="flex min-h-20 w-full items-center justify-center rounded-md bg-[#1d1b18] px-8 py-4 text-center text-lg font-semibold leading-tight text-white transition duration-300 hover:opacity-90"
            >
              View
              <br />
              Projects
            </a>

            <a
              href="/cv.pdf"
              download="Subar-Mahdi-CV.pdf"
              className="flex min-h-20 w-full items-center justify-center rounded-md border border-[#ded3c7] bg-white/70 px-8 py-4 text-center text-lg font-semibold leading-tight transition hover:bg-white"
            >
              Download
              <br />
              CV
            </a>
          </div>

          <a
            href="#about"
            className="absolute bottom-16 left-1/2 hidden -translate-x-1/2 text-center text-xs uppercase tracking-[0.25em] text-neutral-400 transition hover:text-[#b57967] md:block"
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
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.1fr_0.9fr]">
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
              <p>
                I came to engineering through an unconventional route.
              </p>

              <p>
                Before beginning my engineering studies, I spent over four years leading technical operations within global digital media organisations, working in fast-paced environments where reliability, analytical thinking and structured problem solving were essential.
              </p>

              <p>
                Managing large-scale systems taught me how complex technologies succeed or fail.
              </p>

              <p>
                That experience ultimately pushed me toward engineering: a field where I could move closer to the physical systems, mechanisms, electronics and design decisions behind real-world technology.
              </p>

              <p>
                My interests sit across mechanical systems, electronics, software-aware design, control systems, robotics, product development and applied research.
              </p>

              <p>
                Rather than specialising too early, I am focused on becoming a multidisciplinary engineer who understands how complete systems are designed, integrated, tested and improved.
              </p>

              <p>
                Over the past year, my work has spanned Formula Student vehicle
                development, competitive rocketry feed systems, embedded sensing
                projects, applied engineering research and an international internship
                at the University of São Paulo. Across these experiences, I am learning
                how requirements become hardware, how hardware becomes test data, and
                how test data drives better engineering decisions.
              </p>

              <p>
                My long-term goal is to become a full-stack physical engineer: someone
                capable of working across mechanics, electronics, software and
                intelligent systems to build advanced technologies that operate beyond
                the boundaries of one discipline.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-[#e3d7cc] bg-white p-3 shadow-sm">
              <img
                src="/profile/subar-profile.jpg"
                alt="Subar Mahdi"
                className="h-[620px] w-full rounded-[1.5rem] object-cover object-top"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#e3d7cc] bg-white shadow-sm">
              <div className="bg-[#18324a] p-6 text-white">
                <p className="font-serif text-2xl">Engineering Internship</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                  University of São Paulo · Summer 2026
                </p>
              </div>

              <div className="divide-y divide-[#e3d7cc]">
                <div className="p-6">
                  <p className="font-serif text-3xl">
                    Physical Systems Engineering
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Mechanical · Electronics · Software-aware
                  </p>
                </div>

                <div className="grid grid-cols-2 divide-x divide-[#e3d7cc]">
                  <div className="p-6">
                    <p className="font-serif text-4xl">3</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                      Engineering Projects
                    </p>
                  </div>

                  <div className="p-6">
                    <p className="font-serif text-4xl">2</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                      Research Programmes
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-serif text-4xl">1</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Internship
                  </p>
                </div>
              </div>
            </div>
          </div>
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

              <div className="mt-10 grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
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
                    <li>→ Developed threshold alert logic using LEDs and LCD feedback.</li>
                    <li>→ Collected experimental datasets for heating, cooling, stability and distance response.</li>
                    <li>→ Compared numerical sensor readings with visual thermal heatmaps.</li>
                    <li>→ Evaluated limitations including low 8×8 thermal resolution, distance sensitivity and prototype reliability.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 border-t border-[#e3d7cc] pt-7">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/documents/temperature-sensor-dissertation.docx"
                    className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-[#f7f2eb]"
                  >
                    📄 Dissertation
                  </a>
                  <a
                    href="/documents/temperature-sensor-poster.pptx"
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
                <div className="overflow-hidden rounded-2xl bg-[#f7f2eb]">
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
                Sep 2025 · Present
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight">
                RC Car
              </h3>
              <p className="mt-3 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">
                Mechanical Design · CAD · Packaging
              </p>
              <p className="mt-6 text-base leading-8 text-neutral-700">
                Working on the mechanical and electrical development of a scaled racing car, including drivetrain packaging, steering concepts, CAD-based layout and manufacturing constraints for laser-cut and 3D-printed parts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-[#e3d7cc] pt-6">
                <button
                  type="button"
                  onClick={() => setActiveModal("bristol-racing")}
                  className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-[#f7f2eb]"
                >
                  📷 Media
                </button>
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
                  Firmware
                </span>
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-neutral-400">
                Sep 2025 · Dec 2025
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight">
                Smart Lamp · Embedded Electromechanical System
              </h3>
              <p className="mt-3 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">
                Arduino · Sensors · Firmware · Product-style build
              </p>
              <p className="mt-6 text-base leading-8 text-neutral-700">
                Designed and built a smart lamp to develop practical intuition in embedded systems, electronics and system integration, moving beyond basic Arduino tutorials into debugging, wiring discipline and real-world product constraints.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-[#e3d7cc] pt-6">
                <button
                  type="button"
                  onClick={() => setActiveModal("smart-lamp")}
                  className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-[#f7f2eb]"
                >
                  🎥 Media
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal("smart-lamp")}
                  className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-[#f7f2eb]"
                >
                  🔎 Full Project
                </button>
              </div>
            </article>

            <article className="w-full rounded-[1.75rem] border border-[#e3d7cc] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-[#ead4cd] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">
                  Mechanical Design
                </span>
                <span className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
                  Actuation
                </span>
                <span className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
                  Ongoing
                </span>
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-neutral-400">
                Ongoing
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight">
                Load-Bearing Linear Actuator
              </h3>
              <p className="mt-3 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">
                Mechanical & Mechatronics System
              </p>
              <p className="mt-6 text-base leading-8 text-neutral-700">
                Designing a single-axis load-bearing actuator to understand structural loading, motion transmission, actuation, stiffness, tolerances, backlash and practical mechanical reliability.
              </p>
              <div className="mt-8 border-t border-[#e3d7cc] pt-6">
                <button
                  type="button"
                  onClick={() => setActiveModal("actuator")}
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
            <span className="italic">Active Papers · Technical Investigations</span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Research spanning advanced materials, robotic data acquisition and physical AI systems, with multiple papers currently in development through academic and international research collaborations.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-8 shadow-sm backdrop-blur">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/60">
                  Research Paper
                </span>
                <span className="rounded-md bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/60">
                  In Progress
                </span>
              </div>

              <h3 className="mt-7 font-serif text-3xl leading-tight text-white">
                Multifunctional Self-Healing Composites for Satellite Structural Applications
              </h3>

              <p className="mt-6 text-base leading-8 text-white/65">
                Literature review assessing mechanical performance and space-environment suitability of self-healing composite materials for satellite structures. Applying systems-level analysis to evaluate trade-offs in mass, durability, manufacturability and structural reliability under orbital thermal cycling, vacuum and radiation exposure.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/55">
                  Materials Engineering
                </span>
                <span className="rounded-md border border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/55">
                  Structural Analysis
                </span>
                <span className="rounded-md border border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/55">
                  Spacecraft Design
                </span>
              </div>

              <p className="mt-10 font-mono text-sm leading-7 tracking-[0.14em] text-white/50">
                Bristol Academic Research Society · Junior Researcher
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-8 shadow-sm backdrop-blur">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/60">
                  In Progress
                </span>
                <span className="rounded-md bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/60">
                  Potential IEEE Publication
                </span>
              </div>

              <h3 className="mt-7 font-serif text-3xl leading-tight text-white">
                Robotic Data Acquisition Platform for Physical AI and Autonomous Manipulation Research
              </h3>

              <p className="mt-6 text-base leading-8 text-white/65">
                Engineering research contribution at the University of São Paulo focused on robotic data acquisition for learning-based manipulation. The project involves instrumented data capture, multi-sensor integration, calibration workflows and robotic demonstration datasets intended to support imitation learning, diffusion policy and vision-language-action research.
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
                University of São Paulo · Engineering Internship
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
                "Mechanical Design",
                "Fusion 360",
                "Autodesk Inventor",
                "CAD Modelling",
                "Design for Manufacture",
                "3D Printing",
                "Laser Cutting",
                "Actuation Systems",
                "Linear Motion",
                "Load Paths",
                "Tolerance Awareness",
                "Mechanical Assembly",
                "Vehicle Packaging",
                "Drivetrain Layout",
              ],
            ],
            [
              "Electronics & Embedded Systems",
              [
                "Arduino",
                "Embedded C/C++",
                "Sensor Integration",
                "GPIO",
                "PWM Control",
                "MOSFET Switching",
                "Hardware Debugging",
                "Firmware Development",
                "Thermal Sensors",
                "LCD Integration",
                "PIR Sensors",
                "Signal Flow",
                "Power Delivery",
                "System Integration",
              ],
            ],
            [
              "Systems Engineering & Research",
              [
                "Systems Thinking",
                "Trade-Off Analysis",
                "Requirements Engineering",
                "Technical Writing",
                "Literature Reviews",
                "Research Methods",
                "Experimental Design",
                "Data Acquisition",
                "Test & Validation",
                "Failure Mode Thinking",
                "Sensor Fusion",
                "Technical Reporting",
                "Engineering Judgement",
                "Evidence-Based Decision Making",
              ],
            ],
            [
              "Software, Analysis & Data",
              [
                "Python",
                "MATLAB",
                "Excel",
                "Data Analysis",
                "Data Visualisation",
                "GitHub",
                "LaTeX",
                "Technical Documentation",
                "Graphing",
                "Numerical Analysis",
                "Statistical Interpretation",
                "Next.js",
                "TypeScript",
                "Version Control",
              ],
            ],
            [
              "Professional & Leadership Experience",
              [
                "Stakeholder Management",
                "Cross-Functional Leadership",
                "Project Coordination",
                "Client Communication",
                "Technical Problem Solving",
                "Process Improvement",
                "Operational Leadership",
                "Commercial Awareness",
                "Data-Driven Decision Making",
                "Team Collaboration",
                "Remote Team Management",
                "Structured Communication",
                "Presentation Skills",
                "Strategic Planning",
                "Ownership & Accountability",
                "High-Pressure Delivery",
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
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b57967]">
            <span className="h-px w-10 bg-[#b57967]" />
            Testimonial
          </p>

          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            What People
            <br />
            <span className="italic">Have Said</span>
          </h2>

          <div className="mt-10 border-l border-[#e3d7cc] pl-8">
            <p className="max-w-3xl font-serif text-lg italic leading-8 text-neutral-700 md:text-xl md:leading-9">
              “Subar has been highly motivated and enthusiastic in developing his engineering knowledge. He is well organised, determined and consistently willing to explore new ideas and challenges. His curiosity, work ethic and commitment to learning have stood out throughout his studies, and he approaches engineering problems with maturity, independence and a positive attitude.”
            </p>

            <div className="mt-8">
              <p className="font-semibold text-neutral-800">Dr Saeed Jahdi</p>
              <p className="mt-1 font-mono text-[11px] uppercase leading-5 tracking-[0.14em] text-neutral-500">
                Senior Lecturer in Power Electronics · University of Bristol
              </p>
            </div>
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
                    USP · Universidade de São Paulo
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                    On-site · São Paulo, Brazil · Internship
                  </p>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                  Jun 2026 · Present
                </p>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
                Contributing to the development of a robotic data acquisition platform for Physical AI and autonomous manipulation research. Designing and integrating an instrumented data glove to capture human demonstrations for robot learning applications, while working with multi-sensor systems including RGB-D cameras, IMUs, force sensing and motion-tracking technologies.
              </p>
              <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-700">
                Supporting ROS 2-based workflows for data collection, calibration, sensor fusion and system integration. The work contributes to research involving imitation learning, diffusion policies and Vision-Language-Action models, with testing and validation on advanced robotic platforms including Boston Dynamics Spot and ANYmal. Potential publication outcomes include IEEE research outputs.
              </p>
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
                  Sep 2025 · Present
                </p>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
                Worked on mechanical and electrical aspects of a scaled race car used for Formula Student. Focused on drivetrain and steering concepts, CAD-based packaging, wiring layouts and manufacturability considerations for laser-cut and 3D-printed parts. The role has developed practical judgement around how design choices affect assembly, tolerances, testing and physical reliability.
              </p>
            </article>

            <article className="relative border-t border-[#e3d7cc] pt-9">
              <span className="absolute -left-[33px] top-11 h-2 w-2 rounded-full bg-[#b57967] md:-left-[37px]" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-2xl leading-tight md:text-3xl">
                    Systems Engineer · Feed Systems
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#b57967]">
                    HyPower Bristol
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                    Rocketry · Pressurisation · Plumbing · P&IDs
                  </p>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                  Sep 2025 · Present
                </p>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
                Contributing to the design of pressurisation and feed systems for competitive rocketry projects. Producing P&IDs, modelling valves and tanks in CAD, performing basic pressure-drop calculations and coordinating routing with propulsion and avionics teams for safety-critical integration. This has strengthened my understanding of fluid systems, interfaces, operational risk and systems-level engineering constraints.
              </p>
            </article>

            <article className="relative border-t border-[#e3d7cc] pt-9">
              <span className="absolute -left-[33px] top-11 h-2 w-2 rounded-full bg-[#b57967] md:-left-[37px]" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-2xl leading-tight md:text-3xl">
                    Junior Researcher · Engineering & Technology
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#b57967]">
                    Bristol Academic Research Society · ResSoc
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                    Applied Research · Technical Briefs · Literature Review
                  </p>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                  Sep 2025 · Present
                </p>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
                Conducting applied research into engineering and technology topics, producing structured written briefs and technical summaries. Focused on analysing complex systems, reviewing technical literature and communicating findings clearly to academic and student engineering audiences. Current work includes self-healing composites for satellite structural applications.
              </p>
            </article>

            <article className="relative border-t border-[#e3d7cc] pt-9">
              <span className="absolute -left-[33px] top-11 h-2 w-2 rounded-full bg-[#b57967] md:-left-[37px]" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-2xl leading-tight md:text-3xl">
                    Programmatic Operations Lead
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#b57967]">
                    Various Global Media & Technology Organisations
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                    London Area · Technical Operations · Campaign Systems
                  </p>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                  May 2021 · Oct 2025
                </p>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
                Worked in technically intensive, high-pressure environments responsible for the reliable operation of large, complex systems supporting multi-million-pound campaigns in programmatic advertising. Focused on diagnosing system-level issues, analysing performance data, improving workflows and coordinating across technical teams to ensure stable, predictable outcomes.
              </p>
              <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-700">
                Regularly handled failure modes, edge cases and time-critical delivery problems, requiring structured problem solving and clear technical communication. This experience developed strong systems thinking, analytical discipline and operational leadership, which I now apply directly to mechanical design, electronics and engineering projects.
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
              href="/cv.pdf"
              download="Subar-Mahdi-CV.pdf"
              className="rounded-md border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
      </main>
      {activeModal === "thermal" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] shadow-2xl"
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
                className="ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ded3c7] bg-white text-2xl leading-none transition hover:bg-[#f7f2eb]"
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
                  <li>→ Programmed threshold logic so the system changed state when readings exceeded 30°C, using green and red LEDs for normal and warning conditions.</li>
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
                  <div className="overflow-hidden rounded-2xl bg-[#f7f2eb]">
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
                    Sensor fusion can make a simple monitoring system more useful by combining reliable point measurements with broader spatial context.
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
                    href="/documents/temperature-sensor-dissertation.docx"
                    className="rounded-md border border-[#ded3c7] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition hover:bg-white"
                  >
                    📄 Dissertation
                  </a>
                  <a
                    href="/documents/temperature-sensor-poster.pptx"
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] shadow-2xl"
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
              <button type="button" onClick={() => setActiveModal(null)} className="ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ded3c7] bg-white text-2xl leading-none transition hover:bg-[#f7f2eb]" aria-label="Close Bristol Racing modal">×</button>
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
              </section>

              <section className="rounded-3xl border border-[#e3d7cc] bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">Engineering value</p>
                <p className="mt-4 text-lg leading-9 text-neutral-700">This project shows practical mechanical judgement: not just drawing an idea, but understanding whether it can be built, assembled, tested and improved with real constraints.</p>
              </section>
            </div>
          </div>
        </div>
      )}

      {activeModal === "hypower" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-[#e3d7cc] bg-[#fbf8f3]/95 p-6 backdrop-blur">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-[#ead4cd] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">Rocketry</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Feed Systems</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Fluid Systems</span>
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">HyPower Bristol · Feed Systems</h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">Pressurisation · Plumbing · Pressure Drop · Safety-Critical Integration</p>
              </div>
              <button type="button" onClick={() => setActiveModal(null)} className="ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ded3c7] bg-white text-2xl leading-none transition hover:bg-[#f7f2eb]" aria-label="Close HyPower modal">×</button>
            </div>

            <div className="space-y-10 p-6 md:p-10">
              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">What I did</p>
                <ul className="mt-4 space-y-4 text-base leading-8 text-neutral-700">
                  <li>→ Reviewed previous plumbing CAD and system architecture to understand the feed system layout.</li>
                  <li>→ Researched pressure losses through pipework, fittings, bends and valves.</li>
                  <li>→ Studied Moody chart reasoning, friction factors and how pressure-drop calculations inform routing choices.</li>
                  <li>→ Contributed to P&ID-style thinking around tanks, valves, feed lines and system interfaces.</li>
                  <li>→ Considered safety-critical routing constraints with propulsion and avionics integration in mind.</li>
                  <li>→ Supported concept thinking around quick-release refuelling and remote release requirements.</li>
                </ul>
              </section>

              <section className="rounded-3xl border border-[#e3d7cc] bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">Engineering value</p>
                <p className="mt-4 text-lg leading-9 text-neutral-700">HyPower is valuable because it forces systems thinking. Fluid routing is not just calculation; it is pressure loss, safety, access, valves, team interfaces, manufacturability and operational risk all at once.</p>
              </section>
            </div>
          </div>
        </div>
      )}

      {activeModal === "smart-lamp" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-[#e3d7cc] bg-[#fbf8f3]/95 p-6 backdrop-blur">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-[#ead4cd] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">Embedded Systems</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Firmware</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Electromechanical</span>
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">Smart Lamp · Embedded Electromechanical System</h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">Arduino · Sensors · LEDs · Firmware · Hardware Debugging</p>
              </div>
              <button type="button" onClick={() => setActiveModal(null)} className="ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ded3c7] bg-white text-2xl leading-none transition hover:bg-[#f7f2eb]" aria-label="Close Smart Lamp modal">×</button>
            </div>

            <div className="space-y-10 p-6 md:p-10">
              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">What I did</p>
                <ul className="mt-4 space-y-4 text-base leading-8 text-neutral-700">
                  <li>→ Designed and assembled an embedded electronics system using a microcontroller, LED output, sensors, resistors and power supply.</li>
                  <li>→ Wrote firmware to manage inputs, outputs, timing behaviour and system states.</li>
                  <li>→ Worked with PIR and sound sensing concepts to explore interaction-based control.</li>
                  <li>→ Used MOSFET-based switching and PWM thinking for LED control and dimming behaviour.</li>
                  <li>→ Debugged hardware-software issues across wiring, code, power delivery and component choice.</li>
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
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-[#e3d7cc] bg-white p-3">
                    <video
                      src="/projects/thermal/Extra/Smart Lamp 2.mp4"
                      className="aspect-video w-full rounded-2xl bg-black object-contain"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-[#e3d7cc] bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">Engineering value</p>
                <p className="mt-4 text-lg leading-9 text-neutral-700">The smart lamp helped bridge the gap between theoretical electronics and actual embedded behaviour. It developed practical understanding of GPIO, timing, signal flow, current limits, safe operation and end-to-end system ownership.</p>
              </section>
            </div>
          </div>
        </div>
      )}

      {activeModal === "actuator" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-[#e3d7cc] bg-[#fbf8f3]/95 p-6 backdrop-blur">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-[#ead4cd] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">Mechanical Design</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Actuation</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Ongoing</span>
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">Load-Bearing Single-Axis Linear Actuator</h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">Mechanical & Mechatronics System</p>
              </div>
              <button type="button" onClick={() => setActiveModal(null)} className="ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ded3c7] bg-white text-2xl leading-none transition hover:bg-[#f7f2eb]" aria-label="Close actuator modal">×</button>
            </div>

            <div className="space-y-10 p-6 md:p-10">
              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">What I am building</p>
                <ul className="mt-4 space-y-4 text-base leading-8 text-neutral-700">
                  <li>→ Designing a single-axis linear motion system capable of supporting and moving load.</li>
                  <li>→ Selecting and integrating actuation components suitable for load-bearing operation.</li>
                  <li>→ Considering stiffness, structural behaviour, alignment, load paths and mechanical reliability.</li>
                  <li>→ Understanding failure modes such as backlash, uneven loading, buckling and misalignment.</li>
                  <li>→ Integrating basic control logic for direction, positioning and limit behaviour.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}

      {activeModal === "resoc" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-[#e3d7cc] bg-[#fbf8f3]/95 p-6 backdrop-blur">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-[#ead4cd] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#9b6a5d]">Research</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Materials</span>
                  <span className="rounded-md border border-[#ded3c7] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Satellite Structures</span>
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">Research Society · Engineering & Technology</h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-[#b57967]">Self-Healing Composites for Satellite Structural Applications</p>
              </div>
              <button type="button" onClick={() => setActiveModal(null)} className="ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ded3c7] bg-white text-2xl leading-none transition hover:bg-[#f7f2eb]" aria-label="Close research modal">×</button>
            </div>

            <div className="space-y-10 p-6 md:p-10">
              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">Research focus</p>
                <p className="mt-4 text-lg leading-9 text-neutral-700">This research investigates multifunctional self-healing composites for satellite structural applications, assessing how materials that can repair damage may improve durability for spacecraft exposed to thermal cycling, radiation, vacuum and micrometeoroid risk.</p>
              </section>
              <section>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b57967]">What I am contributing to</p>
                <ul className="mt-4 space-y-4 text-base leading-8 text-neutral-700">
                  <li>→ Conducting structured literature review across self-healing materials, composites and satellite structures.</li>
                  <li>→ Comparing capsule-based, vascular and intrinsic self-healing approaches.</li>
                  <li>→ Assessing trade-offs between healing performance, mechanical strength, mass, manufacturability and space-environment suitability.</li>
                  <li>→ Translating complex academic literature into clear technical summaries and research arguments.</li>
                  <li>→ Contributing to a research paper intended for publication through the society.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}