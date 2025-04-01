**Why is testing important in React Native development?**
1. First testing makes it easier to detect the issues early.
2. As soon as the new changes are made, testing ensures the code is still working.
3. It helps to know where changes might be required and to refactor the code, ensuring to improve the user experience.

**How do you mock API calls in tests?**
jest.mock('axios') can be used to mock the API in test files. Then in this method, axios.get.mockResolvedValue(), the values to be returned can be passed here.

**What’s the difference between unit and integration tests?**
1. Unit tests are for the individual components or units of code, whereas integration tests involve tests ensuring multiple components work together.
2. Unit tests help identify issues in units of code early during the development phase, whereas integration tests help detect issues as multiple components interact.
