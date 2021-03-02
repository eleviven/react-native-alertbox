import React from 'react';
import {View, Button} from 'react-native';
import {fire} from '../src/index';

export default function ExampleBasic() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Click Me"
        onPress={() =>
          fire({
            title: 'Username',
            message: 'Please enter your username and then click approve',
            actions: [
              {
                text: 'Close',
                style: 'cancel',
              },
              {
                text: 'Approve',
                onPress: (data) => console.log(data),
              },
            ],
            fields: [
              {
                name: 'username',
                placeholder: 'Enter username',
              },
            ],
          })
        }
      />
    </View>
  );
}
