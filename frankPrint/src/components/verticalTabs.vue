﻿<template>
    <v-flex>
        <div class="tab">

            <button class="tablinks" v-on:click="openCity('hoody')" id="defaultOpen">Toлстовки</button>
            <button class="tablinks" v-on:click="openCity('tShirt')">Майки</button>
            <button class="tablinks" v-on:click="openCity('Other')">Разное</button>
        </div>

        <div id="hoody" class="tabcontent">
            <table id="customers">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Königlich Essen</td>
                    <td>Philip Cramer</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
                <tr>
                    <td>North/South</td>
                    <td>Simon Crowther</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Paris spécialités</td>
                    <td>Marie Bertrand</td>
                    <td>France</td>
                </tr>
            </table>

        </div>

        <div id="tShirt" class="tabcontent">
            <table id="customers">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Königlich Essen</td>
                    <td>Philip Cramer</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
                <tr>
                    <td>North/South</td>
                    <td>Simon Crowther</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Paris spécialités</td>
                    <td>Marie Bertrand</td>
                    <td>France</td>
                </tr>
            </table>

        </div>

        <div id="Other" class="tabcontent">
            <table id="customers">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Königlich Essen</td>
                    <td>Philip Cramer</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
                <tr>
                    <td>North/South</td>
                    <td>Simon Crowther</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Paris spécialités</td>
                    <td>Marie Bertrand</td>
                    <td>France</td>
                </tr>
            </table>

        </div>
        </v-flex>
</template> 


<script>
    export default {
        methods: {
            openCity: function (type) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(type).style.display = "block";
    }
        },
        mounted: function () {
            document.getElementById("defaultOpen").click();
        }   
    }


    
</script>