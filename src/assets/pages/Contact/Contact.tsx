import { Title } from '../../components/Title/Title';
import { Form } from '../../components/Form/Form';

export function Contact() {
  return (
    <>
      <Title text="Kontakt os" />
      <Form
        formData={[
          { label: 'Dit Navn:', inputName: 'fullName', req: true, type: 'text' },
          { label: 'Din email:', inputName: 'email', req: true, type: 'email.' },
          { label: 'Kommentarer', inputName: 'comment', req: true, type: 'textarea' },
        ]}
        buttonText="Send"
      />
    </>
  );
}

{
  /* <form className={style.formStyles} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Dit Navn: <span>*</span>
        </label>
        <input {...register('fullName', { required: true, maxLength: 28 })} />
        <label>
          Din Email: <span>*</span>
        </label>
        <input {...register('email', { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })} />
        <label>
          Kommentar: <span>*</span>
        </label>
        <textarea {...(register('comment'), { required: true, rows: 15 })} />
        <Button text="Send" type="submit" />
 </form> */
}
