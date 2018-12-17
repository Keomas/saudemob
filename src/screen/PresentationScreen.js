import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { observer, inject } from 'mobx-react';


@inject("userApiStore")
@observer
export   class PresentationScreen extends React.Component {

    static navigationOptions = {
        header: null,
        /* No more header config here! */
      };

    async componentDidMount() {
        const {  userApiStore } = this.props;
        await userApiStore.logInGoogle();
    }

    render(){
        const { userApiStore, navigation } = this.props;

        return(
            <View style={styles.content}>
               
                <Image style={{resizeMode:'contain',height:100,width:100, borderRadius:50}} 
                source={{uri:userApiStore.pic}} />
            
                <Text style={styles.text}>
                
                   Bem-Vindo {userApiStore.name} 
                   
                   
                </Text>
            </View>
        );
    }


}

const styles=StyleSheet.create({
    content:{
        flex:1,
        backgroundColor:'#E0FFFF',
        justifyContent:"space-around",
        alignItems:'center',
    },

    text:{
        marginTop:15,
      fontSize:20,
      color:'#4682b4',
      textAlign:"center"
    }

});
    