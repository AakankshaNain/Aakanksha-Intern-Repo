**Why is Axios preferred over fetch in some cases?**
1. Axios provides auto-conversion of responses to JSON, whereas in fetch it has to be done manually.
2. In Axios, Axios-Retry provides retrying the request automatically in case of any error. In Fetch, there is no built-in support.
3. Error handling based on status codes can be done in Axios, whereas fetch handles network errors.
 
**How does Axios-Retry improve network reliability?**
Automatically retrying failed API requests improves network reliability. This includes handling the network failures and certain status codes. 

**How would you handle API failures gracefully in a React Native app?**
1. First, using asynchronous calls with async/await.
2. Handling errors in Axios interceptors to avoid the app crash and then adding code to display the error message to let the users know the reason why the API failed.
