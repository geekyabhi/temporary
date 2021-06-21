import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import style from './style.module.css'

const FormContainer = ({children}) => {
    return (
        <Container className={style.wrapper}>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer