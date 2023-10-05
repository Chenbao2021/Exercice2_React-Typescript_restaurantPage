import {useEffect, useState} from 'react'
import Modal from 'react-modal';

import { photo1, photo2, photo3, photo4, photo5, photo6 } from '../assets/photos/photoMain'

import './galerie.css'
function Galerie() {
    const [modal, setModal] = useState<boolean>(false);
    const [imageCode, setImageCode] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [imagesVisible, setImagesVisible] = useState<boolean[]>(Array(12).fill(false)); 
    const imageContainer = document.getElementById('galerie-body-photos');
    const images = imageContainer?.querySelectorAll('img');

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);
    const zoomImage = (imageCode:number) => {
        setImageCode(imageCode);
        openModal();
    }
    function getImageSource(index: number): string {
        switch (index % 6) {
            case 0: return photo1;
            case 1: return photo2;
            case 2: return photo3;
            case 3: return photo4;
            case 4: return photo5;
            case 5: return photo6;
            default: return '';
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(currentIndex <= imagesVisible.length) {
                const newImagesVisible = [...imagesVisible];
                newImagesVisible[currentIndex] = true;
                newImagesVisible[currentIndex + 1] = true;
                newImagesVisible[currentIndex + 2] = true;
                newImagesVisible[currentIndex + 3] = true;
                setImagesVisible(newImagesVisible);
                setCurrentIndex(currentIndex + 4);
            }
        }, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [currentIndex, images])
  return (
    <div>
        <div className="galerie">
            <div className="galerie-head">
                <p>Galerie photo</p>    
            </div>
            <div className="galerie-body">
                <h1>NOS PHOTOS</h1>
                <div className="galerie-body-photos" id="galerie-body-photos">
                    {
                        Array(18).fill(null).map((_, index) => {
                            return <img onClick={() => zoomImage(index)} key={index} src={getImageSource(index)} style={{ display: imagesVisible[index] ? 'block' : 'none',  animationName: imagesVisible[index] ? 'image-display-in' : '' }} />
                        })
                    }
                </div>
            </div>    
        </div>       
        <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        className='imageModal'
        >
            <img onClick={closeModal} src={getImageSource(imageCode)} />
      </Modal>
    </div>
  )
}

export default Galerie