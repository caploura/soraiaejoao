import Head from 'next/head';
import { useState } from 'react';

import emailjs from "@emailjs/browser";

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './rspv.module.css';

const userId = "yGQM_1WZ0tYCO-JTN";
const emailServiceId = "service_yis2e6x";
const templateId = "template_yynvpnn";

export default function RSPVPage() {
  const maxGuestsAllowed = 5;

  const [firstName, setFirstName] = useState(() => '');
  const [lastName, setLastName] = useState(() => '');
  const [email, setEmail] = useState(() => '');
  const [message, setMessage] = useState(() => '');
  const [guests, setGuests] = useState(() => []);

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

  const isSubmitAvailable = () => firstName && lastName && email;

  const handleAddNames = () => {
    const index = guests.length;
    const firstNameId = `firstName${index}`;
    const lastNameId = `lastName${index}`;

    const newElement = (
      <div className={`${styles.formRow} ${styles.multiFieldRow}`}>
        <FormControl controlid={firstNameId} fullWidth>
          <TextField size="small" id="firstName" name={firstNameId} label="Nome" variant="outlined" required />
        </FormControl>
        <FormControl controlid={lastNameId} fullWidth>
          <TextField size="small" id="lastName" name={lastNameId} label="Sobrenome" variant="outlined" required />
        </FormControl>
      </div>
    );

    setGuests([...guests, newElement]);
  };

  const handleRemoveNames = () => {
    const newArray = [];

    for(let i = 0; i < guests.length - 1; i++) {
      newArray.push(guests[i]);
    }

    setGuests(newArray);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`FirstName: ${firstName}`);
    console.log(`LastName: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    console.log(event.target);

    emailjs.sendForm(emailServiceId, templateId, event.target, userId)
      .then(
        (result) => {
          console.log(result.text);
          window.alert('Obrigado!');
        },
        (error) => {
          console.log(error.text);
          window.alert('Ocorreu um erro. Por favor contacte os noivos.');
        }
      );
  };

  return (
    <div>
      <Head>
        <title>Soraia & João - Confirmação</title>
        <meta name="description" content="Casamento Soraia & João" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1 className={styles.title}>Confirma a tua presença!</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={`${styles.formRow} ${styles.multiFieldRow}`}>
            <FormControl controlid="firstName" fullWidth>
              <TextField size="small" id="firstName" name='firstName' label="Nome" variant="outlined" required onChange={handleFirstNameChange} />
            </FormControl>
            <FormControl controlid="lastName" fullWidth>
              <TextField size="small" id="lastName" name='lastName' label="Sobrenome" variant="outlined" required onChange={handleLastNameChange} />
            </FormControl>
          </div>
          <div className={`${styles.companySection} ${styles.formRow}`}>
            <Button variant={'outlined'} size="small" onClick={handleAddNames} disabled={guests.length === maxGuestsAllowed}>
              +
            </Button>
            <Button variant={'outlined'} size="small" onClick={handleRemoveNames} disabled={guests.length === 0}>
              -
            </Button>
          </div>

          {guests}

          <div style={{marginBottom: "1rem"}}/>

          <div className={styles.formRow}>
            <FormControl controlid="email" fullWidth>
              <TextField size="small" id="email" label="Email" name="email" type="Email" variant="outlined" required onChange={handleEmailChange} />
            </FormControl>
          </div>

          <div className={styles.formRow}>
            <FormControl controlid="message" fullWidth>
              <TextField variant="outlined" id="textMessage" name="message" label="Caso tenha alguma intolerância alimentar, especifique-a aqui" multiline maxRows={10} minRows={4} onChange={handleMessageChange} />
            </FormControl>
          </div>
          <div className={styles.formRow}>
            <Button variant={'contained'} disabled={!isSubmitAvailable()} size="medium" type="submit">
              Enviar
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
