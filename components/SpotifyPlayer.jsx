"use client";

import { useState } from "react";
import { FaSpotify, FaChevronDown } from "react-icons/fa";

export default function SpotifyPlayer() {
  const [minimized, setMinimized] = useState(true);
  // browsers load hidden iframes eagerly, so mount it only on first open
  const [opened, setOpened] = useState(false);

  return (
    <div className="spotify-player d-none d-md-flex">
      <button
        type="button"
        className={`spotify-toggle ${minimized ? "is-min" : ""}`}
        onClick={() => {
          setMinimized(!minimized);
          setOpened(true);
        }}
        aria-expanded={!minimized}
        aria-label={minimized ? "Expand Spotify player" : "Minimize Spotify player"}
      >
        {minimized ? (
          <>
            <FaSpotify size={24} aria-hidden="true" />
            <span className="spotify-toggle-label">play me!</span>
          </>
        ) : (
          <FaChevronDown size={14} aria-hidden="true" />
        )}
      </button>
      {/* once opened, keep the iframe mounted while minimized so playback continues */}
      {opened && (
        <iframe
          title="Spotify playlist: Similar to Mystical Magic by Benson"
          src="https://open.spotify.com/embed/playlist/3Mv6B57gYNb2kTS9mgog20"
          height={152}
          className="spotify-frame"
          style={{ display: minimized ? "none" : "block" }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      )}
    </div>
  );
}
