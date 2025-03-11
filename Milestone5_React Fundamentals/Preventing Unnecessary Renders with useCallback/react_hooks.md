**What problem does useCallback solve?**
useCallback avoids re-creation of the functions on every render. It prevents the function passed as a prop in the child component from being re-created when the parent component is called and will only be called when the dependencies passed in the callback change.

**How does useCallback work differently from useMemo?**
1. useCallback returns a function reference, whereas useMemo returns a computed value.
2. useCallback prevents the re-creation of child components when new objects are created for the parent component. On the other side, useMemo prevents expensive calculations.

**When would useCallback not be useful?**
1. When a callback function's dependencies don't change frequently.
2. Also, when your callback function has no dependencies, useCallback is not necessary.
