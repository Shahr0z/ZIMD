import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react'
import styles from './style';

const MovieCard = ({ item, vertical }) => {
    const { width } = Dimensions.get('window');
    return (
        <View style={{ ...styles.MovieCard, width: vertical ? width - 40 : 250 }}>
            <Image style={styles.MovieImage} source={{ uri: 'https://cssanimation.rocks/images/posts/starwars/starwars.jpg' }} resizeMode='cover' />
            <View style={styles.TextViews}>
                <Text style={styles.MovieTitle}>Movie Title</Text>
                <Text style={styles.MovieTitle}>Star Wars</Text>
            </View>
            <View style={styles.TextViews}>
                <Text style={styles.MovieRelease}>Release Date</Text>
                <Text style={styles.MovieRelease}>1977</Text>
            </View>
        </View>
    )
}
export default MovieCard
