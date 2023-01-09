<template>
<div class = "reg">
    <h1>hello</h1>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
    <el-form-item  prop="name">
        <span slot="label">
             <span class="formLabel">昵称</span>
           </span>
      <el-input v-model="ruleForm.name" prefix-icon="el-icon-user-solid" placeholder="show people your awesome nickname~" ></el-input>
    </el-form-item>
    <el-form-item prop="password">
        <span slot="label">
             <span class="formLabel">密码</span>
           </span>
        <el-input v-model="ruleForm.password" prefix-icon="el-icon-key" placeholder="password" ></el-input>
    </el-form-item>
    <el-form-item prop="email" class="emails" :inline="true">
        <span slot="label">
             <span class="formLabel">邮箱账号</span>
           </span>
        <!-- <el-row> -->
        <el-input v-model="ruleForm.email" prefix-icon="el-icon-message" placeholder="password" >
        <template slot="append">
            <el-button type="primary" plain>发送验证码</el-button>
        <!-- </el-row> -->
        </template>
    </el-input>
    </el-form-item>
    <el-form-item  prop="code">
        <span slot="label">
             <span class="formLabel">验证码</span>
           </span>
        <el-input v-model="ruleForm.code" prefix-icon="el-icon-key" placeholder="code" ></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="success" round>注册</el-button>
    </el-form-item>

    </el-form>
  </div>
  </template>

<script>

export default {
  data () {
    return {
      ruleForm: {
        name: '',
        password: '',
        email: '',
        code: ''
      },
      rules: {
        name: [
          { required: true, message: 'please type in your nickname', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'please type in your password', trigger: 'blur' },
          { min: 6, max: 8, message: '长度在 6 到 8个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
    .reg{
        background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
        width: 550px;
        height: 500px;
        margin: 100px auto;
        border-style: inherit;
        font-family:'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;
    }
    .reg h1{
        text-align: center;
        padding-top: 50px;
        margin-bottom: -50px;
        color:#FFFAF0;
    }
    .reg .demo-ruleForm{
        width: 450px;
        padding: 80px 20px;
    }
    .formLabel{
       font-family:Arial,Helvetica,sans-serif;
       font-size:1.35em;
       color:#FFFAF0;
       vertical-align:middle;
       font-weight:normal
    }
</style>
