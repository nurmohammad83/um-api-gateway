import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { UserRoutes } from '../modules/user/user.route';
import { AuthenticationRoutes } from '../modules/auth/auth.routes';
import { FacultyRoutes } from '../modules/faculty/faculty.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/faculties',
    routes: FacultyRoutes
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
    path: '/academic-faculties',
    routes: AcademicFacultyRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
