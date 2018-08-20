<template>
    <v-app light>

        <header  style="position:absolute;top:0;background:rgba(0, 0, 0, 0.61);z-index:1000; padding:0;">
            <nav style="margin-left:0;margin-right:0;    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    padding: 0 15px;">
                <div id="logoText" style="display:flex;flex-direction:column;line-height:20px;font-size:60px;">
                    <div>frank</div>
                </div>
                <div style="padding-left:20px;color:white;max-width: 350px;font-size:20px;line-height: 20px;">
                    Изготовление брендированной промопродукции
                </div>
                <div class="nav-toggle"><span></span></div>
                <ul id="menu" style="align-items:center; justify-content: center;">
                    <li><a href="">Наши работы</a></li>
                    <li><a href="">Отзывы</a></li>
                    <li><a href="">Наша продукция</a></li>
                    <li><a href="">О нас</a></li>
                </ul>
                <div id="logoContacts">
                    <div style="display:flex;align-items:center;">
                        <svg height="45px" width="45px">
                            <use xlink:href="#vk" />
                        </svg>
                        <svg viewBox="0 0 50 50" fill="#ffffff" width="50px" height="50px">
                            <path style="stroke:white; stroke-width:1;line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible" fill="#ffffff" />
                        </svg>
                        <div style="color:white;font-weight:bold;">
                            <div>
                                <div style="min-width: 140px;">+375 (29) 6-038-038</div>
                                <div style="min-width: 140px;">+375 (29) 661-20-22</div>
                            </div>
                            <div>frank.print@mail.ru</div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <v-content>
            <section>
                <v-parallax src="assets/section.jpg" height="600">
                    <v-card class="black--text" style="width:400px; height:450px; align-self: center;background:rgba(255, 255, 255, 0.61);flex-direction:column;">
                            <div class="headline" style="color:black;">
                                <div style="display:flex; flex-direction:column;align-items:center;justify-content:center;">
                                    <div>Нанесение</div>
                                    <div>логотипа</div>
                                    <div> Любые виды печати </div>
                                    <div>для Вашей компании</div>
                                </div>

                            </div>
                            <v-layout column
                                      align-center
                                      justify-center
                                      class="white--text">
                                <v-btn class="blue lighten-2 mt-5"
                                       dark
                                       large
                                       href="/pre-made-themes">
                                    Заказать!
                                </v-btn>

                            </v-layout>
                    </v-card>
                 
                </v-parallax>
            </section>

            <section style="text-align: center;">
                <div style="font-size:40px;margin-top:10px; font:bold;">Наши работы</div>
                <photo-grid :box-height="'500px'" :box-width="'500px'" :excess-text="'+ {{count}}'" v-on:clickExcess="triggerClick">
                    <img v-for="imahe in images" v-bind:src="imahe.url" />
                </photo-grid>
            </section>


            <section id="SECTION_1">
                <div id="DIV_2">
                    <h2 id="H2_3">
                        Наши клиенты о нас
                    </h2>
                    <div id="DIV_4">
                        <div id="DIV_5">
                            <div id="DIV_6">
                                <div id="DIV_7">
                                    <picture id="PICTURE_8">
                                        <source id="SOURCE_9" />
                                        <source id="SOURCE_10" />
                                        <source id="SOURCE_11" />
                                        <img src="https://image.spreadshirtmedia.com/content/w_100,c_scale/v20/cms/ml/ratings/testimonials/girl" alt="Кристина Си" id="IMG_12" />
                                    </picture>
                                    <ul id="UL_13">
                                        <li id="LI_14">
                                            Кристина Си
                                        </li>
                                    </ul>
                                    <div id="DIV_15">
                                        <span id="SPAN_16">У них реально заебись, лучшие футболки и худи, я стала успешной меня все начали любить(и всякой экспрессивной чуши)</span>
                                    </div>
                                </div>
                                <div id="DIV_17">
                                    <div id="DIV_18">
                                    </div>
                                    <div id="DIV_19">
                                    </div>
                                    <div id="DIV_20">
                                    </div>
                                    <div id="DIV_21">
                                    </div>
                                    <div id="DIV_22">
                                    </div>
                                </div>
                            </div>
                            <div id="DIV_23">
                                <div id="DIV_24">
                                    <picture id="PICTURE_25">
                                        <source id="SOURCE_26" />
                                        <source id="SOURCE_27" />
                                        <source id="SOURCE_28" />
                                        <img src="https://image.spreadshirtmedia.com/content/w_100,c_scale/v20/cms/ml/ratings/testimonials/photographer" alt="Анжелика В." id="IMG_29" />
                                    </picture>
                                    <ul id="UL_30">
                                        <li id="LI_31">
                                            Анжелика В.
                                        </li>
                                    </ul>
                                    <div id="DIV_32">
                                        <span id="SPAN_33">Телка слева явно говорит годноту, полностью согласна</span>
                                    </div>
                                </div>
                                <div id="DIV_34">
                                    <div id="DIV_35">
                                    </div>
                                    <div id="DIV_36">
                                    </div>
                                    <div id="DIV_37">
                                    </div>
                                    <div id="DIV_38">
                                    </div>
                                    <div id="DIV_39">
                                    </div>
                                </div>
                            </div>
                            <div id="DIV_40">
                                <div id="DIV_41">
                                    <picture id="PICTURE_42">
                                        <source id="SOURCE_43" />
                                        <source id="SOURCE_44" />
                                        <source id="SOURCE_45" />
                                        <img src="https://image.spreadshirtmedia.com/content/w_100,c_scale/v20/cms/ml/ratings/testimonials/man" alt="Валера Вна." id="IMG_46" />
                                    </picture>
                                    <ul id="UL_47">
                                        <li id="LI_48">
                                            Валера Вна.
                                        </li>
                                    </ul>
                                    <div id="DIV_49">
                                        <span id="SPAN_50">Больше 3 думаю на первое время незачем</span>
                                    </div>
                                </div>
                                <div id="DIV_51">
                                    <div id="DIV_52">
                                    </div>
                                    <div id="DIV_53">
                                    </div>
                                    <div id="DIV_54">
                                    </div>
                                    <div id="DIV_55">
                                    </div>
                                    <div id="DIV_56">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="DIV_57">
                            <span id="SPAN_58"></span>
                        </div>
                    </div>
                </div>
            </section>
            <section id="SECTION_1">
                <template>
                    <div id="DIV_2">
                        <v-toolbar color="grey"
                                   dark
                                   tabs>
                            <v-toolbar-title style="display:inline-block;">Наши расценки</v-toolbar-title>
                            <v-tabs slot="extension"
                                    v-model="tab"
                                    color="grey"
                                    grow>
                                <v-tabs-slider color="yellow"></v-tabs-slider>

                                <v-tab :key="7">
                                    Толстовки/майки
                                </v-tab>
                                <v-tab :key="1">
                                    Разное
                                </v-tab>
                            </v-tabs>
                        </v-toolbar>

                        <v-tabs-items v-model="tab" style="display: flex;
        justify-content: center;
        align-items: center;" >
                            <v-tab-item :key="7" style="width:50%;display: inline-block;">
                                <v-card flat>
                                    <v-card-text>
                                        <table cellspacing="0">
                                            <tr>
                                                <th>Количество</th>
                                                <th>Цены</th>
                                                <th>Скидка</th>
                                            </tr>

                                            <tr>
                                                <td>1-10</td>
                                                <td>20$</td>
                                                <td>20%</td>

                                            </tr>


                                            <tr>
                                                <td>1-10</td>
                                                <td>20$</td>
                                                <td>20%</td>

                                            </tr>

                                            <tr>
                                                <td>1-10</td>
                                                <td>20$</td>
                                                <td>20%</td>

                                            </tr>

                                            <tr>
                                                <td>1-10</td>
                                                <td>20$</td>
                                                <td>20%</td>

                                            </tr>
                                        </table>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item :key="1">
                                <v-card flat>
                                    <v-card-text style="width:50%;display: inline-block;">
                                        <table cellspacing="0">
                                            <tr>
                                                <th>Количество00</th>
                                                <th>Цены</th>
                                                <th>Скидка</th>
                                            </tr>

                                            <tr>
                                                <td>1-10</td>
                                                <td>20$</td>
                                                <td>20%</td>

                                            </tr>


                                            <tr>
                                                <td>1-10</td>
                                                <td>20$</td>
                                                <td>20%</td>

                                            </tr>

                                            <tr>
                                                <td>1-10</td>
                                                <td>20$</td>
                                                <td>20%</td>

                                            </tr>

                                            <tr>
                                                <td>1-10</td>
                                                <td>20$</td>
                                                <td>20%</td>

                                            </tr>
                                        </table>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </div>
                </template>
