import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json()

    // Basic validation
    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'info@mma-ibk.at'
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      // Dev mode: just log and return success
      console.log('📧 Contact form submission (no RESEND_API_KEY set):')
      console.log(`From: ${body.firstName} ${body.lastName} <${body.email}>`)
      console.log(`Phone: ${body.phone || 'N/A'}`)
      console.log(`Message: ${body.message}`)
      return NextResponse.json({ ok: true, dev: true })
    }

    // Send via Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'MMA-IBK Website <noreply@mma-ibk.at>',
        to: [contactEmail],
        reply_to: body.email,
        subject: `Neue Kontaktanfrage von ${body.firstName} ${body.lastName}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0a0a0a; padding: 24px 32px; border-bottom: 3px solid #dc3214;">
              <h1 style="color: #fff; font-size: 24px; margin: 0; letter-spacing: 4px;">MMA-IBK</h1>
              <p style="color: #dc3214; font-size: 11px; letter-spacing: 3px; margin: 4px 0 0; text-transform: uppercase;">
                Neue Kontaktanfrage
              </p>
            </div>
            <div style="background: #111; padding: 32px; border: 1px solid #1a1a1a;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="color: #888; font-size: 12px; padding: 8px 0; width: 120px;">Name</td>
                  <td style="color: #fff; font-size: 14px; padding: 8px 0;">${body.firstName} ${body.lastName}</td>
                </tr>
                <tr>
                  <td style="color: #888; font-size: 12px; padding: 8px 0;">E-Mail</td>
                  <td style="color: #dc3214; font-size: 14px; padding: 8px 0;">
                    <a href="mailto:${body.email}" style="color: #dc3214;">${body.email}</a>
                  </td>
                </tr>
                ${body.phone ? `
                <tr>
                  <td style="color: #888; font-size: 12px; padding: 8px 0;">Telefon</td>
                  <td style="color: #fff; font-size: 14px; padding: 8px 0;">${body.phone}</td>
                </tr>` : ''}
              </table>

              <div style="border-top: 1px solid #1a1a1a; margin-top: 20px; padding-top: 20px;">
                <p style="color: #888; font-size: 12px; margin: 0 0 8px;">Nachricht</p>
                <p style="color: #fff; font-size: 14px; line-height: 1.7; margin: 0;">
                  ${body.message.replace(/\n/g, '<br>')}
                </p>
              </div>
            </div>
            <div style="background: #070707; padding: 16px 32px; text-align: center;">
              <p style="color: #333; font-size: 11px; margin: 0;">
                MMA-IBK · Grabenweg 67b, A-6020 Innsbruck
              </p>
            </div>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
