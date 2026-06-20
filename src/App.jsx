import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || submitting) return
    setSubmitting(true)

    try {
      const res = await fetch('https://formspree.io/f/xojnverd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSubmitted(true)
        setEmail('')
      }
    } catch {
      window.location.href = `mailto:hello@holon.dev?subject=Waitlist&body=Sign me up: ${email}`
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-bg text-text-primary">
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tight mb-8">
          HOLON
        </h1>
        <p className="text-text-secondary text-lg sm:text-xl md:text-2xl leading-relaxed mb-14 font-mono font-light">
          <strong className="font-medium text-text-primary">A</strong> new k<strong className="font-medium text-text-primary">I</strong>nd of computer
        </p>

        {submitted ? (
          <div className="border border-accent/30 bg-accent/5 px-8 py-8">
            <p className="text-accent text-sm font-mono">
              You&rsquo;re on the list. We&rsquo;ll be in touch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full max-w-lg flex-col gap-4 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-bg-elevated border border-border px-6 py-4 text-sm font-mono text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors duration-300"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-text-primary text-bg px-10 py-4 text-sm font-mono font-medium tracking-wider uppercase hover:bg-accent hover:text-bg transition-all duration-300 disabled:opacity-50 cursor-pointer shrink-0"
            >
              {submitting ? '...' : 'Join Waitlist'}
            </button>
          </form>
        )}
      </section>
    </main>
  )
}

export default App
