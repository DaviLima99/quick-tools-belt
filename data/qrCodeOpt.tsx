import { Mail, Link, Wifi, FileText, User, Music, Phone } from "lucide-react";

export const qrCodeTypes = [
    {
        id: 'website',
        icon: <Link size={18}/>,
        label: 'Site',
        placeholder: 'Digite o endereço do site...',
    },
    {
        id: 'email',
        icon: <Mail size={18}/>,
        label: 'E-mail',
        placeholder: 'example@email.com',
    },
    {
        id: 'text',
        icon: <FileText size={18}/>,
        label: 'Texto',
        placeholder: 'Digite seu texto...',
    },
    {
        id: 'whatsapp',
        icon: <Phone size={18}/>,
        label: 'Contato',
        placeholder: 'Digite seu número de telefone...',
    },

]