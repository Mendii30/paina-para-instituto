// Fix: Import React to provide types for 'React.SVGProps' and 'JSX.Element'.
// FIX: Using a full import of React to ensure the JSX namespace is available for types.
import React from 'react';

export interface NavLink {
  label: string;
  href: string;
  subLinks?: NavLink[];
}

export interface Career {
  title: string;
  description: string;
  // FIX: Replaced JSX.Element with React.ReactElement to solve for 'Cannot find namespace JSX' error in a .ts file.
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}
