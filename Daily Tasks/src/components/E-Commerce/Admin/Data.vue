<template>
  <div>
    <form @submit.prevent="adder">
      <label for="">Laptop Name*</label><br /><br />
      <input
        type="text"
        placeholder="Laptop Name"
        v-model="laptopName"
      /><br /><br />
      <label for="">Ram</label><br /><br />
      <input type="number" placeholder="Ram" v-model="ram" /><br /><br />
      <label for="">SSD</label>
      <input
        type="radio"
        value="ssd"
        name="storage-type"
        v-model="storageType"
      />
      <label for="">HDD</label>
      <input
        type="radio"
        value="hdd"
        name="storage-type"
        v-model="storageType"
      />
      <br /><br />
      <label for="">Storage</label><br /><br />
      <input type="number" placeholder="Storage" v-model="storage" />
      <div class="input-box">
        <span class="details">Select an image</span>
        <input type="file" @change="onFileChange" />
      </div>
      <div v-if="image">
        <img :src="image" class="selected-image" />
      </div>
      <button type="submit">Add</button>
    </form>
    <div v-if="check == true">
      {{ laptopName }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      laptopName: "",
      ram: null,
      storageType: "",
      storage: null,
      image: "",
      check: false,
    };
  },
  methods: {
    adder() {
      this.check = true;
      console.log({
        name: this.laptopName,
        ram: this.ram,
        storageType: this.storageType,
        storage: this.storage,
      });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
.selected-image {
  width: 400px;
  height: 200px;
  margin: auto;
}
</style>
