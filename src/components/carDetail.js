import { useParams } from "react-router-dom";
import useFetch from './useFetch';


const CarDetail = () => {
    const {id} = useParams('id')
    //const url = 'http://localhost/sq/post_ex/all_rec2.php/?id='+id;
    const url = 'http://localhost:5000/cars/'+id;
    console.log(url)

    const afterFetch = (car) => {
        console.log(car)
        if ( !car._id ) setErrMsg('record not found');
    }

    const {data:car,loading,errMsg,setErrMsg} = useFetch(url,afterFetch);   

    if (errMsg==='' ){
        if (!loading){
            return ( 
                <div className="cardetail">
                    <h1>
                        your Car is 
                    </h1>
                    <h3>   
                     {car.car_name} {car.model} {car.company}
                    </h3>
                    <p>{car._id}</p>
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
 
export default CarDetail;