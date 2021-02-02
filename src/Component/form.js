
function Form (props) {
return(
     <div>
       <form onSubmit={props.handleSubmit}>
         <input type="text" onChange={props.handleUpdate} value={props.current}/>
         <button type="submit" >Click</button>
       </form>
     </div>
    )
}

export default Form;

