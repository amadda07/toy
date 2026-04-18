import { useState } from 'react'
import { allProjects } from '../data/profile'
import { Search } from 'lucide-react'

const typeColors = {
  '주요프로젝트': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  '공공기관': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  '대기업': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  '중소기업': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
}

const typeButtons = [
  { label: '전체', color: '' },
  { label: '주요프로젝트', color: 'text-cyan-400' },
  { label: '공공기관', color: 'text-emerald-400' },
  { label: '대기업', color: 'text-blue-400' },
  { label: '중소기업', color: 'text-purple-400' },
]

const companies = ['전체', '디케이테크인', '지에스아이티엠', '프리랜서', '엠피알디', '글로벌아이엔피']

export default function AllProjects() {
  const [search, setSearch] = useState('')
  const [selectedCompany, setSelectedCompany] = useState('전체')
  const [selectedType, setSelectedType] = useState('전체')

  const filtered = allProjects.filter(p => {
    const matchSearch = p.name.includes(search) || p.client.includes(search) || p.stack.some(s => s.includes(search))
    const matchCompany = selectedCompany === '전체' || p.company === selectedCompany
    const matchType = selectedType === '전체' || p.type === selectedType
    return matchSearch && matchCompany && matchType
  })

  return (
    <section id="all-projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Full Timeline</p>
          <h2 className="text-4xl font-bold text-white">전체 프로젝트</h2>
          <p className="text-slate-500 mt-3">경력 전체 기간 참여 프로젝트 <span className="text-white font-semibold">{allProjects.length}건</span></p>
        </div>

        {/* 검색 */}
        <div className="relative mb-4">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="프로젝트명, 고객사, 기술스택 검색..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
          />
        </div>

        {/* 구분 필터 */}
        <div className="flex flex-wrap gap-2 mb-3">
          {typeButtons.map(({ label, color }) => (
            <button key={label} onClick={() => setSelectedType(label)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all
                ${selectedType === label
                  ? 'bg-cyan-500 text-slate-950 border-cyan-500'
                  : `bg-slate-900 border-slate-700 ${color || 'text-slate-400'} hover:border-slate-500`}`}>
              {label}
              {label !== '전체' && (
                <span className="ml-1.5 opacity-60">
                  {allProjects.filter(p => p.type === label).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* 소속 필터 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {companies.map(c => (
            <button key={c} onClick={() => setSelectedCompany(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all
                ${selectedCompany === c
                  ? 'bg-slate-400 text-slate-950 border-slate-400'
                  : 'bg-slate-900 border-slate-700 text-slate-500 hover:border-slate-500'}`}>
              {c}
            </button>
          ))}
        </div>

        <p className="text-slate-600 text-xs mb-4">{filtered.length}건 표시 중</p>

        {/* 테이블 */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800">
                <th className="text-left px-5 py-4 text-slate-400 font-medium w-36">기간</th>
                <th className="text-left px-5 py-4 text-slate-400 font-medium">프로젝트명</th>
                <th className="text-left px-5 py-4 text-slate-400 font-medium w-36 hidden md:table-cell">고객사</th>
                <th className="text-left px-5 py-4 text-slate-400 font-medium w-32 hidden lg:table-cell">소속</th>
                <th className="text-left px-5 py-4 text-slate-400 font-medium hidden lg:table-cell">기술스택</th>
                <th className="text-left px-5 py-4 text-slate-400 font-medium w-28 hidden md:table-cell">구분</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={i} className={`border-b border-slate-800/50 transition-colors
                  ${p.type === '주요프로젝트' ? 'hover:bg-cyan-500/5' : p.type === '공공기관' ? 'hover:bg-emerald-500/5' : 'hover:bg-slate-900/60'}`}>
                  <td className="px-5 py-4 text-slate-500 text-xs whitespace-nowrap">{p.period}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className={`font-medium leading-snug ${p.type === '주요프로젝트' ? 'text-cyan-100' : 'text-slate-200'}`}>
                        {p.name}
                      </p>
                    </div>
                    <p className="text-slate-600 text-xs mt-0.5">{p.role}</p>
                  </td>
                  <td className="px-5 py-4 text-slate-400 text-xs hidden md:table-cell">{p.client}</td>
                  <td className="px-5 py-4 text-slate-500 text-xs hidden lg:table-cell whitespace-nowrap">{p.company}</td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {p.stack.slice(0, 4).map(t => (
                        <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-slate-800 text-slate-500">{t}</span>
                      ))}
                      {p.stack.length > 4 && (
                        <span className="text-xs text-slate-600">+{p.stack.length - 4}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className={`text-xs px-2 py-1 rounded-full border whitespace-nowrap ${typeColors[p.type]}`}>
                      {p.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-600">
              <p>검색 결과가 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
