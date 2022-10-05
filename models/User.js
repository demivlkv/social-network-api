const { Schema, model } = require('mongoose');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            required: 'Please enter a username!',
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // match a valid email address
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// get total friend count on retrieval of user's friends array on query
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create the User model using UserSchema
const User = model('User', UserSchema);

module.exports = User;