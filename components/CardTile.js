import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function CardTile({ navigation,item }) {
  return (
    <View>
      <View
        style={{
          ...styles.mainCardStyles,
          height:  250,
          flexDirection: 'row',
        }}
      >
      <TouchableOpacity onPress={()=> navigation.navigate('Details',{id: item._id})} style={{ flex: 1, flexDirection:'row'}}>

      <View>
          <Image
            source={{
              uri: item.poster_path,
            }}
            resizeMode='stretch'
            style={{
              borderRadius: 1,
              width: 180,
              height: "100%",
            }}
          />
        </View>

        
        <View style={{ flex: 1, justifyContent: "center", marginLeft: 10 ,backgroundColor: "#fff",}}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "left",
              textTransform: "capitalize",
              color: 'grey', 
            }}
          >
            {`${item.original_title}`}
          </Text>

          <Text
            style={{
              fontWeight: "bold",
              fontSize:12,
              color: 'teal', 
            }}
          >
            {`${item.genres[0]}`}
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
    borderColor: 'teal',
    flexDirection: "row",
    marginLeft: 16,
    marginRight: 16,
    marginTop: 6,
    marginBottom: 6,
    borderWidth: 1,
  },
});
