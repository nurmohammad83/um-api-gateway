import { CoreService } from '../../../shared/axios';

const insertIntoDB = async (req: any) => {
  const response = await CoreService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  insertIntoDB
};
