//going to create an instance for the player roster
const app = new Vue({
	el: '#app',
	data: {
		title: 'Player Roster',
		newPlayer: '',
		players: [],
		newPosition: '',
	},
	methods: {
		addPlayer() {
			//pushing what the input value is into our empty array so we can loop over it
			this.players.push({
				name: this.newPlayer,
				position: this.newPosition,
				isOnTeam: false
			});
			//setting the variable to an empty string so that it clears out default input after every time we run method/click add player
			this.newPlayer = '';
			this.newPosition = '';
		},

		removePlayer(player) {
			const playerArray = this.players.indexOf(player);

			this.players.splice(playerArray, 1);
		}
	}
});

//going to create an instance for the practice to do list
const toDo = new Vue({
	el: '#practice',
	data: {
		title: 'Practice Planner',
		newDrill: '',
		drills: []
	},
	methods: {  //here I want to push an object, not variable, with a property done: false
		addDrill() {
			this.drills.push({
				drillName: this.newDrill,
				completed: false
			});
			this.newDrill = '';
		},
	}
});