import { expect, jest, test } from "@jest/globals";
import { TweetRepository } from "../../src/repository";
import Tweet from "../../src/models/tweet-model";

jest.mock("../../src/models/tweet-model");
test("Checking wheather a tweet has created gracefully or not", async () => {
  const data = {
    content: "This is #tag for testing the software",
    likes: [],
    comments: [],
    createdAt: "2024-08-07",
    updatedAt: "2024-08-06",
  };

  jest.spyOn(Tweet, "create").mockImplementation(() => {
    return data;
  });

  const tweetRepository = new TweetRepository();
  const response = await tweetRepository.createEntry(data);
  expect(response.content).toBe(data.content);
  expect(response.likes).toBe(data.likes);
  expect(response.comments).toBe(data.comments);
  expect(response.createdAt).toBe(data.createdAt);
  expect(response.updatedAt).toBe(data.updatedAt);
});

test("Testign that entry from tweet Table is read gracefully or not", async () => {
  const data = {
    content: "Hello i'm testing the #readEntry from Tweet table",
    likes: [],
    comments: [],
  };

  jest.spyOn(Tweet, "find").mockImplementation(() => {
    return data;
  });

  const tweetRepo = new TweetRepository();
  const response = await tweetRepo.readEntry();
  expect(response.content).toBe(data.content);
  expect(response.likes).toBe(data.likes);
  expect(response.comments).toBe(data.comments);
});

test("Testing that a entry is deleted successfully or no", async () => {
  jest.spyOn(Tweet, "findByIdAndDelete").mockImplementation(() => {
    return true;
  });
  // RANDOM_ENTRY_ID because we are mocking implementation
  const entryId = "RANDOM_ENTRY_ID";
  const tweetRepo = new TweetRepository();
  const response = await tweetRepo.removeEntry(entryId);
  expect(response).toBeTruthy();
});

test("Checking that entry is Getting updated gracefully or not", async () => {
  const data = {
    content: "Updating the tweet's content for #testing",
  };
  jest.spyOn(Tweet, "findByIdAndUpdate").mockImplementation(() => {
    return { ...data, createdAt: "2024-08-07", updatedAt: "2024-10-30" };
  });
  const tweetRepo = new TweetRepository();
  // RANDOM_ENTRY_ID because we are mocking implementation
  const entryId = "RANDOM_ENTRY_ID";
  const response = await tweetRepo.updateEntry(entryId, data);
  expect(response.content).toBe(data.content);
});
