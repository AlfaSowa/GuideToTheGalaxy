import style from './fields.module.scss';

const TextField = ({ name, type = 'text' }): JSX.Element => {
  return (
    <fieldset className={style.root}>
      <legend>{name}</legend>

      <label className={style.root__label}>
        <input type={type} />
      </label>
    </fieldset>
  );
};

export default TextField;
