import assert from 'assert';
import { INPUT, OUTPUT } from './data.js';
import { fullSortAndCleanup } from './index.js';

describe.only('Sort Array of Strings', () => {
  it('should return a sorted array of product names when provided with an array of strings in format "TITLE,POPULARITY,PRICE"');

  describe('Get Product Name', () => {
    it('should return the product name "Red Ball" from the string "Red Ball,98,5"');
    it('should return the product name "Blue Ball" from the string "Blue Ball,90,4"');
    it('should return the product name "Green Ball" from the string "Green Ball,48,6"');
  });

  describe('Get Product Popularity', () => {
    it('should return the product popularity 98 from the string "Red Ball,98,5"');
    it('should return the product popularity 90 from the string "Blue Ball,90,4"');
    it('should return the product popularity 48 from the string "Green Ball,48,6"');
  });

  describe('Get Product Price', () => {
    it('should return the product price 5 from the string "Red Ball,98,5"');
    it('should return the product price 4 from the string "Blue Ball,90,4"');
    it('should return the product price 6 from the string "Green Ball,48,6"');
  });

  describe('Sort by Popularity', () => {
    it('needs tests to be written');
  });

  describe('Sort by Price', () => {
    it('needs tests to be written');
  });
});
