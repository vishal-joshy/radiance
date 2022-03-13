import React from 'react';
import { dropdown, cache, youTube } from 'data/stream';
import DropDown from 'components/DropDown/DropDown';
import Layout from 'components/Layout';
import { setStream, removeFromStream } from 'store/slices/streamSlice';
import { useAppDispatch } from 'store/hooks';
import { createKeyPair } from 'utilities/string';

type Props = {};

function Stream({}: Props) {
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    if (!e.target.value) {
      dispatch(removeFromStream(e.target.id));
    } else {
      const result = createKeyPair(e.target.id, e.target.value);
      dispatch(setStream(result));
    }
  };

  const dropdownValues = dropdown.map((item, index) => (
    <React.Fragment key={index}>
      <DropDown {...item} handleChange={handleChange} />
    </React.Fragment>
  ));

  const youtubeValues = youTube.dropdown.map((item, index) => (
    <React.Fragment key={index}>
      <DropDown {...item} handleChange={handleChange} />
    </React.Fragment>
  ));
  
  const cacheValues = <DropDown {...cache} handleChange={handleChange} />;

  return (
    <Layout>
      {dropdownValues}
      <h1>Youtube</h1>
      {youtubeValues}
      <h1>Cache</h1>
      {cacheValues}
    </Layout>
  );
}

export default Stream;
