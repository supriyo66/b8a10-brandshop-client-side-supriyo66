import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../FoodCard/FoodCard';
import TestimonialSection from '../TestimonialSection/TestimonialSection';
import SpecialOffersSection from '../SpecialOffersSection/SpecialOffersSection';

const Home = () => {
    const foods=useLoaderData();
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <div className='mt-10 bg-slate-100 mt-10'>
                <h1 className='text-center py-8 text-5xl font-medium'>Our Services</h1>
               <div className='grid grid-cols-3 gap-5'>
               {
                    foods.map(food=><FoodCard key={food._id} food={food}></FoodCard>)
                } 
               </div>
            </div>

            <div className='bg-slate-100 mt-10'>
                <SpecialOffersSection></SpecialOffersSection>
            </div>
            <div className='mt-10 mb-10 p-10 bg-slate-100'>
                <TestimonialSection></TestimonialSection>
            </div>
            
            
        </div>
    );
};

export default Home;