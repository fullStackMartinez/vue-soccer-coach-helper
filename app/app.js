//going to create an instance for the player roster
const app = new Vue({
	el: '#app',
	data: {
		title: 'Hello',
		newPlayer: '',
	},
	methods: {
		addPlayer() {
			console.log('form submitted');
		}
	}
});

//going to create an instance for the practice to do list
const toDo = new Vue({

});