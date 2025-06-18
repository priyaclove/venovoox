import React from 'react';
import Image from 'next/image';

const VenovoxHero = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-black text-white h-[70vh] flex items-center justify-center px-6 py-16 mt-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-8">
                        Shape The Future Of Trust – Join Our Team!
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-justify">
                        At VENOVOX, we are passionate about helping businesses make informed decisions through reliable
                        background screening solutions. With branches in four countries and growing, we&apos;re looking for dedicated
                        professionals to join us on this exciting journey and help expand our employee portfolio with credible, talented
                        individuals.
                    </p>
                </div>
            </div>


            <div className="bg-white w-full flex justify-center ">
                <div className="relative container mx-auto h-[70vh] ">
                    {/* Red Box */}
                    <div className="absolute top-[-40px]  bg-red-600 text-white px-8 py-4 z-10 shadow-md">
                        <p className="text-lg md:text-lg font-semibold leading-tight text-center italic">
                            I am Venovox! <br /> Are You?
                        </p>
                    </div>

                    {/* Image: Full Width, 50vh Height, No Crop */}
                    <Image
                        src="/buddy.jpg"
                        alt="Career Banner"
                        fill
                        className="object-cover w-full"
                    />
                </div>
            </div>




        </>
    );
};

export default VenovoxHero;
