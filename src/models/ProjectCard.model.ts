import { ReactNode } from "react";

export type ProjectCardProps = {
  img: string;
  avif: string;
  webp: string;
  sitename: string;
  progress: string;
  date: string;
  summary: string;
  languages: string[];
  links: Array<{
    url: string;
    logo: ReactNode;
    name: string;
  }>;
};
