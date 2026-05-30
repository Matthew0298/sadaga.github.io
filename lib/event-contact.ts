export function contactUrlForEvent(eventTitle: string): string {
  const params = new URLSearchParams({ oggetto: eventTitle });
  return `/contatti?${params.toString()}`;
}

export function defaultMessageForEvent(eventTitle: string): string {
  return `Buongiorno,\n\nVorrei informazioni per iscrivermi all'evento «${eventTitle}».\n\n`;
}
