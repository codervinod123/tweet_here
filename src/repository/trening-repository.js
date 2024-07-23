import Hashtag from "../models/hashtag-model.js";


export class TrendingRepository{

    async searchTrending(trend){
        try {                          
            let response=await Hashtag.find( { hashtag: { $regex: trend } } ).populate({path:'tweets'})
            return response;
        } catch (error) {
             console.log('can not search',error);
        }
    }

}
