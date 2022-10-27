import { Link } from 'react-router-dom'
import useFetch from './components/useFetch';


const Content = () => {
  //const url ='http://localhost/sq/post_ex/all_rec2.php';
  const url = 'http://localhost:5000/cars/'
  const {data:cars,loading,errMsg,loadCarsAll} = useFetch(url);
  
  const delThisCar = (carId) =>{
    fetch(url+carId,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      loadCarsAll();
    })
  }

  
  if (errMsg===''){
    if (!loading){
    return (
      <div className="Content">
        <div>our Cars are {cars.map( (item,i) =>{
          return (
            <div key={item._id}>
              {item._id}) 
              <Link to={'/cars/'+item._id}>{item.car_name}</Link>  
              <p>{item.model}</p>
              <p>{item.company}</p>              
              <button onClick={ () => {
                delThisCar(item._id)
              }}>Delete Car</button>
            </div>

          )
        })}</div>
      </div>
    );
   }else{
      return (
        <div className="empty">
            Loading....
        </div>
      )
    }

  }else{
    return(
      <div className="error">
      {errMsg}
      </div>
    )
  }
}

export default Content;