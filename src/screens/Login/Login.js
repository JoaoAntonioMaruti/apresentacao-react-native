import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Button from './../../components/Button';

const LoginScreen = ({navigation}) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    console.log('didmount');
  }, []);

  useEffect(() => {
    console.log('useEffect');
  }, [state.username]);

  useEffect(() => {
    console.log('useEffect');
  }, [state.password]);

  const hanldeSubmit = () => {
    const {username, password} = state;
    if (!username) return alert('Entre com o usuário');
    if (!password) return alert('Entre com a senha');

    navigation.navigate('Home');
  };

  return (
    <Container>
      <StyledTextInput
        value={state.username}
        onChangeText={value => setState({...state, username: value})}
      />
      <StyledTextInput
        value={state.password}
        secureTextEntry={true}
        onChangeText={value => setState({...state, password: value})}
      />
      <Button title={'Entrar'} onPress={hanldeSubmit} />
    </Container>
  );
};

// class LoginScreen extends Component {
//   state = {
//     username: 'askjdhasj',
//     password: '',
//   };

//   hanldeSubmit = () => {
//     const {username, password} = this.state;
//     if (!username) return alert('Entre com o usuário');
//     if (!password) return alert('Entre com a senha');

//     const {navigation} = this.props;
//     navigation.navigate('Home');
//   };

//   render() {
//     const {username, password} = this.state;
//     return (
//       <Container>
//         <StyledTextInput
//           value={username}
//           onChangeText={value => this.setState({username: value})}
//         />
//         <StyledTextInput
//           value={password}
//           secureTextEntry={true}
//           onChangeText={value => this.setState({password: value})}
//         />
//         <Button title={'Entrar'} onPress={this.hanldeSubmit} />
//       </Container>
//     );
//   }
// }

const Container = styled.View`
  margin: 20px;
`;

const StyledTextInput = styled.TextInput`
  border-color: red;
  border-width: 2px;
  padding: 10px;
  margin: 8px 0;
`;

export default LoginScreen;
