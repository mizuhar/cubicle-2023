const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type:String,
    required: [true,'Username is required!'],
    minLength:[5,'Password is too short!'],
    match: [/^[A-Za-z0-9]$/,'User name is alfabetically!'],
    unique: true
  },
  password: {
    type: String,
    required: [true,'Password is required'],
    validate: {
      validator: function(value) {
        return /^[A-Za-z0-9]$/.test(value);
    },
    message: 'Invalid password characteres!'
  },
  minLength: 8,
}
});

userSchema.virtual('repeatPassword')
  .set(function (value) {
    if(value !== this.password) {
        throw new Error('Password mismatch')
    }
})  
userSchema.pre('save', async function(){
  const hash = await bcrypt.hash(this.password,10)
  this.password = hash
});
const User = mongoose.model("User", userSchema);

module.exports = User;
