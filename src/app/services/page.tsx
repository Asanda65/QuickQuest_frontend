"use client";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../globals.css';

export default function LabourPageServices() {


    const categories = [
        {
            name: "Lawn mowing",
            price: "Starting at Rs.5000",
            imageUrl: "/images/lawn-mowing.png"
        },
        {
            name: "Hedge trimming",
            price: "Starting at Rs.5000",
            imageUrl: "/images/hedge-trimming.png"
        },
        {
            name: "Garden maintenance",
            price: "Starting at Rs.5000",
            imageUrl: "/images/garden-maintenance.png"
        },
        {
            name: "Planting & garden design",
            price: "Starting at Rs.10000",
            imageUrl: "/images/plant-garden-design.png"
        },
        {
            name: "Irrigation systems installation and repair",
            price: "Starting at Rs.50000",
            imageUrl: "/images/Irrigation-systems.png"
        },
        {
            name: "Tree pruning and removal",
            price: "Starting at Rs.10,000",
            imageUrl: "/images/tree-pruning.png"
        },
        {
            name: "Soil fertilization and treatment",
            price: "Starting at Rs.10,000",
            imageUrl: "/images/soil-fertilization.jpg"
        },
        {
            name: "Weed Control",
            price: "Starting at Rs.10,000",
            imageUrl: "/images/weed-control.png"
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true, // Centers slides if they are less than the slider width
    };

    return (
        <>
            <div className="mx-auto mt-4 py-4 max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                </div>

                <h2 className="text-lg pl-4 font-medium text-left text-black mt-8">Categories</h2>
                <div className="block md:hidden md:mb-0 mb-6">
                    <Slider {...sliderSettings}>
                        {categories.map((category, index) => (
                            <div key={index} className="p-4">
                                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                    <img src={category.imageUrl} alt={category.name} className="w-full h-60 object-cover" />
                                    <div className="p-4">
                                        <h3 className="text-lg font-medium text-black">{category.name}</h3>
                                        <p className="text-gray-500">{category.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((category, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={category.imageUrl} alt={category.name} className="w-full h-60 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-medium text-black">{category.name}</h3>
                                    <p className="text-gray-500">{category.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
