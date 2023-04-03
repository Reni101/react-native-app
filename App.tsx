import {StyleSheet, Text, View} from 'react-native';
import {Box} from "./src/components/Box/Box";
import {VStack} from "./src/components/VStack/VStack";
import {HStack} from "./src/components/HStack/HStack";


export default function App() {
    return (
        <View style={styles.container}>
            <VStack>
                <Box bgr={'#7767f8'} width={100}>
                    <Text>text</Text>
                </Box>
            </VStack>
            <Box bgr={'#7767f8'} width={100}>
                <Box bgr={'red'} width={20}/>
                <Box bgr={'red'} width={20}/>
                <Box bgr={'red'} width={20}/>
            </Box>
            <HStack>
                <Box bgr={'red'} width={100}/>
                <Box bgr={'red'} width={100}/>
                <Box bgr={'red'} width={100}/>
            </HStack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },

});

