import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {Container, Col, Button , Card} from 'react-bootstrap'

export default class Cards extends React.Component{
  state={
    loading: true,
    tender:[]
  }
async componentDidMount(){
 const url =`/tenders`
 const response =await fetch(`/tenders`)
 const data = await response.json()
 
 
 const {
  Tenders=[],
  tenderList = Tenders.slice(0,3).map(item=>item.Tenders).flat()
 } = data

this.setState({Tenders:tenderList, loading:false})

}

render(){
if (this.state.loading) {
  return <div>Loading....</div>
}

  if (!this.state.tender.length){
    return <div>No tender available</div>
  }

  return(
<Container>  
<Col>   
        <Card className="mb-3" style={{color: "#000"}}> 
          <Card.Body>
            <Card.Title>Tender Description</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="info" size="lg"> Bid </Button>{""}
          </Card.Body>
        </Card>

        <Card className="mb-3" style={{color: "#000"}}> 
          <Card.Body>
            <Card.Title>Tender Description</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="info" size="lg"> Bid </Button>{""}
          </Card.Body>
        </Card>

        <Card className="mb-3" style={{color: "#000"}}> 
          <Card.Body>
            <Card.Title>Tender Description</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="info" size="lg"> Bid </Button>{""}
          </Card.Body>
        </Card>

        </Col>
        </Container>
  )
  }     
};