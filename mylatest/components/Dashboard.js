import React from 'react';
import {SafeAreaView,Text,StyleSheet,View,Image,FlatList,TouchableOpacity,Platform,StatusBar,Linking} from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../assets/colors'
import details from '../assets/details'
import { useFonts } from 'expo-font'; 
import CircularProgress from 'react-native-circular-progress-indicator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Setting from './setting'


const cycle=require('../assets/Icons/cycle.png');
const walk=require('../assets/Icons/walking.png');
const yoga=require('../assets/Icons/meditate.png');

const Dashboard=({navigation})=>{
  const [loaded] = useFonts({
    OoohBaby: require('../assets/fonts/OoohBaby-Regular.ttf'),
    InriaSans: require('../assets/fonts/InriaSans-LightItalic.ttf')
  });
  if (!loaded) return null;
  
  return(
    <SafeAreaView style={styles.Container}>
    <Header/>
    <View style={styles.banner}>
    <Banner go={navigation}/>
    </View>
    <Text style={{marginHorizontal:'4%',fontSize:30,fontFamily:'InriaSans',fontWeight:'bold'}}>Activities</Text>
    <View style={{flexDirection:'row'}}>
    {data.map((item, index) => (
              <Card data={item} index={index} navigation/>))
    }
    </View>
    <Text style={{marginHorizontal:'4%',fontSize:30,fontFamily:'InriaSans',fontWeight:'bold'}}>Calculate</Text>
    <View style={{margin:'4%',flex:0.5,borderRadius:30,backgroundColor:colors.white}}>
    <TouchableOpacity style={{borderWidth:1,width:'80%',alignSelf:'center',alignItems:'center',borderRadius:40,padding:5,marginTop:'5%',backgroundColor:colors.black}} onPress={()=>navigation.navigate('BMI')}>
    <Text style={{fontWeight:"bold",color:colors.white}}>Calorie Tracker</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};
const Header=()=>{
  return(
    <View style={styles.header}>
    <ImageContainer image={require('../assets/Icons/profile.png')}/>
    <HeaderTitle/>
    </View>
    
  )
}
const Banner=({go})=>{
  const segment=[
    {
      text:'fever',
      image:require('../assets/Icons/fever.png'),
    },
    {
      text:'Acne',
      image:require('../assets/Icons/acne.png'),
    },
    {
      text:'Breathing Problems',
      image:require('../assets/Icons/lungs.png'),
    },
    {
      text:'Pregnancy',
      image:require('../assets/Icons/pregnancy.png'),
    }
  ]
  return(
    <FlatList 
    keyExtractor={(item)=>{
      return item.image;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={segment}
      renderItem={({item})=>{
        return(
          <TouchableOpacity style={styles.bannerItems} onPress={()=> go.navigate('menu')}>
          <View style={styles.bannerImage}>
          <Image source={item.image} style={{justifyContent:'center', alignItems:'center',borderWidth:1}}/>
          </View>
          <Text style={styles.bannerText}>{item.text}</Text>
          </TouchableOpacity>
        )
      }}
    />
  )
}
const HeaderTitle=()=>{
  return(
  <View style={styles.title}>
  <Text style={styles.bigTitle}>Hi,John</Text>
  <Text style={styles.smallTitle}>1 Jul 2022</Text>
  </View>
  );
};
const ImageContainer=({image})=>{
  return(
  <View style={styles.imageContainer}>
  <Image source={image} style={styles.image}/>
  </View>
  );
}
const Card = ({data, index}) => {
  return (
    <View
      style={{
        flex: 1,
        height: index === 1 ? 200 : 170,
        padding: 10,
        alignSelf: 'center',
        backgroundColor: data.color,
        justifyContent: 'space-between',
        marginHorizontal: 8,
        borderRadius: 10,
        shadowColor: colors.midGreen,
        shadowOffset: {width: -10, height: 10},
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}>
      <Image source={data.image} style={{height: 25, width: 25}} />
      <View style={{alignSelf: 'center', margin: 5}}>
        <CircularProgress
        radius={30}
        value={data.status}
        textColor='#222'
        valueSuffix={"%"}
        activeStrokeColor={'#56ab2f'}
        activeStrokeSecondaryColor={'#a8e063'}
        inActiveStrokeColor={'#2ecc71'}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={4}
        activeStrokeWidth={6}
        duration={3000}
        circleBackgroundColor={colors.white}
        valueSuffixStyle={{alignItems:"center",justifyContent:'center'}}
        textStyle={{alignItems:'center'}}
      />
      </View>
      <View>
        <Text style={{fontSize: 10, fontFamily: 'Poppins-Light'}}>
          {'Day     1'}
        </Text>
        <Text style={{fontSize: 10, fontFamily: 'Poppins-Light'}}>
          {'Time   20 min'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>{data.name}</Text>
        <View
          style={{
            backgroundColor: data.lightColor,
            padding: 2,
            borderRadius: 20,
          }}>
          <Image
            source={require('../assets/Icons/next.png')}
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    </View>
  );
};
const data = [
  {
    name: 'Cycling',
    status: 85,
    image: cycle,
    lightColor: '#f8e4d9',
    color: '#fcf1ea',
  },
  {
    name: 'Walking',
    status: 25,
    image: walk,
    lightColor: '#d7f0f7',
    color: '#e8f7fc',
  },
  {
    name: 'Yoga',
    status: 85,
    image: yoga,
    lightColor: '#dad5fe',
    color: '#e7e3ff',
  },
];
const Tab=createBottomTabNavigator();
export const BottomTab=()=>{
  return(
    <Tab.Navigator>
    <Tab.Screen name="settings" component={Setting}/>
    </Tab.Navigator>
  )
}
const styles=StyleSheet.create({
  Container: {
    flex:1,
    backgroundColor:colors.skinlight,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  header:{
    padding:15,
    flexDirection:"row",
  },
  image:{
    height:'100%',
    width:'100%',
  },
  imageContainer:{
    width:60,
    height:60,
    borderRadius:50,
    backgroundColor:colors.midGreen,
    overflow:'hidden',
  },
  title:{
    padding:10,
    flex:1,
    justifyContent:'center'
  },
  bigTitle:{
    fontSize:24,
    fontFamily:'OoohBaby',
    fontWeight:"bold"
  },
  smallTitle:{
    fontSize:12,
    fontFamily:'Poppins-Regular',
    opacity:0.6,
  },
  banner:{

    margin:'3%',
    backgroundColor:colors.white,
    borderRadius:40,
    flex:0.3,
    resizeMode:'center',
  },
  bannerItems:{
    
    marginTop:10,
    marginHorizontal:16,
    resizeMode:'center'
  },
  bannerImage:{
    width:'50%',
    height:'50%',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    backgroundColor:colors.midGreen,
    resizeMode:'center',
    overflow:'hidden',
    margin:5,
    marginBottom:-20,
  },
  bannerText:{
    textAlign:'center'
  }
})


export default Dashboard ;