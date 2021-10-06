interface CardProps {
    title: string | JSX.Element | JSX.Element[];
    children: JSX.Element | JSX.Element[];
    isSecondary?: boolean;
}

export default function Card({ title, children, isSecondary }: CardProps) {
    return (
        <div className='w3-container w3-border-bottom w3-padding-16'>
            {isSecondary ? <h3>{title}</h3> : <h2>{title}</h2>}
            {children}
        </div>
    );
}