</section>
            <section style="background-color:lightgrey;">
                <v-container grid-list-xl >
                    <v-layout row wrap justify-center class="my-5">
                        <v-flex xs12 sm4>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">О компании</div>
                                </v-card-title>
                                
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm4 offset-sm1>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline"></div>
                                </v-card-title>
                               
                                <v-list class="transparent">
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">phone</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>+375 (29) 6-038-038</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">place</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>Беларусь, Минск </v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">email</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>frank.print@mail.ru</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </section>
            <v-layout row justify-center>
                <v-dialog v-model="dialog" max-width="290">
                    <v-card>
                        <v-card-title class="headline">Заказать обратный звонок</v-card-title>
                        <v-card-text>Введите ваш номер телефона и мы перезвоним вам в течении 5 минут.</v-card-text>
                        <v-card-text>
                            <v-text-field :mask="mask" v-model="valuePhone"></v-text-field>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
                            <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
            <section>

            </section>
            <footer style="background-color:black;">
                <div class="container">
                    <div class="footer-col"><span>frankPrint @2018</span></div>
                    <div class="footer-col">
                        <div class="social-bar-wrap">
                            <svg width="20px" height="20px" style="fill: white;" viewBox="0 0 576 512"><path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z" /></svg>
                            <svg width="20px" height="20px"  style="fill: white;" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            <!--<svg width="20px" height="20px"  style="fill: white;" viewBox="0 0 448 512"><path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" /></svg>-->
                        </div>
                    </div>
                    <div class="footer-col">
                        <a href="mailto:admin@yoursite.ru">Написать письмо</a>
                    </div>
                </div>
            </footer>
        </v-content>
        <fab :position="position"
             :bg-color="bgColor"
             :main-icon="mainIcon"
             :actions="fabActions"
             @message="message"
             @dialogAction="dialogAction"></fab>
    </v-app>
