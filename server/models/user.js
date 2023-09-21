const { Schema, default: mongoose } = require('mongoose')

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
    }
  },
  {
    timestamps: true
  }
)

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds)
  }
})

userSchema.methods.isCorrectPassword = async (password) => {
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema)

module.exports = User;