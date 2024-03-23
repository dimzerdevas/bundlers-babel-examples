Webpack and Rollup Examples
===========================

This repository contains examples demonstrating how to use Webpack and Rollup for bundling and optimizing JavaScript code. These examples are part of a presentation on build tools and module bundlers.

Contents
--------

1.  Webpack Example:

    -   The `webpack` folder contains a simple project demonstrating how to set up Webpack.
    -   It includes an entry point (`src/index.js`), a basic configuration (`webpack.config.js`), and an `index.html` file.
    -   To run the example:

        ```
        cd webpack
        npm run bundle
        npm start
        ```

2.  Rollup Example:

    -   The `rollup` folder showcases Rollup usage.
    -   It includes an entry point (`src/index.js`) and a Rollup configuration (`rollup.config.js`).
    -   To run the example:

        ```
        cd rollup
        npm run bundle
        ```
    -   Open ` index.html ` to see the result.

3.  Babel Example:

    -   The `babel` folder showcases Rollup usage.
    -   It includes an entry point (`src/index.js`) and a Babel configuration (`.babelrc`).
    -   To run the example:

        ```
        cd babel
        npm run transpile
        ```
    -   See the file generated in `dist/bundle.js`
