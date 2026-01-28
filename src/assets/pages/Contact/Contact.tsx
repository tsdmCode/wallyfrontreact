import { useForm, type SubmitHandler } from 'react-hook-form';
import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button/Button';
import style from './contact.module.scss';

//jeg prøver lige react-hook-form

interface IFormInput {
  fullName: string;
  email: string;
  comment: string;
}

export function Contact() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <Title text="Kontakt os" />
      <form className={style.formStyles} onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </>
  );
}
