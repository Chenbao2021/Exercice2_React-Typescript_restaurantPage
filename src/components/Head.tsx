import { useState, useContext } from 'react'
import {logo} from "../assets/assetsMain";
import {AiOutlineSearch, AiOutlineMenu, AiOutlineCloseSquare} from 'react-icons/ai'
import { pageContext } from '../main';

import './head.css';
import {LinkNavbar} from './componentsMain';

function Head() {
    const [menuModal, setMenuModal] = useState<boolean|undefined>(undefined); 
    const openModal = ():void => setMenuModal(true);
    const closeModal = ():void => setMenuModal(false);

    const page = useContext(pageContext);
    const currentPage = page?.page;

    return (
        <div className='app-header'>
            <div className="app-header-top">
                <img src={logo} alt="Image not found" />
                <h5>Sushi Village</h5>
                <p>Restaurant Japonais</p>
            </div>
            <div className="app-header-navbar">
                <div className="app-header-bar-large">
                    <LinkNavbar page={page} currentPage={currentPage} pageName={'/'} pageNameDisplay={'Accueil'}/>
                    <LinkNavbar page={page} currentPage={currentPage} pageName={'/galerie'} pageNameDisplay={'Galerie'}/>
                    <LinkNavbar page={page} currentPage={currentPage} pageName={'/contact'} pageNameDisplay={'Contact'}/>
                    <LinkNavbar page={page} currentPage={currentPage} pageName={'/allergene'} pageNameDisplay={'Allergene'}/>
                </div>
                <div className="app-header-bar-small">
                    <button onClick={() => openModal()}>
                        <AiOutlineMenu />
                        <p>MENU</p>
                    </button>

                    <AiOutlineSearch size={'2vh'} />
                </div>
                <div
                    className= {menuModal === undefined ? 'app-header-bar-modal-disactive' : 'app-header-bar-modal'}
                    style={{animationName: menuModal ? 'modal-slide-in' : 'modal-slide-out'}}
                >
                    <div className='app-header-bar-modal-close'>
                        <AiOutlineCloseSquare color='black' onClick={() => closeModal()} size='30px' />
                    </div>
                    <LinkNavbar setModal={setMenuModal} page={page} currentPage={currentPage} pageName={'/'} pageNameDisplay={'Accueil'}/>
                    <LinkNavbar setModal={setMenuModal} page={page} currentPage={currentPage} pageName={'/galerie'} pageNameDisplay={'Galerie'}/>
                    <LinkNavbar setModal={setMenuModal} page={page} currentPage={currentPage} pageName={'/contact'} pageNameDisplay={'Contact'}/>
                    <LinkNavbar setModal={setMenuModal} page={page} currentPage={currentPage} pageName={'/allergene'} pageNameDisplay={'Allergene'}/>
                </div>
            </div>
        </div>
    )
}

export default Head