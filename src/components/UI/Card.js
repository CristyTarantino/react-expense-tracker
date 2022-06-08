import './Card.css'

function Card ({ children, className }) {
  const classes = `${className} card`
  return <div className={classes}>{children}</div>
}

export default Card
