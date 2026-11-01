"use client";

import { SelectedWork } from "@/lib/types";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const WorkCard = ({
  id,
  tag,
  ref,
  image,
  name,
  description,
  witty_comment,
  stack,
  link,
  source_code,
}: SelectedWork) => {
  return (
    <div
      key={id}
      className="bg-surface p-7 rounded-[18px] border border-line space-y-4"
    >
      <div className="flex justify-between items-center text-[.8125rem] font-mono">
        <span className="text-muted">{tag}</span>
        <span className="text-accent">{ref}</span>
      </div>
      <div className="relative border border-dashed rounded-xl h-50 overflow-hidden">
        {image && (
          <Image
            className="object-cover"
            src={image}
            alt={name ?? ""}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        )}
      </div>
      <h2 className="text-[1.75rem] font-bold tracking-[-2%]">{name}</h2>
      <p className="text-muted text-[1.06235rem] leading-[1.59375rem]">
        {description}
      </p>
      <p className="font-medium">&quot;{witty_comment}&quot;</p>
      <div className="flex gap-3 items-center flex-wrap">
        {Array.isArray(stack) &&
          stack.map((s) => (
            <div
              key={s.id}
              className="border border-line rounded-full px-3 py-1.25 text-muted text-xs font-mono"
            >
              <span>{s.name}</span>
            </div>
          ))}
      </div>
      <div className="flex gap-5">
        {link && (
          <Link
            className="flex gap-1 text-accent text-[1.06235rem] items-center"
            href={link ? link : "/"}
          >
            <span>Live site</span>
            <ArrowRightIcon />
          </Link>
        )}
        {source_code && (
          <Link
            className="flex gap-1 text-[1.06235rem] items-center"
            href={source_code ? source_code : "/"}
          >
            <span>Source code</span>
            <ArrowRightIcon />
          </Link>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
