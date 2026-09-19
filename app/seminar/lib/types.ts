import type { Photo } from "./photos";

export type Phase = "ringan" | "berat";

export type Card = { photo: Photo; title: string; text: string };
/** One question in the pre-opening cloud. `size` is its weight in the cloud, not its importance. */
export type CloudQuestion = { text: string; size: "sm" | "md" | "lg"; accent?: boolean };
/** One answer the room can raise a hand for. */
export type PollOption = { label: string; text: string };
export type Step = { label: string; title: string; text: string };
export type Bar = { label: string; value: number; highlight?: boolean };

export type SlideBase = {
  id: string;
  phase: Phase;
  notes: string;
};

export type Slide =
  | (SlideBase & { layout: "cover"; kicker: string; title: string[]; subtitle: string; photo: Photo })
  | (SlideBase & { layout: "intro"; title: string; items: { icon: "school" | "campus" | "medal" | "globe" | "scholarship"; text: string }[]; body: string })
  | (SlideBase & { layout: "cloud"; kicker: string; title: string; questions: CloudQuestion[]; footer: string })
  | (SlideBase & { layout: "focus"; kicker: string; question: string; body: string; footer: string })
  | (SlideBase & { layout: "poll"; kicker: string; title: string; subtitle: string; options: PollOption[]; reveal: string })
  | (SlideBase & { layout: "split"; title: string; subtitle?: string; body: string[]; photo: Photo; side?: "left" | "right"; check?: boolean })
  | (SlideBase & { layout: "cards"; title: string; subtitle?: string; cards: Card[]; footer?: string })
  | (SlideBase & { layout: "number"; number: string; title: string; body: string[]; photo: Photo })
  | (SlideBase & { layout: "chart"; title: string; subtitle: string; bars: Bar[]; unit: string; body: string[] })
  | (SlideBase & { layout: "building"; title: string; subtitle: string; layers: { label: string; value: string }[]; body: string; photo: Photo })
  | (SlideBase & { layout: "steps"; title: string; subtitle: string; steps: Step[]; photo: Photo })
  | (SlideBase & { layout: "quote"; kicker: string; quote: string; body: string; photo: Photo })
  | (SlideBase & { layout: "compare"; title: string; subtitle: string; left: string; right: string; verdict: string; photo: Photo })
  | (SlideBase & { layout: "qna"; title: string; subtitle: string; contacts: string[]; photo: Photo })
  | (SlideBase & { layout: "closing"; title: string[]; subtitle: string; photo: Photo });
