import { CartProductType } from '@/@types/product';
import { query } from '@/services/olist';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import { Component } from 'react';
import List from './List';

interface OListState {
  data: CartProductType[];
}
class OList extends Component<{}, OListState> {
  state: OListState = {
    data: [],
  };

  componentDidMount() {
    query().then((res) => {
      this.setState({ data: res.list.data });
    });
  }
  render() {
    const { data } = this.state;
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <List data={data} />
      </WingBlank>
    );
  }
}
export default OList;
