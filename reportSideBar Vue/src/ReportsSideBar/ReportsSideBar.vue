<template>
  <div class="d-flex flex-column w-100 flex-grow-1 flex-shrink-1">
    <div class="d-flex flex-column flex-grow-1 flex-shrink-1">
      <div class="nav">
        <label class="lab" for="">Report Name</label>
        <span class="btnn report">April QA</span>
        <label class="lab" for="">Report Category</label>
        <select class="form-control form-control-sm btnn">
          <option>QA Test Report</option>
          <option>Report 2</option>
          <option>Report 3</option>
          <options>Report 4</options>
        </select>
        <label class="lab" for=""><b>From</b></label>
        <input class="date report input" type="date" />
        <label class="lab" for=""><b>To</b></label>
        <input class="date report input" type="date" />
        <button class="bbb" variant="primary">Update</button>
      </div>
       <ag-grid-vue style="width: 100%;" class="flex-grow-1 flex-shrink-1 ag-theme-alpine"
                   :gridOptions="gridOptions"
                   :columnDefs="columnDefs"
                   :rowData="rowData"
                   :sideBar="sideBar"
                   :defaultColDef="{
                            sortable: true,
                            resizable: true,
                            filter: true
                         }"
                   :groupHeaders="true"
                   :suppressRowClickSelection="true"
>
      </ag-grid-vue>
    </div>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-enterprise";
// import RefData from "./refData";
import refData from "./refData";

export default {
  data() {
    return {
      gridOptions: null,
      api: null,
      columnDefs: null,
      rowData: null,
      showGrid: false,
      sideBar: true,
      rowCount: null,
    };
  },
  components: {
    AgGridVue,
  },
  methods: {
    createRowData() {
      const rowData = [];
      for (let i = 0; i < 20; i++) {
        const allData = refData.Data[i % refData.Data.length];
        rowData.push({
          File_Name: allData.File_Name,
          Created_Month: allData.Created_Month,
          zip: allData.zip,
          File_Date_Month: allData.File_Date_Month,
          Age_In_Current_Status: allData.Age_In_Current_Status,
          Claim_Number: allData.Claim_Number,
          File_Age: allData.File_Age,
          AR_File_Age: allData.AR_File_Age,
          AR_Group: allData.AR_Group,
          Referred_By: allData.Referred_By,
          Referred_By_Org: allData.Referred_By_Org,
          Division: allData.Division,
          File_Number: allData.File_Number,
        });
      }
      this.rowData = rowData;
    },
    createColumnDefs() {
      this.columnDefs = [
        {
          headerName: "File Name",
          field: "File_Name",
          width: 150,
          pinned: false,
        },
        {
          headerName: "Claim Number",
          field: "Claim_Number",
          width: 150,
          pinned: false,
        },
        {
          headerName: "Zip",
          field: "zip",
          width: 120,
          pinned: false,
          filter: "agDateColumnFilter",
          columnGroupShow: "open",
        },
        {
          headerName: "Created Month",
          field: "Created_Month",
          width: 125,
          sortable: false,
        },
        {
          headerName: "File Date Month",
          field: "File_Date_Month",
          width: 120,
        },
        {
          headerName: "File Age",
          field: "File_Age",
          width: 150,
          filter: "text",
        },
        {
          headerName: "Age In Current Status",
          field: "Age_In_Current_Status",
          width: 100,
          filter: "text",
        },
        {
          headerName: "AR File Age",
          field: "AR_File_Age",
          width: 100,
          filter: "text",
        },
        {
          headerName: "AR Group",
          field: "AR_Group",
          width: 120,
          filter: "text",
        },
        {
          headerName: "Referred By",
          field: "Referred_By",
          width: 120,
          filter: "text",
        },
        {
          headerName: "Referred By Organisation Native",
          field: "Referred_By_Org",
          width: 120,
          filter: "text",
        },
        {
          headerName: "Division",
          field: "Division",
          width: 530,
          filter: "text",
        },
        {
          headerName: "File Number",
          field: "File_Number",
          width: 515,
          filter: "text",
        },
      ];
    },
  },
  beforeMount() {
    this.gridOptions = {};
    this.createRowData();
    this.createColumnDefs();
    this.showGrid = true;
  },
};
</script>
<style scoped>
.ag-cell {
  padding-top: 2px !important;
  padding-bottom: 2px !important;
}
label {
  font-weight: normal !important;
}
.div-percent-bar {
  display: inline-block;
  height: 100%;
  position: relative;
  z-index: 0;
}
.div-percent-value {
  position: absolute;
  padding-left: 4px;
  font-weight: bold;
  font-size: 13px;
  z-index: 100;
}
.div-outer-div {
  display: inline-block;
  height: 100%;
  width: 100%;
}
.ag-menu {
  z-index: 200;
}
.toolbar button {
  margin-left: 5px;
  margin-right: 5px;
  padding: 2px;
}
.lab {
  padding-top: 5px;
  margin: 7px;
  margin-right: 0;
  padding-left: 20px;
}
.bbb {
  height: 30px;
  margin: 10px 30px;
  background-color: rgb(67, 101, 180);
  border: 1px solid grey;
  border-radius: 4px;
  color: white;
  width: 80px;
}
.btnn {
  background-color: rgb(241, 241, 241);
  border: solid rgb(190, 190, 190) 1px;
  color: rgb(73, 73, 73);
  border-radius: 3px;
  width: 140px;
  text-align: center;
}
.report {
  margin: 10px;
}
.input {
  height: 30px;
  margin-top: 10px;
  border: solid gray 1px;
}
.form-control {
  margin-top: 10px;
  margin-left: 5px;
}
</style>
