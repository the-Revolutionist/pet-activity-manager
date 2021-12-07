parent=()=>{
  f(x)=>{
    setState(x)
  }
  return(
    <div>
      <child pProp={f(x)}/>
    </div>
  )
}
          
child=({pProp})=>{
  bFunc=(y)=>{
    pProp(selectedValue)
  }
  return{
    <div
      <element value={selectedValue) cProp={bFunc}/>
    </div>
  )
}
       
parent=()=>{f(selectedValue)=>{setState(selectedValue))return(<><child prop={f(selectedValue)}/></>)}
 
### <valueChoosingElement  onProp={ bFunc( aFunc( setState( selectedValue)))}  />
