import {usestate} from "react"
import Senderchild from "../senderchild/senderchild"
import Receiverchild from "../receiverchild/receiveechild"
const Parent=(props)=>{
    const[counter,setcounter]=usestate(1);
    const getvalueFromSenderchild=()=>{setcounter(counter+1);
};
return(
    <>
    <Senderchild getvalueFromSenderchild={getvalueFromSenderchild}></Senderchild>;
    <Receiverchild count={counter}></Receiverchild>
    </>
);
}
export default Parent;




