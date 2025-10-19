export default function Conteiner({children, className = ''}){
    return(
        <div className={`w-full max-w-6xl mx-auto px-4 ${className}`}>
            {children}
        </div>
    );
}