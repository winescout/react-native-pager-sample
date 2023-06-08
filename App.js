import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function App() {
  return (
      <PagerView style={styles.pagerView} orientation="vertical" initialPage={0} >
        <View key="1" style={styles.pageOne}>
          <Text>First Page</Text>
        </View>
        <View key="2" style={styles.pageTwo}>
          <Text>Second Page</Text>
        </View>
        <View key="3" style={styles.pageThree}>
          <Text>Second Page</Text>
        </View>

      </PagerView>
  );
}

const styles = StyleSheet.create({
    pageOne:{
        backgroundColor: "blue",
    },
    pageTwo:{
        backgroundColor: "red",
    },
    pageThree:{
        backgroundColor: "green",
    },

    pagerView:{
      flex: 1
    },
});
