import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.block}>
      <Text style={styles.texto}>Teste</Text>
      <StatusBar style="auto" />
    </View>
    <Text>TSTERRA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 35
  },
  block:{
    width: 200,
    height: 200,
    backgroundColor: "#000",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent : 'center',
    margin: 100
  },
  texto:{
    color: "#fff"  
  }
});
