import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text, Button, Chip, List, Card } from 'react-native-paper';
// import * as firebase from 'firebase/app';
//import 'firebase/firestore';
//import 'firebase/auth';
// import { Image } from 'expo-image';
import { FontAwesome, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
// import global1 from '../context/global1';

// import { getAuth, signInAnonymously } from "firebase/auth";

// import { getFirestore, collection, addDoc, doc,  query, where, getDocs, setDoc } from "firebase/firestore";
//import 'firebase/compat/firestore';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/storage'; 
import React, { useState, useContext, useEffect } from "react";
// import * as Speech from 'expo-speech';
// import { StyleSheet, View, FlatList, ScrollView, Dimensions, ImageBackground, TouchableOpacity, ActivityIndicator, Image, Text } from "react-native";

import Draggable from 'react-native-draggable';

export default function dragtest({ navigation }) {

    // const name=global1.name;
    // const regno=global1.regno;
    // const user=global1.user;
    // const token=global1.token;

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

  const checkcoordinates=(x,y)=> {
    //alert();
    if((y>510 && y<580) && (x>80 && x<118)) {
        // alert('inside ' + x + ',' + y);
        alert('Congratulations, correct answer');
    } else {
        // alert('outside ' + x + ',' + y);
        alert('Oh oh! Please try again!!');
    }
    
  }

  return (
    
    <View style={styles.container}>

<View style={{position: 'absolute', left: 30, top:400, width: 140, height: 100, backgroundColor: 'lightblue'}}>
<Text variant="bodySmall" style={{marginTop: 40, alignSelf: 'center'}}> Symbiosis</Text>
</View>
<View style={{position: 'absolute', left: 180, top:400, width: 140, height: 100, backgroundColor: 'lightgreen'}}>
<Text variant="bodySmall" style={{marginTop: 40, alignSelf: 'center'}}> Lichens</Text>
</View>
<View style={{position: 'absolute', left: 180, top:520, width: 140, height: 100, backgroundColor: 'orange'}}>
<Text variant="bodySmall" style={{marginTop: 40, alignSelf: 'center'}}> Parasite</Text>
</View>
    {/* <ScrollView  style={styles.scrollView} 
    contentContainerStyle={styles.contentContainer}> */}

{/* <Image
        style={{ width: '100%', height: '48%', paddingBottom: 30}}
        source="https://epaathsala.s3-ap-south-1.amazonaws.com/1-2024-1-2329-course.jpg"
        contentFit="cover"
        transition={1000}
      /> */}



{/* <Text variant="titleMedium" style={{marginTop: -60}}> Learning track</Text> */}

{/* <Text variant="titleLarge">{name}</Text>
<Text variant="bodyLarge">Registration no {regno}</Text> */}

<View style={{width:'100%', backgroundColor: '#F7F7F5', padding: 20, marginTop: 10}}>



<Text variant="titleSmall"  style={{ alignSelf: 'left', paddingTop: 0, paddingBottom: 0 }}>
   Which category does this fungas belong to?
</Text>
{/* <Text variant="bodySmall"  style={{ alignSelf: 'left', marginTop:10, paddingRight: 20, paddingTop: 0, paddingBottom: 0 }}>
   Some organisms share shelter and nutrients. This picture is of fungi living inside plant. Drag the category to the right category below (symbiosis or lichens).
</Text> */}

</View>

{/* <Text variant="bodyLarge"  style={{ alignSelf: 'center', marginTop: 20}}>
   Image
</Text> */}

<Image
        style={{ width: 200, height: 200, marginTop: 30, alignSelf: 'center'}}
        source="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-12-5046-OIG2.3M_.jpeg"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />

<Draggable x={50} y={300} renderSize={80} 
// onDragRelease={checkcoordinates(event,gestureState)} 
// onDragRelease={(ev,gh)=>alert(gh.moveX + ' ,' + gh.moveY )}>
onDragRelease={(ev,gh)=>checkcoordinates(gh.moveX, gh.moveY )}>
{/* <Text variant="titleLarge"  style={{ alignSelf: 'left', paddingRight: 20, marginTop:20, paddingTop: 0, paddingBottom: 0 }}>
   Categories
</Text> */}
<Chip icon="school" style={{marginTop: 20}} >Drag me</Chip>


</Draggable>


















    
  
     
                                        
                                    {/* </ScrollView> */}
                                    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
    padding: 10,
    backgroundColor: 'white'
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
