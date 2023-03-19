import React from 'react'

function ContactBody() {
  return (
      <div>
              <section className="contact-section section-top-padding">
        <div className="container">
            <div className="row">

                <div className="offset-lg-2 col-lg-10 col-sm-12 col-12 git-section">
                    <div className="cs-l-wrapper">
                        <div className="cs-content">
                            <h2 className="cs-title text-center">Get in Touch</h2>
                            <form className="cs-form">
                                <input type="text" name="name" placeholder="Your Name"/>
                                <input type="text" name="email" placeholder="Your Email"/>
                                <textarea name="message" placeholder="Message"></textarea>
                                <button type="submit" className="btn6">Send</button>
                            </form>
                        </div>
                    </div>
                    {/* <!-- Google Map Start --> */}
                    <div className="google-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58391.92348905992!2d90.33451974553982!3d23.83654255462999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755c14a3366b005%3A0x901b07016468944c!2sMirpur%20DOHS%2C%20Dhaka!3m2!1d23.836468!2d90.36953919999999!5e0!3m2!1sen!2sbd!4v1642575818911!5m2!1sen!2sbd"
                                  style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    {/* <!-- Google Map End --> */}
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ContactBody