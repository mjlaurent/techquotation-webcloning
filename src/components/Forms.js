import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Forms = () => {
    return (
        <div className="container forms">
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group controlId="formBasicCompanyName">
                    <Form.Control type="text" placeholder="Company Name(Optional)" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group controlId="formBasicNumber">
                    <Form.Control type="number" placeholder="Whatsapp Number" />
                </Form.Group>
                <Form.Label>Type of project(optional)</Form.Label>
                <Form.Control as="select">
                    <option>Websites / Web Platforms</option>
                    <option>Mobile Apps</option>
                    <option>e-Commerce/stores</option>
                    <option>CRM Systems</option>
                    <option>ERP Systems</option>
                    <option>Software Bug Fixing</option>
                    <option>SEO/ Digital Marketing Services</option>
                    <option>Artificial Intelligence / Machine Learning</option>
                    <option>Blockchain / Cryptocurrency</option>
                    <option>Network & Web Hosting</option>
                    <option>Other Projects</option>
                </Form.Control>
                <br></br>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>A brief description of your work/project:</Form.Label>
                    <Form.Control as="textarea" rows={7} />
                </Form.Group>
                <Form.Label>Your Estimated Budget Range (HK$):</Form.Label>
                <Form.Control as="select">
                    <option>Below $30,000 (Simple/Ready-made)</option>
                    <option>$30,0000 to $100,000</option>
                    <option>Above $100,000 (Platforms)</option>
                </Form.Control>
                <Form.Label>Your Estimated Start Date:</Form.Label>
                <Form.Control as="select">
                    <option>Within 1 Month</option>
                    <option>Within 3 Months</option>
                    <option>To Be Decided</option>
                </Form.Control>
                <div className="container d-flex justify-content-center">
                    <Button size="btn submit" variant="primary" type="submit">
                        Submit Request
                    </Button>
                </div>
            </Form>
            <br></br>
            <p className="text-center text-secondary tnc">By clicking Submit Request, I agree to TechQuotations’ <br></br>Terms & Conditions</p>
        </div>
    );
};

export default Forms;
