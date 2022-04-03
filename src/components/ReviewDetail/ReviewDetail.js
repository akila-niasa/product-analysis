import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewDetail = ({review}) => {
    return (
        <div className='col-lg-4 mt-5'>
        <Card style={{ width: '18rem' }}>

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

export default ReviewDetail;