import "./project.css";

const Project = () => {
  return (
    <div className="project px-4 md:px-8 lg:px-16" id="projects">
      <h1 className="text-5xl font-bold mb-12 text-center text-[#FF0000]">
        Projects
      </h1>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col md:flex-row bg-[#282828] rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
          <img
            src="/drumkit-project.png"
            alt="Project 1"
            className="w-full md:w-2/5 object-cover h-64 md:h-80"
          />
          <div className="w-full md:w-3/5 p-8">
            <h2 className="text-3xl font-semibold mb-4">Drum Kit</h2>
            <p className="text-gray-300 mb-6 text-lg">
              This interactive Drum Kit project allows users to create beats and
              play various drum sounds using either mouse clicks or keyboard
              inputs. Built with JavaScript, HTML, and CSS, it demonstrates the
              power of event handling and audio manipulation in web development.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <a
                href="https://udaydeep28.github.io/Drum_Kit/"
                className="project-btn project-btn-primary text-xs md:text-base py-1 px-2 md:py-2 md:px-4"
              >
                <i className="fas fa-play-circle text-[#FF0000] text-xs md:text-base"></i>{" "}
                <span className="text-[#FF0000]">View Demo</span>
              </a>
              <a
                href="https://github.com/udaydeep28/Drum_Kit"
                className="project-btn project-btn-secondary text-xs md:text-base py-1 px-2 md:py-2 md:px-4"
              >
                <i className="fab fa-github text-xs md:text-base"></i>{" "}
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-[#282828] rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
          <img
            src="/weather-project.png"
            alt="Project 2"
            className="w-full md:w-2/5 object-cover h-64 md:h-80"
          />
          <div className="w-full md:w-3/5 p-8">
            <h2 className="text-3xl font-semibold mb-4">Weather App</h2>
            <p className="text-gray-300 mb-6 text-lg">
              This Weather App is a dynamic React-based application that
              utilizes a weather API to provide real-time weather information
              based on city searches. Users can input any city name worldwide,
              instantly receiving current weather data including temperature,
              humidity, wind speed, and more.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <a
                href="https://app-weather-react0.netlify.app/"
                className="project-btn project-btn-primary text-xs md:text-base py-1 px-2 md:py-2 md:px-4"
              >
                <i className="fas fa-play-circle text-[#FF0000] text-xs md:text-base"></i>{" "}
                <span className="text-[#FF0000]">View Demo</span>
              </a>
              <a
                href="https://github.com/udaydeep28/weather-react"
                className="project-btn project-btn-secondary text-xs md:text-base py-1 px-2 md:py-2 md:px-4"
              >
                <i className="fab fa-github text-xs md:text-base"></i>{" "}
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-[#282828] rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
          <img
            src="/gym-project.png"
            alt="Project 3"
            className="w-full md:w-2/5 object-cover h-64 md:h-80"
          />
          <div className="w-full md:w-3/5 p-8">
            <h2 className="text-3xl font-semibold mb-4">Just Fit Me</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Just Fit Me is a dynamic gym landing page designed to attract and
              engage potential clients. The page&apos;s centerpiece is a
              user-friendly contact form where visitors can easily reach out for
              more information or to schedule a consultation.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <a
                href="https://udaydeep28.github.io/Just-Fit-Me/"
                className="project-btn project-btn-primary text-xs md:text-base py-1 px-2 md:py-2 md:px-4"
              >
                <i className="fas fa-play-circle text-[#FF0000] text-xs md:text-base"></i>{" "}
                <span className="text-[#FF0000]">View Demo</span>
              </a>
              <a
                href="https://github.com/udaydeep28/Just-Fit-Me"
                className="project-btn project-btn-secondary text-xs md:text-base py-1 px-2 md:py-2 md:px-4"
              >
                <i className="fab fa-github text-xs md:text-base"></i>{" "}
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-[#282828] rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
          <img
            src="/quotes-project.png"
            alt="Project 4"
            className="w-full md:w-2/5 object-cover h-64 md:h-80"
          />
          <div className="w-full md:w-3/5 p-8">
            <h2 className="text-3xl font-semibold mb-4">Anime Quotes</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Anime Quotes is a dynamic web application built with Node.js and
              Express, offering a comprehensive platform for anime enthusiasts
              to interact with their favorite quotes. Users can perform all CRUD
              (Create, Read, Update, Delete) operations, allowing them to add
              new quotes, browse existing ones, edit entries, and remove quotes
              as needed.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <a
                href="https://anime-quotes-eiyt.onrender.com"
                className="project-btn project-btn-primary text-xs md:text-base py-1 px-2 md:py-2 md:px-4"
              >
                <i className="fas fa-play-circle text-[#FF0000] text-xs md:text-base"></i>{" "}
                <span className="text-[#FF0000]">View Demo</span>
              </a>
              <a
                href="https://github.com/udaydeep28/Anime-Quotes"
                className="project-btn project-btn-secondary text-xs md:text-base py-1 px-2 md:py-2 md:px-4"
              >
                <i className="fab fa-github text-xs md:text-base"></i>{" "}
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
