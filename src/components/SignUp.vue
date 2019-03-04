<header>
  <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
</header>
<template>
   <div>
    <div class="div">
      <div style="display: flex;justify-content: center;width: 100%;color: #DB219D;flex-direction: column;padding-top: 20px">
        <span>最美情侣,湘潭大金行祝有情人</span><span>终成眷属!</span><span>在线报名</span>
      </div>
         <div class="div1">
           <span style="margin: 10px">* 姓名</span>
           <input v-model="name" style="height: 25px;width: 90%;margin-left: 10px;" placeholder='请输入姓名'/>
           <span style="margin: 10px">* 相片(支持一张,第一张为封面)</span>
           <div style="border: 1px dashed #ccc;height: 100%;width: 90%;margin: 10px;display: flex;align-items: center;justify-content: center;display: flex;flex-direction:column">
             <!--<span>点击添加图片</span>-->

             <input id="upload" type="file" accept="image/*" @change="update" hidden="true">
             <label v-if="show" class="ui_button ui_button_primary" for="upload">上传图片</label>
             <img v-bind:src="imgUrl" id="img" style="margin-right: 10px;margin-left: 10px;width: 100%" v-if="pic_show"/>

             <BUTTON v-if="bt_show" class="bt_class" @click="change">修改</BUTTON>
           </div>
           <span style="margin: 10px">爱的宣言</span>
           <textarea v-model="info" style="height: 80px;width: 90%;margin-left: 10px;padding-left: 10px;vertical-align: top" placeholder='请输入爱的宣言'/>
           <span  style="margin: 10px">联系电话</span>
           <input v-model="phone" style="height: 25px;width: 90%;margin-left: 10px;margin-bottom: 20px" placeholder='请输入联系电话'/>
         </div>
      <input type="button" value="提交" style="margin-right: 20px;margin-left:20px;margin-top:20px;width: 80%;height: 30px;background: #DB219D;overflow:hidden;border-radius: 10px;border-width: 0;margin-bottom: 30px" @click="submit"></input>
    </div>
   </div>
</template>

<script>
export default {
  name: 'SignUp',
  data: function () {
    return {
      imgUrl: '',
      show: true,
      bt_show: false,
      pic_show: false,
      info: '',
      name: '',
      phone: '',
      picId: ''
    }
  },
  methods: {
    update: function (e) {
      var that = this
      let file = e.target.files[0]
      let param = new FormData()
      param.append('file', file)// 通过append向form对象添加数据
      let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      } // 添加请求头
      this.$axios.post('http://localhost:8016/user/fileUpload', param, config)
        .then(function (response) {
          that.pic_show = true
          that.show = false
          that.bt_show = true
          that.imgUrl = response.data.data.url
          that.pid = response.data.data.pid
          console.log(response.data.data.id)
        })
    },
    change: function () {
      var that = this
      that.bt_show = false
      that.show = true
      that.pic_show = false
    },
    submit: function () {
      var that = this
      console.log('名字' + that.name)
      this.$axios({
        method: 'post',
        url: 'http://localhost:8016/user/register',
        data: {
          userName: that.name,
          phone: that.phone,
          picId: that.pid,
          info: that.info
        },
        headers: {}
      }).then(function (response) {
        console.log(response.data)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  html,body{overflow:hidden;overflow-y:auto;font-size: 14px;}
.div{
  width: 100%;
  height: 100%;
  background: #ECF0F5;
  display: flex;
  flex-direction: column;
}
.bt_class{
  width: 50px;
  height: 30px;
  background: aqua;
  margin-top: 10px;
  margin-bottom: 15px;
  border: 0px;
  border-radius: 8px;
  outline:none;
}
.div1{
  background: #ffffff;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  overflow:hidden
 }
  .ui_button {
                     display: inline-block;
                     line-height: 45px;
                     margin-top: 20px;
                     margin-bottom: 20px;
                     padding: 0 70px;
                     color: #FFFFFF;
                     font-family: "微软雅黑";
                     font-weight: 700;
                     cursor: pointer;
                 }
               .ui_button_primary {
                                    background-color: #FF6600;
                                }
               label.ui_button:hover {
                                    background-color: #d46216;
                                }
</style>
