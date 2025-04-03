import { Typography } from '@mui/material';
import { PartnersList } from '@/components/partners/partners';
import { CommonParams } from '@/types';
import { partnersByTypes, PartnerType } from '@/data/partners/partnersByTypes';
import { TertiarySection } from '@/components/commun/section/sectionType';

export default function PartnersPage({ params }: CommonParams) {
  const types = Object.keys(partnersByTypes) as PartnerType[];

  return (
    <div>
      <h1>Sponsors</h1>
        {types.map((type) => (
          <TertiarySection key={type} fullWidth={true} style={{marginBottom: '50px'}}>
            <div key={type}>
              <Typography
                variant='h2'
              >
                {type} Sponsors
              </Typography>
              <PartnersList params={params} partnerType={type} />
            </div>
          </TertiarySection>
        ))}
    </div>
  )
}
