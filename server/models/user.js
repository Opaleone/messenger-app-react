const { Schema, default: mongoose } = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    firstName: { 
      type: String, 
      required: true 
    },
    lastName: String,
    userName: { 
      type: String, 
      unique: true, 
      required: true
    },
    email: { 
      type: String, 
      unique: true, 
      required: true, 
      match: [/.+@.+\..+/, 'Must match an email address!'] 
    },
    password: { 
      type: String, 
      required: true, 
      minLength: 8 
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ]
  },
  {
    timestamps: true
  }
)

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const user = this;
    await bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, (error, hash) => {
        if (error) {
          return next(error);
        }
        console.log('HASH: ', hash);
        user.password = hash;
        console.log('USER.PASSWORD: ', user.password);
        next();
      })
    })
  }
})

userSchema.methods.isCorrectPassword = async (password) => {
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema)

module.exports = User;