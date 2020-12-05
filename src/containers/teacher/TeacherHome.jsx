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
              Pretty Date and Time and Weather Div
            </div>
            <div class='col s12 m6' id='d2'>
              Notifications
            </div>
            <div class='col s12 m6' id='d3'>
              Table of students with good grades
            </div>
            <div class='col s12 m6' id='d4'>
              Table of students with most missed assignments
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default TeacherHome;
