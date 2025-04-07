import chicago from './chicago.css'
import image1 from './assets/A.jpg'
import image2 from './assets/B.jpg'

function Chicago(){
    return(
        <div className='chicago'>
        <div className='chicago-text'>
        <h1 className='chicago-h1'>Little Lemon</h1>
        <h2 className='chicago-h2'>Chicago</h2>
        <p className='p'>Little Lemon is a cozy, family-owned restaurant run by brothers 
            Mario and Adrian. Passionate about their Italian roots, 
            they bring the heart of traditional Italian cuisine to 
            every dish. With fresh ingredients and family recipes, Little 
            Lemon offers a warm, authentic dining experience.</p>
        </div>
            <div className='image-container'>
            <img className='imag2' src={image2} alt='photo2'/>
            <img className='imag1' src={image1} alt='photo1'/>
            </div>
        </div>
    )
}

export default Chicago