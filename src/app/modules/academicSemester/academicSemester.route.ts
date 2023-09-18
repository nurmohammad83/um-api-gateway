import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDb);
router.get('/:id', AcademicSemesterController.getByIdFromDb);
router.post('/', AcademicSemesterController.insertIntoDB);
router.delete('/:id', AcademicSemesterController.deleteByIdFromDb);
router.patch('/:id', AcademicSemesterController.updateOneIntoDb);
export const AcademicSemesterRoutes = router;
