import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => {
  const [holeNumber, setHoleNumber] = useState(1);
  const [holePar, setHolePar] = useState(3);
  const [holeScore, setHoleScore] = useState(1);
  var courseName = "Seletar Country Club"

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>
      Course name: {"\n"} 
      
        {courseName}
      
    </Text>
      <View>
        <Text style={styles.title}>
          Hole Number:
          {"\n"} 
          {"\n"}
          <Text style={styles.title}>{holeNumber}</Text>
        </Text>
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>Par </Text>
        <View>
        <View style={styles.fixToText}>
          <Button title="-" onPress={() => setHolePar(holePar - 1)} />
          <Text style={styles.title}>
            {holePar}
          </Text>
          <Button title="+" onPress={() => setHolePar(holePar + 1)} />
        </View>
      </View>
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>Score </Text>
        <View style={styles.fixToText}>
          <Button title="-" onPress={() => setHoleScore(holePar - 1)} />
          <Text style={styles.title}>
            {holeScore}
          </Text>
          <Button title="+" onPress={() => setHoleScore(holePar + 1)} />
        </View>
      </View>
      <Separator />
          
      <View>
        <View style={styles.fixToText}>
          <Button title="Previous Hole" onPress={() => setHoleNumber(holeNumber + 1)} />
          <Button title="Next Hole" onPress={() => setHoleNumber(holeNumber + 1)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;

