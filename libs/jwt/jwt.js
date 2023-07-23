import { jwtVerify, SignJWT } from 'jose'

export function getSecretKey() {
   const secret = process.env.SECRET_KEY

   if (secret === undefined) {
      throw new Error('JWT Secret key is not matched')
   }

   return new TextEncoder().encode(secret)
}
export async function jwtSignPayload(payload) {
   const alg = 'HS256'

   try {
      return await new SignJWT(payload).setProtectedHeader({ alg }).setIssuedAt().sign(getSecretKey())
   } catch (error) {
      console.log('error')
      return null
   }
}
export async function jwtVerifySignedPayload(jwt) {
   try {
      const { payload, ...withoutPayload } = await jwtVerify(jwt, getSecretKey())
      return { verify: true, payload: payload }
   } catch (error) {
      return { verify: false, payload: undefined, message: error }
   }
}
