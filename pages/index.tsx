import { useState } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    const [inputType, setInputType] = useState<'url' | 'text'>('url');
    const [inputValue, setInputValue] = useState('');
    const [qrCode, setQrCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    const generateQRCode = () => {
      if (!inputValue.trim()) {
        setError('Por favor, preencha o campo.');
        return;
      }
  
      setLoading(true);
      setError('');
  
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
      setQrCode(qrCodeUrl);
  
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
  
    const handleDownload = (format: 'png' | 'svg') => {
      alert(`Download do QR Code em ${format.toUpperCase()} iniciado!`);
      // Lógica de download aqui
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
                    className={`px-4 py-2 rounded transition-colors duration-300 ${
                      inputType === 'url' ? 'bg-slate-900 text-white' : 'bg-gray-200'
                    }`}
                  >
                    URL
                  </button>
                  <button
                    onClick={() => setInputType('text')}
                    className={`px-4 py-2 rounded transition-colors duration-300 ${
                      inputType === 'text' ? 'bg-slate-900 text-white' : 'bg-gray-200'
                    }`}
                  >
                    Texto
                  </button>
                </div>
                <label className="block mb-2">Preencha o conteúdo</label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={inputType === 'url' ? 'http://example.com' : 'Some text'}
                  className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  aria-label="Campo de entrada para gerar QR Code"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button
                  onClick={generateQRCode}
                  className="w-full bg-slate-900 text-white p-2 rounded hover:bg-slate-700 transition-colors duration-300"
                >
                  Gerar QR Code
                </button>
              </div>
  
              {/* Lado Direito - QR Code */}
              <div className="flex justify-center items-center">
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                    <span className="ml-2">Gerando QR Code...</span>
                  </div>
                ) : qrCode ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={qrCode}
                      alt="QR Code"
                      className="w-48 h-48 hover:scale-105 transition-transform duration-300"
                    />
                    <div className="mt-4 space-x-4">
                      <button
                        onClick={() => handleDownload('png')}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
                      >
                        Download PNG
                      </button>
                      <button
                        onClick={() => handleDownload('svg')}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                      >
                        Download SVG
                      </button>
                    </div>
                  </div>
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3081/3081329.png"
                    alt="QR Code"
                    className="w-48 h-48"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Home;