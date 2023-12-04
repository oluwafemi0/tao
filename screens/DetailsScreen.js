import { View, Text, ActivityIndicator, StyleSheet,Image,ScrollView,TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";


export default function DetailsScreen({ route, navigation }) {
  const [loading, setLoading] = useState(true);
  const [detailsData, setDetailsData] = useState(null);

  const { params } = route;
  const { id } = params;

  useEffect(() => {
    async function getMovieDetailsById() {
      try {
        const apiRes = await fetch(
          `https://movies-api14.p.rapidapi.com/movie/${id}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "e09ebf5ff1msh3e2ab0792cc8ea1p1ea4e8jsn55188ddb8b29",
              "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
            },
          }
        );

        const result = await apiRes.json();

        if (result && result.movie) {
          setDetailsData(result.movie);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    }

    if (id) {
      getMovieDetailsById();
    }
  }, [id]);

  if (loading) {
    return (
      <ActivityIndicator size={"large"} color={"teal"} style={{ flex: 1 }} />
    );
  }

  const MovieCard = ({ movie }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Image
          source={{ uri: movie.poster_path }}
          resizeMode='cover'
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>{detailsData?.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
    <View style={{flex:1}}>
      <Image
        source={{
          uri: detailsData?.poster_path,
        }}
        resizeMode='stretch'
        style={{
          width: '100%',
          height: '55%',
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{detailsData?.title}</Text>
        <View style={styles.supertextContainer}>
          <Text style={styles.superTitle}>{detailsData?.vote_average}/10</Text>
          <Text style={styles.superTitle}>{detailsData?.genres?.[0]}</Text>
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.overviewText}>{detailsData?.overview}</Text>
        </View>
      </View>

      
      </View>
        
        
      <View>
      
      <Text style={styles.title}></Text>
      <ScrollView style={styles.scrollView} horizontal={true}  showsHorizontalScrollIndicator={false}>
      {[1, 2, 3, 4, 5].map((item) => (
        <View key={item} style={styles.cardContainer}>
          <MovieCard movie={detailsData} />
        </View>
      ))}
    </ScrollView>
    </View>

      <StatusBar style="light" />
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    padding: 10,
    textTransform: "capitalize",
    backgroundColor: "#fff",

  },
  superTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    padding: 10,
    textTransform: "capitalize",
    color: 'teal',


  },
  overviewText: {
    fontWeight: "semibold",
    fontSize: 16,
    textAlign: "justify",
    textTransform: "capitalize",

  },
  textContainer: {
    flex: 1,
    padding: 10,
    height: 150,
    backgroundColor: "#fff",
  },
  supertextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    backgroundColor: "#fff",
  },
  scrollView: {
    marginTop: 10,
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: 'gray',
    overflow: 'hidden',
    marginBottom: 10,
  },
  cardImage: {
    width: 150,
    height: 120,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  cardContainer: {
    marginRight: 10,
  },
});
