'use client'

export default function Product({price}) {
    return (
      <>
      <button onClick={() => alert(price)}>CHECK PRICE</button>
      </>
    )
}