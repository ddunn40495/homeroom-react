const studentDashboard =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/student"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/student";

const teacherDashboard =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/teacher"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/teacher";

const studentRegister =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/auth/register/student"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/auth/register/student";

const teacherRegister =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/auth/register/teacher"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/auth/register/teacher";

const studentLogin =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/auth/login/student"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/auth/login/student";
const teacherLogin =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/auth/login/teacher"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/auth/login/teacher";

const auth =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/auth/verify"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/auth/verify";

const log =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/log"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/log";

const newCourse =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/teacher/course/new"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/teacher/course/new";
const newClass =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/teacher/class/new"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/teacher/class/new";
const newAssignment =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/assignment/new"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/teacher/assignment/new";

const Courses =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/course/all"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/course/all";

const Classes =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/class/all"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/class/all";
const onlyMyClasses =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/class/me"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/class/me";

const Departments =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/department/all"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/department/all";
const Teachers =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/teacher/all"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/teacher/all";

const Grades =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/grades/all"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/grades/all";

const Students =
  process.env.NODE_ENV === "production"
    ? "https://homeroom-homeroomclass-api.herokuapp.com/api/teacher/students/all"
    : "https://homeroom-homeroomclass-api.herokuapp.com/api/teacher/students/all";
export {
  studentDashboard,
  teacherDashboard,
  studentRegister,
  teacherRegister,
  studentLogin,
  teacherLogin,
  newCourse,
  newClass,
  newAssignment,
  Courses,
  Classes,
  onlyMyClasses,
  Departments,
  Teachers,
  Grades,
  Students,
  auth,
  log,
};
