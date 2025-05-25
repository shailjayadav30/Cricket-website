// import mongoose  from "mongoose";

// const UserSchema=new mongoose.Schema({
//         name:{type:String,required:true,min:2,max:50},
//     email:{type:String,required:true,unique:true},
//     password:{type:String,required:true,min:6},


// },{timestamps:true})

// const User=mongoose.model("User",UserSchema)
// export default User






import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true, minlength: 2, maxlength: 50 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", UserSchema);
export default User;