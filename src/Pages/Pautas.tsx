
export default Pautas;

function Pautas() {
    return (
<div className="text-justify custom-container">
        <header className="custom-header text-center">
            <h2 className="custom-title-small">Pautas de Seguridad</h2>
        </header>
        <div className="">
            <div className="row card-body">
                <div className="col-12">
                    <p>
                        Antes de manipular cualquier dispositivo o algún componente del computador es vital seguir las
                        siguientes
                        pautas de seguridad para prevenir o evitar daños físicos, materiales o simplemente la pérdida de
                        datos, que pueden ocasionar reclamaciones indemnizatorias contra el dueño de los bienes.
                    </p>
                    <p>
                        Algunas de las pautas de seguridad más importantes a la hora de trabajar con un ordenador son:
                    </p>
                    <ol className="list-group list-group-flush">
                        <li className="list-group-item custom-list-item">
                            Quítese cualquier accesorio metálico o joyas, y ajústese la ropa.
                        </li>
                        <li className="list-group-item custom-list-item">
                            Debe utilizar pulsera antiestática o descargarse, antes de manipular cualquier
                            componente interno del PC.
                        </li>
                        <li className="list-group-item custom-list-item">
                            Antes de realizar el trabajo desconecte de alimentación eléctrica el ordenador y
                            posteriormente desenchúfelo.
                        </li>
                        <li className="list-group-item custom-list-item">
                            Cubra con cinta cualquier borde afilado en el interior del gabinete, que pueda ocasionar
                            daños físicos.
                        </li>
                        <li className="list-group-item custom-list-item">
                            Nunca debe abrir la fuente de energía ni el monitor, pues a pesar de estar sin conexión
                            continúan con
                            carga eléctrica y poseen compuestos tóxicos para la salud.
                        </li>
                        <li className="list-group-item custom-list-item">
                            No toque las áreas de las impresoras que estén calientes o que tengan alto voltaje.
                        </li>
                        <li className="list-group-item custom-list-item">
                            El área de trabajo debe estar despejada de cualquier alimento o bebida.
                        </li>
                        <li className="list-group-item custom-list-item">
                            Al manipular fuentes de energía o monitores utilice pulsera antiestática.
                        </li>
                    </ol>
                    <p>
                        Un lugar de trabajo seguro ayuda a prevenir lesiones personales y daños materiales. Para
                        que el lugar de trabajo sea seguro, debe estar limpio, organizado y correctamente iluminado.
                        Todos deben
                        comprender y seguir los procedimientos de seguridad. Es también importante a la hora de realizar
                        mantenimiento a la PC, contar con las herramientas adecuadas y así hacer más eficaz el trabajo.
                    </p>
                    <div className="text-center card-body blue-border">
                        <h4 className="margin-bottom">Que es lo que debes tener en cuenta antes de desarmar tu computadora</h4>
                        <iframe 
                        width="60%" 
                        height="315"
                        src="https://www.youtube.com/embed/s7TujnpHOrs?si=JD8qK2p0XZLqehSi" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}