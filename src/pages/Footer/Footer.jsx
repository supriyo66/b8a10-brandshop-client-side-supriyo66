

const Footer = () => {
    return (
        <div className="container mx-auto">
            <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="text-3xl font-extrabold">TasteTrek</h2>
            <p className="text-sm">Explore the world of flavors</p>
        </div>
        <div className="lg:flex-grow">
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-12">
                <li><a className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a className="text-gray-300 hover:text-white">Menu</a></li>
                <li><a className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
        </div>
        <div className="text-center lg:text-right mt-4 lg:mt-0">
            <p className="text-sm">&copy; 2023 TasteTrek</p>
        </div>
    </div>
</footer>

        </div>
    );
};

export default Footer;