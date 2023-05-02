import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import styles from './style';
import MovieCard from '../../Components/MovieCard';
import { useDispatch } from 'react-redux';
import { showApiResponse } from '../../Redux/CreateSlice';

const Home = () => {
    // const dispatch = useDispatch();
    const callApi = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            //Set the response in redux store
            // dispatch(showApiResponse(json.movies));
            console.log('Api response', json);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => { callApi() }, []);

    return (
        <View style={styles.MainViewStyle}>
            <View style={styles.HeaderStyle}>
                <Text style={styles.HeaderTextStyle}>Movies</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.horizontalCard}>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        renderItem={({ item }) => <MovieCard />}
                        horizontal={true}
                        contentContainerStyle={{ alignItems: 'center' }}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.verticalCard}>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        renderItem={({ item }) => <MovieCard vertical />}
                        contentContainerStyle={styles.FlatListContainer}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;
