import React from 'react';

function TestimonialSection() {
    const testimonials = [
        {
            name: 'Mahmud Ahmed',
            text: 'The food at this restaurant is absolutely amazing! I can\'t get enough of their dishes.',
        },
        {
            name: 'Sarah khan',
            text: 'I had the best dining experience here. The ambiance and service were top-notch.',
        },
        {
            name: 'Bristy Akter',
            text: 'The flavors in every dish are so well-balanced. I keep coming back for more.',
        },
        {
            name: 'Aman Mollah',
            text: 'The dishes are so delicious.Became one my favourite food place.',
        },
    ];

    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-8">
                            <p className="text-gray-600">{testimonial.text}</p>
                            <p className="mt-4 font-semibold">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
