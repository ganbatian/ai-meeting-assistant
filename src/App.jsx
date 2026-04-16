import React, { useState } from 'react'
import { Mic, FileText, Brain, Globe, Star, ExternalLink, Search, ChevronDown, ChevronUp, Clock, Users, Zap, Shield } from 'lucide-react'

const tools = [
  {
    name: 'Otter.ai',
    url: 'https://otter.ai',
    category: '转录 & 记录',
    desc: '实时语音转文字，自动生成会议摘要，支持 Zoom/Teams/Meet 集成，免费版每月 300 分钟。',
    tags: ['实时转录', '摘要', '免费版'],
    rating: 4.7,
    free: true,
    highlight: true,
    color: 'from-blue-500 to-cyan-600',
    features: ['实时转录', '自动摘要', '行动项提取', 'Zoom 集成'],
  },
  {
    name: 'Fireflies.ai',
    url: 'https://fireflies.ai',
    category: '转录 & 记录',
    desc: '自动加入会议录制，AI 搜索会议内容，支持 800+ 应用集成，团队协作功能强大。',
    tags: ['自动录制', '搜索', '团队协作'],
    rating: 4.6,
    free: true,
    highlight: false,
    color: 'from-purple-500 to-violet-600',
    features: ['自动加入会议', '全文搜索', '情绪分析', 'CRM 集成'],
  },
  {
    name: 'tl;dv',
    url: 'https://tldv.io',
    category: '视频 & 剪辑',
    desc: '会议录制 + 时间戳标注，一键生成精华片段，支持 Zoom/Teams/Meet，免费版无限录制。',
    tags: ['视频录制', '片段剪辑', '免费无限'],
    rating: 4.5,
    free: true,
    highlight: true,
    color: 'from-pink-500 to-rose-600',
    features: ['无限录制', '时间戳标注', '片段分享', 'AI 摘要'],
  },
  {
    name: 'Fathom',
    url: 'https://fathom.video',
    category: '转录 & 记录',
    desc: '专注 Zoom 会议，免费无限录制和转录，AI 自动生成摘要，界面简洁易用。',
    tags: ['Zoom 专用', '免费无限', '简洁'],
    rating: 4.8,
    free: true,
    highlight: true,
    color: 'from-emerald-500 to-teal-600',
    features: ['免费无限录制', 'AI 摘要', '高亮标注', '一键分享'],
  },
  {
    name: 'Notion AI',
    url: 'https://notion.so',
    category: '笔记 & 整理',
    desc: '在 Notion 中直接使用 AI 整理会议笔记，生成行动项，与团队知识库无缝集成。',
    tags: ['笔记整理', '知识库', '团队协作'],
    rating: 4.5,
    free: false,
    highlight: false,
    color: 'from-gray-600 to-gray-800',
    features: ['AI 写作助手', '模板库', '数据库', '团队协作'],
  },
  {
    name: 'Grain',
    url: 'https://grain.com',
    category: '视频 & 剪辑',
    desc: '会议录制 + 智能剪辑，自动提取关键时刻，适合销售和客户成功团队。',
    tags: ['智能剪辑', '销售工具', 'CRM'],
    rating: 4.4,
    free: true,
    highlight: false,
    color: 'from-orange-500 to-amber-600',
    features: ['智能剪辑', '关键时刻提取', 'CRM 同步', '团队库'],
  },
  {
    name: 'Krisp',
    url: 'https://krisp.ai',
    category: '音频增强',
    desc: 'AI 降噪工具，实时消除背景噪音，支持所有会议平台，让你的声音更清晰专业。',
    tags: ['降噪', '音频增强', '实时'],
    rating: 4.6,
    free: true,
    highlight: false,
    color: 'from-indigo-500 to-blue-600',
    features: ['实时降噪', '回声消除', '背景模糊', '所有平台'],
  },
  {
    name: 'Read.ai',
    url: 'https://read.ai',
    category: '分析 & 洞察',
    desc: '会议效率分析，追踪参与度、发言时间、情绪变化，提供改进建议，让会议更高效。',
    tags: ['参与度分析', '效率报告', '洞察'],
    rating: 4.3,
    free: true,
    highlight: false,
    color: 'from-cyan-500 to-sky-600',
    features: ['参与度追踪', '发言分析', '情绪检测', '效率报告'],
  },
  {
    name: 'Sembly AI',
    url: 'https://sembly.ai',
    category: '转录 & 记录',
    desc: '多语言会议转录，支持 40+ 语言，自动识别发言人，生成结构化会议纪要。',
    tags: ['多语言', '发言人识别', '纪要'],
    rating: 4.4,
    free: true,
    highlight: false,
    color: 'from-violet-500 to-purple-600',
    features: ['40+ 语言', '发言人识别', '结构化纪要', '任务提取'],
  },
  {
    name: 'MeetGeek',
    url: 'https://meetgeek.ai',
    category: '转录 & 记录',
    desc: '自动录制、转录和总结会议，提供会议模板，与 Slack/Notion/Trello 深度集成。',
    tags: ['自动录制', '模板', '集成'],
    rating: 4.5,
    free: true,
    highlight: false,
    color: 'from-teal-500 to-green-600',
    features: ['自动录制', '会议模板', '多平台集成', '团队分析'],
  },
]

