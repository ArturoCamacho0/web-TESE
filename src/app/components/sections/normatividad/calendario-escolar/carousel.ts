/* Aqui es donde tu podras editar el contenido del carrousel agregado, cada ID corresponde a un slider, su titulo  y la ruta de imagenes. */

import { ICarouselItem } from '../../carousel/icarousel-item.metadata';
export const CAROUSEL_DATA_ITEMS_BANNERP: ICarouselItem[] = [
    {
        id: 1,
        title: {
            first: '',
            second: ''
        },
        subtitle: '',
        link: 'localhost:4200/normatividad',
        image: "https://firebasestorage.googleapis.com/v0/b/app-tese.appspot.com/o/web-tese%2Fcomponentes%2FNormatividad%2FWhatsApp%20Image%202021-06-21%20at%2010.48.18%20AM.jpeg?alt=media&token=2569e2dd-7b0f-424b-8075-40a349c4b522"
    
    }, {
        id: 2,
        title: {
            first: 'Noticias',
            second: ''
        },
        subtitle: '',
        link: 'Carreras/Industrial',
        image: "assets/images/tese2.jpg"
    }, {
        id: 3,
        title: {
            first: 'Anuncios',
            second: ''
        },
        subtitle: '',
        link: 'Carreras/Industrial',
        image: "assets/images/tese3.jpg"
    }
]
