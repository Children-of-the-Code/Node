export function Item(props:any){

    return(
        <>
        <p>{props.item.itemName}</p>
        <button onClick = {event => props.increment(props.item)}>add item</button>
        <button onClick = {event => props.decrement(props.item)}>remove item</button>
        <p>quantity: {props.item.quantity}</p>
        </>
    )
    
}