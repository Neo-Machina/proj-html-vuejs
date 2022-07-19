<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="blog_updated">blog updated</div>

                    <h2>Interesting <span>articles updated</span> daily</h2>
                </div>
            </div>

            <div class="row">
                <!-- first-col -->
                <div class="col">
                    <img src="../assets/images/motivation-blog-04-480x325.jpg" alt="motivation">

                    <div class="text_container">
                        <div class="article_text">
                            <font-awesome-icon icon="fa-regular fa-calendar" />
                            <span>May 13,2020</span>
                        </div>

                        <h4>How to Stay True to Your Personal Brand</h4>

                        <div class="article_text">
                            When it comes to your business or carrer, you want ...
                        </div>
                    </div>
                </div>

                <!-- second-col -->
                <div class="col">
                    <img src="../assets/images/motivation-blog-03-480x325.jpg" alt="motivation">

                    <div class="text_container">
                        <div class="article_text">
                            <font-awesome-icon icon="fa-regular fa-calendar" />
                            <span>May 13,2020</span>
                        </div>

                        <h4>5 Vital Lessons in 5 Years of Freelancing</h4>

                        <div class="article_text">
                            Being self-employed and working from home, it's easy to get ...
                        </div>
                    </div>
                </div>
                
                <!-- third-col -->
                <div class="col">
                    <img src="../assets/images/motivation-blog-02-480x325.jpg" alt="motivation">

                    <div class="text_container">
                        <div class="article_text">
                            <font-awesome-icon icon="fa-regular fa-calendar" />
                            <span>May 13,2020</span>
                        </div>

                        <h4>11 Super Useful Tips for Small-Bussiness Owners</h4>

                        <div class="article_text">
                            Being a small-business owner poses a ton of challenges. We ...
                        </div>
                    </div>
                </div>
                
                <!-- forth-col -->
                <div class="col">
                    <img src="../assets/images/motivation-blog-01-480x325.jpg" alt="motivation">

                    <div class="text_container">
                        <div class="article_text">
                            <font-awesome-icon icon="fa-regular fa-calendar" />
                            <span>May 13,2020</span>
                        </div>

                        <h4>How to Give Yourself Grace to Start Again</h4>

                        <div class="article_text">
                            Forgive yourself for bad habits you may have started or ...
                        </div>
                    </div>
                </div>
            </div>

            <!-- button -->
            <div class="d-flex justify-content-center">
                <a class="green_link">
                    <span>view all posts</span>
                </a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'NewArticlesComponent'
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

section {
    padding-top: 120px;

    .container {
        .row {
            .col {
                .blog_updated {
                    text-transform: $text_uppercase;
                    color: $grey_color_text;
                    font-size: $main_font_size;
                }

                h2 {
                    font-family: $new_roman_font;
                    font-size: 36px;
                    padding: 20px 0 45px;

                    span {
                        color: $green_color_text;
                    }
                }

                img {
                    width: 220px;
                    border-radius: 5px;
                }

                .text_container {
                    width: 220px;

                    .article_text {
                        font-size: 11px;
                        color: $grey_color_text;
                        margin: 20px 0 10px;

                        span {
                            margin-left: 8px;
                            font-family: $quicksand_font;
                        }
                    }

                    h4 {
                        font-size: 16px;
                    }
                }
            }
        }

        .green_link {
            text-transform: $text_uppercase;
            color: $green_color_text;
            font-size: $main_font_size;
            padding-top: 25px;

            &::after {
                content: "";
                width: 100%;
                height: 1px;
                background-color: #20ad96;
                display: block;
                margin-top: 3px;
            }
        }
    }
}
</style>