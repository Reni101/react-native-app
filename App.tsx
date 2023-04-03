import {ActivityIndicator, Alert, Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';

const data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'html',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'css',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'js',
    },
]

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
    <View style={[appStyles.flatItem]} >
        <Text >{title}</Text>
    </View>
);
export default function App() {
    return (
        <View style={styles.container}>
            <View style={[appStyles.nested1]}>

                <Text>Hello world!</Text>
                <Button
                    title="Press me"
                    color='red'
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                <ActivityIndicator size="large"/>

                <Image
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
                    style={[appStyles.image]}
                />
                <FlatList
                    data={data}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 34,
        backgroundColor: '#7a21ee'
    },

});

const appStyles = StyleSheet.create({
    nested1: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    flatItem:{
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }

})
