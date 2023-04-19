export const getStaticPaths = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const json = await resp.json();
  
    const paths = json.map(coffee =>{
        return{
            params: {id: coffee.id.toString()}
        }
    })
    return {
      paths,
      fallback:false
    }
  }
export const getStaticProps = async (context)=>{
    const id = context.params.id;
    const res =await fetch('https://api.sampleapis.com/coffee/hot/'+id)

    const data = await res.json();
    return {
        props:{coffee:data}
    }
}

const Details = ({coffee}) => {
    
    return ( 
        <div>{coffee.title}</div>
     );
}
 
export default Details;