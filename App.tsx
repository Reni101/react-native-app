import {StyleSheet, Text, View} from 'react-native';
import {Box} from "./src/components/Box/Box";
import {VStack} from "./src/components/VStack/VStack";
import {HStack} from "./src/components/HStack/HStack";
import {ZStack} from "./src/components/ZStack/ZStack";


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
            <ZStack>
                <Box bgr={'blue'} width={100} mt={10} ml={10}/>
                <Box bgr={'blue'} width={100} mt={20} ml={20}/>
                <Box bgr={'blue'} width={100} mt={30} ml={30}/>
            </ZStack>
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

