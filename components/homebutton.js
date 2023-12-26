// components/Homebutton.js
import React from 'react';
import { View, Button } from 'react-native';
import { Card, Text } from 'react-native-elements';

const homebutton = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card containerStyle={{ padding: 20, width: '80%' }}>
        <Text h4 style={{ marginBottom: 20, textAlign: 'center' }}>
          Welcome to pjpj App!
        </Text>
        <Button
          title="알약분석"
          onPress={() => navigation.navigate('PillScreen')}
          buttonStyle={{ backgroundColor: 'aquablue' }}
        />
        <Button
          title="처방전분석"
          onPress={() => navigation.navigate('InfoScreen')}
          buttonStyle={{ backgroundColor: 'blue', marginTop: 10 }}
        />
      </Card>
    </View>
  );
};

export default homebutton;
