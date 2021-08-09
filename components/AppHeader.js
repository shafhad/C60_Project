import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'ffffff' }}>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>School Attendance</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "blue",
    marginBottom: 30,
    padding:8,
  },
  textStyle: {
    color: 'white',
    fontSize: 32,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
   // fontFamily: 'Candara',
  },
});
