const Btn = ({BtnName,click}) => {
  return (
    <>
      <button type="button" onClick={click}> {BtnName}</button>
    </>
  )
}


export default Btn
