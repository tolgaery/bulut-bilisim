import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fullName: {
    textAlign: "center",
    fontSize: 25,
    color: "#050505"
  },
  info: {
    flex: 1,
    alignContent: "center",
    width: "85%",
    backgroundColor: "#27ba9d",
    padding: 20,
    borderRadius: 25,
    maxHeight: 150,
    marginTop: 10,
    marginBottom: 10
  },
  infoText: {
    color: "white",
    fontSize: 20
  }
});

const myInfo = {
  fullName: "Tolga Eryılmaz",
  age: 23,
  region: "İstanbul",
  school: "75. YIL DMO COMPUTER TECHNICAL",
  experience:  `
     İş Deneyimlerim
     aaaaaaaaaaaaaaaaaaaaaaaa
     bbbbbbbbbbbbbbbbbbbbbb
     ccccccccccccccccccccccccccccc
     ddddddddddddddddddd

  `
};

const Info = ({ age, region, school}) => {
  return (
    <View style={styles.info}>
        <Text style={styles.infoText}>Yaş: {age}</Text>
        <Text style={styles.infoText}>Memleket: {region}</Text>
        <Text style={styles.infoText}>Lise: {school}</Text>
    </View>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    };
  }

  render() {
    const { fullName, age, region, school, experience } = myInfo;
    const { show } = this.state;
    return (
      <View style={styles.page}>
        <Text style={styles.fullName}>{fullName}</Text>
        <Info 
          age={age}
          region={region}
          school={school} />
        <Button 
          onPress={() => this.setState({ show: !show })} 
          title={`İş Deneyimlerimi ${show ? 'Gizle' : 'Göster'}`}/>
       <Text>{show ? experience : ""}</Text>
      </View>
    )
  }
}

export default App;