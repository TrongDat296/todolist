import {
  Add,
  Edit2,
  Element4,
  Logout,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AvataGroup from '../../components/AvataGroup';
import CardComponent from '../../components/CardComponent';
import CardImageComponent from '../../components/CardImageComponent';
import CicularComponent from '../../components/CicularComponent';
import Container from '../../components/Container';
import ProgressBarComponent from '../../components/ProgressBarComponent';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import SpaceComponent from '../../components/SpaceComponent';
import TaskComponent from '../../components/TaskComponent';
import TextComponent from '../../components/TextComponent';
import TitleComponent from '../../components/TitleComponent';
import {colors} from '../../constants/colors';
import {fontFamilies} from '../../constants/fontFamilies';
import {globalStyle} from '../../styles/globalStyle';
import auth from '@react-native-firebase/auth';
const HomeScreen = ({navigation}: any) => {
  const user = auth().currentUser;

  return (
    <View style={{flex: 1}}>
      <Container isScroll>
        <SectionComponent>
          <RowComponent justify="space-between">
            <Element4 size={24} color={colors.descriptionColors} />
            <Notification size={24} color={colors.descriptionColors} />
          </RowComponent>
        </SectionComponent>

        <SectionComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TextComponent text={`Hi, ${user?.email}`} />
              <TitleComponent text="Be Productive today" />
            </View>
            <TouchableOpacity onPress={async () => auth().signOut()}>
              <Logout size={22} color="coral" />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>

        <SectionComponent>
          <RowComponent
            styles={[globalStyle.inputContainer]}
            onPress={() => navigation.navigate('SearchScreen')}>
            <TextComponent
              color={colors.descriptionColors}
              text="Search Task"
            />
            <SearchNormal1 size={20} color={colors.descriptionColors} />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <CardComponent>
            <RowComponent>
              <View style={{flex: 1}}>
                <TitleComponent text="Task progress" />
                <TextComponent text="30/40 tasks done" />
                <SpaceComponent height={6} />
                <RowComponent justify="flex-start">
                  <TaskComponent
                    text="March 22"
                    onPress={() => {
                      console.log('kajskdjl');
                    }}
                  />
                </RowComponent>
              </View>
              <View>
                <CicularComponent value={80} />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>

        <SectionComponent>
          <RowComponent styles={{alignItems: 'flex-start'}}>
            <View style={{flex: 1}}>
              <CardImageComponent>
                <TouchableOpacity
                  onPress={() => {
                    console.log('asdkjasd');
                  }}
                  style={[globalStyle.iconContainer]}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <SpaceComponent height={12} />
                <TitleComponent text="UX Design" />
                <TextComponent text="Task managerment mobile app" size={12.5} />
                <View style={{marginVertical: 28}}>
                  <AvataGroup />
                  <ProgressBarComponent
                    percent="70%"
                    color="#0AACFF"
                    size="larger"
                  />
                </View>
                <TextComponent
                  text="Due, 2024 February 10th"
                  size={12}
                  color={colors.descriptionColors}></TextComponent>
              </CardImageComponent>
            </View>
            <SpaceComponent width={16} />
            <View style={{flex: 1}}>
              <CardImageComponent color="rgba(33,150,243,0.9)">
                <TouchableOpacity
                  onPress={() => {
                    console.log('asdkjasd');
                  }}
                  style={[globalStyle.iconContainer]}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="API Payment" />
                <AvataGroup />
                <ProgressBarComponent percent="40%" color="#A2F068" />
              </CardImageComponent>

              <SpaceComponent height={16} />

              <CardImageComponent color="rgba(18, 181, 22, 0.9)">
                <TouchableOpacity
                  onPress={() => {
                    console.log('asdkjasd');
                  }}
                  style={[globalStyle.iconContainer]}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="Update work" />
                <TextComponent text="Revision home page" size={12.5} />
              </CardImageComponent>
            </View>
          </RowComponent>
        </SectionComponent>
        <SpaceComponent height={16} />
        <SectionComponent>
          <TextComponent
            flex={1}
            font={fontFamilies.semiBold}
            size={21}
            text="Urgen tasks"
          />
          <CardComponent>
            <RowComponent>
              <CicularComponent value={40} radius={36} />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingLeft: 12,
                }}>
                <TextComponent text="Title of task" />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
      </Container>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddNewTask')}
          activeOpacity={1}
          style={[
            globalStyle.row,
            {
              backgroundColor: colors.blue,
              padding: 10,
              borderRadius: 100,
              width: '80%',
            },
          ]}>
          <TextComponent text="Add new taks" flex={0} />
          <Add size={22} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;
