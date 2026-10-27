import { site } from './site'

export const seo = {
  url: 'https://nunessdev.vercel.app/',
  title: 'Criação de sites e landing pages | Arthur Nunes',
  description: 'Criação de sites e landing pages para profissionais e pequenos negócios. Design responsivo, apresentação clara e contato pelo WhatsApp. Solicite um orçamento.',
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': seo.url + '#arthur',
      name: site.name,
      url: seo.url,
      jobTitle: 'Desenvolvedor Web',
      email: site.email,
      telephone: '+' + site.whatsapp,
      sameAs: [site.instagram],
    },
    {
      '@type': 'WebSite',
      '@id': seo.url + '#website',
      url: seo.url,
      name: 'Arthur Nunes — Desenvolvimento Web',
      inLanguage: 'pt-BR',
      publisher: { '@id': seo.url + '#arthur' },
    },
    {
      '@type': 'Service',
      '@id': seo.url + '#service',
      name: 'Criação de sites e landing pages',
      description: seo.description,
      url: seo.url,
      serviceType: ['Landing pages', 'Sites institucionais'],
      provider: { '@id': seo.url + '#arthur' },
      areaServed: { '@type': 'Country', name: 'Brasil' },
    },
  ],
}
