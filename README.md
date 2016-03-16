# RN Bootstrap Buttons
  Bootstrap style buttons for react native

## Installation

````
  npm install rn-bootstrap-buttons --save

````  

## Usage

````
var Button = require('rn-bootstrap-buttons');
  
class helloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Default Buttons</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={this.btnClick} buttonType="primary">primary</Button>
          <Button buttonType="secondary">secondary</Button>
          <Button buttonType="success">success</Button>
          <Button buttonType="info">info</Button>
          <Button buttonType="warning">warning</Button>
          <Button buttonType="danger">danger</Button>
        </View>
        <Text>Outline Buttons</Text>
        <View style={styles.buttonContainer}>
          <Button buttonType="primaryOutline">primary outline</Button>
          <Button buttonType="secondaryOutline">secondary outline</Button>
          <Button buttonType="successOutline">success outline</Button>
          <Button buttonType="infoOutline">info outline</Button>
          <Button buttonType="warningOutline">warning outline</Button>
          <Button buttonType="dangerOutline">danger outline</Button>
        </View>
        <Text>Custom Buttons</Text>
        <Button buttonStyle={{backgroundColor: 'yellow'}} textStyle={{color: 'orange'}}>custom button</Button>
      </View>
    );
  }

  btnClick() {
    console.log('click');
  }
  
}

````  