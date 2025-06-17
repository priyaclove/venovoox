import React from 'react';
import Image from 'next/image';

const FunTeamSection = () => {
    return (
        <section className="relative bg-black text-white overflow-hidden min-h-[450px] ">
            {/* Top Red Box */}
            <div className="absolute top-0 right-0 w-24 h-20 md:w-32 md:h-28 bg-red-600 z-10" />

            {/* Bottom Left Label */}
            <div className="absolute bottom-6 left-4 z-10">
                <div className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-4 text-base md:text-lg font-medium">
                    ESG & Corporate Responsibility
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-12">
                    {/* Left Text Content */}
                    <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Be Part of a <br className="hidden md:block" /> Credible <br className="hidden md:block" /> and Fun Team!
                        </h2>
                        <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
                            We’re all about creating a supportive and engaging workplace
                            where your ideas are heard and your efforts are recognized.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end items-end h-[300px] md:h-[400px] lg:h-[500px]">
                        <Image
                            src="/fun-team.png"
                            alt="Team Member"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunTeamSection;
