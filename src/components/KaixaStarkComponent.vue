<template>
    <section>
        <div class="container">
            <div class="row">
                <!-- left-col -->
                <div class="col col-7">
                    <div class="img_box">
                        <img class="video_poster" src="../assets/images/home-movation-video-poster-670x450.jpg" alt="movation_video">

                        <img class="youtube_icon" src="../assets/images/icon-youtube-play.png" alt="youtube_icon">      
                    </div>
                </div>

                <!-- right-col -->
                <div class="col col-5 align-self-center">
                    <div class="sentence_author">"Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them."</div>

                    <img class="wave_img" src="../assets/images/home-movation-shape-01.png" alt="wave_shape">

                    <div class="author_message">kaixa stark</div>

                    <div class="creator_name">wingman</div>
                </div>
            </div>
        </div>
    </section>
</template> 

<script>
export default {
    name:'KaixaStarkComponent'
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

section {
    padding-top: 70px;

    .row {
        // left-col
        .col-7 {
            .img_box {
                position: relative;
                width: 530px;

                .video_poster {
                    border-radius: 5px;
                    width: 530px;
                    box-shadow: 0px 20px 70px -39px;
                }

                .youtube_icon {
                    width: 75px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform:translate(- 50%, -50%);
                }
            }
        }
        // right-col
        .col-5 {
            padding: 0px 45px;

            .sentence_author {
                font-family: $new_roman_font;
                font-size: 22px;
                line-height: 1.6;
            }

            .wave_img {
                width: 24px;
                margin: 45px 0 20px;
            }

            .author_message {
                text-transform: $text_capitalize;
                font-weight: bold;
                font-size: 17px;
            }

            .creator_name {
                text-transform: $text_uppercase;
                font-size: 10px;
                margin-top: 7px;
                color: $grey_color_text;
            }
        }

    }
}
</style>