import assert from "assert";
import { min } from "../js/app.js";
import { average } from "../js/app.js";
import { checkTheString } from "../js/app.js";
import { checkPairAndImpair } from "../js/app.js";

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
        })
    })
})

describe("Array", function () {
    describe("checkTheString", function () {
        it("should return the array without the string", function () {
            assert.deepEqual(checkTheString(["1", "d", "90", "23", "hello"]), [1, 90, 23]);
        })
    })
})

describe("Array", function () {
  describe("checkPairAndImpair", function () {
      it("should return the array without the pair number", function () {
          assert.deepEqual(checkPairAndImpair([2, 6, 13, 24, 33, 71, 12]), [[[2, 6, 24, 12]], [[13, 33, 71]]]);
      })
  })
})
