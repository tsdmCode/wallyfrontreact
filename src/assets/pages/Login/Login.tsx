import { useForm, type SubmitHandler } from 'react-hook-form';
import { Title } from '../../components/Title/Title';
import style from '../Contact/contact.module.scss';

interface LoginFormInput {
  userName: string;
  password: string;
}

export function Login() {
  const { register, handleSubmit } = useForm<LoginFormInput>();
  const onSubmit: SubmitHandler<LoginFormInput> = (data) => console.log(data); //ændrer det lige her senere når vi rent faktisk laver login funktionalitet

  return (
    <>
      <Title text={'Log in'} />
      <form className={style.formStyles} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Brugernavn: <span>*</span>
        </label>
        <input {...register('userName', { required: true })} type="text" />
        <label>
          Password: <span>*</span>
        </label>
        <input {...register('password', { required: true })} type="password" />
      </form>
    </>
  );
}
