import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
    return (
        <div className="min-h-screen px-8 lg:px-12 xl:px-16 mt-16 flex flex-col xl:flex-row items-center justify-center w-full">
            {/* Content on the left */}
            <div className="w-full ">
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4 text-red-400">About Us</h2>
                <p className="text-gray-600 font-extralight text-md lg:text-lg xl:text-xl mb-8 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem nec
                    nulla rhoncus ultricies. Sed euismod enim eu magna gravida, ut fringilla eros
                    congue.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem nec
                    nulla rhoncus ultricies. Sed euismod enim eu magna gravida, ut fringilla eros
                    congue.
                </p>
                <p className="text-gray-600 font-extralight text-md lg:text-lg xl:text-xl mb-8 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem nec
                    nulla rhoncus ultricies. Sed euismod enim eu magna gravida, ut fringilla eros
                    congue.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem nec
                    nulla rhoncus ultricies. Sed euismod enim eu magna gravida, ut fringilla eros
                    congue.
                </p>
            </div>

            {/* Photo grid on the right */}
            <div className="lg:w-full relative flex justify-center items-center  w-full">
                <div className="flex flex-col justify-around">
                    {/* First photo */}
                    <div className="relative mb-4">
                        <Image
                            src="/images/hero-img.jpg"
                            objectFit="cover"
                            alt="Photo 1"
                            className="rounded-md shadow-lg"
                            width={600}
                            height={600}
                        />
                    </div>

                    {/* Second photo */}
                    <div className="relative mt-4">
                        <Image
                            src="/images/hero-image.jpg"
                      
                            objectFit="cover"
                            alt="Photo 2"
                            className="rounded-md shadow-lg"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
