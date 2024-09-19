import "./contact.css";

const Contact = () => {
  return (
    <div className="contact mb-20 px-4 md:px-8 lg:px-16" id="contact">
      <h1 className="text-4xl font-semibold mb-2 text-center">FIND ME ON</h1>
      <p className="text-lg text-center mb-6 text-gray-300">
        Feel free to <span className="text-[#FF0000]">connect</span> with me
      </p>
      <div className="flex justify-center gap-4 mb-12">
        <a
          href="https://www.instagram.com/udaydeep_28/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/udaydeep-singh-dhir-196682201/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100017591267951"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="flex flex-col items-center md:items-start">
            <a
              href="mailto:udaydeepsinghd@gmail.com"
              className="flex items-center text-xl mb-4 hover:text-[#FF0000] transition-colors duration-300"
            >
              <i className="fas fa-envelope mr-2"></i>
              <span>udaydeepsinghd@gmail.com</span>
            </a>
            <a
              href="tel:+917678252168"
              className="flex items-center text-xl mb-6 hover:text-[#FF0000] transition-colors duration-300"
            >
              <i className="fas fa-phone mr-2"></i>
              <span>+91 7678252168</span>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4475012728!2d77.18037491508602!3d28.67746798240099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9c8b0f3e9f%3A0x1e9c4e5c4f1f1f1f!2sRoop%20Nagar%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1685524284649!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
