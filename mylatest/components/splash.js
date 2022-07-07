import React,{useEffect,useState} from 'react'
import {SafeAreaView,Text,StyleSheet} from 'react-native'
import Colors from '../assets/colors'
import RNBootSplash from 'react-native-bootsplash';


const Splash=({navigation})=> {
  const [timePassed, setTimePassed] = useState(false);
     useEffect(() => {
    setTimeout(() => {
      setTimePassed(true);
    }, 5000);
  }, []);
  useEffect(() => {
    if (timePassed) {
      navigation.replace('OnBoard');
    }
  }, [timePassed,navigation]);
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={styles.textstyle}>
    fitness
    </Text>
    </SafeAreaView>
  );
  }

const styles = StyleSheet.create({
  textstyle:{
    fontWeight:'bold',
    fontSize:30,
    color:Colors.midGreen,
  }
});
export default Splash