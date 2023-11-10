import axios from 'axios';
import { GetStaticProps } from 'next';
import { Category, Htag } from '../components';
import { API } from '../helpers/api';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';
import styles from '../styles/home.module.css';

function Home({ menu }: HomeProps) {
  return (
    <div>
      <Htag tag="h1">OwlTop - лучший агрегатор онлайн курсов.</Htag>
      <ul className={styles.courses}>
        {menu.map((i) => (
          <Category key={i._id.secondCategory} category={i} />
        ))}
      </ul>
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
