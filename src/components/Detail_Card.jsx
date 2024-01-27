export default function Detail_Card({title,image}){
    return(
        <a id="detail-card-container" href="#">
            
            <h3 id="detail-title">{title}</h3>
            <button id="detail-button">SHOP</button>
            <img id="detail-image" src={image} />

        </a>
    )
}