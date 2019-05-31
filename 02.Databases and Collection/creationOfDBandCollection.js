// Creates a db if not present
// use myNewDB;

// Creates a collection if not present when you first store data in it
db.newCollection.insertOne({x:1})
db.myNewCollectionIndexed.createIndex( { y: 1 } )


// Explicit creation(this method explicitly create a collection with various options,
// such as setting maximum size or the document validation rules etc.
db.createCollection(
    "createCollectionExample", 
    { 
        capped : true, 
        autoIndexId : true, 
        size : 6142800, 
        max : 10000 
     } 
)


