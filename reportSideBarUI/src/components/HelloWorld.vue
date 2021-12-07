<template>
  <div class="mother">
    <!----------------Navigation Bar---------------->
    <div class="nav">
      <b><label class="lab" for="">Report Name</label></b>
      <span class="btnn report">QA Report</span>
      <b><label class="lab" for="">Report Category</label></b>
      <b-form-select
        v-model="selected"
        :options="options"
        class="report"></b-form-select>
      <b><label class="lab" for="">From</label></b>
      <input class="date report input" type="date" />
      <b><label class="lab" for="">To</label></b>
      <input class="date report input" type="date" />
      <b-button class="bbb" variant="primary">Update</b-button>
    </div>
      <!-------------------Table----------------------->
      <div class="tbl">
        <b-table
          class="mt"
          sticky-header="560px"
          :items="items"
          head-varient="unset"></b-table>
      </div>
      <!--------------------Aside Bar----------------->
      <div class="side">
        <div class="form-check form-switch">
          <input
            class="form-check-input input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked/>
          <label class="form-check-label" for="flexSwitchCheckChecked"
            >Pivot Mode</label>
        </div>
        <div class="inpDiv">
          <img src="minus-square-regular.svg" style="width: 18px" class="h5" />
          <input type="text" placeholder="Search..." class="srchInp" />
          <vue-custom-scrollbar
            class="scroll-area"
            :settings="settings"
            @ps-scroll-y="scrollHanle">
            <ul style="list-style: none">
              <li v-for="saman in lis" :key="saman">
                <input
                  type="checkbox"/><b-icon-grid3x2-gap-fill></b-icon-grid3x2-gap-fill>{{ saman }}
              </li>
            </ul>
          </vue-custom-scrollbar>
          <h4>Row Group</h4>
          <textarea cols="24" rows="2" class="ta"></textarea>
          <h4>Values</h4>
          <textarea cols="24" rows="2" class="ta"></textarea>
        </div>
      </div>
  </div>
</template>

<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";

export default {
  components: {
    vueCustomScrollbar,
  },
  data() {
    return {
      selected: null,
      lis: ["File Name","Claim Number","Zip","Created Month","File Date Month","File Age","Age In Current Status","AR File Age","AR Group","Reffered By","Reffered By Organisation Native",],
      options: [
        { value: null, text: "QA Test Report" },{ value: "a", text: "This is First option" },{ value: "b", text: "Selected Option" },
      ],
      items: [
        { Division: "Water", File_Number: "21-11962-W" },
        { Division: "Reconstruction", File_Number: "21-11962-W" },
        { Division: "Structural Cleaning", File_Number: "21-11962-W" },
        { Division: "Bio", File_Number: "21-11962-W" },
        { Division: "Water", File_Number: "21-11962-W" },
        { Division: "Water", File_Number: "21-11962-W" },
        { Division: "Reconstruction", File_Number: "21-11962-W" },
        { Division: "Structural Cleaning", File_Number: "21-11962-W" },
        { Division: "Bio", File_Number: "21-11962-W" },
        { Division: "Water", File_Number: "21-11962-W" },
        { Division: "Reconstruction", File_Number: "21-11962-W" },
        { Division: "Structural Cleaning", File_Number: "21-11962-W" },
        { Division: "Water", File_Number: "21-11962-W" },
      ],
    };
  },
};
</script>

<style scoped>
.form-switch .form-check-input[data-v-469af010] {
  background-color: grey;
}
.form-check-label {
  margin: 7px;
}
.form-switch .form-check-input {
  height: 20px;
  width: 35px;
  margin-left: 12px;
  border: none;
}
.inpDiv {
  border-top: 1px solid rgb(149, 149, 149);
}
li {
  white-space: nowrap;
  margin: -4px;
}
.ta {
  margin-left: 30px;
  margin-top: 3px;
}
.h5 {
  height: 18px;
  margin-left: 24px;
}
.srchInp {
  height: 26px;
  border-radius: 4px;
  margin: 7px 0px 8px 6px;
  border: 1px solid rgb(170, 170, 170);
  width: 180px;
  align-items: center;
}
.side {
  display: inline-block;
  border: solid rgb(160, 160, 160) 1px;
  width: 250px;
  margin-left: -13px;
  background-color: rgb(240, 240, 240);
}
.scroll-area {
  position: relative;
  width: 250px;
  height: 300px;
  border-top: 1px solid rgb(151, 151, 151);
  border-bottom: 1px solid rgb(149, 149, 149);
}
.report {
  margin: 10px;
}
.lab {
  padding-top: 5px;
  margin: 7px;
}
.bbb {
  height: 38px;
  margin: 10px 30px;
}
.btnn {
  background-color: rgb(230, 230, 230);
  border: solid gray 1px;
  color: rgb(73, 73, 73);
  border-radius: 3px;
  height: 30px;
  width: 140px;
  text-align: center;
}
.input {
  height: 30px;
  margin-top: 10px;
  border: solid gray 1px;
}
select {
  background-color: rgb(233, 233, 233);
  border-radius: 4px;
  width: 180px;
  height: 30px;
  margin-top: 10px;
  color: rgb(73, 73, 73);
}
.tbl {
  width: 80%;
  border: 1px solid rgb(163, 163, 163);
  margin: 12px;
  display: inline-block;
}
.b-icon.bi[data-v-469af010] {
  margin: 16px 14px 0px 14px;
}
</style>