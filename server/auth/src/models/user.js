const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_type:{
    type: String,
    enum: ['customer', 'designer', 'admin']
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  website:{
   type: String
  },
  phone_number:{
    type: String,
    required: true
  },
  gender:{
    type: String,
    required: function(){
      if(this.user_type == "customer"){
        return true;
      }
      return false;
    }
  },
  measurements:{
    type: Object,
    required: function(){
      if(this.user_type == "customer"){
        return true;
      }
      return false
    },
    default:{}
  },
  address:{
    type: String,
    required: function(){
      if(this.user_type === 'customer' || this.user_type === 'designer'){
        return true;
      }
      return false;
    }
  },
  company_name:{
    type: String,
    required: function(){
      if(this.user_type === 'designer'){
        return true
      }
      return false
    }
  },
  address:{
    type: String,
    required: function(){
      if(this.user_type === 'customer' || this.user_type === 'designer'){
        return true
      }
      return false
    }
  },
  services:{
    type: Array,
    required: function(){
      if(this.user_type === 'designer'){
        return true
      }
      return false
    },
    default: []
  },
  design_pattern_upload:{
    type: Array,
    required: function(){
      if(this.user_type === 'designer'){
        return true
      }
      return false
    },
    default: []
  },
  profile_photo_upload:{
    type: String,
    required: function(){
      if(this.user_type === 'designer' || this.user_type === 'customer'){
        return true
      }
      return false
    },
  },
  

});

module.exports = mongoose.model("User", UserSchema);