interface PhotoContainerProps {
    name: string;
    displayName: string;
}

export default function PhotoContainer({name, displayName}: PhotoContainerProps) {
    return (
        <div className="photo-container">
            <picture style={{height: 'auto'}}>
                <source srcSet={`/images/photography/avif/${name}.avif`} type="image/avif"/>
                <source srcSet={`/images/photography/webp/${name}.webp`} type="image/webp"/>
                <img
                    alt={displayName}
                    id="photography-img"
                    src={`/images/photography/jpeg/${name}.jpg`}
                    width="100%"
                />
            </picture>
            <h1 className="photo-name">{displayName}</h1>
        </div>
    );
}

