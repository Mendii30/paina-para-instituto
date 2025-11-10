
import React, { useState } from 'react';
import type { GalleryImage } from '../types';

const images: GalleryImage[] = [
    { id: 1, src: 'https://picsum.photos/600/400?random=10', alt: 'Evento institucional 1' },
    { id: 2, src: 'https://picsum.photos/600/400?random=11', alt: 'Estudiantes en clase' },
    { id: 3, src: 'https://picsum.photos/600/400?random=12', alt: 'Acto de graduación' },
    { id: 4, src: 'https://picsum.photos/600/400?random=13', alt: 'Laboratorio de ciencias' },
    { id: 5, src: 'https://picsum.photos/600/400?random=14', alt: 'Patio del instituto' },
    { id: 6, src: 'https://picsum.photos/600/400?random=15', alt: 'Evento deportivo' },
];

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const openModal = (image: GalleryImage) => setSelectedImage(image);
    const closeModal = () => setSelectedImage(null);

    return (
        <section className="py-20 bg-neutral-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-primary-dark">Galería de Momentos</h2>
                    <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
                        Un vistazo a la vida y los eventos en nuestro instituto.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image) => (
                        <div key={image.id} className="group relative cursor-pointer overflow-hidden rounded-lg" onClick={() => openModal(image)}>
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Ver foto</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
                    <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.alt} className="rounded-lg shadow-2xl object-contain max-w-full max-h-[90vh]" />
                        <button onClick={closeModal} className="absolute -top-4 -right-4 bg-white text-neutral-900 rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold shadow-lg">&times;</button>
                        <p className="text-white text-center mt-2">{selectedImage.alt}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
