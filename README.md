# YelpCamp

## CRUD  S39
### 1. Create the basic Express App
    1). biuld routes with express.
    2). build database with mongoose.
    3). build index.ejs for the campground.
    4). Create, query, update, delete

### 2. tools
    1). const path = require('path');
    2). const methodOverride = require('method-override')
        app.use(methodOverride('_method'));
    3). app.use(express.urlencode({extended:true}))
    

### MongoDB  CRUD
1. From terminal entre my mongoDB
podman container ls -a  / podman ps -a  
podman container start mongodb-hua
podman exec -it mongodb-hua bash  
mongo
show dbs
use demo
show collections

    1).  The way to create a new collection
    i. use demo
    ii. show dbs      /* no appear demo if there no data in this collection.
    
    2). The way to delete a collection
    i. use demo               /* entre this collection
    ii. db.dropDatabase()     /* drop it
    iii.db.demo.drop()        /* Inside this demo


2. Three ways to add new data to a collection
i. db.demo.insertOne({name:"demo1"});
ii. db.demo.insertMany([{name:"demo1"},{name:"demo2"}])
iii. db.demo.insert([{name:"demo1"}])   /* its can be use for the two ways that we talked.

3.  To query/find data
i. db.collection.find()
ii. db.collection.find({age:3})
iii. db.collection.findOne({age:3})

4. To update data
i. db.demo.updataOne({name:"bob"},{$set:{name:"bobupdate",age:6,color:"blue"}})
ii. db.updateMany()
iii. db.demo.replaceOne()

5. To delete data
i. db.demo.deleteOne({name:"bobupdate"})
ii. db.demo.deleteMany({})  /* delete all!!!

6. others Mongo operators 

### Mongoose  CRUD
1. insertMany
2. find
3. update
4. delete

## Basic Style  S41

## Error & Validating Data  S42

## Add the Reviews Model  S46
## CRUD 
## CRUD 
## CRUD 
## CRUD 