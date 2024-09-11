import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomTintAppBar from './components/appBar/CustonTintAppBar';

export default function App() {
  return (
    <SafeAreaView>
      <CustomTintAppBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
