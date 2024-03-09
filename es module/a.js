import "./b.js";
import { test2 } from "./b.js";
import { name, obj } from "./b.js";

const test = document.querySelector(".test");
setInterval(() => {
    const item = document.createElement("span");
    item.nodeValue = `我测试一下${name}`;
    item.style.cssText = "background:red; display:block;width:100px;height:100px";
    test.appendChild(item);
}, 1000)

test2()

console.log(obj);



