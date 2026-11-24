export type Category =
  'products' | 'research' | 'mobile' | 'ai' | 'apps' | 'data'
export type ProjectId =
  | 'modsquad'
  | 'thesis'
  | 'quorum'
  | 'flexora'
  | 'android-gaming'
  | 'katseye'
  | 'jarvis'
  | 'feed'
  | 'kat'
  | 'portfolio'
export type Artwork =
  | 'product'
  | 'research'
  | 'minutes'
  | 'fitness'
  | 'android'
  | 'portfolio'
  | 'vision'
  | 'jarvis'
  | 'feed'
  | 'kat'
export type Project = {
  id: ProjectId
  title: string
  fullTitle?: string
  artwork: Artwork
  category: string
  description: string
  features: readonly string[]
  note: string
  repo?: string
  repoUrl?: string
  status?: string
  achievements?: readonly string[]
  categories: readonly Category[]
  summary: string
  tags: readonly string[]
  label: string
  caption: string
}
