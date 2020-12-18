// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import axios from 'axios';
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Message } from "../components/Message";
import { Spacer } from "../components/Spacer";

export function ContactForm() {

  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState('');

  const submit = async () => {

    if (!name) {
      setError('Please enter your name');
      return;
    }
  
    if (!email) {
      setError('Please enter your email');
      return;
    }
  
    if (!message) {
      setError('Please enter a message');
      return;
    }

    setError('');

    const endpoint = 'https://formspree.io/f/xknppwrg';
    const result = await axios.post(
      endpoint, 
      {
        email,
        message
      }
    );
    console.log('result',result)
  }

  return (
    <>
      <Input placeholder={'Name'} value={name} setValue={setName} />
      <Input placeholder={'Email'} value={email} setValue={setEmail} />
      <Input placeholder={'Message'} large value={message} setValue={setMessage} />

      <Spacer size="xs" />

      <Button onClick={async () => await submit()}>Send Message</Button>

      {Boolean(error) && (
        <>
          <Spacer size="xs" />
          <Message level="error">{error}</Message>
        </>
      )}
    </>
  );

}