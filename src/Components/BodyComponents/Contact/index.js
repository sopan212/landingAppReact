import React from 'react'
import './Contact.css'
import Imgcontac from '../../../Assets/images/imgcontact.png'

function Contact() {
    return (
        <div className="contact-cont">
            <div className="deskripsi">
                <p>contact</p>
                <h3>Skip logging in,
                get what you need
with a few key details</h3>
                <img src={Imgcontac} />
            </div>
            <div className="contact-input">
                <form>
                    <label>
                    Your Name (required)
    <input type="text" name="name"  placeholder="Enter Name"/>
                    </label>
                </form>
                <form>
                    <label>
                    Email (required)
    <input type="text" name="Email" placeholder="Enter Your Mail"/>
                    </label>
                </form>
                <form>
                    <label>
                    Subject (required)
    <input type="text" name="Subject"  placeholder="Enter SUbject"/>
                    </label>
                </form>
                <form>
                    <label>
                    Selct Job (required)
                    <select id="Job" name="Select Job">
    <option value="IT">Programer</option>
    <option value="Netwroking">Netwroking</option>
    <option value="Desing" selected>Designer</option>
    <option value="Infra">Infrastruktur</option>
  </select>
                    </label>
                </form>
                <form>
                    <label>
                    Your Company (required)
    <input type="text" name="Company" placeholder="Your Company" />
                    </label>
                </form>
                <form>
                    <textarea placeholder="Enter Masseage">

                    </textarea>
                </form>
                
            </div>
        </div>
    )
}

export default Contact
