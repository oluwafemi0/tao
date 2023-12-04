import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Search({}) {
  return (
    <View style={styles.container}>
      <Text style={{
              fontWeight: "bold",
              fontSize: 45,
              fontStyle: "italic",
              textAlign: "center",
              textTransform: "capitalize",
              color: '#fff', 
            }}>
         Tao
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    padding: 10,
    backgroundColor: "#fff",
  },
  container: {
    backgroundColor: "teal",
    height: 200,
    justifyContent: "center",
  },
});
