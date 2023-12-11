import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { Asset } from "expo-asset";
import { Button } from "@ui-kitten/components";

const InboxImage = () => {
  const [sound, setSound] = useState();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const initSound = async () => {
      const soundObject = new Audio.Sound();
      const source = Asset.fromModule(require('../../assets/beach.mp3')).uri;

      try {
        await soundObject.loadAsync({ uri: source });
        setSound(soundObject);
      } catch (error) {
        console.error('Error loading sound:', error);
      }
    };

    const getImageUrlFromApi = async () => {
      try {
        const apiKey = "_65sR5tfOt2IzSVxI_Dd40OC8tFk3X-VAw5K7LxeCEY";
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=beach&client_id=${apiKey}`
        );
        const data = await response.json();

        if (data.urls && data.urls.regular) {
          setImageUrl(data.urls.regular);
        } else {
          console.error("Invalid image response:", data);
        }
      } catch (error) {
        console.error("Error fetching image URL from API:", error);
      }
    };
    initSound();
    getImageUrlFromApi();
  }, []);

  const playSound = async () => {
    try {
      if (sound) {
        await sound.playAsync();
      }
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  const stopSound = async () => {
    try {
      if (sound) {
        await sound.pauseAsync();
        await sound.setPositionAsync(0);
      }
    } catch (error) {
      console.error("Error stopping sound:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={playSound}>
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 300, height: 400, borderRadius: 10 }}
          />
        ) : (
          <Text>Loading...</Text>
        )}
      </TouchableOpacity>
      <Button
        style={styles.stop}
        appearance="ghost"
        status="info"
        size="medium"
        onPress={stopSound}
      >
        Stop Sound
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 10,
  },
  stop: {
    marginBottom: 10,
  },
});

export default InboxImage;
