interface InfoTextProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

export default function InfoText({id, children, className = ''}: InfoTextProps) {
    return (
        <div className={`info-text ${className}`} id={id}>
            {children}
        </div>
    );
}

