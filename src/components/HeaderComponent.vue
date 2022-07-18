<template>
    <header>
        <div class="container">
            <!-- nav -->
            <nav class="row align-items-center">
                <div class="col">
                    <img src="../assets/images/dark-logo.png" alt="logo">
                </div>
                
                <!-- links-web-page -->
                <div class="col">
                    <ul class="nav_links d-flex justify-content-between">
                        <li v-for="(link,index) in headerNav" :key="index"
                            class="d-flex align-items-center"    >
                            <a :href="link.url">
                                {{ link.text }}
                            </a>
                            
                            <font-awesome-icon class="angle_down_icon" icon="fa-solid fa-angle-down" />
                        </li>
                    </ul>
                </div>

                <!-- icon-links -->
                <div class="col">
                    <ul class="nav_icon-links d-flex justify-content-end">
                        <li v-for="(icon,index) in headerIcons" :key="index">
                            <a :href="icon.url">
                                <font-awesome-icon :icon="icon.icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <!-- jumbotron -->
            <section>
                <div class="row justify-content-between">
                    <div class="col-5 left-col">
                        <div class="uppercase_text">i'm wingman</div>

                        <h1>peace on earth a wonderful wish but no way</h1>

                        <p>Success isn't overnight. It's when everyday you ge a little better than the day before. It all adds up.</p>

                        <button class="my_header_btn">
                            <span>get started for free </span>
                            <font-awesome-icon class="arrow_icon" icon="fa-solid fa-arrow-right-long" />
                        </button>
                    </div>
                    <div class="col-7 right-col">
                        <img class="background_img" src="../assets/images/home-movation-shape-face.png" alt="shape_face">
                        <img class="person_img" src="../assets/images/home-movation-hero-image.png" alt="hero">
                    </div>
                </div>
            </section>
        </div>

        <!-- service-links -->
        <div class="side_menu_links">   
            <ul class="d-flex flex-column ">
                <li v-for="(icon, index) in sideIcons" :key="index">
                    <a :href="icon.url">
                        <font-awesome-icon :icon="icon.icon" />
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: {
        headerNav: Array,
        headerIcons: Array,
        sideIcons: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

header {
    background-image: url('../assets/images/background-pattern-wavify.png');
    background-color: #f7f7fd;
    position: relative;

    .container { 
        height: 100%;
        
        // nav-bar
        nav {
            height: 70px;
            .col {
                img {
                    width: 8rem;
                    
                }   
                
                // nav-links
                .nav_links {
                    li {
                        margin-left: 30px;

                        a {
                            color: $title_link_color;
                            text-transform: $text_capitalize;
                            margin-right: 5px;
                            font-size: 13px;
                        }

                        .angle_down_icon {
                            font-size: 7px;
                        }

                    }
                }

                // nav-icons-links
                .nav_icon-links{
                    li {
                        margin-left: 20px;
                        font-size: 14px;
                        
                        a {
                            color: black;
                        }
                    }
                }
            }
        }

        // jumbotron
        section {
            padding-top: 7rem;
            padding-bottom: 7rem;

            .left-col {
                .uppercase_text {
                    text-transform: $text_uppercase;
                    font-size: 13px;
                }

                h1 {
                    text-transform: $text_capitalize;
                    font-family: $new_roman_font;
                    font-size: 50px;
                    margin: 20px 0 25px 0;
                }

                p {
                    font-size: 13px;
                    margin-right: 36px;
                }

                .my_header_btn {
                    text-transform: $text_capitalize;
                    font-size: 12px;
                    padding: 10px 50px;
                    border-radius: 5px;
                    color: white;
                    background-color: #20ad96;
                    border: 1px solid #20ad96;
                    margin-top: 20px;

                    .arrow_icon {
                        margin-left: 10px;
                    }
                }
            }

            .right-col {
                position: relative;

                .background_img {
                    width: 28rem;
                    position: absolute;
                    top: 5.5rem;
                    left: 9.5rem;
                    height: calc(100% + 1.5rem);
                    object-fit: cover;
                    object-position: 0 0;
                }

                .person_img {
                    width: 420px;
                    position: absolute;
                    top: -65px;
                    left: 115px;
                    height: calc(100% + 65px + 7rem);
                    object-fit: cover;
                }
            }
        }
    }

    // side-menu-links
    .side_menu_links {
        padding: 10px 10px 0 10px;
        background-color: white;
        position: absolute;
        top: 10.5rem;
        right: 0;
        border-radius: 4px 0 0 4px;
        box-shadow: -1px 0px 10px -6px;

        ul {
            li {
                margin-bottom: 8px;

                a {
                    color: black;
                    font-size: 13px;
                }
            }
        }
    }
}
</style>