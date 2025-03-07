# Clean Code Principles

***Simplicity* – Keep code as simple as possible.**
Complexity of the code should be avoided. If the code is simple, it will be easy to debug, locate issues, and find solutions.

***Readability* – Code should be easy to understand.**
The code should be simple to understand not only for the associate who has written the code but also for others too. The code should consist of comments explaining what and why the change was made, well-structured logic, and understandable naming conventions.

***Maintainability* – Future developers (including you!) should be able to work with the code easily.**
One of the important code principles is writing the code that can easily be modified in the future by any developer, if required. There can be issues that require extending the functionality while maintaining the original behavior of the code.

***Consistency* – Follow style guides and project conventions.**
It reduces the confusion by maintaining the style guides and naming conventions. In a project, if consistent code is followed, it is easy to understand the code and combine the code separately modified by all the developers.

***Efficiency* – Write performant, optimized code without premature over-engineering.**
Efficiency in code is important as it helps to reduce complexity. The code should be optimized in such a way its performance is not hindered and keep the code readable.


# Code Formatting & Style Guides

**Why is code formatting important?**
The code formatting is necessary for the following reasons:
1. It enables the code readability so that it's easy for the code readers to understand the functionality within that code.
2. When everyone in the team uses the same format, it is easier to combine and review the code. It also reduces the confusion for all the developers.
3. I found ESLint and Prettier help to format the code easily.

**What issues did the linter detect?**
When I used ESLint, it gave me issues related to:
1. The variables that were defined but never used.
2. The variables that were not defined.
3. An error related to 'react/prop-types' saying the prop (e.g., name) is missing in props validation.
I researched and found it also detects issues also related to:
1. Indentation and spacing issues.
2. Issues related to semicolons, whether they are missing or used extra.
3. Suggesting use of arrow function.

**Did formatting the code make it easier to read?**
Yes, I applied 'npx prettier --write' on the Home.js component from Milestone 5: React Fundamentals, and it made the code much easier to read. It removed all the extra semicolons, made it more structured, and corrected indentation.


# Naming Variables & Functions

**What makes a good variable or function name?**
1. It should clearly describe and have to be specific to the purpose of the variable or the function. But it should not be too long.
2. Both should follow camelCase naming conventions, like isDivisible() or numToCheck.
3. The function names should be meaningful and not too abbreviated.

**What issues can arise from poorly named variables?**
1. If the variable name is not clear, the purpose of that will not be understood.
2. It may take developers more time to understand the code, and it will be difficult to find the issues.
3. It affects maintaining the code, since the variable names are poorly defined, and introducing new functionality will require first understanding the original code.

**How did refactoring improve code readability?**
1. It explained the purpose of the variables used and the function written.
2. It was easier to read the code and modify it.
3. The complexity of the code was decreased, and it was easy to analyze the code step by step.


# Writing Small, Focused Functions

**Why is breaking down functions beneficial?**
1. It makes the code easy to understand, like which block of code is for what purpose.
2. Breaking down a big function into small ones makes it reusable.
3. It is easy to debug, find a bug, and resolve the issue.
4. Also, it maintains the code for future use. The code can be easily modified based on new functionality without affecting the old one.

**How did refactoring improve the structure of the code?**
1. Code duplication was avoided by making a new function for the block of code that was used frequently. Thus, this function can be reused.
2. All the small functions had their specific functionality to perform.


# Avoiding Code Duplication

**What were the issues with duplicated code?**
1. Unnecessarily, the same code was written repeatedly, which reduced readability.
2. Since the same code was written in multiple places, if there is a code fix for that block of code, it has to be fixed in multiple places.
3. It increased effort to understand and also complexity for the main function.

**How did refactoring improve maintainability?**
1. The repeated code of the block was created into a function, thus making it reusable.
2. It was easy to understand the code and increased readability.
3. Fixing the code was easier as it had to be modified in one place.


# Refactoring Code for Simplicity

**What made the original code complex?**
1. The original code consisted of unnecessary if-else conditions.
2. The code was difficult to understand and took more effort to read.
3. The code had duplicated code within its if-else conditions, making it difficult to maintain.

**How did refactoring improve it?**
1. If-else conditions were removed and replaced with return statements, which made it easier to understand.
2. It increased maintainability, and it became easier to add new functionality into it.
3. It looked more structured and organized.


# Commenting & Documentation

**When should you add comments?**
1. When the task of the code is not clear by the code itself.
2. When a code is added specific to an issue, then why and what code changes were made to resolve the issue.
3. When a new code replaces old code, it has to be specified why the code was modified.
4. Sometimes a 'TODO' comment is added just to keep track that some changes have to be done at this specific location.

**When should you avoid comments and instead improve the code?**
1. When the code is obvious and itself explains the purpose. In such cases, variable and function names have to be self-explanatory.
2. When the code is complex and multiple comments are required to explain the functionality. In such cases, complex functions can be broken into smaller functions to increase readability.


# Handling Errors & Edge Cases

**What was the issue with the original code?**
1. The original code only logged the error instead of throwing it.
2. Guard clauses were not used to handle the invalid inputs at the start of the code.
3. Empty input and unexpected datatypes were not handled.

**How does handling errors improve reliability?**
1. It gives a clear message of why and what the code is throwing an error instead of some exceptions that go unnoticed.
2. All the invalid inputs are handled, ensuring the code doesn't break unexpectedly.
3. On an application, an error popup is displayed to keep the user updated on why they are facing an issue.


# Writing Unit Tests for Clean Code

**How do unit tests help keep code clean?**
1. It keeps the code simple and reduces complexity by identifying smaller functions with specific tasks.
2. It helps to debug the code easily, since it will show the output where your test cases are failing.
3. When a new functionality is introduced, it is easy to modify the code and test all the cases, checking that the old functionality is not hindered.

**What issues did you find while testing?**
During the installation of Jest, I found that I had to install Babel dependencies to configure Jest.
I created a simple function to check if a number is even or not in the components folder and found how to write a test file, then ran the test file to check the cases.
I found that invalid inputs have to be handled in the code, like if a string is passed.
