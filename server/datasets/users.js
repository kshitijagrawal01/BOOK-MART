
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var UserSchema = new Schema({
    name:String,
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    firstname: {
        type: String,
        trim: true
    },
    lastname: {
        type: String,
        trim: true
    },
    facebook: {
        fbid:{
            type: String,
            trim: true
        },
        token:{
            type: String
        },
        displayName:{
            type: String
        },
        email:{
            type: String
        },
        profileUrl:{
            type: String
        }
    },
address:String,
mobile:String,
imageurl:String,
dob:String,
    blog:
        [
        {
        title:String,
        subject:String,
        shortdescription:String,
        body:String,
        date:{type:Date,default:Date.now},
        likes:Number
}
        ]
    ,
    userfeedback:
        [
        {
        feedbackby:String,
        feedbackbody:String,
        date:{type:Date,default:Date.now}
        }
        ],
landmark:String,
state:String,
    cartdetails:[{
        bookid:String
    }],
    rentedbooks:[
    {
        bookid:String,
        returndate:{type:Date,default:Date.now},
        price:String
    }],
    rentedto:[{
        bookid:String,
        returndate:{type:Date,default:Date.now}
    }]
});

module.exports=mongoose.model('User', UserSchema);
