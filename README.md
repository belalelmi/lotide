# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

## Usage

**Install it:**

`npm install @belalelmi/lotide`

**Require it:**

`const _ = require('@belalelmi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

> - **head**: accepts an array and returns the first element
> - **tail**: accepts an array and returns the same array, but with the first element removed
> - **eqArrays**: accepts two arrays and returns true or false based on if they are equal
> - **middle**: accepts an array and returns the middle element or elements as an array
> - **letterPositions**: accepts a string and returns an object with all of the indices in the string where each character was found
> - **eqObjects**: accepts two objects and returns true or false based on if they are equal
> - **countLetters**: accepts a string and returns an object with key value pairs to denote each character in the string, and the number of times it occured in the string
> - **map**: accepts an array and a function, and creates a new array with the results of calling the provided function on each element in the input array
> - **takeUntil**: accepts an array and a callback function and runs each array element through the function, returning an array with all the items from the original array until the callback provided returns a truthy value
> - **countOnly**: accepts an array of strings and return counts for a specific subset of those strings (the subset is identified by an object)
> - **without**: accepts a source array and an array of items to remove, and returns a subject of the source array, removing any elements that were included in the inputted array of items to remove
> - **findKey**: accepts an object and a callback function: scans the object and returns the first key for which the callback function returns a truthy value
> - **findKeyByValue**: accepts an object and a value: scans the object and returns the first key which contains the given value
