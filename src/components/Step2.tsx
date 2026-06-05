const categories = [
  { id: 'hot_spring', name: '温泉', icon: '♨️' },
  { id: 'recreation', name: 'レクリエーション', icon: '🎡' },
  { id: 'nature', name: '自然', icon: '🏞️' },
  { id: 'museum', name: '美術館', icon: '🖼️' },
  { id: 'history', name: '歴史遺産', icon: '⛩️' },
]

export default function Step2({ onComplete }: { onComplete: (category: string) => void }): import("react/jsx-runtime").JSX.Element {
  return (
    <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', padding: '32px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '24px' }}>Step 2: 観光地カテゴリを選択</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onComplete(category.id)}
            style={{
              background: 'linear-gradient(to bottom right, #60a5fa, #22d3ee)',
              color: 'white',
              fontWeight: 'bold',
              padding: '24px 16px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '8px' }}>{category.icon}</div>
            <div style={{ fontSize: '16px' }}>{category.name}</div>
          </button>
        ))}
      </div>
    </div>
  )
}