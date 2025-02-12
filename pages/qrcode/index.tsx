import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Seo from '../../components/Seo';
import AdBanner from '../../components/AdBanner';
import { qrCodeTypes } from '../../data/qrCodeOpt';
import { QRCodeCanvas } from "qrcode.react";

const QrCodeGenerator = () => {
    const [inputType, setInputType] = useState('website');
    
    const [email, setEmail] = useState('');
    const [emailTitle, setEmailTitle] = useState('');
    const [emailBody, setEmailBody] = useState('');

    const [text, setText] = useState('');
    


    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleEmailValue = (email: string, emailTitle: string, emailBody: string) => {
        return `mailto:${email}?subject=${encodeURIComponent(emailTitle)}&body=${encodeURIComponent(emailBody)}`;
    }

    const generateQRCode = () => {
        let qrValue = '';
        if (inputType === 'email') {
            if (!email || !emailTitle || !emailBody) {
                setError('Por favor, preencha o campooooos.');
            }

            qrValue = handleEmailValue(email, emailTitle, emailBody);
        }
        else if (inputType === 'text') {
            if (!text) {
                setError('Por favor, preencha o campo.');
            }

            qrValue = text;
        }


        setInputValue(qrValue);
        if (!inputValue.trim()) {
            setError('Por favor, preencha o campo.');
            return;
        }



        setLoading(true);
        setError('');

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const handleDownload = (format: 'png' | 'svg') => {
        alert(`Download do QR Code em ${format.toUpperCase()} iniciado!`);
    };

    return (
        <div>

            <div className="container mx-auto p-4">
                <div className="p-6 rounded-lg">
                    <h1 className="text-2xl  text-violet-700 font-bold mb-4">Gerar QR Code</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Lado Esquerdo - Formulário */}
                        <div className='bg-white p-8 rounded-lg'>
                            <div className='mb-6 bounded-full p-5 '>
                                <div className="flex p-3 rounded-full space-x-4 bg-gray-100">
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
                                        <label className="block mb-2 text-gray-500 font-medium">Inisira seu site</label>
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            placeholder="E: https://www.meusite.com/"
                                            className="w-full p-4 rounded-lg bg-gray-100 mb-4 text-black border-gray focus:outline-none focus:ring-1 focus:ring-violet-300"
                                            aria-label="Campo de entrada para gerar QR Code"
                                        />
                                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                                    </div>
                                )

                               
                            }
                            {
                                inputType === "email" && (
                                    <div className='border-gray mb-6 border-2 boder-solid rounded-lg p-5'>
                                        <label className="block mb-2 text-gray-500 font-medium">Inisira o e-mail</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="E: example@mail.com"
                                            className="w-full p-4 rounded-lg bg-gray-100 mb-4 text-black border-gray focus:outline-none focus:ring-1 focus:ring-violet-300"
                                            aria-label="Campo de entrada para gerar QR Code"
                                        />
                                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                                        <label className="block mb-2 text-gray-500 font-medium">Inisira o título</label>
                                        <input
                                            type="text"
                                            value={emailTitle}
                                            onChange={(e) => setEmailTitle(e.target.value)}
                                            placeholder="Título usado para o e-mail"
                                            className="w-full p-4 rounded-lg bg-gray-100 mb-4 text-black border-gray focus:outline-none focus:ring-1 focus:ring-violet-300"
                                            aria-label="Campo de entrada para gerar QR Code"
                                        />
                                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                                        <label className="block mb-2 text-gray-500 font-medium">Corpo do e-mail</label>
                                        <textarea
                                            value={emailBody}
                                            onChange={(e) => setEmailBody(e.target.value)}
                                            placeholder="Digite seu texto aqui..."
                                            className="w-full p-4 rounded-lg bg-gray-100 mb-4 text-black border-gray focus:outline-none focus:ring-1 focus:ring-violet-300"
                                            aria-label="Campo de entrada para gerar QR Code"
                                        />
                                    </div>
                                )
                            }
                            {
                                inputType === "text" && (
                                    <div className='border-gray mb-6 border-2 boder-solid rounded-lg p-5'>
                                        <label className="block mb-2 text-gray-500 font-medium">Inisira seu texto</label>
                                        <textarea
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                            placeholder="Digite seu texto aqui..."
                                            className="w-full p-4 rounded-lg bg-gray-100 mb-4 text-black border-gray focus:outline-none focus:ring-1 focus:ring-violet-300"
                                            aria-label="Campo de entrada para gerar QR Code"
                                        />
                                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                                    </div>
                                )
                            }

                            <button
                                onClick={generateQRCode}
                                className="w-full bg-violet-500 rounded-lg text-white p-4 rounded hover:bg-slate-700 transition-colors duration-300"
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
                        <div className="flex justify-center items-center bg-violet-600 p-4 rounded-lg">
                            {loading ? (
                                <div className="flex justify-center items-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                                    <span className="ml-2">Gerando QR Code...</span>
                                </div>
                            ) : inputValue && !loading ? (
                                <div className="flex flex-col items-center">
                                    <label className="block mb-2 text-white mb-6 font-medium">Descarregue o QR Code</label>
                                    <div className='p-4 bg-white rounded-lg mb-6'>
                                        <QRCodeCanvas value={inputValue} size={200} />
                                    </div>
                                 
                                    <div className="mt-4 space-x-4">
                                        <button
                                            onClick={() => handleDownload('png')}
                                            className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition-colors duration-300"
                                        >
                                            Download PNG
                                        </button>
                                        <button
                                            onClick={() => handleDownload('svg')}
                                            className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition-colors duration-300"
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

export default QrCodeGenerator;