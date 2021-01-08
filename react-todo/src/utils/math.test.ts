// import { getUser, numResolve, sum, sumCallback, sumPromise } from "./math";
import App from "../../src/app";

// console.log(App);

// import mathjs, { sum } from "./math";

// const mathjs = require("./math");

// describe("Test package 1", () => {
//   test("should perform synchronous sum", () => {
//     const res = sum(1, 2);
//     expect(res).toBe(3);
//     expect(98).not.toBe(8);
//     // expect(2).toBeCalled();
//   });

//   test("should perform callback sum", (done) => {
//     sumCallback(1, 3, (res) => {
//       expect(res).toEqual(4);
//       done();
//     });
//   });

//   test("should perform sumPromise correctly method 1", () => {
//     const res = sumPromise(1, 1);
//     // expect(res).resolves.toBe(3);
//     return res.then((r) => {
// expect(r).toBe(2);
//     });
//   });

//   test("should perform sumPromise correctly ", async () => {
//     const res = await sumPromise(1, 1);
//     expect(res).toBe(2);
//   });

//   test("should perform sumPromise wrongly", async () => {
//     try {
//       await sumPromise(true, "kjsw");
//     } catch (error) {
//       expect(error).toMatchObject(Error("only number is allowed"));
//       // expect(error).toMatchObject();
//       expect(error).toEqual(Error("only number is allowed"));
//     }
//   });

//   test("should throw given an invalid id", () => {
//     // const res = getUser(23);
//     expect(() => getUser(98)).toThrow();
//   });
// });

// describe("Promise block", () => {
//   test("should resolve to 77", () => {
//     // return numResolve().then((res) => {
//     // expect(res).toBe(77);
//     // });
//     return expect(numResolve(32)).resolves.toBeTruthy();
//   });

//   test("should reject wen num > 49", async () => {
//     try {
//       const res = await numResolve(60);
//     } catch (error) {
//       expect(error).toEqual(Error("not enough reason"));
//     }
//     // return expect(numResolve(60)).rejects.toEqual(Error("not enough reason"));

//     // return expect(() => numResolve(60)).toThrow(Error("not enough reason"));
//   });

//   test.skip("should return sum correctly", () => {
//     const res = mathjs.sum(2, 3);
//     expect(res).toBe(5);
//   });

//   test("should spyOn sum", () => {
//     const sum = jest.spyOn(mathjs, "sum");
//     mathjs.sum(2, 4);
//     expect(sum).toHaveBeenCalled();
//   });

//   test("should mock mathjs.sum", () => {
//     // const spy = jest.spyOn(mathjs, "sum");
//     // const res = mathjs.sum(3, 7);
//     // console.log(res, "========res=======");
//     // const res = spy(2, 4);

//     // mathjs.sum = jest.fn((a: number, b: number) => a + b);
//     mathjs.sum = jest
//       .fn()
//       .mockImplementation((num1: number, num2: number) => num1 + num2);
//     mathjs.sum(3, 1);
//     mathjs.sum(3, 7);

//     expect(mathjs.sum).toHaveBeenCalled();
//     expect(mathjs.sum).toHaveBeenCalledTimes(2);
//     expect(mathjs.sum).toHaveBeenNthCalledWith(1, 3, 1);
//     expect(mathjs.sum).toHaveBeenCalledWith(3, 7);
//     expect(mathjs.sum).toReturn();
//     expect(mathjs.sum).toHaveReturned();
//     expect(mathjs.sum).toHaveReturnedWith(4);
//     expect(mathjs.sum).toHaveReturnedWith(10);
//   });

//   test("should return correct value in mock", async () => {
//     let { sum } = mathjs;
//     sum = jest
//       .fn()
//       .mockImplementation((num1: number, num2: number) =>
//         Promise.resolve(num1 + num2)
//       );
//     sum(2, 4);
//     const res = await sum(1, 1);
//     expect(sum).toHaveBeenCalled();
//     expect(sum).toHaveBeenCalledWith(1, 1);
//     expect(sum).toHaveBeenCalledWith(2, 4);
//     expect(res).toBe(2);
//   });
// });

// jest.disableAutomock();
const factoryFunc = () => {
  return {
    // __esModule: true,
    default: {
      sum: jest.fn((a: number, b: number) => {
        console.log("============mocking-function======");
        return a + b;
      }),
    },
    sum: jest.fn((a: number, b: number) => {
      console.log("============mocking-function======");
      return a + b;
    }),
  };
};

// jest.mock("./math", factoryFunc);
// jest.doMock("./math", factoryFunc);
// const mathMock = jest.createMockFromModule("./math");
// jest.mock("./math", factoryFunc);

// jest.unmock("./math");
// jest.mock(
//   "./math",
//   () => {
//     return {
//       __esModule: true,
//       default: {
//         sum: jest.fn((a: number, b: number) => {
//           console.log("=============mocking-func========");
//           return a + b;
//         }),
//       },
//       sum: jest.fn().mockImplementation((a, b) => {
//         console.log("=========sum-mock=========");
//         return a + b;
//       }),
//     };
//   },
//   { virtual: true }
// );

beforeEach(() => {
  jest.resetModules();
});
describe("Jest mock", () => {
  test("should return sum mock", async () => {
    // const mathjs = require("./math");
    const { default: mathjs } = await import("./math");
    console.log(mathjs);
    const res = mathjs.sum(3, 2);

    // const res = mathMock.sum(3, 2);
    expect(res).toBe(5);

    // expect(mathMock.sum.name).toEqual("su");
  });
});

describe("Jest mock 2", () => {
  // jest.dontMock("./math");
  // jest.unmock("./math");
  // jest.disableAutomock();
  // jest.autoMockOff();
  let mathjs;
  jest.isolateModules(() => {
    ({ default: mathjs } = require("./math"));
  });
  // jest.resetModuleRegistry();
  // jest.resetModules();
  const { default: fake } = require("./math");
  console.log(mathjs === fake, "============test-equality==========");

  console.log(mathjs, "==================");
  test("should return sum mock", () => {
    const res = mathjs.sum(5, 2);
    expect(res).toBe(7);
  });

  test("should toMatchObject", () => {
    interface Pay {
      userId: number;
      isAdmin: boolean;
      iat?: number;
    }
    const payload: Pay = {
      userId: 23489,
      isAdmin: true,
    };

    const decoded: Pay = { ...payload, iat: 90 };
    console.log(payload, "========payload=======");
    console.log(decoded, "======decoded======");
    // expect(payload).toMatchObject<Pay>(decoded);

    // expect(payload).toMatchObject(expect.objectContaining(decoded));
  });
});
