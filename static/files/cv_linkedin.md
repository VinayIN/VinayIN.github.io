# Binay Kumar Pradhan

Target roles: Machine Learning Engineer • AI Engineer • Data Scientist

## About
Machine Learning Engineer / AI Engineer / Data Scientist focused on system design for ML, speech recognition (ASR), model compression (pruning/quantization/distillation), and reinforcement learning. I build reliable ML systems end to end—from data and experimentation to production deployment—using Python and Rust, with PyTorch and AWS as core tooling. Currently completing a master’s with applied research in neuroadaptive HCI (EEG/eye-tracking). Passionate about reproducible ML and ethical AI.

Core strengths: architecting ML systems, shipping models to production, improving latency/throughput/cost via compression, building tooling and automation, and collaborating across research and engineering teams.

Keywords: Machine Learning Engineer, AI Engineer, Data Scientist, System Design, Speech Recognition, ASR, Model Pruning, Quantization, Knowledge Distillation, Reinforcement Learning, Python, Rust, PyTorch, TorchAudio, AWS SageMaker, MLOps, NLP, Computer Vision, CI/CD, Model Registry, Experiment Tracking, Data Engineering, Edge AI, Neuroadaptive HCI, EEG, Eye-Tracking, Serverless, Docker, Jenkins, Git

### Specializations
- System Design for ML platforms: data/feature pipelines, training/inference orchestration, observability, and cost/performance optimization
- Speech Recognition (ASR): signal processing pipelines, model training/evaluation, deployment considerations (streaming/batch)
- Model Compression: pruning/quantization/distillation to reduce latency and footprint while preserving accuracy
- Reinforcement Learning: policy design, reward shaping, simulation-driven evaluation for operational optimization
- Primary languages: Python and Rust (for performance-sensitive components, tooling, and services)

---

## Experience

### Brandenburgische Technische Universität Cottbus–Senftenberg (BTU) — Cottbus, Germany
University Research Assistant (Jun 2023 – Mar 2025)
- Programming Languages \u0026 Compiler Construction: Built a data pipeline and visualization toolkit to extract and visualize test-case data from Java subroutines, cutting researcher turnaround time by [20–40%] (result) by implementing Python ETL (pandas), static/dynamic analysis hooks, and interactive Plotly dashboards (how).
- Optimization Research: Evaluated RL vs. constraint programming for stockyard management, improving simulated time-cost objective by [10–15%] over baseline CP on representative workloads (result) by designing reward functions, training PPO/DQN variants, and creating simulation/evaluation loops with reproducibility seeds (how).
- Neuroadaptive Labs (Brain–Human Interactions): Shortened experiment calibration/analysis cycles by [25–35%] (result) by co-designing EEG protocols, implementing calibration paradigms, and building Jupyter notebooks for real-time (streaming) and offline analysis with MNE/Torch (how).
- Eye-Tracking Toolbox (pyETA-toolbox): Open-sourced a real-time fixation detection and eye-tracker validation toolbox on PyPI, enabling reproducible PassiveBCI experiments and reducing per-study setup by [30–50%] (result) via streaming signal processing, event detection (I-DT/I-VT style), and performance validation routines with configurable thresholds (how).
- ASR focus (academic exploration): Prototyped ASR preprocessing and evaluation workflows (X) to standardize datasets/metrics (Y) by building TorchAudio pipelines (resampling, spec/CMVN), WER/CER evaluation, and batch/streaming inference harnesses (Z).

### Wolkus Technology Solutions (Fasal) — Bangalore, India
AI Data Engineer II (Jun 2022 – Sep 2022)
- Production ML Pipelining: Cut manual release steps by [60–80%] and improved lineage/traceability (result) by building SageMaker Pipelines (train/validate/register/promote), parameterizing steps, and integrating with a model registry + automated approvals (how).
- Cloud Migration: Increased datamart reliability and reduced maintenance overhead (result) by migrating GCP→AWS with IaC (CloudFormation/Terraform) and data-migration scripts; implemented monitoring/alerts for data freshness (how).
- Serverless Optimization: Reduced Lambda cold-starts by [30–50%] and lowered p95 latency by [20–35%] in QA (result) by right-sizing memory/timeout, minimizing package size via layer separation, and using provisioned concurrency where needed (how).
- Developer Tooling: Improved team observability and MTTR (result) by authoring fasal-logger (PyPI) with structured logs, correlation IDs, JSON formatters, and env-aware configuration; integrated into CI to enforce consistent logging (how).

### Myelin Foundry — Bangalore, India
Software Engineer II (Oct 2021 – Mar 2022)
- Edge AI Assistant: Delivered real-time in-car features—facial emotion recognition, hand-gesture detection, object detection—achieving [30 FPS] on target devices with on-device inference (result) by integrating MediaPipe graphs, pruning/quantizing models for mobile, and building an Android deployment with JNI bridges for optimized paths (how).

