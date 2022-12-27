import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, StyleSheet, RefreshControl, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getMovies, addFavorite, removeFavorite, LoadMoreMovies} from '../Redux/Action';


const Movie = () => {
    const {movies,favorites,PageNumber} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();
    const fetchMovies = () => dispatch(getMovies());


    const addToFavorites = movie => dispatch(addFavorite(movie));
const removeFromFavorites = movie => dispatch(removeFavorite(movie));
const handleAddFavorite = movie => {
  addToFavorites(movie);
};
const handleRemoveFavorite = movie => {
  removeFromFavorites(movie);
};

const exists = movie => {
    if (favorites.filter(item => item.id === movie.id).length > 0) {
      return true;
    }
    return false;
  };

    useEffect(() => {

        fetchMovies();
      }, []);

      const[refreshing,setRefreshing] = useState(false);

      const _onRefresh = ()=>{
        setTimeout(function(){InitailMovieLoad()}, 2000)
      }

      const InitailMovieLoad = ()=>{
        fetchMovies(),
        setRefreshing(false)
      }
      

  return (
    <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
    <Text style={{fontSize: 22}}>Popular Movies {movies.length}</Text>
    {
        refreshing == true && <ActivityIndicator size="large" color="green" />
    }
    <View style={{flex: 1, marginTop: 12}}>
      <FlatList
        data={movies}
        refreshControl={
            <RefreshControl
                        colors={["#9Bd35A", "#689F38"]}
                        refreshing={refreshing}
                        onRefresh={_onRefresh}
                    />
        }
        ListFooterComponent={()=>(
            movies.length > 0 ? ( <TouchableOpacity 
            onPress={()=> dispatch(LoadMoreMovies(PageNumber + 1))}
            style={{justifyContent:"center",alignItems:"center",padding:10,backgroundColor:"green"}}>
                <Text style={{textAlign:"center",fontSize:18,color:"white"}}>Load More</Text>
            </TouchableOpacity>):null
        )}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          const IMAGE_URL =
            'https://image.tmdb.org/t/p/w185' + item.poster_path;
          return (
            <View style={{marginVertical: 12}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Image
                  source={{
                    uri: IMAGE_URL,
                  }}
                  resizeMode="cover"
                  style={{width: 100, height: 150, borderRadius: 10}}
                />
                <View style={{flex: 1, marginLeft: 12}}>
                  <View>
                    <Text style={{fontSize: 22, paddingRight: 16}}>
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      alignItems: 'center',
                    }}>
                    <MaterialIcons color="green" name="thumb-up" size={32} />
                    <Text
                      style={{
                        fontSize: 18,
                        paddingLeft: 10,
                        color: '#64676D',
                      }}>
                      {item.vote_count}
                    </Text>
                    <TouchableOpacity
                     onPress={() =>
                        exists(item) ? handleRemoveFavorite(item) : handleAddFavorite(item)
                      }
                      activeOpacity={0.7}
                      style={{
                        marginLeft: 14,
                        flexDirection: 'row',
                        padding: 2,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 40,
                        width: 40,
                      }}>
                      <MaterialIcons
                        color="orange"
                        size={32}
                        name={exists(item) ? 'favorite' : 'favorite-outline'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  </View>
  )
}

export default Movie

const styles = StyleSheet.create({})