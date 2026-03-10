import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Jan Kane T. Reroma",
    role: "ICT Support Staff",
    description: "NTTC Support & Software Developer",
    image: "/icons/kane.jpg",
    link: "https://kanereromaitportfolio.vercel.app/",
  },
  {
    name: "Gerard Randolf G. Tecson",
    role: "Information Technology Officer I",
    description: "IT Infrastructure & Project Management",
    image: "/icons/gerard.jpg",
  },
  {
    name: "Aljohn T. Rosales",
    role: "ICT Support Staff",
    description: "Network Administrator & User Assistance",
    image: "/icons/aljohn.jpg",
  },
];

export default function ICTUnitPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative flex-1 py-10 sm:py-16 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(34, 211, 238, 0.15), transparent),
                               radial-gradient(ellipse 50% 30% at 100% 100%, rgba(59, 130, 246, 0.1), transparent)`,
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <header className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
              ICT UNIT
            </h1>
            <p className="text-cyan-300/80 text-lg sm:text-xl md:text-2xl font-light tracking-widest mt-4">
              TESDA REGION VII
            </p>
            <div className="w-20 sm:w-28 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mt-5 rounded-full" />
          </header>

          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, i) => {
              const CardContent = (
                <div
                  className="group relative h-full rounded-2xl overflow-hidden
                    bg-gradient-to-br from-white/[0.06] to-white/[0.02]
                    border border-white/[0.06] backdrop-blur-xl
                    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:border-cyan-400/30 hover:shadow-[0_24px_48px_-12px_rgba(34,211,238,0.15)]
                    hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-colors duration-500" />
                  <div className="relative p-6 sm:p-8 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-white/10 ring-offset-2 ring-offset-[#080d14] transition-all duration-500 group-hover:ring-cyan-400/40 group-hover:ring-offset-4 group-hover:scale-[1.02]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 96px, 112px"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white/95 group-hover:text-white transition-colors duration-400">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400/90 font-medium text-sm uppercase tracking-wider mt-1">
                      {member.role}
                    </p>
                    <p className="text-slate-400 text-sm mt-2 group-hover:text-slate-300 transition-colors duration-400">
                      {member.description}
                    </p>
                  </div>
                </div>
              );

              return member.link ? (
                <Link
                  key={member.name}
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080d14] rounded-2xl animate-fade-in-up"
                  style={{ animationDelay: `${200 + i * 100}ms` }}
                >
                  {CardContent}
                </Link>
              ) : (
                <div
                  key={member.name}
                  className="block animate-fade-in-up"
                  style={{ animationDelay: `${200 + i * 100}ms` }}
                >
                  {CardContent}
                </div>
              );
            })}
          </div>

          <footer className="text-center mt-14 sm:mt-16 pt-10 border-t border-white/[0.06] animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <p className="text-slate-400 text-sm">
              <span className="text-cyan-400 font-medium">ICT Unit</span> — Powered by Innovation | © 2025{" "}
              <a
                href="https://www.facebook.com/tesdasietecentralvisayas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-cyan-300 transition-colors duration-300"
              >
                TESDA Region VII
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
