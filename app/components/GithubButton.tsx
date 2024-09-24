import React from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.3332 0.666748V1.33341C3.3332 0.666748 3.33369 0.666748 3.33418 0.666749L3.33518 0.666751L3.33722 0.66676L3.3415 0.666798L3.35077 0.666962C3.35728 0.667114 3.36443 0.667358 3.37222 0.667723C3.38782 0.668454 3.40597 0.669671 3.42667 0.671612C3.4681 0.675495 3.51958 0.682265 3.58106 0.693792C3.70412 0.716866 3.86629 0.758824 4.06728 0.834195C4.42304 0.967606 4.89909 1.20517 5.49569 1.62701C7.15181 1.34666 8.84792 1.34666 10.504 1.62701C11.1006 1.20517 11.5767 0.967606 11.9324 0.834195C12.1334 0.758824 12.2956 0.716866 12.4187 0.693792C12.4801 0.682265 12.5316 0.675495 12.5731 0.671612C12.5938 0.669671 12.6119 0.668454 12.6275 0.667723C12.6353 0.667358 12.6424 0.667114 12.649 0.666962L12.6582 0.666798L12.6625 0.66676L12.6645 0.666751L12.6655 0.666749C12.666 0.666748 12.6665 0.666748 12.6665 1.33341V0.666748C12.974 0.666748 13.2415 0.876989 13.3143 1.1757C13.5026 1.94917 13.5235 2.75255 13.3771 3.53268C13.8348 4.27853 14.0516 5.14394 13.9998 6.02129C13.9896 8.37048 12.2868 9.81569 10.4124 10.218C10.6398 10.7898 10.7294 11.4127 10.6665 12.0352V14.6667C10.6665 15.0349 10.3681 15.3334 9.99986 15.3334C9.63167 15.3334 9.3332 15.0349 9.3332 14.6667V12.0001C9.3332 11.9755 9.33456 11.9509 9.33727 11.9265C9.41069 11.2653 9.22112 10.6018 8.80949 10.0793C8.65148 9.87867 8.62193 9.60543 8.73342 9.37569C8.84491 9.14595 9.07783 9.00008 9.3332 9.00008C11.084 9.00008 12.6665 7.85658 12.6665 6.00008C12.6665 5.98588 12.667 5.97168 12.6679 5.9575C12.7114 5.27703 12.5213 4.60925 12.1244 4.05474C12.0114 3.89689 11.9729 3.69764 12.0188 3.50904C12.1234 3.07947 12.1602 2.63781 12.1293 2.19973C11.8667 2.32636 11.5124 2.53237 11.0665 2.86675C10.9167 2.97913 10.7265 3.02329 10.5425 2.98844C8.86445 2.67063 7.13528 2.67063 5.45725 2.98844C5.27323 3.02329 5.08303 2.97913 4.9332 2.86675C4.48236 2.52862 4.12513 2.32176 3.86166 2.1955C3.82784 2.63137 3.86671 3.07082 3.97827 3.49847C4.02828 3.69014 3.99045 3.89412 3.87505 4.05512C3.47948 4.60703 3.28748 5.27901 3.33178 5.9566C3.33272 5.97107 3.3332 5.98557 3.3332 6.00008C3.3332 7.85658 4.91575 9.00008 6.66653 9.00008C6.9225 9.00008 7.15587 9.14664 7.26704 9.37721C7.37821 9.60777 7.34755 9.88163 7.18815 10.0819C6.98198 10.3409 6.83003 10.6353 6.74128 10.9485C6.65189 11.264 6.62523 11.5968 6.66232 11.9253C6.66512 11.9501 6.66653 11.9751 6.66653 12.0001V14.6667C6.66653 15.0349 6.36805 15.3334 5.99986 15.3334C5.63167 15.3334 5.3332 15.0349 5.3332 14.6667V12.0358C5.28332 11.5502 5.32475 11.0569 5.45844 10.585C5.49386 10.46 5.53567 10.3373 5.58356 10.2172C3.71075 9.81377 2.0103 8.36908 1.99991 6.02172C1.94726 5.14749 2.16488 4.28064 2.61955 3.53748C2.46223 2.7523 2.48509 1.94341 2.68812 1.16513C2.7647 0.87158 3.02982 0.666748 3.3332 0.666748Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M0.666992 10.6667C0.666992 10.2985 0.965469 10 1.33366 10C1.91058 10 2.33554 10.2963 2.63849 10.5582C2.76667 10.669 2.89407 10.7929 3.00791 10.9036C3.02814 10.9233 3.04795 10.9426 3.06725 10.9613C3.20253 11.0923 3.32645 11.209 3.45629 11.313C3.70867 11.5152 3.96183 11.6516 4.27732 11.6932C4.59793 11.7355 5.05671 11.6892 5.73007 11.3906C6.06665 11.2413 6.4605 11.3932 6.60976 11.7297C6.75902 12.0663 6.60716 12.4602 6.27058 12.6094C5.4406 12.9775 4.73105 13.0979 4.10312 13.0151C3.47007 12.9317 2.99448 12.6515 2.62269 12.3536C2.44045 12.2077 2.27843 12.0535 2.13952 11.9189C2.11624 11.8964 2.09381 11.8746 2.07209 11.8535C1.95736 11.742 1.86251 11.6498 1.76653 11.5668C1.53927 11.3704 1.4234 11.3333 1.33366 11.3333C0.965469 11.3333 0.666992 11.0349 0.666992 10.6667Z" />
  </svg>
);

const GitHubButton = () => {
  return (
    <Button
      as={Link}
      isIconOnly
      href="https://github.com/okto-hq/"
      variant="bordered"
      radius='full'
      className="flex items-center text-foreground hover:text-foreground/80 transition-colors"
    >
      <GitHubIcon />
    </Button>
  );
};

export default GitHubButton;