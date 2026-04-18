import { Code2, Layers, Users, Trophy } from 'lucide-react'
import { profile } from '../data/profile'

const stats = [
  { icon: Code2, label: '개발 경력', value: '15년 6개월' },
  { icon: Layers, label: '주요 플랫폼', value: 'GCP / Docker / K8s' },
  { icon: Users, label: 'PL 프로젝트', value: '5개 이상' },
  { icon: Trophy, label: '대형 고객사', value: '카카오 / GS / SK 등' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl font-bold text-white">자기소개</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-300 leading-relaxed text-lg mb-6 whitespace-pre-line">
              {profile.intro}
            </p>
            <p className="text-slate-400 leading-relaxed">
              팀 협업에 있어서는 기획자, 퍼블리셔, 프론트엔드 개발자 등 다양한 직군과 원활하게 소통하며,
              프로젝트 내 이해관계를 조율하는 능력을 갖추고 있습니다. PL(Project Leader) 역할을 수행하면서
              일정 관리, 이슈 트래킹, 산출물 관리, 보안검수, 성능테스트까지 프로젝트 전반을 책임지고 진행한 경험이 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-cyan-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">{value}</p>
                <p className="text-slate-500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
