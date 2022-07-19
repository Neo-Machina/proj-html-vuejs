<template>
    <section>
        <div class="row">
            <!-- left-col -->
            <div class="col left-col d-flex align-items-center justify-content-center">
                <div class="testimonial_card">
                    <div class="title">real stories</div>

                    <div class="text_story">I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from my syllabus. Great study portal for people like me.</div>

                    <div class="d-flex justify-content-center">
                        <img class="avatar_testimonial" src="../assets/images/testimonial-avata-02.jpg" alt="testimonial">
                    </div>

                    <div class="avatar_name">mina hollace</div>

                    <div class="avatar_occupation">/ freelancer</div>
                </div>
            </div>

            <!-- right-col -->
            <div class="col right-col">
                <img src="../assets/images/home-movation-testimonial-image.jpg" alt="testimonial">
            </div>
            
            <!-- circle-stories-selector -->
            <div class="stories_selector">
                <div>
                    <div class="grey_selector text-center">
                        <font-awesome-icon icon="fa-solid fa-caret-up" />
                    </div>
                    <div>
                        1/4
                    </div>
                    <div class="grey_selector text-center">
                       <font-awesome-icon icon="fa-solid fa-caret-down" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'RealStoriesComponent'
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

section {
    .row {
        --bs-gutter-x: 0;
        position: relative;

        .left-col{
            background-image: url('../assets/images/background-pattern-wavify.png');
            background-color: #f7f7fd;
            text-align: center;

            .testimonial_card {
                width: 50%;

                .title {
                    text-transform: $text_uppercase;
                    color: $green_color_text;
                    font-size: $main_font_size;
                }

                .text_story {
                    font-size: 20px;
                    padding: 50px 0;
                }

                .avatar_testimonial {
                    width: 68px;
                    border-radius: 50%;
                }

                .avatar_name {
                    font-size: 18px;
                    text-transform: $text_capitalize;
                    padding: 25px 0 15px;
                }

                .avatar_occupation {
                    text-transform: $text_capitalize;
                    font-size: 12px;
                }
            }
        }
        
        // circle-stories-selector
        .stories_selector {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 77px;
            height: 77px;
            border-radius: 50%;
            font-size: 14px;
            background-color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate( -50%, -50%);
            font-family: $quicksand_font;

            .grey_selector {
                color: #d5d5d5;
            }
        }
    }
}

</style>