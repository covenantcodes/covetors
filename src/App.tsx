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
              <li>Courses</li>
              <li>About Us</li>
              <li>Teachers</li>
              <li>Pricing</li>
              <li>Careers</li>
            </ul>
          </div>
          <CustomButton
            textColor="white"
            bgColor="#EC884D"
            text="Get Started"
            width="100px"
            padding="10px"
            fontWeight="bold"
            hoverTextColor="white"
            hoverBgColor="#E47331"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
