export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');

  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    return new Response(JSON.stringify({ error: 'invalid slug' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const r2Url = `https://pub-1feff31ff8ec4ecfafa5cf1a7a5146c7.r2.dev/facts/${slug}.json`;

  const response = await fetch(r2Url);
  const data = await response.text();

  return new Response(data, {
    status: response.status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
