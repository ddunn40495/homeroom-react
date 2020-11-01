import React, { useEffect, useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import {
  FormControl,
  FormLabel,
  InputLabel,
  Input,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";

import { toast } from "react-toastify";
import { newCourse, newClass } from "../../apis/url";
import TeacherNav from "../../components/TeacherNav";
import TeacherSideNav from "../../components/TeacherSideNav";
import TeacherHome from "./TeacherHome";

const TeacherClasses = (props) => {
  /* State */

  const [inputs, setInputs] = useState({
    course_name: "",
    department_id: "",
    course_id: "",
    course_instance_period: "",
    teacher_id: "",
  });

  console.log(props.info[0].teacher_id);
  const {
    course_name,
    department_id,
    course_id,
    course_instance_period,
    teacher_id,
  } = inputs;
  const onChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const submitNewCourse = async (event) => {
    event.preventDefault();
    try {
      const body = {
        course_name,
        department_id,
      };

      console.log(course_name);
      console.log(department_id);

      const res = await fetch(newCourse, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await res.json();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const submitNewClass = async (event) => {
    event.preventDefault();
    try {
      const body = {
        course_id,
        course_instance_period,
        teacher_id,
      };

      console.log(course_id);
      console.log(course_instance_period);
      console.log(teacher_id);

      const res = await fetch(newClass, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await res.json();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const logInputs = () => {
    console.log(
      `This is the Course ID that is being submitted on the POST route to make a new Course ======${course_id}============`
    );
    console.log(
      `This is the Period of the school day that is being submitted on the POST route to make a new class ============${course_instance_period}==============`
    );
    console.log(
      `This is Teacher ID that is being submitted on the POST route to make a new class ====================${teacher_id}==============`
    );
    console.log(props.info);
    console.log(props.theTeachers.rows);
    console.log(props.courseList);
  };
  return (
    <Fragment>
      <h1>New Course</h1>
      <div className='row'>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <h4 class='card-title'>
                <a>Teacher Name</a>
              </h4>
              <p class='card-text'>{props.firstname}</p>
              <a href='#' class='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>
        <button onClick={logInputs}>LOG</button>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <form
                onSubmit={submitNewCourse}
                class='text-center border border-light p-5'
              >
                <p class='h4 mb-4'>Make New Course</p>

                <div class='form-row mb-4'>
                  <div class='col'>
                    <input
                      type='text'
                      name='course_name'
                      value={course_name}
                      onChange={(event) => onChange(event)}
                      class='form-control'
                      placeholder='course_name'
                    ></input>
                  </div>
                  <div class='col'>
                    <select
                      name='department_id'
                      type='number'
                      value={department_id}
                      onChange={(event) => onChange(event)}
                      class='form-control'
                      class='mdb-select md-form'
                    >
                      <option value='' disabled selected>
                        Choose Department
                      </option>
                      <option value='1'>Math</option>
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
          <div class='card'>
            <div class='card-body'>
              <form
                onSubmit={submitNewClass}
                class='text-center border border-light p-5'
              >
                <p class='h4 mb-4'>Make New Class</p>

                <div class='form-row mb-4'>
                  <div class='col'>
                    <select
                      name='course_id'
                      type='number'
                      value={course_id}
                      onChange={(event) => onChange(event)}
                      class='form-control'
                      class='mdb-select md-form'
                    >
                      <option value='' disabled selected>
                        Choose Course
                      </option>
                      {props.courseList.map((course) => (
                        <option key={course.course_id} value={course.course_id}>
                          {course.course_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div class='form-row mb-4'>
                  <div class='col'>
                    <select
                      name='teacher_id'
                      type='number'
                      value={teacher_id}
                      onChange={(event) => onChange(event)}
                      class='form-control'
                      class='mdb-select md-form'
                    >
                      <option disabled selected>
                        Choose Teacher
                      </option>
                      {props.theTeachers.rows.map((teacher) => (
                        <option
                          key={teacher.teacher_id}
                          value={teacher.teacher_id}
                        >
                          {teacher.teacher_first_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div class='form-row mb-4'>
                  <div class='col'>
                    <select
                      name='course_instance_period'
                      type='number'
                      value={course_instance_period}
                      onChange={(event) => onChange(event)}
                      class='form-control'
                      class='mdb-select md-form'
                    >
                      <option value='' disabled selected>
                        Choose Period
                      </option>
                      <option value='1'>First Period</option>
                      <option value='2'>Second Period</option>
                      <option value='3'>Third Period</option>
                      <option value='4'>Fourth Period</option>
                      <option value='5'>Fifth Period</option>
                      <option value='6'>Sixth Period</option>
                      <option value='7'>Seventh Period</option>
                    </select>
                  </div>
                </div>
                <button class='btn btn-info my-4 btn-block' type='submit'>
                  Make New Class
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Link to='/login/teacher'> Login</Link>

      <Link to='/'> Home</Link>
    </Fragment>
  );
};

export default TeacherClasses;
