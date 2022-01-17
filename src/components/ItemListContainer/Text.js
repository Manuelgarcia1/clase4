import React from "react";
import PropTypes from 'prop-types'


function Text({name}){
        return(
            <div>
                <p>Menu de antonia restaurant {name}</p>
            </div>
        );
    
}

Text.propTypes = {
    name: PropTypes.string
  }

export default Text;