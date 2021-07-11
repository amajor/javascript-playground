import assert from 'assert';
import { INPUT, OUTPUT } from './data.js';
import {
  getProductName,
  getProductPopularity,
  getProductPrice,
  compareProductByPrice,
  sortByPopularityAndPrice,
  cleanArrayToOnlyNames,
  fullSortAndCleanup,
} from './index.js';

describe.only('Sort Array of Strings', () => {
  describe('Cleaned Output Array', () => {
    it('should return a sorted array of product names', () => {
      const expected = OUTPUT;
      const actual = fullSortAndCleanup(INPUT);
      assert.deepStrictEqual(actual, expected);
    });

    it('should return only the names of the sorted array', () => {
      const noEqualPopularities = [
        'Red Ball,98,5',
        'Green Ball,48,6',
        'Blue Ball,90,4',
      ];
      const expected = [
        'Red Ball',
        'Blue Ball',
        'Green Ball',
      ];
      const actual = fullSortAndCleanup(noEqualPopularities);
      assert.deepStrictEqual(actual, expected);
    });
  });

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
    it('needs tests to be written', () => {
      const inputArray = [
        'Red Ball,98,5',
        'Green Ball,48,6',
        'Blue Ball,90,4',
      ];
      const expected = [
        'Red Ball,98,5',
        'Blue Ball,90,4',
        'Green Ball,48,6',
      ];
      const actual = sortByPopularityAndPrice(inputArray);
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe('Sort by Price', () => {
    it('should return -1 if the price of A is smaller', () => {
      const productStringA = 'A Product,98,5';
      const productStringB = 'B Product,48,6';
      const expected = -1;
      const actual = compareProductByPrice(productStringA, productStringB);
      assert.strictEqual(actual, expected);
    });
    it('should return 1 if the price of A is larger', () => {
      const productStringA = 'A Product,98,7';
      const productStringB = 'B Product,48,6';
      const expected = 1;
      const actual = compareProductByPrice(productStringA, productStringB);
      assert.strictEqual(actual, expected);
    });
    it('should return 0 if the price or A equals the price of B', () => {
      const productStringA = 'A Product,98,5';
      const productStringB = 'B Product,48,5';
      const expected = 0;
      const actual = compareProductByPrice(productStringA, productStringB);
      assert.strictEqual(actual, expected);
    });
  });

  describe('Clean Array to Only Names', () => {
    it('should return an array of only names', () => {
      const inputArray = [
        'A Product,98,5',
        'B Product,48,6',
        'C Product,90,4',
      ];
      const expected = [
        'A Product',
        'B Product',
        'C Product',
      ];
      const actual = cleanArrayToOnlyNames(inputArray);
      assert.deepStrictEqual(actual, expected);
    });
  });
});
