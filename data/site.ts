export const site = {
  name: 'Arthur Nunes',
  role: 'Sites para negócios que querem ser levados a sério.',
  whatsapp: '5511999999999',
  instagram: 'https://instagram.com/arthurnunes',
  instagramLabel: '@arthurnunes',
  email: 'ola@arthurnunes.com.br',
  city: 'Atendimento remoto · Brasil',
  whatsappMessage: 'Olá Arthur, vi seu portfólio e gostaria de conversar sobre um site para meu negócio.',
}

export const services = [
  { number: '01', title: 'Landing pages', text: 'Uma página objetiva para apresentar uma oferta, serviço ou campanha com clareza.' },
  { number: '02', title: 'Sites institucionais', text: 'Seu negócio explicado de um jeito profissional, fácil de navegar e de encontrar.' },
  { number: '03', title: 'Presença que funciona no celular', text: 'Uma experiência bem resolvida em qualquer tela — especialmente naquela que seu cliente mais usa.' },
  { number: '04', title: 'Contato sem atrito', text: 'WhatsApp, formulários, redes sociais e localização conectados ao caminho certo.' },
]

export const process = [
  ['01', 'Conversa inicial', 'Entendo o seu negócio, o que você oferece e o que precisa aparecer.'],
  ['02', 'Proposta', 'Organizo o escopo e as decisões do projeto de forma simples e transparente.'],
  ['03', 'Desenvolvimento', 'Transformo a direção aprovada em uma página clara, responsiva e bem acabada.'],
  ['04', 'Aprovação', 'Você acompanha, revisa e sinaliza os ajustes antes de publicar.'],
  ['05', 'Publicação', 'Coloco o site no ar e deixo tudo pronto para você compartilhar.'],
] as const

export const faqs = [
  ['Quanto tempo leva para criar um site?', 'O prazo depende do tipo de página e do escopo definido na proposta. Esse prazo é combinado antes do início do desenvolvimento.'],
  ['Preciso ter domínio e hospedagem?', 'Não necessariamente. Posso orientar você sobre essas escolhas e incluir a publicação do site no escopo do projeto, conforme a necessidade.'],
  ['Posso pedir alterações?', 'Sim. O processo prevê uma etapa de aprovação e os ajustes combinados na proposta.'],
  ['O site pode aparecer no Google?', 'O site pode ser preparado com uma estrutura técnica e conteúdo adequados para indexação. Aparecer e ganhar posições no Google depende também de fatores externos e de um trabalho contínuo de SEO.'],
  ['Preciso já ter fotos e textos?', 'Ter esses materiais ajuda, mas podemos mapear juntos o que já existe e o que precisa ser preparado para o projeto.'],
] as const

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
