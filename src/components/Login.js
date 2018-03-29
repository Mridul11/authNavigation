import React from 'react';
import {View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage,Text, Button, SocialIcon } from 'react-native-elements';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';

class LoginForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      username :"",
      password : "",
      disabled : true
    }
  }

    fetchData(){
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then( (response) => this.props.navigation.navigate('Details'))
      .catch(function(error){
          console.log(error)
      });
    }


  render(){
    return(
      <View>
          <FormLabel>Name</FormLabel>
          <FormInput
             ref= {(el) => { this.username = el; }}
             onChangeText={(username) => this.setState({username})}
             value={this.state.username}
          />

          <FormLabel>Password</FormLabel>
          <FormInput
             ref= {(el) => { this.password = el; }}
             onChangeText={(password) => this.setState({password, disabled:false})}
             value={this.state.password}
             secureTextEntry
          />
          <Text h2>{this.state.username}{this.state.disabled}</Text>

          <SocialIcon
            button
            type="medium"
            title="Login/Signup"
            onPress={this.fetchData.bind(this)}
            disabled ={this.state.disabled}
          />

          <Button
            title="GotoDetails"
            onPress={()=>{this.props.navigation.navigate('Details')}}
          />

          <FormValidationMessage>{this.state.username && this.state.password ? '' : 'These fields are required.'}</FormValidationMessage>
      </View>
    )
  }
}

export default LoginForm;
