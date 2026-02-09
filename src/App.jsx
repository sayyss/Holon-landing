import { useState, useRef } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const waitlistRef = useRef(null)

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

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
    <div className="min-h-screen bg-bg text-text-primary">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-5 flex items-center justify-between">
          <span className="font-display text-2xl tracking-tight">Holon</span>
          <button
            onClick={scrollToWaitlist}
            className="text-xs font-mono tracking-widest uppercase text-text-secondary hover:text-accent transition-colors duration-300 cursor-pointer"
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tight mb-10">
          Holon
        </h1>
        <p className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-14 font-mono font-light">
          Unlimited. Personal. Always on.<br />
          A device that runs AI locally.
        </p>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={scrollToWaitlist}
            className="group bg-text-primary text-bg px-10 py-4 text-sm font-mono font-medium tracking-wider uppercase hover:bg-accent hover:text-bg transition-all duration-300 cursor-pointer"
          >
            Join the Waitlist
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </button>
          <span className="text-text-muted text-xs font-mono tracking-wide">
            Be first to own your intelligence.
          </span>
        </div>
      </section>

      {/* Problem */}
      <section className="py-40 md:py-52 px-8">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-text-muted text-xs font-mono tracking-[0.2em] uppercase mb-8">The problem</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight mb-24">
            AI is a rental economy.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-border">
            {/* Header row */}
            <div className="px-8 py-5 border-b border-border bg-bg-elevated">
              <span className="text-xs font-mono tracking-[0.15em] uppercase text-text-muted">Rented AI</span>
            </div>
            <div className="px-8 py-5 border-b border-border bg-bg-elevated md:border-l">
              <span className="text-xs font-mono tracking-[0.15em] uppercase text-accent">Owned AI</span>
            </div>

            {/* Row 1 */}
            <div className="px-8 py-8 border-b border-border">
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-mono font-light">
                They see everything you ask.
              </p>
            </div>
            <div className="px-8 py-8 border-b border-border md:border-l">
              <p className="text-text-primary text-sm sm:text-base leading-relaxed font-mono font-light">
                Your data never leaves your device.
              </p>
            </div>

            {/* Row 2 */}
            <div className="px-8 py-8 border-b border-border">
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-mono font-light">
                They can change the model overnight.
              </p>
            </div>
            <div className="px-8 py-8 border-b border-border md:border-l">
              <p className="text-text-primary text-sm sm:text-base leading-relaxed font-mono font-light">
                Your AI stays consistent.
              </p>
            </div>

            {/* Row 3 */}
            <div className="px-8 py-8">
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-mono font-light">
                They can cut you off anytime.
              </p>
            </div>
            <div className="px-8 py-8 md:border-l border-border">
              <p className="text-text-primary text-sm sm:text-base leading-relaxed font-mono font-light">
                No one can turn it off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="py-40 md:py-52 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-text-muted text-xs font-mono tracking-[0.2em] uppercase mb-8">What is Holon</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6">
            A device that makes<br />AI ownership real.
          </h2>
          <p className="text-text-secondary text-sm sm:text-base font-mono font-light mb-24">
            Built on Nvidia's Jetson AGX platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <FeatureCard
              icon="∞"
              title="No rate limits. No per-message fees."
              description="Ask a thousand questions a day. Generate all night. Your device, your compute. No one throttling you."
            />
            <FeatureCard
              icon="⇄"
              title="Run any model. Switch anytime."
              description="Run up to 30 billion parameter models of your choice."
            />
            <FeatureCard
              icon="⚙"
              title="Skills and preferences that stick."
              description="Teach it how you work. Add tools it can use. It remembers your context, your style, your goals. Permanently."
            />
            <FeatureCard
              icon="◉"
              title="Always on. Acts without asking."
              description="It monitors, fetches, prepares, and alerts. Even when you're not there. Your AI works while you sleep."
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-40 md:py-52 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="border-t border-b border-border py-24 md:py-32">
            <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight italic px-4">
              &ldquo;The most powerful tool humanity has ever created shouldn&rsquo;t have a landlord.&rdquo;
            </blockquote>
            <p className="text-text-secondary text-sm sm:text-base font-mono font-light mt-14 max-w-xl mx-auto leading-relaxed">
              Holon is building toward a world where intelligence is owned, not rented: personal, private, permanently yours.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section ref={waitlistRef} className="py-40 md:py-52 px-8" id="waitlist">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight mb-6">
            Own your intelligence.
          </h2>
          <p className="text-text-secondary text-sm sm:text-base font-mono font-light mb-16">
            No spam. Just updates on Holon&rsquo;s progress.
          </p>

          {submitted ? (
            <div className="border border-accent/30 bg-accent/5 px-8 py-8">
              <p className="text-accent text-sm font-mono">
                You&rsquo;re on the list. We&rsquo;ll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-bg p-10 md:p-14 group text-center">
      <span className="text-accent text-3xl block mb-8">{icon}</span>
      <h3 className="font-display text-xl sm:text-2xl tracking-tight mb-5 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-text-secondary text-sm sm:text-base font-mono font-light leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default App
