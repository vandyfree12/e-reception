
import getUserBalance from "./actions/getUserBalance";
import { addCommas } from '@/lib/utils';


const Balance = async () => {
    const { balance } = await getUserBalance();
  
    return (
      <>
        <h1>Your Balance</h1>
      
        <h2>GH₵ {addCommas(Number(balance?.toFixed(2) ?? 0))}</h2>
      </>
    );
  };
  
  export default Balance;
  