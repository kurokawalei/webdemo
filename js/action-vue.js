import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';

const app = createApp({

    data() {
        return {
            list: [],
            type: "全部",
            showMobileMenu: false
            
        }
    },
    methods: {

        getList(type) {

            const url = 'js/work.json';

            if (type == "全部") {

                axios.get(url)
                    .then((res) => {
                        this.list = res.data;

                    })
                    .catch((er) => {
                        console.log(er);
                    })

            } else {
             
                axios.get(url)
                    .then((res) => {

                        let fAry = res.data.filter((item, i) => {
                            return item.type == type;
                        })
                        this.list = fAry;

                    })
                    .catch((er) => {
                        console.log(er);
                    })

            }



        },

        start() {
            let warp = this.$refs.warp;
            let load = this.$refs.load;
            setTimeout(() => {

                warp.classList.add('animate__animated');
                warp.classList.add('animate__fadeIn');
                load.style.display = 'none';

            }, 1500);

        },

        //篩選
        selectType() {
            let typeStyle = `${this.type}`;
            this.getList(typeStyle);
        },
        //滾動
        scrollFn() {
            let document_height = $(document).height();
            let scroll_so_far = $(window).scrollTop();
            let window_height = $(window).height();
            let max_scroll = document_height - window_height;
            let scroll_percentage = scroll_so_far / (max_scroll / 100);
            $('#loadingline').width(scroll_percentage + '%');
        }

    },
    mounted() {

        this.start();
        this.getList('全部');


        //wow
        new WOW().init();

        $(window).scroll(() => {
            this.scrollFn();
        });

        $(window).resize(() => {
            this.scrollFn();
        });



    }


})

app.mount('#app');
