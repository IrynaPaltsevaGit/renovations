import React from 'react';
import {useState} from 'react';
import Section from '../../components/Section/Section';
import GalleryItem from '../../components/GalleryItem/GalleryItem';
import "./Gallery.scss";

// object 1
import img from "../../assets/images/object_1/IMG_6335.JPG";
import img2 from "../../assets/images/object_1/IMG_6339.JPG";
import img1 from "../../assets/images/object_1/IMG_6631.jpg";
import img3 from "../../assets/images/object_1/IMG_6632.jpg";
import img4 from "../../assets/images/object_1/IMG_6634.jpg";
import img5 from "../../assets/images/object_1/IMG_6764.jpg";
import img6 from "../../assets/images/object_1/IMG_6766.jpg";

// object 2
import img7 from "../../assets/images/object_2/IMG_1411.jpg";
import img8 from "../../assets/images/object_2/IMG_1412.jpg";
import img9 from "../../assets/images/object_2/IMG_1413.jpg";
import img10 from "../../assets/images/object_2/IMG_1415.jpg";
import img11 from "../../assets/images/object_2/IMG_1416.jpg";
import img12 from "../../assets/images/object_2/IMG_1417.jpg";

// object 3
import img13 from "../../assets/images/object_3/IMG_1425.jpg";
import img14 from "../../assets/images/object_3/IMG_1339.jpg";
import img15 from "../../assets/images/object_3/IMG_1183.jpg";
import img16 from "../../assets/images/object_3/IMG_1176.jpg";
import img17 from "../../assets/images/object_3/IMG_1174.jpg";
import img18 from "../../assets/images/object_3/IMG_1173.jpg";
import img19 from "../../assets/images/object_3/IMG_1172.jpg";

// object 4
import img20 from "../../assets/images/object_4/1.jpg";
import img21 from "../../assets/images/object_4/2.jpg";
import img22 from "../../assets/images/object_4/3.jpg";
import img23 from "../../assets/images/object_4/4.jpg";
import img24 from "../../assets/images/object_4/5.jpg";
import img25 from "../../assets/images/object_4/6.jpg";
import img26 from "../../assets/images/object_4/7.jpg";
import img27 from "../../assets/images/object_4/8.jpg";
import img28 from "../../assets/images/object_4/9.jpg";
import img29 from "../../assets/images/object_4/10.jpg";
import img30 from "../../assets/images/object_4/11.jpg";
import img31 from "../../assets/images/object_4/12.jpg";
import img32 from "../../assets/images/object_4/13.jpg";
import img33 from "../../assets/images/object_4/14.jpg";


export default function Gallery() {
    
    const imgs = [
        // object 1
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
        },
        {
            src: img4
        },
        {
            src: img5
        },
        {
            src: img6
        },
        // object 2
        {
            src: img7
        },
        {
            src: img8
        },
        {
            src: img9
        },
        {
            src: img10
        },
        {
            src: img11
        },
        {
            src: img12
        },
        // object 3
        {src: img13},
        {src: img14},
        {src: img15},
        {src: img16},
        {src: img17},
        {src: img18},
        {src: img19},

        // object 4, putty
        {src: img20},
        {src: img21},
        {src: img22},
        {src: img23},
        {src: img24},
        {src: img25},
        {src: img26},
        {src: img27},
        {src: img28},
        {src: img29},
        {src: img30},
        {src: img31},
        {src: img32},
        {src: img33},
    ];
    const [activeImage, setActiveImg] = useState(0);

    function nextImage() {
        let nextImageIndex = activeImage + 1;
        if(nextImageIndex >= imgs.length) {
            nextImageIndex = 0;
        }
        setActiveImg(nextImageIndex);
    }

    function prevImage() {
        let prevImageIndex = activeImage - 1;
        if(prevImageIndex < 0) {
            prevImageIndex = imgs.length - 1;
        }
        setActiveImg(prevImageIndex);
    }

    return (
        <Section useAnimationEffect={false} classes='gallery'>
            <div className='gallery__container'>
                <div className='gallery__wrap'>
                    {/* <button onClick={prevImage} className='gallery__button'> */}
                        {/* {'u0029'} */}
                        {/* Prev */}
                    {/* </button> */}
                    {
                        imgs.map((img, index) => <GalleryItem key={`kk-${index}`} img={imgs[index]} />)
                    }
                    {/* <GalleryItem img={imgs[activeImage - 1 < 0 ? imgs.length - 1 : activeImage - 1]} />
                    <GalleryItem img={imgs[activeImage]} />
                    <GalleryItem img={imgs[activeImage + 1 == imgs.length ? 0 : activeImage + 1]} /> */}
                    {/* <button onClick={nextImage} className='gallery__button'> */}
                        {/* {'u0031'} */}
                        {/* Next */}
                    {/* </button> */}
                </div>                
            </div>
            
        </Section>
    )
}

