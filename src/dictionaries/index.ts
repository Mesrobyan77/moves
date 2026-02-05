import { p } from "framer-motion/client";

export const translations = {
  en: {
    nav: {
      home: "Home",
      catalog: "Catalog",
      pricing: "Pricing",
      help: "Help",
      nickname: "Nickname",
      about_us: "About Us",
      help_center: "Help Center",
      contacts: "Contacts",
      privacy: "Privacy Policy",
      pages: "Pages",
    },
    home: {
      hero_new: "NEW ITEMS",
      hero_season: "OF THIS SEASON",
      expected: "Expected",
      premiere: "Premiere",
      recently_updated: "Recently Updated",
      view_all: "View All",
      discover: "Discover",
    },
    pricing: {
      title: "Choose Your",
      title_accent: "Experience",
      subtitle:
        "Flexible plans designed for every movie lover. Cancel anytime.",
      basic: "Basic",
      premium: "Premium",
      cinematic: "Cinematic",
      free: "Free",
      month: "/ month",
      register: "Register",
      choose: "Choose Plan",
      features: {
        days: "7 days",
        res_720: "720p Resolution",
        res_full: "Full HD",
        res_ultra: "Ultra HD",
        availability: "Limited Availability",
        desktop: "Desktop Only",
        tv_desktop: "TV & Desktop",
        any_device: "Any Device",
        support_lim: "Limited Support",
        support_24: "24/7 Support",
        month_1: "1 Month",
        month_2: "2 Months",
      },
    },
    player: {
      server: "Server",
      season: "S",
      episode: "E",
    },
    tabs: {
      new_items: "New items",
      movies: "Movies",
      tv_shows: "TV Shows",
      anime: "Anime",
    },
    pricing_page: {
      breadcrumb_title: "Pricing plan",
      welcome_text:
        "Welcome to HotFlix movie site, the ultimate destination for all film enthusiasts. Immerse yourself in a world of captivating stories, stunning visuals, and unforgettable performances.",
      feature_1_title: "Ultra HD",
      feature_1_desc:
        "Experience movies like never before with our Ultra HD feature. Immerse yourself in stunning visuals and vibrant colors.",
      feature_2_title: "Large movie database",
      feature_2_desc:
        "Discover a vast and diverse collection of movies in our extensive database. With thousands of titles to choose from.",
      feature_3_title: "Online TV",
      feature_3_desc:
        "Expand your entertainment horizons with our Online TV. Stream live TV channels and catch up on your favorite shows.",
      feature_4_title: "Early access",
      feature_4_desc:
        "Be the first to experience the latest movies and exclusive content with our Early Access feature.",
      feature_5_title: "Airplay",
      feature_5_desc:
        "Seamlessly stream movies from your device to the big screen with Airplay integration.",
      feature_6_title: "Multi language subtitles",
      feature_6_desc:
        "Break language barriers and enjoy movies from around the world with our multi-language subtitles.",
    },
    help: {
      title: "Help Center",
      faq_title: "Frequently Asked Questions",
      cards: {
        general_title: "General Questions",
        general_desc:
          "Find answers to common questions about account management and features.",
        community_title: "Community Support",
        community_desc:
          "Join our community forums to discuss movies and get help from other users.",
        direct_title: "Direct Support",
        direct_desc:
          "Can't find what you're looking for? Contact our team directly via email.",
      },
      faqs: [
        {
          q: "How do I create an account?",
          a: "To create an account, click the 'Sign In' button at the top right, then select 'Register'. Follow the prompts to enter your email and create a password.",
        },
        {
          q: "What devices are supported?",
          a: "HotFlix is available on multiple platforms including desktop browsers, smart TVs, and mobile devices (iOS and Android).",
        },
        {
          q: "How can I cancel my subscription?",
          a: "You can cancel your subscription at any time through your Profile settings under the 'Billing' tab.",
        },
        {
          q: "Why is the video buffering?",
          a: "Buffering usually occurs due to slow internet speeds. Try lowering the video quality in the player settings or checking your connection.",
        },
      ],
    },
    about: {
      title: "About Us",
      subtitle_1: "Best Place for Movies",
      desc_1:
        "HotFlix is a leading streaming service that provides a vast library of movies, TV shows, and anime in high quality. Our mission is to make cinematic entertainment accessible to everyone, anywhere.",
      desc_2:
        "We constantly update our database to ensure you have access to the latest premieres and all-time classics with multi-language support.",
      stats: { movies: "Movies", episodes: "Episodes", countries: "Countries" },
      how_it_works: "How it works?",
      steps: {
        step_1_title: "Create an account",
        step_1_desc:
          "Sign up in seconds to start your journey into the world of cinema.",
        step_2_title: "Choose your plan",
        step_2_desc:
          "Select the best subscription plan that fits your needs and devices.",
        step_3_title: "Enjoy HotFlix",
        step_3_desc:
          "Access thousands of movies and TV shows instantly on any device.",
      },
      features: {
        ultra_hd: "Ultra HD Quality",
        ultra_hd_desc:
          "Stunning visuals and vibrant colors for a true cinematic experience.",
        online_tv: "Online TV",
        online_tv_desc:
          "Stream live channels and your favorite shows on the go.",
        fast_loading: "Fast Loading",
        fast_loading_desc:
          "Optimized servers for smooth streaming without buffering.",
      },
    },
    contacts: {
      title: "Contacts",
      phone: "Phone",
      phone_hours: "Mon-Fri, 9am-7pm",
      email: "Email",
      email_support: "24/7 online support",
      address: "Address",
      address_detail: "21-st Avenue, NY",
      city: "New York, USA",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Your message",
        send: "Send Message",
        success: "Message sent successfully!",
      },
      follow: "Follow us:",
    },
    privacy: {
      title: "Privacy Policy",
      intro_title: "Introduction",
      intro_text:
        "Welcome to HotFlix. We are committed to protecting your personal information and your right to privacy. If you have any questions about this notice, please contact us.",
      collection_title: "Information We Collect",
      collection_text:
        "We collect personal information that you voluntarily provide to us when you register or express interest in our services.",
      data_types: {
        personal: "Personal Data",
        personal_desc: "Name, email, and contact details.",
        payment: "Payment Data",
        payment_desc: "Secure processing for purchases.",
        log: "Log Data",
        log_desc: "IP addresses, browser version, and page analytics.",
      },
      usage_title: "Usage & Purpose",
      usage_items: [
        "Facilitate account creation",
        "Administrative communications",
        "Order management",
        "Targeted advertising",
        "Enforce terms and conditions",
        "Request user feedback",
      ],
      rights_title: "Your Privacy Rights",
      rights_text:
        "In regions like the EEA, you have the right to request access, rectification, or erasure of your data. We value your control over your digital footprint.",
      contact_title: "Contact Us",
      contact_text:
        "If you have questions about this notice, reach out to our privacy officer at:",
    },
    catalog: {
      title: "Catalog",
      search_placeholder: "Search by title...",
      all_genres: "All genres",
      rating: "Rating",
      any_rating: "Any Rating",
      stars: "Stars",
      apply: "Apply",
      no_results: "No results found",
      restricted: "Restricted Content",
      adult_error: "Adult content is not permitted.",
      types: {
        movie: "Movies",
        tv: "TV Shows",
        anime: "Anime",
      },
      sort: {
        popularity: "Most Popular",
        newest: "Newest",
        oldest: "Oldest",
        rated: "Highest Rated",
      },
    },
    details: {
      genre: "Genre",
      rating: "Rating",
      release: "Release Year",
      runtime: "Running time",
      country: "Country",
      seasons: "Seasons",
      minutes: "min",
      discovery_title: "Recommendations",
      not_available: "N/A",
    },
  },
  am: {
    nav: {
      home: "Գլխավոր",
      catalog: "Կատալոգ",
      pricing: "Փաթեթներ",
      help: "Օգնություն",
      nickname: "Մականուն",
      about_us: "Մեր մասին",
      help_center: "Օգնության կենտրոն",
      contacts: "Կոնտակտներ",
      privacy: "Գաղտնիության քաղաքականություն",
      pages: "Էջեր",
    },
    home: {
      hero_new: "ՆՈՐՈՒՅԹՆԵՐ",
      hero_season: "ԱՅՍ ԵԹԵՐԱՇՐՋԱՆՈՒՄ",
      expected: "Սպասվող",
      premiere: "Պրեմիերաներ",
      recently_updated: "Վերջին թարմացումները",
      view_all: "Դիտել բոլորը",
      discover: "Բացահայտել",
    },
    pricing: {
      title: "Ընտրեք Ձեր",
      title_accent: "Փորձը",
      subtitle:
        "Ճկուն պլաններ՝ նախատեսված յուրաքանչյուր կինոսերի համար: Չեղարկեք ցանկացած պահի:",
      basic: "Բազային",
      premium: "Պրեմիում",
      cinematic: "Սինեմատիկ",
      free: "Անվճար",
      month: "/ ամիս",
      register: "Գրանցվել",
      choose: "Ընտրել",
      features: {
        days: "7 օր",
        res_720: "720p Որակ",
        res_full: "Full HD Որակ",
        res_ultra: "Ultra HD Որակ",
        availability: "Սահմանափակ հասանելիություն",
        desktop: "Միայն Համակարգչով",
        tv_desktop: "Հեռուստացույց և Համակարգիչ",
        any_device: "Ցանկացած սարք",
        support_lim: "Սահմանափակ աջակցություն",
        support_24: "24/7 Աջակցություն",
        month_1: "1 Ամիս",
        month_2: "2 Ամիս",
      },
    },
    player: {
      server: "Սերվեր",
      season: "Ս",
      episode: "Է",
    },
    tabs: {
      new_items: "Նորույթներ",
      movies: "Ֆիլմեր",
      tv_shows: "Սերիալներ",
      anime: "Անիմե",
    },
    pricing_page: {
      breadcrumb_title: "Փաթեթներ",
      welcome_text:
        "Բարի գալուստ HotFlix, լավագույն վայրը բոլոր կինոսերների համար: Ընկղմվեք գրավիչ պատմությունների և անմոռանալի կատարումների աշխարհում:",
      feature_1_title: "Ultra HD Որակ",
      feature_1_desc:
        "Դիտեք ֆիլմերն ավելի քան երբևէ Ultra HD ֆունկցիայի միջոցով: Վայելեք վառ գույները և բյուրեղյա մաքուր պատկերը:",
      feature_2_title: "Մեծ բազա",
      feature_2_desc:
        "Բացահայտեք ֆիլմերի հսկայական հավաքածու մեր բազայում: Հազարավոր անուններ սպասում են ձեզ:",
      feature_3_title: "Օնլայն TV",
      feature_3_desc:
        "Ընդլայնեք ձեր ժամանցը մեր Օնլայն TV-ի միջոցով: Դիտեք ուղիղ եթերներ և սիրված հաղորդումներ:",
      feature_4_title: "Շուտափույթ հասանելիություն",
      feature_4_desc:
        "Եղեք առաջինը, ով կդիտի նորույթները և բացառիկ բովանդակությունը մեր Early Access ֆունկցիայի միջոցով:",
      feature_5_title: "Airplay",
      feature_5_desc:
        "Անխափան հեռարձակեք ֆիլմերը ձեր սարքից դեպի մեծ էկրան՝ Airplay-ի միջոցով:",
      feature_6_title: "Բազմալեզու ենթագրեր",
      feature_6_desc:
        "Կոտրեք լեզվական պատնեշները և վայելեք ֆիլմեր ամբողջ աշխարհից մեր բազմալեզու ենթագրերի օգնությամբ:",
    },
    help: {
      title: "Օգնության կենտրոն",
      faq_title: "Հաճախ տրվող հարցեր",
      cards: {
        general_title: "Ընդհանուր հարցեր",
        general_desc:
          "Գտեք հաշվի կառավարման և հնարավորությունների վերաբերյալ ընդհանուր հարցերի պատասխանները:",
        community_title: "Համայնքի աջակցություն",
        community_desc:
          "Միացեք մեր ֆորումներին՝ քննարկելու ֆիլմերը և ստանալու օգնություն այլ օգտատերերից:",
        direct_title: "Ուղիղ կապ",
        direct_desc:
          "Չե՞ք գտնում այն, ինչ փնտրում եք: Կապվեք մեր թիմի հետ անմիջապես էլեկտրոնային փոստի միջոցով:",
      },
      faqs: [
        {
          q: "Ինչպե՞ս ստեղծել հաշիվ:",
          a: "Հաշիվ ստեղծելու համար սեղմեք վերևի աջ անկյունում գտնվող «Մուտք» նշանը, ապա ընտրեք «Գրանցվել»։ Լրացրեք ձեր տվյալները հրահանգներին համապատասխան:",
        },
        {
          q: "Ո՞ր սարքերն են աջակցվում:",
          a: "HotFlix-ը հասանելի է բոլոր հարթակներում՝ բրաուզերներում, Smart TV-ներում և բջջային սարքերում (iOS և Android):",
        },
        {
          q: "Ինչպե՞ս չեղարկել բաժանորդագրությունը:",
          a: "Դուք կարող եք չեղարկել ձեր բաժանորդագրությունը ցանկացած պահի ձեր պրոֆիլի կարգավորումների «Վճարումներ» բաժնում:",
        },
        {
          q: "Ինչո՞ւ է տեսանյութը դանդաղում:",
          a: "Դանդաղումը սովորաբար կապված է ինտերնետի արագության հետ: Փորձեք նվազեցնել որակը նվագարկչի կարգավորումներում:",
        },
      ],
    },
    about: {
      title: "Մեր մասին",
      subtitle_1: "Լավագույն վայրը ֆիլմերի համար",
      desc_1:
        "HotFlix-ը առաջատար սթրիմինգային հարթակ է, որը տրամադրում է ֆիլմերի, սերիալների և անիմեների հսկայական գրադարան՝ բարձր որակով: Մեր առաքելությունն է կինոժամանցը հասանելի դարձնել բոլորին, ամենուր:",
      desc_2:
        "Մենք անընդհատ թարմացնում ենք մեր բազան՝ ապահովելով ձեզ նորագույն պրեմիերաներով և դասական ֆիլմերով՝ բազմալեզու աջակցությամբ:",
      stats: { movies: "Ֆիլմեր", episodes: "Սերիաներ", countries: "Երկրներ" },
      how_it_works: "Ինչպե՞ս է այն աշխատում",
      steps: {
        step_1_title: "Ստեղծեք հաշիվ",
        step_1_desc:
          "Գրանցվեք վայրկյանների ընթացքում և սկսեք ձեր ճանապարհորդությունը կինոաշխարհում:",
        step_2_title: "Ընտրեք փաթեթը",
        step_2_desc:
          "Ընտրեք ձեր սարքերին և պահանջներին համապատասխան լավագույն բաժանորդագրությունը:",
        step_3_title: "Վայելեք HotFlix-ը",
        step_3_desc:
          "Ստացեք ակնթարթային հասանելիություն հազարավոր ֆիլմերին ցանկացած սարքով:",
      },
      features: {
        ultra_hd: "Ultra HD Որակ",
        ultra_hd_desc:
          "Ցնցող վիզուալներ և վառ գույներ՝ իրական կինոթատրոնի զգացողության համար:",
        online_tv: "Օնլայն TV",
        online_tv_desc:
          "Դիտեք ուղիղ եթերներ և ձեր սիրած հաղորդումները ցանկացած վայրում:",
        fast_loading: "Արագ բեռնում",
        fast_loading_desc:
          "Օպտիմալացված սերվերներ՝ առանց ընդհատումների դիտելու համար:",
      },
    },
    contacts: {
      title: "Կոնտակտներ",
      phone: "Հեռախոս",
      phone_hours: "Երկ-Ուրբ, 09:00-19:00",
      email: "Էլ. Փոստ",
      email_support: "24/7 առցանց աջակցություն",
      address: "Հասցե",
      address_detail: "21-րդ Պողոտա, NY",
      city: "Նյու Յորք, ԱՄՆ",
      form: {
        name: "Անուն",
        email: "Էլ. Փոստ",
        subject: "Վերնագիր",
        message: "Ձեր հաղորդագրությունը",
        send: "Ուղարկել",
        success: "Հաղորդագրությունը հաջողությամբ ուղարկվեց:",
      },
      follow: "Հետևեք մեզ:",
    },
    privacy: {
      title: "Գաղտնիության քաղաքականություն",
      intro_title: "Ներածություն",
      intro_text:
        "Բարի գալուստ HotFlix: Մենք պարտավորվում ենք պաշտպանել ձեր անձնական տվյալները և գաղտնիության իրավունքը: Եթե ունեք հարցեր այս ծանուցման վերաբերյալ, խնդրում ենք կապվել մեզ հետ:",
      collection_title: "Տեղեկություններ, որոնք մենք հավաքում ենք",
      collection_text:
        "Մենք հավաքում ենք անձնական տվյալներ, որոնք դուք կամավոր տրամադրում եք մեզ գրանցվելիս կամ մեր ծառայություններով հետաքրքրվելիս:",
      data_types: {
        personal: "Անձնական տվյալներ",
        personal_desc: "Անուն, էլ. փոստ և կոնտակտային տվյալներ:",
        payment: "Վճարային տվյալներ",
        payment_desc: "Գնումների անվտանգ մշակում:",
        log: "Տեխնիկական տվյալներ",
        log_desc: "IP հասցեներ, բրաուզերի տարբերակ և վերլուծություն:",
      },
      usage_title: "Օգտագործում և նպատակ",
      usage_items: [
        "Հաշվի ստեղծման հեշտացում",
        "Վարչական հաղորդակցություն",
        "Պատվերների կառավարում",
        "Թիրախային գովազդ",
        "Պայմանների կիրառում",
        "Օգտատերերի հետադարձ կապ",
      ],
      rights_title: "Ձեր գաղտնիության իրավունքները",
      rights_text:
        "Որոշ տարածաշրջաններում (օրինակ՝ ԵՏԳ) դուք իրավունք ունեք պահանջել ձեր տվյալների հասանելիություն, ուղղում կամ ջնջում:",
      contact_title: "Կապ մեզ հետ",
      contact_text:
        "Եթե ունեք հարցեր այս ծանուցման վերաբերյալ, դիմեք մեր գաղտնիության հարցերով մասնագետին.",
    },
    catalog: {
      title: "Կատալոգ",
      search_placeholder: "Փնտրել ըստ վերնագրի...",
      all_genres: "Բոլոր ժանրերը",
      rating: "Վարկանիշ",
      any_rating: "Ցանկացած",
      stars: "Աստղ",
      apply: "Կիրառել",
      no_results: "Արդյունք չի գտնվել",
      restricted: "Արգելված բովանդակություն",
      adult_error: "Մեծահասակների բովանդակությունը թույլատրված չէ:",
      types: {
        movie: "Ֆիլմեր",
        tv: "Սերիալներ",
        anime: "Անիմե",
      },
      sort: {
        popularity: "Հանրաճանաչ",
        newest: "Նորագույն",
        oldest: "Հնագույն",
        rated: "Բարձր վարկանիշ",
      },
    },
    details: {
      genre: "Ժանր",
      rating: "Վարկանիշ",
      release: "Թողարկման տարեթիվ",
      runtime: "Տևողություն",
      country: "Երկիր",
      seasons: "Եթերաշրջան",
      minutes: "րոպե",
      discovery_title: "Առաջարկվող ֆիլմեր",
      not_available: "Առկա չէ",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      catalog: "Каталог",
      pricing: "Тарифы",
      help: "Помощь",
      nickname: "Никнейм",
      about_us: "О нас",
      help_center: "Центр помощи",
      contacts: "Контакты",
      privacy: "Политика конфиденциальности",
      pages: "Страницы",
    },
    home: {
      hero_new: "НОВИНКИ",
      hero_season: "ЭТОГО СЕЗОНА",
      expected: "Ожидаемые",
      premiere: "Премьеры",
      recently_updated: "Недавно обновленные",
      view_all: "Смотреть все",
      discover: "Открытия",
    },
    pricing: {
      title: "Выбери свой",
      title_accent: "Опыт",
      subtitle:
        "Гибкие тарифы для каждого любителя кино. Отмена в любое время.",
      basic: "Базовый",
      premium: "Премиум",
      cinematic: "Синематик",
      free: "Бесплатно",
      month: "/ мес",
      register: "Регистрация",
      choose: "Выбрать тариф",
      features: {
        days: "7 дней",
        res_720: "720p Разрешение",
        res_full: "Full HD",
        res_ultra: "Ultra HD",
        availability: "Ограниченный доступ",
        desktop: "Только ПК",
        tv_desktop: "ТВ и ПК",
        any_device: "Любое устройство",
        support_lim: "Ограниченная поддержка",
        support_24: "Поддержка 24/7",
        month_1: "1 Месяц",
        month_2: "2 Месяца",
      },
    },
    player: {
      server: "Сервер",
      season: "С",
      episode: "С",
    },
    tabs: {
      new_items: "Новинки",
      movies: "Фильмы",
      tv_shows: "Сериалы",
      anime: "Аниме",
    },
    pricing_page: {
      breadcrumb_title: "Тарифные планы",
      welcome_text:
        "Добро пожаловать на HotFlix, идеальное место для всех любителей кино. Погрузитесь в мир захватывающих историй и незабываемых кадров.",
      feature_1_title: "Ultra HD Качество",
      feature_1_desc:
        "Смотрите фильмы как никогда раньше с функцией Ultra HD. Погрузитесь в потрясающий визуал и яркие цвета.",
      feature_2_title: "Огромная база",
      feature_2_desc:
        "Откройте для себя огромную коллекцию фильмов в нашей базе. Тысячи названий на любой вкус.",
      feature_3_title: "Онлайн ТВ",
      feature_3_desc:
        "Расширьте свои горизонты с нашим онлайн-ТВ. Смотрите прямые каналы и любимые шоу.",
      feature_4_title: "Ранний доступ",
      feature_4_desc:
        "Будьте первыми, кто увидит новинки и эксклюзивный контент с нашей функцией раннего доступа.",
      feature_5_title: "Airplay",
      feature_5_desc:
        "Транслируйте фильмы со своего устройства на большой экран с помощью интеграции Airplay.",
      feature_6_title: "Многоязычные субтитры",
      feature_6_desc:
        "Разрушьте языковые барьеры и наслаждайтесь фильмами со всего мира с нашими субтитрами.",
    },
    help: {
      title: "Центр поддержки",
      faq_title: "Часто задаваемые вопросы",
      cards: {
        general_title: "Общие вопросы",
        general_desc:
          "Найдите ответы на распространенные вопросы об управлении аккаунтом и функциях.",
        community_title: "Поддержка сообщества",
        community_desc:
          "Присоединяйтесь к нашим форумам, чтобы обсуждать фильмы и получать помощь от других пользователей.",
        direct_title: "Прямая поддержка",
        direct_desc:
          "Не нашли то, что искали? Свяжитесь с нашей командой напрямую по электронной почте.",
      },
      faqs: [
        {
          q: "Как создать аккаунт?",
          a: "Чтобы создать аккаунт, нажмите кнопку «Войти» в правом верхнем углу, затем выберите «Регистрация». Следуйте инструкциям.",
        },
        {
          q: "Какие устройства поддерживаются?",
          a: "HotFlix доступен на ПК, Smart TV, а также на мобильных устройствах (iOS и Android).",
        },
        {
          q: "Как отменить подписку?",
          a: "Вы можете отменить подписку в любое время в настройках профиля во вкладке «Оплата».",
        },
        {
          q: "Почему видео тормозит?",
          a: "Буферизация обычно возникает из-за низкой скорости интернета. Попробуйте снизить качество видео в плеере.",
        },
      ],
    },
    about: {
      title: "О нас",
      subtitle_1: "Лучшее место для кино",
      desc_1:
        "HotFlix — ведущий стриминговый сервис, предоставляющий огромную библиотеку фильмов, сериалов и аниме в высоком качестве.",
      desc_2:
        "Мы постоянно обновляем нашу базу, чтобы вы имели доступ к последним премьерам и классике мирового кино.",
      stats: { movies: "Фильмов", episodes: "Серий", countries: "Стран" },
      how_it_works: "Как это работает?",
      steps: {
        step_1_title: "Создайте аккаунт",
        step_1_desc:
          "Зарегистрируйтесь за считанные секунды и начните свое путешествие.",
        step_2_title: "Выберите тариф",
        step_2_desc:
          "Выберите лучший план подписки, подходящий для ваших устройств.",
        step_3_title: "Наслаждайтесь HotFlix",
        step_3_desc:
          "Мгновенный доступ к тысячам фильмов и шоу на любом устройстве.",
      },
      features: {
        ultra_hd: "Ultra HD Качество",
        ultra_hd_desc:
          "Потрясающий визуал и яркие цвета для настоящего киноопыта.",
        online_tv: "Онлайн ТВ",
        online_tv_desc: "Смотрите прямые каналы и любимые шоу где угодно.",
        fast_loading: "Быстрая загрузка",
        fast_loading_desc:
          "Оптимизированные серверы для плавного стриминга без задержек.",
      },
    },
    contacts: {
      title: "Контакты",
      phone: "Телефон",
      phone_hours: "Пн-Пт, 9:00-19:00",
      email: "Email",
      email_support: "24/7 онлайн поддержка",
      address: "Адрес",
      address_detail: "21-я Авеню, NY",
      city: "Нью-Йорк, США",
      form: {
        name: "Имя",
        email: "Email",
        subject: "Тема",
        message: "Ваше сообщение",
        send: "Отправить",
        success: "Сообщение успешно отправлено!",
      },
      follow: "Мы в соцсетях:",
    },
    privacy: {
      title: "Политика конфиденциальности",
      intro_title: "Введение",
      intro_text:
        "Добро пожаловать в HotFlix. Мы стремимся защищать вашу личную информацию и ваше право на конфиденциальность. Если у вас есть вопросы, свяжитесь с нами.",
      collection_title: "Информация, которую мы собираем",
      collection_text:
        "Мы собираем личную информацию, которую вы добровольно предоставляете нам при регистрации или проявлении интереса к сервису.",
      data_types: {
        personal: "Личные данные",
        personal_desc: "Имя, email и контактные данные.",
        payment: "Платежные данные",
        payment_desc: "Безопасная обработка покупок.",
        log: "Лог-данные",
        log_desc: "IP-адреса, версия браузера и аналитика страниц.",
      },
      usage_title: "Использование и цели",
      usage_items: [
        "Облегчение создания аккаунта",
        "Административные сообщения",
        "Управление заказами",
        "Целевая реклама",
        "Соблюдение условий",
        "Запрос отзывов пользователей",
      ],
      rights_title: "Ваши права на конфиденциальность",
      rights_text:
        "В таких регионах, как ЕЭЗ, вы имеете право запрашивать доступ, исправление или удаление ваших данных.",
      contact_title: "Связаться с нами",
      contact_text:
        "Если у вас есть вопросы по поводу данного уведомления, свяжитесь с нами по адресу:",
    },
    catalog: {
      title: "Каталог",
      search_placeholder: "Поиск по названию...",
      all_genres: "Все жанры",
      rating: "Рейтинг",
      any_rating: "Любой рейтинг",
      stars: "Звезд",
      apply: "Применить",
      no_results: "Ничего не найдено",
      restricted: "Ограниченный контент",
      adult_error: "Контент для взрослых не допускается.",
      types: {
        movie: "Фильмы",
        tv: "Сериалы",
        anime: "Аниме",
      },
      sort: {
        popularity: "Популярные",
        newest: "Новинки",
        oldest: "Старые",
        rated: " Высокий рейтинг",
      },
    },
    details: {
      genre: "Жанр",
      rating: "Рейтинг",
      release: "Год выпуска",
      runtime: "Длительность",
      country: "Страна",
      seasons: "Сезонов",
      minutes: "мин",
      discovery_title: "Рекомендации",
      not_available: "Н/Д",
    },
  },
};
