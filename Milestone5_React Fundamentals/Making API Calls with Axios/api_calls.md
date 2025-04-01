**Why is it useful to create a reusable Axios instance?**
1. The requirements-base URL, headers, timeout- are initialized for all the API requests.
2. There is no need to configure each request separately.
3. If there will be any change, it will be only in one place instead of changing the code throughout.

**How does intercepting requests help with authentication?**
1. It adds an authorization token before sending the request.
2. It allows handling errors globally. Example: in the case of a 401 error, it refreshes the new token and proceeds to browse the application.
3. Modification of requests and responses is possible before sending.

**What happens if an API request times out, and how can you handle it?**
1. First, the timeout value should not be too long.
2. When there is a timeout, err.code == 'ECONNABORTED' is thrown. To handle it, in the catch, add a condition: if this error code occurs, print a message saying 'Request timed out, Try again!!'.
In my APIRequest.js, I have added the same condition. I tried the API request time out using my API.