import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import Container from '../components/Container';
import {TaskModel} from '../models/TaskModel';
import SectionComponent from '../components/SectionComponent';
import InputComponent from '../components/InputComponent';
import {User} from 'iconsax-react-native';
import {colors} from '../constants/colors';

const initValue: TaskModel = {
  title: '',
  description: '',
  dueDate: '',
  start: '',
  end: '',
  uids: [],
  fileUrls: [],
};

const AddNewTask = ({navigation}: any) => {
  const [taskDetail, setTasksDetail] = useState<TaskModel>(initValue);

  const handleChangeValue = (id: string, value: string) => {
    const item: any = {...taskDetail};

    item[`${id}`] = value;

    setTasksDetail(item);
  };
  const handleAddNewTask = async () => {
    console.log(taskDetail);
  };

  return (
    <Container back title="Add New Task">
      <SectionComponent>
        <InputComponent
          value={taskDetail.title}
          onChange={val => handleChangeValue('title', val)}
          title="Title"
          allowClear
          placeholder="Title of task"
        />
        <InputComponent
          value={taskDetail.description}
          onChange={val => handleChangeValue('description', val)}
          title="Description"
          allowClear
          placeholder="Content"
          multible
          numberOfLine={3}
        />
        
      </SectionComponent>
      <SectionComponent>
        <Button title="Save" onPress={() => {handleAddNewTask()}} />
      </SectionComponent>
    </Container>
  );
};

export default AddNewTask;
