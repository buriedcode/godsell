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
           <input style="height: 25px;width: 90%;margin-left: 10px;" placeholder='请输入姓名'/>
           <span style="margin: 10px">* 相片(支持一张,第一张为封面)</span>
           <div style="border: 1px dashed #ccc;height: 70px;width: 90%;margin: 10px;display: flex;align-items: center;justify-content: center">
             <!--<span>点击添加图片</span>-->
             <input type="file" accept="image/*" @change="update">
           </div>
           <span style="margin: 10px">爱的宣言</span>
           <textarea style="height: 80px;width: 90%;margin-left: 10px;padding-left: 10px;vertical-align: top" placeholder='请输入爱的宣言'/>
           <span style="margin: 10px">联系电话</span>
           <input style="height: 25px;width: 90%;margin-left: 10px;margin-bottom: 20px" placeholder='请输入联系电话'/>
         </div>
      <input type="button" value="提交" style="margin-right: 20px;margin-left:20px;margin-top:20px;width: 80%;height: 30px;background: #DB219D;overflow:hidden;border-radius: 10px;border-width: 0;margin-bottom: 30px"></input>
    </div>
   </div>
</template>

<script>
export default {
  name: 'SignUp',
  methods: {
    update: function (e) {
      let file = e.target.files[0]
      let param = new FormData()
      console.log('111111')
      param.append('file', file, file.name)// 通过append向form对象添加数据
      // param.append('chunk', '0')// 添加form表单中其他数据

      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      } // 添加请求头
      /* this.axios.post('localhost:8016/user/fileUpload', param, config)
        .then(response => {
          console.log(response.data)
        }) */
      this.$axios({
        method: 'post',
        url: 'http://localhost:8016/user/register',
        data: {
          userName: '小姜',
          phone: '18569080230',
          picId: '123',
          info: '很好很好'
        },
        headers: {}
        /*headers: {'Content-Type': 'multipart/form-data'}*/
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
</style>
