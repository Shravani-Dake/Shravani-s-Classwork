//first way to import module
import add from './math.mjs'
import sub from './math.mjs'
import mul from './math.mjs'
console.log(add)
console.log(sub)
console.log(mul)

//second way to import module
import math from './math.mjs'
console.log(math)

//third way to import module
import add from './math.mjs'
import {sub} from './math.mjs'
import {mul} from './math.mjs'
console.log(add)
console.log(sub)
console.log(mul)
