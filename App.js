import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants, MapView } from 'expo';

export default class App extends Component {
  state = {
    mapRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: 'stretch', height: 800 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
  },
});
