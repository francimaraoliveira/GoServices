import { memo, SVGProps } from 'react';

const Rectangle2Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 688 74' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 16C0 7.16344 7.16344 0 16 0H671.613C680.45 0 687.613 7.16344 687.613 16V58C687.613 66.8366 680.45 74 671.613 74H16C7.16343 74 0 66.8366 0 58V16Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Rectangle2Icon2);
export { Memo as Rectangle2Icon2 };
