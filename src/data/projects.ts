import type { Project } from '../types/portfolio'

// Add a verified public repoUrl when a project is ready to share.
export const projects: readonly Project[] = [
  {
    id: 'modsquad',
    title: 'Modsquad',
    artwork: 'product',
    category: 'Product · Stream moderation',
    status: 'Award-winning product',
    description:
      'Modsquad is a stream-moderation app that handles moderation for strong language while people are streaming. The product won the Innovation Prize at the RBC Student Pitch Competition and won the Barrett Chair Entrepreneurship Competition.',
    features: [
      'Moderates strong language during streams.',
      'Developed as a product for stream moderation.',
      'Presented through student pitch and entrepreneurship competitions.',
    ],
    note: '',
    categories: ['products', 'apps'],
    summary:
      'A stream-moderation app that handles strong language while people are streaming.',
    tags: ['Stream moderation', 'Product development'],
    label: 'MODSQUAD · STREAM MODERATION',
    caption: 'PRODUCT & ENTREPRENEURSHIP',
    achievements: [
      'Innovation Prize — RBC Student Pitch Competition',
      'Winner — Barrett Chair Entrepreneurship Competition',
    ],
  },
  {
    id: 'thesis',
    title: 'Ethical Bias in Text-to-Video Models',
    fullTitle:
      'The Mitigation of Ethical Bias in Text-to-Video Models Using Facial Synthesis',
    artwork: 'research',
    category: 'Honours thesis · Responsible AI',
    status: 'Manuscript in preparation',
    description:
      'My honours thesis, “The Mitigation of Ethical Bias in Text-to-Video Models Using Facial Synthesis,” develops a modular post-hoc video-to-video pipeline for studying representational bias. It extracts frames, selects and tracks the primary face, synthesizes a replacement face with identity and landmark guidance, composites the edited region, and reconstructs the video while preserving surrounding scene content. The approach operates downstream of a text-to-video model without retraining it. The thesis is written, a publication manuscript is in preparation, and the Research Ethics Board application is complete.',
    features: [
      'Designed a modular pipeline for frame extraction, primary-face selection, conditioned synthesis, compositing, and video reconstruction.',
      'Used ComfyUI with FLUX.1-dev and PuLID for identity-guided facial synthesis.',
      'Combined MediaPipe facial landmarks, ArcFace embeddings, and OpenCV video processing.',
      'Evaluated four short generated clips using identity similarity, LPIPS perceptual distance, and temporal embedding drift.',
      'Examined the trade-offs between representational intervention, realism, identity stability, and computational cost.',
      'Research Ethics Board application complete.',
    ],
    note: 'The pilot evaluates a face-focused intervention on four generated clips. Broader representational fairness is a research objective; this work does not establish that bias is eliminated across entire scenes.',
    categories: ['research', 'ai'],
    summary:
      'A modular pipeline for studying representational bias in generated video through identity-guided facial synthesis.',
    tags: ['ComfyUI', 'FLUX', 'PuLID', 'MediaPipe', 'OpenCV'],
    label: 'HONOURS THESIS',
    caption: 'MANUSCRIPT IN PREPARATION',
  },
  {
    id: 'quorum',
    title: 'Quorum',
    artwork: 'minutes',
    category: 'Application · Court proceedings',
    status: 'Pitched at MERGE 2.0 OTP',
    description:
      'I worked on Quorum, an app that develops structured minutes with supporting notes for court proceedings. It was pitched at the MERGE 2.0 Open to Pitch (OTP) program.',
    features: [
      'Structured minutes for court proceedings.',
      'Supporting notes alongside the minutes.',
      'Pitched at MERGE 2.0 Open to Pitch (OTP).',
    ],
    note: '',
    categories: ['products', 'apps'],
    summary:
      'An app for structured court-proceeding minutes and notes, pitched at MERGE 2.0 Open to Pitch.',
    tags: ['Court minutes', 'Notes', 'Product pitching'],
    label: 'QUORUM · MINUTES & NOTES',
    caption: 'MERGE 2.0 · OPEN TO PITCH',
  },
  {
    id: 'flexora',
    title: 'Flexora',
    artwork: 'fitness',
    category: 'Application · Fitness',
    status: 'In development · tentative name',
    description:
      'I am developing a gym app, currently using the tentative name Flexora.',
    features: [
      'Gym-focused application in development.',
      'Flexora is the current working name.',
    ],
    note: 'The app name is tentative and development is ongoing.',
    categories: ['products', 'apps'],
    summary:
      'A gym app in development, currently using the working name Flexora.',
    tags: ['Fitness', 'App development'],
    label: 'FLEXORA · WORKING TITLE',
    caption: 'GYM APPLICATION',
  },
  {
    id: 'android-gaming',
    title: 'DroidDex',
    artwork: 'android',
    category: 'Android demo · Gaming & battery insights',
    status: 'Demo in development',
    description:
      'A Kotlin demo app for Android that collects and displays game-related data on Android devices. The app brings this information to the forefront to help users understand game behavior and make informed decisions about battery performance.',
    features: [
      'Native Android demo written in Kotlin.',
      'Collects and displays game-related data on Android devices.',
      'Surfaces information relevant to gaming and battery performance.',
    ],
    note: 'The demo focuses on making game and battery information visible to the user.',
    categories: ['mobile', 'apps'],
    summary:
      'A Kotlin Android demo that surfaces game data and battery-related insights to help users understand device performance.',
    tags: ['Kotlin', 'Android', 'Battery insights'],
    label: 'DROIDDEX · ANDROID GAMING',
    caption: 'DATA & BATTERY VISIBILITY',
  },
  {
    id: 'katseye',
    title: 'Katseye',
    category: 'Computer vision · Few-shot facial recognition',
    description:
      'Katseye is my few-shot facial-recognition project. It uses pretrained facial encodings to compare an enrolled face against faces in new images.',
    features: [
      'Enrollment from a small set of reference images.',
      'Similarity scoring for each detected face, including in group photos.',
      'Optional annotated image output and configurable match threshold.',
      'CPU inference by default, with optional NVIDIA GPU execution through ONNX Runtime.',
    ],
    note: 'An experimental verification project using pretrained models. Matching quality depends on lighting, pose, image quality, and threshold selection.',
    repo: 'Few-Shot-Face-Recog',
    categories: ['ai'],
    summary:
      'Few-shot facial recognition using face encodings and a small set of reference images.',
    tags: ['InsightFace', 'ArcFace', 'ONNX Runtime'],
    label: 'KATSEYE · FACE ENCODINGS',
    caption: 'SMALL INPUT. NEW POSSIBILITIES.',
    repoUrl: 'https://github.com/CaelSerrao/Few-Shot-Face-Recog',
    artwork: 'vision',
  },
  {
    id: 'jarvis',
    title: 'Jarvis',
    category: 'Desktop AI assistant · HackAtlantic project',
    description:
      'A desktop assistant that brings chat, voice, and local capabilities together. The project connects an Electron interface to a Python FastAPI backend, with WebSocket events for progress and approval requests.',
    features: [
      'Chat integration with runtime settings, progress updates, and explicit capability approvals.',
      'Local microphone capture and transcription through faster-whisper.',
      'Spoken replies using a local text-to-speech module.',
      'Dedicated voice worker and saved settings for microphone, voice, speed, and volume.',
    ],
    note: 'A collaborative hackathon project. See the repository for implementation details and local setup.',
    repo: 'Jarvis-HackAtlantic-Project',
    categories: ['ai', 'apps'],
    summary:
      'A desktop assistant connecting conversational AI, voice input, and local tools in one interface.',
    tags: ['Python', 'FastAPI', 'Electron', 'WebSockets'],
    label: 'DESKTOP AI ASSISTANT',
    caption: 'VOICE. CHAT. ACTION.',
    repoUrl: 'https://github.com/CaelSerrao/Jarvis-HackAtlantic-Project',
    artwork: 'jarvis',
  },
  {
    id: 'feed',
    title: 'Escape the Feed',
    category: 'Data analysis · TECHNATION Behind the Feed challenge',
    description:
      'A reproducible study using MovieLens 32M to investigate how recommendation histories affect discovery. Controlled simulations compare full-history recommendations with a reset that keeps the latest 20 starting likes.',
    features: [
      'Examines steering toward an assigned new genre alongside relevance and effective genre diversity.',
      'Separates simulated exposure from actual views and distinguishes behavioral groups from demographics.',
      'Includes saved results, methodology, a five-page graphic, and an independent numerical verifier.',
    ],
    note: 'The reset improved steerability in this simulation while reducing relevance and effective genre diversity. The results do not establish effects on commercial recommendation platforms.',
    repo: 'Technation-Escape-the-Feed',
    categories: ['data', 'research'],
    summary:
      'Exploring how recommendation history shapes discovery, user control, and content diversity.',
    tags: ['Python', 'MovieLens', 'Recommender systems'],
    label: 'RECOMMENDATION SYSTEMS',
    caption: 'MOVIELENS 32M',
    repoUrl: 'https://github.com/CaelSerrao/Technation-Escape-the-Feed',
    artwork: 'feed',
  },
  {
    id: 'kat',
    title: 'Kat Translator',
    category: 'Desktop application · Offline speech transcription',
    description:
      'A Python desktop captioning tool with a PySide6 drag-and-drop interface. It uses a local faster-whisper model to transcribe media and FFmpeg to create videos with subtitles.',
    features: [
      'Drag-and-drop support for common video and audio formats.',
      'Background transcription with progress and completion signals.',
      'SRT caption generation and subtitle rendering with FFmpeg.',
      'CPU inference with int8 quantization and a locally stored model.',
    ],
    note: 'The current transcription code is configured for English. Project name retained from the repository; the implemented workflow focuses on offline captioning.',
    repo: 'Kat-Translator',
    categories: ['ai', 'apps'],
    summary:
      'A drag-and-drop desktop tool that transcribes media locally and creates captioned videos.',
    tags: ['Python', 'PySide6', 'Whisper', 'FFmpeg'],
    label: 'OFFLINE CAPTION TOOL',
    caption: 'AUDIO TO CAPTIONS',
    repoUrl: 'https://github.com/CaelSerrao/Kat-Translator',
    artwork: 'kat',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    artwork: 'portfolio',
    category: 'Web product · Developer portfolio',
    status: 'Built with React & TypeScript',
    description:
      'This portfolio is itself a software product: a responsive React application presenting my products, research, and software projects. It is built with TypeScript, Vite, and Tailwind CSS, with reusable components and typed content.',
    features: [
      'Reusable React components and typed project data.',
      'Category filtering and accessible project-detail dialogs.',
      'Responsive layouts and keyboard navigation.',
      'Vitest interaction tests, type checking, linting, and formatting.',
    ],
    note: 'The application builds to static files so I can choose my own hosting provider.',
    categories: ['products', 'apps'],
    summary:
      'The site you are viewing: a React and TypeScript product built to present my work, research, and achievements.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    label: 'THE PORTFOLIO · A PRODUCT',
    caption: 'DESIGN, BUILD & ITERATE',
  },
]
