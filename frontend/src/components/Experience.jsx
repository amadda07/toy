import { useState } from 'react'
import { ChevronDown, ChevronUp, Building2, Calendar } from 'lucide-react'
import { experiences } from '../data/profile'

function ProjectCard({ project }) {
  return (
    <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 mb-3 last:mb-0">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <h4 className="text-white font-semibold">{project.name}</h4>
        <span className="text-xs text-slate-500 shrink-0">{project.period}</span>
      </div>
      {project.client && (
        <p className="text-xs text-slate-500 mb-2">고객사: {project.client} {project.role && `| 역할: ${project.role}`}</p>
      )}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.stack.map(t => (
          <span key={t} className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">{t}</span>
        ))}
      </div>
      <ul className="space-y-1">
        {project.highlights.map((h, i) => (
          <li key={i} className="text-sm text-slate-400 flex gap-2">
            <span className="text-cyan-500 shrink-0 mt-0.5">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CompanyCard({ exp }) {
  const [expanded, setExpanded] = useState(exp.company === '디케이테크인')

  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-6 w-4 h-4 rounded-full border-4 border-slate-950"
        style={{ backgroundColor: exp.color }} />
      <div className="absolute left-1.5 top-10 bottom-0 w-0.5 bg-slate-800" />

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6 hover:border-slate-700 transition-all">
        <div className="flex items-start justify-between mb-1">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Building2 size={16} style={{ color: exp.color }} />
              <h3 className="text-lg font-bold text-white">{exp.company}</h3>
            </div>
            <p className="text-slate-400 text-sm">{exp.role}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-slate-500 text-xs mb-1">
              <Calendar size={12} />
              {exp.period}
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: `${exp.color}20`, color: exp.color }}>
              {exp.duration}
            </span>
          </div>
        </div>

        <button onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          프로젝트 {exp.projects.length}개 {expanded ? '접기' : '보기'}
        </button>

        {expanded && (
          <div className="mt-4">
            {exp.projects.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Work History</p>
          <h2 className="text-4xl font-bold text-white">경력</h2>
          <p className="text-slate-500 mt-3">총 15년 6개월의 개발 경험</p>
        </div>

        <div>
          {experiences.map((exp, i) => (
            <CompanyCard key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
