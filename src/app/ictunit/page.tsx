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
      <div className="relative flex-1 overflow-hidden py-10 sm:py-16">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 60% 40% at 50% 0%, var(--c-accent), transparent), radial-gradient(ellipse 50% 30% at 100% 100%, var(--c-accent), transparent)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          {/* Header */}
          <header className="mb-12 animate-fade-in-up text-center sm:mb-16">
            <h1 className="text-3xl font-extrabold leading-tight tracking-[-0.5px] text-ink sm:text-4xl md:text-5xl">
              ICT UNIT
            </h1>
            <p className="mt-4 font-mono text-sm tracking-[0.3em] text-accent sm:text-base">
              TESDA REGION VII
            </p>
            <div className="mx-auto mt-5 h-0.5 w-20 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent sm:w-28" />
          </header>

          {/* Team grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {team.map((member, i) => {
              const CardContent = (
                <div className="card-hover group relative h-full overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-colors duration-300 hover:border-accent-line">
                  <div className="relative flex flex-col items-center p-6 text-center sm:p-8">
                    <div className="relative mb-6">
                      <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-line ring-offset-2 ring-offset-surface transition-all duration-500 group-hover:ring-accent-line group-hover:ring-offset-4 sm:h-28 sm:w-28">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 96px, 112px"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-ink sm:text-xl">{member.name}</h3>
                    <p className="mt-1 font-mono text-sm uppercase tracking-wider text-accent">
                      {member.role}
                    </p>
                    <p className="mt-2 text-sm text-ink-sec">{member.description}</p>
                  </div>
                </div>
              );

              return member.link ? (
                <Link
                  key={member.name}
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block animate-fade-in-up rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page"
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

          <footer
            className="mt-14 animate-fade-in-up border-t border-line pt-10 text-center sm:mt-16"
            style={{ animationDelay: "500ms" }}
          >
            <p className="text-sm text-ink-muted">
              <span className="font-semibold text-accent">ICT Unit</span> — Powered by Innovation |
              © 2025{" "}
              <a
                href="https://www.facebook.com/tesdasietecentralvisayas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 transition-colors hover:opacity-80"
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
