import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { getTranslation } from '@/i18n/i18n';
import { MyComponent } from '@/types';
import Image from 'next/image';
import TagLine from '@/images/tagline.svg';
import './jumbo.scss';

export const HomeJumbo: MyComponent = async ({ params }) => {
  const t = await getTranslation(params, 'pages.home.jumbo');

  return (
    <>
      <div className='jumbo'>
        <div className='jumbo-content'>
          <div className='logo-jumbo-home'>
            <Image alt='logo' src={TagLine} />
          </div>

          <div>
            <Typography variant='h1' textAlign='center'>
              {t('come-back')}
            </Typography>
            {/*<Typography*/}
            {/*  variant="h2"*/}
            {/*  textAlign="center"*/}
            {/*>*/}
            {/*  At night, they come to code !*/}
            {/*</Typography>*/}
            <Typography
              variant='h1'
              textAlign='center'
              style={{ marginTop: '10px', marginBottom: '25px' }}
            >
              {t('date')}
            </Typography>
            <Stack direction='column' spacing={3}>
              <Stack direction='row' spacing={3} justifyContent={'center'}>
                <Button
                  color='secondary'
                  variant='contained'
                  href='https://devfest2024.gdgnantes.com'
                  aria-label={t('previous')}
                >
                  {t('previous')}
                </Button>
                <Button
                  color='secondary'
                  variant='contained'
                  href='https://www.billetweb.fr/reunion-dinformation-partenaire-devfest-2025'
                  target='_blank'
                  aria-label='Devenir Sponsor'
                >
                  Devenir Sponsor 2025
                </Button>
              </Stack>
              {/*<Stack direction="row" spacing={3} justifyContent={"center"}>*/}
              {/* <Button
              color="secondary"
              variant="contained"
              href="https://conference-hall.io/public/event/AJYPylkzTDd6j3O6ADZn"
              aria-label={t("cfp")}
            >
              {t("cfp")}
            </Button> */}
              {/* <Button
              color="secondary"
              variant="contained"
              aria-label={t('schedule')}
              href="/schedule"
            >
              {t('schedule')}
            </Button> */}
              {/*<Button*/}
              {/*  color="secondary"*/}
              {/*  startIcon={<PhotoSharp />}*/}
              {/*  variant="contained"*/}
              {/*  href="https://photos.app.goo.gl/iQPsdQ8KKeXH8JrT8"*/}
              {/*  aria-label="Photos"*/}
              {/*  target="_blank"*/}
              {/*>*/}
              {/*  Photos*/}
              {/*</Button> */}
              {/*<Button*/}
              {/*  color="secondary"*/}
              {/*  startIcon={<YouTube />}*/}
              {/*  variant="contained"*/}
              {/*  href="https://www.youtube.com/watch?v=xuKrkOh_mzk&list=PLuZ_sYdawLiWenx-X315dfZNOaliVnSTY"*/}
              {/*  aria-label="Videos"*/}
              {/*  target={"_blank"}*/}
              {/*>*/}
              {/*  Videos*/}
              {/*</Button>*/}
              {/* <Button
              color="secondary"
              variant="contained"
              href="https://billetterie.gdgnantes.com"
              aria-label={t('resend-tickets')}
              target={"_blank"}
              >
              {t('resend-tickets')}
              </Button> */}
              {/*</Stack>*/}
              {/*  <Stack direction="row" spacing={3} justifyContent={"center"}>*/}
              {/*      <Button*/}
              {/*        color="secondary"*/}
              {/*        variant="contained"*/}
              {/*        aria-label={"Feedbacks"}*/}
              {/*        target="_blank"*/}
              {/*        href="https://openfeedback.io/devfestnantes24"*/}
              {/*      >*/}
              {/*        Feedbacks*/}
              {/*      </Button>*/}

              {/*<MobileAppButton label={t('get-app')} />*/}
              {/*    /!* <Button*/}
              {/*      color="secondary"*/}
              {/*      variant="contained"*/}
              {/*      aria-label={t("offers")}*/}
              {/*      target={"_blank"}*/}
              {/*      href="https://nantes.francedigitaljobs.fr/search-list-jobs?id=&titre=&city=&categorie=&niveau=&type=&teletravail="*/}
              {/*    >*/}
              {/*      {t('offers')}*/}
              {/*    </Button> *!/*/}
              {/*  </Stack>*/}
              {/*<Stack direction="row" spacing={3} justifyContent={"center"}>*/}
              {/*  <Button href="/our-values" color="secondary">{t('bring-ecocup')}</Button>*/}
              {/*</Stack>*/}
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};
