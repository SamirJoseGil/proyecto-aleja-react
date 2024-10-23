


function Bienvenida() {
    return (
        <div className='custom-body'>
            <div className="welcome-container">
                <h1>Manual Digital de Ensamble y Desensamble</h1>
                <h2>TechEduca</h2>
                <p>Hecho por Maryoni Garcia Vargas y Salome Serna Sepulveda</p>
                <p>Hecho con HTML, CSS y JavaScript</p>
                <button className="btn-primary"><a href="/Manual">Comenzar</a></button>
            </div>
            <div className="animation-container">
                <iframe src="/Animaciones/Planets/Animacion.html"></iframe>
            </div>
        </div>
    )
}

export default Bienvenida;