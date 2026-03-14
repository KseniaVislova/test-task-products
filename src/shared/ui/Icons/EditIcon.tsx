import { type SVGProps } from 'react';

export function EditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-white"
      {...props}
    >
      <path
        d="M12 4H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 2l4 4-10 10H8v-4L18 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
