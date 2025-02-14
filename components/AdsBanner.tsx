import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdBannerProps {
  adClient: string;
  adSlot: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ adClient, adSlot }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.adsbygoogle) {
        window.adsbygoogle = [];
      }
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        console.error("Erro ao carregar anúncios", e);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdBanner;
