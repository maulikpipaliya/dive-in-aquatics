import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View photos from our swimming classes, facilities, and events. See our students learning and having fun in the water.',
  alternates: {
    canonical: 'https://www.diveinaquatics.in/gallery',
  },
};

export default function GalleryPage() {
  const galleryImages = [
    { id: 1, title: 'Kids Learning Freestyle', category: 'Classes' },
    { id: 2, title: 'Olympic Size Pool', category: 'Facilities' },
    { id: 3, title: 'Toddler Splash Time', category: 'Classes' },
    { id: 4, title: 'Competitive Training', category: 'Training' },
    { id: 5, title: 'Adult Swimming Class', category: 'Classes' },
    { id: 6, title: 'Annual Swimming Meet', category: 'Events' },
    { id: 7, title: 'Coach Training Session', category: 'Training' },
    { id: 8, title: 'Pool Facilities', category: 'Facilities' },
    { id: 9, title: 'Certificate Distribution', category: 'Events' },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our facilities, classes, and the amazing progress our students make
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-video bg-gradient-to-br from-brand-blue-light to-brand-blue rounded-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <span className="text-sm uppercase tracking-wide mb-2 opacity-80">
                  {image.category}
                </span>
                <h3 className="text-xl font-semibold text-center">{image.title}</h3>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="mb-4">Follow us on social media for more photos and updates!</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/diveinaquatics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/diveinaquatics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://youtube.com/@diveinaquatics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
