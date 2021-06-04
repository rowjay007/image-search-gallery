import React from "react";

const Card = ({ image, urls, description }) => {
  return (
    <div>
      <img src={image.urls.regular} alt={image.description} />
    </div>
  );
};

export default Card;

// import React, { Component } from "react";

// export default class Card extends Component {
//   render() {
//     return (
//       <div>
//         <img src={this.props.image.urls.regular} alt={this.props.image.description} />
//       </div>
//     );
//   }
// }
