# kview

## vue UI 组件，尚处于开发阶段，近期会根据需要不断更新

## npm 安装 kview UI组件

  npm i ke-views -S

```
    import keviews from 'ke-views'
    Vue.use(keviews);
```

### 1、k-tagSlider 滑动按钮，效果图如下
![Image text](https://github.com/zhangkejian0/kview/blob/master/image/tagSlider.png)
```
    例如：
    <k-tagSlider v-model="value" :tags="['年','月','日']"/>
```

### 2、k-circleProgress 环形进度条，效果图如下
![Image text](https://github.com/zhangkejian0/kview/blob/master/image/circleProgress.png)
```
    例如：
    <k-circleProgress
      class="circleProgress"
      :width="100"
      :radius="10"
      :progress="70"
      :delay="300"
      :duration="1000"
      :barColor="'#43B9D4'"
      :backgroundColor="'#D8D8D8'"
      :isAnimation="false"
    >
      <div>
        <p>70%</p>
        <p>自定义</p>
      </div>
    </k-circleProgress>
```