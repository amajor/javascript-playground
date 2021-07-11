# Sort Array of Strings

Write a program that sorts a list of comma separated products.

* Each input row looks like "TITLE,POPULARITY,PRICE". 
* Meaning "Teal Ball,98,7" says we sold 98 "Teal Ball"s at 7 dollars each. 
* All numbers are integers. 
* The input will be provided in a hardcoded array so no file I/O is needed.

The list should be sorted by:

1. By most popular first.
2. If products are equally popular, sort by cheapest price (lower is better).

You don't need to write your own sorting algorithm. It's recommended to use a built-in sorting library.

## Data Provided

```js
const INPUT = [
  "Blue Ball,97,6",
  "Orange Ball,58,4",
  "Teal Ball,98,7",
  "Yellow Ball,58,3",
  "Red Ball,87,5",
]

const OUTPUT = [
  "Teal Ball",
  "Blue Ball",
  "Red Ball",
  "Yellow Ball",
  "Orange Ball",
]
```
