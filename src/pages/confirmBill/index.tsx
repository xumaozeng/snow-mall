import { ConnectProps, ConnectState, CartModelState } from '@/models/connect';
import { getDefaultReceivingInfo } from '@/services/confirmBill';
import { Toast, WhiteSpace, WingBlank } from 'antd-mobile';
import { Component } from 'react';
import { connect, history } from 'umi';
import ListNode from './ListNode';
import PayBar from './PayBar';
import ReceivingInfo, { ReceivingInfoType } from './ReceivingInfo';

export interface ConfirmBillProps extends ConnectProps {
  cart: CartModelState;
}

export interface ConfirmBillState {
  receivingInfo: ReceivingInfoType;
}

class ConfirmBill extends Component<ConfirmBillProps, ConfirmBillState> {
  state: ConfirmBillState = {
    receivingInfo: {
      name: '',
      tel: '',
      address: '',
    },
  };

  componentDidMount() {
    const { data } = this.props.cart;

    if (data.length === 0) {
      Toast.info('请重新进入确认订单页面！');
      history.go(-1);
    } else {
      getDefaultReceivingInfo().then((res) => {
        this.setState({ receivingInfo: { ...res } });
      });
    }
  }

  render() {
    const { receivingInfo } = this.state;
    const { data } = this.props.cart;

    let totalPrice = 0,
      allCount = 0;
    const getList = data.map((item) => {
      if (item.checked) {
        totalPrice += item.price * item.count;
        allCount += item.count;
      }
      return <ListNode key={item.id} {...item} />;
    });
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <ReceivingInfo {...receivingInfo} />
        <WhiteSpace size="lg" />
        <div>{getList}</div>
        <PayBar totalPrice={totalPrice} count={allCount} />
      </WingBlank>
    );
  }
}
export default connect(({ cart }: ConnectState) => ({ cart }))(ConfirmBill);
