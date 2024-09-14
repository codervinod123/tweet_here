import { helper } from "../../src/repository/helper.js";
import { exec } from "../../src/repository/dummy.js";

jest.mock("../../src/repository/helper.js");

test("Testing the helper function based upon mocking", () => {
  helper.mockReturnValue(true);
  const res = exec();
  expect(res).toBe("Learning Js");
});

test("Testing the helper function based upon mocking", () => {
  helper.mockReturnValue(false);
  const res = exec();
  expect(res).toBe("Learning React");
});
