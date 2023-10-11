import "./App.css";
import CustomButton from "./Components/Button";

const App = () => {
  return (
    <div className="landing_page_main">
      <div className="landing_page">
        <div className="header_nav">
          <div className="logo_box">
            <img src="../img/logo.png" alt="" className="logo" />
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
            width="130px"
            padding="20px"
            fontSize="15px"
            fontWeight="bold"
            hoverTextColor="white"
            hoverBgColor="#E47331"
          />
        </div>

        <div className="landing_body">
          <div className="landing_text_body">
            <div className="landing_text">
              <span className="span_text"> Unlock </span> your <br />{" "}
              <span className="span_text"> Child's </span>Potentials
            </div>
            <div className="landing_subtext">
              Learn at your own pace, we have tutors <br />
              that can work with your schedules
            </div>

            <CustomButton
              textColor="white"
              bgColor="#ec884d"
              text="Get Started"
              width="130px"
              padding="20px"
              fontSize="15px"
              fontWeight="bold"
              hoverTextColor="#ec884d"
              hoverBgColor="white"
            />
          </div>

          <div className="landing_img_box">
            <img src="../img/landing_img.png" alt="" className="landing_img" />
          </div>
        </div>
      </div>

      <div className="program_main">
        <div className="program_main_header">WHY CHOOSE US</div>
        <div className="program_box">
          <div className="program_section">
            <div className="program_title">Programs</div>
            <div className="program_subtitle">
              Our programs are designed to <br /> develop your children
            </div>
          </div>

          <div className="program_section">
            <div className="program_title">Creative Thinking</div>
            <div className="program_subtitle">
              Our programs are designed to <br /> develop your children
            </div>
          </div>

          <div className="program_section">
            <div className="program_title">Creative Thinking</div>
            <div className="program_subtitle">
              Our programs are designed to <br /> develop your children
            </div>
          </div>

          <div className="program_section">
            <div className="program_title">Creative Thinking</div>
            <div className="program_subtitle">
              Our programs are designed to <br /> develop your children
            </div>
          </div>
        </div>
      </div>

      <div className="classes_section">
        <div className="class_box">
          <div className="class_box_text">
            Personal In-Person <br />
            classroom encouraged <br /> students to
          </div>
        </div>
        <div className="class_box">
            <img src="../img/classes.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
