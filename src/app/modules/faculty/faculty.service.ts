import { Request } from 'express';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const updateOneIntoDb = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.patch(`/faculties/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const FacultyService = { updateOneIntoDb };
