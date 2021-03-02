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

First you have to wrap App with AlertBoxProvider

```jsx
//App.js
import React from 'react';
import {AlertBoxProvider} from 'react-native-alertbox';

export default function App() {
  return <AlertBoxProvider>{/* your code */}</AlertBoxProvider>;
}
```
<br/>
After that you need to call `useAlertBox` methods from any component in your app.

### Show some message

```jsx
import React from 'react';
import {Button} from 'react-native';
import {useAlertBox} from '../src/index';

export default function ExampleBasic() {
  const {fire} = useAlertBox();
  return (
    <Button
      title="Click Me"
      onPress={() => fire({title: 'Title', message: 'Some text message'})}
    />
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
