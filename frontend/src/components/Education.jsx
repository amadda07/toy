import { GraduationCap, Award } from 'lucide-react'
import { education, certifications } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-4xl font-bold text-white">학력 & 자격증</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                <GraduationCap size={20} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">학력</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/30 transition-all">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-white font-semibold">{edu.school}</h4>
                    <span className="text-xs text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded-full">{edu.status}</span>
                  </div>
                  {edu.dept && <p className="text-slate-400 text-sm mb-1">{edu.dept}</p>}
                  <p className="text-slate-500 text-xs">{edu.period}</p>
                  {edu.gpa && <p className="text-slate-500 text-xs mt-1">학점: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <Award size={20} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white">자격증</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-purple-500/30 transition-all">
                  <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                  <p className="text-slate-400 text-sm">{cert.org}</p>
                  <p className="text-slate-500 text-xs mt-1">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
