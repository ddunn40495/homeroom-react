import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const StudentTable = (props) => {
  return (
    <Fragment>
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
                  <tbody>
                    <tr>
                      <th scope='row'>Value</th>
                      <td>18,492</td>
                      <td>228</td>
                      <td>350</td>
                      <td>$4,787.64</td>
                      <td>$13.68</td>
                    </tr>
                    {props.kids.map((kid) => (
                      <tr>
                        <th>{kid.student_first_name}</th>
                        <td>{kid.student_email}</td>
                        <td>{kid.student_username}</td>
                      </tr>
                    ))}
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

export default StudentTable;
