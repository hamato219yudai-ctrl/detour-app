export default function Step1({ onComplete }: { onComplete: (mode: string) => void }): import("react/jsx-runtime").JSX.Element {
  return (
    <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', padding: '32px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '24px' }}>Step 1: 交通手段を選択</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <button
          onClick={() => onComplete('car')}
          style={{
            width: '100%',
            background: '#0ea5e9',
            color: 'white',
            fontWeight: 'bold',
            padding: '16px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#0284c7'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#0ea5e9'}
        >
          🚗 車で行く
        </button>
        
        <button
          onClick={() => onComplete('train')}
          style={{
            width: '100%',
            background: '#06b6d4',
            color: 'white',
            fontWeight: 'bold',
            padding: '16px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#0891b2'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#06b6d4'}
        >
          🚆 電車で行く
        </button>
      </div>
    </div>
  )
}