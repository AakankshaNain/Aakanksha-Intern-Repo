**What are the key differences between stack, tab, and drawer navigation?**
*Stack navigation* works on a stack of screens. Users can navigate back and forth between the stack of screens.
*Tab navigation* provides a navigation bar on the top or bottom of the screen. Users can switch between the screens using that.
*Drawer navigation* gives a sidebar with all the links to the different screens, using which users can switch between the screens.

**How does React Navigation handle screen transitions?**
It provides in-built transitions for each navigation, like stack (sliding), tab provides direct navigation from top or bottom, and drawer provides a slide-in sidebar.
These transitions can also be customized.

**How would you implement deep linking in a React Native app?**
1. First, set the linking configuration containing the URL of the React app and the different screen URLs.
2. Then pass linking as a prop to the 'NavigationContainer' containing the screens.
3. Go to Chrome, pass the link 'exp://172....', and it will navigate to the expo go.


## NAVIGATION

*Stack*
```
<NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
  <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
</NavigationContainer>
```

*Tab*
```
<Tabs.Navigator>
  <Tabs.Screen name="Home" component={Home} />
  <Tabs.Screen name="Details" component={Details} />
</Tabs.Navigator>
```

*Drawer*
```
<drawer.Navigator>
  <drawer.Screen name="Home" component={Home} />
  <drawer.Screen name="Details" component={Details} />
</drawer.Navigator>
```