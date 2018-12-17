import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';




export   class HomeScreen extends React.Component {
    
  
  static navigationOptions = {
        header: null,
        /* No more header config here! */
      };


  render() {
    return (
      <View style={styles.container}>
        <Image style ={styles.imgLogo} source={require("../../assets/SaudeMob3.png")} />
        <View style={styles.entry}>
            <Text style={styles.text}> comece com : </Text>
            <TouchableOpacity style={styles.touch}
            onPress={()=>this.props.navigation.navigate("Presentation")}
            >
            <Ionicons name="logo-facebook" size={28} color="white" />
            <Text style={{fontSize:13,color:'white'}}>entre com Facebook</Text>
            </TouchableOpacity>
            <Text style={styles.text}> Ou </Text>
            <TouchableOpacity style={styles.touch1}>
            <Ionicons name="logo-googleplus" size={28} color="gray" />
            <Text style={{fontSize:13,color:'gray'}}>entre com google</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27AE60',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  imgLogo:{
        resizeMode:'contain',
        width:180,
        height:180,
        marginTop:30
  },
  entry:{
    marginTop:20,  
    justifyContent:"center",
      alignItems:'stretch',
      padding:1
      
  },
  touch:{
    width:220,
    
    backgroundColor:'steelblue',
    borderRadius:3,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginTop:10,
    elevation:2
  },
  touch1:{
    width:220,
    backgroundColor:'white',
    borderRadius:3,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginTop:10,
    elevation:2
  },
  text:{
      marginTop:15,
      fontSize:18,
      color:'white',
      textAlign:"center"
  }
});
