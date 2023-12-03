import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import CardTile from "../components/CardTile";

export default function HomeScreen({ navigation }) {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getLisOfMovies() {
      const apiRes = await fetch(
        "https://movies-api14.p.rapidapi.com/movies",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "e09ebf5ff1msh3e2ab0792cc8ea1p1ea4e8jsn55188ddb8b29",
            "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
          },
        }
      );

      const result = await apiRes.json();

      if (result) {
        setLoading(false);
        setMovieList(result.movies);
      }
    }

    getLisOfMovies();
  }, []);

  console.log(movieList, loading);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    return () => {};
  }, [navigation]);

  if (loading) {
    return (
      <ActivityIndicator color={"red"} style={{ flex: 1 }} size={"large"} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movieList || []}
        renderItem={({ item }) => <CardTile navigation={navigation} item={item} />}
      />

      <StatusBar style="light" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
