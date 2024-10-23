

export default function Ensamble() {
    return (
        <div className="text-justify custom-container">
            <header className="custom-header text-center">
                <h3 className="custom-title-small">Ensamble del PC</h3>
            </header>
            <main>
                <div className="row card-body">
                    <p>Una vez finalizado el desensamble del PC, siguiendo las normas y utilizando las herramientas adecuadas, podemos proceder a ensamblar nuevamente el PC.</p>
                    <p>Para ensamblar el PC deben seguirse los siguientes pasos:</p>
                    <hr />
                    <div className="col-12">
                        <ol className="list-group list-group-flush">
                            <li>
                                Inicialmente, se instala la fuente de energía y se sujeta al chasis utilizando los tornillos adecuados.
                                <div className="container d-flex text-center">
                                    <img src="/img/CablesFuenteAlimentacion.png" alt="Cables Fuente Alimentación" className="custom-img img-fluid rounded mx-auto" />
                                </div>
                            </li>
                            <li>
                                Una vez asegurada la fuente de energía al chasis, se procede a instalar el procesador en el <b>MOTHERBOARD</b>. Este debe instalarse aplicando fuerza cero. Luego, se coloca el disipador de calor sobre este, asegurándolo según el sistema que emplee. Verificamos que quede alineado correctamente.
                                <div className="container d-flex text-center">
                                    <img src="/img/ExtraerProcesador.png" alt="Procesador" className="custom-img img-fluid rounded mx-auto" />
                                </div>
                            </li>
                            <li>
                                Ahora se procede a instalar la tarjeta madre en el gabinete, alineándola con los orificios para tornillos y los puertos de la parte trasera del chasis. Una vez alineada, se sujetan los tornillos correspondientes.
                                <div className="container d-flex text-center">
                                    <img src="/img/ExtraerBoard.png" alt="Extraer Board" className="custom-img img-fluid rounded mx-auto" />
                                </div>
                            </li>
                            <li>
                                Luego, se procede a instalar nuevamente las tarjetas adaptadoras en sus respectivos <b>zócalos</b>, verificando que queden en la posición correcta.
                                <div className="container d-flex text-center">
                                    <img src="/img/TarjetaRam.png" alt="Tarjeta RAM" className="custom-img img-fluid rounded mx-auto" />
                                    <img src="/img/TarjetaRed.png" alt="Tarjeta Red" className="custom-img img-fluid rounded mx-auto" />
                                </div>
                            </li>
                            <li>
                                Posteriormente, localizamos todas las unidades en el chasis, ubicándolas en su respectivo compartimiento y asegurándolas con los tornillos adecuados.
                                <div className="container d-flex text-center">
                                    <img src="/img/DiscosDuros.png" alt="Discos Duros" className="custom-img img-fluid rounded mx-auto" />
                                </div>
                            </li>
                            <li>
                                Una vez terminado este proceso de instalación de unidades ópticas, de <b>disquete</b> y <b>disco duro</b>, procedemos a conectar a estas los cables de alimentación y de datos correspondientes. Es importante recordar que, antes, se deben verificar los jumpers de las unidades instaladas.
                                <div className="container d-flex text-center">
                                    <img src="/img/TipoCableFuenteAlimentacion.png" alt="Tipo Cable Fuente Alimentación" className="custom-img img-fluid rounded mx-auto" />
                                </div>
                            </li>
                            <li>
                                Habiendo culminado el ensamble de la PC, procedemos a colocar nuevamente los paneles laterales del gabinete y conectamos los cables externos. Finalmente, verificamos si el mantenimiento realizado fue exitoso o no.
                                <div className="container d-flex text-center">
                                    <img src="/img/TornillosTapaChasis.png" alt="Tornillos Tapa Chasis" className="custom-img img-fluid rounded mx-auto" />
                                </div>
                            </li>
                        </ol>
                        <div className="text-center card-body blue-border">
                            <h4 className="margin-bottom">Video de Como Hacer un Ensamble</h4>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/Y_jI89ZN6rs?si=aTPid6HyB-w2mA51"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            <hr />
                            <h5 className="margin-top margin-bottom">Tambien te invito a jugar nuestro de preguntas preguntas de el Ahorcado!</h5 >
                            <p>El cual te hara mejorar tus conocimientos sobre las partes de el computador</p>
                            <button className="btn-primary"><a href="/Manual/JuegosInteractivos">Ir a juegos Interactivos</a></button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
