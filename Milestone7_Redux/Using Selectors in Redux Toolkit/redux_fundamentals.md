**What are the benefits of using selectors instead of directly accessing state?**
1. Using selectors helps reduce code reusability when the same state is used for multiple components.
2. When the state shape is changed, we need to only change it in one place and not in all the components the state is being used.
3. It makes debugging and resolving issues easy since the selector function is present in one place.