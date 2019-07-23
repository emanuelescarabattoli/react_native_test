import React from "react";
import { Button } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => this.props.navigation.navigate("Test")}
      />
    );
  }
}

export default Home;