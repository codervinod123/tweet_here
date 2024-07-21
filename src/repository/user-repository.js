import User from "../models/user-model.js";

import { CrudRepository } from "./crud-repository.js";

export class UserRepository extends CrudRepository{
     constructor(){
        super(User);
     }
}
