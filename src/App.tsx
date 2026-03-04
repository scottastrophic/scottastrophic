import { useState, useEffect } from 'react'

const roles = [
  'Web Engineer',
  'Cat Dad',
  'Crossword Enthusiast',
]

function useRotatingText(items: string[], intervalMs = 2500) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % items.length)
        setVisible(true)
      }, 300)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [items.length, intervalMs])

  return { text: items[index], visible }
}

function App() {
  const { text: role, visible } = useRotatingText(roles)

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Floating background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Simple greeting */}
        <h2 className="text-6xl mb-6">👋</h2>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
          Scott Koenig
        </h1>

        {/* Rotating role */}
        <p className="text-xl sm:text-2xl text-gray-400 h-10 flex items-center justify-center">
          <span
            className={`transition-all duration-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            {role}
          </span>
        </p>

        {/* Tagline */}
        <p className="mt-8 text-gray-500 text-lg max-w-md mx-auto leading-relaxed">
          A simple personal site built with assistance from AI tools.
        </p>

        {/* Social links */}
        <div className="mt-10 flex gap-4 justify-center">
          <a
            href="https://github.com/scottastrophic"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/scottastrophic"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

      </div>

      {/* Built with AI assistance badge */}
      <div className="absolute bottom-6 text-gray-700 text-sm flex items-center gap-1.5">
        built with
        <span className="text-purple-400/70">AI</span>
        assistance
      </div>
    </div>
  )
}

export default App
