var planetNames = [ "Earth", "Saturn", "Venera", "Pluto" ];

var planet = {
	name: "",
	orbit: true,
	radius: 0,
	population: 0,
	life: true,
	speed: 0,
	farFromSun: 0
};

var displayPlanet = function(planets) {
	for(var planet of planets){
		console.log(planet);
	}
}

displayPlanet(planetNames);
