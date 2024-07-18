<template>
  <div>
                    <div class="btn_group" tabindex="-1" aria-hidden="true">
                    <div class="search-box">
                                <el-input placeholder="请输入内容"
                                prefix-icon="el-icon-search"
                                clearable> </el-input>
                    </div> 
                
                <el-button  @click="dialogFormVisible = true" type="primary" plain round> + 创建任务</el-button>

                  <el-dialog
                      title="创建任务"
                      :visible="dialogFormVisible"
                      v-model:visible="dialogFormVisible"
                      center
                      :append-to-body='true'
                      width='600px'
                    >
                      <template v-slot:default>
                        <el-form :model="form" class="dialogBody">
                          <el-form-item label="任务名称" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="截止时间" :label-width="formLabelWidth">
                            <el-input v-model="form.time" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="选择题数量" :label-width="formLabelWidth">
                            <el-input v-model="form.querstionType.select" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="判断题数量" :label-width="formLabelWidth">
                            <el-input v-model="form.querstionType.judge" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="应用题数量" :label-width="formLabelWidth">
                            <el-input v-model="form.querstionType.use" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-form>
                      </template>
                      <template v-slot:footer>
                        <div class="dialog-footer">
                          <el-button @click="dialogFormVisible = false">取 消</el-button>
                          <el-button type="primary" @click="addTask">确 定</el-button>
                        </div>
                      </template>
                    </el-dialog>
                </div>
                   <div class="not-data color181E33">
                暂无暂存任务哦~
            </div>
  </div>
</template>

<script>
  import { Message } from 'element3'
  import { reactive, toRefs } from 'vue'
  import {reqAddTask} from '@/api'
export default {
   setup() {
      const state = reactive({
        dialogFormVisible: false,
        form: {
          name: '',
          time:'',
          querstionType:{
            select:'',
            judge:'',
            use:''
          }
        },
        formLabelWidth: '150px'
      })

      return { ...toRefs(state) }
    },
  methods: {
    async addTask(){
      const {select,judge,use} = this.form.querstionType
      if(!(this.form.name&&this.form.time&&select&&judge&&use)){
        Message.error('请完善信息')
        return
      }
      console.log({
            courseId: this.$route.params.courseId,
            taskName: this.form.name,
            taskContent: "",
            deadline: this.form.time
      });
      const res = await reqAddTask({
            courseId: this.$route.params.courseId,
            taskName: this.form.name,
            taskContent: "",
            deadline: this.form.time
      })
      // console.log(res);
      if(res.data.code == 200){
        const jsonString = JSON.stringify(this.form.querstionType);
        this.$router.push({
          path: '/teacherTaskSet',
          query: { querstionType:jsonString,taskId:res.data.data.taskId }
        });
      }
    }
  },

}
</script>

<style scoped>
 .not-data{
    width: 100%;
    font-size: 20px;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.dialogBody {
    padding:10px 0 0;
}
.dialog-footer {
  height: 30px;
  margin-top: -30px;
}
.btn_group {
    padding: 15px 0 0 25px;
}
.btn_group::after {
content: "";
display: block;
clear:both;
}

.search-box {
            cursor: pointer;
            transition: all 0.3s ease;
            float: left;
            padding: 0;
}
.el-button--small, .el-button--small.is-round {
    padding: 0;
    width: 104px;
    height: 36px;
    float: right;
    margin-left: 30px;
}
</style>