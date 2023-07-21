import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <div className="calendar-container">
            <Calendar onChange={onChange} value={date} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyCalendar;
