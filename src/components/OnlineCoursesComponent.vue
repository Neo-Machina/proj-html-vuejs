<template>
    <section>
        <div class="container">
            <div class="text-center">
                <div class="journey_line">begin your journey at maxcoach</div>

                <h2>latest <span>online courses</span></h2>
            </div>

            <div class="row">
                <!-- first-col -->
                <div class="col">
                    <img src="../assets/images/motivation-course-06-480x298.jpg" alt="successful">

                    <div class="text_container">
                        <div class="content_course">
                            <div class="course_price">
                                <span>&dollar;30</span>.00
                            </div>

                            <h4>How to Successful: Create A Growth Mindset For Success</h4>

                            <div class="info_course">
                                <font-awesome-icon icon="fa-regular fa-file-lines" />
                                <span>3 Lessons</span>

                                <font-awesome-icon icon="fa-regular fa-user" />
                                <span>50 Students</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- second-col -->
                <div class="col">
                    <img src="../assets/images/motivation-course-05-480x298.jpg" alt="successful">

                    <div class="text_container">
                        <div class="content_course">
                            <div class="course_price">
                                <span>&dollar;30</span>.00
                            </div>

                            <h4>How to Build Confidence in Your Abilities</h4>

                            <div class="info_course">
                                <font-awesome-icon icon="fa-regular fa-file-lines" />
                                <span>1 Lesson</span>

                                <font-awesome-icon icon="fa-regular fa-user" />
                                <span>50 Students</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- third-col -->
                <div class="col">
                    <img src="../assets/images/motivation-course-04-480x298.jpg" alt="successful">

                    <div class="text_container">
                        <div class="content_course">
                            <div class="course_price">
                                <span>&dollar;20</span>.00
                            </div>

                            <h4>Productivity Machine - Focus in a Distracted World</h4>

                            <div class="info_course">
                                <font-awesome-icon icon="fa-regular fa-file-lines" />
                                <span>5 Lessons</span>

                                <font-awesome-icon icon="fa-regular fa-user" />
                                <span>50 Students</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- forth-col -->
                <div class="col">
                    <img src="../assets/images/motivation-course-03-480x298.jpg" alt="successful">

                    <div class="text_container">
                        <div class="content_course">
                            <div class="course_price">
                                <span>&dollar;20</span>.00
                            </div>

                            <h4>Effective Time Management Mastery - Complete Guide</h4>

                            <div class="info_course">
                                <font-awesome-icon icon="fa-regular fa-file-lines" />
                                <span>18 Lessons</span>

                                <font-awesome-icon icon="fa-regular fa-user" />
                                <span>50 Students</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fifth-col -->
                <div class="col">
                    <img src="../assets/images/motivation-course-02-480x298.jpg" alt="successful">

                    <div class="text_container">
                        <div class="content_course">
                            <div class="course_price">
                                <span>&dollar;25</span>.99
                            </div>

                            <h4>Body Language Secrets for Entrepreneurs</h4>

                            <div class="info_course">
                                <font-awesome-icon icon="fa-regular fa-file-lines" />
                                <span>19 Lessons</span>

                                <font-awesome-icon icon="fa-regular fa-user" />
                                <span>50 Students</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sixth-col -->
                <div class="col">
                    <img src="../assets/images/motivation-course-01-480x298.jpg" alt="successful">

                    <div class="text_container">
                        <div class="content_course">
                            <div class="course_price">
                                <span>&dollar;19</span>.99
                            </div>

                            <h4>Management Skills: The Science of Leadership</h4>

                            <div class="info_course">
                                <font-awesome-icon icon="fa-regular fa-file-lines" />
                                <span>17 Lessons</span>

                                <font-awesome-icon icon="fa-regular fa-user" />
                                <span>50 Students</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- button -->
            <div class="d-flex justify-content-center">
                <button class="my_green_btn">
                    <span>View all courses</span>
                    <font-awesome-icon class="arrow_icon" icon="fa-solid fa-arrow-right-long" />
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'OnlineCoursesComponent'
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
section {
    padding-top: 155px;

    .container {
        .journey_line {
            text-transform: $text_uppercase;
            color: $grey_color_text;
            font-size: $main_font_size;
        }

        h2 {
            text-transform: $text_capitalize;
            font-family: $new_roman_font;
            font-size: 42px;
            padding: 20px 0 55px;

            span {
                color: $green_color_text;
            }
        }

        .row {
            .col {
                margin-bottom: 55px;

                img {
                    width: 290px;
                }

                .text_container {
                    width: 290px;

                    .content_course {
                        width: 235px;
                        margin: 0 auto;

                        .course_price {
                            color: $green_color_text;
                            font-weight: bold;
                            font-family: $quicksand_font;
                            margin: 22px 0 7px;

                            span {
                                font-size: 21px;
                            }
                        }

                        h4 {
                            font-size: 16px;
                            padding-bottom: 20px;
                        }

                        .info_course {
                            font-size: 11px;

                            span {
                                margin: 0px 26px 0 7px;
                                font-family: $quicksand_font;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>