/* Aqui es donde tu podras editar el contenido del carrousel agregado, cada ID corresponde a un slider, su titulo  y la ruta de imagenes. */

import { ICarouselItem } from '../../carousel/icarousel-item.metadata';
export const CAROUSEL_DATA_ITEMS_BANNERP: ICarouselItem[] = [
    {
        id: 1,
        title: {
            first: 'Forma parte de ',
            second: 'FAMILIATESE;'
        },
        subtitle: 'Prueba de imágen',
        link: 'localhost:4200/asd',
        image: "assets/images/admisionytramitesimg/inscripcion/pexels-photo-3178818.jpeg"
    }, {
        id: 2,
        title: {
            first: 'Inscripciones Abiertas;',
            second: 'Convocatoria aqui',


        },
        subtitle: '',
        link: 'Carreras/Industrial',
        image: "assets/images/admisionytramitesimg/inscripcion/pexels-photo-4861373.jpeg"
    }, {
        id: 3,
        title: {
            first: 'Anuncios',
            second: ''
        },
        subtitle: '',
        link: 'Carreras/Industrial',
        image: "../../../../../assets/images/admisionytramitesimg/inscripcion/BOLETAINSCRIPCIO.jpg"
    }
]

