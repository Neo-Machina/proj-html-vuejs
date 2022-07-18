<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h4>about me</h4>
                </div>
            </div>

            <div class="row">
                <div class="col-4 col">
                    <h2>
                        How to Be an Alpha Male: The 15 Habbits of True Alphas
                    </h2>
                </div>
                <div class="col col-right">
                    <div class="first_two_question">Want to learn how to be <span>an alpha male</span>? How to be more masculine?</div>

                    <div class="first_two_question">How to be the man you've always wanted to be?</div>

                    <p class="about_paragraph">Your goal is to show the consistency of business, core values, and customer care.
                        Punctuality, responsibility, individuality, accuracy, enthusiasm - you have to clearly 
                        explain how these qualities are applicable to your work. And the import thing is 
                        you do love what you do.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'AboutMeComponent'
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

section {
    padding-top: 90px;

    .row {
        .col {
            h4 {
                color: $green_color_text;
                text-transform: $text_uppercase;
                font-size: 12px;
                margin-bottom: 28px;
            }
        }
        
        .col-4 {

            h2 {
                font-size: 31px;
                font-family: $new_roman_font;
                line-height: 1.4;
            }
        }

        .col-right {
            font-size: 13px;
            padding-left: 155px;

            .first_two_question {
                font-weight: bold;
                font-size: 14px;
                line-height: 25px;

                span {
                    color: $green_color_text;
                };
            }

            .about_paragraph {
                padding-top: 15px;
            }
        }
    }
}
</style>