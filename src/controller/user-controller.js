import { UserService } from "../services/index.js";
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
    });
  } catch (error) {
    return res.status(500).json({
      Message: "User can not Created Successfully#",
      success: false,
      error: error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await userService.authenticateUser(email, password);
    return res.status(200).json({
      data: response,
      Message: "User authenticated successfully",
      scuccess: true,
    });
  } catch (error) {
    return res.status(500).json({
      Message: "User can not authenticated successfully  controller",
      scuccess: false,
      error: error,
    });
  }
};

const currentLoginUser = async (req, res) => {
  try {
    const response = await userService.currentLoginUser(req.headers.userid);
    return res.status(200).json({
      data: response,
      Message: "User fetched Successfully",
      scuccess: true,
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Tweet can not fetched Successfully",
      scuccess: false,
      error: { error },
    });
  }
};

const searchUser = async (req, res) => {
  try {
    const searchText = req.query.searchquery;
    const response = await userService.searchUser(searchText);
    return res.status(200).json({
      message: "user get successfully",
      users: response,
    });
  } catch (error) {
    return res.status(200).json({
      message: "user can not get successfully",
      error: error,
    });
  }
};

const updateProfilePic = async (req, res) => {
  try {
    const imageURI = await uploadOnCloudinary(
      req.file.path,
      "usersProfilePics",
    );
    const imageTransForm = `https://res.cloudinary.com/prajapatiautomobiles/image/upload/c_thumb,g_face,h_200,w_200/r_max/f_auto/v${imageURI.version}/${imageURI.public_id}`;
    req.body = { ...req.body, profilePic: imageTransForm };
    const response = await userService.updateUserProfilepic(
      req.headers.userid,
      req.body.profilePic,
      req.body.name,
      req.body.bio,
      req.body.location,
    );
    return res.status(200).json({
      data: response,
      Message: "Profilepic updated",
      scuccess: true,
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Profile Pic can not Update",
      scuccess: false,
      error: { error },
    });
  }
};

const readUser = async (req, res) => {
  try {
    const response = await userService.readUser(req.headers.userid);
    return res.status(200).json({
      data: response,
      Message: "User fetched Successfully",
      scuccess: true,
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Tweet can not fetched Successfully",
      scuccess: false,
      error: { error },
    });
  }
};


// const loginUser = async (req, res) => {
//   try {
//     const response = await userService.loginUser(req.headers.userid);
//     return res.status(200).json({
//       data: response,
//       Message: "User fetched Successfully",
//       scuccess: true,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       Message: "Tweet can not fetched Successfully",
//       scuccess: false,
//       error: { error },
//     });
//   }
// };



const removeUser = async (req, res) => {
  try {
    const response = await userService.removeUser(req.params.userId);
    return res.status(200).json({
      token: response,
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
      scuccess: false,
      error: error,
    });
  }
};

const follow = async (req, res) => {
  try {
    const response = await userService.follow(
      req.headers.userid,
      req.headers.followingid,
    );
    return res.status(200).json({
      data: response,
      Message: "Followed successfully",
      scuccess: true,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      Message: "Unable to follow",
      scuccess: false,
      error: error,
    });
  }
};

const getFriends = async (req, res) => {
  try {
    const response = await userService.getFriends(req.query.user);
    return res.status(200).json({
      data: response,
      Message: "find all friend successfully",
      scuccess: true,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      Message: "Unable to find all friends",
      scuccess: false,
      error: error,
    });
  }
};

export {
  createUser,
  readUser,
  searchUser,
  removeUser,
  loginUser,
  currentLoginUser,
  getUserByEmail,
  updateProfilePic,
  follow,
  getFriends
};
