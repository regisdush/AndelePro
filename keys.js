//key.js - figures out what set of credentials to return

if(process.env.NODE_ENV==="production"){

//we are hosting return prod set of keys

module.exports=require("./prod");
};

else
{


//we are in dev, return dev set of key


module.exports=require("./dev");
}