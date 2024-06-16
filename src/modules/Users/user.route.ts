import express from 'express'
import { userControllers } from './user.controllar';
import { UserValidations } from './user.validation';
import validationRequest from '../../Middleware/validaedRequest';


const router = express.Router();

router.post(
  "/create-admin",
  validationRequest(UserValidations.createAdminValidations),
  userControllers.createAdmin
);
router.put(
  "/:userId",
  validationRequest(UserValidations.updateUserValidations),
  userControllers.updateUser
);

export const UserRoutes = router;