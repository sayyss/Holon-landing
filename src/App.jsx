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
          Intelligence that has your taste.<br />
          Personal. Private. Yours.
        </p>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={scrollToWaitlist}
            className="group bg-text-primary text-bg px-10 py-4 text-sm font-mono font-medium tracking-wider uppercase hover:bg-accent hover:text-bg transition-all duration-300 cursor-pointer"
          >
            Join the Waitlist
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </button>
        </div>
      </section>

      {/* Device Specs */}
      <section className="py-40 md:py-52 px-8">
        <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start md:pt-0">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6">
              Nobody else has your weights.
            </h2>
            <p className="text-text-secondary text-sm sm:text-base font-mono font-light leading-relaxed mb-10">
              Overnight, Holon studies your conversations, memories, and style of thinking then finetunes itself. All on-device.
            </p>
            <ul className="flex flex-col gap-5 font-mono text-sm sm:text-base font-light">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">+</span>
                <span className="text-text-primary">Built on Nvidia Jetson AGX Orin</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">+</span>
                <span className="text-text-primary">Supports Gemma 4 / Qwen 3.5 models</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">+</span>
                <span className="text-text-primary">Up to 30B parameters, 32GB memory</span>
              </li>
            </ul>
          </div>
          <img
            src="/holon_new_2.png"
            alt="Holon device"
            className="w-full max-w-[550px] mx-auto"
          />
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-40 md:py-52 px-8">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight mb-16">
            Watch it grow alongside you.
          </h2>
          <div className="flex flex-col gap-8 font-mono text-sm sm:text-base font-light max-w-md mx-auto text-left">
            <div className="flex gap-4">
              <span className="text-text-muted shrink-0 w-20">Day 0</span>
              <span className="text-text-primary">Barely knows you, but ready to learn.</span>
            </div>
            <div className="flex gap-4">
              <span className="text-text-muted shrink-0 w-20">Week 1</span>
              <span className="text-text-primary">Knows you as a person.</span>
            </div>
            <div className="flex gap-4">
              <span className="text-text-muted shrink-0 w-20">Month 3</span>
              <span className="text-text-primary">Knows the what, the how, and the why.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership */}
      <section className="py-40 md:py-52 px-8">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight mb-14">
            A step towards AI ownership.
          </h2>
          <div className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug space-y-3">
            <p>Owned. <span className="text-text-muted">Not rented.</span></p>
            <p>Personal. <span className="text-text-muted">Not generic.</span></p>
            <p>Extension. <span className="text-text-muted">Not tool.</span></p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-40 md:py-52 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight mb-24">
            True personal intelligence.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            <FeatureCard
              icon="∞"
              title="No rate limits. No subscriptions."
              description="Ask a thousand questions. Generate all night. Your compute."
            />
            <FeatureCard
              icon="⚙"
              title="Agentic out of the box."
              description="Ships with OpenClaw and Hermes. Browse, code, automate — day one."
            />
            <FeatureCard
              icon="◉"
              title="Personal weights."
              description="Seamless finetuning preferences, memories, style."
            />
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
