import React, {Component} from 'react'
import Tile from './Tile'

class Grid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      orig: []
    }

  }
  componentDidMount() {
    this.generate()
  }
  generate = () => {
    let orig = [];
    while (orig.length <= 9) {
      //console.log(orig)
      let randNum = Math.floor(Math.random() * 25)
      //console.log(randNum)
      if (orig.indexOf(randNum) === -1) {
        orig.push(randNum)
      }
    }
    this.setState({orig})
  }

  getClassName = (i)=>{
  if(this.state.orig.indexOf(i) >-1){
    return "purple"
  }else{
    return "pink"
  }
}

  render() {
    return (

      <div className="grid-container">
        {[...Array(25).keys()].map((i) => {
          return <Tile key={i} className={this.getClassName(i)}/>
        })}
      </div>

    )
  }
}

export default Grid
