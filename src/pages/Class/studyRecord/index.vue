<template>
  <div>
    <StudyRecord :courseId="courseId"/>
  </div>
</template>

<script>
import StudyRecord from '@/components/StudyRecord'
export default {
    components:{
        StudyRecord
    },
    data () {
        return {
            courseId:this.$route.params.courseId
        }
    }

}
</script>

<style>

</style>