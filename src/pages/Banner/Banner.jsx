import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
             <div className="relative h-96"> 
        <img className="w-full h-full object-cover" src="https://i.ibb.co/kSswzML/banner-pic.webp" alt="Banner Image" />
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl shadow-lg font-semibold text-stone-900 bg-slate-700 p-4 rounded-md">TasteTrek</div>
    </div>
            
        </div>
    );
};

export default Banner;