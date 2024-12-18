import "./ErrorMessage.css";

type ErrorMessageProps = {
    status: number;
    statusText: string;
    message: string;
};

const ErrorMessage = ({ status, statusText, message }: ErrorMessageProps) => {
    return (
        <div className="error-message-container">
            <div className="error-message">
                <h2>Error {status}: {statusText}</h2>
                <p>{message}</p>
                <a href="/" className="btn-primary">Volver al inicio</a>
            </div>
        </div>
    );
};

export default ErrorMessage;
