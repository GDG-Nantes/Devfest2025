import { MyComponent } from '@/types';
import { getTranslation } from '@/i18n/i18n';
import { partnersByTypes, PartnerType } from '@/data/partners/partnersByTypes';
import classNames from 'classnames';
import React from 'react';
import { MyLink } from '@/components/commun/link';
import Image from 'next/image';
import { Grid } from '@mui/material';
import './partners.scss';

export const PartnersList: MyComponent<{ partnerType: PartnerType }> = async ({ params, partnerType }) => {
  const partners = partnersByTypes[partnerType];

  const sizes: Record<PartnerType, {width: number, height: number}> = {
    Platinium: { height: 175, width: 300 },
    Gold: { height: 140, width: 200 },
    Virtual: { height: 140, width: 200 },
    Velotypie: { height: 140, width: 200 },
  };

  return (
    <Grid
      className={classNames("partners", partnerType)}
      container
      columnSpacing={partnerType === "Platinium" ? 6 : 5}
      rowSpacing={partnerType === "Platinium" ? 8 : 6}
      justifyContent="center"
    >
      {partners.map(partner => (
        <Grid
          item
          maxWidth={500}
          key={partner.id}
          sm={12}
          md={6}
          lg={4}
          alignItems="center"
          justifyContent="center"
          style={{
            maxHeight: sizes[partnerType]?.height + "px",
            maxWidth: sizes[partnerType]?.width + "px",
          }}
        >
          <MyLink key={partner.id} href={partner.website}>
            <Image
              className="partner-logo"
              objectFit="contain"
              alt={partner.name}
              width={partner.image.default.width}
              height={partner.image.default.height}
              src={partner.image.default.src}
            />
          </MyLink>
        </Grid>
      ))}
    </Grid>

  )
};
