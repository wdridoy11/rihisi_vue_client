<template>
    <div>
        <div id="multiselect-sample">
            <div class="col-lg-8 control-section bg-white p-2 rounded-md">
                <div class="control-styles">
                    <ejs-multiselect 
                        id='multiselect-checkbox' 
                        cssClass="e-specific" 
                        :dataSource='specialties' 
                        :placeholder='checkWaterMark' 
                        :fields='checkFields'
                        :mode='multiMode' 
                        :popupHeight='popHeight' 
                        popupWidth="220px" 
                        :showDropDownIcon='showDropDownIcon' 
                        :showSelectAll='showSelectAll'
                        :enableSelectionOrder='enableSelectionOrder' 
                        :filterBarPlaceholder='filterPlaceholder'>
                    </ejs-multiselect>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MultiSelectComponent, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    data() {
      return {
        specialties: null
      };
    },
    components: {
        'ejs-multiselect': MultiSelectComponent,
        'ejs-checkbox': CheckBoxComponent
    },
    data: function() {
        return {
            checkWaterMark: 'Specialties',
            popHeight: '350px',
            multiMode: 'CheckBox',
            filterPlaceholder: 'Specialties',
            showSelectAll: false,
            showDropDownIcon: true,
            enableSelectionOrder: true,
            specialties:["specialties"],
        };
    },
    mounted() {
      // loading data Past your API
      fetch("rihisiDatabase.json")
        .then((res) => res.json())
        .then((data) => {
          this.specialties = data.specialties;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    methods: {
        onChange: function() {
            var checkboxObj = this.$refs.checkboxInstance1.ej2Instances;
            // enable or disable the select all in Multiselect based on CheckBox checked state
            this.showSelectAll = checkboxObj.checked;

        },
        onChangeDrop: function() {
            var dropdownObj = this.$refs.checkboxInstance2.ej2Instances;
            // enable or disable the dropdown button in Multiselect based on CheckBox checked state
            this.showDropDownIcon = dropdownObj.checked;
        },
        onChangeReorder: function() {
            var reorderObj = this.$refs.checkboxInstance3.ej2Instances;
            // enable or disable the list reorder in Multiselect based on CheckBox checked state
            this.enableSelectionOrder = reorderObj.checked;
        }
    },
    provide: {
        multiselect: [CheckBoxSelection]
    }
}
</script>

<style scoped>
    .control-styles {
        margin: 0 auto; 
        /* width:100%;  */
        padding-bottom:3px;
    }
    .e-specific.e-multiselect.e-input-group .e-ddl-icon::before {
        transform: translateY(1px);
    }

    .e-bigger .e-specific.e-multiselect.e-input-group .e-ddl-icon::before {
        transform: translateY(2px);
    }
</style>
