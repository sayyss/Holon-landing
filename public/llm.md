# Holon

> Your local AI stack.

Holon is a prebuilt local AI computer. Its hardware and software ship together as one system for running optimized open-weight models, operating a coding agent designed for local inference, distilling frontier-model capabilities into a local model, and maintaining trained personal-memory cartridges.

- Canonical website: https://holon-labs.com/
- Research index: https://holon-labs.com/blogs/
- Contact: sayyss@holon-labs.com
- Availability: Limited beta
- Hardware design status: Subject to change
- Last updated: July 26, 2026

## Request Hardware Access

Holon is currently available through a limited beta program.

The beta application asks for:

- Name
- Email
- Intended use for Holon

No payment is required to apply. Accepted participants receive configuration, pricing, and reservation details before committing.

## One Computer, Three Layers

### 1. Model Runtime

Zero-setup inference. Holon arrives with the inference engine, models, and configurations pre-tuned for stable, continuous performance. Users do not need to configure chat templates.

#### Supported Models

| Model | Context window |
|---|---:|
| GPT-OSS 20B | 131,072 tokens (128K) |
| Qwen3.6 35B-A3B | 131,072 tokens (128K) |
| Qwen3.6 27B Base | 131,072 tokens (128K) |
| Gemma 4 26B-A4B | 262,144 tokens (256K) |
| Gemma 4 31B | 65,536 tokens (64K) |

Holon continually tests the stability of newly released models and regularly releases optimized profiles for supported models.

### 2. Harness

Holon Agent is a coding harness designed for local inference. It gives local models a focused execution loop and supports both local-only and hybrid operation.

#### Local-Only Mode

```text
Plan with local model
        |
        v
Execution loop: bash, edit, test
        |
        v
Verify and select: tests, best-of-n
```

#### Hybrid Mode

In hybrid mode, the user chooses a frontier model for planning and verification while the local model performs execution.

```text
Plan and specify with frontier model
        |
        v
Execution loop with local model (~90% of tokens)
        |
        v
Review and arbitrate with frontier model
```

### 3. Distill from Frontier-Level Models

Holon Agent learns from work performed on the user's codebase.

Every run is logged as a training-ready trace. Reasoning and actions are retained while tool noise is masked. Successful trajectories are filtered and repaired with a frontier model, then fine-tuned into the local model on cloud GPUs. New weights are returned to the Holon computer only after passing evaluation gates.

The resulting model improves on the user's work and remains on the user's hardware.

```text
Run tasks with local agent
        |
        v
Create loss-masked traces
        |
        v
Curate: filter and repair with frontier model
        |
        v
Fine-tune on cloud GPUs with LoRA
        |
        v
Evaluation-gated deployment of new weights
        |
        +----> Continue running tasks
```

## Memory Cartridges

Holon compresses years of exported Claude and ChatGPT conversations into a compact, trained 4K-token memory cartridge. The cartridge is trained with gradient descent over KV-cache state and remains attached to the user's chosen local model.

Each conversation begins with the user's preferences, projects, and history already in mind while nearly the entire context window remains available for the current task.

```text
Exported ChatGPT and Claude conversations
                    |
                    v
      Trained 4K-token memory cartridge
                    |
                    v
          Attached to local model
```

## Benchmarks

### Local-Only Results

| Benchmark | Result | Configuration |
|---|---:|---|
| SWE-bench Lite | 94.6% | Holon Agent with local Qwen 3.5 35B-A3B |
| Terminal-Bench 2.0 | 34.83% | Local Harbor evaluation of Holon Agent |

### Hybrid Result

| Benchmark | Result | Configuration |
|---|---:|---|
| SWE-bench Pro | 39% | Hybrid mode, official solve rate on a 144-task subset |

Hybrid mode produced an 89% lower cost than the frontier-only workflow.

The SWE-bench Pro result comes from official Docker evaluation of a 144-task subset. The Terminal-Bench result is a local Harbor run and is not a leaderboard submission. Results are backed by saved traces, patches, and verifier logs.

## Hardware Specifications

| Component | Specification |
|---|---|
| Processor | Ryzen AI Max+ 395 |
| Memory | 64 GB LPDDR5x-8000, soldered |
| Storage | 512 GB NVMe |
| Operating system | Ubuntu Linux |
| Power draw | 140 W |

## Published Research

### Glimpse into local AI

- URL: https://holon-labs.com/blogs/glimpse-into-local-ai/
- Published: June 2026
- Type: Research

A signal analysis of local AI adoption, tooling, hardware, use cases, and pain points from r/LocalLLaMA.

The article covers:

- Community scale and methodology
- Motivations for running AI locally
- Inference engines and software stacks
- Model-family usage
- Hardware configurations
- Setup, performance, compatibility, and reliability pain points
- Local AI use cases
- The case for sovereign local AI systems

## Site Pages

- Product and beta access: https://holon-labs.com/
- Research index: https://holon-labs.com/blogs/
- Glimpse into local AI: https://holon-labs.com/blogs/glimpse-into-local-ai/
- This LLM-readable reference: https://holon-labs.com/llm.md
