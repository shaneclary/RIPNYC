import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'VERSE — RIP NYC Monuments'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B0B0B',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            marginBottom: 40,
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          VERSE
        </div>
        <div
          style={{
            fontSize: 42,
            color: '#A7A7A7',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Live in the Monument.
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#A7A7A7',
            textAlign: 'center',
            maxWidth: 700,
            marginTop: 20,
            opacity: 0.8,
          }}
        >
          Quiet acknowledgments of what ended—and what remains.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
