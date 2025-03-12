import { Typography } from '@mui/material';
import { PartnersList } from '@/components/partners/partners';
import { CommonParams } from '@/types';
import { partnersByTypes } from '@/data/partners/partnersByTypes';

export default function PartnersPage({ params }: CommonParams) {
  const types = Object.keys(partnersByTypes);

  return (
    <div>
      <h1>Sponsors</h1>

        {types.map((type) => (
          <div key={type}>
            <Typography
              variant='h2'
            >
              {type} Sponsors
            </Typography>
            <PartnersList params={params} partnerType={type} />
          </div>
        ))}
    </div>
  )
}
