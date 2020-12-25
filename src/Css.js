import React, { Fragment, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import { auth } from "./apis/url";
import "./App.css";
import $ from "jquery";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Testdb from "./containers/Test";

/* CSS Dependencies */
import * as mdb from "mdb-ui-kit";
/* Student Components */
import StudentLogin from "./containers/user_authentication/StudentLogin";
import StudentDash from "./containers/student/StudentDash";
import NewStudent from "./containers/user_authentication/NewStudent";

/* Teacher Components */
import TeacherLogin from "./containers/user_authentication/TeacherLogin";
import TeacherDash from "./containers/teacher/TeacherDash";
import NewTeacher from "./containers/user_authentication/NewTeacher";

/* Home Component */
import Home from "./containers/splash/Home";

/* Main App Component */
function App() {
  

  return (
    <Fragment>
      <Router>
        <Switch>
   
          <Route
            exact
            path='/teacher'
            render={() =>
             
                <TeacherDash
                />
            
            }
          />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
