function showTour(){
    introJs().setOptions({
    tooltipClass: 'customTooltip',
    nextLabel: 'بعدی',
    prevLabel: 'قبلی',
    doneLabel: 'اتمام',
    showProgress: false,
    steps: [{
        element: document.querySelector('#start'),
        intro: "در این پنل می‌توانید با تعیین کشور، به تحلیل‌های گرافی اسناد آن کشور بپردازید."
    },
        {
        element: document.querySelector('#country'),
        intro: "مجموعه خبر مورد نظر خود را از این قسمت انتخاب نمایید."
    },
        {
        element: document.querySelector('#GraphType'),
        intro: "نوع گراف مورد نظر خود را انتخاب نمایید. در حال حاضر تنها گراف ارجاعات طراحی شده است. در آینده انواع مختلفی از گراف‌ها اضافه خواهند شد. "
    }, {
        element: document.querySelector('#MinimumSimilarity'),
        intro: "با تعیین شباهت، تنها یال‌هایی نمایش داده می شوند که وزن آن‌ها از حد آستانه تعیین شده، بیشتر باشد."
    }, {
        element: document.querySelector('#constraints_setting'),
        intro: "با کلیک کردن بر روی دکمه‌ی تنظیمات پیشرفته، امکان جستجو بر روی گراف فراهم می‌شود."
    },{
        element: document.querySelector('#graph_show'),
        intro: "با کلیک کردن بر روی این دکمه، گراف مورد نظر شما نمایش داده می‌شود."
    }, {
        element: document.querySelector('#similarity_chart_container'),
        intro: "تعداد یال‌ها، به ازای هر مقدارآستانه نشان داده شده است. شما می‌توانید با دوبار کلیک کردن بر روی ستون‌ها، گراف متناظر را در پایین مشاهده نمایید."
    }, {
        element: document.querySelector('#SourceMainDiv'),
        intro: " در این بخش می‌توانید محدودیت‌هایی از جنس موضوع، نوع خبر و یا انتخاب یک خبر خاص برای «گره‌های مبدا» تعیین کنید."
    }, {
        element: document.querySelector('#DestinationMainDiv'),
        intro: " در این بخش می‌توانید محدودیت‌هایی از جنس موضوع، نوع خبر و یا انتخاب یک خبر خاص برای «گره‌های مقصد» تعیین کنید."
    }
    , {
        element: document.querySelector('#advanced_view_tab'),
        intro: "با توجه به کشور انتخاب شده و حد آستانه مشخص شده، گراف ارجاعات متناظر در زیر نمایش داده می‌شود."

    },{
        element: document.querySelector('#original_pane'),
        intro: " در این تب گراف ارجاعات با توجه به خبر رنگ آمیزی می‌شود."

    }]
}).start();


}
