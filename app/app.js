//going to create an instance for the player roster
const app = new Vue({
	el: '#app',
	data: {
		title: 'Hello',
		newPlayer: '',
		players: []
	},
	methods: {
		addPlayer() {
			this.players.push(this.newPlayer);
		}
	}
});

//going to create an instance for the practice to do list
const toDo = new Vue({
	el: '#',
	data: {
		title: 'Hello',
		newPlayer: '',
		players: []
	},
	methods: {  //here I want to push an object, not variable, with a property done: false
		addPlayer() {
			this.players.push(newPlayer);
		}
	}
});