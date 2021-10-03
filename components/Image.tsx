import { chakra } from '@chakra-ui/react';
import NextImage from 'next/image';

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'placeholder',
      'blurDataUrl',
      'layout',
      'loader',
      'quality',
      'priority'
    ].includes(prop)
});
