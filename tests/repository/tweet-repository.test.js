import { TweetRepository } from "../../src/repository";
import Tweet from "../../src/models/tweet-model";

jest.mock("../../src/models/tweet-model");

test('Checking wheather is created successfully or not',async()=>{
    
    const data={
        content:"This is #tag for testing the software"
    }

    const spy=jest.spyOn(Tweet, 'create').mockImplementation(()=>{
          return {...data,createdAt:'2024-07-26',updatedAt:'2024-07-26'}
    })

    const tweetRepository=new TweetRepository();

    const tweet=await tweetRepository.createEntry(data);
    expect(tweet.content).toBe(data.content);
})