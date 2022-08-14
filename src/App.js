const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { createMovie, readMovie, updateMovie, deleteMovie } = require("./movie/functions");


const app = async (yargsObj) => {
  await sequelize.sync({ alter: true });
  if (yargsObj.create) {
    await createMovie({title: yargsObj.title, actor1: yargsObj.actor1, actor2: yargsObj.actor2, director: yargsObj.director});
    
  
  } else if (yargsObj.read) {
    await readMovie ({title: yargsObj.title} )
        await readMovie ({actor1: yargsObj.actor1} )
        await readMovie ({actor2: yargsObj.actor2} )
        await readMovie ({director: yargsObj.director} )
        console.log(yargsObj.title)
  
      } else if (yargsObj.update) {
        const filterObj = { title: yargsObj.title };
        const updateObj = { title: yargsObj.newTitle };
        await updateMovie(filterObj, updateObj);
    
  
  
      } else if (yargsObj.delete) {
        await deleteMovie ({title: yargsObj.title})
    
  
  
  
  } else {
    console.log("Incorrect command");
  
  }
};

app(yargs.argv);
