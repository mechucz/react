const ItemListContainer = (props) =>{
  return (

      <div className="container-fluid">
      <small className="text-muted">{props.greeting}</small>
      <img src={props.imagen} className="d-block w-100" alt=""/>
        </div>
  
    );
  }
  
  export default ItemListContainer;