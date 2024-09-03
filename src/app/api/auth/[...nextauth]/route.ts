import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authOptions } from '@/authOptions/authOptions'

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}
