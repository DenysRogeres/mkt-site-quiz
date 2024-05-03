import { useEffect } from 'react';

export const ClickMagickTracker = () => {
    useEffect(() => {
        // Define as propriedades do tracking
        window.clickmagick_cmc = {
            uid: '197173',
            hid: '1382118209',
            cmc_project: 'Balmorex Pro',
            vid_info: 'on',
        };

        // Cria um script e adiciona ao documento
        const script = document.createElement('script');
        script.src = '//cdn.clkmc.com/cmc.js';
        script.async = true;
        document.body.appendChild(script);

        // Limpando o script quando o componente for desmontado
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Array vazio garante que o efeito execute apenas uma vez

    return null; // Componente não renderiza nada
};
