import { useMemo, useState } from 'react'
import { Copy } from 'lucide-react'
import { generateStyledVariants } from './utils/stylishText'

function App() {
  const [name, setName] = useState('')
  const [copiedId, setCopiedId] = useState(null)

  const variants = useMemo(() => generateStyledVariants(name), [name])

  const handleCopy = async (id, value) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedId(id)
      setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current))
      }, 2000)
    } catch (error) {
      console.error('Failed to copy text', error)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-start justify-center px-6 pt-6 pb-10">
      <div className="w-full max-w-6xl">
        <header className="mb-8 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <img
              src="/kg-logo.svg"
              alt="KG logo"
              className="h-10 w-10 rounded-md shadow-[0_0_30px_rgba(15,23,42,0.9)]"
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              Live generator
            </span>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Stylish Text Generator
            </h1>
            <p className="mt-1 text-sm text-slate-400 max-w-xl">
              Create premium, gaming &amp; Discord style names instantly. Type your name and copy any
              variation with a single click.
            </p>
          </div>
        </header>

        <section className="mb-10">
          <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400 mb-2">
            Enter your name
          </label>
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Kashifmax"
              className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3.5 text-base text-slate-100 shadow-[0_0_0_1px_rgba(15,23,42,0.8),0_18px_45px_rgba(15,23,42,0.9)] outline-none ring-0 transition focus:border-emerald-400/70 focus:shadow-[0_0_0_1px_rgba(16,185,129,0.7),0_22px_65px_rgba(5,150,105,0.45)] placeholder:text-slate-500"
            />
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs text-slate-500">
              Gaming / PUBG / Discord
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold tracking-wide text-slate-200 uppercase">
              Premium styles
            </h2>
            <p className="text-xs text-slate-500">
              {variants.length} VIP name styles generated in real-time
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {variants.map((variant) => (
              <article
                key={variant.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.85)] transition hover:-translate-y-0.5 hover:border-emerald-400/70 hover:shadow-[0_24px_80px_rgba(5,150,105,0.55)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-emerald-500/12 via-transparent to-transparent opacity-0 blur-2xl transition group-hover:opacity-100" />

                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/80 bg-slate-950/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                    {variant.label}
                  </div>
                  <span className="text-[10px] text-slate-500">
                    {variant.badge}
                  </span>
                </div>

                <p className="mb-4 text-lg sm:text-xl font-medium tracking-wide text-slate-50">
                  {variant.value}
                </p>

                <button
                  type="button"
                  onClick={() => handleCopy(variant.id, variant.value)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-100 shadow-sm transition hover:border-emerald-400/80 hover:bg-slate-900 hover:text-emerald-100 active:scale-[0.98]"
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span>{copiedId === variant.id ? 'Copied!' : 'Copy style'}</span>
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
