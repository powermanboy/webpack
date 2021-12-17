import React from "react";
import ReactDom from "react-dom";

import Two from "./Two";
const x=200
console.log("x",x)
console.log("y",Two.y)


function testable(target) {
    target.isTestable = true;
    }
    @testable
    class MyTestableClass {}
    console.log("装饰器语法",MyTestableClass.isTestable) // true

    const delay=new Promise(resolve=>console.log("new Promise()"));
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();

    