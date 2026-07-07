"use client";

import { useState } from "react";

type CopyState = "idle" | "copied" | "failed";

export function CopyEmailButton({
  email,
  label,
  copiedLabel,
  failedLabel,
}: {
  email: string;
  label: string;
  copiedLabel: string;
  failedLabel: string;
}) {
  const [copyState, setCopyState] = useState<CopyState>("idle");

  async function copyEmail() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }

    window.setTimeout(() => setCopyState("idle"), 1800);
  }

  const buttonLabel =
    copyState === "copied"
      ? copiedLabel
      : copyState === "failed"
        ? failedLabel
        : label;

  return (
    <button
      className="inline-flex min-h-11 items-center justify-center rounded-full bg-ember px-5 py-2.5 text-sm font-black text-ink transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
      type="button"
      onClick={copyEmail}
      aria-live="polite"
    >
      {buttonLabel}
    </button>
  );
}
