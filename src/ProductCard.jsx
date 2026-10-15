function ProductCard(props){
    return(<div>{props.name} - {props.prix} - {props.stock?"Disponible":"Rupture de stock"}</div>)
}

export default ProductCard;