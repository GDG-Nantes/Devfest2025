export type Partner = {
  id: string;
  name: string;
  image: typeof import('*.jpg') | typeof import('*.png') | typeof import('*.webp');
  website: string;
}

export type PartnerType = 'Platinium' | 'Gold' | 'Virtual' | 'Velotypie';

export const partnersByTypes: Record<PartnerType, Partner[]> = {
  Platinium: [
    {
      id: 'proginov',
      name: 'Proginov',
      image: await import('@/images/partners/proginov.png'),
      website: 'https://www.proginov.com/'
    },
    {
      id: 'onepoint',
      name: 'Onepoint',
      image: await import('@/images/partners/onepoint.png'),
      website: 'https://www.groupeonepoint.com'
    },
    {
      id: 'apside',
      name: 'Apside',
      image: await import('@/images/partners/apside.png'),
      website: 'https://www.apside.com/'
    },
    {
      id: 'u-tech',
      name: 'U-Tech',
      image: await import('@/images/partners/u-tech.png'),
      website: 'https://www.magasins-u.com/'
    },
    {
      id: 'sopra-steria',
      name: 'Sopra Steria',
      image: await import('@/images/partners/sopra-steria.png'),
      website: 'https://www.soprasteria.com/'
    },
    {
      id: 'capgemini',
      name: 'Capgemini',
      image: await import('@/images/partners/capgemini.png'),
      website: 'https://www.capgemini.com/'
    },
    {
      id: 'bouygues-telecom',
      name: 'Bouygues Telecom',
      image: await import('@/images/partners/bouygues-telecom.png'),
      website: 'https://www.bouyguestelecom.fr/'
    },
    {
      id: 'thales',
      name: 'Thales',
      image: await import('@/images/partners/thales.png'),
      website: 'https://www.thalesgroup.com/'
    },
    {
      id: 'generali',
      name: 'Generali',
      image: await import('@/images/partners/generali.png'),
      website: 'https://www.generali.fr/'
    },
    {
      id: 'dataiku',
      name: 'Dataiku',
      image: await import('@/images/partners/dataiku.png'),
      website: 'https://www.dataiku.com/'
    }
  ],
  Gold: [
    {
      id: 'epitech',
      name: 'Epitech',
      image: await import('@/images/partners/epitech.png'),
      website: 'https://www.epitech.eu/'
    },
    {
      id: 'lucca',
      name: 'Lucca',
      image: await import('@/images/partners/lucca.png'),
      website: 'https://www.lucca.fr/'
    },
    {
      id: 'sfeir',
      name: 'SFEIR',
      image: await import('@/images/partners/sfeir.png'),
      website: 'https://www.sfeir.com/'
    },
    {
      id: 'daveo',
      name: 'Daveo',
      image: await import('@/images/partners/daveo.png'),
      website: 'https://www.daveo.fr/'
    },
    {
      id: 'mantu',
      name: 'Amaris Consulting - Mantu',
      image: await import('@/images/partners/mantu.png'),
      website: 'https://www.mantu.com/'
    },
    {
      id: 'accenture',
      name: 'Accenture',
      image: await import('@/images/partners/accenture.png'),
      website: 'https://www.accenture.com/'
    },
    {
      id: 'neosoft',
      name: 'Neosoft',
      image: await import('@/images/partners/neosoft.png'),
      website: 'https://www.neosoft.fr/'
    },
    {
      id: 'sii',
      name: 'SII',
      image: await import('@/images/partners/sii.png'),
      website: 'https://www.sii.fr/'
    },
    {
      id: 'shopopop',
      name: 'Shopopop',
      image: await import('@/images/partners/shopopop.png'),
      website: 'https://www.shopopop.com/'
    },
    {
      id: 'objectware',
      name: 'Objectware',
      image: await import('@/images/partners/objectware.svg'),
      website: 'https://www.objectware.fr/'
    },
    {
      id: 'maif',
      name: 'MAIF',
      image: await import('@/images/partners/maif.png'),
      website: 'https://www.maif.fr/'
    },
    {
      id: 'orange-business',
      name: 'Orange Business',
      image: await import('@/images/partners/orange-business.png'),
      website: 'https://www.orange-business.com/'
    },
    {
      id: 'zenika',
      name: 'Zenika',
      image: await import('@/images/partners/zenika.png'),
      website: 'https://www.zenika.com/'
    },
    {
      id: 'bpce-si',
      name: 'BPCE SI',
      image: await import('@/images/partners/bpce-si.png'),
      website: 'https://www.bpce-si.fr/'
    },
    {
      id: 'sncf-connect-tech',
      name: 'SNCF Connect & Tech',
      image: await import('@/images/partners/sncf-connect-tech.png'),
      website: 'https://www.sncf-connect.com/'
    },
    {
      id: 'qlik',
      name: 'Qlik (Talend SAS)',
      image: await import('@/images/partners/qlik.svg'),
      website: 'https://www.qlik.com/'
    },
    {
      id: 'catamania',
      name: 'Catamania',
      image: await import('@/images/partners/catamania.png'),
      website: 'https://www.catamania.com/'
    }
  ],
  Virtual: [
    {
      id: 'sully-group',
      name: 'Sully Group',
      image: await import('@/images/partners/sully-group.png'),
      website: 'https://www.sully-group.com/'
    }
  ],
  Velotypie: [
    {
      id: 'arkup',
      name: 'Arkup',
      image: await import('@/images/partners/arkup.png'),
      website: 'https://www.arkup.fr/arkup/'
    },
    {
      id: 'google',
      name: 'Google',
      image: await import('@/images/partners/google.png'),
      website: 'https://developers.google.com/'
    },
    {
      id: 'kanoma',
      name: 'Kanoma',
      image: await import('@/images/partners/kanoma.png'),
      website: 'https://www.kanoma.fr/'
    }
  ]
}
