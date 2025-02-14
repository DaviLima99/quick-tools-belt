import { Tool } from "@/pages";
import { FileText, QrCode, Lock, Clock, DollarSign } from "lucide-react";

const tools: Tool[] = [
    {
      id: "qrcode",
      enable: true,
      name: "QR Code Generator",
      description: "Gere QR Codes personalizados facilmente.",
      icon: <QrCode size={40} />, 
      link: "/qrcode",
      iconClass: 'icon-bg text-white',
      details: {
        title: "Gerador de QR Code - 100% Grátis",
        description: "Nosso Gerador de QR Code é uma ferramenta totalmente gratuita, simples e eficiente para criar códigos QR personalizados.",
        features: [
          "Gratuito e ilimitado",
          "Criação rápida e fácil",
          "Validação automática",
          "Interface responsiva e amigável",
        ],
        idealFor: "Ideal para compartilhamento rápido de informações.",
      },
    },
    {
      id: "password",
      enable: false,
      name: "Gerador de Senha",
      description: "Crie senhas seguras e aleatórias instantaneamente.",
      icon: <Lock size={40} />, 
      link: "/password",
      iconClass: 'icon-bg-second text-blue-700',
      details: {
        title: "Gerador de Senhas Seguras",
        description: "Uma ferramenta para gerar senhas aleatórias e seguras com diferentes critérios de complexidade.",
        features: [
          "Geração instantânea",
          "Opções de personalização",
          "Alta segurança",
        ],
        idealFor: "Ideal para proteger suas contas online.",
      },
    },
    {
      id: "currency",
      enable: false,
      name: "Conversor de Moedas",
      description: "Converta moedas em tempo real com taxas atualizadas.",
      icon: <DollarSign size={40} />, 
      link: "/currency",
      iconClass: 'icon-bg-second text-green-700',
      details: {
        title: "Conversor de Moedas Online",
        description: "Ferramenta para converter valores entre diferentes moedas com taxas de câmbio atualizadas.",
        features: [
          "Conversão instantânea",
          "Suporte a múltiplas moedas",
          "Taxas de câmbio em tempo real",
        ],
        idealFor: "Ideal para viajantes e investidores.",
      },
    },
    {
      id: "timer",
      enable: false,
      name: "Temporizador",
      description: "Configure contagens regressivas personalizadas.",
      icon: <Clock size={40} />, 
      link: "/timer",
      iconClass: 'icon-bg-second text-red-700',
      details: {
        title: "Temporizador Online",
        description: "Defina contagens regressivas personalizadas com notificações ao término.",
        features: [
          "Configuração fácil",
          "Alertas sonoros",
          "Suporte a múltiplos temporizadores",
        ],
        idealFor: "Ideal para cozinhar, estudar e treinar.",
      },
    },
    {
      id: "textgen",
      enable: false,
      name: "Gerador de Texto",
      description: "Gere textos automáticos e personalizáveis.",
      icon: <FileText size={40} />, 
      link: "/textgen",
      iconClass: 'icon-bg-second text-orange-700',
      details: {
        title: "Gerador de Texto Automático",
        description: "Criação automática de textos para diversas finalidades.",
        features: [
          "Personalização avançada",
          "Geração instantânea",
          "Vários estilos de escrita",
        ],
        idealFor: "Ideal para estudantes, redatores e criadores de conteúdo.",
      },
    },
  ];
  
  export default tools;