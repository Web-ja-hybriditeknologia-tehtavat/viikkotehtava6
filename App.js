import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';


const URL = 'https://dog.ceo/api/breeds/image/random'



export default function App() {

  const [Dogge, setDog] = useState('')

  const fetchDogImage = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      setDog(data.message)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchDogImage();
  }, [])

  return (
    <View style={styles.container}>
      <Text>Here is a dog:</Text>
      <Image 
      style={styles.tinyLogo}
      source={{uri: Dogge }}/>

      <Button
        onPress={fetchDogImage}
        title="Reload"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width:200,
    height:200,
    margin:5,
  },
});
