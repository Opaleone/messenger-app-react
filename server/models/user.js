const { Schema, default: mongoose } = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    firstName: { 
      type: String, 
      required: [true, 'First name is required.'] 
    },
    lastName: String,
    userName: { 
      type: String, 
      unique: true, 
      required: [true, 'Username is required.']
    },
    email: { 
      type: String, 
      unique: true, 
      required: [true, 'Email is required'], 
      match: [/.+@.+\..+/, 'Must match an email address!'] 
    },
    password: { 
      type: String, 
      required: [true, 'Password is required.'], 
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
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  console.log(this.password);
  next();
})

userSchema.methods.isCorrectPassword = async (password) => {
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;