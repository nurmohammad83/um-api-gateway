import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.get('/', AcademicFacultyController.getAllFromDb);
router.get('/:id', AcademicFacultyController.getByIdFromDb);
router.post('/', AcademicFacultyController.insertIntoDB);
router.delete('/:id', AcademicFacultyController.deleteByIdFromDb);
router.patch('/:id', AcademicFacultyController.updateOneIntoDb);

export const AcademicFacultyRoutes = router;
