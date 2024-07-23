import Hashtag from "../models/hashtag-model.js";


export class TrendingRepository{

    async searchTrending(query){
        try {

                                      

            let response=await Hashtag. find( { hashtag: { $regex: query } } ).populate({path:'tweets'})
            
           return response;
           
        } catch (error) {
             console.log('can not search',error);
        }
    }

}
