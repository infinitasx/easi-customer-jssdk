import { Easi } from "../src";

test("测试Easi类", () => {
  let easi = new Easi();
  let result = easi.getVersion((result) => {
    return result;
  });
  expect(result).toEqual({ code: 100, data: "" });
});
