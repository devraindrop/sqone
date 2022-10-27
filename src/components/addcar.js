import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addcar = () => {
    const [name,setName] = useState('');
    const [comp,setComp] = useState('');
    const [mdl,setMdl] = useState('');

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
    
        const data = {"car_name":name,"company":comp,"model":mdl}
        //const u='http://localhost/sq/post_ex/all_rec2.php';
        const u='http://localhost:5000/cars';
        fetch(u,{
            method:'POST',
            headers:
                {'Content-Type':'application/json'},
            body: JSON.stringify(data)  
        })
        .then(res => res.json())
        .then (data => {
            console.log(data)
            navigate("/");
        })
    }
    return ( 
        <div className="Addcar">
            <h1>add your new car</h1>
            <form onSubmit={submitHandler}>
                <label>name</label>
                <input type="text"  required onChange={(e)=>{
                    setName(e.target.value);
                }} />
                <label>model</label>
                <input type="text" required onChange={(e)=>{
                    setComp(e.target.value);
                }} />
                <label>company</label>
                <input type="text" required onChange={(e)=>{
                    setMdl(e.target.value);
                }} />
                <button>submit</button>
            </form>
        </div>
     );
}
 
export default Addcar;