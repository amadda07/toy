import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Public', href: '#public-projects' },
  { label: 'All Projects', href: '#all-projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800/50' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold gradient-text">JYH.dev</a>

        <ul className="hidden md:flex gap-8">
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 font-medium">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-slate-400" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950/98 border-t border-slate-800 px-6 py-4">
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}
              className="block py-3 text-slate-300 hover:text-cyan-400 transition-colors border-b border-slate-800/50 last:border-0">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
