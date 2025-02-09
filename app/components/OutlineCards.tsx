"use client";

import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const CURSOR_WIDTH = 32;
const HOVER_PADDING = 24;

interface CardProps {
  bgUrl: string;
  title: string;
  href: string;
  description: string;
}

interface CursorProps {
  cursorRef: React.RefObject<HTMLDivElement | null>;
}

export const OutlineCards = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement;
    const cursorEl = cursorRef.current;

    if (!cursorEl) return;

    const isCardHover = el.classList.contains("outline-card");

    if (isCardHover) {
      const { width, height, top, left } = el.getBoundingClientRect();

      cursorEl.style.transition = "0.25s all";

      cursorEl.style.width = `${width + HOVER_PADDING}px`;
      cursorEl.style.height = `${height + HOVER_PADDING}px`;
      cursorEl.style.borderRadius = `${HOVER_PADDING / 2}px`;
      cursorEl.style.top = `${top + window.scrollY + height / 2}px`;
      cursorEl.style.left = `${left + width / 2}px`;
    } else {
      cursorEl.style.transition = "0s all";

      cursorEl.style.width = `${CURSOR_WIDTH}px`;
      cursorEl.style.height = `${CURSOR_WIDTH}px`;
      cursorEl.style.borderRadius = `${CURSOR_WIDTH}px`;
      cursorEl.style.top = `${e.clientY + window.scrollY}px`;
      cursorEl.style.left = `${e.clientX}px`;
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="overflow-hidden bg-neutral-50 px-8 py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Digital Marketing"
          href="/services#digital-marketing"
          bgUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3"
          description="Comprehensive digital marketing solutions to grow your online presence"
        />
        <Card
          title="Performance Marketing"
          href="/services#performance-marketing"
          bgUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
          description="Data-driven strategies that deliver measurable results"
        />
        <Card
          title="Brand Strategy"
          href="/services#brand-strategy"
          bgUrl="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3"
          description="Build a powerful brand that resonates with your audience"
        />
        <Card
          title="Web Development"
          href="/services#web-development"
          bgUrl="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3"
          description="Create stunning, high-performance websites"
        />
        <Card
          title="Content Creation"
          href="/services#content-creation"
          bgUrl="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
          description="Engage your audience with compelling content"
        />
        <Card
          title="Analytics & Reporting"
          href="/services#analytics"
          bgUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
          description="Make informed decisions with actionable insights"
        />
      </div>
      <Cursor cursorRef={cursorRef} />
    </section>
  );
};

const Card = ({ bgUrl, title, href, description }: CardProps) => {
  return (
    <a
      href={href}
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundPosition: "center",
      }}
      className="outline-card group flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 bg-[size:100%] shadow-xl shadow-neutral-900/30 transition-[background-size] duration-500 hover:bg-[size:110%]"
    >
      <div className="pointer-events-none flex flex-col justify-end bg-gradient-to-t from-black to-black/0 p-6 pt-32">
        <h3 className="mb-2 text-2xl font-medium text-white md:text-3xl">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/80">{description}</p>
          <FiArrowRight className="text-white transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
};

const Cursor = ({ cursorRef }: CursorProps) => {
  return (
    <div
      ref={cursorRef}
      style={{
        width: 0,
        height: 0,
        borderRadius: CURSOR_WIDTH,
        top: 0,
        left: 0,
      }}
      className="hover-cursor pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 border border-neutral-900"
    />
  );
}; 