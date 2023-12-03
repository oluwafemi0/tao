import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import CardTile from "../components/CardTile";
import DetailTile from "../components/DetailTile";

export default function DetailsScreen({ route, navigation }) {
  const [loading, setLoading] = useState(true);
  const [detailsData, setDetailsData] = useState(null);

  const { params } = route;
  const { id } = params;

  useEffect(() => {
    if (id) {
      async function getMovieDetailsById() {
        const apiRes = await fetch(
          `https://movies-api14.p.rapidapi.com/movie/${id}`,
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
          setDetailsData(result.movie);
        }
      }

      getMovieDetailsById();
    }
  }, [id]);

  console.log(detailsData, loading);

  if (loading) {
    return (
      <ActivityIndicator size={"large"} color={"blue"} style={{ flex: 1 }} />
    );
  }

  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
