import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL);

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await client.connect();
        const usersCollection = client.db(process.env.DB_NAME).collection("users");

        let user = await usersCollection.findOne({ email: credentials.email });

        if (!user) {
          // Create new user automatically
          const result = await usersCollection.insertOne({
            email: credentials.email,
            password: credentials.password, // plaintext for simplicity
          });
          user = { _id: result.insertedId, email: credentials.email };
        }

        // Check password (since just created, it will match)
        if (user.password && user.password !== credentials.password) {
          return null; // invalid password
        }

        return { id: user._id.toString(), email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/products"; // redirect after login
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
