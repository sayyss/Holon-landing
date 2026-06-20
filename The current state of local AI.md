**The current state of local AI

What many believed to be a far distant future where open-weights AI was able to match closed source models from frontier labs, has turned into a reality where spending a couple grand can get you the hardware needed to run models that match or exceed past year’s frontier intelligence. 

The community of local AI is largely supplied by Chinese frontier labs like Alibaba’s Qwen, DeepSeek,  [Z.Ai](http://z.ai), and is now being pushed by Google’s deepmind with their Gemma line of open-weight models. The forefront of the community is the r/LocalLLama subreddit, a name attributed to the first true open-weight model released by Meta called Llama. 

Since the release of Llama 1, the local AI community has grown exponentially in size, with contributions from major frontier labs and open-source enthusiasts, it is now possible for anyone with minimal technical knowledge to host and run their own models at home. 

  
To dig into how people are currently using local AI, I(and Claude) analyzed 49k posts and over 800k comments from r/LocalLLama subreddit, posted in the last twelve months. Here’s a rough analysis of what we found. 
  
Community at a glance

r/LocalLLaMA as of June 2026 has close to a million subscribers with 136 new posts everyday with 78% of them containing some kind of a problem signal, meaning roughly four out of every five threads is someone trying to make something work. 

This subreddit has become a primary place for the local AI community to share their thoughts, ideas and benchmarks. 
  
## Why local?


We analyzed 47k records on what motivates people to host their models locally.**

| Motivation                                           | Quote-level mentions |
| ---------------------------------------------------- | -------------------: |
| **Cost** (subscription, surprise bills, rate limits) |              **605** |
| **Control / customization / finetuning**             |                  210 |
| **Speed / latency**                                  |                  158 |
| **Privacy**                                          |                  116 |
| **Offline / air-gapped operation**                   |                   72 |
| **Rate-limit refugees** (locked out of paid plans)   |                   39 |
| **Data sovereignty (HIPAA / GDPR explicit)**         |                    5 |
| **Generic "no cloud"**                               |                    3 |

Cost and rate limits seems to be the number one factor for what drives local adoption, although this is skewed towards programmers as they represent most of LocalLlama’s population, as coding agents are prone to massive token usage and persistent runtime. Here are some real quotes from people 

  

"I got hit with a $1k bill in one night, and a lot of my backend code had been tightly coupled to GCP so I had to do major refactors."

"I'm locked out for another 2 hours. I have 50% left on my weekly quota. I will never be able to use what I've paid for! It's a rip-off."

"every provider is returning 429 rate limited error. I'm doing validation testing of this model, hence need to verify how it passes as served by them."

Aside from cost and rate limits, another driving factor is control, largely due to censorship and safety guardrails from frontier labs that limit the model’s output space, where the model refuses to participate or answer questions in some areas. This is where uncensored or also called abliterated models come into picture, which are fine-tuned models where safety guardrails are removed and the model is allowed to engage in conversations it was instructed to not engage in. 

Trailing costs and control are speed/latency and privacy, which represent the other significant portion of motivations. People wanting absolute privacy due to compliance are a small but noticeable part of the ecosystem. 

  

### How are they running it? 

LLMs cannot be downloaded like an app and ran, they have be served via an inference engine, which manages the model’s runtime. Popular choices are llama.cpp, Vllm, and MLX(Apple Silicon).**

| Tool                              |                              Mentions |
| --------------------------------- | ------------------------------------: |
| **llama.cpp**                     | **9,742** ← dominant by a 3-4× margin |
| **Ollama**                        |                                 2,817 |
| **vLLM**                          |                                 2,740 |
| **LM Studio**                     |       1,609 (+ 893 variant spellings) |
| **ROCm** (AMD compute stack)      |                                   979 |
| **MLX** (Apple Silicon)           |                                   526 |
| **Vulkan** (cross-vendor compute) |                                   467 |
| **SGLang**                        |                                   321 |
|                                   |                                       |
|                                   |                                       |
|                                   |                                       |
**

Llama.cpp is by far the most popular way to run LLMs locally, which isn’t surprising as it forms the base of popular local AI apps like Ollama and LMStudio, which offer a more consumer friendly plug and play experience. Trailing behind is VLLM, a production ready inference engine designed for enterprise adoption, as it supports production level concurrency and caching methods, allowing it to serve large amounts of users simultaneously. Another popular choice is MLX, which is Apple’s framework for running neural networks on Apple silicon.

**

### What are they running it on?

| Platform family                 | Mentions | Share |
| ------------------------------- | -------: | ----: |
| **NVIDIA**                      |    8,927 |  ~58% |
| **Apple Silicon (Mac)**         |    3,262 |  ~21% |
| **AMD**                         |    3,050 |  ~20% |
| **Intel**                       |      631 |   ~4% |
| **Edge / ARM SBC** (Pi, Jetson) |      145 |   ~1% |
|                                 |          |       |
|                                 |          |       |

| Hardware                         |                               Mentions |
| -------------------------------- | -------------------------------------: |
| **RTX 3090 (incl. "3090 24GB")** | **772** ← the #1 used-market workhorse |
| RTX 5090                         |                                    401 |
| DGX Spark                        |                                    280 |
| Strix Halo (AMD Ryzen 395+ AI)   |                                    260 |
| Generic "Mac"                    |                                    169 |
| RTX 5060 Ti 16GB                 |                                    134 |
| Generic "AMD GPU"                |                                    130 |
| RTX 3060 12GB                    |                                    122 |
| AMD Strix Halo (explicit)        |                                    118 |
| RTX PRO 6000 (Blackwell)         |                                    116 |
| NVIDIA DGX Spark (explicit)      |                                    113 |
| Multi-GPU setup                  |                                    111 |
| AMD MI50 (used datacenter card)  |                                    111 |
| RTX 4090                         |                                    110 |
| 2× RTX 3090                      |                                    106 |
| 4× RTX 3090                      |                                    106 |

Nvidia GPUs are the most popular choice of hardware for running local LLMs, with Apple and AMD trailing behind. The most popular card is the RTX 3090, a sub $1000 card with 24gb of GDDR6 VRAM, allowing it to run models like Gemma 4 26b and Qwen 3.6 27b, both of which exceed 2025's frontier intelligence. Multiple-GPU rigs are surprisingly common, with 2x3090 or 4x3090 regurarly making appearances. 

### What problems are they facing?


| Pain category                               | Pain points |       % | High-severity share |
| ------------------------------------------- | ----------: | ------: | ------------------: |
| **Setup / installation**                    |  **10,951** | **23%** |            27% high |
| **Performance / speed**                     |       9,779 |     20% |            27% high |
| **Hardware sizing / VRAM**                  |       6,891 |     14% |            38% high |
| **UI / frontend fragmentation**             |       6,300 |     13% |            12% high |
| **Model selection paralysis**               |       5,523 |     12% |             9% high |
| Use-case fit (does it work for what I need) |       4,447 |      9% |            25% high |
| Quantization confusion                      |       1,949 |      4% |            15% high |
| Finetuning                                  |       1,485 |      3% |            28% high |
|                                             |             |         |                     |
Setup and performance represent the biggest barrier to entry in local AI, as people are intimidated by the amount of choices in every step of the process, from choosing hardware to choosing model to choosing the inference engine to choosing the interface, to then specific model configurations like quantizations, context window that allows it to run on their chosen hardware, which still does not gurantee a seamless performance as KV cache can grow larger than the model itself causing you to run out of memory mid session. A smaller part of the subreddit is people wanting to fine-tune their own models locally on their use case, which has shown promising results in coding capabilities.


### Local AI use-cases

| Vertical                                           |  Share |
| -------------------------------------------------- | -----: |
| **Coding / agentic coding** (Claude Code refugees) | **92** |
| **Automation / orchestration**                     |     52 |
| Legal (attorneys, paralegals)                      |     13 |
| Homelab / family-server                            |     10 |
| Content creation                                   |      8 |
| Education / tutoring                               |      4 |
| Finance / accounting                               |      3 |
| Medical / HIPAA                                    |      2 |
| Accessibility                                      |      1 |
|                                                    |        |

Coding is the number use-case for local AI, as seen by the rate limits and surging cost of agentic coding tools like claude-code and codex, and additionally the alleged model degradation where frontier labs are queitly degrading models to reduce cost and compute usage. Automation is the second biggest use case as people are finding it useful for home automation and daily workflows on their computer. Additionally, professionals requiring privacy with their data in fields like law represent a decent share of the usecase. 

### Towards a sovereign AI future

Local AI is a step towards uncensored, private, and unrestricted access to intelligence. There are many problems to be solved for an average consumer to even consider running their own models locally, let alone buying a home server do it. Holon Labs is a step towards that future, stay tuned for whats to come!





