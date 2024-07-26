import { UserRepository } from "../../src/repository/user-repository.js";
import User from "../../src/models/user-model.js";

jest.mock('../../src/models/user-model.js');

test('Testing that a user is gracefully created or not',async()=>{
    
    const spy=jest.spyOn(User,'create').mockImplementation(()=>{
        return {...data,createdAt:'2024-07-26',updatedAt:'2024-07-26'}
     })

     const data={
        name:'vinod',
        email:'vinodpr737947@gmail.com',
        password:'vinod@123'
     }

     const userRepository=new UserRepository();
     const user=await userRepository.createEntry(data);
     expect(user.name).toBe(data.name);

})