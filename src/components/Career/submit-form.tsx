import { FaUser, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

export default function Form() {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center py-16 px-4">
            {/* Full-width Heading */}
            <div className="w-full text-center mb-6  text-start text-justify ">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    Are you <span className="text-black">VENOVOX?</span>
                </h2>
                <p className="text-black text-xl">
                    Can’t find the “fit” at your current workplace? Being a VENOVOX might just be the solution! Express your interest below.
                </p>
            </div>

            {/* Centered Form with max width */}
            <form className="bg-white rounded-md border border-gray-400 p-6 space-y-4 max-w-2xl w-full">
                {/* First Name */}
                <div className="flex items-center border-b border-gray-200 py-2">
                    <div className="w-9 h-9 rounded-full bg-[#C4C4C4] flex items-center justify-center mr-3">
                        <FaUser className="text-white text-lg" />
                    </div>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full outline-none text-lg text-gray-800 placeholder-gray-400"
                        required
                    />
                </div>

                {/* Last Name */}
                <div className="flex items-center border-b border-gray-300 py-2">
                    <div className="w-9 h-9 rounded-full bg-[#C4C4C4] flex items-center justify-center mr-3">
                        <FaUser className="text-white text-lg" />
                    </div>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full outline-none text-lg text-gray-800 placeholder-gray-400"
                        required
                    />
                </div>

                {/* Email */}
                <div className="flex items-center border-b border-gray-300 py-2">
                    <div className="w-9 h-9 rounded-full bg-[#C4C4C4] flex items-center justify-center mr-3">
                        <FaEnvelope className="text-white text-lg" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full outline-none text-lg text-gray-800 placeholder-gray-400"
                        required
                    />
                </div>

                {/* Phone */}
                <div className="flex items-center border-b border-gray-300 py-2">
                    <div className="w-9 h-9 rounded-full bg-[#C4C4C4] flex items-center justify-center mr-3">
                        <FaPhone className="text-white text-lg" />
                    </div>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full outline-none text-lg text-gray-800 placeholder-gray-400"
                        required
                    />
                </div>

                {/* LinkedIn */}
                <div className="flex items-center border-b border-gray-300 py-2">
                    <div className="w-9 h-9 rounded-full bg-[#C4C4C4] flex items-center justify-center mr-3">
                        <FaLinkedin className="text-white text-lg" />
                    </div>
                    <input
                        type="url"
                        name="linkedin"
                        placeholder="LinkedIn URL"
                        className="w-full outline-none text-lg text-gray-800 placeholder-gray-400"
                    />
                </div>

                {/* Privacy Note */}
                <p className="text-lg text-left text-black mt-2">
                    *By clicking submit, you are agreeing to the terms of Venovox Privacy Policy.
                </p>

                {/* Upload CV Button */}
                <div className="flex items-center justify-between mt-0 ml-2">
                    <label className="bg-[#C4C4C4] text-white font-semibold px-9 py-3 rounded-md cursor-not-allowed text-lg uppercase">
                        UPLOAD CV
                        <input className="hidden" type="file" />
                    </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-8 mr-7">
                    <button
                        type="submit"
                        className="bg-red-600 text-white font-bold text-base uppercase px-6 py-3 rounded-md shadow-md"
                    >
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
}
