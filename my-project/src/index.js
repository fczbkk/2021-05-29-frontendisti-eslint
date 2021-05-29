import fill from 'lodash-es/fill'
import getNestedProperty from 'lodash-es/get'

const someValue = fill(Array(3), 'x')
console.log(someValue)

const myObject = { a: { b: { c: 'd' } } }
const otherValue = getNestedProperty(myObject, 'a.b.c')
console.log(otherValue)
