import { Link } from "react-router-dom";
import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";
import { newAssignment } from "../../apis/url";
const TeacherAssignments = (props) => {
  /* State */
  const [allClasses, setAllClasses] = useState(props.classList);
  const [myClasses, setMyClasses] = useState(props.myclassList);

  const [inputs, setInputs] = useState({
    assignment_name: "",
    course_instance_id: "",
    assignment_type: "",
    kids: [],
  });

  const { assignment_name, course_instance_id, assignment_type, kids } = inputs;

  const onChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const makeAssignment = async (event) => {
    event.preventDefault();
    try {
      const body = {
        assignment_name,
        course_instance_id,
        assignment_type,
      };

      console.log(assignment_name);
      console.log(course_instance_id);
      console.log(assignment_type);

      const res = await fetch(newAssignment, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await res.json();
      console.log(response);
      console.log(newAssignment);
    } catch (err) {
      console.log(err);
    }
  };

  const logInputs = () => {
    console.log(assignment_name);
    console.log(course_instance_id);
    console.log(assignment_type);
    console.log(props.classList);
  };
  return (
    <Fragment>
      <h1>Assignments</h1>
      <div className='row'>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <h4 class='card-title'>
                <a>Welcome {props.info.teacher_first_name} </a>
              </h4>
            </div>
          </div>
        </div>
        <button onClick={logInputs}>LOG</button>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <form
                onSubmit={makeAssignment}
                class='text-center border border-light p-5'
              >
                <p class='h4 mb-4'>Make New Assignment</p>

                <div class='form-row mb-4'>
                  <div class='col'>
                    <input
                      type='text'
                      name='assignment_name'
                      value={assignment_name}
                      onChange={(event) => onChange(event)}
                      class='form-control'
                      placeholder='assignment_name'
                    ></input>
                  </div>
                  <div class='col'>
                    <select
                      name='course_instance_id'
                      type='number'
                      value={course_instance_id}
                      onChange={(event) => onChange(event)}
                      class='form-control'
                      class='mdb-select md-form'
                    >
                      <option value='' disabled selected>
                        Which Class
                      </option>
                      {props.classList.map((myClass) => (
                        <option
                          key={myClass.course_instance_id}
                          value={myClass.course_instance_id}
                        >
                          {myClass.course_instance_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class='col'>
                    <select
                      name='assignment_type'
                      type='text'
                      value={assignment_type}
                      onChange={(event) => onChange(event)}
                      class='form-control'
                      class='mdb-select md-form'
                    >
                      <option value='' disabled selected>
                        Choose Type
                      </option>
                      <option value='homework'>Homework</option>
                      <option value='reading'>Reading</option>
                      <option value='study'>Study</option>
                      <option value='quiz'>Quiz</option>
                      <option value='test'>Test</option>
                      <option value='project'>Project</option>
                      <option value='extra-credit'>Extra-Credit</option>
                      <option value='lab'>Lab</option>
                    </select>
                  </div>
                </div>

                <button class='btn btn-info my-4 btn-block' type='submit'>
                  Make New Course
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
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
                      <th>{props.classList[0].course_name}</th>
                      <td>{props.classList[0].course_instance_name}</td>
                      <td>{props.classList[0].course_instance_period}</td>
                      <td>{props.classList[0].department_name}</td>

                      <td>{props.classList[0].teacher_first_name}</td>
                      <td>{props.classList[0].teacher_last_name}</td>
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

export default TeacherAssignments;
