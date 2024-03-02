import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Container from '../../components/Container';
import SectionComponent from '../../components/SectionComponent';
import TitleComponent from '../../components/TitleComponent';
import {fontFamilies} from '../../constants/fontFamilies';
import InputComponent from '../../components/InputComponent';
import {Lock, Sms} from 'iconsax-react-native';
import {colors} from '../../constants/colors';
import ButtonComponent from '../../components/ButtonComponent';
import SpaceComponent from '../../components/SpaceComponent';
import {globalStyle} from '../../styles/globalStyle';
import auth from '@react-native-firebase/auth';
import TextComponent from '../../components/TextComponent';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleLoginWithEmail = async () => {
    if (!email || !password) {
      setErrorText('Please enter your email and password');
    } else {
      setErrorText('');
      setIsLoading(true);

      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          const user = userCredential.user;
          console.log(user);
          setIsLoading(false);
        })
        .catch((error: any) => {
          setIsLoading(false);
          setErrorText(error.message);
        });
    }
  };

  return (
    <Container>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          flex: 1,
        }}>
        <TitleComponent
          text="Login"
          size={32}
          font={fontFamilies.semiBold}
          styles={{textTransform: 'uppercase', flex: 0, textAlign: 'center'}}
        />

        <View style={{marginVertical: 20}}>
          <InputComponent
            value={email}
            onChange={val => setEmail(val)}
            prefix={<Sms size={20} color={colors.descriptionColors} />}
            placeholder="Email"
            title="Email"
            allowClear
          />
          <InputComponent
            value={password}
            onChange={val => setPassword(val)}
            prefix={<Lock size={20} color={colors.descriptionColors} />}
            placeholder="Password"
            title="Password"
            isPassword
          />

          {errorText && <TextComponent text={errorText} color="coral" />}
        </View>
        <ButtonComponent
          isLoading={isLoading}
          text="Login"
          onPress={handleLoginWithEmail}
        />

        {errorText && <TextComponent text={errorText} color="coral" flex={0} />}
        <SpaceComponent height={20} />
        <Text style={[globalStyle.text]}>
          You don't have an account ?
          <Text
            style={{color: 'coral'}}
            onPress={() => navigation.navigate('SignUpScreen')}>
            Create an account
          </Text>
        </Text>
      </SectionComponent>
    </Container>
  );
};

export default LoginScreen;