</template>

<script>
    import photogrid from 'vue-photo-grid';
    import fab from 'vue-fab'
    import verticalTabs from '../components/verticalTabs.vue'
    export default {
        data() {
            return {
                title: 'Your Logo',
                mask:'+375(##)###-##-##',
                valuePhone: '+375',
                dialog: false,
                tab:null,
                mainIcon: 'call',
                tabs: null,
                text: ['<table class="table table-sm table-dark"> <thead> <tr> <th scope="col">#</th> <th scope="col">First</th> <th scope="col">Last</th> <th scope="col">Handle</th> </tr> </thead> <tbody> <tr> <th scope="row">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope="row">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope="row">3</th> <td colspan="2">Larry the Bird</td> <td>@twitter</td> </tr> </tbody></table>'
                    ,'<table class="containerTable"><tbody><tr style="height: 23px;"><td style="height: 23px;">Количество&nbsp;</td><td style="height: 23px;">Цена за одну</td><td style="height: 23px;">Скидка</td></tr><tr style="height: 23px;"><td style="height: 23px;">1-10</td><td style="height: 23px;">20$</td><td style="height: 23px;">5%</td></tr><tr style="height: 23px;"><td style="height: 23px;">11-20</td><td style="height: 23px;">18$</td><td style="height: 23px;">10%</td></tr><tr style="height: 23px;"><td style="height: 23px;">21-100</td><td style="height: 23px;">15$</td><td style="height: 23px;">&nbsp;20%</td></tr></tbody></table>'
                ],
                images: [
                    {
                        title: "image 1",
                        url: "assets/1.jpg"
                    },
                    {
                        title: "image 2",
                        url: "assets/2.jpg"



                    }, {
                        title: "image 3",
                        url: "assets/3.jpg"


                    }, {
                        title: "image 4",
                        url: "assets/4.jpg"
                    }, {
                        title: "image 5",
                        url: "assets/5.jpg"
                    }, {
                        title: "image 6",
                        url: "assets/1.jpg"
                    }
                ],
                bgColor: '#778899',
                position: 'bottom-right',
                fabActions: [
                    {
                        name: 'message',
                        icon: 'message'
                    },
                    {
                        name: 'dialogAction',
                        icon: 'call'
                    }
                ]
            }
        },
        components: {
            verticalTabs,
            fab,
            photogrid
        },
        methods: {
            triggerClick() {
                // Some code here...
            },
            message() {
                    var widget_id = 'm7un9oHZWF'; var d = document; var w = window; function l() {
                        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/' + widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);
                    } if (d.readyState == 'complete') { l(); } else { if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } }
            },
            dialogAction() {
                this.dialog = true;
            }
        }   
        }
    
</script>

