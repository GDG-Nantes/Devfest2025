import { Stack, Typography } from '@mui/material';
import React from 'react';

export const Youtube: React.FC<{ id: string; title: string }> = ({
  id,
  title,
}) => (
  <Stack textAlign='center' justifyContent='center'>
    <Typography variant='h2'>{title}</Typography>
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
      }}
    >
      <iframe
        src={'https://www.youtube-nocookie.com/embed/' + id}
        title={title}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
        frameBorder='0'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  </Stack>
);
