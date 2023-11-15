import { useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";

export default function Cart(){
    
    
     const cartItem=[{id:1,label:"Biryani",price:450,quantity:1},
                    {id:2,label:"Noodles",price:350,quantity:1},
                    {id:3,label:"Soup",price:300,quantity:1},
                    {id:4,label:"Pasta",price:400,quantity:1},
                    ]

    const [cart,setCart]=useState(cartItem);

    const updateQuantity=(id,val)=>{ 

        let newCartValue=cart.map((item)=>
            item.id===id ? {...item,quantity:item.quantity+val}:item
        )

        console.log(newCartValue)

        setCart(newCartValue)
    }

    const totalCalculate=()=>{

        var sum=0;
        for(let i=0;i<cart.length;i++){
            sum+=cart[i].price*cart[i].quantity;
        }
        console.log(sum)
        return sum;
    }

    const total=totalCalculate();


    return(
        <div className="App">
        {
            cart.map((elem)=>(
                <CartItem key={elem.id} {...elem} updateQuantity={updateQuantity}/>
            ))
        }
        <Total total={total}/>
        </div>
    )
}