import type { CardCopy, PageTranslations, SignalCopy } from "./types";

type ContactPageCopy = {
  contactSignal: string;
  copied: string;
  copyFailed: string;
  sendEmail: string;
  signals: SignalCopy[];
  sectionTitle: string;
  sectionDescription: string;
  cards: CardCopy[];
  quickLinks: string;
  quickLinksDescription: string;
  cvFiles: string;
  cvFilesValue: string;
};

export function contactPageCopy(email: string) {
  return {
    en: {
      contactSignal: "Contact signal",
      copied: "Email copied",
      copyFailed: "Copy failed",
      sendEmail: "Send email",
      signals: [
        { label: "Email", value: email, accent: "ember" },
        {
          label: "Location",
          value: "Tenerife, Spain · Remote-friendly",
          accent: "mint",
        },
        {
          label: "Languages",
          value: "Spanish native · English B1 improving",
          accent: "sky",
        },
      ],
      sectionTitle: "Direct paths, no unnecessary friction.",
      sectionDescription:
        "Start a conversation, review technical context or download the CV in the right language without extra friction.",
      cards: [
        {
          title: "Email first",
          description:
            "A simple mailto path plus copy-email action for quick outreach.",
          footer: "mailto · copy email",
          accent: "ember",
        },
        {
          title: "Social context",
          description:
            "LinkedIn and GitHub provide professional context without adding visual clutter.",
          footer: "LinkedIn · GitHub",
          accent: "mint",
        },
        {
          title: "CV downloads",
          description:
            "English and Spanish CV actions stay visible, accessible and easy to scan.",
          footer: "CV EN · CV ES",
          accent: "sky",
        },
      ],
      quickLinks: "Quick links",
      quickLinksDescription:
        "External links open in a new tab and keep accessible focus states.",
      cvFiles: "CV files",
      cvFilesValue: "English CV · Spanish CV",
    },
    es: {
      contactSignal: "Señal de contacto",
      copied: "Email copiado",
      copyFailed: "No se pudo copiar",
      sendEmail: "Enviar email",
      signals: [
        { label: "Email", value: email, accent: "ember" },
        {
          label: "Ubicación",
          value: "Tenerife, España · Remoto",
          accent: "mint",
        },
        {
          label: "Idiomas",
          value: "Español nativo · Inglés B1 en mejora",
          accent: "sky",
        },
      ],
      sectionTitle: "Caminos directos, sin fricción innecesaria.",
      sectionDescription:
        "Iniciá una conversación, revisá contexto técnico o descargá el CV adecuado sin fricción extra.",
      cards: [
        {
          title: "Email primero",
          description:
            "Un camino simple por mailto más acción para copiar el email rápidamente.",
          footer: "mailto · copiar email",
          accent: "ember",
        },
        {
          title: "Contexto social",
          description:
            "LinkedIn y GitHub aportan contexto profesional sin sumar ruido visual.",
          footer: "LinkedIn · GitHub",
          accent: "mint",
        },
        {
          title: "Descargas de CV",
          description:
            "Las acciones de CV en inglés y español permanecen visibles, accesibles y fáciles de escanear.",
          footer: "CV EN · CV ES",
          accent: "sky",
        },
      ],
      quickLinks: "Enlaces rápidos",
      quickLinksDescription:
        "Los enlaces externos abren en una nueva pestaña y mantienen estados de foco accesibles.",
      cvFiles: "Archivos CV",
      cvFilesValue: "CV en inglés · CV en español",
    },
  } satisfies PageTranslations<ContactPageCopy>;
}
