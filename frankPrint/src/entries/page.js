import Vue from 'vue';
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import $ from 'jquery'
$('.nav-toggle').on('click', function () {
    $('#menu').toggleClass('active');
});
import main from "../components/main.vue";
    new Vue({
        el: '#root',
        render: h => h(main)
    });



