import widthMouse from "../Mouse"
const Position = (props) => {
  return (
    <div>
      <p>我是康康{props.x}--{props.y}---{props.a}</p>
    </div>
  )
}
// const MousePosition = widthMouse(Position)
export default widthMouse(Position);