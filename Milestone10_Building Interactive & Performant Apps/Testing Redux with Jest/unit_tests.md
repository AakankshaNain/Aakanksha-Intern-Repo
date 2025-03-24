**What was the most challenging part of testing Redux?**
There was no such challenging part, but I have some points about my observations:
1. It was quite similar to other tests. But, with Redux reducers, in test files, the reducer has to be called with parameters (the input, action performed).
2. Not particularly redux, but I found some places where describe-it is used and other places where describe-test. It was found 'it' is just an alias for 'test', and so anyone can be used.


**How do Redux tests differ from React component tests?**
1. React component tests included tests related to UI rendering and UI interactions, whereas Redux tests included tests that involved how the input state action was performed and checking the new state.
2. React component tests required 'jest-environment jsdom' in the test file, otherwise, they were throwing an error. In the redux test, it was not required.