import Button from "./Button";

function Quantity({id,quantity,updateQuantity}){
    return(
        <>
        <Button text="+"  update={()=>updateQuantity(id,1)}/>
        <p>{quantity}</p>
        <Button text="-" update={()=>updateQuantity(id,-1)}/>
        </>
        
    )
}

export default Quantity;