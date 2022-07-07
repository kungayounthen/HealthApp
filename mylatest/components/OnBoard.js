import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import colors from '../assets/colors';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useFonts } from 'expo-font';
import details from '../assets/details'
  const OnBoard = (props) => {
  const [loaded] = useFonts({
    InriaSansLightItalic: require('../assets/fonts/InriaSans-LightItalic.ttf'),
  });
  if (!loaded) return null;
  const renderItem = ({ item }) => {
    return(<View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
    );
  };
  const keyExtractor = (item) => {
    item.title;
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 , backgroundColor:colors.midGreen}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={details}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        onDone={()=>props.navigation.replace('Dashboard')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.midGreen,
  },
  image: {
    marginLeft: 50,
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    color: colors.white,
    marginHorizontal: 60,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    fontFamily: 'InriaSansLightItalic',
    textAlign: 'center',
    color: colors.white,
    marginHorizontal: 60,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightText: {
    color: colors.white,
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftText: {
    color: colors.white,
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
  },
  dotStyle: {
    backgroundColor: colors.fadedWhite,
  },
  activeDotStyle: {
    backgroundColor: colors.white,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
  },
  doneButtonText: {
    fontSize: 14,
    marginRight:20,
    fontFamily: 'OpenSans_SemiBold',
    textAlign: 'center',
    color: colors.white,
  },
});

export default OnBoard;
