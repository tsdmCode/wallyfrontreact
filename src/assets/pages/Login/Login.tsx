import { Title } from '../../components/Title/Title';
import { Form } from '../../components/Form/Form';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export function Login() {
  const [error, setError] = useState<string | null>(null);
  const { userData, setUserData } = useContext(AuthContext);

  function postLogin(data: any) {
    console.log(data);

    const email = data.userName;
    const passWord = data.password;

    const body = new URLSearchParams();
    body.append('username', email);
    body.append('password', passWord);

    const url = 'http://localhost:3000/login';

    fetch(url, { method: 'POST', body: body })
      .then((res) => {
        console.log('Response status:', res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.text();
      })
      .then((text) => {
        const data = JSON.parse(text);
        setUserData(data);
        setError('');
      })
      .catch((error) => {
        console.error('Error logging in: ', error);
        setError('Der opstod en fejl - prøv igen');
      });
  }

  console.log('UserData: ', userData);

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
      {userData ? (
        <h2>Velkommen, kære bruger</h2>
      ) : (
        <Form
          formData={[
            { req: true, label: 'Brugernavn:', inputName: 'userName', type: 'text' },
            { req: true, label: 'Password:', inputName: 'password', type: 'password' },
          ]}
          buttonText="Log in"
          onSubmit={postLogin}
        />
      )}
    </>
  );
}
