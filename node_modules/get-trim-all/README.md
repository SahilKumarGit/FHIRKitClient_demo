# get-trim-all


```bash
npm install get-trim-all
```

Import

```js
const trimAll = require('get-trim-all')
```
OR
```ts
import trimAll from "get-trim-all";
```
### Use Case
- String
 ```js
let str = ' Helloworld ';

console.log(trimAll(str)); // 'helloworld'
//or
console.log(typeof trimAll(str)); // string
```

- Number
 ```js
let num = 1524;

console.log(trimAll(num)); // 1524
//or
console.log(typeof trimAll(num)); // number
```

- Boolean
 ```js
let bool = true;

console.log(trimAll(bool)); // true
//or
console.log(typeof trimAll(bool)); // boolean
```

- Array of String(s)
```js
let arr = [' google ', ' facebook '];

console.log(trimAll(arr)); // ['google', 'facebook']
//or
console.log(typeof trimAll(arr)); // object
//or
console.log(Array.isArray(trimAll(arr))); // true
```
- Object
```js
let obj = {
  name: ' Sahil Kumar ',
  age: 19,
  hobbies: [' programming ', ' badminton ']
};

console.log(trimAll(obj)); // { name: 'Sahil Kumar', age: 19, hobbies: ['programming', 'badminton'] }
//or
console.log(typeof trimAll(obj)); // object
```
```js
let obj = { ' name ': ' sahil   Kumar ' }

console.log(trimAll(obj)) // { ' name ': 'sahil   Kumar' }
//or
console.log(typeof trimAll(obj)); // object
```
- Array of Object
```js
let arr = [
  { city: [' bbsr ', ' ctc '] }
];

console.log(trimAll(arr)); // [{ city: ['bbsr', 'ctc']}]
//or
console.log(typeof trimAll(arr)); // object
//or
console.log(Array.isArray(trimAll(arr))); // true
```