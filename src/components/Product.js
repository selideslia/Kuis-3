function Product(props) {
    const notifikasi = () => {
      return alert(`Produk ini bernama ${props.name}`);
    };
  
    return (
      <div>
        <h4>{props.name}</h4>
        <button onClick={notifikasi}>Detail</button>
      </div>
    );
  }
  
  export default Product;