**Why does React Native use camelCase instead of traditional CSS properties?**
1. First reason, React Native deals with JavaScript, and JavaScript objects cannot have hyphens.
2. Secondly, React also uses camelCase. Thus, React Native also uses the same.

**What are the benefits of using StyleSheet.create() over inline styles?**
1. StyleSheet.create() improves performance as it stores as a static object, and there are no unnecessary re-renders. Inline styles, on the other hand, create a new object with each render.
2. StyleSheet.create() is reusable, and if changes are required, they can be done in one place.

**How would you handle different screen sizes in React Native?**
1. The Dimension module can be used like useWindowsDimensions can be used to access screen dimensions.
2. Using, percentage-based dimensions instead of 'px'.
3. Flexbox can also be used to create flexible layouts.

## rneui/themed

const theme = createTheme({
  lightColors: {
    primary: "blue",
  },
  darkColors: {
    primary: "#bb86fc",
  },
  mode: "light",
});

export default function Theme() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Styled with RNEUI</Text>
      </View>
    </ThemeProvider>
  );
}

## inline-style

<Text style={{fontSize:24, fontWeight: "bold", marginBottom: 20}}>Counter: {count}</Text>

## Stylesheet

<View style={styles.buttonContainer}>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});