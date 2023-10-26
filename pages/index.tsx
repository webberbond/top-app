import { useEffect, useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log('Counter' + counter);
    return function cleanup() { 
      console.log('unmount');
    };
  });

  return (
    <div>
      <Htag tag="h1">{counter}</Htag>
      <Button appereance="primary" arrow="right" onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
      <Button appereance="ghost" arrow="down">Кнопка</Button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Tag size="s" color="green">Green</Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
}
