import { catchAsync } from "../Utils/CatchAsync";
import { UserServices } from "./user.service";



const createAdmin = catchAsync(async (req, res) => {
    const result = await UserServices.createAdminIntoDB(req.body);
  
    res.status(200).json({
      success: true,
      message: "Admin is created successfully!",
      data: result,
    });
  });
  
  const updateUser = catchAsync(async (req, res) => {
    const { userId } = req.params;
    const result = await UserServices.updateUser(userId, req.body);
  
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  });

  const getAllUserDb = catchAsync(async (req, res) => {
    const result = await UserServices.getAllUser();
    res.status(200).json({
      success: true,
      message: "User Retrived successfully!",
      data: result,
    });
  });



  
  export const userControllers = {
    createAdmin,
    updateUser,
    getAllUserDb
  };