**What code smells did you find in your code?**
1. I sometimes comment out the old code to keep it for reference, which has to be avoided.
2. Another one is not using constants for the magic numbers and strings.
3. Multiple nested if/else conditions, which at that time seem like shortcuts. Later, this makes the code difficult to understand.

**How did refactoring improve the readability and maintainability of the code?**
1. After removing the unnecessary comments, the code looked more structured and readable.
2. Using constants made it easy to modify the values at only one place and check the different outputs.
3. By removing nested if/else conditions, it was easy to understand the code and track the changes.

**How can avoiding code smells make future debugging easier?**
1. A structured code helps to easily track issues and resolve them.
2. When multiple developers are working on the same code, it is easier to understand the code. Without unnecessary comments, they can easily focus on the code.
3. When the long function is broken into smaller functions, it is easy to maintain the code for future changes without affecting the original functionality.
