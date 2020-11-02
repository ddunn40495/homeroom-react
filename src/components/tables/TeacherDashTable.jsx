import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const TeacherDashTable = (props) => {
  useEffect(() => {
    console.log(props.allclasses);
  }, []);

  return (
    <Fragment>
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
              <strong>Students Grades</strong>
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
                  <tbody>
                    <tr>
                      <th scope='row'></th>
                      <td>18,492</td>
                      <td>228</td>
                      <td>350</td>
                      <td>$4,787.64</td>
                      <td>$13.68</td>
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

export default TeacherDashTable;
