import React from 'react';
import Image from 'next/image';

const VenovoxHero = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-black text-white min-h-[70vh] flex items-center justify-center px-6 py-16 mt-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-0">

                    {/* Left Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
                            Shape The Future Of Trust – Join Our Team!
                        </h1>
                        <p className="text-lg md:text-xl font-normal leading-relaxed text-justify md:text-left">
                            At VENOVOX, we are passionate about helping businesses make informed decisions through reliable
                            background screening solutions. With branches in four countries and growing, we&apos;re looking for dedicated
                            professionals to join us on this exciting journey and help expand our employee portfolio with credible, talented
                            individuals.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/3 flex justify-end">
                        <Image
                            src="/venovoxx.jpg" // Replace with your actual image path
                            alt="Join Our Team"
                            width={400}
                            height={200}
                            className="object-contain "
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default VenovoxHero;
