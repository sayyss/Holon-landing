import { useState } from 'react'
import holonImage from '../holon_new_2.png'
import modelRuntimeImage from '../model-runtime-2.png'

const layers = [
  {
    number: '01',
    title: 'Model Runtime',
    body: 'Zero-setup inference. Holon arrives with the engine, models, and configs pre-tuned for stable 24/7 performance, you never touch a chat template.',
    link: {
      label: 'See supported models',
      href: 'mailto:sayyss@holon-labs.com?subject=Supported%20models',
    },
    image: modelRuntimeImage,
    imageAlt: 'Holon model runtime showing an optimized GPT-OSS model ready for local inference',
  },
  {
    number: '02',
    title: 'Harness',
    body: 'Designed for local inference, Holon Agent provides local models with a focused execution loop. In hybrid mode, Holon Agent uses a frontier model of your choice for planning and verification, and the local model for execution.',
    visual: 'harness',
  },
  {
    number: '03',
    title: 'Adaptation',
    body: 'The agent that learns your codebase. Every run Holon Agent makes is logged as a training-ready trace — reasoning and actions kept, tool noise masked out. Successful trajectories are filtered and repaired with a frontier model, fine-tuned into your local model on cloud GPUs, and the new weights only ship back after passing evaluation gates. Your agent gets measurably better at your work, and the improved model lives on your hardware.',
    visual: 'adaptation',
  },
]

const localBenchmarks = [
  {
    value: '94.6%',
    title: 'SWE-bench Lite',
    description: 'Holon Agent with local Qwen 3.5 35B-A3B.',
  },
  {
    value: '34.83%',
    title: 'Terminal-Bench 2.0',
    description: 'Local Harbor evaluation of the Holon Agent harness.',
  },
]

const hybridBenchmark = {
  value: '39%',
  title: 'SWE-bench Pro',
  description: 'Official solve rate on a 144-task subset.',
}

const specs = [
  ['Processor', 'Ryzen™ AI Max+ 395'],
  ['Memory', '64 GB LPDDR5x-8000, soldered'],
  ['Operating system', 'Linux'],
  ['Power draw', '140 W'],
]

