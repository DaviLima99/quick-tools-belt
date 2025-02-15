import AdsBanner from "@/components/AdsBanner";
import { ArrowRightLeft, MoveRight } from "lucide-react";
import { useState, useEffect } from "react";

const API_URL = "https://api.exchangerate-api.com/v4/latest/";
const FLAG_URL = "https://flagcdn.com/w40/";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencies, setCurrencies] = useState<string[]>([]);

  useEffect(() => {
    fetch(API_URL + "USD")
      .then((res) => res.json())
      .then((data) => setCurrencies(Object.keys(data.rates)));
  }, []);

  useEffect(() => {
    if (amount > 0) {
      fetch(`${API_URL}${fromCurrency}`)
        .then((res) => res.json())
        .then((data) => setConvertedAmount(amount * data.rates[toCurrency]));
    }
  }, [amount, fromCurrency, toCurrency]);

  const getFlagUrl = (currency: string) => `${FLAG_URL}${currency.slice(0, 2).toLowerCase()}.png`;

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <>
      <main className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-8/12 px-4 mb-8">
          
            <div className="mx-auto p-6 bg-slate-800 shadow-md rounded-lg">
              <h1 className="text-2xl font-bold mb-4 text-center">Conversor de Moedas</h1>
              <div className="flex flex-col gap-4">
              <label className="block mb-2 text-gray-200 font-medium">Inisira o valor para conversão</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  className="w-full p-4 rounded-lg bg-slate-700 mb-4 text-white border-slate-800 focus:outline-none focus:ring-1 focus:ring-violet-300"
                  placeholder="Valor"
                />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src={getFlagUrl(fromCurrency)} alt={fromCurrency} className="w-6 h-4" />
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="border-slate-800 p-2 rounded w-48 bg-slate-700 focus:outline-none focus:ring-1 focus:ring-violet-300 "
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                      ))}
                    </select>
                  </div>
                  <button onClick={swapCurrencies} className="mx-2 p-2 bg-late-900 rounded-full">
                    <ArrowRightLeft/>
                  </button>
                  {/* <span className="mx-2 flex items-center"><MoveRight/></span>/ */}
                  <div className="flex items-center gap-2">
                    <img src={getFlagUrl(toCurrency)} alt={toCurrency} className="w-6 h-4" />
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="border-slate-800 p-2 rounded w-48 bg-slate-700 focus:outline-none focus:ring-1 focus:ring-violet-300 "
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="text-lg font-semibold text-center mt-4">
                  {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
                </div>
              </div>
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
          </div>
        </div>
      </main>
    </>
  );
}