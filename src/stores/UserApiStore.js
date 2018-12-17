import {observable, computed, action} from 'mobx';

export default class UserApiStore {
  @observable name = '';
  @observable email = '';
  @observable pic ='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg/600px-Default_profile_picture_%28male%29_on_Facebook.jpg';
  @observable id = '';
  @observable responseJSON= null;
  @observable j = '';
  

  async  logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('247303925981794', {
        permissions: ['public_profile', 'email'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email`);

       
        this.j=JSON.stringify(await response.json())
        this.responseJSON = JSON.parse(this.j);
        this.id=this.responseJSON.id;
        this.name =this.responseJSON.name;
        this.email=this.responseJSON.email;
        this.pic = "https://graph.facebook.com/"+this.id+"/picture?width=100&height=100";
       
      
    }
  }

  async logInGoogle(){
    
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: "542939194852-gbu1jda984oatogcmltek69qmaodbhta.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
          this.id=result.user.id;
          this.name =result.user.name;
          this.email=result.user.email;
          this.pic = result.user.photoUrl;
      } 
      else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }
  
  }

  
