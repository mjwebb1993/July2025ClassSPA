import { hello, world } from "./featureOne.js";
import * as words from "./featureOne.js";
import { default as printHelloWorld } from "./featureTwo.js";

console.log(words.hello);
console.log(words["world"]);

printHelloWorld(words.hello, words["world"]);
