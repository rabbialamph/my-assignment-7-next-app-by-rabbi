"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-white px-4">
      
      <div className="text-center max-w-xl w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl">

        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-[#ad46ff] to-[#22c55e] bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-2xl text-red-800 font-semibold mt-4">
          Oops! Page Not Found
        </h2>


        <p className="text-gray-400 mt-3 text-sm">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          
          <Link href="/">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#ad46ff] to-[#22c55e] hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
              Go Home
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default NotFound;