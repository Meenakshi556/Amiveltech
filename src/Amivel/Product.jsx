import React from 'react'

const Product = () => {
  return (
    <div>
        <section className='product-menu'>
            <article>
                <aside>
                    Our Products
                </aside>
            </article>
        </section><br /><br />
        <div className='our-products'>
          <div className='product-divs' id="new-product">
            <img src="https://th.bing.com/th/id/OIP.8OMFA9whxc7CqD12FW9D9QHaFj?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" width={130}/>
            <div id='set-margin'>Pertenziya</div>
          </div>
          <div className='product-divs'><i><b>The name Pertenziya is derived from a Russian word that means "claim." it represents our core purpose of assisting and supporting clients throughout the insurance claim process.The name reflects unity,action,and advocacy,highlighting our commitment to working alongside customers to help them submit and manage claims with confidence and clarity.</b></i></div>
        </div>
    </div>
  )
}

export default Product