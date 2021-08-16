
export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(usrlist => {
        return {
            params: { id: usrlist.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    console.log(data);

    return {
        props: { usrlist: data }
    }
}

const Details = ({ usrlist }) => {
    return (  
        <div>
            <h1>Detail Page</h1>
            <p>{usrlist.name}</p>
            <p>{usrlist.email}</p>
            <p>{usrlist.address['city']}</p>
            <p>{usrlist.phone}</p>
            <p>{usrlist.website}</p>

        </div>
    );
}
 
export default Details;