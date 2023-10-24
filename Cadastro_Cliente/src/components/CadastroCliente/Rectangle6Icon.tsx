import { memo, SVGProps } from 'react';

const Rectangle6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1089 986' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H741C933.195 0 1089 155.805 1089 348V986H0V0Z' fill='url(#paint0_linear_74_38)' />
    <path d='M0 0H741C933.195 0 1089 155.805 1089 348V986H0V0Z' fill='#F8DFE7' />
    <defs>
      <linearGradient
        id='paint0_linear_74_38'
        x1={544.5}
        y1={2.16438e-10}
        x2={543.502}
        y2={1135.74}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#B8A6AC' />
        <stop offset={0.711038} stopColor='#E63471' />
        <stop offset={1} stopColor='#3854D2' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Rectangle6Icon);
export { Memo as Rectangle6Icon };
