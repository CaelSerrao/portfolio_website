/** Edit public profile content here. Only add contact details you want published. */
export const profile = {
  name: 'Cael Serrao',
  firstName: 'Cael',
  github: 'https://github.com/CaelSerrao',
  role: 'DEVELOPER / PRODUCT BUILDER / RESEARCHER',
  introduction:
    'I build software products, explore responsible AI through research, and develop applications for the web, desktop, and Android.',
  about: [
    'My work spans product development, AI research, and application engineering. Modsquad, my stream-moderation product, won the Innovation Prize at the RBC Student Pitch Competition and won the Barrett Chair Entrepreneurship Competition.',
    'My honours research at the University of New Brunswick explores representational bias in generated video through a modular facial-synthesis pipeline. The thesis is written, a publication manuscript is in preparation, and my Research Ethics Board application is complete.',
    'I also have hands-on experience working with AI agents from Mistral, ChatGPT, and Claude.',
  ],
  skills: [
    { label: 'Languages', value: 'Python · TypeScript · JavaScript · Kotlin' },
    {
      label: 'Applications',
      value: 'React · Android · FastAPI · Electron · PySide6',
    },
    { label: 'Generative AI', value: 'ComfyUI · FLUX · PuLID' },
    { label: 'Computer vision', value: 'OpenCV · MediaPipe · InsightFace' },
    { label: 'AI agents', value: 'Mistral · ChatGPT · Claude' },
    { label: 'ML tools', value: 'Whisper · ONNX Runtime' },
  ],
} as const
