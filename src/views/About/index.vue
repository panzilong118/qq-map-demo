<template>
  <div>
    <s-json-schema-editor
      :key="schemaKey"
      :schema.sync="schema1"
      :show-default-value="true"
      :is-mock="false"
      @schema-change="onSchemaChange">
    </s-json-schema-editor>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "test",
  data() {
    return {
      schemaKey: '1222',
        // schema 对象
        schema: {},
        schema1: {
          type: 'object',
          title: 'title',
          properties: {}
        }
    };
  },
  created() {
  },
  mounted() {
    // this.schema = this.schema3;
    this.schemaKey = Date.now();
  },
  methods: {
    onSchemaChange(v) {
      this.schemaJsonString = JSON.stringify(v, null, 2);
      console.log(this.schemaJsonString, '<---this.schemaJsonString');
      console.log(this.schema1, '<----this.schema1');
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
