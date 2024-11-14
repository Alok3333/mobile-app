import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, Chip, List, Card } from 'react-native-paper';
import * as firebase from 'firebase/app';
//import 'firebase/firestore';
//import 'firebase/auth';
import { Image } from 'expo-image';
import { FontAwesome, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import global1 from '../context/global1';

import { getAuth, signInAnonymously } from "firebase/auth";

import { getFirestore, collection, addDoc, doc,  query, where, getDocs, setDoc } from "firebase/firestore";
//import 'firebase/compat/firestore';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/storage'; 
import React, { useState, useContext, useEffect } from "react";
import * as Speech from 'expo-speech';
// import { StyleSheet, View, FlatList, ScrollView, Dimensions, ImageBackground, TouchableOpacity, ActivityIndicator, Image, Text } from "react-native";

export default function App({ navigation }) {



  const [results, setResults] = useState([]);

  const speak = () => {
    const thingToSay = 'Hi, I am POSTO, Your friend and guide. ';
    Speech.speak(thingToSay);
    //Speech.speak("Let us start our journey together");
  };

const writedata=async()=> {
    const fapp=firebase.initializeApp({
        apiKey: "AIzaSyD4AZlzFUmachQCJYr-vlb9XKJix3NMg-E",
        authDomain: "posto-campus.firebaseapp.com",
        databaseURL: "https://posto-campus.firebaseio.com",
        projectId: "posto-campus",
        storageBucket: "posto-campus.appspot.com",
        messagingSenderId: "1002415317254",
        appId: "1:1002415317254:web:f198e146e4c2a9ab86fe87",
        measurementId: "G-W6SP1NZPMJ"
    });

    const db = getFirestore(fapp);

const dref = collection(db, "assets");


var dt2=new Date();

await setDoc(doc(dref), {
  asset: "AMD comp 2", type: "Computer", status: "Available",
  datecompleted: dt2, user:"demo@campus.technology", colid:30 });

}

const readdata=async()=> {
    const fapp=firebase.initializeApp({
        apiKey: "AIzaSyD4AZlzFUmachQCJYr-vlb9XKJix3NMg-E",
        authDomain: "posto-campus.firebaseapp.com",
        databaseURL: "https://posto-campus.firebaseio.com",
        projectId: "posto-campus",
        storageBucket: "posto-campus.appspot.com",
        messagingSenderId: "1002415317254",
        appId: "1:1002415317254:web:f198e146e4c2a9ab86fe87",
        measurementId: "G-W6SP1NZPMJ"
    });
    const db = getFirestore(fapp);
    const q = query(collection(db, "assets"), where("user", "==", "demo@campus.technology"), where("colid", "==", 30));

const querySnapshot = await getDocs(q);

const Comment = [];

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  const { asset, type, status, datecompleted } = doc.data();
  var dt1=new Date(datecompleted);
  console.log(asset + ',' + type + ',' + status + ',' + datecompleted + ',' + dt1.toString());
          Comment.push({
            _id: doc.id,
            asset,
            type,
            status,
            datecompleted
        });
        setResults(Comment);
});



}

const firelogin=async ()=> {

  const fapp=firebase.initializeApp({
    apiKey: "AIzaSyD4AZlzFUmachQCJYr-vlb9XKJix3NMg-E",
    authDomain: "posto-campus.firebaseapp.com",
    databaseURL: "https://posto-campus.firebaseio.com",
    projectId: "posto-campus",
    storageBucket: "posto-campus.appspot.com",
    messagingSenderId: "1002415317254",
    appId: "1:1002415317254:web:f198e146e4c2a9ab86fe87",
    measurementId: "G-W6SP1NZPMJ"
});

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    // Signed in..
    //alert('Signed in');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + ' ' + errorMessage);
    // ...
  });

const db = getFirestore(fapp);












}



useEffect(() => {
  //searchApi('');
  //firelogin();
  //speak();

  

}, []);

const gototracksnapshot=(category)=> {
    global1.trackcat=category;
    navigation.navigate('Trackbycat')
}


const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
    <ScrollView  style={styles.scrollView} 
    contentContainerStyle={styles.contentContainer}>

{/* <Image
        style={{ width: '100%', height: '48%', paddingBottom: 30}}
        source="https://epaathsala.s3-ap-south-1.amazonaws.com/1-2024-1-2329-course.jpg"
        contentFit="cover"
        transition={1000}
      /> */}



{/* <Text variant="titleMedium" style={{marginTop: -60}}> Learning track</Text> */}



<View style={{width:'100%', backgroundColor: '#F7F7F5', padding: 20, marginTop: 10}}>

