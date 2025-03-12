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
      id: 'apside',
      name: 'Apside',
      image: await import('@/images/partners/apside.png'),
      website: 'https://www.apside.com'
    },
    {
      id: 'bouygues-telecom',
      name: 'Bouygues Telecom',
      image: await import('@/images/partners/bouygues-telecom.png'),
      website: 'https://www.bouyguestelecom.fr'
    },
    {
      id: 'capgemini',
      name: 'Capgemini',
      image: await import('@/images/partners/capgemini.png'),
      website: 'https://www.capgemini.com'
    },
    {
      id: 'generali',
      name: 'Generali',
      image: await import('@/images/partners/generali.png'),
      website: 'https://www.generali.fr'
    },
    {
      id: 'google',
      name: 'Google',
      image: await import('@/images/partners/google.png'),
      website: 'https://developers.google.com/'
    },
    {
      id: 'onepoint',
      name: 'Onepoint',
      image: await import('@/images/partners/onepoint.png'),
      website: 'https://www.groupeonepoint.com/fr/'
    },
    {
      id: 'proginov',
      name: 'Proginov',
      image: await import('@/images/partners/proginov.png'),
      website: 'https://www.proginov.com'
    },
    {
      id: 'sfeir',
      name: 'SFEIR',
      image: await import('@/images/partners/sfeir.png'),
      website: 'https://www.sfeir.com'
    },
    {
      id: 'sopra-steria',
      name: 'Sopra Steria',
      image: await import('@/images/partners/sopra-steria.png'),
      website: 'https://www.soprasteria.com'
    },
    {
      id: 'thales',
      name: 'Thales Services Numériques',
      image: await import('@/images/partners/thales.png'),
      website: 'https://www.thalesgroup.com/fr'
    },
    {
      id: 'u-tech',
      name: 'U TECH',
      image: await import('@/images/partners/u-tech.png'),
      website: 'https://ugieiris.fr/'
    },
    {
      id: 'zenika',
      name: 'Zenika',
      image: await import('@/images/partners/zenika.png'),
      website: 'https://www.zenika.com'
    }
  ],
  Gold: [
    {
      id: 'accenture',
      name: 'Accenture',
      image: await import('@/images/partners/accenture.png'),
      website: 'https://www.accenture.com'
    },
    {
      id: 'blablacar',
      name: 'Blablacar',
      image: await import('@/images/partners/blablacar.png'),
      website: 'https://www.blablacar.fr'
    },
    {
      id: 'cat-amania',
      name: 'CAT-Amania',
      image: await import('@/images/partners/cat-amania.png'),
      website: 'https://www.cat-amania.com'
    },
    {
      id: 'daveo',
      name: 'Daveo',
      image: await import('@/images/partners/daveo.png'),
      website: 'https://www.daveo.fr'
    },
    {
      id: 'davidson',
      name: 'Davidson',
      image: await import('@/images/partners/davidson.png'),
      website: 'https://www.davidson.fr'
    },
    {
      id: 'delia-technologies',
      name: 'Delia Technologies',
      image: await import('@/images/partners/delia-technologies.png'),
      website: 'https://www.delia.tech/'
    },
    {
      id: 'doctolib',
      name: 'Doctolib',
      image: await import('@/images/partners/doctolib.png'),
      website: 'https://www.doctolib.fr'
    },
    {
      id: 'epitech',
      name: 'Epitech',
      image: await import('@/images/partners/epitech.png'),
      website: 'https://www.epitech.eu'
    },
    {
      id: 'inetum',
      name: 'Inetum',
      image: await import('@/images/partners/inetum.png'),
      website: 'https://www.inetum.com'
    },
    {
      id: 'isilog',
      name: 'Isilog',
      image: await import('@/images/partners/isilog.jpg'),
      website: 'https://www.isilog.com'
    },
    {
      id: 'kaibee',
      name: 'Kaïbee',
      image: await import('@/images/partners/kaibee.png'),
      website: 'https://www.kaibee.fr'
    },
    {
      id: 'lucca',
      name: 'Lucca',
      image: await import('@/images/partners/lucca.png'),
      website: 'https://www.lucca.fr'
    },
    {
      id: 'neosoft',
      name: 'Neosoft',
      image: await import('@/images/partners/neosoft.png'),
      website: 'https://www.neosoft.fr/'
    },
    {
      id: 'orange-business',
      name: 'Orange Business',
      image: await import('@/images/partners/orange-business.png'),
      website: 'https://www.orange-business.com'
    },
    {
      id: 'ovh',
      name: 'OVH',
      image: await import('@/images/partners/ovh.png'),
      website: 'https://www.ovh.com'
    },
    {
      id: 'rca',
      name: 'RCA',
      image: await import('@/images/partners/rca.png'),
      website: 'https://www.rca.fr'
    },
    {
      id: 'shopopop',
      name: 'Shopopop',
      image: await import('@/images/partners/shopopop.png'),
      website: 'https://www.shopopop.com'
    },
    {
      id: 'sii',
      name: 'SII',
      image: await import('@/images/partners/sii.png'),
      website: 'https://sii-group.com/fr-FR'
    },
    {
      id: 'sncf-connect-tech',
      name: 'SNCF Connect & Tech',
      image: await import('@/images/partners/sncf-connect-tech.png'),
      website: 'https://www.sncf-connect-tech.fr/'
    },
    {
      id: 'vif',
      name: 'VIF',
      image: await import('@/images/partners/vif.png'),
      website: 'https://www.vif.fr'
    },
    {
      id: 'younup',
      name: 'Younup',
      image: await import('@/images/partners/younup.png'),
      website: 'https://www.younup.fr/'
    }
  ],
  Virtual: [
    {
      id: 'sully-group',
      name: 'Sully Group',
      image: await import('@/images/partners/sully-group.png'),
      website: 'https://www.sully-group.com'
    },
    {
      id: 'valeuriad',
      name: 'Valeuriad',
      image: await import('@/images/partners/valeuriad.png'),
      website: 'https://www.valeuriad.com'
    },
    {
      id: 'modalb',
      name: 'ModalB',
      image: await import('@/images/partners/modalb.webp'),
      website: 'https://www.modalbgroup.com/'
    },
    {
      id: 'ab-tasty',
      name: 'AB Tasty',
      image: await import('@/images/partners/ab-tasty.png'),
      website: 'https://www.abtasty.com/fr/'
    },
    {
      id: 'malt',
      name: 'Malt',
      image: await import('@/images/partners/malt.webp'),
      website: 'https://www.malt.com'
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
