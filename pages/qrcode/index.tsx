import { useState } from 'react';
import { qrCodeTypes } from '../../data/qrOptions';
import { QRCodeCanvas } from "qrcode.react";
import AdsBanner from '@/components/AdsBanner';

const QrCodeGenerator = () => {
    const [inputType, setInputType] = useState('website');
    const [inputTypeLabel, setInputTypeLabel] = useState('QR para WebSites');

    const [url, setUrl] = useState('');

    const [email, setEmail] = useState('');
    const [emailTitle, setEmailTitle] = useState('');
    const [emailBody, setEmailBody] = useState('');

    const [text, setText] = useState('');

    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [whatsappMessage, setWhatsappMessage] = useState('');

    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        email: '',
        emailTitle: '',
        emailBody: '',
        text: '',
        whatsappNumber: '',
        whatsappMessage: '',
        inputValue: ''
    });

    const handleEmailValue = (email: string, emailTitle: string, emailBody: string) => {
        return `mailto:${email}?subject=${encodeURIComponent(emailTitle)}&body=${encodeURIComponent(emailBody)}`;
    }

    const handleWhatsappValue = (whatsappNumber: string, whatsappMessage: string) => {
        return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setError((prevError) => ({ ...prevError, email: 'Por favor, insira um e-mail válido.' }));
            return false;
        }
        setError((prevError) => ({ ...prevError, email: '' }));
        return true;
    }

    const validateEmailTitle = (emailTitle: string) => {
        if (emailTitle.length < 3) {
            setError((prevError) => ({ ...prevError, emailTitle: 'Por favor, insira um título com pelo menos 3 caracteres.' }));
            return false;
        }
        setError((prevError) => ({ ...prevError, emailTitle: '' }));
        return true;
    }

    const validateEmailBody = (emailBody: string) => {
        if (emailBody.length < 3) {
            setError((prevError) => ({ ...prevError, emailBody: 'Por favor, insira um corpo de e-mail com pelo menos 3 caracteres.' }));
            return false;
        }
        setError((prevError) => ({ ...prevError, emailBody: '' }));
        return true;
    }

    const validateText = (text: string) => {
        if (text.length < 3) {
            setError((prevError) => ({ ...prevError, text: 'Por favor, insira um texto com pelo menos 3 caracteres.' }));
            return false;
        }
        setError((prevError) => ({ ...prevError, text: '' }));
        return true;
    }

    const validateWhatsappNumber = (whatsappNumber: string) => {
        const whatsappNumberRegex = /^\d{8,15}$/;
        if (!whatsappNumberRegex.test(whatsappNumber)) {
            setError((prevError) => ({ ...prevError, whatsappNumber: 'Por favor, insira um número de WhatsApp válido.' }));
            return false;
        }
        setError((prevError) => ({ ...prevError, whatsappNumber: '' }));
        return true;
    }

    const validateWhatsappMessage = (whatsappMessage: string) => {
        if (whatsappMessage.length < 3) {
            setError((prevError) => ({ ...prevError, whatsappMessage: 'Por favor, insira uma mensagem com pelo menos 3 caracteres.' }));
            return false;
        }
        setError((prevError) => ({ ...prevError, whatsappMessage: '' }));
        return true;
    }

    const generateQRCode = () => {
        let qrValue = '';
        if (inputType === 'email') {
            if (!email || !emailTitle || !emailBody) {
                setError((prevError) => ({ ...prevError, email: 'Por favor, preencha o campo de e-mail.', emailTitle: 'Por favor, preencha o campo de título.', emailBody: 'Por favor, preencha o campo de corpo de e-mail.' }));
                return;
            }

            if (!validateEmail(email) || !validateEmailTitle(emailTitle) || !validateEmailBody(emailBody)) {
                return;
            }

            qrValue = handleEmailValue(email, emailTitle, emailBody);
        }
        else if (inputType === 'text') {
            if (!text) {
                setError((prevError) => ({ ...prevError, text: 'Por favor, preencha o campo de texto.' }));
                return;
            }

            if (!validateText(text)) {
                return;
            }

            qrValue = text;
        }
        else if (inputType === 'website') {
            qrValue = url;
        }
        else if (inputType === 'whatsapp') {
            if (!whatsappNumber || !whatsappMessage) {
                setError((prevError) => ({ ...prevError, whatsappNumber: 'Por favor, preencha o campo de número de WhatsApp.', whatsappMessage: 'Por favor, preencha o campo de mensagem de WhatsApp.' }));
                return;
            }

            if (!validateWhatsappNumber(whatsappNumber) || !validateWhatsappMessage(whatsappMessage)) {
                return;
            }

            qrValue = handleWhatsappValue(whatsappNumber, whatsappMessage);
        }

        setInputValue(qrValue);
        if (!inputValue.trim()) {
            setError((prevError) => ({ ...prevError, inputValue: 'Por favor, preencha o campo.' }));
            return;
        }

        setLoading(true);
        setError({
            email: '',
            emailTitle: '',
            emailBody: '',
            text: '',
            whatsappNumber: '',
            whatsappMessage: '',
            inputValue: ''
        });

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const handleDownload = (format: 'png' | 'svg') => {
        alert(`Download do QR Code em ${format.toUpperCase()} iniciado!`);
    };

    return (
        <div>
                <AdsBanner
                    dataAdFormat="auto"
                    dataFullWidthResponsive={true}
                    dataAdSlot="5945483902"
                />
            <div className='flex justify-center mt-4 bg-black'>

            </div>

            <div className="container mx-auto p-4">
                <div className="p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Lado Esquerdo - Formulário */}
                        <div className='bg-white p-8 rounded-lg'>
                            <h1 className="text-2xl  text-violet-700 font-bold mb-4">{inputTypeLabel}</h1>
                            <div className='mb-6 bounded-full p-5 '>
                                <div className="flex p-3 rounded-full space-x-4 bg-gray-100">
                                    {
                                        qrCodeTypes.map((qrType, key) => (
                                            <button
                                                key={key}
                                                id={qrType.id}
                                                onClick={() => {
                                                    setInputType(qrType.id);
                                                    setInputTypeLabel(qrType.label);
                                                }}
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
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                            placeholder="E: https://www.meusite.com/"
                                            className="w-full p-4 rounded-lg bg-gray-100 mb-4 text-black border-gray focus:outline-none focus:ring-1 focus:ring-violet-300"
                                            aria-label="Campo de entrada para gerar QR Code"
                                        />
                                        {error.inputValue && <p className="text-red-500 text-sm mt-2">{error.inputValue}</p>}
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
                                        {error.email && <p className="text-red-500 text-sm mt-2">{error.email}</p>}

                                        <label className="block mb-2 text-gray-500 font-medium">Inisira o título</label>
                                        <input
                                            type="text"
                                            value={emailTitle}
                                            onChange={(e) => setEmailTitle(e.target.value)}
                                            placeholder="Título usado para o e-mail"
                                            className="w-full p-4 rounded-lg bg-gray-100 mb-4 text-black border-gray focus:outline-none focus:ring-1 focus:ring-violet-300"
                                            aria-label="Campo de entrada para gerar QR Code"
                                        />
                                        {error.emailTitle && <p className="text-red-500 text-sm mt-2">{error.emailTitle}</p>}

                                        <label className="block mb-2 text-gray-500 font-medium">Corpo do e-mail</label>
                                        <textarea
                                            value={emailBody}
                                            onChange={(e) => setEmailBody(e.target.value)}
                                            placeholder="Digite seu texto aqui..."
                                            className="w-full p-4 rounded-lg bg-gray-100 mb-4 text-black border-gray focus:outline-none focus:ring-1 focus:ring-violet-300"
                                            aria-label="Campo de entrada para gerar QR Code"
                                        />
                                        {error.emailBody && <p className="text-red-500 text-sm mt-2">{error.emailBody}</p>}
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
                                        {error.text && <p className="text-red-500 text-sm mt-2">{error.text}</p>}
                                    </div>
                                )
                            }
                            {
                                inputType === "whatsapp" && (
                                    <div className='border-gray mb-6 border-2 boder-solid rounded-lg p-5'>
                                        <label className="block mb-2 text-gray-500 font-medium">Inisira o número de WhatsApp</label>
                                        <input
                                            type="text"
                                            value={whatsappNumber}
                                            onChange={(e) => setWhatsappNumber(e.target.value)}
                                            placeholder="E: 5511999999999"
                                            className="w-full p-4 rounded-lg bg-gray-100 mb-4 text-black border-gray focus:outline-none focus:ring-1 focus:ring-violet-300"
                                            aria-label="Campo de entrada para gerar QR Code"
                                        />
                                        {error.whatsappNumber && <p className="text-red-500 text-sm mt-2">{error.whatsappNumber}</p>}

                                        <label className="block mb-2 text-gray-500 font-medium">Inisira a mensagem de WhatsApp</label>
                                        <textarea
                                            value={whatsappMessage}
                                            onChange={(e) => setWhatsappMessage(e.target.value)}
                                            placeholder="Digite sua mensagem aqui..."
                                            className="w-full p-4 rounded-lg bg-gray-100 mb-4 text-black border-gray focus:outline-none focus:ring-1 focus:ring-violet-300"
                                            aria-label="Campo de entrada para gerar QR Code"
                                        />
                                        {error.whatsappMessage && <p className="text-red-500 text-sm mt-2">{error.whatsappMessage}</p>}
                                    </div>
                                )
                            }

                            <button
                                onClick={generateQRCode}
                                className="w-full bg-violet-500 rounded-lg text-white p-4 rounded hover:bg-slate-700 transition-colors duration-300"
                            >
                                Gerar QR Code
                            </button>
                        </div>

                        {/* Lado Direito - QR Code */}
                        <div className="flex justify-center items-center bg-violet-600 p-4 rounded-lg">
                            {loading ? (
                                <div className="flex justify-center items-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                                    <span className="ml-2">Gerando QR Code...</span>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <label className="block mb-2 text-white mb-6 font-medium">{!inputValue ? 'Seu QR Code ficará pronto aqui:' : 'Descarregue seu QR:'}</label>
                                    <div className='p-4 bg-white rounded-lg mb-6'>
                                        {inputValue && !loading ? (
                                            <QRCodeCanvas value={inputValue} size={200} />
                                        ) : (
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/3081/3081329.png"
                                                alt="QR Code"
                                                className="w-48 h-48"
                                            />

                                        )}
                                    </div>

                                    <div className="mt-4 space-x-4">
                                        <button
                                            onClick={() => handleDownload('png')}
                                            disabled={!inputValue}
                                            className={`px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition-colors duration-300 ${!inputValue ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            Download PNG
                                        </button>
                                        <button
                                            onClick={() => handleDownload('svg')}
                                            disabled={!inputValue}

                                            className={`px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition-colors duration-300 ${!inputValue ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            Download SVG
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default QrCodeGenerator;