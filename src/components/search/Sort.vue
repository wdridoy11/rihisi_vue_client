<template>
    <div>
        <div class="flex gap-2 items-center bg-white px-2 py-1 rounded-md mr-3 mb-2">
            <p class="text-base font-normal text-black">Sort by:</p>
            <!-- <div class="content">
                    <h3> Icons</h3>
                    <ejs-dropdownlist id='icons' :showPopupButton='true' cssClass='ddl-icons-css' :dataSource='socialMediaData' :placeholder='iconWaterMark' :fields='iconFields' popupHeight='height'></ejs-dropdownlist>
            </div> -->
            <select class="py-2 focus:outline-none cursor-pointer">
                <option class="py-2" value="our-top-picks">Our top picks</option>
                <option class="py-2" value="popularity">Popularity</option>
                <option class="py-2" value="highest-first">Price: highest first</option>
                <option class="py-2" value="lowest-first">Price: lowest first</option>
                <option class="py-2" value="number-of-reviews">Number of reviews</option>
                <option class="py-2" value="best-rating">Best rating</option>
            </select>
        </div>
    </div>
</template>

<!-- <style>
    .ddl-icons-css .e-list-icon {
        font-family: 'Socialicons' !important;
        color: rgba(0, 0, 0, .57);
    }
    .bootstrap4 .ddl-icons-css .e-list-icon {
        color: #495057;
    }
    .material-dark .ddl-icons-css .e-list-icon,
    .bootstrap5-dark .ddl-icons-css .e-list-icon,
    .tailwind-dark .ddl-icons-css .e-list-icon,
    .fluent-dark .ddl-icons-css .e-list-icon {
        color: #fff;
    }
    .bootstrap-dark .ddl-icons-css .e-list-icon {
        color: #f0f0f0;
    }
    .fabric-dark .ddl-icons-css .e-list-icon {
        color: #dadada;
    }
    .highcontrast .ddl-icons-css .e-list-icon {
        color: rgba(255, 255, 255, 0.57);
    }
    .ddl-icons-css .twitter:before {
        content: "\a701";
    }

    .ddl-icons-css .vimeo:before {
        content: "\a702";
    }

    .ddl-icons-css .youtube:before {
        content: "\a709";
    }

    .ddl-icons-css .whatsapp:before {
        content: "\a700";
    }

    .ddl-icons-css .skype:before {
        content: "\a708";
    }

    .ddl-icons-css .instagram:before {
        content: "\a703";
    }

    .ddl-icons-css .google-plus:before {
        content: "\a706";
    }

    .ddl-icons-css .facebook:before {
        content: "\a705";
    }

    .ddl-icons-css .tumblr:before {
        content: "\a707";
    }

    .ddl-icons-css .linkedin:before {
        content: "\a704";
    }
</style>
<script>
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from '../../../public/rihisiDatabase';

export default {
    components: {
        'ejs-dropdownlist': DropDownListComponent
    },
    data: function() {
        return {
            groupFields: { groupBy: 'Category', text: 'Vegetable', value: 'Id' },
            groupWaterMark: 'Select a vegetable',
            height: '200px',
            vegetableData:data['vegetableData'],
            iconFields: { text: 'SocialMedia', iconCss: 'Class', value: 'Id' },
            iconWaterMark: 'Select a social media',
            socialMediaData: data['socialMedia']
        };
    }
}
</script> -->