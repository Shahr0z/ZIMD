import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MovieCard: {
        height: 230,
        backgroundColor: '#eeeeee',
        alignSelf: 'center',
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    MovieImage: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    TextViews: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    MovieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        margin: 10,
    },
    MovieRelease: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        margin: 10,
    },
});

export default styles;