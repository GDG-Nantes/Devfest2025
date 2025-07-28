import { SocialData } from '@/components/commun/socials/socials';

export type TeamMember = {
  firstName: string;
  lastName: string;
  title: string;
  socials: SocialData[];
  image: typeof import('*.jpg') | typeof import('*.png');
};

export const teamMembers: TeamMember[] = [
  {
    firstName: 'Arthur',
    lastName: 'Maury',
    title: 'Software Architect at Bouygues Telecom',
    socials: [
      { type: 'twitter', login: 'ArthurMaury1' },
      { type: 'linkedin', login: 'arthur-maury' },
      { type: 'github', login: 'ArtyMaury' },
    ],
    image: await import('@/images/team/arthur.jpg'),
  },
  {
    firstName: 'Aline',
    lastName: 'Millauriaux-Deschamps',
    title: 'Business Developer DINNO',
    socials: [
      { type: 'twitter', login: 'alinedeschamps' },
      { type: 'linkedin', login: 'alinedeschamps' },
    ],
    image: await import('@/images/team/aline.jpg'),
  },
  {
    firstName: 'Annabelle',
    lastName: 'Koster',
    title: 'Tech Community Ambassador Sfeir',
    socials: [
      { type: 'twitter', login: 'AnnabelleKoster' },
      { type: 'linkedin', login: 'annabelle-koster-31129383' },
    ],
    image: await import('@/images/team/annabelle.png'),
  },
  {
    firstName: 'Audrey',
    lastName: 'Le Mercier',
    title: 'Développeuse UI Senior chez Lucca',
    socials: [
      { type: 'twitter', login: 'ag_lemercier' },
      { type: 'linkedin', login: 'audreylemercier' },
    ],
    image: await import('@/images/team/audrey.jpg'),
  },
  {
    firstName: 'Aymeric',
    lastName: 'Fouchault',
    title: 'Dean of Studies Epitech Nantes',
    socials: [
      { type: 'twitter', login: 'afouchault' },
      { type: 'linkedin', login: 'fouchault' },
      { type: 'github', login: 'afouchault' },
    ],
    image: await import('@/images/team/aymeric.png'),
  },
  {
    firstName: 'Benjamin',
    lastName: 'Petetot',
    title: 'Senior Software Engineer at Pix',
    socials: [
      { type: 'twitter', login: 'bpetetot' },
      { type: 'linkedin', login: 'benjamin-petetot-29b99a54' },
      { type: 'github', login: 'bpetetot' },
    ],
    image: await import('@/images/team/benjamin.png'),
  },
  {
    firstName: 'Jean-Francois',
    lastName: 'Garreau',
    title: 'CTO Sfeir Nantes',
    socials: [
      { type: 'twitter', login: 'jefBinomed' },
      { type: 'linkedin', login: 'jean-francois-garreau' },
      { type: 'github', login: 'jefBinomed' },
    ],
    image: await import('@/images/team/jeff.png'),
  },
  {
    firstName: 'Julien',
    lastName: 'Landuré',
    title: 'Founder & CTO at TechTown',
    socials: [
      { type: 'twitter', login: 'jlandure' },
      { type: 'linkedin', login: 'jlandure' },
      { type: 'github', login: 'jlandure' },
    ],
    image: await import('@/images/team/julien.jpg'),
  },
  {
    firstName: 'Marie',
    lastName: 'Cauchy',
    title: 'Chef de projet Marque Employeur & RSE at RCA',
    socials: [
      { type: 'twitter', login: 'MarieCauchyy' },
      { type: 'linkedin', login: 'marie-cauchy-02222776' },
    ],
    image: await import('@/images/team/marie.jpg'),
  },
  {
    firstName: 'Pierrick',
    lastName: 'Guyard',
    title: 'Dean of Studies Epitech Nantes',
    socials: [
      { type: 'twitter', login: 'PierrickGuyard' },
      { type: 'linkedin', login: 'pierrickguyard' },
      { type: 'github', login: 'pguyard' },
    ],
    image: await import('@/images/team/pierrick.jpg'),
  },
  {
    firstName: 'Xavier',
    lastName: 'Marc',
    title: 'Honor member ❤️',
    socials: [
      { type: 'twitter', login: 'xavmrc' },
      { type: 'linkedin', login: 'xaviermarc' },
      { type: 'github', login: 'xavmarc' },
    ],
    image: await import('@/images/team/xavier.png'),
  },
  {
    firstName: 'Brian',
    lastName: 'Guitteny',
    title: 'Platform Engineer - Lucca',
    socials: [
      { type: 'linkedin', login: 'bguitteny' },
      { type: 'github', login: 'briangtn' },
      { type: 'bluesky', login: 'briangtn' },
    ],
    image: await import('@/images/team/brian.jpg'),
  },
  {
    firstName: 'Jocelyn',
    lastName: 'Biliec',
    title: 'Devops - UTech',
    socials: [{ type: 'linkedin', login: 'jocebi' }],
    image: await import('@/images/team/jocelyn.jpg'),
  },
];
