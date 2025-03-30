**Why would you need to use native modules in a React Native app?**
There are some cases with the need to handle platform-specific functionality, and thus native modules are used.
For example, for accessing platform-specific APIs, to process heavy files rather than using JavaScript, and some other background tasks to improve the performance of the app.

**How does React Native communicate with native code?**
1. The React Native components use native modules as a way to execute the native functionality within JavaScript. The native module system exposes instances of native classes to JavaScript to execute this native code.
2. Although native modules and native components are stable technologies, the new architecture will be using Turbo Native Module and Fabric Native Components to attain similar results.

**What are some challenges of maintaining native bridges?**
1. Since there are different native languages involved, developers will be required to have experience with them.
2. With different APIs and behaviors, debugging and maintaining native module implementations will be challenging.
3. All the native dependencies have to be kept updated with the new versions of React Native. 
