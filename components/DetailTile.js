import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function DetailTile({ navigation,item }) {
  return (
    <View>
      <View
        style={{
          ...styles.mainCardStyles,
          height:  250,
          flexDirection: 'row',
          paddingTop:10,
          paddingBottom:  10,
        }}
      >
      <TouchableOpacity onPress={()=> navigation.navigate('Details',{id: item._id})} style={{ flex: 1, flexDirection:'row'}}>

      <View>
          <Image
            source={{
              uri: item.poster_path,
            }}
            resizeMode='contain'
            style={{
              borderRadius: 4,
              width: 150,
              height: "100%",
            }}
          />
        </View>

        
        <View style={{ flex: 1, justifyContent: "center", marginLeft: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "left",
              textTransform: "capitalize",
            }}
          >
            {`${item.original_title}`}
          </Text>
        </View>

        <View style={{}}>
          <Text
            style={{
              fontWeight: "bold",
              backgroundColor: "gold",
              borderRadius: 50,
            }}
          >
            {`${item.release_date}`}
          </Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCardStyles: {
    height: 250,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 8,
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 6,
    marginBottom: 6,
  },
});
