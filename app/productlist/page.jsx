import Product from "./Product";

async function productList() {
  const apidata = await fetch(
    "https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd"
  );
  const data = await apidata.json();

  return data;
}

export default async function Page() {
  const data = await productList();

  return (
    <div>
     
        Product List is here
        {data.map((item, index) => {
          return (
       <>
        <h3 key={index}>{item.name}</h3>
         <Product price = {item.price}></Product>
          </>  
          )
        })}
      
    </div>
  );
}
