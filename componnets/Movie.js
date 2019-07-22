import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

var MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: { thumbnail: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" }
    }
];

var styles = StyleSheet.create({
    image: {
        width: 53,
        height: 81
    }
})

var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";


export default class Movie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: null
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        fetch(REQUEST_URL)
            .then((response) => { response.json() })
            .then((responseData) => {
                // alert(JSON.stringify(responseData))
                this.setState({
                    movies: responseData.movies
                })
            })
    }

    renderLoadingView() {
        return (
            <View >
                <Text style={{ textAlign: "center" }}>正在加载电影数据。。。</Text>


            </View>
        )
    }

    renderMovie(movies) {
        return (
            <View style={{ width: 53, height: 81 }}>
                <Text style={{ textAlign: "center" }}>{movies.title}</Text>
                <Text style={{ textAlign: "center" }}>{movies.year}</Text>
                <Image style={styles.image} source={{ uri: movies.posters.thumbnail }}></Image>
            </View>
        )
    }


    render() {
        if(!this.state.movies){
            return this.renderLoadingView()
        }

        var movies=MOCKED_MOVIES_DATA[0];
        return this.renderMovie(movies)
       
    }

}






