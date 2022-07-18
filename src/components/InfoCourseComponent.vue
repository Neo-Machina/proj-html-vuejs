<template>
    <section>
        <div class="container">
            <div class="row row-col-4">
                <div class="col">
                    <h2>1.926</h2>
                    <div class="info_numbers">finished sessions</div>
                </div>
                <div class="col">
                    <h2>100%</h2>
                    <div class="info_numbers">satisfaction rate</div>
                </div>
                <div class="col">
                    <h2>3029+</h2>
                    <div class="info_numbers">enrolled learners</div>
                </div>
                <div class="col">
                    <h2>200</h2>
                    <div class="info_numbers">online instructors</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'InfoCourseComponent' 
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

section {
    height: 220px;

    .row {
        .col {
            text-align: center;
            position: relative;
            
            h2 {
                color: $green_color_text;
                font-family: $quicksand_font;
                font-size: 30px;
                padding-top: 120px;
                font-weight: bold;
            }

            .info_numbers {
                text-transform: $text_uppercase;
                margin-top: 12px;position: relative;
                font-size: 13px;
            }

            &::before {
                    content: "";
                    border-left: 1.5px dashed $green_color_text;
                    position: absolute;
                    top: 110px;
                    left: 0;
                    bottom: -8px;
                }

            &:last-child {
                &::after {
                    content: "";
                    border-left: 1px dashed $green_color_text;
                    position: absolute;
                    position: absolute;
                    top: 110px;
                    right: 0;
                    bottom: -8px;       
                }
            }  
        }
    }
}

</style>