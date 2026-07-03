import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  sectors: [
    "Oil & Gas",
    "Public Infrastructure",
    "Environmental Management",
    "Rural Access Roads",
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-xl font-bold">
            Akpaven Integrated Services Limited
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Indigenous Nigerian EPCI firm delivering world-class engineering,
            procurement, construction, and installation since 2003.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber">
            Company
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.company.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/70 transition-colors hover:text-amber"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber">
            Key Sectors
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.sectors.map((sector) => (
              <li key={sector} className="text-sm text-white/70">
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Akpaven Integrated Services Limited</p>
          <p>Engineering the Future of African Infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
