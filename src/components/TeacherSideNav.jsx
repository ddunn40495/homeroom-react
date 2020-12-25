import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const TeacherSideNav = (props) => {
  return (
    <Fragment>
      <header>
        <ul id='slide-out' class='sidenav sidenav-fixed'>
          <div className='mt-4'>
            <div id='header-content' className='pl-3'>
              <h4>
                <Link to='/teacher'>
                  <span>
                    {props.myInfo.teacher_first_name}{" "}
                    {props.myInfo.teacher_last_name}
                  </span>
                </Link>
              </h4>
              <p>{props.myInfo.teacher_email}</p>
            </div>
            <hr className='mb-0' />
          </div>
          <li>
            <Link to='/teacher'>Messages</Link>
          </li>
          <li>
            <Link to='/teacher/classes'>Classes</Link>
          </li>
          <li>
            <Link to='/teacher/assignments'>Assignments</Link>
          </li>
          <li>
            <Link to='/teacher/grades'>Grades</Link>
          </li>
          <li>
            <Link to='/teacher/students'>Students</Link>
          </li>
          <hr className='mb-0' />
          <li>
            <Link to='/teacher'>Settings</Link>
          </li>
          <li>
            <Link to='/teacher'>Profile</Link>
          </li>
          <li>
            <Link to='/teacher/admin'>Admin Portal</Link>
          </li>
          <li>
            <Link onClick={(event) => props.logout(event)}>Log Out</Link>
          </li>
        </ul>
        {/* <a >
          <i class='material-icons'>menu</i>
        </a> */}
        <button data-target='slide-out' class='sidenav-trigger'></button>
      </header>
    </Fragment>
  );
};

export default TeacherSideNav;
