import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { cookies } from "next/headers";

const parsePayload = (token: string) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

export const authOptions: NextAuthOptions = {

    session: {
        // Choose how you want to save the user session.
        // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
        // If you use an `adapter` however, we default it to `"database"` instead.
        // You can still force a JWT session by explicitly defining `"jwt"`.
        // When using `"database"`, the session cookie will only contain a `sessionToken` value,
        // which is used to look up the session in the database.
        strategy: "jwt",

        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 30 * 24 * 60 * 60, // 30 days

        // Seconds - Throttle how frequently to write to database to extend a session.
        // Use it to limit write operations. Set to 0 to always update the database.
        // Note: This option is ignored if using JSON Web Tokens
        updateAge: 24 * 60 * 60, // 24 hours

        // The session token is usually either a random UUID or string, however if you
        // need a more customized session token string, you can define your own generate function.
        //generateSessionToken: () => {
        //  return randomUUID?.() ?? randomBytes(32).toString("hex")
        //}
    },

    useSecureCookies: false, // using false while local development
    logger: {
        error(code, metadata) {
            // eslint-disable-next-line no-console
            console.log('authError', { code, metadata });
        },
    },
    debug: true,

    jwt: {
        secret: process.env.API_SECRET
    },

    //secret: process.env.NEXTAUTH_SECRET,
    //pages: {
    //  signIn: '/auth/login',
    //  signOut: '/auth/logout',
    //  error: '/auth/error', // Error code passed in query string as ?error=
    //  verifyRequest: '/auth/verify-request', // (used for check email message)
    //  newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    //},

    providers: [
        CredentialsProvider({

            id: 'api',
            name: 'API',
            type: 'credentials',
            credentials: {
                identifier: { label: 'EMail', type: 'email', placeholder: 'Email' },
                password: { label: 'Senha', type: 'password', placeholder: 'Senha' }
            },
            async authorize(credentials, req) {

                if (!credentials) {
                    return null
                }

                const response = await fetch(process.env.API_URL + "auth/login", {
                    method: "POST",
                    headers: {
                        "Accept": "text/plain",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        UserName: credentials.identifier,
                        Password: credentials.password
                    }),
                });

                const data = await response.json();

                if (data && response.ok) {

                    const parsed = parsePayload(data.token);

                    //user.name = parsed.name;

                    /*cookies().set({
                        name: "gat",
                        value: data.access_token,
                        httpOnly: true
                    });
                    cookies().set({
                        name: "grt",
                        value: data.refresh_token,
                        httpOnly: true
                    });*/
                    cookies().set({
                        name: "parsed",
                        value: parsed.userName,
                        httpOnly: true
                    });
                    cookies().set({
                        name: "username",
                        value: parsed.userName,
                        httpOnly: true
                    });
                    cookies().set({
                        name: "useremail",
                        value: parsed.userEmail,
                        httpOnly: true
                    });
                    cookies().set({
                        name: "userid",
                        value: parsed.userId,
                        httpOnly: true
                    });
                    cookies().set({
                        name: "companionid",
                        value: parsed.companionId,
                        httpOnly: true
                    });

                    return data;
                }
                return null;

            }
        })
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true;
        },
        async jwt({ token, user, account, trigger, session }: { token: any, user: any, account: any, trigger?: any, session?: any }) {
            // params: { token: JWT; user: User | AdapterUser; account: Account | null; profile?: Profile | undefined; trigger?: "signIn" | "signUp" | "update" | undefined; isNewUser?: boolean | undefined; session?: any; }):

            // user:
            // object with keys {$id, token, nome, email, id, companion, iat, exp, jti}
            // É a estrutura de dados retornada pela API de login

            //if (user) token = user as unknown as { [key: string]: any };

            // if (trigger === "update") {
            //     return { ...token, ...session.user };
            //   }

            if (trigger === "signIn" && user) {
                token.user=user;
                token.accessToken=user.token;
            }

            return token;
        },
        async session({ session, token, user }: { session: any, token: any, user: any }) {
            // Send properties to the client, like an access_token and user id from a provider.

            // token:
            // object with keys {email, sub, iat, exp, jti}
            // object with keys {email, sub, user, accessToken, iat, exp, jti}

            if (token) {
                session.user = token.user;
                session.accessToken=token.accessToken;
            }

            return session;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
    }

}
