import { useForm, type SubmitHandler, type FieldValues } from 'react-hook-form';
import { Button } from '../Button/Button';
import style from './form.module.scss';

interface formDataProps {
  formData: Form[];
  buttonText: string;
  onSubmit: SubmitHandler<FieldValues>;
}

interface Form {
  req: boolean;
  label: string;
  inputName: string;
  type: string;
}

export function Form({ formData, buttonText, onSubmit }: formDataProps) {
  const { register, handleSubmit } = useForm();

  const renderedForm = formData.map((inp) => {
    return (
      <>
        <label>
          {inp.label} {inp.req && <span>*</span>}
        </label>
        {inp.type != 'textarea' ? (
          <input {...register(inp.inputName, { required: inp.req })} />
        ) : (
          <textarea rows={10} />
        )}
      </>
    );
  });

  return (
    <form className={style.formStyles} onSubmit={handleSubmit(onSubmit)}>
      {renderedForm}
      <Button text={buttonText} type="submit" />
    </form>
  );
}
