export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Price', href: '#pricing' },
  ]

  const legalLinks = [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <a href="#" className="flex items-center">
              <img
                src="/logo.png"
                alt="AutoraLabs"
                className="h-16 w-auto brightness-0 invert"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center justify-center md:justify-end gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-10 pt-8">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} AutoraLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
