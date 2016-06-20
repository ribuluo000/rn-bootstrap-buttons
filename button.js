'use-strict';

import React = require('react');
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

var Button = React.createClass({
  
  render() {
    var buttonProps = {
      onPress: this.props.onPress
    };

    
    return (
      <TouchableOpacity {...buttonProps} style={this.getButtonStyle()}>
        <Text style={this.getTextStyle()}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    );

  },

  getButtonStyle() {
    var buttonStyle = [styles.button];

    if(this.props.buttonType)
      buttonStyle.push(styles[this.props.buttonType]);
    
    if(this.props.buttonStyle)
      buttonStyle.push(this.props.buttonStyle);

    return buttonStyle;
  },

  getTextStyle(){
    var textStyles = [styles.text];

    switch(this.props.buttonType){
    case 'primaryOutline':
    case 'secondaryOutline':
    case 'successOutline':
    case 'infoOutline':
    case 'warningOutline':
    case 'dangerOutline':
      textStyles.push(styles[this.props.buttonType + 'Text']);
      break;
    case 'secondary':
      textStyles.push(styles.secondaryText);
      break;
    }

    if(this.props.textStyle)
      textStyles.push(this.props.textStyle);

    return textStyles;
  }
});

var styles = StyleSheet.create({
  text: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
    color: '#fff',
    fontWeight: '400'
  },
  button: {
    borderRadius: 4,
    overflow: 'hidden'
  },
  primary: {
    backgroundColor: '#0275d8'
  },
  primaryOutline: {
    backgroundColor: '#fff',
    borderColor: '#0275d8',
    borderWidth: 1
  },
  primaryOutlineText: {
    color: '#0275d8'
  },
  secondary: {
    backgroundColor: '#fff',
    borderColor: '#cccccc',
    borderWidth: 1
  },
  secondaryText: {
    color: '#373a3c'
  },
  secondaryOutline: {
    backgroundColor: '#fff',
    borderColor: '#373a3c',
    borderWidth: 1
  },
  secondaryOutlineText: {
    color: '#373a3c'
  },
  success: {
    backgroundColor: '#5cb85c'
  },
  successOutline: {
    backgroundColor: '#fff',
    borderColor: '#5cb85c',
    borderWidth: 1
  },
  successOutlineText: {
    color: '#5cb85c'
  },
  info: {
    backgroundColor: '#5bc0de'
  },
  infoOutline: {
    backgroundColor: '#fff',
    borderColor: '#5bc0de',
    borderWidth: 1
  },
  infoOutlineText: {
    color: '#5bc0de'
  },
  warning: {
    backgroundColor: '#f0ad4e'
  },
  warningOutline: {
    backgroundColor: '#fff',
    borderColor: '#f0ad4e',
    borderWidth: 1
  },
  warningOutlineText: {
    color: '#f0ad4e'
  },
  danger: {
    backgroundColor: '#d9534f'
  },
  dangerOutline: {
    backgroundColor: '#fff',
    borderColor: '#d9534f',
    borderWidth: 1
  },
  dangerOutlineText: {
    color: '#d9534f'
  }
});


module.exports = Button;
