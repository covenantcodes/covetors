import "./App.css";
import CustomButton from "./Components/Button";

const App = () => {
  return (
    <div className="landing_page_main">
      <div className="landing_page">
        <div className="header_nav">
          <div className="logo_box">
            <img src="../img/icon.png" alt="" className="logo" />
          </div>
          <div className="links">
            <ul>
              <li>
                {" "}
                <a href="">Courses</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Teachers</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <CustomButton
            textColor="#EC884D"
            bgColor="white"
            text="Get Started"
            width="100px"
            padding="10px"
            fontWeight="bold"
            hoverTextColor="white"
            hoverBgColor="#E47331"
          />
        </div>

        <div className="landing_body">
          <div className="landing_text">
            Empowering Tomorrow's Innovators: A Fun and Educational Journey in
            Coding for Kids
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
