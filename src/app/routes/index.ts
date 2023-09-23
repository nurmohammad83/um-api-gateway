import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { UserRoutes } from '../modules/user/user.route';
import { AuthenticationRoutes } from '../modules/auth/auth.routes';
import { adminRoutes } from '../modules/admin/admin.routes';
import { facultyRoutes } from '../modules/faculty/faculty.routes';
import { managementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route';
import { buildingRoutes } from '../modules/building/building.route';
import { roomRoutes } from '../modules/room/room.route';
import { courseRoutes } from '../modules/course/course.route';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.route';
import { offeredCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.route';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { studentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.route';
import { studentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.route';
import { studentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/admins',
    routes: adminRoutes
  },
  {
    path: '/faculties',
    routes: facultyRoutes
  },
  {
    path: '/auth',
    routes: AuthenticationRoutes
  },
  {
    path: '/users',
    routes: UserRoutes
  },
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/buildings',
    routes: buildingRoutes
  },
  {
    path: '/rooms',
    routes: roomRoutes
  },
  {
    path: '/courses',
    routes: courseRoutes
  },
  {
    path: '/semester-registrations',
    routes: semesterRegistrationRoutes
  },
  {
    path: '/offered-courses',
    routes: offeredCourseRoutes
  },
  {
    path: '/offered-course-sections',
    routes: offeredCourseSectionRoutes
  },
  {
    path: '/offered-course-class-schedules',
    routes: offeredCourseClassScheduleRoutes
  },
  {
    path: '/student-enrolled-courses',
    routes: studentEnrolledCourseRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    routes: studentEnrolledCourseMarkRoutes
  },
  {
    path: '/student-semester-payments',
    routes: studentSemesterPaymentRoutes
  },
  {
    path: '/management-departments',
    routes: managementDepartmentRoutes
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
