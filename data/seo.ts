import { site } from './site'

export const seo = {
  url: 'https://nunessdev.vercel.app/',
  name: 'NunesDev',
  title: 'NunesDev | Arthur Nunes — Criação de sites',
  description: 'NunesDev: criação de sites e landing pages por Arthur Nunes para profissionais e pequenos negócios. Design responsivo e contato pelo WhatsApp. Peça um orçamento.',
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
      name: seo.name,
      alternateName: 'Arthur Nunes — Desenvolvimento Web',
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
