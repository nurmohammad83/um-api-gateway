import { CoreService as HttpService } from '../../../shared/axios';
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicSemesterService } from './academicSemester.service';
const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
export const AcademicSemesterController = {
  insertIntoDB
};
