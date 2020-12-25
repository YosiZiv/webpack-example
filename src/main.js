require("babel-runtime/regenerator")
require("./main.css")
require('./index.html')

const babelTest = async (args) => {
    const {a,b} = args
    await console.log("test", a,b)

}
babelTest({a: 1, b: 2})