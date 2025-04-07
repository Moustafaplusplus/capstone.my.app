import customssay from './customerssay.css'

function CustomersSay(){
    const testimonials = [
        {
          name: "Ahmed Abu Al-Qasem",
          text: "This service is amazing! The experience was easy and enjoyable.",
          position: "CEO of Little Lemon",
        },
        {
          name: "Maryam Ali",
          text: "I highly recommend this service to anyone looking for effective support.",
          position: "Entrepreneur",
        },
        {
          name: "Sami Fouad",
          text: "The consultation was incredibly helpful. I feel much more confident after the session.",
          position: "Business Consultant",
        },
      ];
    
      return (
        <div className="testimonial-section">
          <h2>Customers Say</h2>
          <div className="testimonials">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-name">- {testimonial.name}</p>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default CustomersSay