import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function Acard({item}) {
  return (
    <div>
        <Link to="/admin/school" state={{id:item.id}} style={{ textDecoration: 'none',color:'black'}}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    </div>
  )
}