function App() {
  const [form, setForm] = useState({ name: '', email: '', useCase: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/xojnverd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          use_case: form.useCase,
          source: 'Holon beta program',
        }),
      })

      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      setForm({ name: '', email: '', useCase: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="site-shell">
      <main>
        <section className="hero" id="top">
          <h1>HOLON</h1>
          <p className="hero-tagline">Your local AI stack.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#beta">Request hardware access</a>
          </div>
        </section>

        <section className="product-section" id="stack">
          <figure className="product-stage">
            <div className="section-heading product-heading">
              <h2>One computer.<br />Three layers.</h2>
            </div>
            <img src={holonImage} alt="Holon local AI computer" />
            <figcaption>Design subject to change</figcaption>
          </figure>

          <div className="layer-list">
            {layers.map((layer) => (
              <article className={`layer layer-with-visual${layer.visual ? ` layer-${layer.visual}` : ''}`} key={layer.number}>
                <div className="layer-index">
                  <span>{layer.number}</span>
                </div>
                {layer.image ? (
                  <figure className="layer-visual">
                    <img src={layer.image} alt={layer.imageAlt} />
                  </figure>
                ) : layer.visual === 'harness' ? (
                  <div
                    className="layer-visual layer-visual-harness"
                    role="img"
                    aria-label="Comparison of local-only and hybrid Holon Agent execution flows"
                  >
                    <div className="harness-mode">
                      <h4>Local-only mode</h4>
                      <div className="flow-step local-step">
                        <strong>Plan</strong>
                        <span>Local model</span>
                      </div>
                      <span className="diagram-arrow" aria-hidden="true">↓</span>
                      <div className="flow-step local-step">
                        <strong>Execution loop</strong>
                        <span>bash, edit, test</span>
                      </div>
                      <span className="diagram-arrow" aria-hidden="true">↓</span>
                      <div className="flow-step local-step">
                        <strong>Verify and select</strong>
                        <span>Tests, best-of-n</span>
                      </div>
                    </div>

                    <div className="harness-mode">
                      <h4>Hybrid mode</h4>
                      <div className="flow-step frontier-step">
                        <strong>Plan and spec</strong>
                        <span>Frontier model</span>
                      </div>
                      <span className="diagram-arrow" aria-hidden="true">↓</span>
                      <div className="flow-step local-step">
                        <strong>Execution loop</strong>
                        <span>Local model, ~90% tokens</span>
                      </div>
                      <span className="diagram-arrow" aria-hidden="true">↓</span>
                      <div className="flow-step frontier-step">
                        <strong>Review and arbitrate</strong>
                        <span>Frontier model</span>
                      </div>
                    </div>
                  </div>
                ) : layer.visual === 'adaptation' ? (
                  <div
                    className="layer-visual layer-visual-adaptation"
                    role="img"
                    aria-label="Holon Agent adaptation loop from task traces through fine-tuning and evaluated model deployment"
                  >
                    <div className="adaptation-node adaptation-run">
                      <strong>Run tasks</strong>
                      <span>Local agent loop</span>
                    </div>
                    <span className="adaptation-arrow adaptation-to-traces" aria-hidden="true">→</span>
                    <div className="adaptation-node adaptation-traces">
                      <strong>Traces</strong>
                      <span>Loss-masked turns</span>
                    </div>
                    <span className="adaptation-arrow adaptation-to-curate" aria-hidden="true">→</span>
                    <div className="adaptation-node adaptation-curate">
                      <strong>Curate</strong>
                      <span>Filter and repair</span>
                    </div>
                    <span className="adaptation-arrow adaptation-to-tune" aria-hidden="true">↓</span>
                    <div className="adaptation-node adaptation-tune">
                      <strong>Fine-tune</strong>
                      <span>Cloud GPUs, LoRA</span>
                    </div>
                    <span className="adaptation-arrow adaptation-to-weights" aria-hidden="true">
                      <span className="desktop-arrow">←</span>
                      <span className="mobile-arrow">↓</span>
                    </span>
                    <div className="adaptation-node adaptation-weights">
                      <strong>New weights</strong>
                      <span>Eval-gated deploy</span>
                    </div>
                    <span className="adaptation-arrow adaptation-to-run" aria-hidden="true">
                      <span className="desktop-arrow">↑</span>
                      <span className="mobile-arrow">↺</span>
                    </span>
                  </div>
                ) : (
                  <div className="layer-visual layer-visual-placeholder" aria-hidden="true">
                    <span>{layer.number}</span>
                  </div>
                )}
                <div className="layer-content">
                  <h3>{layer.title}</h3>
                  <p>{layer.body}</p>
                  {layer.link && (
                    <a className="layer-link" href={layer.link.href} aria-label="Ask about supported models by email">
                      {layer.link.label} <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="benchmark-section" id="benchmarks">
          <div className="section-heading benchmark-heading">
            <h2>Local by design harness</h2>
          </div>

          <section className="benchmark-mode">
            <p className="mode-label">Local-only mode</p>
            <div className="benchmark-grid">
              {localBenchmarks.map((benchmark) => (
                <article className="benchmark" key={benchmark.title}>
                  <strong>{benchmark.value}</strong>
                  <h3>{benchmark.title}</h3>
                  <p>{benchmark.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="hybrid-mode">
            <div className="hybrid-copy">
              <p className="mode-label">Hybrid mode</p>
              <h3>Frontier models for planning/verification, local for execution</h3>
            </div>
            <article className="hybrid-stat">
              <strong>{hybridBenchmark.value}</strong>
              <div>
                <h3>{hybridBenchmark.title}</h3>
                <p>{hybridBenchmark.description}</p>
              </div>
            </article>
            <article className="hybrid-stat cost-result">
              <strong>89%</strong>
              <div>
                <h3>Lower cost</h3>
                <p>Compared with the frontier-only workflow.</p>
              </div>
            </article>
          </section>

          <p className="method-note">
            SWE-bench Pro result is from official Docker evaluation of a 144-task subset. Terminal-Bench is a local Harbor run,
            not a leaderboard submission. Results are backed by saved traces, patches, and verifier logs.
          </p>
        </section>

        <section className="specs-section" id="specs">
          <div className="section-heading specs-heading">
            <p className="section-label">Specifications</p>
            <h2>Built as one system.</h2>
            <p>Hardware and software ship together, tuned as a single local AI system.</p>
          </div>

          <dl className="spec-list">
            {specs.map(([term, description]) => (
              <div className="spec-row" key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="beta-section" id="beta">
          <div className="beta-copy">
            <p className="section-label">Limited beta</p>
            <h2>Bring local AI home.</h2>
            <p>
              Apply for early access to Holon hardware, the local coding harness, and automatic fine-tuning.
              Accepted participants will receive configuration, pricing, and reservation details before committing.
            </p>
          </div>

          {status === 'success' ? (
            <div className="form-success" role="status">
              <span>Application received</span>
              <p>We will be in touch with beta details.</p>
            </div>
          ) : (
            <form className="beta-form" onSubmit={handleSubmit}>
              <div className="field-grid">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>
              <label>
                <span>What would you use Holon for?</span>
                <textarea
                  name="useCase"
                  value={form.useCase}
                  onChange={handleChange}
                  placeholder="Coding, private research, internal workflows..."
                  rows="4"
                  required
                />
              </label>
              <div className="form-footer">
                <button type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Apply for beta'}
                </button>
                <p>No payment is required to apply.</p>
              </div>
              {status === 'error' && (
                <p className="form-error" role="alert">The form could not be submitted. Please try again.</p>
              )}
            </form>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <span>HOLON</span>
        <a href="/blogs/">Research</a>
        <a href="mailto:sayyss@holon-labs.com">sayyss@holon-labs.com</a>
      </footer>
    </div>
  )
}

export default App
