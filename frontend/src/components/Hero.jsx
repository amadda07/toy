import { useEffect, useState } from 'react'
import { ChevronDown, Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'

const titles = [
  'SI/SM Back-end Developer',
  'Project Leader (PL)',
  'Java & Spring Boot Expert',
  'GCP & Docker Engineer',
]

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = titles[titleIdx]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setTitleIdx((titleIdx + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, titleIdx])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8 text-cyan-400 text-sm font-medium">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          총 경력 {profile.experience} • 현재 디케이테크인 재직 중
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
          <span className="text-white">{profile.name}</span>
        </h1>

        <div className="h-10 mb-6 flex items-center justify-center">
          <span className="text-xl md:text-2xl text-cyan-400 font-medium">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          {profile.motto}
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {profile.keywords.map(k => (
            <span key={k} className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm">
              #{k}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all duration-200 hover:scale-105">
            <Mail size={18} />
            {profile.email}
          </a>
          <a href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105">
            프로젝트 보기
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
