<script setup lang="ts">
    import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
    const data = [{ languageData : ['English', 'German', 'Bangla', 'Spanish'] }]  
</script>

<template>
    <div id="app" class="bg-white rounded-md border-r p-2">
        <h5 class="uppercase text-sm font-normal text-[#8a959e]">I wnat to learn</h5>
      <div id='container' style="width:100%;">
          <ejs-dropdownlist id='dropdownlist' popupHeight="250px" popupWidth="100%" 
          :dataSource='data[0].languageData' placeholder='English'></ejs-dropdownlist>
      </div>
    </div>
</template>

<!-- syncfusion css  -->
<style>
    .e-input-group:not(.e-success):not(.e-warning):not(.e-error), 
    .e-input-group.e-control-wrapper:not(.e-success):not(.e-warning):not(.e-error),
    .e-input-group.e-input-focus:not(.e-success):not(.e-warning):not(.e-error), 
    .e-input-group.e-control-wrapper.e-input-focus:not(.e-success):not(.e-warning):not(.e-error){
        border: none;
        box-shadow:none;
    }
    .e-input-group.e-input-focus:hover:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled), 
    .e-input-group.e-control-wrapper.e-input-focus:hover:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled), 
    .e-float-input.e-input-focus:hover:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled), 
    .e-float-input.e-control-wrapper.e-input-focus:hover:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled), 
    .e-float-input.e-input-focus:hover:not(.e-input-group):not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled) 
    input:not([disabled]), .e-float-input.e-control-wrapper.e-input-focus:hover:not(.e-input-group):not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled) input:not([disabled]), .e-float-input.e-input-focus:hover:not(.e-input-group):not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled) textarea:not([disabled]), .e-float-input.e-control-wrapper.e-input-focus:hover:not(.e-input-group):not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled) 
    textarea:not([disabled]){
        border: none;
        box-shadow:none;
    }
</style>
