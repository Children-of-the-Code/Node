import React, {useEffect, useState} from 'react';
import {Item} from './Item'

export function CheckoutPage(props:any) {

    //useState is one of our hooks, in combination with useEffect, useContext
    //it follows the format of a const array that contains the actual variable used to
    //hold a state, as well as the name of a function which we will use to modify it
    //the [] in useState currently reflect the default initial value of checkoutItems
    const[checkoutItems, setCheckoutItems] = useState<any>([]);
    const[initialRender, setInitialRender] = useState<any>(true);
    // realistically, this is data that we'd get back from our API.
    // that API doesn't exist, so I'm hardcoding some values in for now

    // same thing as setState from before
    

    useEffect ( () => {

        if(initialRender){
        setCheckoutItems(

            [{
                itemName:"banana",
                quantity:2
            },
            {
                itemName:"bread",
                quantity:1
            },
            {
                itemName:"chimkin",
                quantity:4
            }]
    
        )
        setInitialRender(false);
        }

    });

    function incrementQuantity(item:any){
        // ideally, we should have a decrement and increment item quantity endpoints if we have a cart entity in our DB
        let currentCheckoutList = checkoutItems;
        for(let i = 0; i < checkoutItems.length; i++){
            if(checkoutItems[i].itemName == item.itemName){
                checkoutItems[i].quantity = checkoutItems[i].quantity + 1;
            }
        }
        setCheckoutItems(currentCheckoutList);
    }
    function decrementQuantity(item:any){
        console.log("decrementing the quantity")
        let currentCheckoutList = checkoutItems;
        for(let i = 0; i < checkoutItems.length; i++){
            if(checkoutItems[i].itemName == item.itemName){
                checkoutItems[i].quantity = checkoutItems[i].quantity - 1;
            }
        }
        console.log(currentCheckoutList);
        setCheckoutItems(currentCheckoutList);
        console.log(checkoutItems)
    }
    

    return (
        <>
            <h1>Welcome to the checkout page</h1>
            {
            //I will display a component for each checkout item here.
                checkoutItems.map((item: { itemName: string; quantity : number })=><Item key={item.itemName+""+item.quantity} item = {item} decrement = {decrementQuantity} increment = {incrementQuantity}/>)
            }
        </>
    )

}