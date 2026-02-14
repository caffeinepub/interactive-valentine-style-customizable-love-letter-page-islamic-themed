export function parseQueryParams(): { from?: string; to?: string } {
  const params = new URLSearchParams(window.location.search);
  return {
    from: params.get('from') || undefined,
    to: params.get('to') || undefined,
  };
}

export function generateShareUrl(fromName: string, toName: string): string {
  const url = new URL(window.location.href);
  url.search = '';
  if (fromName) url.searchParams.set('from', fromName);
  if (toName) url.searchParams.set('to', toName);
  return url.toString();
}
