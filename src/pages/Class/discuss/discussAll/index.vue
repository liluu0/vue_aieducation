<template>
  <div class="discussAll">

  <div class="discussArea">
    <div class="btn_group" tabindex="-1" aria-hidden="true">
            <div class="search-box">
                      <el-input placeholder="请输入内容" 
                      v-model="input" 
                      prefix-icon="el-icon-search"
                      clearable> </el-input>
            </div> 
            
       <el-button @click="addClass" type="primary" plain round> + 添加讨论</el-button>
    </div>

    <div class="alltopic clearfix">
    <ul class="breadcrumb">
        <li class="active">
            <span>共<b>13</b>条话题</span>
        </li>
    </ul>
    </div>
    
	
	<div class="dataCon">
		<div v-if="true" class="dataCon_empty" style="">
			<span>本课程还没有话题哦，快去发布一个吧～</span>
		</div>
		<div v-else>
			aa
		</div>

	</div>
  </div>
  
  <!-- 背景margin -->
  <div class="bgmargin">
  </div>
			
  <div>

    <div class="editContainer">
		<div class="edit_headTitle">新建话题</div> 
		<div class="edit_main">
			<div class="edit_target">
				<span class="fl">发布给</span> 
				<div class="fl selectClass-disabled">
					<b class="color000">2022软件1班</b>
				</div>
			</div> 
			<div class="edit_title">
				<input type="text" name="title" placeholder="请输入标题" autocomplete="off">
				<div class="deit_content">
					
					<div style="border: 1px solid #ccc">
						<Toolbar
						style="border-bottom: 1px solid #ccc"
						:editor="editorRef"
						:defaultConfig="toolbarConfig"
						:mode="mode"
						/>
						<Editor
						class="editor"
						style="height: 500px; overflow-y: hidden;"
						v-model="valueHtml"
						:defaultConfig="editorConfig"
						:mode="mode"
						@onCreated="handleCreated"
						/>
					</div>
					<br>
                <el-button @click="createDiscuss" type="primary" plain round> 发 布 </el-button>
				</div>
			</div>
		</div>
	</div>


  </div>
  </div>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {
	components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()
    // 内容 HTML
    const valueHtml = ref("<p>开始编辑<p>")
    let articleId=null
    let updatatime=null
    // 模拟 ajax 异步获取内容
    onMounted(() => {
      
         handleEdit()
    
    })
    const editorConfig = {
      MENU_CONF: {}
    }
   
    const toolbarConfig = {}
    editorConfig.MENU_CONF['uploadImage'] = {
      server: 'http://localhost:8088/travelhelper/file/uploadTest',
      uploadImgMaxSize: 30 * 1024 * 1024
      // 上传图片的配置
    }
    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    })
    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    // 提交函数
    const submit = () => {
//       const data = {arId: articleId,
//                     content: valueHtml.value,
//                     time: updatatime
// 	  }
//     reqSubmit(data).then(response => {
//       Message({
//       message: '提交成功',
//       type: 'success'
//     })
//     // 处理服务器返回的响应
//     handleEdit()
//   })
//   .catch(error => {
//     console.error('提交失败：', error)
//     // 处理错误
//   })

    }

    // 修改函数
    const handleEdit = async () => {

    //   try {    
    //              // 请求成功处理逻辑
    //       await reqText().then(response => {
    //       console.log(response.data.content)
    //       // 处理服务器返回的响应
    //         valueHtml.value=response.data.data.content;
    //       articleId=response.data.data.arId
    //       updatatime=response.data.data.time
    //     })
    //     .catch(error => {
    //       console.error('提交失败：', error)
    //       // 处理错误
    //     })

    //   } catch (error) {
    //     console.error('修改文章错误:', error);
    //   }
      
      // 设置编辑器内容为新的内容

    }
    return {
      editorRef,
      valueHtml,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
      submit,
      handleEdit
    }
  }

}
</script>

<style scoped>
/* .deit_content {
 background-color: red;
} */
.fl {
    float: left;
}
.color000 {
	color: #000;
}
/* 新建讨论 */
.editContainer {
    position: relative;
    padding: 30px 30px 40px;
    min-height: 500px;
}
.editContainer .edit_headTitle {
    font-size: 18px;
    color: #131B26;
    font-weight: bold;
    line-height: 28px;
    padding-bottom: 20px;
}
.editContainer .edit_target {
	height: 30px;
	line-height: 30px;
	margin-bottom: 10px;
	font-size: 14px;
	color: #8A8B99;
}
.editContainer .edit_target .selectClass-disabled {
	margin-left: 14px;
    font-size: 14px;
}
.editContainer .edit_title {
	background: #fff;
	margin-bottom: 15px;
}
.editContainer .edit_title input {
    display: block;
    width: 100%;
    height: 42px;
    padding: 0 14px;
    font-size: 14px;
    border: 1px solid #D5D7D9;
    border-radius: 4px;
    box-sizing: border-box;
    caret-color: #3A8BFF;
	margin: 15px 0;
}

/* 分界 */
.clearfix:after {
    content: " ";
    display: block;
    height: 0px;
    clear: both;
}

ul, ol, li {
    list-style-type: none;
}
.alltopic {
	border-bottom: 2px solid #dcdfe6;
    padding-bottom: 10px;
}
.alltopic .breadcrumb {
    float: left;
    max-width: 60%;
}
.breadcrumb {
    width: 100%;
    padding: 15px 0 0 10px;
    box-sizing: border-box;
}
.breadcrumb>li.active {
    color: #8A8B99;
}
.btn_group::after {
content: "";
display: block;
clear:both;
}
.search-box {
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0;
            float: left;
}
.el-input__inner {
    border-radius: 20px;
    border: 2px solid #dcdfe6;
    width: 287px;
}
.el-button--small, .el-button--small.is-round {
    padding: 0;
    width: 104px;
    height: 36px;
    float: right;
    margin-left: 30px;
}

/* 话题 */
.dataCon {
	min-height: 400px;
}
.dataCon_empty {
    height: 180px;
    font-size: 14px;
    color: #a8a8b3;
    text-align: center;
    position: absolute;
    top: 26%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.dataCon_empty span {
    display: inline-block;
    vertical-align: middle;
}
.bgmargin {
	height: 20px;
	background-color: #efefef;
	width: 107%;
    margin-left: -30px;
}
</style>