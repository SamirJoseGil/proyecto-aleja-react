function ErrorGenerator() {
    const handleClick = () => {
        throw new Error('Error generado por el componente ErrorGenerator');
    };

    return (
        <div>
            <h1>Generador De Errores</h1>
            <p>Este botón literalmente genera errores</p>
            <button onClick={handleClick}>Generar Error</button>
        </div>
    );
}

export default ErrorGenerator;