<Text variant="titleLarge"  style={{ alignSelf: 'left', paddingRight: 20, paddingTop: 0, paddingBottom: 0 }}>
   Virtual Simulation Lab for Science
</Text>
<Text variant="bodySmall"  style={{ alignSelf: 'left', marginTop:10, paddingRight: 20, paddingTop: 0, paddingBottom: 0 }}>
   Test your skills in virtual simulation labs.
</Text>

</View>

<Text variant="titleLarge"  style={{ alignSelf: 'left', paddingRight: 20, marginTop:20, paddingTop: 0, paddingBottom: 0 }}>
   Categories
</Text>




<Button  mode="text" style={{marginTop: 20}} onPress={() => navigation.navigate('Dragtest')}>
    Nutrition
  </Button>







{/* <View style={{marginTop: 40, flexDirection: 'row'}}>


   
    <TouchableOpacity style={{ backgroundColor: '#240A98', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, borderRadius: 12 }} onPress={() => gototracksnapshot('Soft skills')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Soft skills</Text>
</TouchableOpacity>

<TouchableOpacity style={{ backgroundColor: '#FF5733', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, marginLeft:20, borderRadius: 12 }} onPress={() => gototracksnapshot('Technical')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Technical</Text>
</TouchableOpacity>
</View> */}


{/* <View style={{marginTop: 40, flexDirection: 'row'}}>
   
    <TouchableOpacity style={{ backgroundColor: '#35B480', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, borderRadius: 12 }} onPress={() => gototracksnapshot('Productivity')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Productivity</Text>
</TouchableOpacity>

<TouchableOpacity style={{ backgroundColor: '#B43576', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, marginLeft:20, borderRadius: 12 }} onPress={() => gototracksnapshot('Marketing')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Marketing</Text>
</TouchableOpacity>
</View> */}

{/* <View style={{marginTop: 40, flexDirection: 'row'}}>
   
    <TouchableOpacity style={{ backgroundColor: '#9DAA19', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, borderRadius: 12 }} onPress={() => gototracksnapshot('Business')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Business</Text>
</TouchableOpacity>

<TouchableOpacity style={{ backgroundColor: '#14387A', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, marginLeft:20, borderRadius: 12 }} onPress={() => gototracksnapshot('Finance')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Finance</Text>
</TouchableOpacity>
</View> */}

{/* <View style={{marginTop: 40, flexDirection: 'row'}}>
   
    <TouchableOpacity style={{ backgroundColor: '#1558E7', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, borderRadius: 12 }} onPress={() => gototracksnapshot('Life skills')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Life skills</Text>
</TouchableOpacity>

<TouchableOpacity style={{ backgroundColor: '#E715CA', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, marginLeft:20, borderRadius: 12 }} onPress={() => gototracksnapshot('Vocational')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Vocational</Text>
</TouchableOpacity>
</View> */}

{/* <View style={{marginTop: 40, flexDirection: 'row'}}>
   
    <TouchableOpacity style={{ backgroundColor: '#98220A', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, borderRadius: 12 }} onPress={() => gototracksnapshot('Music')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Music</Text>
</TouchableOpacity>

<TouchableOpacity style={{ backgroundColor: '#4B980A', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, marginLeft:20, borderRadius: 12 }} onPress={() => gototracksnapshot('Dance')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Dance</Text>
</TouchableOpacity>

<TouchableOpacity style={{ backgroundColor: '#A7491E', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, marginLeft:20, borderRadius: 12 }} onPress={() => gototracksnapshot('Fitness')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Fitness</Text>
</TouchableOpacity>
</View> */}

{/* <View style={{marginTop: 40, flexDirection: 'row'}}>
   
    <TouchableOpacity style={{ backgroundColor: '#0F430F', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, borderRadius: 12 }} onPress={() => gototracksnapshot('Career')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Career</Text>
</TouchableOpacity>

<TouchableOpacity style={{ backgroundColor: '#6B2BBD', paddingTop: 10, paddingBottom:10, paddingLeft:20, paddingRight: 20, marginLeft:20, borderRadius: 12 }} onPress={() => gototracksnapshot('Competitive')}>
  <Text style={{ color: '#fff', fontSize: 18 }}>Competitive exam</Text>
</TouchableOpacity>
</View> */}


    
  
     
                                        
                                    </ScrollView>
                                    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0
  },
  scrollView: {
    height: '100%',
    width: '100%',
    margin: 0,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 0,
    borderRadius: 0,
    borderColor: 'black',
    backgroundColor: 'white'
  },
  contentContainer: {
    justifyContent: 'left',
    alignItems: 'left',
    backgroundColor: 'white',
    paddingBottom: 150
  },
  image: {

    width: 80,
    height: 80,
    backgroundColor: '#fff',
  },
});
