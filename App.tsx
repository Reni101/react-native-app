import {StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={[appStyles.nested1]}>

            </View>
            <View style={[appStyles.nested2]}>
                <Text>Hello world!</Text>
            </View>
            <View style={[appStyles.nested3]}></View>
            <View style={[appStyles.nested1]}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:33,
        backgroundColor:'white'
    },
});

const appStyles = StyleSheet.create({
    nested1: {
        flex: 0.1,
        backgroundColor: '#7a21ee',
    },
    nested2: {
        flex: 0.3,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center',
    },
    nested3: {
        flex: 1,
        backgroundColor: 'red'
    }
})
