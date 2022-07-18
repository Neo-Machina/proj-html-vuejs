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
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: {
        headerNav: Array,
        headerIcons: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

header {
    height: 70px;
    background-color: lightblue;

    .container { 
        height: 100%;

        nav {
            height: 100%;
            .col {
                img {
                    width: 8rem;
                    
                }   
                
                .nav_links {
                    padding-left: 0;

                    li {
                        margin-left: 30px;

                        a {
                            color: $title_link_color;
                            text-transform: $text_capitalize;
                            margin-right: 5px;
                            font-size: 14px;
                        }

                        .angle_down_icon {
                            font-size: 8px;
                        }

                    }
                }

                .nav_icon-links{
                    li {
                        margin-left: 20px;
                        
                        a {
                            color: black;
                        }
                    }
                }
            }
        }
    }
}
</style>