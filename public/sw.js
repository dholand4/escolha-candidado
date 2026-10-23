// Service worker do Match Eleitoral 2026: permite abrir o teste sem internet depois da primeira visita.
// Páginas: rede primeiro (para receber atualizações), cache se estiver offline.
// Arquivos com hash em /assets e fontes: cache primeiro.
const CACHE = 'match-eleitoral-v1'
const ESSENCIAIS = ['./', './index.html', './manifest.webmanifest', './favicon.svg', './icon-192.png', './icon-512.png']

self.addEventListener('install', (evento) => {
  evento.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ESSENCIAIS)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches
      .keys()
      .then((chaves) => Promise.all(chaves.filter((c) => c !== CACHE).map((c) => caches.delete(c))))
      .then(() => self.clients.claim()),
  )
})

async function redePrimeiro(requisicao) {
  const cache = await caches.open(CACHE)
  try {
    const resposta = await fetch(requisicao)
    if (resposta.ok) cache.put('./index.html', resposta.clone())
    return resposta
  } catch {
    return (await cache.match('./index.html')) || Response.error()
  }
}

async function cachePrimeiro(requisicao) {
  const cache = await caches.open(CACHE)
  const salvo = await cache.match(requisicao)
  if (salvo) return salvo
  const resposta = await fetch(requisicao)
  if (resposta.ok || resposta.type === 'opaque') cache.put(requisicao, resposta.clone())
  return resposta
}

self.addEventListener('fetch', (evento) => {
  const { request } = evento
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.pathname.startsWith('/_vercel/')) return
  if (request.mode === 'navigate') {
    evento.respondWith(redePrimeiro(request))
    return
  }
  const fonte = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com'
  if (fonte || (url.origin === self.location.origin && url.pathname !== '/sw.js')) {
    evento.respondWith(cachePrimeiro(request))
  }
})
