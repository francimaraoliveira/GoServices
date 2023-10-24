import { memo, SVGProps } from 'react';

const Rectangle2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 686 78' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 16C0 7.16344 7.16344 0 16 0H669.757C678.594 0 685.757 7.16344 685.757 16V62C685.757 70.8366 678.594 78 669.757 78H16C7.16345 78 0 70.8366 0 62V16Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Rectangle2Icon);
export { Memo as Rectangle2Icon };
