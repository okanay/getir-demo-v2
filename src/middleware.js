import createIntlMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { jwtVerifySignedPayload } from '../libs/jwt/jwt'

export default async function middleware(request) {
   // i18 middleware
   const defaultLocale = request.headers.get('x-default-locale') || 'tr'
   const response = handleI18nRouting(request)
   response.headers.set('x-default-locale', defaultLocale)

   const requestHeaders = new Headers(request.headers)
   requestHeaders.set('x-pathname', request.nextUrl.pathname)

   // auth middleware
   const { url, nextUrl } = request

   const AUTH_PAGES = ['/profile']
   const isAuthPageRequested = PathMatcherWithI18(url, AUTH_PAGES)

   if (isAuthPageRequested) {
      const secret = process.env.NEXTAUTH_SECRET
      const session = await getToken({ req: request, secret: secret })
      const hasVerifiedToken = session && (await jwtVerifySignedPayload(session.token))

      if (!hasVerifiedToken) {
         return NextResponse.redirect(new URL(`/`, url))
      }
   }

   return response
}

// ====================================================================================================================

const handleI18nRouting = createIntlMiddleware({
   locales: ['en', 'tr'],
   defaultLocale: 'tr',
})

const PathMatcherWithI18 = (url, AuthMatcher) => {
   const path = new URL(url).pathname

   if (path.startsWith('/en/') || path.startsWith('/tr/')) {
      const newPath = path.substring(3)
      return AuthMatcher.includes(newPath)
   }

   return AuthMatcher.includes(path)
}
export const config = {
   matcher: ['/((?!_next|.*\\..*).*)'],
}

// ====================================================================================================================
