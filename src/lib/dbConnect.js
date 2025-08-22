import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNamesObj = {
     productsCollection: "test_products",
     usersCollection: "test_users"
}

export default async function dbConnect(collectionName) {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
return client.db(process.env.DB_NAME).collection(collectionName);
}