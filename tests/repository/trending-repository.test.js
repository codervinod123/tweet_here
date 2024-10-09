import { expect, jest, test } from "@jest/globals";
import { TrendingRepository } from "../../src/repository";
import { Hashtag } from "../../src/models";

jest.mock("../../src/models/hashtag-model");

test("Testing to search any particular hashtag", async () => {
    const data =
        [
            {
                hashtag: "#testingfortrending",
                tweets:[],
                createdAt: "12-10-2024",
                updatedAt: "12-10-2024",
            }
        ]

    const mockSearchImpl=jest.spyOn(Hashtag, 'find').mockImplementation(() => {
        return data;
    })

    const trendingRepo = new TrendingRepository();
    const response = await trendingRepo.searchTrending();
    expect(response.hashtag).toBe(data[0].content);
    expect(mockSearchImpl).toHaveBeenCalled();
})
