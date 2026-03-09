'use client';

import { useEffect, useRef, useState } from 'react';
import React from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  as?: HeadingTag;
  children: React.ReactNode;
  className?: string;
  /** ms between each word */
  stagger?: number;
  /** ms before the first word starts */
  delay?: number;
}

function buildWordSpans(
  node: React.ReactNode,
  counter: { n: number },
  stagger: number,
  delay: number,
  visible: boolean,
): React.ReactNode {
  if (node === null || node === undefined || typeof node === 'boolean') return null;

  if (typeof node === 'string') {
    // Split on explicit \n (e.g. prop strings like "Line One\nLine Two")
    const segments = node.split('\n');
    const result: React.ReactNode[] = [];
    segments.forEach((seg, si) => {
      if (si > 0) result.push(<br key={`br-${si}-${counter.n}`} />);
      const words = seg.trim().split(/\s+/).filter(Boolean);
      words.forEach((word, wi) => {
        if (wi > 0) result.push(' ');
        const i = counter.n++;
        result.push(
          <span key={`w-${i}`} className="inline-block overflow-hidden align-bottom">
            <span
              className="inline-block"
              style={{
                transform: visible ? 'translateY(0)' : 'translateY(110%)',
                transition: visible
                  ? `transform 1s cubic-bezier(0.16,1,0.3,1) ${delay + i * stagger}ms`
                  : 'none',
              }}
            >
              {word}
            </span>
          </span>,
        );
      });
    });
    return result;
  }

  if (Array.isArray(node)) {
    return (node as React.ReactNode[]).map((child, i) => (
      <React.Fragment key={i}>{buildWordSpans(child, counter, stagger, delay, visible)}</React.Fragment>
    ));
  }

  if (React.isValidElement(node)) {
    const el = node as React.ReactElement<{ children?: React.ReactNode }>;
    // Return <br> as-is (preserves className like "hidden md:block")
    if (el.type === 'br') return el;
    const kids = el.props.children;
    if (kids != null) {
      return React.cloneElement(el, {}, buildWordSpans(kids, counter, stagger, delay, visible));
    }
    return el;
  }

  return node;
}

export default function AnimatedHeading({
  as: Tag = 'h2',
  children,
  className,
  stagger = 90,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const counter = { n: 0 };
  const content = buildWordSpans(children, counter, stagger, delay, visible);

  // React.createElement avoids JSX generic-component ref typing issues
  return React.createElement(Tag, { ref, className }, content);
}
