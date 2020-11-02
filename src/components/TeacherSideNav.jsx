import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const TeacherSideNav = (props) => {
  return (
    <Fragment>
      <div
        id='full-screen-example'
        className=' my-side fixed mdb-sidenav --bs-light'
        data-color='dark'
        data-mode='side'
        data-hidden='false'
        data-scroll-container='#scrollContainer'
      >
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
        <div id='scrollContainer'>
          <ul className='sidenav-menu'>
            <li className='sidenav-item'>
              <Link className='sidenav-link' to='/teacher'>
                <i className='fas fa-envelope fa-fw mr-3'></i>Inbox
              </Link>
            </li>
            <li className='sidenav-item'>
              <Link className='sidenav-link' to='/teacher'>
                <i className='fas fa-paper-plane fa-fw mr-3'></i>Outbox
              </Link>
            </li>
            <li className='sidenav-item'>
              <Link className='sidenav-link' to='/teacher/classes'>
                <i className='fas fa-paper-plane fa-fw mr-3'></i>Classes
              </Link>
            </li>
            <li className='sidenav-item'>
              <Link className='sidenav-link' to='/teacher/assignments'>
                <i className='fas fa-paper-plane fa-fw mr-3'></i>Assignments
              </Link>
            </li>
            <li className='sidenav-item'>
              <Link className='sidenav-link' to='/teacher/grades'>
                <i className='fas fa-paper-plane fa-fw mr-3'></i>Grades
              </Link>
            </li>
            <li className='sidenav-item'>
              <Link className='sidenav-link' to='/teacher/students'>
                <i className='fas fa-user fa-fw mr-3'></i>Students
              </Link>
            </li>
          </ul>
          <hr className='m-0' />
          <ul className='sidenav-menu'>
            <li className='sidenav-item'>
              <Link className='sidenav-link' to='/teacher'>
                <i className='fas fa-cogs fa-fw mr-3'></i>Settings
              </Link>
            </li>
            <li className='sidenav-item'>
              <Link className='sidenav-link' to='/teacher'>
                <i className='fas fa-user fa-fw mr-3'></i>Profile
              </Link>
            </li>
            <li className='sidenav-item'>
              <Link className='sidenav-link' to='/teacher/admin'>
                <i className='fas fa-shield-alt fa-fw mr-3'></i>Admin Portal
              </Link>
            </li>
            <li className='sidenav-item'>
              <Link
                className='sidenav-link'
                onClick={(event) => props.logout(event)}
              >
                <i className='fas fa-user-astronaut fa-fw mr-3'></i>Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default TeacherSideNav;
