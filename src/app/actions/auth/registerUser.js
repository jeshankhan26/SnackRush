"use server";
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import bcrypt from 'bcrypt'


export const registerUser = async (payload) =>{
    console.log(payload)
 const userCollection =await dbConnect(collectionNamesObj.usersCollection);

 const {email,password} = payload;
 if(!email || !password) return {success:false};
 const user = await userCollection.findOne({email: payload.email});
 if(!user){
    const hashedPass =await bcrypt.hash(password,10);
    payload.password = hashedPass;
     const res = await userCollection.insertOne(payload);
     res.insertedId = res.insertedId.toString();
     return res;
 }
 return {success:false};
}