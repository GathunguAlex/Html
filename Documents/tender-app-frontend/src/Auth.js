import {Button , Form} from 'react-bootstrap'
import{ useState}from 'react'

function Auth({setCurrentUser}) {
const [username, setUsername]= useState('');
const [password, setPassword] =useState('');
const [login, setLogin]= useState('');
const [errors, setErrors]= useState([]);

function onSubmit(e){
    e.preventDefault();
    const user ={
        username,
        password
    }
    fetch(`http://localhost:3000/users`,{
     method: "POST",
     headers: {'Content-Type':'application/json'},
     body:JSON.stringify(user)
    })
    .then(res=>{
                    if(res.ok){
                        res.json().then(setCurrentUser)
                    } else {
                        res.join().then(e => setErrors(Object.entries(e.error).flat()))
                    }
                })
}
return (
<section >
    {/*<p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>*/}
        <Form.Group controlId ="formEmail">
  <Form.Control type="email" placeholder= "example 123456"autoComplete="off"/>
</Form.Group>
<Form.Group controlId ="formPassword">
  <Form.Control type="Password" placeholder= "Password"/>
  <Form.Group controlId ="formPassword">
  <Form.Control type="Password" placeholder= "Confirm Password"/>
        </Form.Group>
<Button variant="info" size="lg">
          signup{" "}
        </Button>
        {""}
        </Form.Group>

  
</section>
)
};

export default Auth