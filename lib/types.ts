import type { Icon } from "@phosphor-icons/react";

export type SelectedWork = {
  id: number;
  tag: string;
  ref: string;
  image: string;
  name: string;
  description: string;
  witty_comment: string;
  stack: Array<{
    id: number;
    name: string;
  }>;
  link?: string;
  source_code?: string;
};

export type Skill = {
  id: number;
  category: string;
  desc: string;
  list: Array<{
    id: number;
    name: string;
  }>;
};

export type Experience = {
  id: number;
  start_date: string;
  end_date: string;
  location: string;
  role: string;
  company: string;
  contribution: Array<{
    id: number;
    text: string;
  }>;
  witty_desc: string;
};

export type Quest = {
  id: number;
  icon: Icon;
  quest: string;
  desc: string;
};

export type HotTake = {
  id: number;
  hot_take: string;
};
