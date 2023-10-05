import {useEffect, useState} from 'react'
import {Head} from '../components/componentsMain';
import { menu1, menu2, menu3 } from '../assets/menu/menuMain';

import './accueil.css'
function Accueil() {
    const [visibleImage, setVisibleImage] = useState<number>(0);
    const handleScroll = () => {
        const divHeight = 574;

        const body = document.getElementById('accueil');
        //La où il se trouve l'élement accueil dans la page web.
        const bodyTop = body?.getBoundingClientRect().top;
        
        if(bodyTop && bodyTop < 0) {
            let absoluteBody = -bodyTop + divHeight;
            const currentDiv = Math.floor(absoluteBody / divHeight);
            if(visibleImage < currentDiv) {
                setVisibleImage(currentDiv);
            }
        }
    }

    useEffect(
        () => {
            window.addEventListener('scroll', handleScroll);
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, [visibleImage]
    );
    return (
        <>
            <Head />
            <div className="accueil" id="accueil">
                <div className="accueil-content">
                    <h1 className='accueil-content-title'>MENU SUSHI</h1>
                    <div className='accueil-content-description'>
                        <p>
                            Chez Sushi Village,<br />
                            nous vous proposons des sushi, sashimi, maki california, brochettes yakitori
                            et les plats chauds préparés sur commande. Fraîcheur garantie!
                        </p>
                    </div>
                    <div className="accueil-content-numero">
                        <p>TÉL:06 58 63 01 00</p>
                    </div>
                    <div className="accueil-content-menu">
                        <img src={menu1} className={`rotateInDownLeft`} />
                        <img src={menu2} className={`${visibleImage >= 1 ? 'rotateInDownLeft' : 'nonVisible'}`} />
                        <img src={menu3} className={`${visibleImage >= 2 ? 'rotateInDownLeft' : 'nonVisible'}`} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accueil