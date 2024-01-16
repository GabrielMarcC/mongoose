const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected");
  } catch (error) {
    if (error) return console.error(error);
  }
};

connectDB();

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "Ana",
  },
  age: {
    type: Number,
    default: 28,
  },
  favoriteFoods: {
    type: [String],
    default: ["Hamburguer", "Apple", "pineapple", "mango"],
  },
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const newPerson = new Person({
    name: "Floresvaldo",
    age: 83,
    favoriteFoods: ["rice", "bean"],
  });

  newPerson.save((err, data) => {
    if (err) return err;

    return console.log(`person created ${data}`);
  });
};

const manyPeoples = [
  { name: "Bruno", age: 20, favoriteFoods: ["rice", "bean"] },
  { name: "Júlia", age: 40, favoriteFoods: ["banana", "chocolate"] },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = async (personName, done) => {
  try {
    const searchByName = await Person.find({ name: personName }).exec();

    return console.log("data find: ", searchByName);
  } catch (error) {
    console.log(error);
  }
};

findPeopleByName("Gabriel");

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
