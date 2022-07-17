import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Search({navigation}) {
    const [date, setDate] = useState( new Date);
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [websiteInput, setWebsiteInput] = useState('')

    const dateTab = date.toISOString().split('T')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showTimeSelector = () => {
        showMode('time');
    };
    const showDateSelector = () => {
        showMode('date');
    };
    const handleWebsiteInput = (e) => {
        setWebsiteInput(e)
    }

    const WebsiteFound = async () => {
        console.log(websiteInput);
        const timestamp = dateArray[0].split('-').join('') + "" + dateArray[1].substring(0, 5).replace(':','') 
 
        return fetch(
          `http://archive.org/wayback/available?url=${websiteInput}&timestamp=${timestamp}`
        )

    .then((response) => response.json())
    .then(async (responseObject) => {
      await AsyncStorage.setItem(
          "url",
          responseObject.archived_snapshots.closest.url
      )

    let returnedUrl = await AsyncStorage.getItem("url")

    navigation.navigate('Preview', {
        url: returnedUrl})
  })
  .catch((error) => {
    console.error(error);
  });
};

    return (
        <View>
            <TextInput 
                placeholder="Adresse du site à récupérer"
                onChangeText={handleWebsiteInput}
            />

            <View>
                <Button onPress={showDatepicker} title="Date" />
            </View>

            <View>
                <Button onPress={showTimepicker} title="Heure" />
            </View>

            <View>
                <Text> Date : {date.toLocaleDateString("fr-FR")}</Text>
                <Text> Heure : {date.toLocaleTimeString("fr-FR")}</Text>
            </View>

            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                />
            )}
            <Button onPress={WebsiteFound} title="✔️" />
        </View>
    ); 
}



