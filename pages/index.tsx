import { Button, Htag } from '../components';

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appereance="primary" arrow='right'>Кнопка</Button>
      <Button appereance="ghost" arrow='down'>Кнопка</Button>
    </div>
  );
}
