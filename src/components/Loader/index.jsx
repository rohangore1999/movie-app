import React from "react";

const Loader = () => (
  <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-40 overflow-hidden bg-gray-900 opacity-75 flex flex-col items-center justify-center">
    <div className="w-12 h-12 rounded-full animate-spin border-8 border-solid border-t-transparent ease-linear border-t-4 border-gray-200 mb-4" />

    <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>

    <p className="w-1/3 text-center text-white">This may take a few seconds.</p>
  </div>
);

export default Loader;
