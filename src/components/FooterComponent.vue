<template>
    <footer>
        <div class="container">
            <div class="row big_row">
                <!-- first-col -->
                <div class="col">
                    <div class="title">
                        <h4>{{ addressList.title }}</h4>
                    </div>

                    <!-- contacts-list -->
                    <ul>
                        <li class="contact_info">
                            {{ addressList.address }}
                        </li>
                        <li class="contact_info">
                            {{ addressList.contact }}
                        </li>
                        <li>
                            <a href="#">
                                {{ addressList.email}}
                            </a>    
                        </li>
                    </ul>

                    <!-- -brand-icon-list -->
                    <ul class="d-flex icon_list">
                        <li v-for="(icon, index) in brandIcons" :key="index">
                            <a class="icon_brand" :href="icon.url">
                                <font-awesome-icon :icon="icon.icon" />
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- second-col -->
                <div class="col big_col">
                    <div class="row small_row">
                        <div class="col">
                            <div class="title">
                                <h4>{{ exploreList.title }}</h4>
                            </div>

                            <!-- explore-link-list -->
                            <ul>
                                <li v-for="(link, index) in exploreList.footerLinks" :key="index">
                                    <a :href="link.url">
                                        {{ link.text }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="col">
                            <div class="title">
                                <h4></h4>
                            </div>
                            <!-- undefined-link-list -->
                            <ul>
                                <li v-for="(link,index) in contactList.footerLinks" :key="index">
                                    <a :href="link.url">
                                        {{ link.text }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col">
                            <div class="title">
                                <h4>{{ infoList.title }}</h4>
                            </div>
                            
                            <!-- info-link-list -->
                            <ul>
                                <li v-for="(link, index) in infoList.footerLinks" :key="index">
                                    <a :href="link.url">
                                        {{ link.text }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- footer-bottom -->
        <div class="footer_bottom">
            <div class="text-center">
                <span>&copy; 2020 maxcoach.all rights reserved</span>
            </div>

            <div class="to_top_button">
                <font-awesome-icon icon="fa-solid fa-arrow-down-long" />
            </div>
        </div>
    </footer>
</template> 

<script>
export default {
    name: 'FooterComponent',
    props: {
        addressList: Object,
        brandIcons: Array,
        exploreList: Object,
        infoList: Object,
        contactList: Object,

    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

footer {
    background-color: $title_link_color;
    color: $grey_color_text;
    font-size: 12px;

    .container {
        .row {
            .col {
                .title {
                    min-height: 30px;

                    h4 {
                        font-size: 16px;
                        color: white;
                        margin-bottom: 0;
                    }
                }

                ul {
                    .contact_info {
                        font-family: $quicksand_font;
                    }
                    li {
                        line-height: 2.1;
                        a {
                            color: inherit;
                        }
                    }
                }

                .icon_list {
                    padding-top: 15px;

                    .icon_brand {
                        font-size: 21px;
                        margin-right: 23px;
                    }
                }
            }

            .big_col {
                margin-right: 50px;
            }
        }
        
        .big_row {
            padding-top: 60px;
        }

        .small_row {
            margin: 0 45px;
        }
    }

    // footer-bottom
    .footer_bottom {
        position: relative;
        padding: 40px 0 42px;

        span {
            text-transform: $text_capitalize;
        }

        // button
        .to_top_button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 49px;
            height: 49px;
            border-radius: 50%;
            padding: 25px;
            font-size: 18px;
            background-color: $green_color_text;
            color: white;
            transform: rotate(180deg);
            position: absolute;
            top: 30px;
            right: 25px;
        }
    }

}

</style>