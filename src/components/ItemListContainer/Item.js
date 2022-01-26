
import { Card, Image} from 'semantic-ui-react'
import './Item.css'
import './semantic.min.css'
import './ItemCount'
import ItemCount from './ItemCount';

function Item ({Element}) {
  
  return (
    <div className='Cards'>
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
          <button className='button-3'>Comprar</button> 
        </Card.Content>
        <ItemCount />
      </Card>
    </div>
  );
}

export default Item;