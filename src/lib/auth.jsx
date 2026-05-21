import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.AUTH_DB_URI);

const db = client.db('better_auth_db_assignment9');

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL, 
  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: { 
    enabled: true, 
  }, 

  database: mongodbAdapter(db, {
    client
  }),

    
  session: {
   cookieCache:{
    enabled: true,
    strategy: "jwt",
    //max day
    maxAge: 7 * 24 * 60 * 60,
    }
  },
  plugins: [
    jwt()
  ]
});