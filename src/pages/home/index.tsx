import SearchInput from './SearchInput';
import Carousel from './Carousel';
import NavTable from './NavTable';
import Arc from '@/components/Arc';
import Recommend from './Recommend';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.main}>
      <SearchInput />
      <Carousel />
      <Arc />
      <NavTable />
      <Recommend />
    </div>
  );
}
