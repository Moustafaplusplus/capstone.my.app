import photo from './assets/restauranfood.jpg'

function CallToAction() {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1 className="h1">Little Lemon</h1>
                <h2 className="h2">Chicago</h2>
                <p className="hero-p">
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className="hero-button">Reserve a Table</button>
            </div>
            <img className="hero-img" src={photo} alt="banner"/>
        </section>
    );
}

export default CallToAction