import assert from 'assert';
import { INPUT, OUTPUT } from './data.js';
import {
  getProductName,
  getProductPopularity,
  getProductPrice,
  fullSortAndCleanup,
} from './index.js';

describe.only('Sort Array of Strings', () => {
  // it('should return a sorted array of product names', () => {
  //   const expected = OUTPUT;
  //   const actual = fullSortAndCleanup(INPUT);
  //   assert.deepStrictEqual(actual, expected);
  // });

  describe('Get Product Name', () => {
    it('should return the product name "Red Ball" from the string "Red Ball,98,5"', () => {
      const expected = 'Red Ball';
      const actual = getProductName('Red Ball,98,5');
      assert.strictEqual(actual, expected);
    });
    it('should return the product name "Blue Ball" from the string "Blue Ball,90,4"', () => {
      const expected = 'Blue Ball';
      const actual = getProductName('Blue Ball,90,4');
      assert.strictEqual(actual, expected);
    });
    it('should return the product name "Green Ball" from the string "Green Ball,48,6"', () => {
      const expected = 'Green Ball';
      const actual = getProductName('Green Ball,48,6');
      assert.strictEqual(actual, expected);
    });
  });

  describe('Get Product Popularity', () => {
    it('should return the product popularity 98 from the string "Red Ball,98,5"', () => {
      const expected = 98;
      const actual = getProductPopularity('Red Ball,98,5');
      assert.strictEqual(actual, expected);
    });
    it('should return the product popularity 90 from the string "Blue Ball,90,4"', () => {
      const expected = 90;
      const actual = getProductPopularity('Blue Ball,90,4');
      assert.strictEqual(actual, expected);
    });
    it('should return the product popularity 48 from the string "Green Ball,48,6"', () => {
      const expected = 48;
      const actual = getProductPopularity('Green Ball,48,6');
      assert.strictEqual(actual, expected);
    });
  });

  describe('Get Product Price', () => {
    it('should return the product price 5 from the string "Red Ball,98,5"', () => {
      const expected = 5;
      const actual = getProductPrice('Red Ball,98,5');
      assert.strictEqual(actual, expected);
    });
    it('should return the product price 4 from the string "Blue Ball,90,4"', () => {
      const expected = 4;
      const actual = getProductPrice('Blue Ball,90,4');
      assert.strictEqual(actual, expected);
    });
    it('should return the product price 6 from the string "Green Ball,48,6"', () => {
      const expected = 6;
      const actual = getProductPrice('Green Ball,48,6');
      assert.strictEqual(actual, expected);
    });
  });

  describe('Sort by Popularity', () => {
    it('needs tests to be written');
  });

  describe('Sort by Price', () => {
    it('needs tests to be written');
  });
});
