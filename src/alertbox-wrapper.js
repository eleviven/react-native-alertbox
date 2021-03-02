import React, {Component} from 'react';
import AlertBox from './alertbox';
import AlertBoxManager from './alertbox-manager';
import {generateRandomInt} from './utils/index';

export const fire = (args) => {
  const alertRef = AlertBoxManager.getDefault();
  alertRef.fire(args);
};

export class AlertBoxWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: [],
    };
    this._id = generateRandomInt();
  }
  componentDidMount() {
    AlertBoxManager.register(this);
  }
  componentWillUnmount() {
    AlertBoxManager.unregister(this);
  }
  fire(props) {
    let alerts = this.dispatch({
      type: 'ADD_ALERT',
      payload: {id: generateRandomInt(), ...props},
    });
    this.setState({alerts});
  }
  remove(id) {
    let alerts = this.dispatch({
      type: 'REMOVE_ALERT',
      id,
    });
    this.setState({alerts});
  }
  dispatch(action) {
    const state = this.state.alerts;
    switch (action.type) {
      case 'ADD_ALERT':
        return [...state, {...action.payload}];
      case 'REMOVE_ALERT':
        return state.filter((el) => el.id !== action.id);
      default:
        return state;
    }
  }
  render() {
    const {alerts} = this.state;
    return alerts?.map((item) => (
      <AlertBox
        key={item.id}
        title={item?.title}
        paragraph={item?.message}
        actions={item?.actions}
        fields={item?.fields}
        dispatchRemove={() => this.remove(item.id)}
      />
    ));
  }
}
