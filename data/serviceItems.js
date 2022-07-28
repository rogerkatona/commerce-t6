const serviceItems = [
    {
        id:0,
        featuredID:0,
        type:"service",
        subtype:"ux-design",
        number:"01",
        featured:"true",
        featuredHREF:"/services",
        featuredURL:"/ux  design services",
        featuredHeader:"UX Design Service",
        featuredButtonLabel:"See All UX Services",
        date:"2021-08-10",
        title: "Plan and conduct user research",
        description: "The purpose of user research is to evaluate user behaviors, needs, and motivations that use your digital property.  This understanding is achieved by using qualitative and quantitative methods such as interviews, surveys, and other methods.  User research is best when it’s conducted quickly and limits the scope of testing to a specific task, or a single portion of a larger process.  ",
        src: '/image/service-02.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop03-abstract.pdf',
    },
    {
        id:1,
        featuredID:0,
        type:"service",
        subtype:"ux-design",
        number:"02",
        featured:"false",
        featuredHREF:"/services",
        featuredURL:"/ design services",
        featuredHeader:"Design Service",
        featuredButtonLabel:"See All Design Services",
        date:"2021-08-10",
        title: "Defining your digital properties' information architecture (IA)",
        description: "At the highest level Information Architecture is the structural design of your digital property.  It is a combination of organization, labeling, search, and navigation systems. Organization is accomplished by grouping the smallest “atoms” of information into meaningful and distinct categories, labeling is figuring out what to call and how to navigation those categories.",
        src: '/image/service-03.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop03-abstract.pdf',
    },
    {
        id:2,
        featuredID:0,
        type:"service",
        subtype:"ux-design",
        number:"03",
        featured:"false",
        featuredHREF:"/services",
        featuredURL:"/ design services",
        featuredHeader:"Design Service",
        featuredButtonLabel:"See All Design Services",
        date:"2021-08-10",
        title: "A thoughtful design approach",
        description: "Design is never in a vacuum.  Introducing a new feature or process into an existing digital property requires a thoughtful understanding of how users currently navigate and complete tasks.  This means making every effort to add a variant to an existing component vs creating a new one, or slightly adjusting an established workflow pattern instead of creating a new pattern that would have to coexist with the current one. This approach shows respect and an appreciation for the hard work it took to get your digital property to this point.",
        src: '/image/service-06.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop03-abstract.pdf',
    },
    {
        id:21,
        featuredID:1,
        type:"service",
        subtype:"ux-design",
        number:"04",
        featured:"false",
        featuredHREF:"/services",
        featuredURL:"/ design services",
        featuredHeader:"Design Service",
        featuredButtonLabel:"See All Design Services",
        date:"2021-08-10",
        title: "Conduct usability testing",
        description: "Usability testing is evaluating your digital property by testing it with representative users.  It is a process to determine how well it meets specific usability criteria, and ensures your digital property is easy to learn and use, is satisfying to use, and it provides highly valued functionality to the targeted users.",
        src: '/image/service-05.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop03-abstract.pdf',
    },
    {
        id:1,
        featuredID:1,
        type:"service",
        subtype:"ux-analysis",
        number:"01",
        featured:"false",
        featuredHREF:"/workshops",
        featuredURL:"/ workshops",
        featuredHeader:"Featured Workshop",
        featuredButtonLabel:"See All Workshops",
        date:"2021-08-10",
        title: "UX Evaluation",
        description: "A User Experience (UX) Audit will provide you with clear direction for improving the User Interface (UI) of your digital properties based on UX best practices. It’s a close examination of your digital properties from the perspective of the people who use them.",
        src: '/image/service-01.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop04-abstract.pdf',
    },
    {
        id:2,
        type:"service",
        subtype:"ux-analysis",
        number:"02",
        featured:"false",
        featuredHREF:"/workshops",
        featuredURL:"/ workshops",
        featuredHeader:"Featured Workshop",
        featuredButtonLabel:"See All Workshops",
        date:"2021-08-10",
        title: "Interpret data and qualitative feedback",
        description: "As part of the overall strategy for increasing the reach of the product, UX Analysts have the critical job of improving the adoption and engagement rate of consumers by studying the numbers. By analyzing client retention and revenue trends, UX analysts can determine the best way to create realistic client goals and then achieve them.",
        src: '/image/service-04.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop04-abstract.pdf',
    },
    {
        id:3,
        featuredID:1,
        type:"workshop",
        subtype:"in-person",
        number:"01",
        featured:"true",
        featuredHREF:"/workshops",
        featuredURL:"/ workshops",
        featuredHeader:"featured workshop",
        featuredButtonLabel:"See All Workshops",
        date:"2021-08-10",
        title: "UX Leadership: Elevate your team in innovative and inspiring ways",
        description: "In this 90 minute workshop, Roger will take UX leadership on a journey to discover proven methods to propel your UX team forward by sharing your design process to organizational leadership in ways that inspire and enlighten.",
        src: '/image/workshop-01.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop01-abstract.pdf',
    },
    {
        id:32,
        featuredID:1,
        type:"workshop",
        subtype:"in-person",
        number:"02",
        featured:"false",
        featuredHREF:"/workshops",
        featuredURL:"/ workshops",
        featuredHeader:"workshop",
        featuredButtonLabel:"See All Workshops",
        date:"2021-08-10",
        title: "UX Team Members:  Increase your value to your organization and career at precisely the same time",
        description: "We are not all the same. In this 90 minute workshop, Roger will discover what makes you uniquely you, and help you develop a plan for growing the skills that will propel your career and position within your organization forward at an accelerated rate.",
        src: '/image/workshop-02.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop01-abstract.pdf',
    },
    {
        id:4,
        type:"workshop",
        subtype:"virtual",
        number:"01",
        featured:"false",
        featuredHREF:"/workshops",
        featuredURL:"/ workshops",
        featuredHeader:"Featured workshop",
        featuredButtonLabel:"See All Workshops",
        date:"2021-08-10",
        title: "UX Team Members:  Increase your value to your organization and career at precisely the same time",
        description: "We are not all the same. In this 90 minute workshop, Roger will discover what makes you uniquely you, and help you develop a plan for growing the skills that will propel your career and position within your organization forward at an accelerated rate.",
        src: '/image/workshop-02.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop01-abstract.pdf',
    },
    {
        id:5,
        featuredID:0,
        type:"about",
        number:"02",
        featured:"true",
        featuredHREF:"/about",
        featuredURL:"/ about",
        featuredButtonLabel:"Continue Reading",
        featuredHeader:"About",
        date:"2021-08-10",
        title: "Roger Katona is inspired working with many UX experts and teams.",
        description: "Driven to help organizations become more aware of the incredible talent on their UX team.  So much effort and work can easily go unnoticed when the finished design seems straightforward and obvious. Designing something well is difficult.  Let's share our story.",
        src: '/image/about-02.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop01-abstract.pdf',
    },
    {
        id:6,
        featuredID:2,
        type:"client",
        number:"01",
        featured:"true",
        featuredOnPage:"true",
        featuredHREF:"/clients",
        featuredURL:"/ Clients",
        featuredButtonLabel:"See All Clients",
        featuredHeader:"Featured Client",
        date:"2017-12-05",
        title: "McKesson - Simply Medical",
        description: "Design an eCommerce application for a subsidiary brand of McKesson Inc. Building the User Interface from the ground up by creating an Information Architecture (IA) document that defined the site structure, and workflow processes like checkout and login...",
        src: '/image/client/simply-medical/banner-sm.png',
        isButtonActive:'true',
        buttonText:'Continue Reading',
        buttonHref:'/posts/simply-medical',
    },

];

export default serviceItems