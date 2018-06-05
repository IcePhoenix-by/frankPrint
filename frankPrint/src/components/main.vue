<template>
    <v-app light>
         <!--<v-toolbar light color="light" style="position:absolute;top:0;background:rgba(0,0,0,.5);z-index:1000;">

            <v-toolbar-title id="logoText">frankPrint</v-toolbar-title>
          
            <div id="logoContacts">
                <div style="display:flex;">
                    <svg height="45px" width="45px">
                        <use xlink:href="#vk" />
                    </svg>
                    <svg version="1.1" id="Layer_1" height="40px" width="40px" x="0px" y="0px" viewBox="0 0 551.034 551.034" style="enable-background:new 0 0 551.034 551.034;" xml:space="preserve"> <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.57" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)"> <stop offset="0" style="stop-color:#E09B3D" /> <stop offset="0.3" style="stop-color:#C74C4D" /> <stop offset="0.6" style="stop-color:#C21975" /> <stop offset="1" style="stop-color:#7024C4" /></linearGradient> <path style="fill:url(#SVGID_1_);" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z" /> <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.57" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)"> <stop offset="0" style="stop-color:#E09B3D" /> <stop offset="0.3" style="stop-color:#C74C4D" /> <stop offset="0.6" style="stop-color:#C21975" /> <stop offset="1" style="stop-color:#7024C4" /></linearGradient> <path style="fill:url(#SVGID_2_);" d="M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z" /> <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="418.31" y1="4.57" x2="418.31" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)"> <stop offset="0" style="stop-color:#E09B3D" /> <stop offset="0.3" style="stop-color:#C74C4D" /> <stop offset="0.6" style="stop-color:#C21975" /> <stop offset="1" style="stop-color:#7024C4" /></linearGradient> <circle style="fill:url(#SVGID_3_);" cx="418.31" cy="134.07" r="34.15" /></svg>

                    <div>
                        <div>+375 (29) 6-038-038</div>

                        <div>frank.print@mail.ru</div>
                    </div>
                </div>
            </div>
        </v-toolbar>-->


        <header  style="position:absolute;top:0;background:rgba(0,0,0,.4);z-index:1000;">
            <nav class="container">
                <div  id="logoText">
                    frankPrint
                </div>
                    <div class="nav-toggle"><span></span></div>
                    <ul id="menu">
                        <li><a href="">Наши работы</a></li>
                        <li><a href="">Цены</a></li>
                        <li><a href="">Напишите нам</a></li>
                    </ul>

                    <div id="logoContacts">
                        <div style="display:flex;">
                            <svg height="45px" width="45px">
                                <use xlink:href="#vk" />
                            </svg>
                            <svg version="1.1" id="Layer_1" height="40px" width="40px" x="0px" y="0px" viewBox="0 0 551.034 551.034" style="enable-background:new 0 0 551.034 551.034;" xml:space="preserve"> <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.57" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)"> <stop offset="0" style="stop-color:#E09B3D" /> <stop offset="0.3" style="stop-color:#C74C4D" /> <stop offset="0.6" style="stop-color:#C21975" /> <stop offset="1" style="stop-color:#7024C4" /></linearGradient> <path style="fill:url(#SVGID_1_);" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z" /> <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.57" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)"> <stop offset="0" style="stop-color:#E09B3D" /> <stop offset="0.3" style="stop-color:#C74C4D" /> <stop offset="0.6" style="stop-color:#C21975" /> <stop offset="1" style="stop-color:#7024C4" /></linearGradient> <path style="fill:url(#SVGID_2_);" d="M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z" /> <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="418.31" y1="4.57" x2="418.31" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)"> <stop offset="0" style="stop-color:#E09B3D" /> <stop offset="0.3" style="stop-color:#C74C4D" /> <stop offset="0.6" style="stop-color:#C21975" /> <stop offset="1" style="stop-color:#7024C4" /></linearGradient> <circle style="fill:url(#SVGID_3_);" cx="418.31" cy="134.07" r="34.15" /></svg>

                            <div>
                                <div>+375 (29) 6-038-038</div>

                                <div>frank.print@mail.ru</div>
                            </div>
                        </div>
                    </div>
                
            </nav>
        </header>

        <v-content>
            <section>
                <v-parallax src="assets/hero.jpeg" height="600">
                    <v-layout column
                              align-center
                              justify-center
                              class="white--text">
                        <img src="assets/vuetify.png" alt="Vuetify.js" height="200">
                        <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
                        <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
                        <v-btn class="blue lighten-2 mt-5"
                               dark
                               large
                               href="/pre-made-themes">
                            Get Started
                        </v-btn>
                    </v-layout>
                </v-parallax>
            </section>

            <section style="text-align: center;">
                <div style="font-size:30px;margin-top:10px;">Фотогалерея</div>
                <div class="gradient grpelem" style="display:inline-block;" id="u2623"></div>
                <v-layout column>
                    <v-flex xs12 sm1 offset-sm0>
                        <v-card>
                            <v-container fluid grid-list-xl>
                                <v-layout row wrap>
                                    <v-flex v-for="card in cards"
                                            v-bind="{ [`xs${card.flex}`]: true }"
                                            :key="card.title">
                                        <v-card>
                                            <v-card-media :src="card.src"
                                                          height="200px">
                                                <v-container fill-height fluid>
                                                    <v-layout fill-height>
                                                        <v-flex xs12 align-end flexbox>
                                                            <span class="headline white--text" v-text="card.title"></span>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>
                                            </v-card-media>

                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                </v-layout>
            </section>
            <section id="SECTION_1">
                <div id="DIV_2">
                    <h2 id="H2_3">
                        See What Our Customers Are Saying
                    </h2>
                    <div id="DIV_4">
                        <div id="DIV_5">
                            <div id="DIV_6">
                                <div id="DIV_7">
                                    <picture id="PICTURE_8">
                                        <source id="SOURCE_9" />
                                        <source id="SOURCE_10" />
                                        <source id="SOURCE_11" />
                                        <img src="https://image.spreadshirtmedia.com/content/w_100,c_scale/v20/cms/ml/ratings/testimonials/girl" alt="Jennifer L." id="IMG_12" />
                                    </picture>
                                    <ul id="UL_13">
                                        <li id="LI_14">
                                            Jennifer L.
                                        </li>
                                    </ul>
                                    <div id="DIV_15">
                                        <span id="SPAN_16">The T-Shirts are of very high quality. The site is easy to use, and the customer service and experience was the best I've ever had. I highly recommend Spreadshirt for any of their products.</span>
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
                                        <img src="https://image.spreadshirtmedia.com/content/w_100,c_scale/v20/cms/ml/ratings/testimonials/photographer" alt="Teresa M." id="IMG_29" />
                                    </picture>
                                    <ul id="UL_30">
                                        <li id="LI_31">
                                            Teresa M.
                                        </li>
                                    </ul>
                                    <div id="DIV_32">
                                        <span id="SPAN_33">Really nice. Just received it and I'm happy to see how clean the print is and how soft the t-shirt is. I really like the neckline and the cut of the shirt.</span>
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
                                        <img src="https://image.spreadshirtmedia.com/content/w_100,c_scale/v20/cms/ml/ratings/testimonials/man" alt="Perry M." id="IMG_46" />
                                    </picture>
                                    <ul id="UL_47">
                                        <li id="LI_48">
                                            Perry M.
                                        </li>
                                    </ul>
                                    <div id="DIV_49">
                                        <span id="SPAN_50">The shirt is very soft. The print is clear. I've already washed several times and I don't see any evidence of it picking or peeling off.</span>
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
            <section>

                


            </section>

            <section>
                <v-container grid-list-xl>
                    <v-layout row wrap justify-center class="my-5">
                        <v-flex xs12 sm4>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">Company info</div>
                                </v-card-title>
                                <v-card-text>
                                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm4 offset-sm1>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">Contact us</div>
                                </v-card-title>
                                <v-card-text>
                                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                </v-card-text>
                                <v-list class="transparent">
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">phone</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>777-867-5309</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">place</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>Chicago, US</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">email</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </section>

            <footer style="background: slateblue;">
                <div class="container">
                    <div class="footer-col"><span>frankPrint @2018</span></div>
                    <div class="footer-col">
                        <div class="social-bar-wrap">
                            <svg width="20px" height="20px" viewBox="0 0 576 512"><path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z" /></svg>
                            <svg width="20px" height="20px" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            <svg width="20px" height="20px" viewBox="0 0 448 512"><path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" /></svg>
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



    <!--<v-app light>
        <v-toolbar dark color="dark" style="position:absolute;top:0;background:rgba(0,0,0,.5);z-index:1000;">

            <v-toolbar-title id="logoText">frankPrint</v-toolbar-title>
            <div id="logoButtons">
                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>apps</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>refresh</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
            </div>
            <div id="logoContacts">
                <div style="display:flex;">
                    <svg height="45px" width="45px">
                        <use xlink:href="#vk" />
                    </svg>
                    <svg version="1.1" id="Layer_1" height="40px" width="40px" x="0px" y="0px" viewBox="0 0 551.034 551.034" style="enable-background:new 0 0 551.034 551.034;" xml:space="preserve"> <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.57" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)"> <stop offset="0" style="stop-color:#E09B3D" /> <stop offset="0.3" style="stop-color:#C74C4D" /> <stop offset="0.6" style="stop-color:#C21975" /> <stop offset="1" style="stop-color:#7024C4" /></linearGradient> <path style="fill:url(#SVGID_1_);" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z" /> <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.57" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)"> <stop offset="0" style="stop-color:#E09B3D" /> <stop offset="0.3" style="stop-color:#C74C4D" /> <stop offset="0.6" style="stop-color:#C21975" /> <stop offset="1" style="stop-color:#7024C4" /></linearGradient> <path style="fill:url(#SVGID_2_);" d="M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z" /> <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="418.31" y1="4.57" x2="418.31" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)"> <stop offset="0" style="stop-color:#E09B3D" /> <stop offset="0.3" style="stop-color:#C74C4D" /> <stop offset="0.6" style="stop-color:#C21975" /> <stop offset="1" style="stop-color:#7024C4" /></linearGradient> <circle style="fill:url(#SVGID_3_);" cx="418.31" cy="134.07" r="34.15" /></svg>

                    <div>
                        <div>+375 (29) 6-038-038</div>

                        <div>frank.print@mail.ru</div>
                    </div>
                </div>
            </div>
        </v-toolbar>
        <v-content>
            <section>
                <v-parallax src="assets/hero.jpg" height="600" style="">
                    <v-layout column
                              align-center
                              justify-center
                              class="white--text">



                        <v-btn class="blue lighten-2 mt-5"
                               dark
                               large
                               href="/pre-made-themes">
                            Наши расценки
                        </v-btn>
                    </v-layout>
                </v-parallax>
            </section>

            <section>
                <v-layout column
                          wrap
                          class="my-0"
                          align-center>

                    <v-flex>
                        <div>
                            <div class="row">

                                <div class="large-8 medium-8 columns">
                                    <div class="company-info" style="text-align: center;height:150px;  align-items: center;
  justify-content: center;display:flex;">
                                        <h1>
                                            О компании, наши приемущества
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div class="advantages-container clearfix">
                            <div class="advantage">
                                <div class="advantage-content">
                                    <div class="row">
                                        <div class="large-2 medium-2 columns">
                                            <div class="advantage-content-img advantage-content-img-1"></div>
                                        </div>
                                        <div class="large-10 medium-10 columns">
                                            <h6>Собственное производство</h6>
                                            какой-нибудь текст, возможно пару картинок производства534535
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="advantage">
                                <div class="advantage-content">
                                    <div class="row">
                                        <div class="large-2 medium-2 columns">
                                            <div class="advantage-content-img advantage-content-img-2">
                                            </div>
                                        </div>  <div class="large-10 medium-10 columns">
                                            <h6>Быстрые сроки без вреда качеству</h6>
                                            такая же херня
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="advantage">
                                <div class="advantage-content">
                                    <div class="row">
                                        <div class="large-2 medium-2 columns">
                                            <div class="advantage-content-img advantage-content-img-3">
                                            </div>
                                        </div>
                                        <div class="large-10 medium-10 columns">
                                            <h6>Доставка</h6>
                                            Осуществляем доставку готовой продукции по минску!(и тд)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="advantage">
                                <div class="advantage-content">
                                    <div class="row">
                                        <div class="large-2 medium-2 columns">
                                            <div class="advantage-content-img advantage-content-img-4">
                                            </div>
                                        </div>
                                        <div class="large-10 medium-10 columns">
                                            <h6>Услуги дизайна</h6>
                                            Наши подходы к разработке макетов полиграфической продукции в корне отличаются от вышеупомянутых. Мы предоставляем услуги дизайна любой сложности, в том числе с привлечением внештатных специалистов, хорошо зарекомендовавших себя на этом поприще.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </section>
            <section>
                <v-parallax src="assets/section.jpg">
                    <v-layout column align-center>

                        <h1 style="font-size: 40; color: black;">Наша продукция и услуги</h1>
                        <div class="gradient grpelem" id="u2623"></div>
                        <v-tabs icons-and-text centered dark color="grey" style="margin-top:20">
                            <v-tabs-slider color="yellow"></v-tabs-slider>
                            <v-tab href="#tab-1">
                                Толствоки
                            </v-tab>
                            <v-tab href="#tab-2">
                                Майки
                            </v-tab>
                            <v-tab href="#tab-3">
                                Разное
                            </v-tab>
                            <v-tab-item v-for="i in 3"
                                        :key="i"
                                        :id="'tab-' + i">
                                <v-card flat>
                                    <v-card-text>  <span v-html="text[i-1]"></span></v-card-text>




                                </v-card>
                            </v-tab-item>
                        </v-tabs>

                    </v-layout>
                </v-parallax>
            </section>

            <section>
                <v-container grid-list-xl>
                    <v-layout row wrap justify-center class="my-5">
                        <v-flex xs12 sm4>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">О компании</div>
                                </v-card-title>
                                <v-card-text>
                                    Инфа о компании(пару предложений)
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm4 offset-sm1>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">Свяжитесь с нами</div>
                                </v-card-title>
                                <v-card-text>
                                    Немного инфы(юр адрес и тд)
                                </v-card-text>
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

            <footer style="background: slateblue;">
                <div class="container">
                    <div class="footer-col"><span>frankPrint @2018</span></div>
                    <div class="footer-col">
                        <div class="social-bar-wrap">
                            <svg width="20px" height="20px" viewBox="0 0 576 512"><path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z" /></svg>
                            <svg width="20px" height="20px" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            <svg width="20px" height="20px" viewBox="0 0 448 512"><path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" /></svg>
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
    </v-app>-->
</template>

<script>

    import fab from 'vue-fab'
    import verticalTabs from '../components/verticalTabs.vue'
    export default {
        data() {
            return {
                title: 'Your Logo',
                mask:'+375(##)###-##-##',
                valuePhone: '+375',
                dialog: false,
                mainIcon: 'call',
                tabs: null,
                text: ['<table class="table table-sm table-dark"> <thead> <tr> <th scope="col">#</th> <th scope="col">First</th> <th scope="col">Last</th> <th scope="col">Handle</th> </tr> </thead> <tbody> <tr> <th scope="row">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope="row">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope="row">3</th> <td colspan="2">Larry the Bird</td> <td>@twitter</td> </tr> </tbody></table>'
                ],
                cards: [
                    {  src: '/assets/1.jpg', flex:1 },
                    { src: '/assets/1.jpg', flex:1 },
                    { src: '/assets/1.jpg', flex:1 },
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
            fab
        },
        methods: {
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

