import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { Button } from 'native-base';



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

const NewInquiry = () => {
  
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft:10,
        width: '100%',
        backgroundColor: 'white',
      }}>
          <ScrollView
           style={{maxHeight: '100%', width: '100%', backgroundColor: 'white', flex:1}}
          >
        <Text style={{color:"black", fontSize:20, paddingBottom:10}}>
            Inquiry Subject
        </Text>
        <TextInput
        placeholder='Enter subject here'
        style={{borderColor:"black", borderWidth:1, borderRadius:4, padding:10, width:"95%", backgroundColor:"#F8F8F8", fontStyle:"italic"}}
        />
         <Text style={{color:"black", fontSize:20, paddingTop:10, paddingBottom:10}}>
            Description
        </Text>
        <TextInput
        placeholder='Enter Description here'
        style={{borderColor:"black", borderWidth:1, borderRadius:4, height:200, width:"95%", backgroundColor:"#F8F8F8", fontStyle:"italic"}}
        />
         <Text style={{color:"black", fontSize:20, paddingTop:10, paddingBottom:10}}>
            Attachment
        </Text>

        <Button onPress={()=>filePicker()}>
            <Text>
                    Choose File
            </Text>
        </Button>
        

        </ScrollView>



        

    </View>
  );
};

export default NewInquiry;
