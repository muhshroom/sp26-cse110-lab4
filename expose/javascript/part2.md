# Intro to Javascript

## Part 2
1. Prints the length of prices which is 3, because i was declared as var with function scope, meaning after the for loop finishes execution, i will still be accessible.
2. Prints 150, or the last discountedPrice assignment within the for loop.
3. Also prints 150, because it was the last value assigned to the variable.
4. The function returns [50, 100, 150], or the discounted prices of the original prices without any errors.
5. Returns an error because i was declared with let therefore it is block scoped, and only doesn't exist outside of the loop.
6. Returns an error because discountedPrice was declared using let inside of the for loop, therefore it doesn't exist outside of it and cannot be printed.
7. Returns the last assigned value to final price within the for loop, which was 150. 
8. Function returns [50, 100, 150], or the discounted prices of the original prices without any errors.
9. Returns and error since i was declared within the for loop using let, meaning it isn't accessible outside the loop.
10. Prints 3 without errors, because even though length was declared as a const, the code never attempts to modify the variable, and just prints it. 
11. Function returns [50, 100, 150], or the discounted prices of the original prices without any errors
12. Notation:
    1.  A: student.name
    2.  B: student['Grade Year']
    3.  C: student.greeting()
    4.  D: student['Favorite Teacher'].name
    5.  E: student.courseLoad[0]
13. Arithmetic
    1.  A: '32' because integers map to strings
    2.  B: 1 because the negative sign forces numeric conversion
    3.  C: 3 because null becomes 0 in numeric conversion
    4.  D: 3null because the plus causes string conversion
    5.  E: 4 because true becomes 1 in numeric conversion
    6.  F: 0 because false becomes 0 and null also becomes 0 in numeric conversions
    7.  G: 3undefined because adding to a string causes a string conversion.
    8.  H: NaN because in numeric conversion undefined becomes NaN
14. Comparisoin
    1.  A: true, because string '2' becomes number 2
    2.  B: false, since both are strings they're compared in dictionary order
    3.  C: true, string '2' becomes number 2
    4.  D: false
    5.  E: false, true becomes a 1, and 1 doesn't equal 2
    6.  F: true, boolean(2) is true, so both are equal and are of the same type
15. == checks equality with type conversion, and === checks equality without type conversion
16. See file part2-question16.js
17. The function modifies the array [1,2,3] into [2,4,6]. When modifyArray is called, it passes in the original array as well as doSomething as callback. Using a for in loop, the every element of the array is passed into callback and pushed on to the newArr.
18. See file part2-question18.js
19. ```text
    1
    4
    3
    2