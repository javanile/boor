# boor

**Warning!** This is not a polite library.

### (SYNC) Loop through **Array** items

```js
/**
 * Loop through values only
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

### (ASYNC) Loop through **Array** items

```js
/**
 * Loop through values only
 */
let values = ['Apple', 'Banana', 'Cagaita']

foreach(values, (index, next) => {
    console.log('=>', value)
    next()
}).then(() => {
    console.log('=> --end--')
})

// Output:
//=> Apple
//=> Banana
//=> Cagaita
//=> --end--
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
