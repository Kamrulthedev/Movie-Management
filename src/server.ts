import mongoose from "mongoose";
import app from "./app";
import config from "./config";


main().catch(err => console.log(err));
async function main() {
    try{
        await mongoose.connect(config.dataurl as string);

    }catch(error){
        console.log(error)
    }
  };


app.listen(config.port, () => {
    console.log(`Examplfe app listening on port ${config.port}`)
  })