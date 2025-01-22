import { useState } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  const [inputType, setInputType] = useState<'url' | 'text'>('url');
  const [inputValue, setInputValue] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQRCode = () => {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
    setQrCode(qrCodeUrl);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Gerar QR Code</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lado Esquerdo - Formulário */}
            <div>
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => setInputType('url')}
                  className={`px-4 py-2 rounded ${
                    inputType === 'url' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  }`}
                >
                  URL
                </button>
                <button
                  onClick={() => setInputType('text')}
                  className={`px-4 py-2 rounded ${
                    inputType === 'text' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  }`}
                >
                  Texto
                </button>
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={inputType === 'url' ? 'Digite a URL' : 'Digite o texto'}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <button
                onClick={generateQRCode}
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                Gerar QR Code
              </button>
            </div>

            {/* Lado Direito - QR Code */}
            <div className="flex justify-center items-center">
              {qrCode ? (
                <img src={qrCode} alt="QR Code" className="w-48 h-48" />
              ) : (
                <p className="text-gray-500">Seu QR Code aparecerá aqui</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;