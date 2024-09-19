const Footer = () => {
  return (
    <footer className="bg-[#282828] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-left hidden md:block">
          <p>Designed and developed with ❤️ by</p>
          <p className="font-bold">Udaydeep Singh</p>
        </div>
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex space-x-4 hidden md:flex">
          <a
            href="https://www.instagram.com/udaydeep_28/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF0000] transition-colors duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/udaydeep-singh-dhir-196682201/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF0000] transition-colors duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100017591267951"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF0000] transition-colors duration-300"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
