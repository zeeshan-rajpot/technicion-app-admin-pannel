import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const MyForm = () => {
  const [value, setValue] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const googleUrlParameter = urlParams.get('source');
  
    setValue((prevState) => ({
      ...prevState,
      googleUrlParameter: googleUrlParameter || '', // Set the googleUrlParameter value
    }));
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    // ... Rest of your code
  
    if (value.email && value.message) {
      const templateParams = {
        email: value.email,
        message: value.message,
        googleUrlParameter: value.googleUrlParameter || '', // Include the Google URL parameter in the form data
      };
  
      emailjs
        .send("service_p5cs97s", "template_p4f1h7w", templateParams, "PvTyuGGKn4qTGC0S7")
        .then(
          function (response) {
            console.log('SUCCESS!', response.status, response.text);
            setLoading(false);
          },
          function (error) {
            console.log('FAILED...', error);
            setLoading(false);
          }
        );
    } else {
      setLoading(false);
      console.log('Please fill in all fields.');
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        value={value.email || ''}
        onChange={handleChange}
        placeholder="Email"
      />
      <input type="text" />
      <textarea
        name="message"
        value={value.message || ''}
        onChange={handleChange}
        placeholder="Message"
      ></textarea>
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;
