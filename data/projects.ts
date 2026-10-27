export type Project = {
  name: string
  segment: string
  description: string
  type: 'cliente' | 'conceito'
  image?: string
  url?: string
}

// Substitua os placeholders abaixo por projetos reais. Eles somem automaticamente quando a lista tiver itens.
export const projects: Project[] = []
