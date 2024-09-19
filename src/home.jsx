import "./home.css";
import Type from "./type";

const Home = () => {
  return (
    <div className="container1" id="home">
      <div className="left">
        Hi! I&apos;m <br />
        <span> Udaydeep Singh </span>
        <br />
        <span className="small">
          <Type />
        </span>
        <div className="icon-container">
          <a
            href="https://www.linkedin.com/in/udaydeep-singh-dhir-196682201/"
            className="icon-box"
          >
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/udaydeep28" className="icon-box">
            <span>GitHub</span>
          </a>
          <a href="https://leetcode.com/u/udaydeep_singh/" className="icon-box">
            <span>LeetCode</span>
          </a>
        </div>
      </div>
      <div className="right">
        <img src="/profile-try.jpeg" alt="profile-photo" />
      </div>
    </div>
  );
};

export default Home;
