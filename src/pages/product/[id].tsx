import { ProductType } from '@/@types/product';
import { query } from '@/services/product';
import { Component } from 'react';
import { IRoute } from 'umi';
import Carousel from './Carousel';
import Tags from '@/components/Tags';
import { Card, WhiteSpace } from 'antd-mobile';
import classnames from 'classnames';
import styles from './[id].less';
import CartAndBuy from './CartAndBuy';

class Product extends Component<IRoute, ProductType> {
  state: ProductType = {
    id: '',
    imgs: [],
    price: 0,
    title: '',
    tags: [],
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    // 获取商品详情
    query({ id }).then((res) => {
      this.setState({ ...res.data });
    });
  }

  render() {
    const { imgs, price, title, tags } = this.state;
    return (
      <div className={styles.main}>
        <Carousel data={imgs} />
        <WhiteSpace size="lg" />
        <Card full>
          <p className={classnames('red', 'bold')}>￥{price}</p>
          <p className="font14">{title}</p>
          <Tags tags={tags} />
        </Card>
        <CartAndBuy product={this.state} />
      </div>
    );
  }
}
export default Product;
