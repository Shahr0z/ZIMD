import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    MainViewStyle: {
        flex: 1,
        backgroundColor: '#fff',
    },
    HeaderStyle: {
        width: width,
        height: 55,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    HeaderTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    horizontalCard: {
        width: width,
        height: 260,
        justifyContent: 'center',
        alignItems: 'center',
    },
    verticalCard: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    FlatListContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: height / 9,
    },
})
export default styles;