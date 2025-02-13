import { useEffect } from "react";
import { ComponentProps } from 'react';

interface Props extends ComponentProps<any> {
  dataAdSlot: string;
}

const AdsComponent = ({ dataAdSlot }: Props) => {

    useEffect(() => {
        try {
            (window as any).adsbygoogle = (window as any).adsbygoogle || [];
            (window as any).adsbygoogle.push({});
        } catch (e) {
            alert(e)
        }

    }, []);



    return (
        <>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-9676944737838425"
                data-ad-slot={dataAdSlot}
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>
    );
};

export default AdsComponent;
