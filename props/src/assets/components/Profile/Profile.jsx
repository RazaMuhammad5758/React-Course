import React from 'react'
import  Card  from 'react-bootstrap/Card'
import  Button  from 'react-bootstrap/Button'
import './Profile.css'


const Profile = ({src,title,desc,btn}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img  className='img' variant="top" src={src} />
      <Card.Body>
        <Card.Title> <h2>{title}</h2> 
        </Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">{btn}</Button>
      </Card.Body>
    </Card>

    
    </div>
  )
}

export default Profile
