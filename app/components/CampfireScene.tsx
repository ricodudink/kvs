"use client";

import { useCallback } from "react";

type CampfireMode = "new" | "community" | "organization";

type CampfireSceneProps = {
  onSelect?(mode: CampfireMode): void;
};

export function CampfireScene({ onSelect }: CampfireSceneProps) {
  const handleSelect = useCallback(
    (mode: CampfireMode) => {
      onSelect?.(mode);
      const targetId =
        mode === "new"
          ? "vrijwilligers-nieuw"
          : mode === "community"
          ? "vrijwilligers-over"
          : "vrijwilligers-werkgroep";
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.focus?.();
      }
    },
    [onSelect]
  );

  return (
    <section
      className="campfire-wrapper"
      aria-labelledby="campfire-heading"
    >
      <div className="campfire-intro">
        <h2 id="campfire-heading">Kies jouw plek bij het kampvuur</h2>
        <p>
          Ben je nieuw, wil je meer weten over onze vrijwilligers of zoek je info
          over de werkgroep? Kies een stoel en we wijzen je de weg.
        </p>
      </div>

      <div className="campfire-scene" role="list">
        <div className="campfire-elements">
          <div className="campfire-fire" aria-hidden="true">
            <div className="campfire-flame campfire-flame-main" />
            <div className="campfire-flame campfire-flame-small" />
            <div className="campfire-logs" />
          </div>

          <button
            type="button"
            className="campfire-chair chair-new"
            onClick={() => handleSelect("new")}
            aria-label="Nieuwe vrijwilliger, meld je aan"
            role="listitem"
          >
            <span className="chair-icon">?</span>
            <span className="chair-label">Nieuwe vrijwilliger</span>
          </button>

          <button
            type="button"
            className="campfire-chair chair-community"
            onClick={() => handleSelect("community")}
            aria-label="Lees meer over onze vrijwilligers"
            role="listitem"
          >
            <span className="chair-icon">👥</span>
            <span className="chair-label">Over onze vrijwilligers</span>
          </button>

          <button
            type="button"
            className="campfire-chair chair-organization"
            onClick={() => handleSelect("organization")}
            aria-label="Meer over de werkgroep en organisatie"
            role="listitem"
          >
            <span className="chair-icon">🏕️</span>
            <span className="chair-label">Werkgroep</span>
          </button>
        </div>
      </div>
    </section>
  );
}

