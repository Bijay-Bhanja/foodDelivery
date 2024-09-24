const mongoose=require("mongoose")
const mongoURI="mongodb://localhost:27017/Food_Delivery"
const mongoDB=()=>{
    mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(async ()=>{
        console.log("connected successfully")
        const fetchData=await mongoose.connection.db.collection("fooditems")
        // console.log(fetchData)
        // fetchData.find({}).toArray(function(err,data){
        //     if(err) console.log(err);
        //     else{
        //         console.log("hi")
        //         global.fooditems=data;
        //         console.log(global.fooditems)
        //     }
        // })
        fetchData.find({}).toArray()
        .then(async (data)=>{
            const foodCategory=await mongoose.connection.db.collection("foodcategory")
            foodCategory.find({}).toArray()
            .then((cateData)=>{
                global.fooditems=data;
                global.foodCategory=cateData;
            })
            
        })
        .catch(()=>{
            console.log("err")
        })
    })
    .catch(()=>{
        console.log("Failed to connect to mongodb")
    })
   
}
module.exports=mongoDB
