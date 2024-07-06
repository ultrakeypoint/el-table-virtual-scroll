<script>
import VirtualScroll from "el-table-virtual-scroll";
import bulkData from "@/assets/bulkData";

export default {
  name: "App",
  components: { VirtualScroll },
  data() {
    return {
      list: bulkData,
      virtualList: [],
    };
  },
};
</script>

<template>
  <virtual-scroll
    :data="list"
    :item-size="62"
    key-prop="id"
    @change="(renderData) => (virtualList = renderData)"
  >
    <el-table row-key="id" height="500px" :data="virtualList">
      <el-table-column prop="id" label="No" width="80"></el-table-column>
      <el-table-column prop="date" label="Date" width="100"></el-table-column>
      <el-table-column prop="name" label="Name" width="100"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
    </el-table>
  </virtual-scroll>
</template>
