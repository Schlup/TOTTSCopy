import React from 'react';

const Courses: React.FC = () => {
    const courses = [
        // Subustituir pelos banners
        { id: 1, src: 'https://placehold.co/2200x5000', alt: 'Curso 1' },
        { id: 2, src: 'https://placehold.co/2200x5000', alt: 'Curso 2' },
        { id: 3, src: 'https://placehold.co/2200x5000', alt: 'Curso 3' },
        { id: 4, src: 'https://placehold.co/2200x5000', alt: 'Curso 4' },
        { id: 5, src: 'https://placehold.co/2200x5000', alt: 'Curso 5' },
        { id: 6, src: 'https://placehold.co/2200x5000', alt: 'Curso 6' },
        { id: 7, src: 'https://placehold.co/2200x5000', alt: 'Curso 7' },
        { id: 8, src: 'https://placehold.co/2200x5000', alt: 'Curso 8' },
    ];

    // loop infinito
    const duplicatedCourses = [...courses, ...courses];

    return (
        <section className="py-2">
            <h1 className='text-4xl text-orange-600 text-center font-bold flex justify-center pb-6'>Confira os nossos Cursos de Prateleira</h1>
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden">
                    <div className="flex animate-slide-courses">
                        {duplicatedCourses.map((courses) => (
                            <div
                                key={courses.id}
                                className="flex-shrink px-6 flex items-center justify-center"
                                style={{ width: '400px', height: '600px' }}
                            >
                                <img
                                    src={courses.src}
                                    alt={courses.alt}
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;