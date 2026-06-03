import { useState } from 'react'

export default function Step3({ 
  transportMode, 
  category, 
  onComplete 
}: { 
  transportMode: string
  category: string
  onComplete: (routeData: any) => void 
}) {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    if (!origin || !destination) {
      setError('出発地と目的地を入力してください')
      return
    }

    setLoading(true)
    setError('')

    try {
      const routeData = {
        origin,
        destination,
        transportMode,
        category,
        places: []
      }
      onComplete(routeData)
    } catch (err) {
      setError('エラーが発生しました')
      setLoading(false)
    }
  }

  return (
    <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', padding: '32px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '24px' }}>Step 3: 出発地と目的地を入力</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', color: '#374151', fontWeight: 'bold', marginBottom: '8px' }}>出発地</label>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="例: 東京駅"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #93c5fd',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', color: '#374151', fontWeight: 'bold', marginBottom: '8px' }}>目的地</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="例: 京都駅"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #93c5fd',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {error && <p style={{ color: '#dc2626', fontWeight: 'bold' }}>{error}</p>}

        <button
          onClick={handleSearch}
          disabled={loading}
          style={{
            width: '100%',
            background: loading ? '#999' : '#0ea5e9',
            color: 'white',
            fontWeight: 'bold',
            padding: '12px',
            border: 'none',
            borderRadius: '8px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => {
            if (!loading) e.currentTarget.style.background = '#0284c7'
          }}
          onMouseLeave={(e) => {
            if (!loading) e.currentTarget.style.background = '#0ea5e9'
          }}
        >
          {loading ? '検索中...' : '観光地を探す'}
        </button>
      </div>
    </div>
  )
}