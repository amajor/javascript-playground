[![Tests](https://github.com/amajor/javascript-playground/actions/workflows/tests.yml/badge.svg)](https://github.com/amajor/javascript-playground/actions/workflows/tests.yml)
[![ESLint](https://github.com/amajor/javascript-playground/actions/workflows/lint.yml/badge.svg)](https://github.com/amajor/javascript-playground/actions/workflows/lint.yml)

# JavaScript Playground

* [File Structure](#file-structure)
* [Exercises](#exercises)

## File Structure

We have a simple script to make file creation simple:

```bash
npm run create
```

This will prompt you for some names, then create a file structure.

```bash
→ npm run create

> javascript-playground@1.0.0 create
> bash ./scripts/create.sh

Excercise Name (in "Title Case", please): Sample Exercise
Function Name (in "pascalCase", please): sampleFunction
```

1. Makes a new directory for the exercise (named `Sample Exercise` or whatever your input).

2. Creates your module file in the directory (named `index.js`).

3. Creates a test file in the directory (named `test.js`).

4. Creates a README file with Markdown syntax.

These files can have `npm run lint` and `npm test` run and should all pass.

### Module File Structure

```js
// Sample Exercise/index.js

const sampleFunction = () => {
  // Throw an error if the solution does not exist.
  throw new Error('This function has not been written yet.');
};

export {
  sampleFunction,
};
```

### Test File Structure

```js
// Sample Exercise/test.js

import assert from 'assert';
import { sampleFunction } from './index.js';

describe('Sample Exercise', () => {
  it('should do a thing');
});
```

# Exercises

* [Two Sum](./Two%20Sum)
* [Reverse Integer](./Reverse%20Integer)
* [Palindrome Integer](./Palindrome%20Integer)
* [Add Two Numbers](./Add%20Two%20Numbers)
* [Roman to Integer](./Roman%20to%20Integer)
