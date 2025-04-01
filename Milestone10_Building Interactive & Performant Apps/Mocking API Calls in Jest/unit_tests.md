**Why is it important to mock API calls in tests?**
1. Mocking the API in tests ensures the tests are run even though the API server is not running.
2. We can control the responses for testing purposes.
3. Since it does not depend on the API server, it makes it easy to test without any interruptions.

**What are some common pitfalls when testing asynchronous code?**
1. The most common would be forgetting to add 'await waitFor' in the test file for the asynchronous function in the component file.
2. The parameters passed in mockResolvedValueOnce are not matching with the parameters of the API defined in the API component.
3. Not clearing the previous mock tests, which can hinder the new test cases.