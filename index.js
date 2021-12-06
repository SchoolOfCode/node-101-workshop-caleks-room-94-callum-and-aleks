import myCollection from "./collection.js";

import chalk from "chalk";

function describeItem(item) {
  let outPut = "";

    myCollection.forEach(function (params) { 
     

        if (params.name === item && params.count == 1)  {
            outPut =  `"I have a ${chalk.cyan(params.name)} I like ${chalk.green(params.whatILike)} about it`;
        }else if(params.name === item && params.count>1){
          outPut =  `"I have ${chalk.yellow(params.count)} ${chalk.cyan(params.name)}s I like ${chalk.green(params.whatILike)} about it`;
        }
        
    })


    return outPut;
}


console.log(describeItem("School of Code hat"));

// Now let's bring in the power of NPM (Node Package Manager), a platform where people publish Node packages, which are bundles of software that you can use NPM to import into and use in your own projects. We'll use the `chalk` module to make our console.log messages a little more snazzy! 💅🌈✨

// 👉 4a. We've already initialised our project folder as an NPM project. That means we can use node modules other people have created in our project... Sweet. Makes this task easy 🙂

// 👉 4b. Use the [chalk docs](https://www.npmjs.com/package/chalk) to find out how to install `chalk` to your project (check your dependencies in your `package.json` file if you want to check that you've installed it correctly). Follow the docs to see how you can now use chalk in `index.js`.

// 👉 4c. Use `chalk` to do the following in your console.logs within `describeItem`:

// - Make the name of each item in your collection cyan
// - Make the count of each item in your collection yellow
// - Make what you like about each item in your collection green