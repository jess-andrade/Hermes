import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import Image from 'next/image'
import hermes from '../../public/hermes.png'

export default function Fields() {
  return (
    <Stack spacing={3}>
      {/* For variant="text", adjust the height via font-size */}
      {/* <Skeleton variant="text" sx={{ fontSize: '1rem' }} /> */}

      {/* For other variants, adjust the size with `width` and `height` */}
      {/* <Skeleton variant="circular" width={100} height={100} /> */}

      <div className='flex flex-nowrap flex-row justify-around gap-10'>
        <Skeleton variant="rectangular" sx={{ width: '90%', minHeight: '100px', borderRadius: '10px' }} />
      </div>

    </Stack>
  );
}