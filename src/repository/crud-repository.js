
export class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
     try {
          console.log(data);
          const response=await this.model.create(data);
          return response;
     } catch (error) {
          console.log("Error has occured while creating entry");
        //   throw {error};
     }
    }

}
