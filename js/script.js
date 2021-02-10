new Vue ({

    el: '#app',

    data: {
        movies: [],
        inputValue: '',
    },

    methods: {
		
        inputSearch: function() {
            const self = this;
    
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=6633b10121d740b0c55d03556425601b&query=' + self.inputValue)
            .then((re) => {
                self.movies = re.data.results
            })
            console.log(self.movies);
        },

        getPoster: function(movie) {
            return 'http://image.tmdb.org/t/p/w500' + movie.poster_path;
        },

        starRating: function(el) {
            return Math.round(el / 2);
        },

    }
})

Vue.config.devtools = true; 