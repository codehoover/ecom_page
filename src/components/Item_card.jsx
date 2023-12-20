export default function Item_card({title, sizes, price}){
    return(
        <div id="item-card">

            <h3>{ title }</h3>
            <p>{ sizes }</p>
            <p>{ price }</p>
        </div>

    );

}