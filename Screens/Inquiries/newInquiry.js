import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'native-base';
import DocumentPicker from 'react-native-document-picker';

const NewInquiry = () => {
  const [fileName, setFileName] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');

  const filePicker = async () => {
    // Pick a single file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileName(res[0].name);
      closeDatabase(false, false, res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const reset = () => {
      setDescription('');
      setSubject('');
  }

  return (
    <ScrollView
    style={{
      maxHeight: '100%',
      width: '100%',
      backgroundColor: 'white',
      flex: 1,
    }}>
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: 10,
        width: '100%',
        backgroundColor: 'white',
      }}>
      
        <Text style={{color: 'black', fontSize: 20, paddingBottom: 10}}>
          Inquiry Subject
        </Text>
        <TextInput
          placeholder="Enter subject here"
          value={subject}
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 4,
            padding: 10,
            width: '95%',
            backgroundColor: '#F8F8F8',
            fontStyle: 'italic',
          }}
          onChangeText={text => {
            setSubject(text);
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          Description
        </Text>
        <TextInput
          placeholder="Enter Description here"
          value={description}
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 4,
            height: 200,
            width: '95%',
            backgroundColor: '#F8F8F8',
            fontStyle: 'italic',
          }}
          onChangeText={text => {
            setDescription(text);
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          Attachment
        </Text>

        <View style={{display: 'flex', flexDirection: 'row', height: 100}}>
          <Button
            style={{
              width: 100,
              justifyContent: 'center',
              backgroundColor: 'black',
            }}
            onPress={() => filePicker()}>
            <Text style={{color: 'white'}}>Choose File</Text>
          </Button>
          <Text
            style={{
              fontSize: 18,
              paddingTop: 10,
              paddingLeft: 20,
              color: 'black',
            }}>
            {fileName ? fileName : 'No file chosen'}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: 100,
            justifyContent: 'flex-end',
          }}>
          <Button
            style={{
              width: 100,
              justifyContent: 'center',
              backgroundColor: 'black',
              marginRight:10
            }}
            onPress={()=>{
                reset()
            }}
            >
            <Text style={{color: 'white'}}>Reset</Text>
          </Button>
          <Button
            style={{
              width: 100,
              justifyContent: 'center',
              backgroundColor: '#4D8FFF',
              marginRight:10
            }}
            onPress={()=>{
                
            }}
            >
            <Text style={{color: 'white'}}>Save Details</Text>
          </Button>
        </View>
    </View>
      </ScrollView>
  );
};

export default NewInquiry;
