import { useState, useEffect } from 'react'

export default function Step5({ 
  route, 
  onSelectPlace, 
  onBack 
}: { 
  route: any
  onSelectPlace: (place: any) => void
  onBack: () => void 
}) {
  const [places, setPlaces] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const mockPlaces = [
      {
        id: 1,
        name: '観光地1',
        description: '素晴らしい観光地です',
        rating: 4.5,
        image: '🏛️'
      },
      {
        id: 2,
        name: '観光地2',
        description: 'ユニークな体験ができます',
        rating: 4.2,
        image: '⛩️'
      },
      {
        id: 3,
        name: '観光地3',
        description: '自然豊かなスポットです',
        rating: 4.8,
        image: '🌲'
      }
    ]
    
    setPlaces(mockPlaces)
    setLoading(false)
  }, [route])

  if (loading) {
    return <div style={{ textAlign: 'center', color: '#999', padding: '32px' }}>観光地を検索中...</div>
  }

  return (
    <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', padding: '32px' }}>
      <button
        onClick={onBack}
        style={{
          marginBottom: '24px',
          color: '#0ea5e9',
          fontWeight: 'bold',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        ← 戻る
      </button>

      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '24px' }}>
        ルート上の観光地
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {places.map((place) => (
          <div
            key={place.id}
            onClick={() => onSelectPlace(place)}
            style={{
              background: 'linear-gradient(to right, #f0f9ff, #ecf9f9)',
              border: '2px solid #93c5fd',
              borderRadius: '8px',
              padding: '24px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'
              e.currentTarget.style.borderColor = '#0284c7'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = '#93c5fd'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '40px', marginBottom: '8px' }}>{place.image}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>{place.name}</h3>
                <p style={{ color: '#666', marginBottom: '8px' }}>{place.description}</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>★ {place.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}