import React from 'react';

class ImageCard extends React.Component {
  constructor(props){
    super(props)

    this.state = { spans : 0 }

    this.imageRef = React.createRef();
  }

  componentDidMount(){
    console.log(this.imageRef);
    console.log(this.imageRef.current.clientHeight);

    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);

    const height = this.imageRef.current.clientHeight;
   
    const spans = Math.ceil(height / 20);
    // //順に、四捨五入・切り上げ・切り捨てを求める
    //   document.marume.elements[1].value = Math.round(num);
    //   document.marume.elements[2].value = Math.ceil(num);
    //   document.marume.elements[3].value = Math.floor(num);

    this.setState({ spans: spans });
  }

  render() {
    // Short handed
    const {alt_description, urls} = this.props.image
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img 
         ref={this.imageRef}
         alt={alt_description}
         src={urls.regular}
        />
      </div>
    )
  }
}

export default ImageCard