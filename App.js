import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Ionicons,SimpleLineIcons,FontAwesome,Entypo,AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>

      <View style= {styles.firstView}>
        <TouchableOpacity>
      <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style= {styles.header}>Posts</Text> 
      </View>

      <View style= {styles.secondView}>
      <View style= {{flexDirection: 'row', justifyContent: 'center'}}>
      <Image style= {styles.profilePic}
          source= {require('./assets/lulu.jpg')}></Image>
          <View style= {{paddingTop: 5}}>
            <Text style= {styles.name}>luyanda.mabaso_</Text>
            <Text style= {styles.place}>Braamfontein</Text>
          </View>
          </View>
          <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={20} color="gainsboro" />
          </TouchableOpacity>
      </View>

      <Image style= {styles.postPic}
          source= {require('./assets/post.jpg')}></Image>

      <View>
      <View style= {styles.thirdView}>
        
        <View style= {styles.icons1}>
        <TouchableOpacity>
        <AntDesign name="heart" size={20} color="crimson" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name="chatbubble-outline" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name="paper-plane-outline" size={20} color="#fff" />
        </TouchableOpacity>
        </View>

        <View style= {{marginRight: 33 }}>
        <Entypo name="dot-single" size={24} color="#0000ff" />
        </View>
        
        <TouchableOpacity style= {{marginRight: 7 }}>
        <FontAwesome name="bookmark-o" size={20} color="#fff" />
        </TouchableOpacity>

      </View>
       
       <View style= {{height: 54}}>
      <View style= {styles.fourthView}>22 781 likes</View>

      <View style= {styles.fifthView}>
      <Text style= {styles.cName}>luyanda.mabaso_</Text>
      <View style= {styles.caption}>
      <View style= {{flexDirection: 'row'}}>
      <Text style= {styles.capt}>more blessings because I'm generous. Find the boys ...</Text>
      <TouchableOpacity>
      <Text style= {{color: 'gray', fontSize: 9}}> more</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>

      <View style= {styles.sixthView}>View all 176 comments</View>
      </View>

      <View style= {styles.seventhView}>21 Aughust 2021</View>
      </View>

      <View style= {styles.eighthView}>
        <TouchableOpacity>
      <Entypo name="home" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
      <AntDesign name="search1" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style= {{height: 25, width: 25,borderTopLeftRadius:10,borderTopRightRadius:10}}
          source= {require('./assets/reels.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
      <AntDesign name="hearto" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style= {{height: 25, width: 25,borderRadius: 30}}
          source= {require('./assets/me.jpg')}></Image>
      </TouchableOpacity>
      </View>


    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  firstView: {
    width: '100%',
    height: 50,
    backgroundColor: '#000',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 15,
    marginLeft: 8
  },
  header: {
    color: 'gainsboro',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 45
  },
  secondView: {
    width: '100%',
    height: 70,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginLeft: 6
  },
  profilePic: {
    width: 42,
    height: 42,
    borderRadius: 25,
    marginRight: 15
  },
  name: {
    color: 'gainsboro',
    fontSize: 14,
    fontWeight: 'bold'
  },
  place: {
    color: 'gainsboro',
    fontSize: 9,
    fontWeight: 'bold'
  },
  postPic: {
    width: '100%',
    height: 400
  },
  thirdView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    marginRight:10,
    marginBottom: 5
  },
  icons1: {
    justifyContent: 'space-between',
     flexDirection: 'row',
    width: 100,
    paddingLeft: 15
    },
    fourthView: {
      color: 'gainsboro',
      fontSize: 10,
      paddingLeft: 10,
      fontWeight: 'bold',
      padding: 3
    },
  fifthView: {
   witdth: '100%',
   flexDirection: 'row',
   paddingLeft: 10,
   paddingBottom: 5,
   alignItems: 'center',
  },
  cName: {
    fontSize: 12,
    color: 'gainsboro'
  },
  capt: {
    color: 'lightgrey',
    fontSize: 10
  },
  sixthView: {
    color: '#696969',
    fontSize: 10,
    paddingLeft: 10,
    marginBottom: 100,
    fontWeight: 'bold'
  },
  seventhView: {
    color: 'gray',
    fontSize: 8,
    paddingLeft: 10,
    fontWeight: 'bold',
    marginBottom: 25
  },
  eighthView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10,
    borderTopWidth: 1,
    borderTopColor: 'dimgray',
    alignItems: 'center',
    paddingTop: 5

  }
    
});
