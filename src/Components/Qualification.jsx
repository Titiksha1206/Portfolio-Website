import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button  qualification__active button--flex"
                  : "qualification__button  button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i class="bx bxs-graduation qualification__cap"></i>
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button  qualification__active button--flex"
                  : "qualification__button  button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i class="bx bx-briefcase-alt-2 qualification__cap"></i>
              Experience
            </div>
          </div>

          <div className="qualification__section">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div className="move__right">
                  <h3 className="qualification__title">BTech CSE</h3>
                  <span className="qualification__subtitle">
                    DIT University, Dehradun
                  </span>
                  <div className="qualification__subper">CGPA : 8.06</div>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Class-XII</h3>
                  <span className="qualification__subtitle">
                    Central Academy Sr Secondary School
                  </span>
                  <div className="qualification__subtitle">Board : CBSE</div>
                  <div className="qualification__subper">
                    Percentage : 82.4%
                  </div>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i> 2020 - 2021
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Class-X</h3>
                  <span className="qualification__subtitle">
                    Step By Step Public School
                  </span>
                  <div className="qualification__subtitle">Board : CBSE</div>
                  <div className="qualification__subper">
                    Percentage : 90.2%
                  </div>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt">2018 - 2019</i>
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Full Stack Web Development Intern
                  </h3>
                  <span className="qualification__subtitles">
                    Bharat Intern
                  </span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt">
                      {" "}
                      December 10, 2023 - January 10, 2024
                    </i>
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Web Development and Designing
                  </h3>
                  <span className="qualification__subtitles">
                    Oasis Infobyte
                  </span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt">
                      {" "}
                      1st Dec 2023 - 15th Jan 2024{" "}
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="separator"></div>
    </>
  );
};

export default Qualification;
