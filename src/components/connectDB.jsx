export default async function ConnectToDB() { 
    try {
      const client = await require('mongodb').MongoClient.connect('mongodb+srv://ram:Ram%402004@mycluster.weifclc.mongodb.net/Category');
      //const client = await require('mongodb').MongoClient.connect('mongodb://0.0.0.0:27017/Test');
      const db = client.db(); 
      console.log('Connected to MongoDB database.'); 
  let collList = await  db.listCollections().toArray();
  
  collList = collList.map(el => {
        return el.name;
      }); 
        collList.forEach(async function(element) {
          console.log("\t\t",element); 
          const data = await db.collection(element).find({}).toArray();
          console.log(data) 
        });     
    
    } catch (err) {
      console.log(err);
    }

    return(
      <div></div>
    )
}