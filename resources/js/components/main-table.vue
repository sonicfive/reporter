<template>
<section class="section">

    <div class="columns">
        <div class="column">
              <b-field label="Select Start Date">
                <b-datepicker
                    v-model="date_from"
                    placeholder="From Date"
                    icon="bookmarks"
                    pack="mdi"
                    >

                </b-datepicker>
            </b-field>
         </div>
           <div class="column">
               <b-field label="Select End Date">
                    <b-datepicker
                        v-model="date_to"
                        placeholder="To Date"
                        icon="fa fa-home"
                        icon-pack="fa"
                        >
                    </b-datepicker>
                </b-field>
         </div>
         <div class="column">
                 <b-field grouped group-multiline>


                    <b-select v-model="perPage" :disabled="!isPaginated">
                        <option value="5">5 per page</option>
                        <option value="10">10 per page</option>
                        <option value="15">15 per page</option>
                        <option value="20">20 per page</option>
                    </b-select>

                    <div class="control is-flex">
                        <b-switch v-model="isPaginated">Paginated</b-switch>
                    </div>




                </b-field>
         </div>
    </div>
    <article>
         <b-field grouped group-multiline>
          <div v-for="(column, index) in report.columns"
                        :key="index"
                        class="control">
                        <b-checkbox v-model="column.visible">
                            {{ remove_underscores( column.label ) }}
                        </b-checkbox>
                    </div>
         </b-field>
    </article>

    <div class="tile is-child">
        <b-table
        :data="report.data"
        :columns="report.columns"
        :paginated="isPaginated"
        :per-page="perPage"
        :current-page.sync="currentPage"
        :pagination-simple="isPaginationSimple"
        :narrowed="true"
        ></b-table>
    </div>


</section>
</template>
<script>
    export default {
    mounted() {
    },
    watch:{
        'date_from': function(){

           this.post_date_from = moment(this.date_from).format("YYYY-MM-DD 00:00:00")
           this.getReport()
        },
        'date_to': function(){
           this.post_date_to = moment(this.date_to).format("YYYY-MM-DD 00:00:00")
           this.getReport()
        }
    },
    methods: {
        'getReport': function(){
            if(this.post_date_from != '' ){
                if(this.post_date_to != '' ){
                    this.$store.dispatch('report/GET_RANGE', {from:this.post_date_from, to: this.post_date_to})
                }
            }
        },
        'remove_underscores': function( string ){
            return _.replace( string, '_',  ' ')
        },
         confirm() {
                this.$dialog.confirm({
                    message: 'Continue on this task?',
                    onConfirm: () => this.$toast.open('User confirmed')
                })
            },
    },
    data() {
        return {
            date_from:  new Date('08/1/2018'),
            date_to:  new Date('08/2/2018'),
            post_date_from : '',
            post_date_to : '',
            isPaginated: true,
            perPage: 5,
            currentPage:1,
            isPaginationSimple: false,
        }
    },

    computed: {
        report: function(){
            return this.$store.getters['report/RANGE']
        }
    }
}
</script>
<style scoped>

</style>
