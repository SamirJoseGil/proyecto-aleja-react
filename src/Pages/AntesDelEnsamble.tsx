export default AntesDelEnsamble;

function AntesDelEnsamble() {
    return (
        <div className="text-justify custom-container">
            <header className="custom-header text-center">
                <h2 className="custom-title-small">Antes del ensamble</h2>
            </header>
            <main>
                <div>
                    <div className="card-body">
                        <div className="custom-paragraph text-justify">
                            <p>
                                Una vez extraídos todos los componentes internos del gabinete, si se tiene acceso a una sopladora, podemos hacer uso de esta, para limpiar algunos de los componentes y así retirar acumulación de mugres.
                            </p>
                            <div className="d-flex justify-content-center">
                                <img src="/img/Soplador.png" className="custom-img img-fluid rounded mx-auto" alt="Soplador" />
                            </div>
                        </div>
                        <div className="custom-paragraph text-justify">
                            <p>
                                Para la limpieza de los componentes electrónicos del PC como son tarjetas adaptadoras, memorias RAM y la motherboard, se utiliza un líquido especial que se aplica a unos 30 cm y que seca rápidamente para evitar daños a la hora del ensamble del PC.
                            </p>
                        </div>
                        <div className="custom-paragraph text-justify">
                            <p>
                                Previamente se indicó que se hiciera limpieza al procesador con alcohol isopropílico para retirar partículas de mugre. Una vez realizada esta limpieza al procesador se procede a aplicar pasta térmica sobre la parte superior del mismo, para facilitar su contacto con el disipador de calor. La pasta térmica puede aplicarse con una bolsa para facilitar su esparción.
                            </p>
                            <div className="d-flex justify-content-center">
                                <img src="/img/PastaTermica.png" className="custom-img img-fluid rounded mx-auto" alt="Pasta Térmica" />
                            </div>
                        </div>
                        <div className="text-center card-body blue-border">
                            <h4 className="margin-bottom">Como limpiar correctamente?</h4>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/k7E1UMAqnKA?si=MdYB6M3zwHb2yxQU"
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
    )
}