import React from 'react';
import Image from 'next/image';

const VenovoxCredibilitySection = () => {
    return (
        <div className='bg-black text-white'>
            <div className="container mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-8">
                {/* Red accent blocks – hidden on mobile */}
                <div className="hidden md:block absolute top-0 right-0 w-80 h-32 bg-red-600 z-20"></div>
                <div className="hidden md:block absolute bottom-0 left-0 w-40 h-24 bg-red-600"></div>

                <div className="relative z-10 flex items-center py-12 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6 md:space-y-8">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                                Why Join Us?
                                <br />
                                Because Credibility
                                <br />
                                is Key!
                            </h2>

                            <p className="text-base sm:text-lg md:text-lg leading-relaxed text-justify">
                                At VENOVOX, we are passionate about helping businesses make informed
                                decisions through reliable background screening solutions. With branches
                                in four countries and growing, we&apos;re looking for dedicated professionals
                                to join us on this exciting journey and help expand our employee portfolio
                                with credible, talented individuals.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div>
                            <div className="aspect-[4/3] overflow-hidden rounded-md">
                                <Image
                                    src="/join-us.png"
                                    height={600}
                                    width={800}
                                    alt="Handshake with Tech Overlay"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VenovoxCredibilitySection;
