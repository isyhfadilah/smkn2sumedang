// remove auth. from file name if you want to use this middleware
import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      if (token) {
        return true
      }
      return false
    }
  },
  pages: {
    signIn: '/auth'
  }
})

export const config = { matcher: '/((?!api|static|auth|.*\\..*|_next).*)' }
