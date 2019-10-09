import React from "react";
import PropTypes from 'prop-types';
import styles from "./SlugButton.module.css";


class SlugButton extends React.Component {

  buttonOnClick = (e)=>{
    alert(this.props.slug);
  }

  render() {
    return (
        <button className={styles.button} onClick={this.buttonOnClick}>{this.props.buttonText}</button>
    );
  }
}

export default SlugButton;