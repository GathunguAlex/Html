import React, { useEffect, useState } from "react"
function Cards() {
    const [editing, setEditing] = useState(false)
    const [formData, setFormData] = useState({ id: null, username: "", usernumber: "" })
    const [tender, setTender] = useState([])


    useEffect(() => {
        fetch(`http://localhost:3000/tenders`).then(r => {
            if (r.ok) {
                r.json().then(data => setTender(data))
            }
        })
    }, [])
    const myStyles = {
        color: "black",
        backgroundColor: "red",
        fontSize: "3rem",
        display: "block"
    }
    const tenderComponents = tender.map(tend => {
        return (
            <div key={tend.id}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div style={myStyles} >
                    <p >{tend.tendername}</p>
                    <p >{tend.tendernumber}</p>
                </div>
                <div>
                    <button onClick={() => handleDelete(tend)}>Delete</button>
                    <button onClick={()=> startEdit(tend)}>Edit</button>
                </div>
            </div>
        )
    })

    function startEdit(tender){
        setFormData({id: tender.id, tendername: tender.tendername, tendernumber: tender.tendernumber})
    }

    function handleEdit(editedTender) {
        fetch(`/renders/${editedTender.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(editedTender)
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(editedTender => {
                        setTender(tender.map(tend => {
                            if (tend.id === editedTender.id) {
                                return editedTender
                            } else {
                                return tend
                            }
                        }))

                        setFormData({ id: null, username: "", usernumber: "" })
                    })
                }
            })
    }

    function handlePost(newTender){
        fetch('/renders', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newTender)
        })
        .then(r => {
            if(r.ok){
                r.json().then(data => {
                    setTender(tender => [...tender, data])
                    setFormData({ id: null, username: "", usernumber: "" })
                })
            }
        })
    }

    function handleDelete(deletedTender) {
        console.log(deletedTender)
        fetch(`http://localhost:3000/tenders/${deletedTender.id}`, { method: 'DELETE' })
            .then(r => {
                if (r.ok) {
                    setTender(tender.filter(tend => deletedTender.id !== tend.id))
                }
            })
    }

    function handleChange(e){
        setFormData(formData => ({...formData, [e.target.name]: e.target.value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        if(formData.id){
            handleEdit(formData)
        }else {
            handlePost(formData)
        }
    }


    return (
        <div>
            <div>
                {tenderComponents}
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tendername">Tender Name</label>
                <input name="tendername" value={formData.tendername} onChange={handleChange}/>
                <label htmlFor="tendernumber">Tender Number</label>
                <input name="tendernumber" value={formData.tendernumber} onChange={handleChange} />
                <input type="submit" value="create tender" />
            </form>
        </div>
    )
};
export default Cards