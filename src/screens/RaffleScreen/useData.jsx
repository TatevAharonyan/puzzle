import {useEffect, useState} from 'react';
import {useTimer} from '@/hooks/';

import macboock from '@/assets/images/macboock.png';
import iphone from '@/assets/images/iphone.png';
import airPods from '@/assets/images/airPods.png';

export const useData = () => {
  const {time, onReset} = useTimer({seconds: '69'});

  const [product, setProduct] = useState([
    {id: 1, src: macboock, name: 'Macboock', quantity: 1},
    {id: 2, src: iphone, name: 'Iphone', quantity: 3},
    {id: 3, src: airPods, name: 'AirPods', quantity: 10},
  ]);

  useEffect(() => {
    onReset();
  }, []);

  const onSubmit = data => {};

  return {
    onSubmit,
    time,
    product,
  };
};
