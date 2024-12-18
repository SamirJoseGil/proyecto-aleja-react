

function Bienvenida() {


    return (
        <div className='custom-body'>
            <div className="welcome-container">
                <h1 className="custom-title-welcome">TechEduca</h1>
                <button className="btn-primary">
                    <a href="/Manual">Comenzar</a>
                </button>
            </div>

            {/* Aquí mostramos el error si existe */}
            

            <div className="animation-container">
                <iframe src="/Animaciones/Planets/Animacion.html"></iframe>
            </div>
        </div>
    );
}

export default Bienvenida;
