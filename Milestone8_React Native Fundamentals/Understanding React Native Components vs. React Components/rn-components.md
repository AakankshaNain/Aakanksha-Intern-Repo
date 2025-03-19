**What are the key differences between View and div?**
1. View is an alternative for div in React Native.
2. View does not support browser-specific event whereas div supports them.
3. View uses native rendering engine whereas div uses browser rendering engine.
4. For styling, View uses JavaScript based styles, Stylesheet or inline styles, and div uses CSS styles.


**How does StyleSheet.create() improve performance compared to inline styles?**
1. Inline styles results in creation of new objects with every render, whereas StyleSheet.create() creates static objects and thus avoids creation of new objects for every render.
2. StyleSheet.create() supports reusability, whereas inline styles if used excessively can be difficult to track.

**Why doesn’t React Native use className like React web?**
1. In React Native, styles are written using JS objects itself. There are external stylesheets.
2. React native does not use the browser, thus cannot simplify className.