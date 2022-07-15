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
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                    </ul>
                </div>

                <!-- icon-links -->
                <div class="col">
                    <ul class="nav_icon-links d-flex justify-content-end">
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style lang="scss" scoped>
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
                }

                .nav_icon-links{
                    li {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
}
</style>