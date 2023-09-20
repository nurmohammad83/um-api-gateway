import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { IFileUpload } from '../../../interfaces/fileUpload';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request) => {
  const file = req.file as IFileUpload;
  console.log(file);
  const uploadImage = await FileUploadHelper.uploadToCloudinary(file);
  if (uploadImage) {
    req.body.profileImage = uploadImage.secure_url;
  }

  const { academicDepartment } = req.body;
  const academicDepartmentData = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );
  console.log(academicDepartmentData);
};

export const UserService = { createStudent };
