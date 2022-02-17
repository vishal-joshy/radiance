import React from 'react';
import { useAppDispatch } from 'store/hooks';
import { createKeyPair } from 'utilities/string';
import { setAudio, removeFromAudio } from 'store/audio/audioSlice';
import * as audioData from 'data/audio';
import DropDown from 'components/DropDown/DropDown';
import Layout from 'components/Layout';

type Props = {};

function Audio({}: Props) {
  const dispatch = useAppDispatch();
  const handleDropdown = (e: any) => {
    if (!e.target.value) {
      dispatch(removeFromAudio(e.target.id));
    } else {
      const result = createKeyPair(e.target.id, e.target.value);
      dispatch(setAudio(result));
    }
  };
  return (
    <Layout>
      {audioData.dropdown.map(({ id, label, options }) => (
        <DropDown key={id} id={id} label={label} options={options} handleChange={handleDropdown} />
      ))}
    </Layout>
  );
}

export default Audio;
