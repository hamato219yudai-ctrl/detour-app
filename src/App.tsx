import { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step5 from './components/Step5';
import Detail from './components/Detail';

export default function App() {
  const [step, setStep] = useState(1);
  const [transportMode, setTransportMode] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [route, setRoute] = useState<any>(null);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const handleStep1Complete = (mode: string) => {
    setTransportMode(mode);
    setStep(2);
  };

  const handleStep2Complete = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setStep(3);
  };

  const handleStep3Complete = (routeData: any) => {
    setRoute(routeData);
    setStep(4);
  };

  const handlePlaceSelect = (place: any) => {
    setSelectedPlace(place);
    setStep(5);
  };

  const handleBackClick = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #f0f9ff, #ecf9f9)',
      }}
    >
      <header
        style={{
          background: 'linear-gradient(to right, #0ea5e9, #06b6d4)',
          color: 'white',
          padding: '24px',
          boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', margin: 0 }}>
          寄り道観光
        </h1>
        <p style={{ color: '#e0f2fe', marginTop: '8px', margin: 0 }}>
          出発地から目的地への道中で観光地を発見しよう
        </p>
      </header>

      <main style={{ maxWidth: '640px', margin: '0 auto', padding: '24px' }}>
        {step === 1 && <Step1 onComplete={handleStep1Complete} />}
        {step === 2 && <Step2 onComplete={handleStep2Complete} />}
        {step === 3 && (
          <Step3
            transportMode={transportMode}
            category={category}
            onComplete={handleStep3Complete}
          />
        )}
        {step === 4 && (
          <Step5
            route={route}
            onSelectPlace={handlePlaceSelect}
            onBack={handleBackClick}
          />
        )}
        {step === 5 && (
          <Detail place={selectedPlace} onBack={() => setStep(4)} />
        )}
      </main>
    </div>
  );
}
