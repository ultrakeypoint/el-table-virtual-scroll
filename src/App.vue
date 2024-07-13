<script>
import VirtualScroll from "el-table-virtual-scroll";
import bulkData from "@/assets/js/bulkData";

export default {
  name: "App",
  components: { VirtualScroll },
  computed: {
    height: function () {
      return `${window.innerHeight - this.padding}px`;
    },
  },
  data() {
    return {
      list: bulkData,
      virtualList: [],
      padding: 16,
    };
  },
};
</script>

<template>
  <virtual-scroll
    :data="list"
    :item-size="32"
    key-prop="id"
    @change="(renderData) => (virtualList = renderData)"
  >
    <el-table row-key="id" :height="height" :data="virtualList">
      <el-table-column prop="id" label="No" width="80"></el-table-column>
      <el-table-column prop="date" label="Date" width="100"></el-table-column>
      <el-table-column prop="name" label="Name" width="60"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
    </el-table>
  </virtual-scroll>
</template>
