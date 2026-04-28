# Intro to Javascript

## Part 1
1. The result of the two numbers added.
2. Prints the addition result if add == True, and throws and error if add != true, because var result is function scoped so the variable exists, but it was never initialized outside of the if statement.
3. You shouldn't use var because it creates a variable  with function scope, meaning you can access it at times you shouldn't be able to, unlike let, which creates variables that can be accessed only within the brackets it was created in.
4. Prints the correct sum of the two nums. 
5. Returns and error because let result is a block scoped variable, meaning it isn't accessible outside of the if statement.
6. Returns and error because result was declared as a const, however the addition of the two numbers attempts to reassign it and causes an error.
7. Returns an error because the key word const gives the variable result blocked scope, meaning it cannot be accessed outside of the if statement.