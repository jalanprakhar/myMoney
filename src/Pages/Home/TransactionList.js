import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'
export default function TransactionList({transactions}) {

    const {deleteDocument,response}=useFirestore('transactions');
    console.log(response);

    console.log(transactions)
  return (
    <ul className={styles.transactions}>
        {transactions.map(t=>(
            <li key={t.id}>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.amount}>${t.amount}</p>
                <button onClick={()=>deleteDocument(t.id)}>x</button>
            </li>
        ))}
    </ul>
  )
}
