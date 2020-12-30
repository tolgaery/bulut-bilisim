import React, { Component } from 'react';
import { FlatList, Text, TouchableNativeFeedback, Alert } from 'react-native';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await res.json();
    this.setState({
      posts: result
    })
  }

  render () {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={this.state.posts}
        renderItem={({ item }) => (
          <TouchableNativeFeedback onPress={() => {
            Alert.alert('Post Bilgileri', 'Postun başlığı: ' + item.title + ' Postun gövdesi: ' + item.body + ' Postun id"si: ' + item.id)
          }}>
            <Text style={{ margin: 10 }}>{item.title}</Text>
          </TouchableNativeFeedback>
        )}
        keyExtractor={item => item.id.toString()}
      />
    )
  }
}

export default App;