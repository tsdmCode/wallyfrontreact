import { Title } from '../../components/Title/Title';
import { Form } from '../../components/Form/Form';

export function Login() {
  return (
    <>
      <Title text={'Log in'} />
      {/* <form className={style.formStyles} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Brugernavn: <span>*</span>
        </label>
        <input {...register('userName', { required: true })} type="text" />
        <label>
          Password: <span>*</span>
        </label>
        <input {...register('password', { required: true })} type="password" />
      </form> */}
      <Form
        formData={[
          { req: true, label: 'Brugernavn:', inputName: 'userName', type: 'text' },
          { req: true, label: 'Password:', inputName: 'password', type: 'password' },
        ]}
        buttonText="Log in"
      />
    </>
  );
}
