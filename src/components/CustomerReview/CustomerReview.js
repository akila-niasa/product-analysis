import React from 'react';
import { Card } from 'react-bootstrap';


const CustomerReview = ({review}) => {
    return (
        <div className='col-lg-4 mt-2'>
            <Card style={{ width: '18rem' }}>
            <Card.Img className='roundedCircle mx-0  h-25 w-25'  src={review.image}/>
  <Card.Body>
    <Card.Title>name:{review.name}</Card.Title>
    <Card.Text>
      {review.review}
    </Card.Text>
    <Card.Footer className="text-muted">Rating:{review.raiting}</Card.Footer>
  </Card.Body>
</Card>
        </div>
    );
};

export default CustomerReview;