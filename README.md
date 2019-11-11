# ClosestTo0

Test for GoJob

This repository only contains a function and its related tests as it was design using TDD.

## Command

You can trigger test run by using following npm command:
```npm test```

## Statement

Write a function “closestToZero” described by the following specification:

• given an array of positive and negative integers, it returns the closest number to zero

• if the closest number in input could be either negative or positive, the function returns the positive one

• if the input array is undefined or empty, the function returns 0

Examples:

when input is [8, 5, 10] it must returns 5

when input is [5, 4, -9, 6, -10, -1, 8] it must return -1

when input is [8, 2, 3, -2] it must return 2
