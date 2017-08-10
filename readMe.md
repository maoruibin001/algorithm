# js算法演练
* 各种排序算法的js实现。
* 对常用的排序提供优化方案。
* 提供单元测试。
## 项目目录
* +src 源代码目录。
* +test 单元测试目录。
## 注意事项
* js统一采用es6语法
* 测试使用mocha + Istanbul

## 运行测试
```
cd path to project
npm install 
npm run test
```

## bug处理
* 发现bug请在issues留言或者发送邮件到595123108@qq.com 我会及时处理，谢谢。

### 选择排序演示（一个一个挑出最大的或最小的）

![图片来源于网络](https://github.com/maoruibin001/algorithm/raw/master/src/images/select.gif)

### 插入排序演示（打扑克牌一样找到插入的位置，可以用二分法优化）

![图片来源于网络](https://github.com/maoruibin001/algorithm/raw/master/src/images/insert.gif)


### 希尔排序演示（分区间的插入排序）

![图片来源于网络](https://github.com/maoruibin001/algorithm/raw/master/src/images/shell.jpg)


### 归并排序演示（找到中间元素，划分两边， 再取出一个一个元素比较序列化，归并）

![图片来源于网络](https://github.com/maoruibin001/algorithm/raw/master/src/images/merge.gif)


### 快速排序演示（选一个标志元素，左右分区，一次递归合并）

![图片来源于网络](https://github.com/maoruibin001/algorithm/raw/master/src/images/quick.gif)

### 计数排序（找到当前元素前面还有多少个比自己小的元素（非比较排序））

![图片来源于网络](https://github.com/maoruibin001/algorithm/raw/master/src/images/count.gif)

### 桶排序（划分区间的基数排序）

![图片来源于网络](https://github.com/maoruibin001/algorithm/raw/master/src/images/count.gif)

### 基数排序（按位数收集再采用计数排序）

![图片来源于网络](https://github.com/maoruibin001/algorithm/raw/master/src/images/count.gif)