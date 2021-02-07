import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      TextInput_3: "",
      TextInput_9: "",
      TextInput_24: "",
      DateTimePicker_13: new Date("")
    }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <Text>Name</Text>
      <TextInput
        placeholder="Enter Name"
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <Text>Address</Text>
      <TextInput
        placeholder="Enter Address"
        value={this.state.TextInput_9}
        onChangeText={nextValue => this.setState({ TextInput_9: nextValue })}
      />
      <Text>Price</Text>
      <TextInput
        placeholder="Enter Contract Price"
        keyboardType="numeric"
        value={this.state.TextInput_24}
        onChangeText={nextValue => this.setState({ TextInput_24: nextValue })}
      />
      <Text>Closing Date</Text>
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_13}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_13: selectedDate })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_5: {},
  TextInput_3: {},
  Text_7: {},
  TextInput_9: {},
  Text_17: {},
  TextInput_24: {},
  Text_11: {},
  DateTimePicker_13: {}
})
const mapStateToProps = state => {
  return {
    contractsTextInput3: state.apiReducer.contracts,
    contractsTextInput9: state.apiReducer.contracts,
    contractsTextInput24: state.apiReducer.contracts,
    contractsText11: state.apiReducer.contracts
  }
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
