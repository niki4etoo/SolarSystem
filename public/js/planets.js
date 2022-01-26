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

planet.name = "Earth";
planet.orbit = true;
planet.radius = 10000;
planet.population = 500;
planet.life = true;
planet.speed = 240;
planet.farFromSun = 150000000;

console.log(planet.name);
console.log(planet.orbit);
console.log(planet.radius);

var displayPlanet = function(planets) {
	for(var planet of planets){
		console.log(planet);
	}
}

displayPlanet(planetNames);
