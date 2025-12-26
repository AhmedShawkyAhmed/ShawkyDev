import type { SVGProps } from "react";

export function Apple(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M15.225 3.53a.475.475 0 00-.737.652 4.02 4.02 0 01-1.188 1.637 3.37 3.37 0 00-1.324 2.385c.16.002.321.002.482.002a4.32 4.32 0 014.32-4.32c0-.21-.016-.418-.046-.622a.475.475 0 00-.507-.474zm-2.91 15.342c1.02-.018 2.23-.705 3.033-1.666 1.43-1.71 2.22-3.824 2.238-5.748-.02-2.58-1.57-4.83-3.66-5.804-1.85-.86-3.8-.62-5.19.64-1.12 1.02-2.02 2.65-2.02 4.37 0 2.33 1.25 4.54 2.91 5.48 1.09.61 2.29.74 3.69.72zM13.88 3.328a4.44 4.44 0 00-3.32-1.46c-1.37-.15-2.85.5-3.79 1.55-.83.94-1.59 2.3-1.58 3.8.02 2.05 1.29 4.14 3.03 5.44 1.48 1.11 3.19 1.66 4.67 1.61.1.002.19.002.29.002 1.89 0 3.63-.9 4.69-2.59-.09.05-.18.1-.27.15-1.18.61-2.59.39-3.5-.64-1.07-1.22-1.22-2.89-.36-4.28.98-1.58 2.76-2.3 4.39-1.92.1-.03.19-.05.29-.07-.02-1.1-.33-2.18-.95-3.13C16.5 3.3 15.33 3.01 14.12 3.02c-.41 0-.82.06-1.24.2v.006z" />
    </svg>
  );
}

export function PlayStore(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 12L4 2V22L22 12Z" />
      <path d="M4 2L13.5 12L4 22" />
    </svg>
  );
}

export function Github(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}
