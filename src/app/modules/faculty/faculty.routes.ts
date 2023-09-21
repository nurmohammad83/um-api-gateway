import express from 'express';
import { FacultyController } from './faculty.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { facultyValidation } from './faculty.validation';

const router = express.Router();

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(facultyValidation.updateFacultyZodSchema),
  FacultyController.updateOneIntoDb
);

export const FacultyRoutes = router;
