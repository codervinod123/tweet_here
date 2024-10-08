import test from "node:test";
import { Hashtag } from "../../src/models/index";
import { HashtagRepository } from "../../src/repository";

jest.mock("../../src/models/index");

test("Testing that tweet creation is working fine or not", async () => {
  const data = {
    hashtag: "#maSayamyJi",
    createdAt: "24-09-2024",
    updatedAt: "24-19-2024",
  };
  const mockHashTagCreation = jest
    .spyOn(Hashtag, "create")
    .mockImplementation(() => {
      return data;
    });
  const hashtagRepository = new HashtagRepository();
  const response = await hashtagRepository.create(data);
  expect(response.hashtag).toBe(data.hashtag);
  expect(response.createdAt).toBe(data.createdAt);
  expect(response.updatedAt).toBe(data.updatedAt);
  expect(mockHashTagCreation).toHaveBeenCalled();
});

test("Testing for Hashtag are getting successfukky or not", async () => {
  const data = {
    hashtag: "#maSayamyJi",
    createdAt: "24-09-2024",
    updatedAt: "24-19-2024",
  };
  const mockHastagRead = jest
    .spyOn(Hashtag, "findOne")
    .mockImplementation(() => {
      return data;
    });

  const hashtagRepository = new HashtagRepository();
  const response = await hashtagRepository.read(data);
  expect(response.hashtag).toBe(data.hashtag);
  expect(response.createdAt).toBe(data.createdAt);
  expect(response.updatedAt).toBe(data.updatedAt);
  expect(mockHastagRead).toHaveBeenCalled();
});
d;
test("Testing for Hashtag deleting successfully", async () => {
  const id = "SOME_HASTAG_ID";
  const mockHastagDelete = jest
    .spyOn(Hashtag, "findByIdAndDelete")
    .mockImplementation(() => {
      return true;
    });

  const hashtagRepository = new HashtagRepository();
  const response = await hashtagRepository.destroy(id);
  expect(response).toBeTruthy();
  expect(mockHastagDelete).toHaveBeenCalled();
});

// test("Testing for Hashtag are getting successfully by tag", async ()=>{
//     const data={
//       hashtag: "#maSayamyJi",
//       createdAt: "24-09-2024",
//       updatedAt: "24-19-2024",
//     }
//     const mockHastagReadByTag=jest.spyOn(Hashtag, 'find').mockImplementation(()=>{
//         return data;
//     })

//     const hashtagRepository = new HashtagRepository();
//     const response=await hashtagRepository.findByName(data.hashtag);

//     expect(response).toBe(data.hashtag);

//     expect(mockHastagReadByTag).toHaveBeenCalled();
// })
