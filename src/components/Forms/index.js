import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import style from './style.module.css'
import Form from '../Form/index'
const Forms = () => {
    const [forms, setforms] = useState(null)
    console.log(forms)
    useEffect(() => {
        const fetchForms=async()=>{
            try{
                const {data}=await axios.get('http://localhost:5000/api/users')
                if(data.success){
                    setforms(data.data)
                }
            }catch(e){
                console.log(e)
            }
        }
        fetchForms()
    }, [])

    return (
        <div className={style.wrapper}>
            <Container>
                <Row className="justify-content-center">
                    {
                        forms&&forms.map(form => {return <Col sm={12} md={6} lg={4} xl={4}><Form key={form._id} form={form}></Form></Col>})
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Forms
