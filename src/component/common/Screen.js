import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';

class Screen extends Component {
  getComponent(key) {
    const { children } = this.props;
    return children.filter(comp => comp.key === key);
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareView animated={false} doNotForceDismissKeyboardWhenLayoutChanges={false}>
          {this.getComponent('header') ? (
            <View style={styles.header}>{this.getComponent('header')}</View>
          ) : null}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {this.getComponent('content')}
          </ScrollView>
          {this.getComponent('footer') ? (
            <View style={styles.footer}>{this.getComponent('footer')}</View>
          ) : null}
        </KeyboardAwareView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  footer: {
    marginTop: 0,
  },
  header: {
    marginBottom: 10,
  },
});

export { Screen };
