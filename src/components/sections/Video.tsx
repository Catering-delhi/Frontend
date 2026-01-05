// src/components/sections/Video.tsx
"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Video() {
  const { t } = useTranslation("common");
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="video section">
      <div style={{ maxWidth: '60%', margin: '0 auto', position: 'relative' }}>
        {!playing ? (
          <>
            <img
              src="/assets/img/hero-bg.jpg"
              alt="Video thumbnail"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer'
              }}
              onClick={() => setPlaying(true)}
            >
              <div className="pulsating-play-btn" />
            </div>
          </>
        ) : (
          <video
            width="100%"
            height="450"
            src="/assets/video/videos.mp4"
            controls
            autoPlay
            style={{ display: 'block' }}
          />
        )}
      </div>
    </section>
  );
}
