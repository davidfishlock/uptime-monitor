import { NextRequest, NextResponse } from 'next/server'
import { requireMobileAuth } from '@/lib/auth-helpers'
import { sendPushNotification, getActiveDeviceTokens } from '@/lib/fcm'
import { BRAND_NAME } from '@/lib/brand'

// POST /api/test-push - Send a test push notification
export async function POST(request: NextRequest) {
  try {
    const { error } = await requireMobileAuth(request)
    if (error) return error

    const tokens = await getActiveDeviceTokens()

    if (tokens.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'No active device tokens found',
      }, { status: 404 })
    }

    await sendPushNotification(
      tokens,
      '🧪 Test Notification',
      `This is a test push notification from ${BRAND_NAME}`,
      { type: 'test', timestamp: new Date().toISOString() }
    )

    return NextResponse.json({
      success: true,
      message: `Test notification sent to ${tokens.length} device(s)`,
    })
  } catch (error) {
    console.error('Test push error:', error)
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    )
  }
}
