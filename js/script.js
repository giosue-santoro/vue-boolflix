new Vue ({

    el: '#app',

    data: {
        
    },

    mounted() {
		const self = this;
    
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
          .then((re) => {

            
        })
        
    }

})

Vue.config.devtools = true; 