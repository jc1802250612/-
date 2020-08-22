<template>
  <div>
    <section class="msite">
      <Header :title="address.name || '定位中'">
        <span class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="header_login" slot="right">
          <span class="header_login_text">登录|注册</span>
        </span>
      </Header>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container" v-if="categorys.length > 0">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(cs, index) in categorysArry"
              :key="index"
            >
              <div class="link_to_food" v-for="(c, index) in cs" :key="index">
                <div class="food_container">
                  <img :src="`https://fuss10.elemecdn.com${c.image_url}`" />
                </div>
                <span>{{ c.title }}</span>
              </div>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <img src="./images/msite_back.svg" alt="loading" v-else />
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <div class="shop_container">
          <ul class="shop_list" v-if="shops.length > 0">
            <li class="shop_li border-1px" v-for="shop in shops" :key="shop.id">
              <a>
                <div class="shop_left">
                  <img
                    class="shop_img"
                    :src="`http://fuss10.elemecdn.com${shop.image_path}`"
                  />
                </div>
                <div class="shop_right">
                  <section class="shop_detail_header">
                    <h4 class="shop_title ellipsis">{{ shop.name }}</h4>
                    <ul class="shop_detail_ul">
                      <li
                        class="supports"
                        v-for="(support, index) in shop.supports"
                        :key="index"
                      >
                        {{ support.icon_name }}
                      </li>
                    </ul>
                  </section>
                  <section class="shop_rating_order">
                    <section class="shop_rating_order_left">
                      <Star :size="24" :score="shop.rating" />
                      <div class="rating_section">
                        {{ shop.rating }}
                      </div>
                      <div class="order_section">
                        月售{{ shop.recent_order_num }}单
                      </div>
                    </section>
                    <section class="shop_rating_order_right">
                      <span class="delivery_style delivery_right">{{
                        shop.delivery_mode.text
                      }}</span>
                    </section>
                  </section>
                  <section class="shop_distance">
                    <p class="shop_delivery_msg">
                      <span>￥{{ shop.float_minimum_order_amount }}起送</span>
                      <span class="segmentation">/</span>
                      <span>配送费约¥{{ shop.float_delivery_fee }}</span>
                    </p>
                  </section>
                </div>
              </a>
            </li>
          </ul>
          <ul v-else>
            <li>
              <img src="./images/shop_back.svg" alt="loaing" />
            </li>
            <li>
              <img src="./images/shop_back.svg" alt="loaing" />
            </li>
            <li>
              <img src="./images/shop_back.svg" alt="loaing" />
            </li>
            <li>
              <img src="./images/shop_back.svg" alt="loaing" />
            </li>
            <li>
              <img src="./images/shop_back.svg" alt="loaing" />
            </li>
            <li>
              <img src="./images/shop_back.svg" alt="loaing" />
            </li>
            <li>
              <img src="./images/shop_back.svg" alt="loaing" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Swiper from "swiper";
import { mapState } from "vuex";
import chunk from "lodash/chunk";
import "swiper/swiper-bundle.min.css";
export default {
  //1.更新数据
  //2.立即同步调用监视回调函数
  //3.异步更新页面
  watch: {
    categorys() {
      // 从空数组到有数据的数组
      //将回调延迟到下次dom更新循环之后执行，在修改数据之后立即使用它，然后等待dom更新
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
  },
  computed: {
    ...mapState(["address", "categorys", "shops"]),

    //包含所有分类的二维数组,小数组长度为8 一维数组生成二维数组
    // categorysArry() {
    //   const { categorys } = this; //categorys里面的16条数据 对象解构出来
    //   //二维数组
    //   const bigArr = [];
    //   let smallArr = [];

    //   //遍历总的一维数组
    //   categorys.forEach((c) => {
    //     //小数组放大数组里去 让小数组往大数组里只添加一次
    //     if (smallArr.length === 0) {
    //       bigArr.push(smallArr);
    //     }
    //     //将c保存到小数组
    //     smallArr.push(c);

    //     //小数组最大长度是8====> 如果小数组满了创建一个新的小数组
    //     if (smallArr.length === 8) {
    //       smallArr = [];
    //     }
    //   });
    //   return bigArr;
    // },
    //使用lodash实现
    categorysArry() {
      return chunk(this.categorys, 8);
    },
  },
  mounted() {
    //分发一部action，将数据从后台请求到vuex
    this.$store.dispatch("getCategorys");
    this.$store.dispatch("getShops");
  },
};
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins.styl';

.msite { // 首页
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      margin-top: 60px;
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 15px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

  .msite_shop_list {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }

    .shop_container {
      margin-bottom: 50px;

      .shop_list {
        .shop_li {
          bottom-border-1px(#f1f1f1);
          width: 100%;

          >a {
            clearFix();
            display: block;
            box-sizing: border-box;
            padding: 15px 8px;
            width: 100%;

            .shop_left {
              float: left;
              box-sizing: border-box;
              width: 23%;
              height: 75px;
              padding-right: 10px;

              .shop_img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }

            .shop_right {
              float: right;
              width: 77%;

              .shop_detail_header {
                clearFix();
                width: 100%;

                .shop_title {
                  float: left;
                  width: 200px;
                  color: #333;
                  font-size: 16px;
                  line-height: 16px;
                  font-weight: 700;

                  &::before {
                    content: '品牌';
                    display: inline-block;
                    font-size: 11px;
                    line-height: 11px;
                    color: #333;
                    background-color: #ffd930;
                    padding: 2px 2px;
                    border-radius: 2px;
                    margin-right: 5px;
                  }
                }

                .shop_detail_ul {
                  float: right;
                  margin-top: 3px;

                  .supports {
                    float: left;
                    font-size: 10px;
                    color: #999;
                    border: 1px solid #f1f1f1;
                    padding: 0 2px;
                    border-radius: 2px;
                  }
                }
              }

              .shop_rating_order {
                clearFix();
                width: 100%;
                margin-top: 18px;
                margin-bottom: 8px;

                .shop_rating_order_left {
                  float: left;
                  color: #ff9a0d;



                  .rating_section {
                    float: left;
                    font-size: 10px;
                    color: #ff6000;
                    margin-left: 4px;
                  }

                  .order_section {
                    float: left;
                    font-size: 10px;
                    color: #666;
                    transform: scale(0.8);
                  }
                }

                .shop_rating_order_right {
                  float: right;
                  font-size: 0;

                  .delivery_style {
                    transform-origin: 35px 0;
                    transform: scale(0.7);
                    display: inline-block;
                    font-size: 12px;
                    padding: 1px;
                    border-radius: 2px;
                  }

                  .delivery_left {
                    color: #fff;
                    margin-right: -10px;
                    background-color: #02a774;
                    border: 1px solid #02a774;
                  }

                  .delivery_right {
                    color: #02a774;
                    border: 1px solid #02a774;
                  }
                }
              }

              .shop_distance {
                clearFix();
                width: 100%;
                font-size: 12px;

                .shop_delivery_msg {
                  float: left;
                  transform-origin: 0;
                  transform: scale(0.9);
                  color: #666;
                }

                .segmentation {
                  color: #ccc;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
