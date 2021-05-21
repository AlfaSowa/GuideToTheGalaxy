import { useState } from 'react';
import { Axios } from '../../utils/axios';
import Modal from '../ui/modal/modal.component';

const NoAuth = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('token/request', {
        username: email,
        password: code,
      });

      if (response.status === 200) {
        document.cookie = `refreshToken=${response.data.refreshToken}; path=/;`;
        document.cookie = `token=${response.data.token}; path=/;`;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button onClick={() => setOpen(true)}>Вход</button>
      </div>

      <Modal title="Вход" open={open} onClose={() => setOpen(false)}>
        <div>
          <form>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="phone"
              type="text"
            />
            <input
              onChange={(e) => setCode(e.target.value)}
              name="code"
              type="text"
            />
            <button onClick={onSubmit} type="submit">
              submit
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default NoAuth;
