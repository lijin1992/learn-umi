import styles from "./goods.css";
import { connect } from "dva";
import { Card, Button } from "antd";
import { Component } from 'react'

@connect(
  state => ({
    loading:state.loading,
    goodsList: state.goods // 获取指定命名空间的模型状态
  }),
  {
    addGood: title => ({
      type: 'goods/addGood',
      payload: { title }
    }),
    getList: () => ({
      type: "goods/getList", // action的type需要以命名空间为前缀+reducer名称
    }),
  }
)
export default class extends Component {
  componentDidMount(){
    this.props.getList();
  }
  render() {
    if(this.props.loading.models.goods){
      return <div>加载中。。。</div>
    }
    return (
      <div className={styles.normal}>
        <h1>Page goods</h1>
        {/* 商品列表 */}
        <div>
          {this.props.goodsList.map(good => {
            return (
              <Card key={good.title}>
                <div>{good.title}</div>
              </Card>
            );
          })}
        </div>
        <div>
          <Button
            onClick={() =>
              this.props.addGood("商品" + new Date().getTime())
            }
          >
            添加商品
            </Button>
        </div>
      </div>
    );
  }
}
