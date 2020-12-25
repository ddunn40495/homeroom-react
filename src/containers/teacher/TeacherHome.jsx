import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";
import { Students } from "../../apis/url";
import StudentTable from "../../components/tables/StudentTable";
import TeacherDashTable from "../../components/tables/TeacherDashTable";

const TeacherHome = (props) => {
  const [allStudents, setAllStudents] = useState("");
  const getStudents = async () => {
    try {
      const res2 = await fetch(Students, {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const response2 = await res2.json();
      console.log(response2.rows);

      console.log(Students);
      setAllStudents(response2.rows);
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };

  useEffect(() => {
    getStudents();
    console.log(props.classList);
  }, []);

  return (
    <Fragment>
      <main>
        <div class='main-div'>
          <div class='row main-row'>
            <div class='col s12 m6' id='d1'>
              {/* Card-Start */}
              <div class='card phone-card-teach-dash'>
                <div class='card-content '>
                  <span class='card-title'>Pretty Time and Weather Div</span>
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
                <div class='card-action'></div>
              </div>
              {/* Card -End */}
            </div>
            <div class='col s12 m6' id='d2'>
              {/* Card-Start */}
              <div class='card phone-card-teach-dash'>
                <div class='card-content '>
                  <span class='card-title'>Notifications</span>
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
                <div class='card-action'></div>
              </div>
              {/* Card -End */}
            </div>
            <div class='col s12 m6' id='d3'>
              {/* Card-Start */}
              <div class='card phone-card-teach-dash'>
                <div class='card-content '>
                  <span class='card-title'>
                    Table of students with good grades
                  </span>
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
                <div class='card-action'></div>
              </div>
              {/* Card -End */}
            </div>
            <div class='col s12 m6' id='d4'>
              {/* Card-Start */}
              <div class='card phone-card-teach-dash'>
                <div class='card-content '>
                  <span class='card-title'>
                    Table of students with most missed assignments
                  </span>
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
                <div class='card-action'></div>
              </div>
              {/* Card -End */}
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default TeacherHome;
