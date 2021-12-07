<template>
  <div class="position-absolute d-flex flex-column h-100 w-100 p-2">
    <ReportsSideBar />
  </div>
</template>
<script>
import ReportsSideBar from './ReportsSideBar/ReportsSideBar.vue'
export default {
  name: "app",
  components: { ReportsSideBar },
};
</script>
