import { useState } from 'react';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import AdBanner from '../components/AdBanner';
import { qrCodeTypes } from '../data/QrCodeTyoes';

const Home = () => {
    const [inputType, setInputType] = useState('website');
    const [inputValue, setInputValue] = useState('');
    const [qrCode, setQrCode] = useState('');
    const [option, setOption] = useState({});
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
    };

    return (
        <div>
            <Seo title="Quick Tools Belt" description='Description' />
            <div className="min-h-screen bg-blue-50">
                <Navbar />
                <div className="container mx-auto p-4">
                    <div className="p-6 rounded-lg">
                        <h1 className="text-2xl font-bold mb-4">Gerar QR Code</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Lado Esquerdo - Formulário */}
                            <div className='bg-white p-8 rounded-lg'>
                                <div className='mb-6 bounded-full p-5 '>
                                    <div className="flex p-3 rounded-full space-x-4 bg-blue-50">
                                        {
                                            qrCodeTypes.map((qrType) => (
                                                <button
                                                    id={qrType.id}
                                                    onClick={() => setInputType(qrType.id)}
                                                    className={`w-14 h-14 flex items-center justify-center rounded-full transition-colors duration-300 
                                                ${inputType == qrType.id ? 'bg-violet-500 text-white shadow-lg' : 'text-violet-400 bg-white'
                                                        }`}
                                                >
                                                    {qrType.icon}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>

                                <h2 className="block text-1xl font-bold mb-2">Preencha o conteúdo</h2>

                                {
                                    inputType === "website" && (
                                        <div className='border-gray mb-6 border-2 boder-solid rounded-lg p-5'>
                                            <label className="block mb-2 text-gray-500 font-medium">URL</label>
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                placeholder="https://..."
                                                className="w-full p-4 rounded-full bg-white mb-4 border-solid - border-gray border-2 focus:outline-none focus:ring-1 focus:ring-violet-300"
                                                aria-label="Campo de entrada para gerar QR Code"
                                            />
                                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                                        </div>
                                    )
                                }

                                <button
                                    onClick={generateQRCode}
                                    className="w-full bg-violet-500 rounded-full text-white p-4 rounded hover:bg-slate-700 transition-colors duration-300"
                                >
                                    Gerar QR Code
                                </button>
                                <AdBanner
                                    data-ad-slot="7434970023"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"
                                />
                            </div>

                            {/* Lado Direito - QR Code */}
                            <div className="flex justify-center items-center bg-white p-4 rounded-lg">
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
        </div>

    );
};

export default Home;