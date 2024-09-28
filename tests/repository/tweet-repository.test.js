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

  const tweet = await tweetRepository.createEntry(data);
  expect(tweet.content).toBe(data.content);
});
