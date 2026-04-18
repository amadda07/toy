import { publicProjects } from '../data/profile'
import { Landmark } from 'lucide-react'

export default function PublicProjects() {
  return (
    <section id="public-projects" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Public Sector</p>
          <h2 className="text-4xl font-bold text-white">공공기관 프로젝트</h2>
          <p className="text-slate-500 mt-3">정부·공공기관 대상 시스템 구축 경험</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {publicProjects.map((project, i) => (
            <div key={i} className={`bg-gradient-to-br ${project.gradient} border ${project.border} rounded-2xl p-7 hover:-translate-y-2 transition-all duration-300 group flex flex-col`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{project.icon}</span>
                  <div className="w-8 h-8 bg-slate-800/60 rounded-lg flex items-center justify-center">
                    <Landmark size={14} className="text-slate-400" />
                  </div>
                </div>
                <span className="text-xs text-slate-500 bg-slate-800/80 px-3 py-1 rounded-full shrink-0">{project.period}</span>
              </div>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
                {project.name}
              </h3>

              <p className="text-xs text-slate-500 mb-3">고객사: {project.client}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>

              <div>
                <p className="text-xs text-slate-500 mb-2">담당 역할</p>
                <p className="text-xs text-slate-300 bg-slate-800/60 rounded-lg p-2 mb-3">{project.role}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
