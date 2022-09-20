const AnimalApi = require("./lib/index").default;
console.log('node.test.js', AnimalApi);

AnimalApi.getCat().then((animal) => {
	console.log(animal);
});
