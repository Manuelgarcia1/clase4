import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function Item ({Element}) {
  return (
    <Card>
    <Image src='https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-y-verduras-1080x671.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{Element.Name}</Card.Header>
      <Card.Description>
        {Element.Descrip}
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <h4><n>$</n>{Element.Price}</h4>
    </Card.Content>
  </Card>
  
  );
}
export default Item;