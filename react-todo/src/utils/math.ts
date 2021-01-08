import { reject } from "lodash";

const sum = (num1: number, num2: number) => {
  console.log("=======summm========Called!");
  return num1 + num2;
};

const sumCallback = (num1: number, num2: number, cb: (res: number) => void) =>
  setTimeout(() => {
    cb(num1 + num2);
  }, 300);

export const sumPromise = (num1: any, num2: any): Promise<number | object> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num1 === "number" && typeof num2 === "number")
        return resolve(num1 + num2);
      reject(new Error("only number is allowed"));
    }, 300);
  });

export const getUser = (id: string | number) => {
  if (typeof id === "number") {
    throw new Error("Invalid user id");
  }
  return { id, username: "Fattylee" };
};

export const numResolve = (num: number): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num < 50) return resolve(true);
      // reject(false);
      // reject(new Error("not enough reason"));
      reject(new Error("not enough reason"));
    }, 1000);
  });
};

// export { sum, sumCallback };

export default { sum, sumCallback };

// module.exports = {
//   sum,
//   sumCallback,
// };
