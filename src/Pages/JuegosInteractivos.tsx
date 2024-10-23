import { useState } from 'react';

export default function JuegosInteractivos() {
    const [currentGameUrl, setCurrentGameUrl] = useState<string | null>(null);
    const [isGameLoaded, setIsGameLoaded] = useState<boolean>(false);

    const juegos = [
        {
            title: 'Juego de el Ahorcado',
            description: 'En este emocionante juego del ahorcado, los jugadores deberán adivinar palabras relacionadas con componentes y dispositivos de la tecnología. El objetivo es descubrir la palabra correcta antes de que el stickman sea completamente dibujado.',
            image: '/img/StickMan.jpeg',
            gameUrl: '/Games/Ahorcado/index.html'
        },
        {
            title: 'Juego de Parejas',
            description: 'Este juego de memoria de herramientas de ensamble y desensamble desafía a los jugadores a encontrar todas las parejas de cartas tecnológicas en el menor número de movimientos posible.',
            image: '/img/Parejas.jpeg',
            gameUrl: '/Games/Juego-Parejas-Memoria/index.html'
        },
    ];

    const loadGame = (gameUrl: string) => {
        setCurrentGameUrl(gameUrl);
        setIsGameLoaded(true);
    };

    const closeGame = () => {
        setCurrentGameUrl(null);
        setIsGameLoaded(false);
    };

    return (
        <main className="container">
            {!isGameLoaded ? (
                <div className="row">
                    {juegos.map((juego, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card shadow-sm">
                                <div className='text-center'>
                                    <img src={juego.image} className="card-img-top custom-img-card" alt={juego.title} />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{juego.title}</h5>
                                </div>
                                <div className='card-body text-justify'>
                                    <p className="card-text">{juego.description}</p>
                                </div>
                                <div className='card-body text-center'>
                                    <button className="btn btn-primary" onClick={() => loadGame(juego.gameUrl)}>
                                        Jugar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="game-container mt-4 position-relative">
                    <button className="btn btn-danger position-absolute top-0 end-0" onClick={closeGame}>
                        X
                    </button>
                    {currentGameUrl && (
                        <iframe
                            src={currentGameUrl}
                            title="Juego Interactivo"
                            className="game-iframe"
                        ></iframe>
                    )}
                </div>
            )}
        </main>
    );
}
