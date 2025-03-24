**What are the benefits of using React Testing Library instead of testing implementation details?**
1. It helps to provide meaningful test cases for actual user interactions.
2. React Testing Library tests what users can see or do, so they are easy to understand and maintain even when the implementation of components change.
3. React Testing Library remains consistent until the user experience is not changed.

**What challenges did you encounter when simulating user interaction?**
1. It gave me error 'ReferenceError: document is not defined', for which I had to mention 'jest-environment jsdom' at the start of the code.
2. I didn't know I had to import React even in the test.js file. Also "@testing-library/jest-dom" was also missing from my test file.
3. Even though the matchers like 'toHaveTextContent' is understandable, I did my little experiments of my own to understand how exactly the test.js code is working.