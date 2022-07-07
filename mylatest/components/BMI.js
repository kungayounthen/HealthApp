import React from 'react' 
import {View,StyleSheet,Text,TextInput,TouchableOpacity,SafeAreaView,Dimensions} from 'react-native'
import colors from '../assets/colors'
import {Picker} from '@react-native-picker/picker'
import RNPickerSelect from 'react-native-picker-select';

const BMR=({navigation})=>{
  const [genderSelected,setGenderSelected]=React.useState('');
const [dimensionSelected,setDimensionSelected]=React.useState(null);
const [heightFeet,setheightFeet]=React.useState(0);
  const [heightInch,setHeightInch]=React.useState(0);
  const [weight,setWeight] =React.useState(0);
  const [age,setAge]=React.useState(0);
  const [heightCm,setHeightCm]=React.useState(0);
  const [bmr,setBmr] = React.useState(0);
 const Calculate=()=>{
  let feet=heightFeet;
   let inch=heightInch;
  let total=((feet*30.48)+(inch*2.54));
    const weight=weight-0;
  let age=age-0;
    let cm=heightCm;
    let gender=genderSelected
    let bmrcal=0
    if(gender==='Male')
    bmrcal=1587
    else if(gender==='Female')
    bmrcal=1230
    // bmrcal = 66.47 + ( 6.24 * weight) + ( 12.7 * total ) - ( 6.755 * parseInt(age)) ;
    // else
    // bmrcal = 655.1 + ( 4.35 * weight ) + ( 4.7 * total ) - ( 4.7 * age);
    setBmr(bmrcal)
    } 
return(
  <SafeAreaView style={styles.container}>
  <View style={styles.box}>
  <Text style={styles.text}>BMR & Calorie Calulator</Text>
  <Gender style={{width:'50%',textAlign:'center'}} setgender={setGenderSelected}/>
  <Units setValue={setDimensionSelected}/>
  {(dimensionSelected=='feet')&&<FeetUnit setfeet={setheightFeet} setinch={setHeightInch} setweight={setWeight} setage={setAge}/>}
  {(dimensionSelected=='cm')&&<MetriUnit setheight={setHeightCm} setweight={setWeight} setage={setAge}/>}
  <TouchableOpacity style={{flex:1,borderWidth:1,padding:'5%',margin:'3%',backgroundColor:colors.black,borderRadius:10}} onPress={()=>Calculate()}>
    <Text style={{color:colors.white,alignSelf:'center'}}>Calculate BMR</Text>
  </TouchableOpacity>
  <Text style={{alignSelf:'center',fontWeight:'bold',marginVertical:10}}> your BMR:{bmr}</Text>
  </View>
  <TouchableOpacity onPress={()=>navigation.goBack()} style={{backgroundColor:colors.white,width:40,height:40,borderRadius:10,marginVertical:'15%'}}>
  Go Back </TouchableOpacity>
  </SafeAreaView>
)
}

//Gender picker
const Gender= ({setgender}) => {
    return (
        <RNPickerSelect
            onValueChange={(value) => setgender(value)}
            items={[
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
            ]}
            placeholder={{label:'Gender',value:null,}}
        />
    );
};

const Units=({setValue})=>{
  return(
    <RNPickerSelect
            onValueChange={(value) =>setValue(value)}
            items={[
                { label: 'Feet', value: 'feet' },
                { label: 'Centimeter', value: 'cm' },
            ]}
            placeholder={{label:'Height Unit',value:null,}}
        />
  )
}
const FeetUnit=({setinch,setfeet,setweight,setage})=>
{
  return(
    <View>
    <View style={{flexDirection:'row',margin:'3%',resizeMode:'contain',}}>
    <Text style={{marginRight:'2%'}}>Height:</Text>
    <TextInput keyboardType='numeric' style={{borderWidth:1,width:'50%',borderRadius:5,textAlign:'center'}} placeholder='feet'onChangeText={(val)=>setfeet(val)}/>
    <TextInput keyboardType='numeric' style={{borderWidth:1,width:'50%',borderRadius:5,textAlign:'center'}} placeholder='inches' onChangeText={(val)=>setinch(val)}/>
    </View>
    <View style={{flexDirection:'row',margin:'3%',resizeMode:'contain',}}>
    <Text style={{marginRight:'2%'}}>Weight:</Text>
    <TextInput keyboardType='numeric' style={{borderWidth:1,width:'50%',borderRadius:5,textAlign:'center'}} placeholder='lbs' onChangeText={(val)=>setweight(val)}/>
    </View>
    <View style={{flexDirection:'row',margin:'3%',resizeMode:'contain',}}>
    <Text style={{marginRight:'2%'}}>Age:</Text>
    <TextInput keyboardType='numeric' style={{borderWidth:1,width:'50%',borderRadius:5,textAlign:'center'}} placeholder='yrs' onChangeText={(val)=>setage(val)}/>
    </View>
    </View>
  )
}

//Metric Unit
const MetriUnit=({setheight,setweight,setage})=>{
  return(
  <View>
    <View style={{flexDirection:'row',margin:'3%',resizeMode:'contain',}}>
    <Text style={{marginRight:'2%'}}>Height:</Text>
    <TextInput keyboardType='numeric' style={{borderWidth:1,width:'50%',borderRadius:5,textAlign:'center'}} placeholder='cm' onChangeText={(val)=>setheight(val)}/>
    </View>
    <View style={{flexDirection:'row',margin:'3%',resizeMode:'contain',}}>
    <Text style={{marginRight:'2%'}}>Weight:</Text>
    <TextInput keyboardType='numeric' style={{borderWidth:1,width:'50%',borderRadius:5,textAlign:'center'}} placeholder='kg' onChangeText={(val)=>setweight(val)}/>
    </View>
    <View style={{flexDirection:'row',margin:'3%',resizeMode:'contain',}}>
    <Text style={{marginRight:'2%'}}>Age:</Text>
    <TextInput keyboardType='numeric' style={{borderWidth:1,width:'50%',borderRadius:5,textAlign:'center'}} placeholder='yrs'onChangeText={(val)=>setage(val)}/>
    </View>
    </View>
  );
}

const styles=StyleSheet.create({
container:{
flex:1,
backgroundColor:colors.black,
justifyContent:'center',
},
box:{
  backgroundColor:colors.white,
  margin:'9%',
  borderRadius:10
},
text:{
  color:colors.black,
  alignSelf:'center',
  fontWeight:'bold',
  fontFamily:'Ooobaby',
  fontSize:18,
},
})
export default BMR;