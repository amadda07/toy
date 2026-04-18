import { Mail, Phone, MapPin } from 'lucide-react'
import { profile } from '../data/profile'

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl font-bold text-white">연락처</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            새로운 기회나 협업에 대한 제안을 환영합니다. 언제든지 연락주세요!
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500/40 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-cyan-400" />
              </div>
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">{label}</p>
              {href ? (
                <a href={href} className="text-white text-sm font-medium hover:text-cyan-400 transition-colors break-all">
                  {value}
                </a>
              ) : (
                <p className="text-white text-sm font-medium">{value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25">
            <Mail size={20} />
            이메일 보내기
          </a>
        </div>
      </div>

      <div className="text-center mt-20 pt-8 border-t border-slate-800">
        <p className="text-slate-600 text-sm">© 2026 정연호. All rights reserved.</p>
      </div>
    </section>
  )
}
