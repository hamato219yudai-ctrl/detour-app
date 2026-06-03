export default function Detail({ 
  place, 
  onBack 
}: { 
  place: any
  onBack: () => void 
}) {
  // モック データ（後で API に置き換え）
  const nearbyPlaces = [
    { id: 1, name: '近くの観光地1', rating: 4.3, icon: '🏛️' },
    { id: 2, name: '近くの観光地2', rating: 4.5, icon: '⛩️' },
    { id: 3, name: '近くの観光地3', rating: 4.7, icon: '🌳' }
  ]

  const hotels = [
    { id: 1, name: 'ホテルA', rating: 4.2, price: '8,000円〜' },
    { id: 2, name: 'ホテルB', rating: 4.5, price: '10,000円〜' },
    { id: 3, name: 'ホテルC', rating: 4.8, price: '12,000円〜' }
  ]

  const restaurants = [
    { id: 1, name: 'レストラン1', cuisine: '和食', rating: 4.3 },
    { id: 2, name: 'レストラン2', cuisine: '洋食', rating: 4.5 },
    { id: 3, name: 'レストラン3', cuisine: '中華', rating: 4.2 }
  ]

  const experiences = [
    { id: 1, name: '体験1', price: '3,000円', rating: 4.4 },
    { id: 2, name: '体験2', price: '5,000円', rating: 4.6 },
    { id: 3, name: '体験3', price: '4,000円', rating: 4.5 }
  ]

  const deals = [
    { title: 'クーポン1', description: '10%割引' },
    { title: 'クーポン2', description: '1,000円割引' }
  ]

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

      {/* 観光地情報 */}
      <div style={{ borderBottom: '2px solid #e5e7eb', paddingBottom: '24px', marginBottom: '24px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>{place.image}</div>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>{place.name}</h2>
        <p style={{ color: '#666', marginBottom: '16px', fontSize: '16px' }}>{place.description}</p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>★ {place.rating}</span>
          <a 
            href="#" 
            style={{ color: '#0ea5e9', textDecoration: 'none', fontWeight: 'bold' }}>
            公式サイト →
          </a>
        </div>
      </div>

      {/* 付近の観光地 */}
      <div style={{ borderBottom: '2px solid #e5e7eb', paddingBottom: '24px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>付近の観光地</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px' }}>
          {nearbyPlaces.map(p => (
            <div key={p.id} style={{ background: '#f3f4f6', padding: '12px', borderRadius: '8px', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{p.icon}</div>
              <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>{p.name}</p>
              <p style={{ color: '#fbbf24', fontSize: '12px' }}>★ {p.rating}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 宿泊施設 */}
      <div style={{ borderBottom: '2px solid #e5e7eb', paddingBottom: '24px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>🏨 付近の宿泊施設</h3>
        {hotels.map(hotel => (
          <div key={hotel.id} style={{ background: '#f0f9ff', padding: '12px', marginBottom: '8px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{hotel.name}</p>
              <p style={{ fontSize: '14px', color: '#666' }}>★ {hotel.rating} | {hotel.price}</p>
            </div>
            <a href="#" style={{ background: '#0ea5e9', color: 'white', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold' }}>
              楽天で予約
            </a>
          </div>
        ))}
      </div>

      {/* 飲食店 */}
      <div style={{ borderBottom: '2px solid #e5e7eb', paddingBottom: '24px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>🍽️ 付近の飲食店</h3>
        {restaurants.map(restaurant => (
          <div key={restaurant.id} style={{ background: '#ecf9f9', padding: '12px', marginBottom: '8px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{restaurant.name}</p>
              <p style={{ fontSize: '14px', color: '#666' }}>★ {restaurant.rating} | {restaurant.cuisine}</p>
            </div>
            <a href="#" style={{ background: '#06b6d4', color: 'white', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold' }}>
              詳しく見る
            </a>
          </div>
        ))}
      </div>

      {/* 体験・アクティビティ */}
      <div style={{ borderBottom: '2px solid #e5e7eb', paddingBottom: '24px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>🎯 体験・アクティビティ</h3>
        {experiences.map(exp => (
          <div key={exp.id} style={{ background: '#f0fdf4', padding: '12px', marginBottom: '8px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{exp.name}</p>
              <p style={{ fontSize: '14px', color: '#666' }}>★ {exp.rating} | {exp.price}</p>
            </div>
            <a href="#" style={{ background: '#10b981', color: 'white', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold' }}>
              予約する
            </a>
          </div>
        ))}
      </div>

      {/* お得な情報 */}
      <div>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>💰 お得な情報</h3>
        {deals.map((deal, idx) => (
          <div key={idx} style={{ background: '#fef3c7', padding: '12px', marginBottom: '8px', borderRadius: '8px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{deal.title}</p>
            <p style={{ fontSize: '14px', color: '#666' }}>{deal.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}