import React from 'react'
import { Card } from 'react-bootstrap'
import moment from 'moment'
import style from './style.module.css'

const Form = ({form}) => {
    return (
        <div className={style.wrapper}>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title class={style.name}>{form.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{form.number}</Card.Subtitle>
                    <Card.Text>{form.email}</Card.Text>
                    <Card.Text>{moment(form.dateOfBirth).format('DD/MM/YYYY')}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Form
