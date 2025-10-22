// app/diagnostico/page.tsx
import { Suspense } from "react";
import DiagnosticoContent from "./diagnostico-content";

export const dynamic = "force-dynamic";

// ID del video (tomado de tu link https://youtu.be/Jx1xadS1T8k)
const VIDEO_ID = "Jx1xadS1T8k";

export default function Page() {
  const src = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {/* 1) Título */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-3">
        Diagnóstico para Radiografía de Software de Gestión Empresarial
      </h1>

      {/* 2) Frase de invitación */}
      <p className="text-base md:text-lg mb-6">
        ¡Te invitamos a conocer nuestro caso de éxito!
      </p>

      {/* 3) Video embebido (nocookie, autoplay mute, lazy) */}
      <div className="w-full aspect-video mb-6 overflow-hidden rounded-xl shadow">
        <iframe
          className="w-full h-full"
          src={src}
          title="Caso de éxito"
          loading="lazy"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* 4) Frase de instrucción */}
      <p className="text-sm md:text-base text-gray-600 mb-10">
        Completa el cuestionario y conoce tu resultado al instante.
      </p>

      {/* 5) Cuestionario (sin tocar) */}
      <Suspense fallback={<div>Cargando cuestionario...</div>}>
        <DiagnosticoContent />
      </Suspense>
    </main>
  );
}
