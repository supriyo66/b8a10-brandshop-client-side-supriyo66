

const Footer = () => {
    return (
        <div className="container mx-auto">
         <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} TasteTrek
        <br />
        Powered by Supriyo
        <br />
        Address: 27/Dhanmondi, Dhaka-1205
      </div>
    </footer>

        </div>
    );
};

export default Footer;