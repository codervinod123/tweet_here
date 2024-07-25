import { execute } from "../../src/services/dummy";

test("Testing the software for  the accurate result",()=>{
     expect(execute()).toBe("Learning JS");
})