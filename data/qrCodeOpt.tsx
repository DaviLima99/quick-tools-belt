import { Mail, Link, Wifi, FileText, User, Music, Phone, MessageCircleMore } from "lucide-react";

export const qrCodeTypes = [
    {
        id: 'website',
        icon: <Link size={20}/>,
        label: 'QR para WebSites',
        placeholder: 'Digite o endereço do site...',
    },
    {
        id: 'email',
        icon: <Mail size={20}/>,
        label: 'QR para E-mail',
        placeholder: 'QR para e-mail',
    },
    {
        id: 'text',
        icon: <FileText size={20}/>,
        label: 'QR para texto',
        placeholder: 'Digite seu texto...',
    },
    {
        id: 'whatsapp',
        icon: <MessageCircleMore size={20}/>,
        label: 'QR para mensagem WhatsApp',
        placeholder: 'Digite sua mensagem WhatsApp..',
    },

]