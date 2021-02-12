new Vue ({

    el: '#app',

    data: {

        movies: [],
        series: [],
        actors: [],
        inputValue: '',
        showNavbar: true,
        creditID: 0
        
    },

    mounted() {
        this.mountedSearch();
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

        secondInputSearch: function() {
            const self = this;

            axios.get('https://api.themoviedb.org/3/search/tv?api_key=6633b10121d740b0c55d03556425601b&query=' + self.inputValue)
            .then((re) => {
                self.series = re.data.results
            })
            console.log(self.series);
        },

        mountedMovies: function() {
            const self = this;
    
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=6633b10121d740b0c55d03556425601b&query=red')
            .then((re) => {
                self.movies = re.data.results
            })
            console.log(self.movies);
        },

        mountedTV: function() {
            const self = this;

            axios.get('https://api.themoviedb.org/3/search/tv?api_key=6633b10121d740b0c55d03556425601b&query=red')
            .then((re) => {
                self.series = re.data.results
            })
            console.log(self.series);
        },

        mountedSearch: function() {
            this.mountedMovies();
            this.mountedTV();
        },

        allSearch: function() {
            this.inputSearch();
            this.secondInputSearch();
            console.log(this.actors);
        },

        getPoster: function(movie) {
            if (movie.poster_path !== null) {
                return 'http://image.tmdb.org/t/p/w500' + movie.poster_path;
            } else {
                return 'img/error.jpg';
            }
        },

        showFlag: function(movie) {
            if (movie.original_language == "en") {
                return 'img/gb.png';
            } 
            if (movie.original_language === "it") {
                return 'img/it.png';
            } 
            if (movie.original_language == "fr") {
                return 'img/fr.png';
            } 
            if (movie.original_language == "de") {
                return 'img/de.png';
            } 
            if (movie.original_language == "ja") {
                return 'img/jp.png';
            } 
            if (movie.original_language == "es") {
                return 'img/es.png';
            } 
            if (movie.original_language == "zh") {
                return 'img/cn.png';
            }
        },

        starRating: function(el) {
            return Math.round(el / 2);
        },

        // findActors: function () {
        //     const self = this;
        //     list = [];

        //     axios
        //         .get('https://api.themoviedb.org/3/movie/' + creditID + '/credits?api_key=6633b10121d740b0c55d03556425601b' )
        //         .then(function(re) {
        //           for (var i = 0; i < 5; x++) {
        //             self.list += re.data.cast[i];
        //         }
        //     })

        //     this.list = this.actors;
        // },

        // scrollRight: function() {
        //     const target = document.getElementById('movie-container');
        //     target.scrollLeft += 100;
        // }

        // slideRight: function() {
        //     let content = document.getElementById('movie-container'),
        //     scrollStep = 200;

        //     let sl = content.scrollLeft,
        //         cw = content.scrollWidth;

        //     if ((sl + scrollStep) >= cw) {
        //     content.scrollTo(cw, 0);
        //     } else {
        //     content.scrollTo((sl + scrollStep), 0);
        //     }
        // }
    }
})

Vue.config.devtools = true;