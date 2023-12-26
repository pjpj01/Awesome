// components/PillScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Tts from 'react-native-tts';
import { RNCamera } from 'react-native-camera';

const PillScreen = () => {
  const [isCameraModalVisible, setCameraModalVisible] = useState(false);

  useEffect(() => {
    // Clean up the TTS engine when the component is unmounted
    return () => {
      Tts.stop();
      Tts.shutdown();
    };
  }, []);

  const speakDescription = () => {
    Tts.speak('알약 분석 - 이미지 설명');
  };

  const handleCameraCapture = async () => {
    // Add logic to handle the captured image
    setCameraModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../path-to-your-image/pill_image.jpg')} // Update the path to your pill image
        style={styles.image}
      />
      <Text style={styles.description}>알약 분석 - 이미지 설명</Text>
      <TouchableOpacity onPress={speakDescription} style={styles.speakButton}>
        <Text style={styles.speakButtonText}>음성으로 읽기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCameraModalVisible(true)} style={styles.cameraButton}>
        <Text style={styles.cameraButtonText}>카메라로 촬영</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={false} visible={isCameraModalVisible}>
        <RNCamera
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
        >
          <TouchableOpacity onPress={handleCameraCapture} style={styles.captureButton}>
            <Text style={styles.captureButtonText}>촬영</Text>
          </TouchableOpacity>
        </RNCamera>
      </Modal>
    </View>
  );
};

// ... (rest of the styles)

export default PillScreen;
