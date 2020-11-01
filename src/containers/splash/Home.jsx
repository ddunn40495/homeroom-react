import React, { Fragment, useEffect } from "react";
import { log } from "./../../apis/url";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import StudentLogin from "../user_authentication/StudentLogin";
import TeacherLogin from "../user_authentication/TeacherLogin";
const Home = () => {
  const consoleLog = async () => {
    try {
      const res = await fetch(log, {
        method: "POST",
        headers: { token: localStorage.token },
      });

      const response = await res.json();
      console.log(response);
      console.log(log);
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };

  useEffect(() => {
    consoleLog();
  }, []);
  return (
    <Fragment>
      <div id='intro'>
        <div className='mask'>
          <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row align-items-center'>
              <div className='col-md-6 my-5'>
                <h1 className='mb-5'>Homeroom</h1>
                <p className='lead mb-5'>
                  Access Your Grades From Anywhere <br></br>
                  See All TeacherAssignments<br></br>
                  Designed To Fit Around Your Busy Life<br></br>
                </p>
                <Link to='/login/student'>
                  <button type='button' className='btn btn-primary btn-lg mr-1'>
                    Students
                  </button>
                </Link>
                <Link to='/login/teacher'>
                  <button type='button' className='btn btn-primary btn-lg ml-1'>
                    Teachers
                  </button>
                </Link>
              </div>
              <div className='col-md-6'>
                <img
                  src='https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
                  alt='lol'
                  className='img-fluid'
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
