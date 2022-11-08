import Head from 'next/head';
import { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './rspv.module.css';

export default function RSPVPage() {
  const [firstName, setFirstName] = useState(() => '');
  const [lastName, setLastName] = useState(() => '');
  const [email, setEmail] = useState(() => '');
  const [message, setMessage] = useState(() => '');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const isSubmitAvailable = () => (firstName && lastName && email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`FirstName: ${firstName}`);
    console.log(`LastName: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  };

  return (
    <div>
      <Head>
        <title>Soraia & João - Confirmação</title>
        <meta name="description" content="Casamento Soraia & João" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={`${styles.formRow} ${styles.multiFieldRow}`}>
            <FormControl controlid="firstName" fullWidth>
              <TextField size="small" id="firstName" label="Nome" variant="outlined" required onChange={handleFirstNameChange} />
            </FormControl>
            <FormControl controlid="lastName" fullWidth>
              <TextField size="small" id="lastName" label="Sobrenome" variant="outlined" required onChange={handleLastNameChange} />
            </FormControl>
          </div>
          <div className={styles.formRow}>
            <FormControl controlid="email" fullWidth>
              <TextField size="small" id="email" label="Email" type="Email" variant="outlined" required onChange={handleEmailChange} />
            </FormControl>
          </div>

          <div className={styles.formRow}>
            <FormControl controlid="message" fullWidth>
              <TextField variant="outlined" id="textMessage" label="Caso tenha alguma intolerância alimentar, especifique-a aqui" multiline maxRows={10} minRows={4} onChange={handleMessageChange} />
            </FormControl>
          </div>
          <div className={styles.formRow}>
            <Button className={styles.contactUsButton} variant={`${isSubmitAvailable() ? 'contained' : 'outlined'}`} size="medium" type="submit">
              Enviar
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
