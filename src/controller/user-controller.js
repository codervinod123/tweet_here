import { UserService } from "../services/user-service.js";
import { uploadOnCloudinary } from "../utils/upload-cloudinary.js";

const userService = new UserService();

const createUser = async (req, res) => {
  try {
    const { email, password, name, profilePic } = req.body;

    const response = await userService.createUser(
      email,
      password,
      name,
      profilePic,
    );
    return res.status(200).json({
      data: response,
      Message: "User Created Successfully",
      scuccess: true,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      Message: "User can not Created Successfully",
      cuccess: false,
      error: { error },
    });
  }
};

const updateProfilePic = async (req, res) => {
  try {

    console.log(req.body);
    const imageURI = await uploadOnCloudinary(req.file.path, "usersProfilePics");
    req.body = { ...req.body, profilePic: imageURI.url };
    console.log(req.body);

    const response = await userService.updateUserProfilepic(
      req.body.id,
      req.body.profilePic,
      req.body.name,
      req.body.bio,
      req.body.location,
    );
    return res.status(200).json({
      data: response,
      Message: "Profilepic updated",
      scuccess: true,
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      Message: "Profile Pic can not Update jjj",
      scuccess: false,
      error: { error },
    });
  }
};

const readUser = async (req, res) => {
  try {
    const response = await userService.readUser(req.query.userId);
    return res.status(200).json({
      data: response,
      Message: "User fetched Successfully",
      scuccess: true,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      Message: "Tweet can not fetched Successfully",
      cuccess: false,
      error: { error },
    });
  }
};

const removeUser = async (req, res) => {
  try {
    const response = await userService.removeUser(req.query.userId);
    return res.status(200).json({
      data: response,
      Message: "User removed Successfully",
      scuccess: true,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      Message: "User can not deleted Successfully",
      cuccess: false,
      error: { error },
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await userService.authenticateUser(email, password);
    return res.status(200).json({
      token: response,
      Message: "User authenticated successfully",
      scuccess: true,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      Message: "User can not authenticated successfully  controller",
      scuccess: false,
      error: error,
    });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const response = await userService.getByEmail(req.body.email);
    return res.status(200).json({
      data: response,
      Message: "User fetched successfully",
      scuccess: true,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      Message: "User can not getched successfully with help of email",
      scuccess: true,
      error: error,
    });
  }
};

export {
  createUser,
  readUser,
  removeUser,
  loginUser,
  getUserByEmail,
  updateProfilePic,
};
