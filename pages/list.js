import styles from "../styles/List.module.css"
import Link from "next/link"

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { list: data }
    }
    

}



const List = ({ list }) => {
    return (  
        <div>
            <h1>List Of Users</h1>
            {list.map(lst => (
                <Link href={"/"+lst.id} key={lst.id}>
                    <a className={styles.single}>
                        <h3>{lst.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default List;
