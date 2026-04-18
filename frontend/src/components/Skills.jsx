import { skills } from '../data/profile'

const categoryColors = {
  Backend: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
  Database: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
  DevOps: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
  Tools: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  'Soft Skills': 'text-pink-400 border-pink-500/30 bg-pink-500/10',
}

const categoryBg = {
  Backend: 'from-cyan-500/5 to-transparent border-cyan-500/20',
  Database: 'from-purple-500/5 to-transparent border-purple-500/20',
  DevOps: 'from-amber-500/5 to-transparent border-amber-500/20',
  Tools: 'from-emerald-500/5 to-transparent border-emerald-500/20',
  'Soft Skills': 'from-pink-500/5 to-transparent border-pink-500/20',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Tech Stack</p>
          <h2 className="text-4xl font-bold text-white">기술 스택</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ category, items }) => (
            <div key={category} className={`bg-gradient-to-br ${categoryBg[category]} border rounded-2xl p-6`}>
              <h3 className={`text-sm font-bold tracking-wider uppercase mb-4 ${categoryColors[category].split(' ')[0]}`}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item} className={`px-3 py-1.5 rounded-lg border text-sm font-medium ${categoryColors[category]}`}>
                    {item}
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
