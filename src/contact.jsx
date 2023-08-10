import React from 'react'
import './contactstyle.css'

const Contact = () => {
    return (
        <>
            <div className='main-body'>
                <div className='full-body'>
                    <center>
                        <div className='let-talk-dot'>
                            <div className='bluedot'></div>
                        <div className='let-talk'><p>Let's talk</p></div>
                        </div>
                        <div className='main-contact'>
                            <div className='main-content'>
                                <div className='name-input'>
                                    <div className='first-name'>
                                        <div className='first-name-input'>
                                            <p>First Name *</p>
                                            <input className='input-name'></input>
                                        </div>
                                    </div>
                                    <div className='last-name'>
                                        <div className='last-name-input'>
                                            <p>Last Name *</p>
                                            <input  className='input-name'></input>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className='mail'>
                                    <div className='mail-form'>
                                    <p className='mail'>Email *</p>
                                    <input className='mail-input'></input>
                                    </div>
                                </div>
                                <br></br>

                                <div className='mail'>
                                    <div className='mail-form'>
                                    <p className='mail'>Subject *</p>
                                    <input className='mail-input'></input>
                                    </div>
                                </div>
                                <br></br>
                                <div className='mail'>
                                    <div className='mail-form'>
                                    <p className='mail'>Message *</p>
                                    <input className='message-input'></input>
                                    </div>
                                </div>
                                <div className='buttons'>
                                <button className='buttonsend'>Send</button>
                                </div>
                            </div>
                        </div>

                    </center>
                </div>
            </div>
        </>
    )
}
export default Contact;