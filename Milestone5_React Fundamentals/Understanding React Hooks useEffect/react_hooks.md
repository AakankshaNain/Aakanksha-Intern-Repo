**When should you use useEffect instead of handling logic inside event handlers?**
UseEffect should be used when a side effect is needed to run automatically, whereas event handlers are used when only the user performs an action.

**What happens if you don’t provide a dependency array?**
I tried two things, not passing any array, which made the function render continuously, even though fetchData was not triggered. And the other one, where an empty array was passed, then the component mounted once, and when the fetchData was triggered, it didn't work.

**How can improper use of useEffect cause performance issues?**
1. When an empty dependency array is passed, it may not cause any effect, or if the dependency array argument is not passed, it causes unnecessary re-renders.
2. When the resources are not cleaned, it can cause memory leaks. So, a return function with cleanup is required to avoid that.

