import {StyleSheet, Text, View} from 'react-native';
import {Box} from "./src/components/Box/Box";


export default function App() {
    return (
        <View style={styles.container}>
            <Box bgr={'#7767f8'} width={100}>
                <Text>text</Text>
            </Box>

            <Box bgr={'#7767f8'} width={100}>
                <Box bgr={'red'} width={20}/>
                <Box bgr={'red'} width={20}/>
                <Box bgr={'red'} width={20}/>
            </Box>
            <Box bgr={'#7767f8'} width={100}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

});

