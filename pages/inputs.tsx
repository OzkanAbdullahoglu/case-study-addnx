import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';

import { POST_LIST_DATA } from '../library/mutations';
import { GET_LIST_DATA } from '../library/queries';
import Loader from '../components/Loader';
import styles from '../styles/Inputs.module.css';
import Input from '../components/Input';

export default function MainView() {
  const [input, setInput] = useState(0);
  const router = useRouter();
  const date = new Date().getTime().toString();
  const [postData, { loading, error, data }] = useMutation(POST_LIST_DATA, {
    refetchQueries: [GET_LIST_DATA, 'GetEvents'],
  });
  if (loading) return <Loader />;
  if (error) return alert(error.message);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const integer = parseInt(e.target.value, 10);
    setInput(integer);
  };

  const handlePostData = async () => {
    await postData({ variables: { date, int: input } });
    if (!loading && !error) router.push('/');
  };

  return (
    <div className={styles.inputsContainer}>
      <Input placeholder="int value" onChange={handleInput} autoFocus />
      <a role="button" className={styles.button} onClick={handlePostData}>
        Add
      </a>
    </div>
  );
}
