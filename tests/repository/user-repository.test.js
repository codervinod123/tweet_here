import { expect, jest, test } from "@jest/globals";
import { UserRepository } from "../../src/repository/user-repository.js";
import User from "../../src/models/user-model.js";

jest.mock("../../src/models/user-model.js");

test("Testing that a user is gracefully created or not", async () => {
  const data = {
    name: "vinod",
    email: "vinodpr737947@gmail.com",
    password: "vinod@123",
    createdAt: "2024-08-06",
    updatedAt: "2024-08-06",
  };

  const createEntry=jest.spyOn(User, "create").mockImplementation(() => {
    return data;
  });

  const userRepository = new UserRepository();
  const user = await userRepository.createEntry(data);
  expect(user.name).toBe(data.name);
  expect(createEntry).toHaveBeenCalled();
});

test("Testing that a user can find by email", async()=>{
    const user={
      name: "vinod",
      email: "vinodpr737947@gmail.com",
      createdAt: "2024-08-06",
      updatedAt: "2024-08-06",
    }

    const mockFindOne = jest.spyOn(User,"findOne").mockImplementation(()=>{
      return user;
    })
   
    // SOME_EMAIL because we are mocking implementation
    const email="SOME_EMAIL";
    const userRepository = new UserRepository();
    const response=await userRepository.getByEmail(email);
    expect(response.name).toBe(user.name);
    expect(response.email).toBe(user.email);
    expect(mockFindOne).toHaveBeenCalled();
});

test("Testing that user's profile is getting updated or not", async()=>{
   const profileData={
        userId:"SOME_ID",
        profilePic: "SOME_LINK_TO_USER_PROFILE_PIC",
        name: "Abhishek",
        bio: "Software Engineer",
        location: "India",
   }
   const mockUpdateProfile=jest.spyOn(User, 'findByIdAndUpdate').mockImplementation(()=>{
     return true;
   })
   const userRepository = new UserRepository();
   const response=await userRepository.updateProfilePic(profileData.userId, profileData.profilePic, profileData.name, profileData.bio, profileData.location);
   expect(response).toBeTruthy();
   expect(mockUpdateProfile).toHaveBeenCalled();
})

// test('Testing that follower and following is implemented successfully',async()=>{
//    const usersData={
//       followerId: "FOLLOWER_ID",
//       followingId: "FOLLOWING_ID"
//    }

//    const mockFollowImplementation=jest.spyOn(User, 'updateOne').mockImplementation(()=>{
//      return true;
//    })
//    const userRepository = new UserRepository();
//    const response=await userRepository.follow(usersData.followerId, usersData.followingId);
//    console.log(response);
//    expect(response).toBeTruthy();
//    expect(mockFollowImplementation).toHaveBeenCalled();
// })