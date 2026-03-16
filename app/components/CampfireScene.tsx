"use client";

import { useCallback } from "react";
import Image from "next/image";

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

      <div className="campfire-scene">
        <div className="campfire-image-wrapper">
          <Image
            src="/images/campfire.png"
            alt="Kampvuur met stoelen voor vrijwilligers bij De Kindervakantiespelen"
            width={1536}
            height={1024}
            className="campfire-image"
            priority
          />

          <button
            type="button"
            className="campfire-hotspot hotspot-new"
            onClick={() => handleSelect("new")}
            aria-label="Nieuwe vrijwilliger, meld je aan"
          />
          <button
            type="button"
            className="campfire-hotspot hotspot-community"
            onClick={() => handleSelect("community")}
            aria-label="Lees meer over onze vrijwilligers"
          />
          <button
            type="button"
            className="campfire-hotspot hotspot-organization"
            onClick={() => handleSelect("organization")}
            aria-label="Meer over de werkgroep en organisatie"
          />
        </div>
      </div>
    </section>
  );
}

