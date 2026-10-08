'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';

export type VideoEmbedType = 'youtube' | 'loom' | 'video' | 'placeholder';

export interface ParsedVideoEmbed {
  type: VideoEmbedType;
  src?: string;
}

export function parseVideoEmbedUrl(url?: string): ParsedVideoEmbed {
  if (!url) return { type: 'placeholder' };

  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/i
  );
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'youtube',
      src: `https://www.youtube.com/embed/${ytMatch[1]}`,
    };
  }

  const loomMatch = url.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9_-]+)/i);
  if (loomMatch && loomMatch[1]) {
    return {
      type: 'loom',
      src: `https://www.loom.com/embed/${loomMatch[1]}`,
    };
  }

  if (/\.(mp4|webm|ogg)($|\?)/i.test(url)) {
    return {
      type: 'video',
      src: url,
    };
  }

  return {
    type: 'placeholder',
    src: url,
  };
}

export interface VideoEmbedProps {
  url?: string;
  title: string;
  forcePlaceholder?: boolean;
  eyebrowLeft?: string;
  eyebrowRight?: string;
  actionLabel?: string;
  buttonSize?: 'md' | 'lg';
  className?: string;
}

export function VideoEmbed({
  url,
  title,
  forcePlaceholder = false,
  eyebrowLeft = '// VIDEO DEMO',
  eyebrowRight = '1080P // DEMO',
  actionLabel = 'Watch Product Walkthrough',
  buttonSize = 'lg',
  className = '',
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embed = parseVideoEmbedUrl(url);

  if (forcePlaceholder || embed.type === 'placeholder' || !url) {
    const btnDimensions =
      buttonSize === 'lg' ? 'w-16 h-16' : 'w-14 h-14';
    const iconDimensions =
      buttonSize === 'lg' ? 'w-6 h-6' : 'w-5 h-5';

    return (
      <div
        className={`relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#1c1c1c] via-[#0f0f0f] to-black ${className}`}
      >
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-white/50 tracking-wider uppercase select-none">
          <span>{eyebrowLeft}</span>
          <span>{eyebrowRight}</span>
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play ${title} video demonstration`}
          className={`${btnDimensions} rounded-full bg-accent text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform group cursor-pointer`}
        >
          <Play
            className={`${iconDimensions} fill-white ml-0.5 group-hover:scale-110 transition-transform`}
          />
        </button>

        <span className="mt-4 font-mono text-xs text-secondary uppercase tracking-widest text-center">
          {isPlaying ? 'Walkthrough Active' : actionLabel}
        </span>

        {/* Viewfinder corner brackets */}
        <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/20 pointer-events-none" />
        <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/20 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/20 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/20 pointer-events-none" />
      </div>
    );
  }

  if (embed.type === 'youtube' && embed.src) {
    return (
      <iframe
        src={embed.src}
        title={`${title} video demonstration`}
        className={`w-full h-full border-0 ${className}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (embed.type === 'loom' && embed.src) {
    return (
      <iframe
        src={embed.src}
        title={`${title} Loom walkthrough`}
        className={`w-full h-full border-0 ${className}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (embed.type === 'video' && embed.src) {
    return (
      <video
        src={embed.src}
        controls
        className={`w-full h-full object-cover ${className}`}
        title={`${title} video demonstration`}
      >
        Your browser does not support the video tag.
      </video>
    );
  }

  return null;
}
