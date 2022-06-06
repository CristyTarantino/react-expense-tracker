import './Card.css'

export default function Card ({ children, className }) {
  const classes = `${className} card`
  return <div className={classes}>{children}</div>
}
