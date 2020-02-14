# boor


### Loop through `Array` items

```js
/**
 * Loop through only values
 */
let values = ['Apple', 'Banana', 'Cagaita']

foreach(values, (value) => {
    console.log('=>', value)    
})

// Output:
//=> Apple
//=> Banana
//=> Cagaita
```

```js
/**
 * Loop through key-value pairs
 */
let values = ['Apple', 'Banana', 'Cagaita']

foreach(values, (key, value) => {
    console.log(key, '=>', value)    
})

// Output:
//0 => "Apple"
//1 => "Banana"
//2 => "Cagaita"
```
