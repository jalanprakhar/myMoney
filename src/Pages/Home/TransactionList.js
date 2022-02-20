import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'
export default function TransactionList({transactions}) {
    let total=0;
    // console.log(transactions);
    transactions.map(t=>(
      total+= +t.amount
    ))
    console.log('total ' ,total);
    const {deleteDocument,response}=useFirestore('transactions');
    console.log(response);

    console.log(transactions)
  return (
    <>
    {total>0 && <h2>Total amount spent till now : {total}</h2>}
    <ul className={styles.transactions}>
        {transactions.map(t=>(
            <li key={t.id}>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.amount}>${t.amount}</p>
                <button onClick={()=>deleteDocument(t.id)}>x</button>
            </li>
        ))}
    </ul></>
  )
}
