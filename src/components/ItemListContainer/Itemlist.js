import React, { useEffect, useState } from 'react';
import Elements from '../../JSON/Elements.json'
import Item from './Item'
import './ItemList.css'

const getElements = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => resolve(Elements), 2000 );



    })


}


function ItemList({items}){

    const [Elements, setElements] = useState([]);
    const [load, setLoad] = useState(false);
    useEffect(() => {

        setLoad(true)
        getElements()
        .then((data) => setElements(data))
        .catch((error) => console.error(error))
        .finally(() => setLoad(false));


    },[]);

    return (
    
        <div>

            {load ? (
                <div className="prx">
                <div className="lds-dual-ring"></div>
                </div>
            ) : (

                Elements.map((Element) => {
                    return <Item key={Element.id} Element={Element} />})

            )}


        </div>
    
    );  


}

export default ItemList