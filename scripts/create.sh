#!/bin/bash

# Prompt for excercise name.
read -p 'Excercise Name (in "Title Case", please): ' exerciseName

# Prompt for the function name
read -p 'Function Name (in "pascalCase", please): ' functionName

# Create a new directory, named for the new exercise.
mkdir "${exerciseName}"

# Go into that directory.
cd "${exerciseName}"

# Create the exercise file.
cat > index.js << EOF
const $functionName = () => {
  // Throw an error if the solution does not exist.
  throw new Error('This function has not been written yet.');
};

export {
  $functionName,
};
EOF

# Create the test file.
cat > test.js << EOF
import assert from 'assert';
import { $functionName } from './index.js';

describe('$exerciseName', () => {
  it('should throw an error if a solution does not exist', () => {
    assert.throws(
      () => $functionName(),
      /^Error: This function has not been written yet.*/,
    );
  });

  it('should have more tests created.');
});
EOF

# Create a README file.
cat > README.md << EOF
# $exerciseName

Write about the exercise using [Markdown Syntax](https://www.markdownguide.org/cheat-sheet/).
EOF
