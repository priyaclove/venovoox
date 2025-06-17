import React from 'react';
import Image from 'next/image';

const VenovoxHero = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-black text-white h-[85vh] flex items-center justify-center px-6 py-16">
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

            {/* Image Section with Overlapping Red Tag */}
            <div className="bg-white w-full flex justify-center py-10">
                <div className="relative w-[500px]">
                    {/* Red Box in Top-Right Overlapping Image */}
                    <div className="absolute top-[-5%] left-0 bg-red-600 text-white px-8  py-4 z-10 shadow-md ">
                        <p className="text-lg md:text-lg font-semibold leading-tight text-center italic">
                            I am Venovox! <br /> Are You?
                        </p>
                    </div>

                    {/* Image */}
                    <Image
                        src="/career.png" // Replace with your actual image path
                        alt="Career Banner"
                        width={500}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                        className="rounded"
                    />
                </div>
            </div>
        </>
    );
};

export default VenovoxHero;
