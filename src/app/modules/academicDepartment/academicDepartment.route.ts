import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.get('/', AcademicDepartmentController.getAllFromDb);
router.get('/:id', AcademicDepartmentController.getByIdFromDb);
router.post('/', AcademicDepartmentController.insertIntoDB);
router.delete('/:id', AcademicDepartmentController.deleteByIdFromDb);
router.patch('/:id', AcademicDepartmentController.updateOneIntoDb);

export const AcademicDepartmentRoutes = router;
