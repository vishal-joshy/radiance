import React from 'react';
import { dropdown, cache, youTube } from 'data/stream';
import DropDown from 'components/DropDown/DropDown';
import Layout from 'components/Layout';
import { setStream, removeFromStream } from 'store/slices/streamSlice';
import { useAppDispatch,useAppSelector } from 'store/hooks';
import { createKeyPair } from 'utilities/string';

type Props = {};

function Stream({}: Props) {
  const dispatch = useAppDispatch();
  const streamDataState = useAppSelector(state=>state.stream)
  
  const handleChange = (e: any) => {
    if (!e.target.value) {
      dispatch(removeFromStream(e.target.id));
    } else {
      const result = createKeyPair(e.target.id, e.target.value);
      dispatch(setStream(result));
    }
  };

  const dropdownOptions = dropdown.map((item, index) => (
    <React.Fragment key={index}>
      <DropDown {...item} handleChange={handleChange} selectedValue={streamDataState.main[item.id]} />
    </React.Fragment>
  ));

  const youtubeOptions = youTube.dropdown.map((item, index) => (
    <React.Fragment key={index}>
      <DropDown {...item} handleChange={handleChange} selectedValue={streamDataState.main[item.id]} />
    </React.Fragment>
  ));

  const cacheOptions = (
    <DropDown {...cache} handleChange={handleChange} selectedValue={streamDataState.main[cache.id]} />
  );

  return (
    <Layout>
      {dropdownOptions}
      <h1>Youtube</h1>
      {youtubeOptions}
      <h1>Cache</h1>
      {cacheOptions}
    </Layout>
  );
}

export default Stream;
