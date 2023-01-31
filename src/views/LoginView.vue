<template>
  <div class="container" style="padding-top: 18%">
    <a-form-model
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout"
      style="width: 70%; margin-left: 20%"
    >
      <a-form-model-item has-feedback label="Crack" prop="pass">
        <a-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('ruleForm')">
          Submit
        </a-button>
        <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
          Reset
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the crack"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "change" }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm() {
      const crack = this.ruleForm.pass;
      if (crack === "123") {
        setTimeout(() => {
          this.$notification.success({
            message: "欢迎",
            description: "欢迎回来",
          });
        }, 1000);
        setTimeout(() => {
          this.$router.push("/home");
        }, 2000);
      }
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
