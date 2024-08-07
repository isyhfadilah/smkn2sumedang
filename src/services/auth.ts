import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import api from './api'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'user',
      name: 'User Credentials',
      credentials: {
        identifier: { label: 'Identifier', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = await api
          .post(`/users/login`, {
            identifier: credentials?.identifier,
            password: credentials?.password
          })
          .then(({ data }) => {
            return data
          })
          .catch((e) => {
            console.log(e)
            return null
          })
        // If no error and we have user data, return it
        return user
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 1 * 24 * 60 * 60, // 3 days
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60 // 24 hours
  },
  pages: {
    signIn: '/auth',
    signOut: '/auth'
    // error: '/auth' // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  callbacks: {
    async signIn({ user }) {
      if (user) {
        return true
      } else {
        return false
      }
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
    async session({ session, token }: any) {
      session.user = token.user
      session.jwt = token?.jwt
      session.iat = token?.iat
      session.exp = token?.exp
      session.jti = token?.jti
      return session
    },
    async jwt({ token, user }: any) {
      token.user = user?.user
      token.type = user?.type || 'user'
      token.jwt = user?.token as string
      return token
    }
  },
  events: {},
  theme: {
    colorScheme: 'light'
  },
  debug: false
}
