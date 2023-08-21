export const products = [
    {
        name:           'AirPods',
        slug:           'airpods',
        description:    'Experimenta la libertad definitiva con los AirPods de Apple. Diseñados para proporcionar una calidad de audio excepcional y una comodidad sin igual, los AirPods te sumergen en tu música y llamadas con una claridad asombrosa. Su conexión inalámbrica revolucionaria te permite moverte sin restricciones mientras disfrutas de un sonido envolvente y envolvente. Los AirPods están equipados con la última tecnología de cancelación de ruido activa, lo que te permite concentrarte en lo que realmente importa. Su diseño elegante y ergonómico se adapta perfectamente a tus oídos, ofreciendo una experiencia de uso sin esfuerzo durante todo el día. Además, con la funda de carga inalámbrica, mantendrás tus AirPods listos para usar en cualquier momento. Controla tu música, ajusta el volumen y activa Siri con un toque. Ya sea que estés haciendo ejercicio, viajando o trabajando, los AirPods se adaptan a tu estilo de vida activo, brindándote una experiencia auditiva incomparable.',
        images:         [
            '/storage/images/airpods-1.webp',
            '/storage/images/airpods-2.webp',
            '/storage/images/airpods-3.webp',
        ],
        price:          200,
        stock:          20,
        category:       '',
    }
]


export const seedingProducts = ( categories ) => {
    const products = [
        {
            name:'AirPods',
            slug:'airpods',
            description:'Experimenta la libertad definitiva con los AirPods de Apple. Diseñados para proporcionar una calidad de audio excepcional y una comodidad sin igual, los AirPods te sumergen en tu música y llamadas con una claridad asombrosa. Su conexión inalámbrica revolucionaria te permite moverte sin restricciones mientras disfrutas de un sonido envolvente y envolvente. Los AirPods están equipados con la última tecnología de cancelación de ruido activa, lo que te permite concentrarte en lo que realmente importa. Su diseño elegante y ergonómico se adapta perfectamente a tus oídos, ofreciendo una experiencia de uso sin esfuerzo durante todo el día. Además, con la funda de carga inalámbrica, mantendrás tus AirPods listos para usar en cualquier momento. Controla tu música, ajusta el volumen y activa Siri con un toque. Ya sea que estés haciendo ejercicio, viajando o trabajando, los AirPods se adaptan a tu estilo de vida activo, brindándote una experiencia auditiva incomparable.',
            images: [
                '/storage/images/airpods-1.webp',
                '/storage/images/airpods-2.webp',
                '/storage/images/airpods-3.webp',
            ],
            price: 200,
            stock: 20,
            category: categories[0]._id,
        },
        {
            name:'Macbook Pro M2',
            slug:'macbook-pro-m2',
            description:'Desata tu creatividad y productividad con la nueva MacBook Pro equipada con el revolucionario chip M2 de Apple. Diseñada para impulsar tus tareas más exigentes y potenciar tus proyectos, esta MacBook Pro redefine los límites de la tecnología portátil. El chip M2 lleva el rendimiento a un nuevo nivel, brindando velocidades excepcionales y capacidades multitarea fluidas. Ya sea que estés editando videos 4K, diseñando gráficos o ejecutando aplicaciones intensivas, la MacBook Pro M2 te ofrece la potencia necesaria para hacerlo todo sin esfuerzo.La pantalla Retina XDR de alta resolución ofrece colores vibrantes y detalles asombrosos, creando una experiencia visual inmersiva. La duración de la batería mejorada te permite trabajar durante horas sin preocuparte por quedarte sin energía en el momento crucial.El diseño elegante y delgado de la MacBook Pro se complementa con un teclado cómodo y un sistema de refrigeración avanzado, garantizando un rendimiento sostenible y silencioso incluso en las tareas más exigentes. Además, con Thunderbolt 4 y USB-C, la conectividad versátil está a tu alcance.',
            images: [
                '/storage/images/macbook-pro-m2-1.webp',
                '/storage/images/macbook-pro-m2-2.webp',
                '/storage/images/macbook-pro-m2-3.webp',
            ],
            price: 900,
            stock: 33,
            category: categories[1]._id,
        },
        {
            name:'Samsung S23 Plus',
            slug:'samsung-s23-plus',
            description:'Experimenta el futuro de la tecnología móvil con el Samsung Galaxy S23 Plus. Diseñado para superar tus expectativas y elevar tu experiencia móvil, este smartphone redefine la forma en que te conectas con el mundo. La pantalla AMOLED de alta resolución te sumerge en colores vivos y detalles nítidos, creando una experiencia visual cautivadora. La fluidez y velocidad del procesador de última generación aseguran un rendimiento excepcional en todas tus actividades, desde juegos intensivos hasta multitarea sin problemas.La cámara avanzada del Galaxy S23 Plus captura momentos con una claridad impresionante, incluso en condiciones de poca luz. La tecnología de última generación te permite expresar tu creatividad y obtener resultados profesionales en cada toma.La batería de larga duración te brinda la libertad de usar tu smartphone durante todo el día sin preocuparte por quedarte sin energía. Además, con funciones de carga rápida y carga inalámbrica, estarás listo para cualquier aventura en un instante.El diseño elegante y ergonómico del Samsung Galaxy S23 Plus se adapta perfectamente a tu mano, brindando comodidad y estilo en cada uso. La seguridad biométrica y las funciones de privacidad te brindan tranquilidad mientras exploras un mundo de posibilidades.',
            images: [
                '/storage/images/samsung-s23-plus-1.webp',
                '/storage/images/samsung-s23-plus-2.webp',
                '/storage/images/samsung-s23-plus-3.webp',
            ],
            price: 600,
            stock: 12,
            category: categories[2]._id,
        },
        {
            name:'Xbox Series X',
            slug:'xbox-series-x',
            description:'Desata tu creatividad y productividad con la nueva MacBook Pro equipada con el revolucionario chip M2 de Apple. Diseñada para impulsar tus tareas más exigentes y potenciar tus proyectos, esta MacBook Pro redefine los límites de la tecnología portátil. El chip M2 lleva el rendimiento a un nuevo nivel, brindando velocidades excepcionales y capacidades multitarea fluidas. Ya sea que estés editando videos 4K, diseñando gráficos o ejecutando aplicaciones intensivas, la MacBook Pro M2 te ofrece la potencia necesaria para hacerlo todo sin esfuerzo.La pantalla Retina XDR de alta resolución ofrece colores vibrantes y detalles asombrosos, creando una experiencia visual inmersiva. La duración de la batería mejorada te permite trabajar durante horas sin preocuparte por quedarte sin energía en el momento crucial.El diseño elegante y delgado de la MacBook Pro se complementa con un teclado cómodo y un sistema de refrigeración avanzado, garantizando un rendimiento sostenible y silencioso incluso en las tareas más exigentes. Además, con Thunderbolt 4 y USB-C, la conectividad versátil está a tu alcance.',
            images: [
                '/storage/images/xbox-series-x-1.webp',
                '/storage/images/xbox-series-x-2.webp',
            ],
            price: 680,
            stock: 50,
            category: categories[3]._id,
        },
    ]
    
    return products;

}