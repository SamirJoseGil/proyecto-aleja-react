import React, { useState } from 'react';

export default function JuegosInteractivos() {
    // Estado para almacenar la URL del juego cargado
    const [currentGameUrl, setCurrentGameUrl] = useState('');

    // Función para cargar el juego en el iframe
    const loadGame = (gameUrl:string) => {
        setCurrentGameUrl(gameUrl);
        console.log(`Cargando juego desde: ${gameUrl}`);
    };

    const juegos = [
        {
            title: 'Juego Interactivo 1',
            description: 'Descripción del juego interactivo 1.',
            image: 'path/to/image1.jpg',
            gameUrl: '/Games/parejas-memoria/index.html'
        },
        {
            title: 'Juego Interactivo 2',
            description: 'Descripción del juego interactivo 2.',
            image: 'path/to/image2.jpg',
            gameUrl: 'game2.html'
        },
    ];

    return (
        <main id="content" className="container-fluid mt-3 custom-main-container">
            <div className="row justify-content-center">
                {juegos.map((juego, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card shadow-sm">
                            <img src={juego.image} className="card-img-top" alt={juego.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{juego.title}</h5>
                                <p className="card-text">{juego.description}</p>
                                <button className="btn btn-primary" onClick={() => loadGame(juego.gameUrl)}>
                                    Jugar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {currentGameUrl && (
                <div className="mt-4">
                    <iframe
                        src={currentGameUrl}
                        title="Juego Interactivo"
                        width="100%"
                        height="500px"
                        style={{ border: 'none' }}
                    ></iframe>
                </div>
            )}
        </main>
    );
}
