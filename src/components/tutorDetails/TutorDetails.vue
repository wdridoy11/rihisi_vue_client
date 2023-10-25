<script setup lang="ts">
    import TutorDetailHeader from './TutorDetailHeader.vue';
    import TutorDetailParagraph from './TutorDetailParagraph.vue'
    import TutorDetailsWrapper from './TutorDetailWrapper.vue'
    import TutorHeaderWrapper from './TutorHeaderWrapper.vue';
</script>
<template>
        <TutorHeaderWrapper />
        
        <TutorDetailsWrapper>
            <TutorDetailHeader>Martina Mind</TutorDetailHeader> 
            <TutorDetailParagraph>Hi, my name’s Martyna, I’m 25, and I’m from Poland. 
                More than 3 years ago I started working as an English tutor. I absolutely love teaching, 
                so I’d be more than happy to help you to improve your English skills. :)
            </TutorDetailParagraph>
            <TutorDetailParagraph>I have 3 years of teaching experience. 
                I've worked as a tutor for over 3 years and in a preschool for almost 3 years :)
            </TutorDetailParagraph>
            <TutorDetailParagraph>Book a trial lesson with me, let’s discuss your goals and expectations 
                and figure out a plan to make learning fun, enjoyable, and most importantly, tailored to your personal needs. :)
            </TutorDetailParagraph>
        </TutorDetailsWrapper>
    </template>