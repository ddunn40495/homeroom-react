import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import GradeTable from "../../components/tables/GradeTable";
import { Grades, Classes, Students } from "../../apis/url";
const TeacherGrades = (props) => {
  const [allClasses, setAllClasses] = useState(props.classList);
  const [allStudents, setAllStudents] = useState("");
  const [allGrades, setAllGrades] = useState("");
  const getGrades = async () => {
    try {
      const res = await fetch(Grades, {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const response = await res.json();
      console.log(response.rows);
      console.log(response);
      console.log(Grades);
      setAllGrades(response.rows);

      const res2 = await fetch(Students, {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const response2 = await res2.json();
      console.log(response2.rows);
      console.log(response2);
      console.log(Students);
      console.log(allGrades);
      setAllStudents(response2.rows);
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };
  const logInputs = () => {
    console.log(allGrades);
  };
  useEffect(() => {
    getGrades();
  }, []);

  return (
    <Fragment>
      <div className='row'>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <select class='select'>
                <option value='1'>Alegbra-1</option>
                <option value='2'>Algebra-2</option>
              </select>
              <label class='form-label select-label'>Classes</label>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div class='card'>
            <div class='card-header text-center py-3 bg-light border-0'>
              <strong>
                Students Grades
                <button onClick={logInputs}> log</button>
              </strong>
            </div>
            <div class='card-body'>
              <div class='table-responsive'>
                <table class='table table-hover text-nowrap'>
                  <thead>
                    <tr>
                      <th scope='col'></th>
                      <th scope='col'>Class Average</th>
                      <th scope='col'>Incomplete Assignments</th>
                      <th scope='col'>GPA</th>
                      <th scope='col'>All Classes Average</th>
                      <th scope='col'>Avg. Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                      <th>
                        {allGrades.student_first_name[0]}{" "}
                        {allGrades.student_last_name[0]}
                      </th>

                      <td>{allGrades.assignment_name[0]}</td>
                      <td>{allGrades.assignment_instance_grade[0]}</td>
                      <td>{allGrades.assignment_instance_completed[0]}</td>
                    </tr>
                    <tr>
                      <th>
                        {allGrades.student_first_name[1]}{" "}
                        {allGrades.student_last_name[1]}
                      </th>

                      <td>{allGrades.assignment_name[1]}</td>
                      <td>{allGrades.assignment_instance_grade[1]}</td>
                      <td>{allGrades.assignment_instance_completed[1]}</td>
                    </tr>
                    <tr>
                      <th>
                        {allGrades.student_first_name[2]}{" "}
                        {allGrades.student_last_name[2]}
                      </th>

                      <td>{allGrades.assignment_name[2]}</td>
                      <td>{allGrades.assignment_instance_grade[2]}</td>
                      <td>{allGrades.assignment_instance_completed[2]}</td>
                    </tr>
                    <tr>
                      <th>
                        {allGrades.student_first_name[3]}{" "}
                        {allGrades.student_last_name[3]}
                      </th>

                      <td>{allGrades.assignment_name[3]}</td>
                      <td>{allGrades.assignment_instance_grade[3]}</td>
                      <td>{allGrades.assignment_instance_completed[3]}</td>
                    </tr>
                    <tr>
                      <th>
                        {allGrades.student_first_name[4]}{" "}
                        {allGrades.student_last_name[4]}
                      </th>

                      <td>{allGrades.assignment_name[4]}</td>
                      <td>{allGrades.assignment_instance_grade[4]}</td>
                      <td>{allGrades.assignment_instance_completed[4]}</td>
                    </tr> */}

                    <tr>
                      <th scope='row'>Absolute change</th>
                      <td>
                        <span class='text-danger'>
                          <i class='fas fa-caret-down mr-1'></i>
                          <span>-17,654</span>
                        </span>
                      </td>
                      <td>
                        <span class='text-success'>
                          <i class='fas fa-caret-up mr-1'></i>
                          <span>28</span>
                        </span>
                      </td>
                      <td>
                        <span class='text-success'>
                          <i class='fas fa-caret-up mr-1'></i>
                          <span>111</span>
                        </span>
                      </td>
                      <td>
                        <span class='text-success'>
                          <i class='fas fa-caret-up mr-1'></i>
                          <span>$1,092.72</span>
                        </span>
                      </td>
                      <td>
                        <span class='text-danger'>
                          <i class='fas fa-caret-down mr-1'></i>
                          <span>$-1.78</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TeacherGrades;
