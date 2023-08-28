interface Props {
  text?: string
}

const Separator = ({ text }: Props) => {
  return <>
    <div className="separator">
      <div className="separator-line"></div>
      <div className="separator-text">
        {text}
      </div>
      <div className="separator-line"></div>
    </div>
  </>
}
export default Separator;