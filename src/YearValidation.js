import React, {useState} from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function YearValidation() {
    const [year, setYear] = useState('');
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleYearChange = (e) => {
        setYear(e.target.value);
    }

    const handleValidation = () => {
        const parsedYear = parseInt(year);
        if(parsedYear >= 2000 && parsedYear <= 2023) {
            setAlertType('success');
            setMessage('Success! Year entered is within the valid range.');
        }else {
            setAlertType('danger');
            setMessage('Error! Year is outside the valid range, please enter a year between 2000-2023 only.');
        }
    }

    return (
        <Container className='mt-5'>
            <h1> Year Validation</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Please enter a valid year between 2000-2023</Form.Label>  
                </Form.Group>
                <Form.Control
                    type="number"
                    placeholder="Enter year"
                    value={year}
                    onChange={handleYearChange}
                    />
                <input
                    type='range'
                    min={1900}
                    max={2023}
                    value={year}
                    onChange={handleYearChange}
                    className='form-range'
                    style={{
                        width: '80%',
                        height: '5px',
                    }}
                />
                <Button className='mt-3' variant='primary' onClick={handleValidation}>Validate</Button>
                { alertType && message && <Alert variant={alertType} className='mt-3'>{message}</Alert>}
            </Form>
        </Container>
    )
}

export default YearValidation;