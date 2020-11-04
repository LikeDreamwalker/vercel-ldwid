<template>
  <div class="d-flex align-center justify-center" style="overflow-x: hidden;">
    <v-title>文章 - ldwid.com</v-title>
    <p v-if="!status && timeout" class="d-flex justify-center">
      如果你长时间看到这行文本，请尝试刷新该页面
      <br />
      这是一个原因不明的偶发跨域问题
    </p>
    <v-card
      elevation="0"
      tile
      :max-width="$vuetify.breakpoint.mdAndUp ? '75vw' : '90vw'"
      color="#FFFFFF00"
    >
      <v-row v-if="!status">
        <v-col :cols="$vuetify.breakpoint.mdAndUp ? '6' : '12'">
          <v-skeleton-loader
            transition
            :width="$vuetify.breakpoint.mdAndUp ? '37.5vw' : '90vw'"
            :type="
              $vuetify.breakpoint.mdAndUp
                ? 'image@2,article,actions'
                : 'image,article,actions'
            "
          >
          </v-skeleton-loader>
        </v-col>

        <v-col :cols="$vuetify.breakpoint.mdAndUp ? '6' : '12'">
          <v-skeleton-loader
            transition
            :width="$vuetify.breakpoint.mdAndUp ? '37.5vw' : '90vw'"
            :type="
              $vuetify.breakpoint.mdAndUp
                ? 'image@2,article,actions'
                : 'image,article,actions'
            "
          >
          </v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-else-if="$vuetify.breakpoint.mdAndUp">
        <!-- 第一列 -->
        <v-col cols="6">
          <v-card
            v-for="item in items1C"
            :key="item.headline"
            elevation="12"
            tile
            class="mb-5"
          >
            <v-img v-if="item.img !== null" :src="item.img"></v-img>

            <v-card-title>
              {{ item.headline }}
            </v-card-title>
            <v-card-subtitle>
              {{ getDate(item.dateP) }}
            </v-card-subtitle>
            <v-card-text>
              {{ item.text }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                style="font-size:1rem"
                class="d-flex justify-center align-center"
              >
                <a target="_blank" :href="item.url" class="text-decoration-none"
                  >阅读更多 〉</a
                >
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-row>
            <v-col cols="12" class="d-flex align-center justify-center">
              <v-chip
                v-if="plStatus"
                color="secondary"
                :rotate="-90"
                v-intersect.quiet="{
                  handler: onIntersect1,
                  options: {
                    threshold: 1.0
                  }
                }"
              >
                你已经阅读了{{ setValue() }}%
              </v-chip>
            </v-col>
          </v-row>
        </v-col>
        <!-- 第二列 -->
        <v-col cols="6">
          <v-card
            v-for="item in items2C"
            :key="item.headline"
            elevation="12"
            tile
            class="mb-5"
          >
            <v-img v-if="item.img !== null" :src="item.img"></v-img>
            <v-card-title>
              {{ item.headline }}
            </v-card-title>
            <v-card-subtitle>
              {{ getDate(item.dateP) }}
            </v-card-subtitle>
            <v-card-text>
              {{ item.text }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                style="font-size:1rem"
                class="d-flex justify-center align-center"
              >
                <a target="_blank" :href="item.url" class="text-decoration-none"
                  >阅读更多 〉</a
                >
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-center">
              <v-chip
                v-if="plStatus"
                color="secondary"
                :rotate="-90"
                v-intersect.quiet="{
                  handler: onIntersect2,
                  options: {
                    threshold: 1.0
                  }
                }"
              >
                你已经阅读了{{ setValue() }}%
              </v-chip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- 移动端 -->
      <v-row v-else>
        <v-col cols="12">
          <v-card
            elevation="12"
            v-for="item in items"
            :key="item.headline"
            tile
            class="mb-5"
          >
            <v-img v-if="item.img !== null" :src="item.img"></v-img>
            <v-card-title>
              {{ item.headline }}
            </v-card-title>
            <v-card-subtitle>
              {{ getDate(item.dateP) }}
            </v-card-subtitle>
            <v-card-text>
              {{ item.text }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                style="font-size:1rem"
                class="d-flex justify-center align-center"
              >
                <a target="_blank" :href="item.url" class="text-decoration-none"
                  >阅读更多 〉</a
                >
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-row>
          <v-col cols="12" class="d-flex align-center justify-center">
            <v-chip
              v-if="plStatus"
              color="secondary"
              :rotate="-90"
              v-intersect.quiet="{
                handler: onIntersectI,
                options: {
                  threshold: 1.0
                }
              }"
            >
              你已经阅读了{{ setValue() }}%
            </v-chip>
          </v-col>
        </v-row>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  data: () => ({
    // IOS
    ioStatus1: false,
    ioStatus2: false,
    ioStatusI: false,
    // 主索引，用于记录用户已经浏览到的索引位置
    mainIndex: null,
    // PLS
    plStatus: true,
    // axios数据获取状态
    status: false,
    // 单列时的数组
    items: [],
    // 第一列的数组
    items1C: [],
    // 第二列的数组
    items2C: [],
    // 主数组，用于存储axios获取到的数据
    mainArray: [],
    // timeout
    timeout: false
  }),
  mounted() {
    //axios请求拦截器
    axios.interceptors.request.use(
      config => {
        if (/get/i.test(config.method)) {
          //判断get请求
          config.params = config.params || {};
          config.params.t = Date.parse(new Date()) / 1000; //添加时间戳
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    axios
      .get(
        "https://ldwid-1258491808.cos.ap-beijing.myqcloud.com/json/LikeDreamwalker_article.json"
      )
      .then(response => {
        // 默认不对mainArray进行修改，所以整个生命周期不涉及到深拷贝问题
        this.mainArray = response.data;
        // 初始化数组数据
        // 判断mainArray的长度
        if (this.mainArray.length >= 20) {
          // 使用Vuetify的断点检测用户状态
          // md以上
          // 当mainArray的长度大于20时，实现动态渲染
          if (this.$vuetify.breakpoint.mdAndUp) {
            for (let index = 0; index < 20; index += 2) {
              this.items1C.push(this.mainArray[index]);
              // 防止填入空数据
              if (this.mainArray[index + 1]) {
                this.items2C.push(this.mainArray[index + 1]);
              }
            }
            this.mainIndex = 20;
          } else {
            this.items.push(...this.mainArray.slice(0, 10));
            this.mainIndex = 20;
          }
        } else {
          // 使用Vuetify的断点检测用户状态
          // md以上
          // 小于20时，此时不再动态渲染，初始化时即填充所有数据并渲染
          // 将PLS设置为false
          this.plStatus = false;
          if (this.$vuetify.breakpoint.mdAndUp) {
            for (let index = 0; index < this.mainArray.length; index += 2) {
              this.items1C.push(this.mainArray[index]);
              // 防止填入空数据
              if (this.mainArray[index + 1]) {
                this.items2C.push(this.mainArray[index + 1]);
              }
            }
          } else {
            this.items.push(...this.mainArray);
          }
        }
        // 标识状态，确定数据已经加载完毕
        this.status = true;
      });
    setTimeout(() => {
      this.timeout = true;
    }, 1500);
  },
  methods: {
    getDate: function(date) {
      return (
        dayjs(date).format("YY") +
        "年" +
        dayjs(date).format("MM") +
        "月" +
        dayjs(date).format("DD") +
        "日"
      );
    },
    // eslint-disable-next-line no-unused-vars
    onIntersect1(entries, observer) {
      // 当IOS为假时执行回调函数
      if (!this.ioStatus1) {
        // 立刻使IOS为真，防止target移出时调用
        this.ioStatus1 = true;
        // 将当前已经填入的mainArray数组长度存入mainIndex，防止C1，C2渲染相同的数据
        // 判断MI是否已经为MA尾部
        if (this.mainIndex < this.mainArray.length) {
          // 节流，同时将push操作放入异步块中
          setTimeout(() => {
            // 当C1见底，则像C1填充5个数据
            // 如果再次见底，则继续填充数据，直至C2见底
            // C2与此相同
            this.items1C.push(
              ...this.mainArray.slice(this.mainIndex, this.mainIndex + 1)
            );
            this.mainIndex += 1;
          }, 450);
          // 将IOS的恢复放在异步块中并且延时，防止在target移出之前恢复为false
          setTimeout(() => {
            this.ioStatus1 = false;
          }, 500);
        } else {
          // 动态加载完毕，隐藏PLS
          this.plStatus = false;
        }
      }
    },
    // eslint-disable-next-line no-unused-vars
    onIntersect2(entries, observer) {
      // 当IOS为假时执行回调函数
      if (!this.ioStatus2) {
        // 立刻使IOS为真，防止target移出时调用
        this.ioStatus2 = true;
        // 将当前已经填入的mainArray数组长度存入mainIndex，防止C1，C2渲染相同的数据
        // 判断MI是否已经为MA尾部
        if (this.mainIndex < this.mainArray.length) {
          // 节流，同时将push操作放入异步块中
          setTimeout(() => {
            // 当C1见底，则像C1填充5个数据
            // 如果再次见底，则继续填充数据，直至C2见底
            // C2与此相同
            // 进行遍历，当MA[i]不存在时不再遍历，此时动态渲染结束
            this.items2C.push(
              ...this.mainArray.slice(this.mainIndex, this.mainIndex + 1)
            );
            // 存储MI
            this.mainIndex += 1;
          }, 450);
          // 将IOS的恢复放在异步块中并且延时，防止在target移出之前恢复为false
          setTimeout(() => {
            this.ioStatus2 = false;
          }, 500);
        } else {
          // 动态加载完毕，隐藏PLS
          this.plStatus = false;
        }
      }
    },
    // eslint-disable-next-line no-unused-vars
    onIntersectI(entries, observer) {
      // 当IOS为假时执行回调函数
      if (!this.ioStatusI) {
        // 立刻使IOS为真，防止target移出时调用
        this.ioStatusI = true;
        // 节流，同时将push操作放入异步块中
        if (this.items.length < this.mainArray.length) {
          setTimeout(() => {
            this.items.push(
              ...this.mainArray.slice(this.items.length, this.items.length + 1)
            );
          }, 450);
          // 将IOS的恢复放在异步块中并且延时，防止在target移出之前恢复为false
          setTimeout(() => {
            this.ioStatusI = false;
          }, 500);
        } else {
          this.plStatus = false;
        }
      }
    },
    setValue() {
      let value;
      if (this.$vuetify.breakpoint.mdAndUp) {
        value = (this.mainIndex / this.mainArray.length).toFixed(2) * 100;
      } else {
        value = (this.items.length / this.mainArray.length).toFixed(2) * 100;
      }

      return value;
    }
  }
};
</script>

<style lang="scss" scoped></style>
