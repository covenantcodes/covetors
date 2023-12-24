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
                <a href="./About.tsx">About Us</a>
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
              {/* <span className="span_text"> Unlock </span> your Child's{" "}
              <span className="span_text"> Potentials</span> with Our{" "}
              <span className="span_text"> Exciting</span> Programs */}

              Unlock your child's Potentials
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
        <div className="program_main_header">Why Choose Us</div>
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

      <div className="courses_main">
        <div className="testimonial_section_header">
          A peek into our level courses
        </div>
        <div className="courses_boxes">
          <div className="course_card">
            <img src="../img/level1.png" alt="" className="course_card_img" />
            <div className="course_title">Covetors Level I</div>
            <div className="course_description">
              <div className="courses_list_container">
                Covetors Level I provides a comprehensive introduction to
                programming and logical thinking. Students begin with:
              </div>
              <div className="courses_list">
                {" "}
                Animation and Games with Scratch
              </div>
              <div className="courses_list"> Logic with Scratch</div>
              <div className="courses_list">
                {" "}
                Intro to Text-based Programming
              </div>
            </div>
          </div>

          <div className="course_card">
            <img src="../img/level2.png" alt="" className="course_card_img" />
            <div className="course_title">Covetors Level II</div>
            <div className="course_description">
              <div className="courses_list_container">
                Covetors Level II offers a well-structured core course lineup.
                It introduces students to the world of coding using the Python
                thereby students deepen their understanding of logical thinking
                and problem-solving through Python.
              </div>
              <div className="courses_list">
                {" "}
                Programming Fundamentals with Python
              </div>
              <div className="courses_list">Logic with Python</div>
              <div className="courses_list">
                {" "}
                Modular Programming with Python
              </div>
            </div>
          </div>

          <div className="course_card">
            <img src="../img/level3.png" alt="" className="course_card_img" />
            <div className="course_title">Covetors Level III</div>
            <div className="course_description">
              <div className="courses_list_container">
                Covetors Level III presents a comprehensive core course
                structure to delve into web development. Students will learn the
                fundamentals of web development by mastering HTML and CSS to
                craft static websites.
              </div>
              <div className="courses_list">
                {" "}
                Creating Websites with HTML/CSS
              </div>
              <div className="courses_list">
                Responsive Websites with HTML/CSS
              </div>
              <div className="courses_list">
                {" "}
                Interactive Websites with JavaScript
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="classes_section">
        <div className="class_box">
          <div className="class_box_content">
            <div className="class_box_text">
              Our Personal{" "}
              <span className="span_text"> In-Person Classroom </span>
              encourges
            </div>
            <div className="classroom_benefits_main">
              <div className="classroom_benefits_container">
                <div className="classroom_benefits_pic_container">
                  <img src="../img/focus.png" alt="" />
                </div>
                <div className="classroom_benefits_text">
                  <div className="classroom_benefits_head_text">
                    Improved Focus
                  </div>
                  <div className="classroom_benefits_text_body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas facilis ad assumenda dolorum, voluptatum minima veniam
                    earum quasi laborum, dolor deserunt? Modi magni sunt
                    mollitia labore optio velit voluptate? Libero!
                  </div>
                </div>
              </div>

              <div className="classroom_benefits_container">
                <div className="classroom_benefits_pic_container">
                  <img src="../img/fast.png" alt="" />
                </div>
                <div className="classroom_benefits_text">
                  <div className="classroom_benefits_head_text">
                    Improved Focus
                  </div>
                  <div className="classroom_benefits_text_body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas facilis ad assumenda dolorum, voluptatum minima veniam
                    earum quasi laborum, dolor deserunt? Modi magni sunt
                    mollitia labore optio velit voluptate? Libero!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="class_box">
          <div className="class_box_image_container">
            <img src="../img/cartoon2.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="testimonial_section">
        <div className="testimonial_section_header">What People Say</div>

        <div className="testimonial_section_container">
          <div className="testimonial_section_container_box">
            <div className="testimonial_section_container_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              aperiam nihil laborum neque perspiciatis numquam nisi. Corporis
              eligendi inventore necessitatibus perferendis tempore. Laboriosam
              consequatur cupiditate sit eligendi at, unde autem.
            </div>
            <div className="testimonial_profile_section">
              <div className="testimonial_profile_pic">
                <img src="../img/hs1.jpg" alt="" />
              </div>

              <div>
                <div className="testimonial_profile_name">Daisy Brown</div>

                <div className="testimonial_profile_description">Parent</div>
              </div>
            </div>
          </div>

          <div className="testimonial_section_container_box">
            <div className="testimonial_section_container_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              aperiam nihil laborum neque perspiciatis numquam nisi. Corporis
              eligendi inventore necessitatibus perferendis tempore. Laboriosam
              consequatur cupiditate sit eligendi at, unde autem.
            </div>
            <div className="testimonial_profile_section">
              <div className="testimonial_profile_pic">
                <img src="../img/hs2.jpg" alt="" />
              </div>

              <div>
                <div className="testimonial_profile_name">Chichi Anikpo</div>

                <div className="testimonial_profile_description">Parent</div>
              </div>
            </div>
          </div>

          <div className="testimonial_section_container_box">
            <div className="testimonial_section_container_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              aperiam nihil laborum neque perspiciatis numquam nisi. Corporis
              eligendi inventore necessitatibus perferendis tempore. Laboriosam
              consequatur cupiditate sit eligendi at, unde autem.
            </div>
            <div className="testimonial_profile_section">
              <div className="testimonial_profile_pic">
                <img src="../img/hs3.jpg" alt="" />
              </div>

              <div>
                <div className="testimonial_profile_name">Aisha Mariam</div>

                <div className="testimonial_profile_description">Parent</div>
              </div>
            </div>
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

      <div className="footer">
        <div className="footer_box">
          <div className="footer_subheader">Contact Us</div>
          <div className="footer_item">
            <div className="footer_item_header">Email</div>
            <div className="footer_item_text">needhelp@Covetors.com</div>
          </div>

          <div className="footer_item">
            <div className="footer_item_header">Phone</div>
            <div className="footer_item_text">666 888 888</div>
          </div>

          <div className="footer_item">
            <div className="footer_item_header">Address</div>
            <div className="footer_item_text">88 road, borklyn street, USA</div>
          </div>
        </div>

        <div className="footer_about_box">
          <div className="footer_logo">
            <img src="img/Logo.png" alt="" />
            Covetors
          </div>
          <div className="footer_item">
            <div className="footer_about_text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </div>
          </div>

          <div className="footer_socials">
            <div className="footer_social_box">
              <i className="fa-brands fa-instagram"></i>
            </div>

            <div className="footer_social_box">
              <i className="fa-brands fa-facebook"></i>
            </div>

            <div className="footer_social_box">
              <i className="fa-brands fa-twitter"></i>
            </div>

            <div className="footer_social_box">
              <i className="fa-brands fa-pinterest"></i>
            </div>
          </div>
        </div>

        <div className="footer_box">
          <div className="footer_utility_subheader">Utility</div>
          <div className="footer_item">
            <div className="footer_utility_text">needhelp@Covetors.com</div>
          </div>

          <div className="footer_item">
            <div className="footer_utility_text">666 888 888</div>
          </div>

          <div className="footer_item">
            <div className="footer_utility_text">
              88 road, Brooklyn street, USA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
