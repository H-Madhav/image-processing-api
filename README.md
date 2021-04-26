# image-processing-api

# Getting Started with image-processing-api

This project was bootstrapped with [TypeScript & Express](https://github.com/madhav1993/image-processing-api).

## Install all the dependency

npm install

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

The page will reload if you make edits.\

### `npm run test`

Create a build to produce js files to run test, copy none .ts file(assets) and launches the test runner.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly compiles all ts file into js file and copy assets into build folder.

### `npm run prettier`

Runs all the recommended prettier config.\

### `npm run lint`

Runs all the recommended lint config.\

## `PROJECT SPECIFICATION`

1. Source code is kept separate from compiled code.
2. All tests should be contained in their own folder.
3. Separate modules are created for any processing.
4. Package.json should contain both devDependencies, and dependencies.
5. Scripts should be created for testing, linting/prettier, starting the server, and compiling TS.
6. Build script should run without error.
7. Start script should run without error
8. Provided endpoint should open in the browser with status 200
9. Accessing the provided URL with image information should successfully resize an image and save it to disk on first access, then pull from disk on subsequent access attempts.
10. An error message should be provided to the user when an image has failed to process or does not exist.
11. Test script runs and all tests created pass.
12. There is at least 1 test per endpoint and at least one test for image processing.
13. All code in the SRC folder should use the .ts filetype.
14. Functions should include typed parameters and return types and not use the any type.
15. Import and Export used for modules.
16. Build script should successfully compile TS to JS.
17. Prettier and Lint scripts should run without producing any error messages.
