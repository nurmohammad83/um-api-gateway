import { NextFunction, Request, Response } from 'express';
import { AuthenticationService } from './auth.service';
import sendResponse from '../../../shared/response';
import config from '../../../config';
import httpStatus from 'http-status';
const logInUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.logInUser(req);
    const { refreshToken, ...others } = result.data;
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', refreshToken, cookieOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User log in Successfully!',
      data: others
    });
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.refreshToken(req);

    const { refreshToken, ...others } = result.data;
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', refreshToken, cookieOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'New refreshToken generated',
      data: others
    });
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.changePassword(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AuthenticationController = { logInUser, refreshToken, changePassword };
