/* eslint-disable global-require */
import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Avatar, SocialIcon } from 'react-native-elements';
import { Screen } from '../../component/common/Screen';
import { FACEBOOK, GITHUB, LINKEDIN } from '../../constants';

const About = props => {
  return (
    <Screen>
      <View key="header" style={{ alignItems: 'center' }}>
        <Avatar rounded source={require('../../assets/images/zubair.jpg')} size="xlarge" />
        <Text style={{ fontSize: 20 }}>Sheikh Zubair Ahmed</Text>
      </View>
      <View key="content">
        <SocialIcon
          title="Follow Me On Facebook"
          button
          type="facebook"
          onPress={() => Linking.openURL(FACEBOOK)}
        />
        <SocialIcon
          title="Follow Me On Github"
          button
          type="github"
          onPress={() => Linking.openURL(GITHUB)}
        />
        <SocialIcon
          title="Follow Me On LinkedIn"
          button
          type="linkedin"
          onPress={() => Linking.openURL(LINKEDIN)}
        />
      </View>
      <View key="footer" />
    </Screen>
  );
};

export default About;
