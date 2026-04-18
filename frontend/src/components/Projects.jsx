import { featuredProjects } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="text-4xl font-bold text-white">주요 프로젝트</h2>
          <p className="text-slate-500 mt-3">최근 참여한 대형 프로젝트들입니다</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <div key={i} className={`bg-gradient-to-br ${project.gradient} border ${project.border} rounded-2xl p-7 hover:-translate-y-2 transition-all duration-300 group`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{project.icon}</span>
                <span className="text-xs text-slate-500 bg-slate-800/80 px-3 py-1 rounded-full">{project.period}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
