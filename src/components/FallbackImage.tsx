import React, { ImgHTMLAttributes, useState } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
};

export default function FallbackImage({ src, fallback = 'https://picsum.photos/1200/800', alt, ...rest }: Props) {
  const [current, setCurrent] = useState<string | undefined>(typeof src === 'string' ? src : undefined);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      {...rest}
      src={current}
      alt={alt}
      onError={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        if (img.src !== fallback) img.src = fallback;
      }}
    />
  );
}
