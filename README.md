<h1 align="center" style="text-align: center;">React Native AlertBox</h1>

<p align="center" style="font-size: 1.2rem;">
  <strong>AlertBox</strong> it is a React Native alert & prompt module, working both on Android and iOS platform.<br /><br />
  <img src="https://i.imgur.com/n9kJstx.gif" alt="" width="86%" style="border: 0; width: 86%; min-width: 240px; max-width: 100%;" />
</p>

## Installation

```bash
npm install --save react-native-alertbox
```

## Usage

First you have to add AlertBox to App

```jsx
//App.js
import React from 'react';
import {AlertBox} from 'react-native-alertbox';

export default function App() {
  return (
    <View>
      {/* ... */}
      <AlertBox />
    </View>
  );
}
```

<br/>
After that just you need to call `fire` methods from anywhere in your app. 🎉

### Show some message

```jsx
import React from 'react';
import {Button} from 'react-native';
import {fire} from 'react-native-alertbox';

export default function ExampleScreen() {
  return (
    <Button
      title="Click Me"
      onPress={() => fire({title: 'Title', message: 'Some text message'})}
    />
  );
}
```

If you need to use only one screen, you can instance your AlertBox Component with a ref ID.

```jsx
import React, {useRef} from 'react';
import {Button, View} from 'react-native';
import {AlertBox} from 'react-native-alertbox';

export default function ExampleScreen() {
  const ref = useRef();
  return (
    <View>
      <AlertBox />
      <Button
        title="Click Me"
        onPress={() => ref.current.fire({title: 'Title', message: 'Some text message'})}
      />
    </View>
  );
}
```

The <b>fire</b> method takes _title, message, actions, fields_ parameters. Let's look at the advanced example where we use these parameters.

```javascript
fire({
  title: 'Username',
  message: 'Please enter your username and then click approve',
  // buttons
  actions: [
    {
      text: 'Close',
      style: 'cancel',
    },
    {
      text: 'Approve',
      onPress: (data) => console.log(data), // It is an object that holds fields data
    },
  ],
  // fields
  fields: [
    {
      name: 'username',
      placeholder: 'Enter username',
    },
  ],
});
```

## License

[MIT](./LICENSE)
