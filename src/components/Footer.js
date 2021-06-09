import logo from '../assets/TechQuotations-Logo.png'

const Footer = () => {
    return (
        <div className="container footer">
            <img
                    src={logo}
                    width="240px"
                    height="45px"
                    className="d-inline-block align-top"
                    alt="TechQuotation logo"
                />
            
            <footer className="tnc">To join as a Service Provider, please <a href='/' className="tnc" style={{color:'#ff2161'}}>click here</a> for signup.<br></br><br></br>
                Tech Quotations &copy; 2021 - All Rights Reserved.<br></br>
                Terms & Conditions
            </footer>
        </div>
    )
}

export default Footer
