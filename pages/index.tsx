import { Button, Htag } from '../components';

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appereance="primary">Кнопка</Button>
      <Button appereance="ghost">Кнопка</Button>
    </div>
  );
}
