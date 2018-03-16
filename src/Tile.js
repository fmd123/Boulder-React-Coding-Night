import React, {Component} from 'react'

class Tile extends Component{
  constructor(props){
    super(props)
    console.log(props)

  }

  render (){
    let classNames = [this.props.className, 'tile'].join(' ');
    return(

      <div className={classNames} >
        TILE
      </div>

    )
  }
}


export default Tile
