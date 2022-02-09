import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

export default function About() {
    const [loading, setloading] = useState(true)

    return (
        <div>
            
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            About Desi-Rasoi
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Desi-Rasoi is a public recipe guiding web application having all small to common details about any food item all over the world. It also have different cuisine-based categories like <Link to='/indian'>Indian</Link>, <Link to='/chinese'>Chinese</Link> and <Link to='/italian'>Italian</Link> and different desserts categories like <Link to='/icecream'>Ice-Cream</Link>, <Link to='/shake'>Shakes</Link> and <Link to='/sweet'>Sweets</Link>. It is being created using ReactJs framework of Javascript and data is being imported from online API(Edamam API). Hope you all like it. For any suggestion or query related to this react app contact us on links and emails given in our 'Contact Us' section below. Critism will be appreciated and will be worked on.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            About Developers
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">This react application is created by <a style={{textDecoration:'none', color:'blue'}} href="www.linkedin.com/in/sehrawat" target='_blank'>Sagar Sehrawat</a> and <a style={{textDecoration:'none', color:'blue'}} href="https://www.linkedin.com/in/aman-yadav-4a3600204/" target='_blank'>Aman Yadav</a>.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Contact Details
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Email : <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sagar02sehrawat@gmail.com&su=SUBJECT&body=BODY" target='_blank'>sagar02sehrawat@gmail.com</a> or <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aman006066@gmail.com&su=SUBJECT&body=BODY" target='_blank'>aman006066@gmail.com</a><br />Github : <a href="https://github.com/sagarsehrawat" target='_blank'>Sagar Sehrawat</a> or <a href="https://github.com/Amnu2002" target='_blank'>Aman Yadav</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}