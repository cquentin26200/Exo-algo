import assert from "assert";
import { min } from "../js/app.js";
import { average } from "../js/app.js";
import { checkTheString } from "../js/app.js";
import { checkPairAndImpair } from "../js/app.js";
import { returnTheNumberThatAreInTheTwoTable } from "../js/app.js";
import { returnArrayWithoutDuplicateNumberAndLetter } from "../js/app.js";
import { returnArrayWithTheNumberOfOccurence } from "../js/app.js";

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("Array", function () {
  describe("min", function () {
    it("should return the minimum of the array with only positive number", function () {
      assert.equal(min([1, 2, 8, 3, 4]), [1]);
    });
    it("should return the minimum of the array with only negative number", function () {
      assert.equal(min([-9, -7, -1, -6, -5]), [-9]);
    });
    it("should return the minimum of the array with positive number, negative number and string", function () {
      assert.equal(min([-3, "world", 4, 6, "hello"]), [-3]);
    });
  });
});

describe("Array", function () {
  describe("average", function () {
    it("should return the average with only positive number", function () {
      assert.equal(average([3, 8, 2, 1, 9]), [5]);
    });
  });
});

describe("Array", function () {
  describe("checkTheString", function () {
    it("should return the array without the string", function () {
      assert.deepEqual(
        checkTheString(["1", "d", "90", "23", "hello"]),
        [1, 90, 23]
      );
    });
  });
});

describe("Array", function () {
  describe("checkPairAndImpair", function () {
    it("should return the array without the pair number", function () {
      assert.deepEqual(checkPairAndImpair([2, 6, 13, 24, 33, 71, 12]), [
        [[2, 6, 24, 12]],
        [[13, 33, 71]],
      ]);
    });
  });
});

describe("Array", function () {
  describe("returnTheNumberThatAreInTheTwoTable", function () {
    it("should return the array without 2 number that are in the 2 table", function () {
      assert.deepEqual(
        returnTheNumberThatAreInTheTwoTable([
          [1, 5, 7, 3, 98],
          [1, 5, 8, 12, 34],
        ]),
        [1, 5]
      );
    });
  });
});

describe("Array", function () {
  describe("returnArrayWithoutDuplicateNumberAndLetter", function () {
    it("should return the array without duplicate number and letter", function () {
      assert.deepEqual(
        returnArrayWithoutDuplicateNumberAndLetter([1, 7, 3, 7, 3]),
        [1, 3, 7]
      );
    });
  });
});

describe("Array", function () {
  describe("returnArrayWithTheNumberOfOccurence", function () {
    it("should return the array without duplicate number and letter", function () {
      assert.deepEqual(
        returnArrayWithTheNumberOfOccurence(
          "I want to count the number of occurences"
        ),
          {
            " ": 7,
            I: 1,
            a: 1,
            b: 1,
            c: 4,
            e: 4,
            f: 1,
            h: 1,
            m: 1,
            n: 4,
            o: 4,
            r: 2,
            s: 1,
            t: 4,
            u: 3,
            w: 1,
          },
      );
    });
  });
});
