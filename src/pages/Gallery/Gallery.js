import React from 'react';
import Section from '../../components/Section/Section';
import GalleryItem from '../../components/GalleryItem/GalleryItem';
import "./Gallery.scss";
import img from "../../assets/images/1.png.webp";
import img2 from "../../assets/images/img.jpeg.webp";
import img1 from "../../assets/images/remont.jpg";
import img3 from "../../assets/images/painting.webp";

export default function Gallery() {
    const imgs = [
        {
            src: img
        },
        {
            src: img1
        },
        {
            src: img2
        },
        {
            src: img3
        }
    ];
    return (
        <Section useAnimationEffect={false} classes='gallery'>
            <div className='gallery__wrap'>
                {
                    imgs.map((img, index) => {
                        return (
                            <GalleryItem key={`gallery-item-${index}`} img={img} />
                        );
                    })
                }
            </div>
        </Section>
    )
}

