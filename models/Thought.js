const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema({
        
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: true,
        trim: true,
        minlength:1,
        maxlength:280
    },
    username:{
        type: String,
        required: true,
        trim: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    }
    },
    {
        toJSON: {
          getters: true
        }
    } 
    );
    


const ThoughtSchema = new Schema({

    thoughtText:{
        type: String,
        required: true,
        trim: true,
        minlength:1,
        maxlength:280
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username:{
        type: String,
        required: true,
        trim: true
    },
    reactions:[ReactionSchema]
},
{
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }  
);

// get total count of friends
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;