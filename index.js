gsap.registerPlugin(ScrollTrigger);
   


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".block1",
        // markers: true,
        start: "bottom 100%",
        end: "bottom 10%",
        scrub: 2,
        // pin:true
      },
    });
    tl.to(".block1", {
      height: 0,
    }).to(".jodhpur_suncity_Img", {
      scaleX: 2,
      scaleY: 2,
      opacity: 0,
    });
    tl.to(".bgImg_img", {
      scaleX: 1.1,
      scaleY: 1.1,
      filter: "grayscale(100%)",
    })

      .to(".text_p_1", {
        opacity: 1,
      })

      .to(".text_p_2", {
        opacity: 1,
      })
      .to(".text_p_2_p", {
        filter: "blur(6px)",
        scaleX: 1.5,
        scaleY: 1.5,
        opacity: 0,
      });


      
// smoother.scrollTo(".block1", true, "center center");

    // -------------

    const tz1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ctnr2_1_text_h1",

        // markers: true,

        start: "top 90%",

        end: "top 20%",

        scrub: 2,

        pin: ".ctnr2_1_img",
      },
    });

    tz1.to(".ctnr2_1_img", {
      opacity: 1,
    });

    const tz2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ctnr2_2_text_h1",

        // markers: true,

        start: "top 90%",

        end: "top 20%",

        scrub: 2,

        pin: ".ctnr2_2_img",
      },
    });

    tz2.to(".ctnr2_2_img", {
      opacity: 1,
    });

    const ctnr3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ctnr3_block2",
        markers: {
          fontSize: "25px",
          startColor: "yellow",
          endColor: "red",
          indent: 50,
        },
        markers:false,
        start: "bottom 100%",
        end: "bottom 0%",
        scrub: 1,
        pin: ".ctnr3_block1",
        pin: ".ctnr3_text",
      },
    });

    ctnr3
      .add("start")
      .to(
        ".ctnr3_block1",
        { height: "250vh", width: "250vh", scaleX: 15, scaleY: 15 },
        "start"
      )

      .to(
        ".ctnr3_text",
        { x: "-100vw", opacity: 0, scaleX: 25, scaleY: 25 },
        "start"
      );
