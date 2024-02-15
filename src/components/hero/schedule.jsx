import "./schedule.css";
import React, { useEffect } from "react";

const schedule = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timelineAnimation");
          document
            .querySelectorAll(".container, .container-mobile")
            .forEach((container) =>
              container.classList.add("timelineAnimationContainer")
            );
        }
      });
    };

    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll("#timeline");
    divs.forEach((div) => observer.observe(div));
  });
  return (
    <React.Fragment>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule">
          <div className="schedule-title">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline" id="timeline">
            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  Aug
                  <div>
                    <div> 17</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Registration opens</h2>
              
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Abstract Submission</h2>
              <h1 className="date">
                <div>
                  Aug
                  <div>
                    <div>17</div> <div>th</div>
                  </div>
                  -Aug
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h1 className="date">
                <div>
                  Aug
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <h2 className="container-title">Registration Closes</h2>
              

              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Finalists Announcements</h2>
              <h1 className="date">
                <div>
                  Sep
                  <div>
                    <div>1</div> <div>st</div>
                  </div>
                </div>
              </h1>
              
              <span className="circle"></span>
            </div>

            <div className="container ">
              <h2 className="container-title">Hackathon Finale</h2> <br />
              <h1 className="date">
                <div>
                  sep
                  <div>
                    <div>8</div> <div>th</div>
                  </div>
                  - sep
                  <div>
                    <div>9</div> <div>th</div>
                  </div>
                </div>
              </h1>
              
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Award Ceremony</h2>
              <h1 className="date">
                <div>
                  sep
                  <div>
                    <div>9</div> <div>th</div>
                  </div>
                </div>
              </h1>
              
              <span className="circle"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule-mobile">
          <div className="schedule-title-mobile">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline-mobile" id="timeline">
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Registration opens</h2>{" "}
              <h2 className="date-mobile">
                <div>
                  Aug
                  <div>
                    <div>17</div> <div>th</div>
                  </div>
                </div>
              </h2>
              
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Abstract Submission</h2>
              <h1 className="date-mobile">
                {" "}
                <div>
                  Aug
                  <div>
                    <div>17</div> <div>th</div>
                  </div>
                  -Aug
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
             
              <span className="circle-mobile "></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Finalists Annoncements</h2>
              <h1 className="date-mobile">
                <div>
                  Sep
                  <div>
                    <div>1</div> <div>st</div>
                  </div>
                </div>
              </h1>
              
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile">
              <h2 className="container-title-mobile">Registration Closes</h2>
              <h1 className="date-mobile">
                <div>
                  Aug
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Hackathon Finale</h2>{" "}
              <br />
              <h1 className="date-mobile">
                <div>
                  sep
                  <div>
                    <div>8</div> <div>th</div>
                  </div>
                  - sep
                  <div>
                    <div>9</div> <div>th</div>
                  </div>
                </div>
              </h1>
              
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Award Ceremony</h2>
              <h1 className="date-mobile">
                <div>
                  sep
                  <div>
                    <div>9</div> <div>th</div>
                  </div>
                </div>
              </h1>
             
              <span className="circle-mobile"></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default schedule;
