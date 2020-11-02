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
      <div className='row'>
        <div className='col home-top-row'>
          <div class='card'>
            <div class='card-body'>
              <h4 class='card-title'>
                <a>{props.myInfo.teacher_first_name}</a>
              </h4>
              <p class='card-text'>{props.firstname}</p>
              <a href='#' class='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>
        <div className='col home-top-row'>
          <div class='card'>
            <div class='card-body'>
              <h4 class='card-title'>
                <a>Card title</a>
              </h4>
              <p class='card-text'>
                PICK A FRAMEWORK SO THE DIVS WILL WORK!!!!!!!!!!!!!!
              </p>
              <a href='#' class='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col home-bottom-row'>
          <div className='row'>
            <div className='col'>
              <div class='card'>
                <div class='card-body'>
                  <select class='select'></select>
                  <label class='form-label select-label'></label>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div class='card'>
                <div class='card-header text-center py-3 bg-light border-0'>
                  <strong>Classes</strong>
                </div>
                <div class='card-body'>
                  <div class='table-responsive'>
                    <table class='table table-hover text-nowrap'>
                      <thead>
                        <tr>
                          <th scope='col'></th>
                          <th scope='col'>Course Name</th>
                          <th scope='col'>Class name</th>

                          <th scope='col'>Subject</th>
                          <th scope='col'>Teacher</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {/* <th>{allStudents[0].student_first_name}</th>
                          <td>{allStudents[0].student_email}</td>
                          <td>{allStudents[0].student_user_name}</td>
                          <td>{allStudents[0].student_grade_level}</td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col home-bottom-row'></div>
      </div>
    </Fragment>
  );
};

export default TeacherHome;
