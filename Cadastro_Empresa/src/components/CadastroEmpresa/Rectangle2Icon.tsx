import { memo, SVGProps } from 'react';

const Rectangle2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 354 55' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 16C0 7.16345 7.16344 0 16 0H337.55C346.387 0 353.55 7.16344 353.55 16V39C353.55 47.8366 346.387 55 337.55 55H16C7.16346 55 0 47.8366 0 39V16Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Rectangle2Icon);
export { Memo as Rectangle2Icon };
