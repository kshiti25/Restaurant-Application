import mongoose from "mongoose";

export const dbConnection = ()=> {
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "Restaurant-Application"
    }).then(()=>{
    console.log("Connected to database successfully!!");
}).catch(err=>{
    console.log(`Error occured while connecting to database! ${err}`);
});
};