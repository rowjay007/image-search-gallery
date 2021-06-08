// import React, { useEffect } from "react";

// const Card = ({ image, urls, description }) => {
//   const imageRef = useRef();
//   const [span, setSpans] = useState(0);

//   useEffect(() => {
//     imageRef.current.addEventListener("load", setSpans);
//   });

//   const setSpans = () => {
//     const height = imageRef.current.clientHeight;
//     const spans = Math.ceil(height / 150);
//     setSpan(spans);
//   };

//   return (
//     <div style={{gridRow: `span ${span}`}}>
//       <img ref={imageRef} src={image.urls.regular} alt={image.description} />
//     </div>
//   );
// };

// export default Card;

import React, { Component } from "react";
import styled from 'styled-components'

class Card extends Component {
  constructor(props) {
    super();
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  
  render() {
    const CardList = styled.img`
      width: 250px;
      grid-row-end: span 2;
    `;
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRow: `span ${this.state.spans}` }}>
        <CardList ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
export default Card;
