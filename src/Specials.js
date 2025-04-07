import bruchetta from './assets/bruchetta.svg'
import greeksalad from './assets/greek salad.jpg'
import lemondessert from './assets/lemon dessert.jpg'
import specials from './specials.css'

function Specials(){
    return(
        <>
        <section className="specials-s1">
            <h1 className="specials-h1">This Weeks Specials!</h1>
            <button className="specials-online-menu">Online Menu</button>
        </section>
        <section className='dishes'>
        <div className='offering'>
            <img className='offering-img' src={bruchetta} alt='bruchetta'/>
            <h2 className='offering-h2'>Bruschetta: $10.99</h2>
            <p className='offering-p'>Bruschetta is toasted bread topped with tomatoes, basil, 
                and olive oil. Garlic adds an extra layer of flavor. It’s a simple, tasty starter.</p>
            <button className='offering-button'>Order a Delivery</button>
        </div>
        <div className='offering'>
            <img className='offering-img' src={greeksalad} alt='greeksalad'/>
            <h2 className='offering-h2'>Greek Salad: $9.00</h2>
            <p className='offering-p'>Greek salad mixes cucumbers, tomatoes, olives, and red onions, topped with feta cheese. 
                A drizzle of olive oil and oregano. It's a fresh.</p>
            <button className='offering-button'>Order a Delivery</button>
        </div>
        <div className='offering'>
            <img className='offering-img' src={lemondessert} alt='lemondessert'/>
            <h2 className='offering-h2'>Lemon Dessert: $5.59</h2>
            <p className='offering-p'>This lemon dessert is light, creamy, and full of citrusy flavor. 
                Each bite is refreshing and smooth. It’s the perfect sweet finish.</p>
            <button className='offering-button'>Order a Delivery</button>
        </div>
        </section>
        </>
    )
}

export default Specials