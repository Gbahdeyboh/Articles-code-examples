const fetch = require('node-fetch');
function Bob() {
	this.bobs_age = 25;
	this.get_age = () => {
		return this.bobs_age;
	}
	this.get_bobs_friend_info = () => {
		return fetch("https://jsonplaceholder.typicode.com/users/10")
		.then(data => data.json())
		.catch(err => err);
	}
}
// console.log(new Bob().get_bobs_friend_info());

module.exports = new Bob();