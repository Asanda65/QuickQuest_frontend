import React from 'react';

const testimonials = [
    {
        id: '2',
        name: 'P',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/images/test-prof-1.png',

    },
    {
        id: '2',
        name: 'P',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/images/test-prof-1.png',

    },
    {
        id: '1',
        name: 'K',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/images/test-prof-1.png',

    },
    {
        id: '2',
        name: 'P',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/images/test-prof-1.png',

    },
    {
        id: '2',
        name: 'P',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/images/test-prof-1.png',

    },
    // ... other testimonials
];

export default function Testimonials() {
    return (
        <div className="bg-gray-100 py-12 px-4">
            <h2 className="text-2xl pl-16 font-bold mb-10 text-left text-black">What Our Cutsomers Say</h2>
            <div className="flex flex-wrap justify-center items-start gap-4">
                {testimonials.map((testimonial, index) => ( // Updated to use index as key due to duplicate ids
                    <div key={index} className="rounded-lg p-4 shadow-md p-6 w-64 min-w-[260px] bg-white flex flex-col justify-between"> {/* Adjusted for min-height and layout */}
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <img src={testimonial.image} className="rounded-full w-12 h-12 object-cover" />
                                <span className="font-bold text-black">{testimonial.name}</span>
                            </div>
                            <p className="text-sm text-black">{testimonial.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
