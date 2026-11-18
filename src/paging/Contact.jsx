function Contact() {
    return (
        <div className="contact">
            <h1>Contact Page</h1>
            <p>if any enquiry contact us at info@example.com</p>
            <form>
                <table><tr>
                <th><td><label>Name</label> 
                <input type="text" placeholder="Name" /></td></th></tr>
                <tr>
                <th><td><label>Email</label> 
                <input type="text" placeholder="Email" /></td></th></tr>
                <tr>
                <th><td><label>Number</label> 
                <input type="number" placeholder="Number" /></td></th></tr>
                <tr>
                <th><td><label>Message</label> 
                <textarea placeholder="Message"></textarea></td></th></tr>
                <tr>
                <th><td><button type="submit">Submit</button></td></th></tr></table>  
            </form>
        </div>
    )
}
export default Contact;