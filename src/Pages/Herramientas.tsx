export default Herramientas;

function Herramientas() {
    return (
        <div className="text-justify custom-container">
            <header className="custom-header text-center">
                <h2 className="custom-title-small">Herramientas</h2>
            </header>
            <main>
                <div className="container">
                    <div className="card-body">
                        <ol className="list-group list-group-flush">
                            <li className="list-group-item custom-list-item">
                                <h3>Herramientas ESD:</h3>
                                <p className="custom-paragraph">
                                    Estas herramientas impiden que haya acumulación de electricidad estática en el componente o en el técnico. 
                                    Las herramientas ESD que se utilizan en el mantenimiento del PC son: pulsera antiestática y alfombrilla antiestática.
                                </p>
                                <div className="d-flex justify-content-center flex-wrap">
                                    <img 
                                        src="/img/ManillaAntiestatica.webp" 
                                        className="custom-img img-fluid rounded mx-auto" 
                                        alt="Manilla Antiestática" 
                                    />
                                    <img 
                                        src="/img/TapeteAntiestatico.png" 
                                        className="custom-img img-fluid rounded mx-auto" 
                                        alt="Tapete Antiestático" 
                                    />
                                </div>
                            </li>
                            <li className="list-group-item custom-list-item">
                                <h3>Herramientas manuales:</h3>
                                <p className="custom-paragraph">
                                    La mayoría de las herramientas utilizadas en el proceso de ensamblaje de las computadoras son pequeñas herramientas manuales que se adquieren fácilmente en el mercado. 
                                    Entre las más destacadas están: <strong>Destornilladores: Phillips, Torx, Plano, Hexagonal; Pinzas de aguja, cortahílos, tenazas, recogedor de piezas y linterna.</strong>
                                </p>
                                <div className="d-flex justify-content-center flex-wrap">
                                    <img 
                                        src="/img/Destornilladores.png" 
                                        className="custom-img img-fluid rounded mx-auto" 
                                        alt="Destornilladores" 
                                    />
                                    <img 
                                        src="/img/CortaHilos.png" 
                                        className="custom-img img-fluid rounded mx-auto" 
                                        alt="Corta Hilos" 
                                    />
                                </div>
                            </li>
                            <li className="list-group-item custom-list-item">
                                <h3>Herramientas de limpieza:</h3>
                                <p className="custom-paragraph">
                                    Estas herramientas impiden daños a la hora de realizar limpieza a los componentes. Las herramientas adecuadas para la limpieza del PC son: 
                                    <strong>Brocha, paño suave, aire comprimido, ataduras de cable y organizador de piezas.</strong>
                                </p>
                                <div className="d-flex justify-content-center flex-wrap">
                                    <img 
                                        src="/img/TrapoAntiestatico.png" 
                                        className="custom-img img-fluid rounded mx-auto" 
                                        alt="Trapo Antiestático" 
                                    />
                                    <img 
                                        src="/img/AbrazaderaPlastica.png" 
                                        className="custom-img img-fluid rounded mx-auto" 
                                        alt="Abrazadera Plástica" 
                                    />
                                    <img 
                                        src="/img/AlcoholIsopropilico.png" 
                                        className="custom-img img-fluid rounded mx-auto" 
                                        alt="Alcohol Isopropílico" 
                                    />
                                </div>
                            </li>
                            <li className="list-group-item custom-list-item">
                                <h3>Herramientas de diagnóstico:</h3>
                                <p className="custom-paragraph">
                                    Estas son herramientas que permiten determinar en qué estado se encuentra alguno de los componentes del PC: 
                                    <strong>Multímetro digital y adaptador de loop.</strong>
                                </p>
                                <div className="d-flex justify-content-center flex-wrap">
                                    <img 
                                        src="/img/Multimetro.png" 
                                        className="custom-img img-fluid rounded mx-auto" 
                                        alt="Multímetro" 
                                    />
                                    <img 
                                        src="/img/CoaxialCable.png" 
                                        className="custom-img img-fluid rounded mx-auto" 
                                        alt="Cable Coaxial" 
                                    />
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </main>
        </div>
    );
}
