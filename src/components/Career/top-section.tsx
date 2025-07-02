import React from 'react';
import Image from 'next/image';

const VenovoxHero = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-black text-white min-h-[70vh] flex items-center justify-center px-6 py-12 mt-24">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-0">

                    {/* Left Content */}
                    <div className="md:w-2/3 text-center md:text-left pr-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Shape The Future Of Trust – <span className='text-red-600'>Join Our Team!</span>
                        </h1>
                        <p className="text-justify [text-justify:inter-word] hyphens-none">
                            At VENOVOX, we are passionate about helping businesses make informed decisions through reliable
                            background screening solutions. With branches in four countries and growing, we&apos;re looking for dedicated
                            professionals to join us on this exciting journey and help expand our employee portfolio with credible, talented
                            individuals.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-[350px] flex justify-center mt-8 md:mt-0">
                        <Image
                            src="/venovoxx.jpg"
                            alt="Join Our Team"
                            width={400}
                            height={400}
                            className="object-contain h-auto"
                        />

                    </div>
                </div>
            </div>

        </>
    );
};

export default VenovoxHero;
