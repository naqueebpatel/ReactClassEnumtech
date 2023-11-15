import LabelPrice from "./LabelPrice";
import Quantity from "./Quantity";

function CartItem({id,price,quantity,label,updateQuantity}){
    return(
       <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",margin:"25px",border:"2px solid black"}}>
       <LabelPrice label={label} price={price}/>
       <Quantity quantity={quantity} id={id} updateQuantity={updateQuantity}/>
       </div>
    )
}

export default CartItem;