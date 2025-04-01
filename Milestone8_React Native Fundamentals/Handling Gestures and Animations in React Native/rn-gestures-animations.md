**What are the differences between Animated and react-native-reanimated?**
1. Animated works good for basic animations and can cause performance related issues on complex animations. Whereas, react-native-reanimated can work well with complex animations and offers better performance.
2. Animated has limitations for gestures and animations, but react-native-reanimated works well with gesture-handler and complex animations.

**How does react-native-gesture-handler improve gesture performance?**
1. It provides smoother and reliable gesture handling that helps in recognizing gestures like swipe, pinch and others.
2. When integrated with react-native-reanimated, it provides more touch events on screens.

**When would you use gestures instead of buttons in a UI?**
1. To provide more user-interactions and increase user-experience.
2. Providing scrolling up and down through the content.
3. The swiping gesture provides a smoother transition between screens.

**Why is InteractionManager.runAfterInteractions necessary?**
It provides smooth user experience by loading after heavy interactions like animations or gestures have been completed.


## BASIC SWIPE

```
const BasicSwipe = () => {
  const translateX = useSharedValue(0);

  const swipeGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd(() => {
      translateX.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={swipeGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
};
```

## LONG PRESS

```
const LongPress = (event) => {
  if (event.nativeEvent.state === State.ACTIVE) {
    Alert.alert("Long Press Detected!");
  }
}


const LongPressBox = () => {
  return (
    <GestureHandlerRootView>
      <LongPressGestureHandler onHandlerStateChange={LongPress} minDurationMs={1000}>
        <View>
          <Button title="Press Me" onPress={() => Alert.alert("Button Pressed!")} />
        </View>
      </LongPressGestureHandler>
    </GestureHandlerRootView>
)};
```