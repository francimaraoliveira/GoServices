import { memo, SVGProps } from 'react';

const Rectangle2Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 352 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 16C0 7.16344 7.16344 0 16 0H335.694C344.531 0 351.694 7.16344 351.694 16V36C351.694 44.8366 344.531 52 335.694 52H16C7.16344 52 0 44.8366 0 36V16Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Rectangle2Icon2);
export { Memo as Rectangle2Icon2 };
