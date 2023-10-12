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
          <div className="extras_one">
            {/* <img src="../img/girl2.png" alt="" className="extras_img"/> */}
            <img src="../img/boy2.png" alt="" className="extras_img" />
          </div>
          <div className="landing_text_body">
            <div className="landing_text">
              <span className="span_text"> Unlock </span> your Child's{" "}
              <span className="span_text"> Potentials</span> with Our{" "}
              <span className="span_text"> Exciting</span> Programs
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

          <div className="extras">
            <img src="../img/boy.png" alt="" className="extras_img" />
            <img src="../img/girl.png" alt="" className="extras_img" />
          </div>
        </div>
      </div>

      <div className="program_main">
        <div className="program_main_header">WHY CHOOSE US</div>
        <div className="program_box">
          <div className="program_section_one">
            <div className="program_title_one">Programs</div>
            <div className="program_subtitle_one">
              Our programs are designed to <br /> develop your children
            </div>
          </div>

          <div className="program_section">
            <div className="program_title">Creative Thinking</div>
            <div className="program_subtitle">
              Our programs are designed to <br /> develop your children
            </div>
          </div>

          <div className="program_section_one">
            <div className="program_title_one">Creative Thinking</div>
            <div className="program_subtitle_one">
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
          <div className="class_box_content">
            <div className="class_box_text">
              Our Personal In-Person <br />
              classroom encouraged <br /> students to
            </div>

            <div className="content_list">
              <div className="content_list_box">
                <img
                  src="../img/checked.png"
                  alt=""
                  className="content_list_item_img"
                />
              </div>
              <div className="content_list_item">
                Focus on long period of time
              </div>
            </div>

            <div className="content_list">
              <div className="content_list_box">
                <img
                  src="../img/checked.png"
                  alt=""
                  className="content_list_item_img"
                />
              </div>
              <div className="content_list_item">
                Focus on long period of time
              </div>
            </div>

            <div className="content_list">
              <div className="content_list_box">
                <img
                  src="../img/checked.png"
                  alt=""
                  className="content_list_item_img"
                />
              </div>
              <div className="content_list_item">
                Focus on long period of time
              </div>
            </div>
          </div>
        </div>
        <div className="class_box">
          <div className="class_box_content">
            <img src="../img/classes.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="superstars_container">
        <div className="superstar_header">Meet our SuperStars</div>

        <div className="superstars_main">
          <div className="superstars_box">
            <div className="superstars_box_img_container">
              <img src="../img/2.jpg" alt="" className="superstars_box_img" />
            </div>
            <div className="superstar_name_box">
              <img
                src="../img/uk-flag.jpg"
                alt=""
                className="superstars_flag_img"
              />
              <div className="superstar_name">Evelyn Bridgeton</div>
            </div>
          </div>

          <div className="superstars_box">
            <div className="superstars_box_img_container">
              <img src="../img/1.jpg" alt="" className="superstars_box_img" />
            </div>
            <div className="superstar_name_box">
              <img
                src="../img/canada.jpg"
                alt=""
                className="superstars_flag_img"
              />
              <div className="superstar_name">Leona Brown</div>
            </div>
          </div>

          <div className="superstars_box">
            <div className="superstars_box_img_container">
              <img src="../img/3.jpg" alt="" className="superstars_box_img" />
            </div>
            <div className="superstar_name_box">
              <img
                src="../img/ng_flag.jpg"
                alt=""
                className="superstars_flag_img"
              />
              <div className="superstar_name">Fikayo Oluwadarasimi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
