// components/InfoScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

const InfoScreen = () => {
  useEffect(() => {
    // Clean up the TTS engine when the component is unmounted
    return () => {
      Tts.stop();
      Tts.shutdown();
    };
  }, []);

  const speakDescription = () => {
    Tts.speak('처방전 분석 - 이미지 설명');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../path-to-your-image/image.jpg')} // Update the path to your image
        style={styles.image}
      />
      <Text style={styles.description}>처방전 분석 - 이미지 설명</Text>
      <TouchableOpacity onPress={speakDescription} style={styles.speakButton}>
        <Text style={styles.speakButtonText}>음성으로 읽기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Set the width of the image as per your requirement
    height: 200, // Set the height of the image as per your requirement
    resizeMode: 'cover', // Adjust the resizeMode based on your image aspect ratio
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
  speakButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  speakButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default InfoScreen;
