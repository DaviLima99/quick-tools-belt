import AdsBanner from "@/components/AdsBanner";
import Button from "@/components/Button";
import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}[]|:;<>,.?/~";

    let characters = lowercaseChars;
    if (includeUppercase) characters += uppercaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSymbols) characters += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <>
      <main className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-8/12 px-4 mb-8">
            <div className=" mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Gerador de Senhas</h2>
              <div className="mb-4">
                <label className="block mb-1">Comprimento: {length}</label>
                <input
                  type="range"
                  min="6"
                  max="32"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full accent-violet-600"
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={() => setIncludeUppercase(!includeUppercase)}
                  className="mr-2 accent-violet-600"
                />
                <label>Incluir Letras Maiúsculas</label>
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers(!includeNumbers)}
                  className="mr-2 accent-violet-600"
                />
                <label>Incluir Números</label>
              </div>
              <div className="mb-8 flex items-center">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={() => setIncludeSymbols(!includeSymbols)}
                  className="mr-2 accent-violet-600"
                />
                <label>Incluir Caracteres Especiais</label>
              </div>
              {/* <button
                onClick={generatePassword}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Gerar Senha
              </button> */}
              <Button variant="default" onClick={generatePassword}>Gerar senha</Button>
              {password && (
                <div className="mt-4 p-2 bg-gray-900 rounded text-center flex items-center justify-between">
                  <span className="text-lg font-mono break-all">
                    {isVisible ? password : "•".repeat(password.length)}
                  </span>
                  <div>
                    <button
                      onClick={() => setIsVisible(!isVisible)}
                      className="ml-2 bg-gray-700 px-2 py-1 rounded"
                    >
                      {isVisible ? "🙈" : "👁️"}
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="ml-2 bg-violet-500 px-2 py-1 rounded"
                    >
                      📋
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-black mb-5 mt-5">
              <AdsBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="8455833841"
              />
            </div>
          </div>
          <div className="w-full md:w-4/12 px-4 mb-8">
            <div className="bg-black mb-5">
              <AdsBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="8455833841"
              />
            </div>
            <div className="bg-black mb-5">
              <AdsBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="8455833841"
              />
            </div>
          </div>
        </div>
      </main>
    </>

  );
}