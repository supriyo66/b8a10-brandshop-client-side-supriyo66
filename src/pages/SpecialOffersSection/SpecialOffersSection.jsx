import React from 'react';

function SpecialOffersSection() {
    const specialOffers = [
        {
            title: 'Lunch Combo',
            description: 'Enjoy a special lunch combo and get 30% discount. Includes an entree, side, and a drink.',
        },
        {
            title: 'Happy Hour',
            description: 'Join us for Happy Hour from 4:00 PM to 6:00 PM. Get 20% off all appetizers and drinks.',
        },
        {
            title: 'Weekend Brunch',
            description: 'Indulge in our delicious brunch menu every Saturday and Sunday from 9:00 AM to 1:00 PM.',
        },
        {
            title: 'Night Chill',
            description: 'We offer some delious night-menu at a very attractive discount',
        },
    ];

    return (
        <section className="bg-gray-200 py-10 p-8 mb-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Special Offers</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {specialOffers.map((offer, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold">{offer.title}</h3>
                            <p className="text-gray-600">{offer.description}</p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SpecialOffersSection;
