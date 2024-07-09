import express from 'express'
import { userControllers } from './user.controllar';
import { UserValidations } from './user.validation';
import validationRequest from '../../Middleware/validaedRequest';
import { USER_Role } from './user.constant';
import { auth } from '../../Middleware/auth';


const router = express.Router();

router.post(
  "/create-admin",
  auth(USER_Role.ADMIN, USER_Role.SUPER_ADMIN),
  validationRequest(UserValidations.createAdminValidations),
  userControllers.createAdmin
);
router.put(
  "/:userId",
  auth(USER_Role.ADMIN, USER_Role.SUPER_ADMIN),
  validationRequest(UserValidations.updateUserValidations),
  userControllers.updateUser
);

router.get('/', userControllers.getAllUserDb)


export const UserRoutes = router;