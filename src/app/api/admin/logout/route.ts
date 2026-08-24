import { NextResponse } from 'next/server'
import { serializeClearedSessionCookie } from '@/auth/session'

export const runtime = 'edge'

export async function POST() {
  const response = NextResponse.json({ success: true })
  response.headers.set('Set-Cookie', serializeClearedSessionCookie())
  return response
}
