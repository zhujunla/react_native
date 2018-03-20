/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class App extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            bodyText:"112234556"
        };
      }
    onPressTitle = function () {
        console.info(123)
    }
    render(){
        return (<Text style={styles.baseText}>
            <Text style={styles.titleText} onPress={this.onPressTitle}>
                {this.state.titleText}
            </Text>
            <Text numberOfLines={5}>
                {this.state.bodyText}
            </Text>
        </Text>)
        }
    }

export default App;

const styles = StyleSheet.create({
                baseText: {
                    fontFamily: 'Cochin',
                },
                titleText: {
                    fontSize: 20,
                    fontWeight: 'bold',
                }
    })