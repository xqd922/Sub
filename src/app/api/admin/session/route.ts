import { NextResponse } from 'next/server'
import { getSessionFromRequest } from '@/auth/session'

export const runtime = 'edge'

export async function GET(request: Request) {
  const session = await getSessionFromRequest(request)
  return NextResponse.json({ success: true, authenticated: session !== null })
}
