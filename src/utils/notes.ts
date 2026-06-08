import { getCollection } from 'astro:content';

/**
 * Fuente única de verdad para las notas del sitio.
 * Lee la colección `blog` (src/content/blog/*.md), descarta borradores
 * y las ordena de más reciente a más antigua.
 *
 * Publicar una nota = soltar un .md con `draft: false`. Aparece sola
 * en el home (#notes) y en /blog. No se hardcodea en ningún lado.
 */
export async function getPublishedNotes() {
  const notes = await getCollection('blog', ({ data }) => !data.draft);
  return notes.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

/** category → clase del puntito de color en las tarjetas del home */
export const catDot: Record<string, string> = {
  Automation: 'fire',
  CX: 'aqua',
  AI: 'violet',
  QA: 'violet',
};

/** category → clase del tag en el archivo /blog */
export const catTag: Record<string, string> = {
  Automation: 'tag-accent',
  CX: 'tag',
  AI: 'tag-warm',
  QA: 'tag',
};
