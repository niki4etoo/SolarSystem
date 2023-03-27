class Planet {
  name;

  constructor(name){
    this.name = name;
  }

  planetDescription(){
    return this.name;
  }

}

module.exports = { Planet };