### Utopia India (Prometheus Group) — Bangalore, India
Data Science Engineer (Jul 2019 – Oct 2021)
- 4C Data-Cleaning Platform: Increased data-quality throughput by [2–3x] and reduced manual QA (result) by building Streamlit/Flask data apps, REST APIs, and visualizations; added on-demand ML features and delivered quarterly KT sessions to scale adoption (how).
- Text Parsing \u0026 Information Extraction: Improved extraction F1 and robustness across document types (result) by combining ML parser with regex fallback and a consensus algorithm; prototyped RL-assisted labeling and applied Transformers (BERT/GPT) for industrial text generation (how).
- Entity Mapping: Achieved ~85% field-filling accuracy and ~15x speedup over legacy Excel macros/rules (result) by implementing embedding-based entity mapping with spell correction and similar keyword retrieval; added active-learning loops for edge cases (how).
- Document Processing: Reduced parsing failures (result) by designing a template-based image matching algorithm for PDF segmentation and codifying business rules for exceptions (how).
- CI/CD \u0026 Infra: Cut build/test cycle time and compute costs (result) by introducing Jenkins pipelines with automated tests and leveraging AWS Spot for parallel jobs; automated master-data migrations with audit logs (how).
- Enablement: Delivered a 5-week hands-on training for cross-functional teams on Python, data analysis libraries, and ML fundamentals, increasing internal capability and reducing single-point dependencies (how).

Machine Learning Intern (Jan 2019 – Jul 2019)
- Text Matching: Increased label standardization (result) by building a hybrid text-matching algorithm using pre-trained vectors + custom embeddings, fuzzy logic, and set-relation techniques (how).
- Standardization Algorithms: Improved consistency of label/value structures (result) by developing a data-driven standardization approach and orchestrating batch processing with Makefile (how).

### Institute for Development and Research in Banking Technology (IDRBT) — Hyderabad, India
Research Intern (May 2018 – Jul 2018)
- Data for Low-Resource NLP: Enabled training/evaluation for code-mixed NLP (result) by scraping and labeling Hindi- and Bengali-mixed script datasets with clear guidelines; produced splits/metadata for reproducibility (how).
- Research Support: Contributed to “Improving Code-mixed POS Tagging Using Code-mixed Embeddings” (result) by assisting with POS tagging workflows, error analysis, and manuscript preparation; adhered to data ethics and anonymization practices (how).

---

## Education
- M.Sc. (EQF Level 7), Brandenburgische Technische Universität Cottbus–Senftenberg, Germany (Oct 2022 – Present)
  - Focus: Artificial Intelligence, System Design for ML, Speech Recognition (ASR), Model Compression (Pruning/Quantization/Distillation), Reinforcement Learning, Neuroadaptive HCI, MLOps
- B.Tech. (EQF Level 7), International Institute of Information Technology Bhubaneswar, India (Aug 2015 – Jun 2019)
  - Thesis: Unstructured text to Structured text mapping | Final grade: 2.8

---

## Publications
- S. N. Bhattu, S. K. Nunna, D. V. L. N. Somayajulu, and Binay Pradhan (2020). Improving Code-mixed POS Tagging Using Code-mixed Embeddings. ACM TALLIP 19(4): Article 50, 31 pages.
  - Contribution: Assisted in developing a novel approach for POS tagging on low-resource, code-mixed social media text (e.g., Bengali–English, Hindi–English, Telugu–English) addressing limited labeled data and OOV challenges.

---

## Skills
- Languages: Python (primary), Rust (systems/perf), Bash; Python stack: NumPy, Pandas, PyTorch, scikit-learn, TorchAudio, Matplotlib/Seaborn
- MLOps \u0026 Cloud: AWS (SageMaker, Lambda), Serverless Framework, Docker, Jenkins, Git, CI/CD, Model Registry, Experiment Tracking
- Domains: Speech Recognition (ASR), Model Compression (Pruning/Quantization/Distillation), Reinforcement Learning, NLP, Computer Vision, Time Series, Neuroadaptive HCI (EEG/Eye-Tracking), Edge AI (Android)
- Data \u0026 Systems: ETL/ELT, Feature Stores, Streaming/Batch Pipelines, Observability/Logging, APIs, Microservices, Performance Optimization

---

## Selected Projects \u0026 Open Source
- pyETA-toolbox (PyPI): Real-time fixation detection and eye-tracker validation for PassiveBCI experiments; reduced per-study setup by [30–50%] with configurable pipelines (how: streaming buffers, fixation detection thresholds, validation reports).
- fasal-logger (PyPI): Structured logging library adopted across services; lowered MTTR and improved traceability (how: correlation IDs, JSON formatters, env-aware configs, CI checks).

---

## Profile Highlights (for LinkedIn Headline/About)
- Headline ideas: “Machine Learning Engineer / AI Engineer / Data Scientist | System Design for ML | ASR | Model Pruning/Compression | RL | Python/Rust | MLOps (SageMaker/PyTorch)”
- About summary tip (XYZ): “I design and ship ML systems (X) that reduce latency/cost and improve reliability (Y) by combining Python/Rust services, model compression (pruning/quantization/distillation), and MLOps on AWS SageMaker (Z).”

