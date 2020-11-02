import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";
import { Students } from "../../apis/url";

const TeacherStudents = (props) => {
  const [allStudents, setAllStudents] = useState("");
  const getStudents = async () => {
    try {
      const res2 = await fetch(Students, {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const response2 = await res2.json();
      setAllStudents(response2.rows);
      console.log(response2.rows);

      console.log(Students);
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };

  const logit = () => {
    console.log(allStudents);
  };

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <Fragment>
      <div className='row'>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <h4 class='card-title'>{props.myInfo.teacher_first_name}</h4>
            </div>
          </div>
        </div>

        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <h4 class='card-title'>
                <a>PROPS STILl WONT WORK ASK MATTT</a>
              </h4>
              <p class='card-text'>
                <button onClick={logit}>log</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='row'>
            <div className='col'>
              <div class='card'>
                <div class='card-body'>
                  <select class='select'>
                    <option value='freshman'>Freshman</option>
                    <option value='sophomore'>Sophomore</option>
                    <option value='junior'>Junior</option>
                    <option value='senior'>Senior</option>
                  </select>
                  <label class='form-label select-label'>Grade</label>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div class='card'>
                <div class='card-header text-center py-3 bg-light border-0'>
                  <strong>Student Roster</strong>
                </div>
                <div class='card-body'>
                  <div class='table-responsive'>
                    <table class='table table-hover text-nowrap'>
                      <thead>
                        <tr>
                          <th scope='col'></th>
                          <th scope='col'>Email</th>
                          <th scope='col'>Username</th>
                          <th scope='col'>GPA</th>
                          <th scope='col'>All Classes Average</th>
                        </tr>
                      </thead>

                      {/*
                        {allStudents.map((kid) => (
                          <tr>
                            <th>{kid.student_first_name}</th>
                            <td>{kid.student_email}</td>
                            <td>{kid.student_username}</td>
                          </tr>
                        ))}
                      </tbody> */}
                      {/* <tbody>
                        {allStudents.map((kid) => (
                          <tr>
                            <th>{kid.student_first_name}</th>
                            <td>{kid.student_email}</td>
                            <td>{kid.student_username}</td>
                          </tr>
                        ))}
                     */}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TeacherStudents;
