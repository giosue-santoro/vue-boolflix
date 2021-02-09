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
                self.movies = re.data.response
            })
            console.log(self.movies);
        }

    }

})

Vue.config.devtools = true; 