import axios from 'axios';
import {useState} from 'react';



const Form = (props) => {
    const API_PATH = '/sendemail.php';

    const [formInfo, setFormInfo] = useState({});
    const [error, setError] = useState("");
    const [mailSent, setMailSent] = useState(false);
    const handleFormSubmit = function( e ) {
      e.preventDefault();
  
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: formInfo
        })
        .then(result => {
          setMailSent(result.data.sent);
          setError(false);
        })
        .catch(error => setError(error.message));
    }
  
    return(
    <>
    <form method="post" action="" onSubmit={handleFormSubmit}>
        <div className="form-group">
        <input type="text" placeholder="YOUR NAME*" required value={formInfo.name} onChange={e => setFormInfo({ ...formInfo, name: e.target.value })} name="name" className="styled-input"/>
        </div>
        <div className="form-group">
        <input type="email" placeholder="YOUR EMAIL*" name="email" required className="styled-input" value={formInfo.email} onChange={e => setFormInfo({ ...formInfo, email: e.target.value })}/>
        </div>
        <div className="form-group">
        <input type="tel" placeholder="YOUR PHONE" name="phone" className="styled-input" value={formInfo.phone} onChange={e => setFormInfo({ ...formInfo, phone: e.target.value })}/>
        </div>
        <div className="form-group">
        <input type="text" placeholder="SUBJECT" name="subject" className="styled-input" value={formInfo.subject} onChange={e => setFormInfo({ ...formInfo, subject: e.target.value })}/>
        </div>
        <div className="form-group">
        <textarea  placeholder="YOUR MESSAGE" name="message" className="styled-input" value={formInfo.message} onChange={e => setFormInfo({ ...formInfo, message: e.target.value })}/>
        </div>
        <input className="btn btn-primary w-100" type="submit" value="SEND MESSAGE" />
        {mailSent &&
        <div className="mt-3"><div className="alert alert-success" role="alert">Thank you for contacting us.</div></div>}
        {error &&
        <div className="mt-3"><div className="alert alert-danger" role="alert">{error}</div></div>}
    </form>
  </>
)}

export default Form
