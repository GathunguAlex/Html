import {Button , Form} from 'react-bootstrap'
import{ useRef, useState , useEffect}from 'react'

const Login=()=>{
    const userRef =useRef();
    
    const [user, setUser]= useState('');
    const[password, setPassword]= useState('');
    const [login,setLogin]= useState('');
    const [errors,setErrors]= useState(false);

    // useEffect(()=> {
    //     userRef.current.focus();
    // },[])

    // useEffect(()=> {
    //     setErrMsg('');
    // },[user ,password])

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const user={
            user,
            password
        }
        fetch(`/login`,{
            method: "GET",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res=>{
            if(res.ok){
                res.json().then(setUser)
            }
        })
        setUser('');
        setPassword('');

    }

return (
<section>
<Form.Group controlId ="formEmail">
  <Form.Control type="email" placeholder= "example 123456"autoComplete="off"/>
</Form.Group>
<Form.Group controlId ="formPassword">
  <Form.Control type="Password" placeholder= "Password"/>
<Button variant="info" size="lg">
          Login{" "}
        </Button>
        {""}
        </Form.Group>


</section>
)
};

export default Login