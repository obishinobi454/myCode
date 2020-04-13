import React from 'react'
import styled from 'styled-components'; 

function Footer() {
    return (
        <FooterContainer className="main-footer">
        <div className="footer-middle"> 
        <div className="container">
        <div className="row">
        {/* Column1 */ } 
        <div className="col-md-3 col-sm-6">
        <h4>Contact Us</h4> 
            <ul className="list-unstyled">
                <li>Address: 8300 Hyland-Croy Rd, 
                    Dublin, OH 43016</li>
                <li>Phone: (614) 873-7377</li>
                <li>Dublin Jerome Computer Science Department</li>
            </ul>
        </div>
        {/* Column 2 */ } 
        <div className="col-md-3 col-sm-6">
        <h4>More Information</h4> 
            <ul className="list-unstyled">
                <li><a href="/">About This Website</a></li>
                <li><a href="/">Usage</a></li>
                <li><a href="/">Policy</a></li>
                <li><a href="/">FAQ</a></li>
            </ul>
        </div>
        {/* Column 3 */ } 
        <div className="col-md-3 col-sm-6">
        <h4>Other</h4> 
            <ul className="list-unstyled">
                <li><a href="/">Leave Us A Message</a></li>
                <li><a href="/">Support Us</a></li>
                <li><a href="/">News</a></li>
                <li><a href="/">Share Your Story</a></li>
            </ul>
        </div>
        {/* Column 4 */ } 
        <div className="col-md-3 col-sm-6">
        <h4>Stay Connected</h4> 
            <ul className="list-unstyled">
                <li><a href="/">Twitter</a></li>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">YouTube</a></li>
                <li><a href="/">Newsletter</a></li>
            </ul>
        </div>
        </div>
        {/* Footer Bottom  */}
        <div className="footer-bottom"> 
        <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Personal Fitness To-Do List - All Rights Reserved 
        </p>
        </div> 
        </div>
    </div>
</FooterContainer>
    ); 
}
export default Footer; 

const FooterContainer = styled.footer`
    .footer-middle { 
        background: var(--mainGrey); 
        padding-top: 1.5rem; 
        
        color: var(--mainBlack); 
    }

    .footer-bottom { 
        padding-top: 1.5rem; 
        padding-bottom: 1.5rem; 
    }
`; 