const categories = ['全部', '转录 & 记录', '视频 & 剪辑', '笔记 & 整理', '音频增强', '分析 & 洞察']

const categoryIcons = {
  '全部': Mic,
  '转录 & 记录': FileText,
  '视频 & 剪辑': Zap,
  '笔记 & 整理': Brain,
  '音频增强': Shield,
  '分析 & 洞察': Users,
}

export default function App() {
  const [category, setCategory] = useState('全部')
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState(null)
  const [freeOnly, setFreeOnly] = useState(false)

  const filtered = tools.filter(t =>
    (category === '全部' || t.category === category) &&
    (!freeOnly || t.free) &&
    (t.name.toLowerCase().includes(search.toLowerCase()) ||
     t.desc.includes(search) ||
     t.tags.some(tag => tag.includes(search)))
  )

  const highlights = tools.filter(t => t.highlight)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/70 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Mic className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold">AI 会议记录助手</h1>
              <p className="text-xs text-white/40">精选 {tools.length} 款会议 AI 工具，让每次会议都有价值</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            告别低效会议
          </h2>
          <p className="text-white/50 text-sm max-w-xl mx-auto">
            AI 自动转录、摘要、提取行动项，让你专注讨论，而不是记笔记
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <div className="text-xs text-white/30 uppercase tracking-wider mb-3">⭐ 编辑推荐</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {highlights.map((t, i) => (
              <a key={i} href={t.url} target="_blank" rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center mb-3`}>
                  <Mic className="w-4 h-4" />
                </div>
                <div className="font-semibold text-sm mb-1 flex items-center gap-1">
                  {t.name}
                  {t.free && <span className="text-xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full">免费</span>}
                </div>
                <p className="text-xs text-white/40 leading-relaxed line-clamp-2">{t.desc}</p>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-white/50">{t.rating}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="relative flex-1 min-w-48">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="搜索工具..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 outline-none focus:border-blue-500/50 text-sm"
            />
          </div>
          <button
            onClick={() => setFreeOnly(!freeOnly)}
            className={`px-3 py-2 rounded-xl text-sm border transition-all ${freeOnly ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' : 'bg-white/5 border-white/10 text-white/50'}`}
          >
            仅免费
          </button>
        </div>

        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map(cat => {
            const Icon = categoryIcons[cat]
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all ${
                  category === cat ? 'bg-white text-gray-900 font-medium' : 'bg-white/5 text-white/50 hover:bg-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat}
              </button>
            )
          })}
        </div>

        {/* Tool list */}
        <div className="text-xs text-white/30 mb-3 uppercase tracking-wider">
          {category} · {filtered.length} 款工具
        </div>
        <div className="space-y-3">
          {filtered.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                      <Mic className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-semibold">{t.name}</span>
                        {t.free && <span className="text-xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full">免费版</span>}
                        {t.highlight && <span className="text-xs bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded-full">推荐</span>}
                        <span className="text-xs bg-white/10 text-white/40 px-1.5 py-0.5 rounded-full">{t.category}</span>
                      </div>
                      <p className="text-sm text-white/60 leading-relaxed">{t.desc}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                          <span className="text-xs text-white/50">{t.rating}</span>
                        </div>
                        <div className="flex gap-1 flex-wrap">
                          {t.tags.map((tag, j) => (
                            <span key={j} className="text-xs bg-white/5 text-white/40 px-2 py-0.5 rounded-full">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                    >
                      {expanded === i ? <ChevronUp className="w-4 h-4 text-white/40" /> : <ChevronDown className="w-4 h-4 text-white/40" />}
                    </button>
                    <a href={t.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-lg transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                      访问
                    </a>
                  </div>
                </div>
              </div>
              {expanded === i && (
                <div className="px-4 pb-4 border-t border-white/5 pt-3">
                  <div className="text-xs text-white/30 mb-2 uppercase tracking-wider">核心功能</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {t.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-8 p-5 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-blue-400" />
            <span className="font-semibold text-blue-400">选择建议</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/60">
            <div>
              <div className="font-medium text-white/80 mb-1">🎯 个人用户</div>
              <p className="text-xs leading-relaxed">推荐 <strong className="text-white/70">Fathom</strong>（Zoom 免费无限）或 <strong className="text-white/70">tl;dv</strong>（多平台免费录制）</p>
            </div>
            <div>
              <div className="font-medium text-white/80 mb-1">👥 团队协作</div>
              <p className="text-xs leading-relaxed">推荐 <strong className="text-white/70">Fireflies.ai</strong>（集成丰富）或 <strong className="text-white/70">MeetGeek</strong>（模板完善）</p>
            </div>
            <div>
              <div className="font-medium text-white/80 mb-1">📊 销售团队</div>
              <p className="text-xs leading-relaxed">推荐 <strong className="text-white/70">Grain</strong>（CRM 集成）或 <strong className="text-white/70">Read.ai</strong>（参与度分析）</p>
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-white/20">
          <p>AI 会议记录助手 · 持续更新中</p>
        </footer>
      </div>
    </div>
  )
}
