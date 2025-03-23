**What are the most common performance issues in React Native?**
1. The unnecessary re-renders, which can affect the performance of the app.
2. The unused dependencies increase the startup time.
3. The complex computations and fetching a large amount of data can increase the load time.

**How do useMemo and useCallback improve performance?**
1. useMemo avoids the complex recalculation with every render. It will be recomputed only when its dependency changes.
2. useCallback avoids re-creation of the functions on every render. It prevents the function passed as a prop in the child component from being recreated when the parent component is called and will only be called when the dependencies passed in the callback change.

**What tools can you use to measure and monitor app performance?**
1. There is this debugging tool Flipper which helps to monitor performance and API request tracking.
2. React dev tools can used to check if there are unnecessary re-renders.
3. Also, using console logging can used.

