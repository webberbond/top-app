import { Button, Htag, P, Tag } from '../components';

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appereance="primary" arrow="right">Кнопка</Button>
      <Button appereance="ghost" arrow="down">Кнопка</Button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Tag size="s" color="green">Green</Tag>
      <Tag color="primary">Primary</Tag>
    </div>
  );
}
