import "./App.css";
// import CustomButton from "./Components/Button";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="landing_page_main">
      <div className="landing_page">
        <div className="header_nav">
          <div className="logo_box">
            <img src="../img/logo.png" alt="" className="logo" />
          </div>

          {/* Responsive Hamburger */}
          {/* <div className="hamburger">
            <i className="fa-solid fa-bars fa-bounce"></i>

          </div> */}

          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            {!isOpen ? (
              <i className="fa-solid fa-bars fa-bounce"></i>
            ) : (
              <i className="fa-solid fa-xmark fa-bounce"></i>
            )}
          </div>

          {isOpen && (
            <div className="modal">
              <ul>
                <li>Courses</li>
                <li>About Us</li>
                <li>Teachers</li>
                <li>Pricing</li>
                <li>Careers</li>
              </ul>
            </div>
          )}

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

          <div className="get_started_btn v1">Get Started</div>
          {/* <CustomButton
            textColor="#EC884D"
            bgColor="white"
            text="Get Started"
            width="130px"
            padding="20px"
            fontSize="15px"
            fontWeight="bold"
            hoverTextColor="white"
            hoverBgColor="#E47331"
          /> */}
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

              {/* Unlock your child's Potentials */}
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "Unlock your child's Potentials", // initially rendered starting point
                  500,
                  "Unlock your child's Abilities",
                  500,
                  "Unlock your child's Superpowers",
                  500,
                  "Unlock your child's Brilliance",
                  500,
                ]}
                speed={6}
                style={{}}
                className="animation_text"
                repeat={Infinity}
              />
            </div>
            <div className="landing_subtext">
              Learn at your own pace, we have tutors <br />
              that can work with your schedules
            </div>

            <div className="get_started_btn v2">Get Started</div>

            {/* <CustomButton
              textColor="white"
              bgColor="#ec884d"
              text="Get Started"
              width="130px"
              padding="20px"
              fontSize="15px"
              fontWeight="bold"
              hoverTextColor="#ec884d"
              hoverBgColor="white"
            /> */}
          </div>

          <div className="extras">
            <img src="../img/boy.png" alt="" className="extras_img" />
            <img src="../img/girl.png" alt="" className="extras_img" />
          </div>
        </div>
      </div>

      <div className="program_main">
        <div className="program_main_header">Why Choose Us</div>

        <div className="program_container">
          <div className="program_content">
            <div className="program_content_title">Problem Solving</div>
            <div className="program_content_subtext">
              Have questions or need assistance? Our support team is here to
              help. Contact us via email or phone, and we'll get back to you
              promptly.
            </div>
          </div>

          <div className="program_content">
            <div className="program_content_title">Problem Solving</div>
            <div className="program_content_subtext">
              Have questions or need assistance? Our support team is here to
              help. Contact us via email or phone, and we'll get back to you
              promptly.
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
                Covetors Level I introduces the exciting world of programming
                and logical thinking. Students embark on a journey, starting
                with Animation, Games, and Logic using Scratch. They gradually
                transition into an engaging exploration of text-based
                programming concepts.
              </div>
              {/* <div className="courses_list">
                {" "}
                Animation and Games with Scratch
              </div>
              <div className="courses_list"> Logic with Scratch</div>
              <div className="courses_list">
                {" "}
                Intro to Text-based Programming
              </div> */}
            </div>
          </div>

          <div className="course_card">
            <img src="../img/level2.png" alt="" className="course_card_img" />
            <div className="course_title">Covetors Level II</div>
            <div className="course_description">
              <div className="courses_list_container">
                Covetors Level II offers a structured core lineup. It delves
                into coding with Python, deepening students' understanding of
                logical thinking and problem-solving. Courses include
                Programming Fundamentals, Logic, and Modular Programming with
                Python.
              </div>
              {/* <div className="courses_list">
                {" "}
                Programming Fundamentals with Python
              </div>
              <div className="courses_list">Logic with Python</div>
              <div className="courses_list">
                {" "}
                Modular Programming with Python
              </div> */}
            </div>
          </div>

          <div className="course_card">
            <img src="../img/level3.png" alt="" className="course_card_img" />
            <div className="course_title">Covetors Level II</div>
            <div className="course_description">
              <div className="courses_list_container">
                Covetors Level III offers a structured core lineup. It delves
                into coding with Python, deepening students' understanding of
                logical thinking and problem-solving. Courses include
                Programming Fundamentals, Logic, and Modular Programming with
                Python.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="classes_section">
        <div className="class_box_text">
          Our Personal In-Person Classroom encourages
        </div>
        <div className="class_box">
          <div className="class_box_content">
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
      </div>

      <div className="testimonial_section">
        <div className="testimonial_section_header">
          Don't just take our words. <br />
          Over 1000+ parents trust us.
        </div>

        <div className="testimonial_section_container">
          <div className="testimonial_section_container_box skew_one">
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

          <div className="testimonial_section_container_box skew_two">
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

          <div className="testimonial_section_container_box skew_third">
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
            <img src="../img/2.jpg" alt="" className="superstars_box_img" />
            <div className="superstars_tags">
              <img
                src="../img/uk-flag.jpg"
                alt=""
                className="superstars_flag_img"
              />

              <div className="superstars_name"> Evelyn Bridgeton</div>
            </div>
          </div>

          <div className="superstars_box">
            <img src="../img/1.jpg" alt="" className="superstars_box_img" />
            <div className="superstars_tags">
              <img
                src="../img/canada.jpg"
                alt=""
                className="superstars_flag_img"
              />

              <div className="superstars_name"> Evelyn Bridgeton</div>
            </div>
          </div>

          <div className="superstars_box">
            <img src="../img/3.jpg" alt="" className="superstars_box_img" />
            <div className="superstars_tags">
              <img
                src="../img/ng_flag.jpg"
                alt=""
                className="superstars_flag_img"
              />

              <div className="superstars_name"> Evelyn Bridgeton</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer_about_box">
          <div className="footer_logo">
            <img src="img/Logo.png" alt="" />
          </div>
          <div className="footer_item">
            <div className="footer_about_text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </div>
          </div>

          <div className="footer_email_sub">
            <input
              type="email"
              className="footer_email_input"
              placeholder="Subscribe to our newsletter"
            />

            {/* <CustomButton
              textColor="white"
              bgColor="#ec884d"
              text="Subscribe"
              width="100px"
              padding="20px"
              fontSize="12px"
              fontWeight="bold"
              hoverTextColor="#E47331"
              hoverBgColor="white"
            /> */}

            <div className="get_started_btn v2">Get Started</div>
          </div>

          <div className="footer_item_container">
            <div className="footer_item">
              <div className="footer_item_header">Email</div>
              <div className="footer_item_text">needhelp@Covetors.com</div>
            </div>

            <div className="footer_item">
              <div className="footer_item_header">Phone</div>
              <div className="footer_item_text">+234 91 522 522 58</div>
            </div>

            <div className="footer_item">
              <div className="footer_item_header">Address</div>
              <div className="footer_item_text">
                88 road, borklyn street, USA
              </div>
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
              <i className="fa-brands fa-facebook"></i>
            </div>

            <div className="footer_social_box">
              <i className="fa-brands fa-pinterest"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
