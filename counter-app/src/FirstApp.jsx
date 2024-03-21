
import './styles.css'
import PropTypes from 'prop-types'
const FirstApp = ({title, subTitle}) => {
  
  return (
    <>
      <h1>{title}</h1>
      <p>Esto es un texto</p>
    </>
  )
}

FirstApp.propTypes = {
title: PropTypes.string.isRequired,
subTitle: PropTypes.string.isRequired
}

export default FirstApp
