const staticDevCoffee = '鸽子主页 | Fmkli的鸽子窝';
const assets = [
    '/',
    '/index.html',
    '/style.css',
    '/markdown.css',
    '/font.css',
    '/post.css',
    './jquery.min.js',
    './main.js',
    './wel.js',
    '/images/coffee1.jpg',
    '/images/coffee2.jpg',
    '/images/coffee3.jpg',
    '/images/coffee4.jpg',
    '/images/coffee5.jpg',
    '/images/coffee6.jpg',
    '/images/coffee7.jpg',
    '/images/coffee8.jpg',
    '/images/coffee9.jpg',
];

self.addEventListener('fetch', (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request);
        })
    );
});