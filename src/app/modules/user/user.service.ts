import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { IFileUpload } from '../../../interfaces/fileUpload';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createStudent = async (req: Request) => {
  const file = req.file as IFileUpload;
  const uploadImage = await FileUploadHelper.uploadToCloudinary(file);
  if (uploadImage) {
    req.body.profileImage = uploadImage.secure_url;
  }

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  const academicDepartmentData = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );

  if (academicDepartmentData.data && Array.isArray(academicDepartmentData.data)) {
    req.body.student.academicDepartment = academicDepartmentData?.data[0]?.id;
  }

  const academicFacultyData = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );

  if (academicFacultyData.data && Array.isArray(academicFacultyData.data)) {
    req.body.student.academicFaculty = academicFacultyData?.data[0]?.id;
  }

  const academicSemesterData = await AuthService.get(
    `/academic-semesters?syncId=${academicSemester}`
  );

  if (academicSemesterData.data && Array.isArray(academicSemesterData.data)) {
    req.body.student.academicSemester = academicSemesterData?.data[0]?.id;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const UserService = { createStudent };
