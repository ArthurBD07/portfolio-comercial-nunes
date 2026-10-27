export type PortfolioProject = {
  id: string
  number: string
  name: string
  category: string
  description: string
  image: string
  imageAlt: string
  href: string
  background: string
  accent: string
}

export const projects: PortfolioProject[] = [
  {
    id: 'hamburgueria',
    number: '01',
    name: 'Brasa Baixa',
    category: 'Hamburgueria · projeto conceito',
    description: 'Um site com personalidade para apresentar o cardápio e despertar a vontade de pedir.',
    image: '/projects/hamburgueria-brasa-baixa.webp',
    imageAlt: 'Site da hamburgueria Brasa Baixa, com fundo escuro, detalhes laranja e o título Fogo. Carne. Desejo. ao lado de um hambúrguer artesanal.',
    href: 'https://hamburgueriaconceito.vercel.app/',
    background: '#E9D7C2',
    accent: '#A85438',
  },
  {
    id: 'nutricionista',
    number: '02',
    name: 'Clara Nogueira',
    category: 'Nutrição · projeto conceito',
    description: 'Um site acolhedor para apresentar o acompanhamento nutricional e facilitar o agendamento de consultas.',
    image: '/projects/nutricionista-clara-nogueira.webp',
    imageAlt: 'Site da nutricionista Clara Nogueira, com fundo claro, título editorial Uma alimentação possível para uma vida inteira e fotografia no consultório.',
    href: 'https://nutricionistaconceito.vercel.app/',
    background: '#D8E4DE',
    accent: '#476B59',
  },
  {
    id: 'personal-trainer',
    number: '03',
    name: 'Eduardo Montanha',
    category: 'Personal trainer · site publicado',
    description: 'Um site profissional para apresentar seus serviços e facilitar o contato com novos alunos.',
    image: '/projects/personal-eduardo-montanha.webp',
    imageAlt: 'Site do personal trainer Eduardo Montanha, com fundo escuro, nome em destaque e botões dourados para consultoria e serviços.',
    href: 'https://montanha-personal.vercel.app/',
    background: '#DEDAE9',
    accent: '#655980',
  },
]
