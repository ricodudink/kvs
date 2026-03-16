"use client";

import { useCallback } from "react";

type CampfireSceneProps = {
  onSelect?(mode: "new" | "existing"): void;
};

export function CampfireScene({ onSelect }: CampfireSceneProps) {
  const handleSelect = useCallback(
    (mode: "new" | "existing") => {
      onSelect?.(mode);
      const targetId =
        mode === "new" ? "vrijwilligers-nieuw" : "vrijwilligers-bestaand";
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
          Ga je voor een nieuwe plek bij het vuur als nieuwe vrijwilliger, of
          schuif je aan bij de groep die al jaren De Kindervakantiespelen
          mogelijk maakt?
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
            className="campfire-chair chair-existing"
            onClick={() => handleSelect("existing")}
            aria-label="Ik ben al vrijwilliger"
            role="listitem"
          >
            <span className="chair-icon">👤</span>
            <span className="chair-label">Ik ben al vrijwilliger</span>
          </button>

          <button
            type="button"
            className="campfire-chair chair-existing"
            onClick={() => handleSelect("existing")}
            aria-label="Vrijwilliger met ervaring"
            role="listitem"
          >
            <span className="chair-icon">⭐</span>
            <span className="chair-label">Ervaren vrijwilliger</span>
          </button>
        </div>
      </div>
    </section>
  );
}

