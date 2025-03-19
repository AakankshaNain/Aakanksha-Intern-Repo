import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{fontSize:24, fontWeight: "bold", marginBottom: 20}}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
};

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

export default Counter;
