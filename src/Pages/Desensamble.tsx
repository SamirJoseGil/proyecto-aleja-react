export default Desensamble;

function Desensamble() {
    return (
        <div className="text-justify custom-container">
            <header className="custom-header text-center">
                <h2 className="custom-title-small">Desensamble</h2>
            </header>
            <main>
                <div className="row card-body">
                    <div className="col-12">
                        <p>
                            Para proceder a desmontar el PC, además de seguir al pie de la letra las pautas de seguridad, debe realizarse con sumo cuidado. Para desmontar una PC adecuadamente y evitar daños, debe seguir los siguientes pasos:
                        </p>
                        <ol className="list-group list-group-flush">
                            <li className="custom-list-item">
                                Apague y desconecte el PC de la energía.
                            </li>
                            <img src="/img/ApagarPc.png" alt="Apagar PC" className="custom-img img-fluid rounded mx-auto" />
                            <li className="custom-list-item">
                                Ubique los tornillos que fijan el panel lateral del gabinete y proceda a extraerlos utilizando el destornillador adecuado. Extraiga los paneles laterales del gabinete y ubíquelos en un lugar seguro.
                            </li>
                            <img src="/img/TornillosTapaChasis.png" alt="Tornillos Tapa Chasis" className="custom-img img-fluid rounded mx-auto" />
                            <li className="custom-list-item">
                                Ahora póngase la pulsera antiestática. Recuerde que un extremo del conductor debe conectarse a la correa de la muñeca y el otro extremo a una parte metálica no pintada del gabinete.
                            </li>
                            <img src="/img/ManillaAntiestatica.webp" alt="Manilla Antiestática" className="custom-img img-fluid rounded mx-auto" />
                            <li className="custom-list-item">
                                Si posee una alfombrilla antiestática, ubíquela en el área de trabajo y ponga sobre esta el gabinete. La alfombrilla debe conectarse también a una parte metálica del PC.
                            </li>
                            <img src="/img/TapeteAntiestatico.png" alt="Tapete Antiestático" className="custom-img img-fluid rounded mx-auto" />
                            <li className="custom-list-item">
                                Una vez asegurada el área de trabajo, proceda a desconectar todos los cables de alimentación de los dispositivos, como son el del <b>Disco Duro</b>, <b>Unidades Ópticas</b> y <b>Disquete</b>, y el cable de alimentación de la tarjeta madre. Es importante recordar que las <b>Unidades Ópticas</b> al igual que el <b>Disco Duro</b> utilizan un cable de alimentación tipo <b>Molex</b>, y la <b>Unidad de Disquete</b> y la <b>Tarjeta Madre</b> emplean un conector <b>Berg</b> de 4 pines y un conector de 20 pines respectivamente.
                            </li>
                            <div className="container d-flex text-center">
                                <img src="/img/CablesFuenteAlimentacion.png" alt="Cables Fuente Alimentación" className="custom-img img-fluid rounded mx-auto" />
                                <img src="/img/TipoCableFuenteAlimentacion.png" alt="Tipo Cable Fuente Alimentación" className="custom-img img-fluid rounded mx-auto" />
                            </div>
                            <li className="custom-list-item">
                                Posteriormente, deben retirarse los cables de datos de las unidades. La mayoría de las unidades utilizan cable de datos tipo <b>IDE</b> o <b>ATA</b>. El cable <b>SATA</b> es utilizado en ordenadores modernos.
                            </li>
                            <img src="/img/CablesSata.png" alt="Cables SATA" className="custom-img img-fluid rounded mx-auto" />
                            <li className="custom-list-item">
                                El siguiente paso es ubicar los tornillos que sujetan las unidades y utilizar la herramienta adecuada para extraerlos con el mayor cuidado posible y así evitar daños en las unidades.
                            </li>
                            <img src="/img/ExtraerDiscoDuro.png" alt="Extraer Disco Duro" className="custom-img img-fluid rounded mx-auto" />
                            <li className="custom-list-item">
                                Una vez extraídos los tornillos, debe ponerlos en el organizador de piezas para evitar su pérdida.
                            </li>
                            <img src="/img/OrganizadorDePiezas.png" alt="Organizador De Piezas" className="custom-img img-fluid rounded mx-auto" />
                            <li className="custom-list-item"><b>
                                Ahora debe retirar las unidades del gabinete:</b> disco duro, unidades ópticas y de disquete. Además, debe retirar la fuente de energía en su respectivo orden.
                            </li>
                            <img src="/img/DiscosDuros.png" alt="Discos Duros" className="custom-img img-fluid rounded mx-auto" />
                            <li className="custom-list-item">
                                Es importante que, después de retirar las unidades del gabinete, identifique las tarjetas adaptadoras que se encuentren instaladas en la Tarjeta Madre, como pueden ser: Tarjetas de Red, Tarjetas de Telecomunicaciones, Tarjetas de Video, Memorias RAM, entre otras.
                            </li>
                            <div className="container d-flex text-center">
                                <img src="/img/TarjetaRam.png" alt="Tarjeta RAM" className="custom-img img-fluid rounded mx-auto" />
                                <img src="/img/TarjetaRed.png" alt="Tarjeta Red" className="custom-img img-fluid rounded mx-auto" />
                            </div>
                            <li className="custom-list-item">
                                Proceda a extraer las tarjetas adaptadoras con cuidado y utilizando las herramientas necesarias y adecuadas. Es importante recordar que para retirar la Memoria RAM, debe hacer presión sobre esta hasta que se pueda expulsar con facilidad.
                            </li>
                            <img src="/img/ExtraerTarjetaVideo.png" alt="Extraer Tarjeta de Video" className="custom-img img-fluid rounded mx-auto" />
                            <li className="custom-list-item">
                                Una vez extraídas las tarjetas adaptadoras, ubiqueel disipador de calor y, posteriormente, extraiga los tornillos que lo sujetan a la <b>Tarjeta Madre</b>.
                            </li>
                            <img src="/img/ExtraerDicipador.png" alt="Extraer Disipador" className="custom-img img-fluid rounded mx-auto" />
                            <li className="custom-list-item">
                                Después de retirar el disipador de calor, desasegure las palancas que sujetan el procesador y extráigalo con precaución. Una vez extraído el procesador, verifique su estado físico y proceda a limpiarlo delicadamente con alcohol isopropílico, que facilita el rápido secado del mismo. Colóquelo en la alfombrilla antiestática.
                            </li>
                            <img src="/img/ExtraerProcesador.png" alt="Extraer Procesador" className="custom-img img-fluid rounded mx-auto" />
                            <li className="custom-list-item">
                                Ubique ahora los tornillos que sujetan la <b>Tarjeta Madre</b> al gabinete y extráigalos utilizando el destornillador adecuado.
                            </li>
                            <img src="/img/TornillosBoard.png" alt="Tornillos Board" className="custom-img img-fluid rounded mx-auto" />
                            <li className="custom-list-item">
                                Extraiga con cuidado la <b>Tarjeta Madre</b> del gabinete y colóquela en la alfombrilla antiestática.
                            </li>
                            <img src="/img/ExtraerBoard.png" alt="Extraer Board" className="custom-img img-fluid rounded mx-auto" />
                            <div className="text-center card-body blue-border">
                                <h4 className="margin-bottom">Aqui un ejemplo de como deberia hacerse un Desensamble</h4>
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/sRa5CBr15Qg"
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
                        </ol>
                    </div>
                </div>
            </main>
        </div>
    )
}