import { GetStaticProps } from 'next';
import axios from 'axios';
import { Htag } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import styles from '../styles/home.module.css';
import Category from '@/components/Category/Category';

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
