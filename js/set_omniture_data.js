//console = (typeof //console === "undefined") ? {log: function(){}, error: function(){}, debug: function(){}} : //console;
if (!omniSiteCat) { var omniSiteCat = new Object(); };
omniSiteCat = {
    saleNumber: '',
    pageType: '',
    deferredPageLoad: false,
    isOnlineOnly: false,
    scPageTitle: '',
    doNotRun: false,
    genEvent: function (eventType) {
        //IE can't support an Event constructor
        try {
            return new Event(eventType);
        }
        catch (e) {
            //just swallow event until IE stuff is worked out
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(eventType, false, false, undefined);
            return evt;
        }
    },
    init: function() {
        /*       console.log('init for omniSiteCat is called');
         s.pageName = pageName;
         s.prop1 = prop1;
         s.prop2 = prop2;
         if ((typeof (STBCore) !== "undefined") && (typeof (siteCatPageTitle) !== "undefined")) {
         omniSiteCat.scPageTitle = STBCore.Util.toText(siteCatPageTitle);
         }
         if (window.location.href.indexOf("preferred-access") != -1){
         s.eVar13 = "Preferred";
         s.prop13 = "Preferred";
         }
         omniSiteCat.grabUrlPath();
         //omniSiteCat.trackMegaMenuTopLinks();
         //omniSiteCat.getMegaSubMenuLinks();
         omniSiteCat.filterPgNum();
         omniSiteCat.trackRecircHeroLinks();
         omniSiteCat.trackRecircFtrLinks();
         omniSiteCat.trackLoginLinks();
         omniSiteCat.trackCampaigns();
         */     //this.galleryClickEvt();
    },
    setOmnitureOnlineOnlyEventLoad: function(){
        //     omniSiteCat.isOnlineOnly = true;
        //    omniSiteCat.grabUrlPath();
    },
    clearCustomTrafficVars: function () {
        /*    var i;
         for (i = 1; i <= 100; i++) {
         delete s['prop'+i];
         delete s['eVar'+i];
         s.events = "";
         } */
    },
    sendOmniData: function(s) {
        /*      var s_code = s.t();
         if (s_code)
         document.write(s_code);  */
    },
    grabUrlPath: function() {
        //      var url = window.location.href + "";
        //     omniSiteCat.setOmnitureRegistration(url);
        //omniSiteCat.setOmnitureIpadRegistrationComplete(url);
        //      omniSiteCat.setOmnitureGenStats(url); //<-Must occur last
    },
    setOmnitureIpadRegistrationComplete: function(url){

    },
    //MATHIEU: IGNORE
    setOmnitureMediaEvent: function(evtType,evtCode,timePlayed){
        // var campaigns = videoCampaigns.join(" : ");
        // var campaignsTitle = campaigns + " : " + videoTitle;
        // if (evtCode != "event63") {
        // s.tl(omniSiteCat.genEvent("click"),"0","Video",{
        //     linkTrackVars: "prop11,eVar11,prop43,eVar52,prop25,eVar21,events",
        //     linkTrackEvents: "event63,event64,event65,event66,event67,event68,event69",
        //     events: evtCode,
        //     prop11: campaignsTitle,
        //     eVar11: campaignsTitle,
        //     prop43: campaigns,
        //     eVar52: campaigns,
        //     prop25: videoTopic,
        //     eVar21: videoTopic
        // });
        // }else {
        // s.tl(omniSiteCat.genEvent("click"),"0","Video",{
        //     linkTrackVars: "prop11,eVar11,prop43,eVar52,prop25,eVar21,eVar63,events",
        //     linkTrackEvents: "event63,event64,event65,event66,event67,event68,event69",
        //     events: evtCode,
        //     eVar63: timePlayed,
        //     prop11: campaignsTitle,
        //     eVar11: campaignsTitle,
        //     prop43: campaigns,
        //     eVar52: campaigns,
        //     prop25: videoTopic,
        //     eVar21: videoTopic
        // });
        // }
    },
    //MATHIEU: IGNORE
    setOmnitureHTMLVideoEvent: function(evtType, evtCode, timePlayed, campaignsTitle, campaigns, videoTopic){
        // if (evtCode != "event63") {
        // s.tl(omniSiteCat.genEvent("click"),"0","Video",{
        //     linkTrackVars: "prop11,eVar11,prop43,eVar52,prop25,eVar21,events",
        //     linkTrackEvents: "event63,event64,event65,event66,event67,event68,event69",
        //     events: evtCode,
        //     prop11: campaignsTitle,
        //     eVar11: campaignsTitle,
        //     prop43: campaigns,
        //     eVar52: campaigns,
        //     prop25: videoTopic,
        //     eVar21: videoTopic
        // });
        // }else {
        // s.tl(omniSiteCat.genEvent("click"),"0","Video",{
        //     linkTrackVars: "prop11,eVar11,prop43,eVar52,prop25,eVar21,eVar63,events",
        //     linkTrackEvents: "event63,event64,event65,event66,event67,event68,event69",
        //     events: evtCode,
        //     eVar63: timePlayed,
        //     prop11: campaignsTitle,
        //     eVar11: campaignsTitle,
        //     prop43: campaigns,
        //     eVar52: campaigns,
        //     prop25: videoTopic,
        //     eVar21: videoTopic
        // });
        // }
    },
    _augmentCrossRequestOnlineOnlyEvent: function (payload, eventNumber, clearCookie) {
        //    var newEvent;
        //    if ($.cookie('omniture_fromOnlineOnly') === "true") {
        //         newEvent = ",event"+eventNumber;
        //        payload.events += newEvent;
        //         if (payload.linkTrackEvents) {
        //             payload.linkTrackEvents += newEvent;
        //         }
        //         if (clearCookie) {
        //             $.cookie('omniture_fromOnlineOnly', null, { path: '/' });
        //          }
        //      }
    },
    //DONE
    setOmnitureRegistration: function(url) {
        // var registerArr = [{page:'register-new-account.html',pn:'Some works of art take years. Registration takes seconds.',evt:'event1'},
        //                    {page:'thank-for-registering.html',pn:'You\'re nearly there...Complete your registration',evt:'event2'},
        //                {page:'welcome-back.html',pn:'Welcome Back!',evt:'event3'},
        //                {page:'edit-preferences.html',pn:'Update your preferences',evt:'event5'},
        //                {page:'edit-preferences-login.html',pn:'Update your preferences',evt:'event5'},
        //                {page:'enjoy-sothebys.html',pn:'Your Art World. Expanded.',evt:'event6'}];

        // for(var i=0;i<registerArr.length;i++){
        //     var el = registerArr[i];
        //     if(url.indexOf(el.page)!=-1){
        //         //Old behavior
        //         s.pageName = "Registration: " +el.pn;
        //         s.prop1="registration";
        //         s.prop2="registration";
        //         s.eVar1="registration";
        //         s.eVar2="registration";
        //         if($.cookie("omniture_eVar26")!=null){
        //             s.eVar26=$.cookie("omniture_eVar26");
        //             $.cookie("omniture_evar26",null);
        //         }
        //         s.events = s.apl(s.events, el.evt, ",", 2);
        //         s.eVar26="";

        //         //Behavior overrides REPLACE THIS SECTION IN DTM
        //         if (el.page === 'register-new-account.html') {
        //             s.pageName = "Registration: Simple Registration";
        //             s.events = "event24,event1";
        //             omniSiteCat._augmentCrossRequestOnlineOnlyEvent(s, 98);
        //             s.channel = "Registration";
        //             s.eVar1 = s.prop1 = "Registration: Log In or Register";
        //             s.prop2 = s.eVar2 = "Registration: Log In or Register";
        //             s.prop10 = s.eVar10 = "No Department";
        //             s.eVar23 = $.cookie("omniture_eVar23") || "";
        //         } else if (el.page === 'thank-for-registering.html') {
        //             if ($.cookie("registrationPage") === 'transactional') {
        //                 s.pageName="Registration: Transactional Registration: Almost Done";
        //                 s.events = "event24";
        //                 s.channel = "Registration";
        //                 s.prop1 = s.eVar1 = "Registration: Transactional Registration";
        //                 s.prop2 = s.eVar2 = "Registration: Transactional Registration";
        //                 s.prop10 = s.eVar10 = "No Department";
        //             } else if ($.cookie("registrationPage") === 'simple') {
        //                 s.pageName="Registration: Simple Registration: Almost Done";
        //                 s.events = "event24,event2";
        //                 omniSiteCat._augmentCrossRequestOnlineOnlyEvent(s, 99);
        //                 s.channel = "Registration";
        //                 s.prop1 = s.eVar1 = "Registration: Log In or Register";
        //                 s.prop2 = s.eVar2 = "Registration: Log In or Register";
        //                 s.prop10 = s.eVar10 = "No Department";
        //             } else if ($.cookie("registrationPage") === 'authCode') {
        //             }
        //             $.cookie("registrationPage", null, { path: '/'});
        //         } else if (el.page === 'welcome-back.html') {
        //             s.pageName = "Registration: Welcome Back";
        //             s.events = "event24";
        //             s.channel = "Registration";
        //             s.prop1 = s.eVar1 = "Registration: Welcome Back";
        //             s.prop2 = s.eVar2 = "Registration: Welcome Back";
        //             s.prop10 = s.eVar10 = "No Department";
        //         }
        //     }
        // }
    },
    trackCampaigns: function () {

    },
    setOmnitureLoginClickEvent: function (text, isOnlineOnly) {
        //      s = s_gi(s_account);
        /*      $.cookie("omniture_eVar23", text, { path: '/' });
         $.cookie('omniture_fromOnlineOnly', (isOnlineOnly && (isOnlineOnly === 'true' || isOnlineOnly === true)), {path: '/'});
         s.tl(omniSiteCat.genEvent("click"),"0","Login", {
         linkTrackVars: "pageName,eVar23",
         pageName: s.pageName,
         eVar23: text
         }); */
    },
    setLangParam: function(url) {

    },
    saleAuction: function(sn,pt) {
        //     omniSiteCat.saleNumber = sn;
        //     omniSiteCat.pageType = pt;
    },
    _decorateNonStudioSale: function (payload, forceDecorate) {
        //      var isOnlineOnly = $('body').hasClass('online-only');
        //       if (!isOnlineOnly || forceDecorate) {
        //          payload.eVar57 = "Non-Studio Auctions";
        //     }
    },
    //DONE
    setOmnitureGenStats: function(url) {
        // console.log('setOmnitureGenStats for URL:', url);
        // //console.debug("type of: " + typeof url);
        // //console.debug(s.prop2);
        // var forcePageLoad = false;
        // if (typeof (url) === "string") {
        //     if(url.indexOf("\/ecatalogue\/") != -1) {       // Ecatalogues
        //         //console.debug("ecat");
        //         s.prop1 = s.eVar1 = "Ecatalogues: Lot Detail";
        //         //s.prop2 = s.eVar2 = "Catalogues: Catalogue";
        //         s.prop2 = s.eVar2 = "Ecatalogues";
        //         //s.channel = omniture_siteSection;
        //         //s.prop10 = omniture_contentType;
        //         if (omniture_page) {
        //             s.pageType = omniture_page;
        //         }
        //         var re = new RegExp(omniture_regexp,'g');
        //         var args = re.exec(window.location.href).toString();
        //         var argsArr = args.split(".");
        //         var pageTitle = ($('ul.breadcrumb').length > 0) ? $('ul.breadcrumb span.active').text() : "";
        //         if (argsArr && omniture_hasEvent && omniture_hasLot) {
        //             s.pageName = "Catalogues : " + omniSiteCat.saleNumber + " : " + argsArr[1] + " : Lot Detail : " + pageTitle;
        //             s.prop16 = omniSiteCat.saleNumber + " - " + argsArr[1];
        //             s.prop15 = omniSiteCat.saleNumber;
        //             s.eVar15 = s.prop15;
        //             s.eVar16 = s.prop16;
        //         }
        //         if (window.omniture_bwPageName){
        //             s.prop37 = omniture_bwPageName;
        //         }

        //         s.events = "event14";

        //         omniSiteCat._decorateNonStudioSale(s);

        //         if (omniSiteCat.deferredPageLoad) {
        //             forcePageLoad = true;
        //         } else {
        //             omniSiteCat.deferredPageLoad = true;
        //         }
        //         // RED-1493: moved locations about auctions
        //     } else if(url.indexOf("\/locations-worldwide\/") != -1) {           // Individual Location page
        //         //console.debug("ind location page");
        //         s.prop1="About";
        //         s.prop2="About: Locations";
        //         //s.prop10="About";
        //         s.prop37="About/Locations/Overview";
        //         s.eVar1="About";
        //         s.eVar2="About: Locations";
        //         //s.eVar10="About";
        //         s.pageName="About: Locations: " + $('#main-content h1.title a').text();
        //     } else if(url.indexOf("\/locations-worldwide.html") != -1) {            // Locations Listing
        //         //console.debug("location listing");
        //         s.prop1="About";
        //         s.prop2="About: Locations";
        //         //s.prop10 ="About";
        //         s.prop37="About/Locations";
        //         s.eVar1="About";
        //         s.eVar2="About: Locations";
        //         //s.eVar10="About";
        //         s.pageName="About: Locations";
        //     } else if(url.indexOf("\/auctions\/results.html") != -1) {        // Auction Results
        //         s.pageName = "Auctions: Auction Results";
        //         s.prop1 = "Auctions";
        //         s.prop2 = s.prop1 + ": Auction Results";
        //         omniSiteCat._decorateNonStudioSale(s);
        //     } else if (url.indexOf("\/auctions\/") != -1) {
        //         if (url.indexOf("lots-archive.html") != -1) {
        //             omniSiteCat.pageType = "lotarchive";
        //         }
        //         if (url.indexOf("watch-live.html") != -1) {
        //             omniSiteCat.pageType = "watchlive";
        //         }

        //         omniSiteCat._decorateNonStudioSale(s);

        //         switch (omniSiteCat.pageType) {
        //         case "presale" :
        //             if (omniSiteCat.isOnlineOnly) {
        //                 s.channel = 'Sales';
        //                 s.eVar2 = s.prop2 = 'Studio Ecatalogues';
        //                 s.prop15 = s.eVar15 = omniSiteCat.saleNumber;
        //                 s.eVar57 = 'Studio';
        //                 s.events = 'event24,event31,event34';
        //                 s.pageName = 'Studio Ecatalogues: ' + omniSiteCat.saleNumber + ': Event Detail';
        //                 s.eVar1 = s.prop1 = 'Studio Ecatalogues: Event Details';
        //                 s.eVar10 = s.prop10 = omniture_contentType;
        //             }
        //             else {
        //                 var lotNumber = $('.lot-count-tab').text();
        //                 if(lotNumber != "0 LOTS"){
        //                     omniSiteCat.deferredPageLoad = true;
        //                 }
        //                 s.events = "event31";
        //                 s.pageName = "Auctions: " + omniSiteCat.saleNumber + ": Event Detail";
        //                 s.prop2 = "Ecatalogues";
        //                 s.prop1 = s.prop2 + ": Event Details";
        //                 s.prop15 = s.eVar15 = omniSiteCat.saleNumber;
        //                 s.prop10 = omniture_contentType;
        //                 s.prop37 = "Ecatalogues/List View";
        //             }
        //             if (omniSiteCat.deferredPageLoad) {
        //                 forcePageLoad = true;
        //             } else {
        //                 omniSiteCat.deferredPageLoad = true;
        //             }
        //             break;
        //         case "single" :
        //             if(url.indexOf("\/auctions\/2") !== -1) {
        //                 omniSiteCat.doNotRun = true;
        //             }
        //             s.pageName = "Auctions: " + omniSiteCat.saleNumber + ": 1";
        //             s.prop1 = "Ecatalogues: Single Lot";
        //             s.prop2 = "Ecatalogues";
        //             s.channel = "Sales";
        //             s.events = "event32";
        //             s.prop10 = omniture_contentType;
        //             s.prop15 = s.eVar15 = omniSiteCat.saleNumber;
        //             s.prop37 = "Ecatalogues/List View";
        //             break;
        //         case "event" :
        //             omniSiteCat.clearCustomTrafficVars();
        //             omniSiteCat._decorateNonStudioSale(s); //RE-decorating
        //             s.channel = "Sales";
        //             s.prop2 = "Ecatalogues";
        //             s.prop10 = (ECAT.departments) ? ECAT.departments.join(" | ") : "";
        //             s.prop15 = s.eVar15 = omniSiteCat.saleNumber;

        //             if (omniSiteCat.isOnlineOnly) {
        //                 s.channel = 'Sales';
        //                 s.eVar2 = s.prop2 = 'Studio Ecatalogues';
        //                 s.prop15 = s.eVar15 = omniSiteCat.saleNumber;
        //                 s.eVar57 = 'Studio';
        //                 if (ECAT) { //ECAT is available
        //                     s.events = 'event24,event32,event35';
        //                     s.pageName = 'Studio Ecatalogues: ' + omniSiteCat.saleNumber;
        //                     s.eVar1 = s.prop1 = 'Studio Ecatalogues: Grid View';
        //                     s.eVar10 = s.prop10=(ECAT.departments) ? ECAT.departments.join(" | ") : "";
        //                 }
        //                 else { //ECAT not specified for this event yet
        //                     s.events = 'event24,event31,event34';
        //                     s.pageName = 'Studio Ecatalogues: ' + omniSiteCat.saleNumber + ': Event Detail';
        //                     s.eVar1 = s.prop1 = 'Studio Ecatalogues: Event Details';
        //                     s.eVar10 = s.prop10 = omniture_contentType;
        //                 }
        //             }
        //             else {
        //                 if (Sothebys.ecat.viewMode === 'list') {
        //                     s.pageName = "Auctions: " + ECAT.saleNumber + ": 1";
        //                     s.prop1 = "Ecatalogues: List View";
        //                     s.prop37 = "Ecatalogues/List View";
        //                     s.events = "event33";
        //                 } else if (Sothebys.ecat.viewMode === 'grid')  {
        //                     s.pageName = "Auctions: " + ECAT.saleNumber + ": Grid View: " + omniSiteCat.scPageTitle;
        //                     s.prop1 = "Ecatalogues: Grid View";
        //                     s.prop37 = "Ecatalogues/Grid View";
        //                     s.events = "event32";
        //                 }
        //             }
        //             if (omniSiteCat.deferredPageLoad) {
        //                 forcePageLoad = true;
        //             } else {
        //                 omniSiteCat.deferredPageLoad = true;
        //             }
        //             break;
        //         case "lotarchive" :
        //             s.pageName = "Auctions: Sold Lot Archive";
        //             s.prop1 = "Auctions";
        //             s.prop2 = "Auctions: Sold Lot Archive";
        //             break;
        //         case "watchlive" :
        //             s.pageName = "Auctions: BIDnow/Watch Live";
        //             s.channel = "Sales";
        //             s.events = "event24";
        //             s.prop1 = s.eVar1 = "Auctions: BIDnow/Watch Live";
        //             s.prop2 = s.eVar2 = "Auctions: BIDnow/Watch Live";
        //             s.prop10 = s.eVar10 = "No Department";

        //             break;
        //         default :
        //             break;
        //         }
        //     } else if(url.indexOf("\/auctions.html") != -1) {       // Auctions Listing
        //         //console.debug("auctions");
        //         s.prop1 = "Auctions";
        //         s.prop2 = s.prop1 + ": Auction Calendar";
        //         //s.prop10 = "Upcoming Auctions";
        //         s.pageName = "Auction Calendar: " + omniSiteCat.setPageNumber();
        //         omniSiteCat._decorateNonStudioSale(s);
        //     } else if(url.indexOf("\/alphabeticallist.html") != -1) {   // Departments Listing
        //         //console.debug("dept list");
        //         s.prop2 = "Departments";
        //         s.pageName = "Departments";
        //         s.prop37 = "Departments/Alphabetical";
        //         //s.prop10 = "Departments";
        //     } else if (url.indexOf("\/departments\/") != -1) {          // Department page (individual)
        //         //console.debug("dept");
        //         var pageNameStr = s.pageName;
        //         var pageName = $.trim(pageNameStr.split(":")[1]);
        //         s.prop2 = "Departments: Department";
        //         s.pageName = "Departments: " + pageName;
        //         //s.prop10 = "Departments";
        //         s.prop37 = "Departments/Department/Overview";

        //     } else if(url.indexOf("\/news-video\/videos\/") != -1) {    // Individual Video Page
        //         //console.debug("videos");
        //         //alert("video individual");
        //         var pageNameOld = s.pageName;
        //         var pageNameArr = pageNameOld.split(":");
        //         pageNameArr[0] = "News & Videos";
        //         var pageName = pageNameArr[0] + ": " +
        //             pageNameArr[1] + ": " +
        //             pageNameArr[4] + ": " +
        //             pageNameArr[2] + ": " +
        //             pageNameArr[3];
        //         s.pageName = pageName;
        //         //s.prop10 = s.eVar10 = "News & Video: Video";
        //     } else if(url.indexOf("\/news-video\/slideshows\/") != -1) {    // Slideshow Launch Page
        //         var href = $('.slideshowpage-image-wrap a').attr('href').split('/');
        //         var lastPart = href[href.length - 1].split('.');
        //         var year = lastPart[0];
        //         var slideshowTitle = $('.slideshowpage-title').eq(0).text();
        //         s.channel = "Editorial";
        //         omniSiteCat.slideshowPageLoadEvent(s, slideshowTitle, 0, $('#slideshowPageTotalSlides').attr('data-value'), year);
        //         if (window.location.hash.indexOf('#slideshow/') >= 0 || (window.location.hash.indexOf('#detail/') >= 0 && window.location.hash.indexOf('/slideshow/') >= 0)) {
        //             omniSiteCat.deferredPageLoad = true;
        //         }
        //     } else if(url.indexOf("\/videos.html") != -1) {         // Video Listing
        //         //console.debug("video list");
        //         //alert("videos main page");
        //         if(url.indexOf("\/preferred-access\/") == -1){
        //             s.pageName = "News & Videos: Videos";
        //             s.prop2 = s.prop10 = s.eVar2 = s.eVar10 = "News & Video: Video";
        //         }else{
        //             s.pageName = "Preferred Access: Videos";
        //             s.prop2 = s.prop10 = s.eVar2 = s.eVar10 = "Preferred Access: Video";
        //         }
        //     } else if(url.indexOf("\/gallery\/") != -1) {   // gallery // RED-1499: Added Site Catalyst for Gallery.
        //         var hash = window.location.hash;

        //         var saleArr = [{page:'highlights.html',pn:'Highlights',sn: ''},
        //             {page:'s2.html',pn:'S|2',sn: ''},
        //             {page:'exhibitions.html',pn:'Exhibitions',sn: ''},
        //             {page:'buying-privately.html',pn:'Buying Privately',sn: ''},
        //             {page:'selling-privately.html',pn:'Selling Privately',sn: ''},
        //             {page:'contacts.html',pn:'Contacts',sn: '',lo: ''},
        //             {page:'past-exhibitions.html',pn:'Exhibitions',sn:'Past'}];

        //         for(var i=0;i<saleArr.length;i++){
        //             var el = saleArr[i];
        //             if(url.indexOf('\/' + el.page)!=-1){
        //                 //console.debug("inside setOmniturePrivateSale");
        //                 if (el.sn == '') {
        //                     s.pageName = "Gallery: " + el.pn;
        //                 } else {
        //                     s.pageName = "Gallery: " + el.pn + ": " + el.sn;
        //                 }

        //                 s.prop1 = s.prop2 = s.eVar1 = s.eVar2 = s.prop10 = s.eVar10 = "Gallery";
        //                 //s.channel = "Sales";
        //                 s.events = s.apl(s.events, "event24", ",", 2);
        //                 if(s.eVar26){
        //                     s.eVar26="";
        //                 }

        //             }
        //         }
        //     } else if(url.indexOf("\/search-results.html") != -1) {
        //         setOmnitureVerticalSearchProperties();
        //     } else if(url.indexOf("\/preferred-access\/") != -1) {
        //         if (window.location.hash.indexOf('#slideshow/') >= 0 || (window.location.hash.indexOf('#detail/') >= 0 && window.location.hash.indexOf('/slideshow/') >= 0)) {
        //             omniSiteCat.deferredPageLoad = true;
        //         }
        //     } else if(url.indexOf('login-to-sothebys.html') != -1) { // either basic or preferred login page
        //         if(url.indexOf('\/login-to-sothebys.html') != -1) { // only the basic login page
        //             s.pageName = "Registration: Log In or Register";
        //         }
        //         s.events = "event24";
        //         s.channel = "Registration";
        //         s.prop1 = s.eVar1 = "Registration: Log In or Register";
        //         s.prop2 = s.eVar2 = "Registration: Log In or Register";
        //         s.prop10 = s.eVar10 = "No Department";

        //         if ($('.form .form_error').not(':empty').size() > 0) {
        //             //Error occured
        //             setOmnitureLoginFailure();
        //         }
        //     } else if(url.indexOf("\/studio-auctions.html") != -1){
        //         s.pageName = "Studio Auction Calendar";
        //         s.prop1 = "Studio Auction Calendar";
        //         s.prop2 = "Studio Auction Calendar";
        //         s.eVar1 = "Studio Auction Calendar";
        //         s.eVar2 = "Studio Auction Calendar";
        //         s.channel = "Sales";
        //         s.eVar57 = "Studio";
        //     } else if (url.indexOf("\/home.html") != -1) {
        //         s.pageName = "Homepage B";
        //         s.prop1 = s.prop2 = s.eVar1 = s.eVar2 = "Homepage";
        //         s.channel = "Homepage";
        //     }
        //     else {
        //         // do nothing
        //     }

        //     //RED-2073
        //     if (window.omniture_siteSection) {
        //         s.channel = omniture_siteSection;
        //         //console.log("set_omniture_data.js:: ch: " + s.channel);
        //     }

        //     //RED-2074
        //     if (window.omniture_contentType) {
        //         s.prop10 = s.eVar10 = omniture_contentType;
        //     }

        //     //alert("the url: " + url);
        //     omniSiteCat.setLangParam(url);

        //     // RED-1715: Fix site cat issue to pull client info
        //     setUserSpecOmnitureProps(s);
        //     var filterPaths = ["attend-auction",
        //     "registration/register-new-account.preferred.html",
        //     "registration/enjoy-sothebys.html",
        //     "registration/authorization-code-registration.html",
        //     "registration/transactional.html",
        //     "invoice-payment.html"];
        //     var urlFilter = false;
        //     for (var i=0;i<filterPaths.length;i++) {
        //       if(url.indexOf(filterPaths[i]) != -1) {
        //         //console.log(filterPaths[i]);
        //         urlFilter = true;
        //         break;
        //       }
        //     }
        //     if (urlFilter){
        //       return;
        //     }

        //     if ((omniSiteCat.deferredPageLoad && !forcePageLoad) || omniSiteCat.doNotRun) {
        //         //Do nothing
        //     } else {
        //         omniSiteCat.sendOmniData(s);
        //     }

        // }

    },
    //DONE
    trackRecircHeroLinks: function() {
        // var reCircLinks = $('.row > .featured-content').find('a');
        // var linkHref = "";
        // var editorial_type = "";
        // var prop2 = s.prop2;
        //     reCircLinks.click(function(e){
        //         linkHref = $(this).attr('href');
        //         if(linkHref.indexOf('\/blogs\/') != -1) {
        //             editorial_type = "blog";
        //         } else if (linkHref.indexOf('\/videos\/') != -1) {
        //             editorial_type = "video";
        //         } else if (linkHref.indexOf('\/auctions\/') != -1) {
        //             editorial_type = "auctions";
        //         }
        //         s.linkTrackVars = "events,eVar49";
        //         s.linkTrackEvents = "event71";
        //         s.eVar49 = prop2 + ": " + editorial_type + ": hero";
        //         s.events = "event71";
        //         s.tl(this, 'o', 'Recirculation');
        //     });
    },
    //DONE
    trackRecircFtrLinks: function() { // RED-1440: added elements for department page
        // var reCircLinks = $('section + .featured-content, .section + .separated-block > .featured-content, .departments-list-container > .featured-content').find('a');
        // var linkHref = "";
        // var editorial_type = "";
        // var prop2 = s.prop2;
        //     reCircLinks.click(function(e){
        //         linkHref = $(this).attr('href');
        //         if(linkHref.indexOf('\/blogs\/') != -1) {
        //             editorial_type = "blog";
        //         } else if (linkHref.indexOf('\/videos\/') != -1) {
        //             editorial_type = "video";
        //         } else if (linkHref.indexOf('\/auctions\/') != -1) {
        //             editorial_type = "auctions";
        //         } else {
        //             editorial_type = "";
        //         }
        //         s.linkTrackVars = "events,eVar49";
        //         s.linkTrackEvents = "event71";
        //         if(editorial_type != "") {
        //             s.eVar49 = prop2 + ": " + editorial_type + ": footer";
        //         } else {
        //             s.eVar49 = prop2 + ": footer";
        //         }
        //         s.events = "event71";
        //         s.tl(this, 'o', 'Recirculation');
        //     });
    },
    trackMegaMenuTopLinks: function() {

    },
    getMegaSubMenuLinks: function() {

    },
    trackMegaSubMenuLink: function(linkName,obj) {

    },
    //DUSTIN: Already done
    trackMegaSubViewAllLink: function(linkName,obj) {
        // if(linkName === undefined || obj === undefined) {
        //     return false;
        // }
        // obj.click(function(){
        //     var ancText = $(this).text();
        //     var ancHref = $(this).attr('href');
        //     var _eVar46 = "";
        //     if(ancText.indexOf("View All") != -1) {
        //         switch(ancText) {
        //         case "View All Locations":
        //             ancText = "Locations: View All";
        //             break;
        //         case "View All Services":
        //             ancText = "Services: View All";
        //             break;
        //         case "View All Videos":
        //             ancText = "Videos: View All";
        //             break;
        //         case "View All Blogs":
        //             ancText = "Blogs: View All";
        //             break;
        //         default:
        //             ancText = "View All";
        //         }
        //         _eVar46 = linkName + ": " + ancText;

        //         //var s = s_gi(s_account);
        //         s.linkTrackVars = "events,eVar46";
        //         s.linkTrackEvents = "event70";
        //         s.events = "event70";
        //         s.eVar46 = _eVar46;
        //         s.tl(this, 'o', 'Mega Menu');

        //     } else {
        //         if(typeof (ancHref) === "string") {
        //             if(ancHref.indexOf("\/departments\/") != -1) {
        //                 ancText = "Department";
        //             } else if (ancHref.indexOf("\/blogs\/") != -1) {
        //                 ancText = "Blogs";
        //             } else if (ancHref.indexOf("\/news-video\/") != -1) {
        //                 ancText = "Video";
        //             } else if (ancHref.indexOf("\/locations-worldwide\/") != -1) {
        //                 ancText = "Locations";
        //             } else if (ancHref.indexOf("\/services\/") != -1) {
        //                 ancText = "Services";
        //             } else if (ancHref.indexOf(".com") != -1) {
        //                 ancText = "Beyond Auction";
        //             }
        //             _eVar46 = linkName + ": " + ancText;

        //             //var s = s_gi(s_account);
        //             s.linkTrackVars = "events,eVar46";
        //             s.linkTrackEvents = "event70";
        //             s.events = "event70";
        //             s.eVar46 = _eVar46;
        //             s.tl(this, 'o', 'Mega Menu');
        //         }
        //     }
        // });

    },
    //DUSTIN: Already done
    trackMegaSubFeatLink: function(linkName,obj) {
        // if(linkName === undefined || obj === undefined) {
        //     return false;
        // }
        // obj.click(function() {
        //     var _eVar46 = linkName + ": Featured";

        //     //var s = s_gi(s_account);
        //     s.linkTrackVars = "events,eVar46";
        //     s.linkTrackEvents = "event70";
        //     s.events = "event70";
        //     s.eVar46 = _eVar46;
        //     s.tl(this, 'o', 'Mega Menu');
        // });
    },
    //DUSTIN: Already done
    trackMegaSubNowLink: function() {
        //var s = s_gi(s_account);
        // s.linkTrackVars = "events,eVar46";
        // s.linkTrackEvents = "event70";
        // s.events = "event70";
        // s.eVar46 = "Auctions: Now";
        // s.tl(this, 'o', 'Mega Menu');
    },
    //DUSTIN: Already done
    trackMegaSubUpcomingLink: function() {
        //var s = s_gi(s_account);
        // s.linkTrackVars = "events,eVar46";
        // s.linkTrackEvents = "event70";
        // s.events = "event70";
        // s.eVar46 = "Auctions: Upcoming";
        // s.tl(this, 'o', 'Mega Menu');
    },
    //DONE
    trackLoginLinks: function () {
        // $('.login-link-header').on('click', function (evt) {
        //     omniSiteCat.setOmnitureLoginClickEvent("Login Header Link");
        // });
    },
    setPageNumber: function() {
        //       var args = (!isNaN(parseInt(arguments[0])) && parseInt(arguments[0]) > 0) ? parseInt(arguments[0]) : 0;
        //     return parseInt(args,10) + 1;
    },

    //DUSTIN: Not needed
    filterPgNum: function() {
        /*      var url = window.location.href + "";
         $('body').on('pagination.page_changed', function(e, newPageNumber){

         if(url.indexOf("\/auctions\/") != -1) {
         if(window.omniture_regexp && omniture_regexp.length!=0) {
         var re = new RegExp(omniture_regexp);
         if(url.match(re)) {
         var s = s_gi(s_account);
         s.linkTrackVars = "pageName,prop1,prop2,eVar1,eVar2,events";
         s.linkTrackEvents = "event24";
         s.pageName = "Auctions: " + omniSiteCat.saleNumber + ": " + newPageNumber;
         s.prop1 = s.eVar1 = "Auctions";
         s.prop2 = s.eVar2 = s.prop1 + ": Auction";
         s.events = "event24";

         s.tl(this,'0',"Auction/Ecatalogue");
         }
         }
         }
         if(url.indexOf("\/auctions.html") != -1) {
         var s = s_gi(s_account);
         s.linkTrackVars = "pageName,prop1,prop2,eVar1,eVar2,events";
         s.linkTrackEvents = "event24";
         s.pageName = "Auction Calendar: " + newPageNumber;
         s.prop1 = s.eVar1 = "Auctions";
         s.prop2 = s.eVar2 = s.prop1 + ": Auction Calendar";
         s.events = "event24";
         s.tl(this,'0',"Auction Calendar");
         }
         });*/
    },
    //RETURN HERE FINISH

    //DONE
    auctionDetailOverlay: function(sn) {
        // var detailLink = $('.auctions-container .inline-actions.separated-block a.overlay-trigger');
        // if(sn === undefined || sn === null) { return false; }

        //     detailLink.one('overlay.on_click', function(e, b){
        //         if(b) {
        //             s.trackExternalLinks = false;
        //             s.linkTrackVars = "events,pageName";
        //             s.linkTrackEvents = "event31,event24";
        //             s.pageName = "Auctions: " + sn + ": Event Detail";
        //             s.events = "event31,event24";
        //             s.tl(this,'o','Auction Details Overlay');
        //         }
        //     });
    },
    //DUSTIN: Not needed
    filter: function(urlPath,opt){
        /*   var url = $.extend(urlPath,opt);
         //console.debug(url);
         var val = '';
         var paramList = "";
         var valueList = "";

         var pageFrom = url.from;

         omniSiteCat.setPageNumber(pageFrom);

         if($('#auctions-results').length > 0) {
         var startDate = new Date(url.startDate);
         var endDate = new Date(url.endDate);
         var formatDate = Sothebys.filter.formatDate(startDate, 'd M yyyy')+" - "+Sothebys.filter.formatDate(endDate, 'd M yyyy');

         paramList = [url.locations,url.departments,formatDate];
         valueList = ["Locations","Departments","Date"];

         for (var i = 0; i<paramList.length; i++) {
         var params = paramList[i];
         if(params != "") val += ((val=="")?"":" | ") + "Calendar: " + valueList[i];
         }
         if($("input.sale-number").val().length > 0 ) {
         val += ((val=="")?"":" | ") + "Calendar: Sale Number";
         }
         jQuery.data( $('#auctions-results')[0],'track-value',val);
         $('.auctions article .details h4 a').each(function(index){
         $(this).click(function(){
         var val = jQuery.data( $('#auctions-results')[0],'track-value');
         if(val != null && val.length>0){
         var s = s_gi(s_account);
         s.linkTrackVars = "prop42,eVar47";
         s.eVar47=val;
         s.prop42=val;
         s.tl(this,'o','Auctions');
         }
         });
         });
         }

         if($('#lot-list').length > 0) {
         var sortType = "";
         var estimateSort = false;
         var lotNumSort = false;
         var hasClickedSortBy = jQuery.data( $('#lot-list')[0],'hasClickedSortBy');
         paramList = [url.artists, url.genres, url.mediums, url.types];
         valueList = ['Artist','Genre','Medium','Type'];
         //RED-4272 Only run code if someone clicks a filter at all.
         if(hasClickedSortBy == "true")
         {
         sortType = $('.form-label.active').text().replace(/\s/g, "");
         if (sortType === "Estimate") {
         estimateSort = true;
         }
         else if(sortType === "Lotnumber")
         {
         lotNumSort = true;
         }
         }
         for(var i=0;i<paramList.length;i++){
         var params = paramList[i];
         if(params != '') val += ((val=='')?'':' | ') + valueList[i];
         }
         if($('.ui-slider').slider("values")[0] > 0 || $('.ui-slider').slider("values")[1] < 100 || estimateSort)
         val += ((val=='')?'':' | ') + 'Estimate';
         else if(lotNumSort){
         val += ((val=='')?'':' | ') + "Lot Number";
         }
         jQuery.data( $('#lot-list')[0],'track-value',val);

         $('.auctions-container .filter .sort span').one('click',function(e){
         jQuery.data( $('#lot-list')[0],'hasClickedSortBy', "true");
         });

         $('#lot-list article .image a,#lot-list article .details h1 a,#lot-list article .details h4 a, #lot-list .gridview-static-article a').each(function(index){
         $(this).click(function(){
         var finalVal = jQuery.data( $('#lot-list')[0],'track-value');
         if(finalVal != null && finalVal.length>0){
         if (ECAT != undefined && ECAT.isOnlineOnlyAuction) {
         finalVal = "Studio: " + finalVal;
         }
         var s = s_gi(s_account);
         s.linkTrackVars = "prop40,eVar41";
         s.eVar41=finalVal;
         s.prop40=finalVal;
         s.tl(this,'o','ECat');
         }
         });
         });
         }  */
    },
    //DONE
    trackHPLink: function(title) {
        // var s = s_gi(s_account);
        // s.linkTrackVars = "eVar50,events";
        // s.linkTrackEvents = "event48";
        // s.events = "event48";
        // s.eVar50 = title;
        // s.tl(this,'o','Homepage Placement Slideshow');
        // return false;
    },
    //DONE
    homepageSlideshow : function(title) {
        // var s = s_gi(s_account);
        // s.linkTrackVars = "eVar53";
        // s.eVar53 = "Homepage: " + title;
        // s.tl(this,'o','Homepage Placement Slideshow');
        // return false;
    },

    //DONE
    /* payload is hash of {title: }*/
    handleHomepageEvent: function (type, payload) {
        // var s = s_gi(s_account);
        // var title = 'Homepage: ';
        // if (window.location.pathname.indexOf("\/home.html") != -1) {
        //     s.pageName = "Homepage B";
        // }
        // else {
        //     s.pageName = "Homepage";
        // }
        // s.linkTrackVars = 'eVar50,events';
        // s.linkTrackEvents = 'event48';
        // s.events = 'event48';
        // switch (type) {
        //     case STBCore.Homepage.ANALYTICS_HERO_CLICK:
        //         title += 'Hero: ';
        //         break;
        //     case STBCore.Homepage.ANALYTICS_FEATURED_CLICK:
        //         title += 'Content: ';
        //         break;
        //     case STBCore.Homepage.ANALYTICS_SELECTS_LABEL_CLICK:
        //         title += 'Trending: ';
        //         break;
        //     case STBCore.Homepage.ANALYTICS_SELECTS_IMAGE_CLICK:
        //         title += 'Promo: ';
        //         break;
        //     case STBCore.Homepage.ANALYTICS_AD_CLICK:
        //         title += 'Ad: ';
        //         break;
        // }
        // title += payload.title;
        // s.eVar50 = title;

        // s.tl(omniSiteCat.genEvent('click'),'o', title);
    },
    setOmnitureViewConditionReport: function (event, lot, catalogTitle, deptTitle, isOnlineOnly) {
        /*      console.log("inside setOmnitureViewConditionReport for Online Only", isOnlineOnly);
         if (isOnlineOnly === 'false'){
         omniSiteCat._decorateNonStudioSale(s, true);
         s.pageName = "Catalogues : " + event + " : " + lot + " : Condition Report : " + catalogTitle;
         s.channel = "Sales";
         s.prop1 = "Ecatalogues: Condition Report";
         s.prop2 = "Ecatalogues";
         s.eVar1 = s.prop1;
         s.eVar2 = s.prop2;
         s.prop10 = s.eVar10 = deptTitle;
         s.prop15 = event;
         s.prop16 = event + " - " +lot;
         s.eVar15 = s.prop15;
         s.eVar16 = s.prop16;
         s.events = "event9,event24";
         s.prop37 = "Ecatalogues/Lot Detail View/Condition Report";
         s.t();
         }
         // RED-4273 - Updating props/vars
         else {
         s.pageName = "Studio Ecatalogues : " + event + " : " + lot + " : Condition Report : " + catalogTitle;
         s.channel = "Sales";
         s.events = "event9,event24,event44";
         s.prop1 = s.eVar1 = "Studio Ecatalogues: Condition Report";
         s.prop2 = s.eVar2 = "Studio Ecatalogues";
         s.prop10 = s.eVar10 = deptTitle;
         s.prop15 = s.eVar15 = event;
         s.prop16 = s.eVar16 = event + " - " + lot;
         s.eVar57 = "Studio";
         s.t();
         }   */
    },
    //DONE
    galleryClickEvt: function() {  // RED-1499: Added Site Catalyst for Gallery. // 10/11 per ticket, this has been disabled.
        // var url = window.location.href;

        // if(url.indexOf("\/gallery\/") != -1) {
        //     //console.clear();
        //     //console.log("inside if gallery");

        //     $(document).on( "click", "#parentSection a[href^='#']:not(#parentSection a[href='#']),ul#viewMode a, #parentSection a[href^='s2']", function(){

        //         var href = $(this).attr("href");
        //         var val = $(this).text();
        //         var title = ($(this).attr("title")) ? $(this).attr("title") : $("ul#viewMode li.active a").attr("title"); //;
        //         var titleReAssigned = (typeof (title) === "string" && title === "Single Exhibition") ? "Featured" : "Grid View";
        //         var pageName = "";
        //         var hash = document.URL.substr(document.URL.indexOf('#')+1);

        //         //console.clear();
        //         //console.log("inside hash link");

        //         pageName = "Gallery: ";

        //         if(url.indexOf('\/exhibitions.html')!=-1){
        //             pageName += "Exhibitions";
        //             if(href && href.length > 0) {
        //                 val = $("#parentSection a[href='"+ href + "']").text();
        //                 pageName += " : " + val + ": " + titleReAssigned;
        //                 //console.log("hash 1:: " + hash);
        //                 //console.log("href 1:: " + href);
        //                 //console.log("pagename 1:: " + pageName);
        //             } else {
        //                 //console.log("hash 2:: " + hash);
        //                 val = $("#parentSection a[href='#"+ hash + "']").text();
        //                 //console.log("href::L:: " + val);
        //                 pageName += " : " + val + ": " + titleReAssigned;
        //             }
        //         } else if (url.indexOf('\/s2.html')!=-1) {
        //             pageName += "S|2: " + titleReAssigned;
        //         }

        //         //console.log("page name:: " + pageName);

        //         var s = s_gi(s_account);
        //         s.trackExternalLinks = false;
        //         s.linkTrackVars = "pageName";
        //         s.pageName = pageName;
        //         s.tl(this,'o','Gallery');

        //     } );

        // }
    },
    //DONE
    onSubmit: function() {
        //alert("something happened!");
        // var s = s_gi(s_account);
        // s.trackExternalLinks = false;
        // s.linkTrackVars = "events,pagename";
        // s.linkTrackEvents = "event30";
        // s.pageName = "";
        // s.events = "event30";
        // s.tl(this,'o','Gallery Contact Submission');
    },
    //DONE
    onPreferredDetailPage: function(id) {
        //console.debug("inside preferred Detail");
        // var _pgName = s.pageName;
        // var _events = s.events;
        // s.pageName = s.pageName + ":" + id;
        /*
         s.prop1 = "Preferred";
         s.prop2 = "Preferred";
         s.eVar1 = s.prop1;
         s.eVar2 = s.prop2;
         */
        // s.prop10 = "Accounts";
        // s.eVar10 = s.prop10;
        // s.events = "event24,event16";
        // s.t();
        // s.pageName = _pgName;
        // s.events = _events;
    },
    //DONE
    onPreferredDetailPageSlideshow: function(id) {
        //console.debug("inside preferred Detail Slideshow");
        // var _pgName = s.pageName;
        // var _events = s.events;
        // s.pageName = s.pageName + ":" + id;
        /*
         s.prop1 = "Preferred";
         s.prop2 = "Preferred";
         s.eVar1 = s.prop1;
         s.eVar2 = s.prop2;
         */
        // s.prop10 = "Accounts";
        // s.eVar10 = s.prop10;
        // s.events = "event24,event46";
        // s.t();
        // s.pageName = _pgName;
        // s.events = _events;
    },
    articleSlideshowClickEvt: function () {
        //    s = s_gi(s_account);
        /*      s.events = "event46";
         s.linkTrackEvents = "event46";
         s.tl(omniSiteCat.genEvent("click"),"0","Article Slideshow");  */
    },
    onviewLocationEvent: function (location) {
        //    var s = s_gi(s_account);
        /*       var custom = {};
         custom.pageName = s.pageName;
         custom.prop1 = custom.pageName;
         custom.prop2 = custom.pageName + " : " + location;
         custom.eVar1 = custom.pageName;
         custom.eVar2 = custom.pageName + " : " + location;
         custom.channel = "Sales";
         s.t(custom);  */
    },
    slideshowPageLoadEvent: function (obj, slideshowTitle, index, total, year) {
        //    var s = s_gi(s_account);
        /*       var custom = obj || {};
         if (STBCore.Util.isPreferred()) {
         custom.pageName = STBCore.Util.toText("Preferred Access: Slide " + 0 + "/" + $('#slideshowPageTotalSlides').attr('data-value') + ": " + slideshowTitle + ": " + year);
         custom.prop1 = "Preferred Access";
         custom.prop2 = "News & Video: Slideshow";
         custom.eVar1 = "Preferred Access";
         custom.eVar2 = "News & Video: Slideshow";
         custom.prop44 = "Slideshow: " + STBCore.Util.toText(slideshowTitle);
         custom.eVar25 = "Slideshow: " + STBCore.Util.toText(slideshowTitle);
         custom.channel = "Editorial";
         custom.events = "event46";
         //If not using provided object, track immediately (otherwise it means obj was the 's' object, and meant to be triggered manually outside this function)
         if (!obj) {
         s.t(custom);
         }
         } else {
         custom.pageName = STBCore.Util.toText("News & Video: Blogs: Slide " + 0 + "/" + $('#slideshowPageTotalSlides').attr('data-value') + ": " + slideshowTitle + ": " + year);
         custom.prop1 = "News & Video";
         custom.prop2 = "News & Video: Slideshow";
         custom.eVar1 = "News & Video";
         custom.eVar2 = "News & Video: Slideshow";
         custom.prop44 = "Slideshow: " + STBCore.Util.toText(slideshowTitle);
         custom.eVar25 = "Slideshow: " + STBCore.Util.toText(slideshowTitle);
         custom.channel = "Editorial";
         custom.events = "event46";
         //If not using provided object, track immediately (otherwise it means obj was the 's' object, and meant to be triggered manually outside this function)
         if (!obj) {
         s.t(custom);
         }
         } */
    },
    slideshowPageEvent: function (slideshowTitle, slideTitle, index, total, year) {
        //      var s = s_gi(s_account);
        /*      var custom = {};
         if (STBCore.Util.isPreferred()) {
         custom.pageName = STBCore.Util.toText("Preferred Access: Slide " + index + "/" + total + ": " + slideshowTitle + ": " + year + ": " + slideTitle);
         custom.prop1 = "Preferred Access";
         custom.prop2 = "News & Video: Slideshow";
         custom.eVar1 = "Preferred Access";
         custom.eVar2 = "News & Video: Slideshow";
         custom.prop44 = "Slideshow: " + STBCore.Util.toText(slideshowTitle);
         custom.eVar25 = "Slideshow: " + STBCore.Util.toText(slideshowTitle);
         custom.channel = "Editorial";
         custom.events = "event46";
         s.t(custom);
         } else {
         custom.channel = "Editorial";
         custom.pageName = STBCore.Util.toText("News & Video: Blogs: Slide " + index + "/" + total + ": " + slideshowTitle + ": " + year + ": " + slideTitle);
         custom.prop1 = "News & Video";
         custom.prop2 = "News & Video: Slideshow";
         custom.eVar1 = "News & Video";
         custom.eVar2 = "News & Video: Slideshow";
         custom.prop44 = "Slideshow: " + STBCore.Util.toText(slideshowTitle);
         custom.eVar25 = "Slideshow: " + STBCore.Util.toText(slideshowTitle);
         custom.channel = "Editorial";
         custom.events = "event46";
         s.t(custom);
         }  */
    },
    // RED-4273 updated props/vars
    setOmnitureLotDetailViewOnlineOnly: function (eventPass, lot, catalogTitle, isOnlineOnly) {
        // console.log('setOmnitureLotDetailViewOnlineOnly (with changes) is called for', isOnlineOnly);
        // var url = window.location.href;
        // if (isOnlineOnly && (url.indexOf("\/ecatalogue\/") === -1)){
        //     s.linkTrackVars = "pageName,prop1,prop2,prop15,eVar1,eVar2,eVar15,eVar57,events";
        //     s.pageName = "Studio Ecatalogues: " + eventPass;
        //     s.channel = "Sales";
        //     s.events = 'event24,event32,event35';
        //     s.prop10 = s.prop10;
        //     s.prop1 = "Studio Ecatalogues: Single Lot";
        //     s.eVar1 = "Studio Ecatalogues: Single Lot";
        //     s.prop2 = "Studio Ecatalogues";
        //     s.eVar2 = "Studio Ecatalogues";
        //     s.prop15 = eventPass;
        //     s.eVar15 = eventPass;
        //     s.eVar57 = "Studio";
        // }
        // else if (isOnlineOnly){
        //     s.pageName="Studio Ecatalogues: " + eventPass + " : " + lot + " : Lot Detail : " + catalogTitle;
        //     s.channel="Sales";
        //     s.events = 'event14,event24,event36';
        //     // This should be inheriting from the existing s.object state, but this is probably bad practice and needs to be revisited.
        //     s.prop10 = s.prop10;
        //     s.prop1 = "Studio " + s.prop1;
        //     s.eVar1 = "Studio " + s.eVar1;
        //     s.prop2 = "Studio " + s.prop2;
        //     s.eVar2 = "Studio " + s.eVar2;
        //     s.eVar57 = "Studio";
        // }
        // s.t();
    },
    //DONE
    gridViewHoverEvent: function (ECAT, lotNumber) {
        // var s = s_gi(s_account);
        // omniSiteCat.clearCustomTrafficVars();
        // s.pageName = "Auctions: " + ECAT.saleNumber + ": Grid View: " + omniSiteCat.scPageTitle;
        // s.events = "event72";
        // s.eVar16 = ECAT.saleNumber + " - " + lotNumber;
        // s.linkTrackEvents = "event72";
        // s.linkTrackVars = "eVar16,events";
        // s.tl(this,"0","Grid View Hover");
    },
    //DONE
    gridViewSizeEvent: function (size) {
        // var s = s_gi(s_account);
        // omniSiteCat.clearCustomTrafficVars();
        // s.linkTrackVars = "eVar54";
        // s.linkTrackEvents = "";
        // s.pageName = "Auctions: " + ECAT.saleNumber + ": Grid View: " + omniSiteCat.scPageTitle;
        // s.eVar54 = size;
        // s.tl(this,"0","Grid View Size");
    },
    gridViewPageEvent: function () {
        //      omniSiteCat.grabUrlPath();
    },
    listViewPageEvent: function () {
        //      omniSiteCat.grabUrlPath();
    }
};
function getURLParameter(name) {
//    return decodeURI(
//        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
//    );
}
function getUrlVars() {
//    var vars = [], hash;
//    var hashes = window.location.href.slice(
//            window.location.href.indexOf('?') + 1).split('&');
//    for ( var i = 0; i < hashes.length; i++) {
//        hash = hashes[i].split('=');
//        vars.push(hash[0]);
//        vars[hash[0]] = hash[1];
    //   }
//    return vars;
};

function GetCookieValue(offset) {
//    var strEnd = document.cookie.indexOf(";", offset);
//    if (strEnd == -1)
//        strEnd = document.cookie.length;
//    return unescape(document.cookie.substring(offset, strEnd));
};

function omnitureGetCookie(name) {
    /*    var key = name + "=";
     var i = 0;
     while (i < document.cookie.length) {
     var j = i + key.length;
     if (document.cookie.substring(i, j) == key)
     return GetCookieValue(j);
     i = document.cookie.indexOf(" ", i) + 1;
     if (i == 0)
     break;
     }
     return null; */
};

//var ecatRegexp = /\/[a-z]{2,2}\/auctions\/ecatalogue\/lot.*.html\/[0-9]{4,4}\/.+\/*/g;
//var auctionEventRegexp = /\/[a-z]{2,2}\/auctions\/[0-9]{4,4}\/.+\-(\S*)\/.+.html.*/g;

function setOmnitureProperties(s) {
    //console.debug("setOmnitureProperties::inside setOmnitureProperties");
    /*    var pathname = window.location + "";
     //console.debug("setOmnitureProperties::window.omniture_regexp: " + window.omniture_regexp);
     //console.debug("setOmnitureProperties::omniture_regexp.length: " + omniture_regexp.length);
     if(window.omniture_regexp && omniture_regexp.length!=0){
     //console.debug("here!");
     var re = new RegExp(omniture_regexp);
     if (pathname.match(re)) {
     s.channel = omniture_siteSection;
     //console.debug("setOmnitureProperties::channel: " + s.channel);
     s.prop10 = omniture_contentType;
     //console.debug("setOmnitureProperties::prop10: " + s.prop10);
     if (omniture_page) {
     s.pageType = omniture_page;
     //console.debug("setOmnitureProperties::pageType: " + s.pageType);
     }

     var args = ecatRegexp.exec(window.location.href);
     //console.debug("setOmnitureProperties::args: " + args);
     //var auctionEventArgs = auctionEventRegexp.exec(window.location.pathname);
     if (args && omniture_hasEvent && omniture_hasLot) {
     s.prop16 = args[1] + " - " + args[3];
     s.prop15 = args[1];
     s.eVar15 = s.prop15;
     s.eVar16 = s.prop16;
     }
     //if (auctionEventArgs && auctionEventArgs.length == 2 && omniture_hasEvent && !omniture_hasLot) {
     //    s.prop15 = ('' + auctionEventArgs[1]).toUpperCase();
     //    s.eVar15 = s.prop15;
     //}
     if (window.omniture_bwPageName){
     s.prop37 = omniture_bwPageName;
     }
     } else {
     if(s.channel == null || s.channel == 'undefined') {
     s.channel = s.prop2;
     }
     }
     }
     setUserSpecOmnitureProps(s);  */
};

/*function setOmnitureBeginRegistration(url) {
 if(url.indexOf('register-new-account.html') != -1) {
 s.pageName = "Registration: Some works of art take years. Registration takes seconds.";
 s.events = s.apl(s.events, "event1", ",", 2);
 s.prop1 = "registration";
 s.prop2 = "registration";
 s.eVar1 = s.Prop1;
 s.eVar2 = s.Prop2;
 }
 };*/

//DONE
function setOmnitureCompleteRegistration(event,prop1,prop2,pn) {
    //console.debug("inside setOmnitureCompleteRegistration");
    // if (s.pageName == "Preferred: Summary") {
    //     s.pageName = pn;
    //     //alert("page name: " +s.pageName);
    // } else {
    //     s.pageName = pn;
    //    // alert("page name: " +s.pageName);
    // }
    // s.events = event;
    // s.prop1 = s.eVar1 = prop1;
    // s.prop2 = s.eVar2 = prop2;
    // s.prop10 = s.eVar10 = "No Department";
    // if($.cookie("omniture_eVar26")!=null){
    //     s.eVar26=$.cookie("omniture_eVar26");
    //     $.cookie("omniture_evar26",null);
    // }
    // sendOmnitureData(s);
    // s.eVar26="";
    // s.events = "";
};
//COM-2759 Notify Me Email/Metrics Analytics Data:start
function setOmnitureNotifymeConfirmClickevent(timeStamp,itemId,location,saleNumber){    	
    if(itemId!= null && itemId!= ''&&itemId!= 'undefined'){
	s.eVar34 = timeStamp +':'+saleNumber+':'+itemId+':'+location;	
    }
    else{
	s.eVar34 = timeStamp +':'+saleNumber+':'+location;	
    }
	s.events = "event90";
    s.t();	
	};
//COM-2759 Notify Me Email/Metrics Analytics Data:End

//COM-2842:Artmyn: data collection omniture:start
function setOmnitureArtmynClick(pageName,linkName){
    var link_name=linkName.substr(linkName.indexOf("/en/"))
    console.log(pageName,linkName);
    s.prop31 =s.eVar61= pageName;
	s.prop32 =s.eVar62= link_name;
    s.events="";
    s.t();
};
//COM-2842:Artmyn: data collection omniture:end
function setOmnitureAuthCodeRegistrationSuccess() {
    // s.eVar23 = "Client Validation";
    // s.t();
};
/*function setOmnitureRegistration(url) {
 //var url = window.location +"";
 var registerArr = [{page:'register-new-account.html',pn:'Some works of art take years. Registration takes seconds.',evt:'event1'},
 {page:'thank-for-registering.html',pn:'You\'re nearly there...Complete your registration',evt:'event2'},
 {page:'welcome-back.html',pn:'Welcome Back!',evt:'event3'},
 {page:'edit-preferences.html',pn:'Update your preferences',evt:'event5'},
 {page:'edit-preferences-login.html',pn:'Update your preferences',evt:'event5'},
 {page:'enjoy-sothebys.html',pn:'Your Art World. Expanded.',evt:'event6'}];

 for(var i=0;i<registerArr.length;i++){
 var el = registerArr[i];
 if(url.indexOf(el.page)!=-1){
 s.pageName = "Registration: " +el.pn;
 s.prop1="registration";
 s.prop2="registration";
 s.eVar1="registration";
 s.eVar2="registration";
 if($.cookie("omniture_eVar26")!=null){
 s.eVar26=$.cookie("omniture_eVar26");
 $.cookie("omniture_evar26",null);
 }
 s.events = s.apl(s.events, el.evt, ",", 2);
 //sendOmnitureData(s);
 s.eVar26="";
 //s.events = "";
 }
 }
 }*/

function setOmnitureEVAR27(){
//    s.linkTrackVars = "eVar27";
//    s.events = "event4";
//    s.linkTrackEvents = "event4";
//    s.pageName="";
//    if($.cookie("omniture_eVar27")!=null){
//        s.eVar27=$.cookie("omniture_eVar27");
//        $.cookie("omniture_evar27",null);
//    }
//    s.tl(this, 'o', 'Transactional Registration Submit');
};

//DONE
function setOmnitureLoginInitiationViewFavorites() {
    // s.eVar23 = "View favorites";
};

function setOmnitureEVAR(action, eVar) {
    //   var actionMap = {
//        "attend-auction" : "Register to Bid",
//        "paddle" : "Paddle Registration",
//        "absentee" : "Absentee Bid Registration",
//        "bidnow" : "BIDnow Registration",
//        "report" : "View Condition Report",
//        "favorites" : "View favorites"
//    };
//    s[eVar]=actionMap[action];
//    if(eVar=='eVar26' && (action=='attend-auction' || action=='paddle' || action=='absentee' || action=='bidnow')){
//        $.cookie("omniture_eVar27", s[eVar], { path: '/' });
//    }
//    var cookiename="omniture_"+eVar;
//    $.cookie(cookiename, s[eVar], { path: '/' });
};
//DONE
function setOmnitureCompleteLogin() {
    //console.debug("inside setOmnitureCompleteLogin");
    // s.events = "event8";
    // if($.cookie("omniture_eVar23")!=null){
    //     s.eVar23=$.cookie("omniture_eVar23");
    //     $.cookie("omniture_eVar23",null, { path: '/'});
    // }

    // omniSiteCat._augmentCrossRequestOnlineOnlyEvent(s, 38, true);

    // s.tl(omniSiteCat.genEvent("click"),"0","Login",{
    //     linkTrackVars: "events",
    //     linkTrackEvents: "event8",
    //     events: "event8"
    // });
    // s.events = "";
};

//CHECK IF THIS IS IN THE DOWNLOAD CODE
function setOmnitureFileDownload(filename, pageName) {
//    var persisted = saveState(s, ['linkTrackVars', 'linkTrackEvents', 'events', 'eVar20', 'pageName']);
//    s = s_gi(s_account);
//    s.linkTrackVars = "eVar20,events";
//    s.linkTrackEvents = "event22";
//    s.events = "event22";
//    s.eVar20 = filename;
//    if (typeof pageName !== 'undefined') {
//        s.pageName = pageName;/
//    }
//    s.tl(this, 'd', 'File DownLoad');
//    restoreState(s, persisted);
};

//DONE
function setOmnitureLoginFailure() {
    // s = s_gi(s_account);

    // s.tl(omniSiteCat.genEvent("click"),"0","Login", {
    //     linkTrackVars: "events,eVar40",
    //     linkTrackEvents: "event59",
    //     events: "event59",
    //     eVar40: "Login Error"
    // });
}
//DONE
function setOmnitureSimpleRegistrationFailure() {
    //console.debug("inside setOmniturePaddleComplete");
    // s = s_gi(s_account);

    // s.tl(omniSiteCat.genEvent("click"),"0","Simple Registration", {
    //     linkTrackVars: "events,eVar40",
    //     linkTrackEvents: "event59",
    //     events: "event59",
    //     eVar40: "Simple Registration Error"
    // });
};

function setOmnitureTransactionalRegistrationFailure() {
    //console.debug("inside setOmniturePaddleComplete");
    /*    s = s_gi(s_account);

     s.tl(omniSiteCat.genEvent("click"),"0","Transactional Registration", {
     linkTrackVars: "events,eVar40",
     linkTrackEvents: "event59",
     events: "event59",
     eVar40: "Transactional Registration Error"
     });*/
};

function setOmnitureTransactionalRegistrationSuccess() {
    //console.debug("inside setOmniturePaddleComplete");
    /*    s = s_gi(s_account);
     var payload = {
     linkTrackVars: "events",
     linkTrackEvents: "event85",
     events: "event85"
     };
     omniSiteCat._augmentCrossRequestOnlineOnlyEvent(payload, 89);
     s.tl(omniSiteCat.genEvent("click"),"0","Transactional Registration", payload); */
};

function setOmniturePaddleComplete() {
    //console.debug("inside setOmniturePaddleComplete");
    /*    s = s_gi(s_account);
     s.pageName = "Attend Auction: Paddle: Confirmation";
     s.channel = "Registration";
     s.events = "event81,event83";

     s.prop1 = s.eVar1 =  "Attend Auction: Paddle";
     s.prop2 = s.eVar2 = "Attend Auction: Paddle";
     if (window.omniture_contentType) {
     s.prop10 = s.eVar10 = omniture_contentType;
     }
     s.eVar19 = "paddle registration";
     s.t();
     s.events = ""; */
};

function setOmnitureInvoicePayment(pageName) {
    //  s = s_gi(s_account);

    /*    s.events = '';
     s.pageName = pageName;
     s.prop1 = s.eVar1 =  'Credit Card';
     s.prop2 = s.eVar2 = 'Credit Card';
     s.channel = 'Account';
     s.t();  */
}

function setOmnitureBidNowComplete(isOnlineOnly) {
    //console.debug("inside setOmnitureBidNowComplete");
    /*   s = s_gi(s_account);
     s.pageName = "Attend Auction: BIDnow: Confirmation";
     s.channel = "Registration";
     s.events = "event75,event83";
     if (isOnlineOnly) {
     s.events += ",event95,event93";
     }

     s.prop1 = s.eVar1 =  "Attend Auction: BIDnow";
     s.prop2 = s.eVar2 = "Attend Auction: BIDnow";
     if (window.omniture_contentType) {
     s.prop10 = s.eVar10 = omniture_contentType;
     }
     s.eVar19 = "BIDnow registration";
     s.t();
     s.events = "";  */
};

function setOmnitureAbsenteeBidComplete(isOnlineOnly) {
    //console.debug("inside setOmnitureAbsenteeBidComplete");
    /*    s = s_gi(s_account);

     s.channel = "Registration";
     s.events = "event79,event83";
     if (isOnlineOnly) {
     s.events += ",event97,event93";
     }
     s.pageName = "Attend Auction: Absentee: Confirmation" ;
     s.prop1 = s.eVar1 = "Attend Auction: Absentee";
     s.prop2 = s.eVar2 = "Attend Auction: Absentee";
     if (window.omniture_contentType) {
     s.prop10 = s.eVar10 = omniture_contentType;
     }
     s.eVar19 = "absentee bid";

     s.t();
     s.events = ""; */
};

function setOmnitureTelephoneBidComplete() {
    //console.debug("inside setOmnitureAbsenteeBidComplete");
    /*   s = s_gi(s_account);

     s.channel = "Registration";
     s.events = "event77,event83";
     s.pageName = "Attend Auction: Telephone: Confirmation" ;
     s.prop1 = s.eVar1 = "Attend Auction: Telephone";
     s.prop2 = s.eVar2 = "Attend Auction: Telephone";
     if (window.omniture_contentType) {
     s.prop10 = s.eVar10 = omniture_contentType;
     }
     s.eVar19 = "telephone registration";

     s.t();
     s.events = ""; */
};

function setOmnitureAbsenteeBidStart(page, isOnlineOnly) {
    //console.debug("inside setOmnitureAbsenteeBidStart");
    page = page || null;
    /*    s = s_gi(s_account);

     s.channel = "Registration";
     s.events = "event24";
     if (page === "account") {
     s.pageName = "Attend Auction: Absentee: Register Absentee Bids";
     s.events += ",event78,event82";
     if (isOnlineOnly) {
     s.events += ",event96,event92";
     }
     } else if (page === "selectitems") {
     s.pageName = "Attend Auction: Absentee: Select Items";
     } else if (page === "selectprices") {
     s.pageName = "Attend Auction: Absentee: Select Price";
     } else if (page === "confirmandsubmit") {
     s.pageName = "Attend Auction: Absentee: Confirm & Submit";
     }
     s.prop1 = s.eVar1 = "Attend Auction: Absentee";
     s.prop2 = s.eVar2 = "Attend Auction: Absentee";
     if (window.omniture_contentType) {
     s.prop10 = s.eVar10 = omniture_contentType;
     }
     s.eVar19 = "absentee bid";

     s.t();
     s.events = ""; */
};

function setOmnitureTelephoneBidStart(page) {
    //console.debug("inside setOmnitureAbsenteeBidStart");
    /*   page = page || null;
     s = s_gi(s_account);

     s.channel = "Registration";
     s.events = "event24";
     if (page === "account") {
     s.pageName = "Attend Auction: Telephone: Register Telephone Bids";
     s.events += ",event76,event82";
     } else if (page === "selectitems") {
     s.pageName = "Attend Auction: Telephone: Select Items";
     } else if (page === "selectprices") {
     s.pageName = "Attend Auction: Telephone: Select Price";
     } else if (page === "confirmandsubmit") {
     s.pageName = "Attend Auction: Telephone: Confirm & Submit";
     }
     s.prop1 = s.eVar1 = "Attend Auction: Telephone";
     s.prop2 = s.eVar2 = "Attend Auction: Telephone";
     if (window.omniture_contentType) {
     s.prop10 = s.eVar10 = omniture_contentType;
     }
     s.eVar19 = "telephone registration";

     s.t();
     s.events = ""; */
};

function setOmnitureAttendAuction(isOnlineOnly) {
    //console.debug("inside setOmnitureAttendAuction");
    /*   s = s_gi(s_account);
     s.pageName = "Registration: Transactional Registration: Attend Auction";
     s.channel = "Registration";
     s.events="event24, event73";
     if (isOnlineOnly) {
     s.events += ',event91';
     s.prop1 = s.eVar1 = 'Studio Attend Auction: Register to Bid';
     }
     else {
     s.prop1 = s.eVar1 = "Attend Auction: Register to Bid";
     }
     s.prop2 = s.eVar2 = "Attend Auction: Register to Bid";
     if (window.omniture_contentType) {
     s.prop10 = s.eVar10 = omniture_contentType;
     }
     s.t();  */
};

function setOmniturePaddleStart() {
    //console.debug("inside setOmniturePaddleStart");
    /*   s = s_gi(s_account);
     s.pageName = "Attend Auction: Paddle: Register for an Auction";
     s.channel = "Registration";
     s.events = "event24,event80,event82";

     s.prop1 = s.eVar1 =  "Attend Auction: Paddle";
     s.prop2 = s.eVar2 = "Attend Auction: Paddle";
     if (window.omniture_contentType) {
     s.prop10 = s.eVar10 = omniture_contentType;
     }
     s.eVar19 = "paddle registration";
     s.t();
     s.events = ""; */
};

function setOmnitureBidNowStart(isOnlineOnly) {
    //console.debug("inside setOmnitureBidNowStart");
    /*   s = s_gi(s_account);
     s.pageName = "Attend Auction: BIDnow: Register for BIDnow";
     s.channel = "Registration";
     s.events = "event24,event74,event82";
     if (isOnlineOnly) {
     s.events+= ",event94,event92";
     }

     s.prop1 = s.eVar1 =  "Attend Auction: BIDnow";
     s.prop2 = s.eVar2 = "Attend Auction: BIDnow";
     if (window.omniture_contentType) {
     s.prop10 = s.eVar10 = omniture_contentType;
     }
     s.eVar19 = "BIDnow registration";
     s.t();
     s.events = ""; */
};

function setOmnitureLotDetailView(event, lot, catalogTitle, image, isOnlineOnly) {
//    console.log("inside setOmnitureLotDetailView with online only", isOnlineOnly);

//    if (isOnlineOnly === 'false'){
    //      s.pageName = "Catalogues : " + event + " : " + lot  + " : Lot Detail : " + catalogTitle;
    //      if(image != null){
    //          s.pageName = s.pageName  + " : Alternate Image : " + image;
    //      }
//
    //      s.prop1 = "Ecatalogues: Lot Detail";
    //      s.eVar1 = s.prop1;
    //      s.prop15 = event;
    //      s.prop16 = event + " - " + lot;
    //      s.eVar15 = s.prop15;
    //     s.eVar16 = s.prop16;
    //     s.prop10 = "Ecatalogues";
    //      s.events = "event14";
    //      s.eVar35 = "";
    //      s.eVar36 = "";
    //      s.prop37 = "Ecatalogues/Lot Detail View/Lot Detail";
    //      sendOmnitureData(s);
    //      s.events = "";
    //      s.prop37 = undefined;
    //  }

    // RED-4273 - this block doesn't appear to be getting hit.  Needs to be reviewed for removal
    //  else {
    //      console.log('setOmnitureLotDetailView is called');
    //      s.pageName="Studio Ecatalogues: " + event + " : " + lot + " : Lot Detail : " + catalogTitle;
    //      s.channel="Sales";
    //      s.events="event9,event24,event44";

//        s.prop1 = "Studio Ecatalogues: Condition Report";
    //      s.prop2 = "Studio Ecatalogues";
    //       s.evar1 = "Studio Ecatalogues: Condition Report";
    //       s.evar2 =" Studio Ecatalogues ";
    //       s.prop10 = s.eVar10 = (ECAT.departments) ? ECAT.departments.join(" | ") : "";
    //       s.prop15 = event;
    //       s.evar15 = event;
    //       s.prop16 = event + " - " + lot;
    //       s.evar16 = event + " - " + lot;
    //       s.evar57 = "Studio";
    //       sendOmnitureData(s);
//    }
};

function setOmnitureLotAltImageView(event, lot, catalogTitle, image) {
    //console.debug("inside setOmnitureLotAltImageView");
    /*    s.pageName = "Catalogues : " + event + " : " + lot + " : Lot Detail : Alternate Image : " + image + " : " + catalogTitle;
     s.prop1 = "Ecatalogues: Lot Detail";
     s.eVar1 = s.prop1;
     s.prop15 = event;
     s.prop16 = event + " - " +lot;
     s.eVar15 = s.prop15;
     s.eVar16 = s.prop16;
     s.prop10 = "Ecatalogues";
     s.events = "event24";
     s.eVar35 = "";
     s.eVar36 = "";
     sendOmnitureData(s);
     s.events = "";  */
};


function setOmnitureGridView(catalogTitle, saleNumber) {
    //console.debug("inside setOmnitureGridView");
    /*    s.events = s.apl(s.events, "event32", ",", 2);
     s.pageName = "Catalogues : " + saleNumber + " : Grid View : " + catalogTitle;
     s.prop1 = "Ecatalogues: Grid View";
     s.eVar1 = s.prop1;
     s.prop10 = "Ecatalogues";
     s.prop15 = saleNumber;
     s.eVar15 = s.prop15;
     s.prop16 = s.eVar16 = "";
     s.prop37 = "Ecatalogues/Grid View";
     setOmnitureProperties(s);
     sendOmnitureData(s);
     s.events = "";
     s.prop37 = undefined;  */
};

function setOmnitureListView(catalogTitle, saleNumber) {
    //console.debug("inside setOmnitureListView");
    /*   s.pageName = "Catalogues : " + saleNumber + " : List View : " + catalogTitle;
     s.prop1 = "Ecatalogues: List View";
     s.eVar1 = s.prop1;
     s.prop10 = "Ecatalogues";
     s.prop15 = saleNumber;
     s.eVar15 = s.prop15;
     s.prop16 = s.eVar16 = "";
     s.prop37 = "Ecatalogues/List View";
     setOmnitureProperties(s);
     s.events = s.apl(s.events, "event33", ",", 2);
     sendOmnitureData(s);
     s.events = "";
     s.prop37 = undefined; */
};
//STB-6589 Added for Zoom
function setOmnitureZoom(event, lot, catalogTitle, isOnlineOnly) {
    //   console.log("inside setOmnitureZoom for online only", isOnlineOnly);
    //   if (isOnlineOnly === 'false'){
    //      omniSiteCat._decorateNonStudioSale(s, true);
    //      s.pageName = "Catalogues : " + event + " : " + lot + " : Zoom : " + catalogTitle;
    //      s.prop1 = "Ecatalogues: Zoom";
    //      s.eVar1 = s.prop1;
    //      s.prop10 = "Ecatalogues";
    //      s.prop15 = event;
    //      s.prop16 = event + " - " +lot;
    //      s.eVar15 = s.prop15;
    //      s.eVar16 = s.prop16;
    //      s.events = "event41";
    //      s.prop37 = "Ecatalogues/Lot Detail View/Zoom";
    //      setOmnitureProperties(s);
    //      sendOmnitureData(s);
    //      s.prop37 = undefined;
    //      s.events = "";
    //   }
    // RED-4273 - Updating props/vars
    //   else {
    //     s.pageName = "Studio Ecatalogues : " + event + " : " + lot  + " : Zoom : " + catalogTitle;
    //     s.channel = "Sales";
    //      s.events = "event41,event24,event37";
    //     s.prop1 = s.eVar1 = "Studio Ecatalogues: Zoom";
    //      s.prop2 = s.eVar2 = "Studio Ecatalogues";
    // RED-4273 - This inheritance pattern (s.prop10 = s.prop10) needs refactoring, review.
    // No ECAT setup available on the lotDetails page, and departments aren't getting passed in
    // when function is invoked, but department likely shouldn't change on image-zoom so just
    // inheriting for now
    //      s.prop10 = s.prop10;
    //       s.prop15 = s.eVar15 = event;
    //      s.prop16 = s.eVar16 = event + " - " + lot;
    //       s.evar57 = "Studio";
    //       s.t();
//    }
};

function setOmnitureCatalogueNotes(event, lot, catalogTitle) {
    //console.debug("inside setOmnitureCatalogueNotes");
    /*   var trackObj = {};
     trackObj.events = "event15,event24";
     trackObj.pageName = "Catalogues : " + event + " : " + lot + " : Catalogue Notes : " + catalogTitle;
     trackObj.prop1 = "Ecatalogues: Catalogues Notes";
     trackObj.eVar1 = "Ecatalogues: Catalogues Notes";
     trackObj.prop10 = s.eVar10;
     trackObj.prop15 = event;
     trackObj.prop16 = event + " - " + lot;
     trackObj.eVar15 = s.prop15;
     trackObj.eVar16 = s.prop16;
     trackObj.prop37 = "Ecatalogues/Lot Detail View/Catalogue Notes/Provenance";
     s.t(trackObj);  */
};

function setOmnitureFlippablePDF(event, catalogTitle) {
    //console.debug("inside setOmnitureCatalogueNotes");
//    var trackObj = {};
//    trackObj.events = "event24";
//    trackObj.pageName = "Catalogues : " + event + " : " + "Flippable PDF : " + catalogTitle;
//    trackObj.eVar20 = "Flippable PDF : " + event;
//    s.t(trackObj);
};

function setOmnitureCatalogueNotesComparables(event, lot, catalogTitle, img) {
    //console.debug("inside setOmnitureCatalogueNotesComparables");

    //console.debug('Ev: '+event+' Lot: '+lot+' Title: '+catalogTitle+' Img: '+img);
    /*   s.pageName = "Catalogues : " + event + " : " + lot + " : Lot Detail : Comparable : Fig. " + img + " : " + catalogTitle;
     s.prop1 = "Ecatalogues: Catalogues Note";
     //s.prop2 = "Catalogues: Catalogue";
     s.prop2 = "Ecatalogues";
     s.eVar1 = s.prop1;
     s.prop10 = "Ecatalogues";
     s.prop15 = event;
     s.prop16 = event + " - " +lot;
     s.eVar15 = s.prop15;
     s.eVar16 = s.prop16;
     setOmnitureProperties(s);
     sendOmnitureData(s); */
};

/*function setOmnitureViewConditionReport(event, lot, catalogTitle) {
 //console.debug("inside setOmnitureViewConditionReport");
 s.pageName = "Catalogues : " + event + " : " + lot + " : Condition Report : " + catalogTitle;
 s.prop1 = "Ecatalogues: Condition Report";
 s.eVar1 = s.prop1;
 s.prop10 = "Ecatalogues";
 setOmnitureProperties(s);
 s.prop15 = event;
 s.prop16 = event + " - " +lot;
 s.eVar15 = s.prop15;
 s.eVar16 = s.prop16;
 s.events = "event9";
 s.prop37 = "Ecatalogues/Lot Detail View/Condition Report";
 sendOmnitureData(s);
 s.prop37 = undefined;
 s.events = "";
 };*/

function setOmnitureCatalogView() {
    //   s.events = s.apl(s.events, "event15", ",", 2);
};

function setOmnitureTrackLot() {
    //console.debug("inside setOmnitureTrackLot");
    //   s.events="";
//    s.events = "event23";
//    s.t();
};

function setOmnitureEventDetailPage() {
    //console.debug("inside setOmnitureEventDetailPage");
    //   s.events = s.apl(s.events, "event31", ",", 2);
    //   s.t();
};

function setOmnitureProductViews(productID, unit, revenue) {
    //console.debug("inside setOmnitureProductViews");
    /*    s.products = ";" + productID + ";" + unit + ";" + revenue;
     s.events = s.apl(s.events, "prodView", ",", 2);
     s.t();  */
};

function setOmnitureCartOpens() {
    //console.debug("inside setOmnitureCartOpens");
    //alert("Open");
    /*    s.events = "";
     s.events = s.apl(s.events, "scOpen", ",", 2);
     s.t();  */
};

function setOmnitureCartAdds() {
    //console.debug("inside setOmnitureCartAdds");
    //alert("add 1");
    /*   s.events = "";
     s.events = s.apl(s.events, "scAdd", ",", 2);
     s.t();  */
};
function setOmnitureCartRemoves() {
    //console.debug("inside setOmnitureCartRemoves");
    /*    s.events = "";
     s.events = s.apl(s.events, "scRemove", ",", 2);
     s.t();  */
};

function setOmnitureCartViews() {
    //console.debug("inside setOmnitureCartViews");
    /*    s.events = "";
     s.events = s.apl(s.events, "scView", ",", 2);
     s.t();  */
};

function setOmnitureCheckouts() {
    //console.debug("inside setOmnitureCheckouts");
    /*    s.events = "";
     s.events = s.apl(s.events, "scAdd", ",", 2);
     s.t(); */
};
function setOmnitureCheckoutItems(str) {
    /*   //console.debug("inside setOmnitureCompleteRegistration");
     //alert("check out items: add 3");
     s.events = "";
     s.products = str;
     //s.events = s.apl(s.events, "scAdd", ",", 2);
     s.t();   */
};

function setOmnitureOrders(orderId,str) {
    //console.debug("inside setOmnitureOrders");
    //alert("orders");
    /*    s.events = "";
     s.purchaseID = orderId;
     s.products = str;
     s.events = s.apl(s.events, "purchase", ",", 2);
     s.t(); */
};

function setOmnitureCardInteraction(typeInteraction) {
    /*   s = s_gi(s_account);
     s.linkTrackVars = "eVar25,events";
     s.linkTrackEvents = "event40";
     s.eVar25 = s.pageName + " : " + typeInteraction;
     s.events = "event40";
     s.tl(this, 'o', 'Card Interactions');  */
};


function sendOmnitureData(s) {
    /*    //console.debug("inside sendOmnitureData");
     var s_code = s.t();
     if (s_code)
     document.write(s_code); */
};

function setOmnitureTransactionalEvent(id) {
    //console.debug("inside setOmnitureTransactionalEvent");
    /*
     s.pageName = "Registration: Transactional Registration";
     s.events = "event24,event84";
     s.channel = "Registration";
     s.prop1 = s.eVar1 = "Registration: Transactional Registration";
     s.prop2 = s.eVar2 = "Registration: Transactional Registration";
     s.prop10 = s.eVar10 = "No Department";
     s.eVar23 = $.cookie("omniture_eVar23") || "";

     //Old eVars
     if($.cookie("omniture_eVar26")!=null){
     s.eVar26=$.cookie("omniture_eVar26");
     }
     if($.cookie("omniture_eVar27")!=null){
     s.eVar27=$.cookie("omniture_eVar27");
     }

     omniSiteCat._augmentCrossRequestOnlineOnlyEvent(s, 88);

     s.t();  */
};
function setOmnitureTransactionalEventError() {
    /*   s = s_gi(s_account);
     s.pagename = "Registration: Transactional Registration";
     s.events = "event59";
     s.channel = "Registration";
     s.prop1 = s.eVar1 = "Registration: Transactional Registration";
     s.prop2 = s.eVar2 = "Registration: Transactional Registration";
     s.prop10 = s.eVar10 = "No Department";

     s.eVar40 = "Website Registration: " + $('.form .form_error').not(':empty').text();

     s.t();  */

}

function setOmnitureSearchProperties(hash) {
    //console.debug("inside setOmnitureSearchProperties");
    /*    var hashVal = hash.split('=');
     var searchArr = [{page:'upcomingLots',title:'Upcoming Lots'},
     {page:'soldLotsList',title:'Sold Lots'},
     {page:'contentList',title:'Related Content'}];

     for (var i=0;i<searchArr.length;i++) {
     var el = searchArr[i];
     if(hashVal[1] == el.page) {
     s.pageName = "Search Results: " + el.title;
     s.prop1 = "Search Results: " + el.title;
     s.prop2 = "Search Results: " + el.title;
     s.eVar1 = s.prop1;
     s.eVar2 = s.prop2;
     }
     }
     s.events = "";
     s.events = s.apl(s.events, "event18", ",", 2);
     s.t();  */
};

function setOmnitureBWPageName(){
//    if ( window.location.search ){// the check sequence is essential
//        s.prop37 = "Search/Sold Lot Archive/Results";
//    }else{
//        if ( window.location.hash ){
//            s.prop37 = "Search Results/Results";
//        }
//    }
}

function setOmnitureVerticalSearchProperties() {
    //console.debug("inside setOmnitureVerticalSearchProperties");
//    var scKeywordVal = decodeURIComponent(Sothebys.util.getParameter("keyword")).replace("+", " ");
//    s.pageName = "Search Results";
//    s.channel = "Research";
//    s.prop26 = scKeywordVal;
//    s.eVar22= s.prop26;

//    s.eVar1="Search Results";
//    s.eVar2="Search Results";
//    s.prop1="Search Results";
//    s.prop2="Search Results";

//    s.events = "event18";

//    setOmnitureBWPageName();

    //s.t();
};

function setOmnitureSearchApply(startDate, endDate, locations, departments) {
    //console.debug("inside setOmnitureSearchApply");
    /*     var startDateStr='';
     var endDateStr='';
     // getFullYear()  yyyy-MM-dd
     var temp;
     if (startDate!=null){
     startDateStr = startDate.getFullYear()+"-";
     temp = startDate.getMonth()+1;
     startDateStr = startDateStr.concat((temp<10?"0"+temp:temp)+"-");
     temp = startDate.getDate();
     startDateStr = startDateStr.concat((temp<10?"0"+temp:temp));
     }

     if (endDate!=null){
     endDateStr = endDate.getFullYear()+"-";
     temp = endDate.getMonth()+1;
     endDateStr = endDateStr.concat((temp<10?"0"+temp:temp)+"-");
     temp = endDate.getDate();
     endDateStr = endDateStr.concat((temp<10?"0"+temp:temp));
     }

     var d = "Date:";
     d=d.concat(startDateStr+" - "+endDateStr);

     d=d.concat(" | Location: ");
     var len = locations.length;
     for (var i=0;i<len;i++){
     d=d.concat(locations[i]);
     if (i<len-1){
     d=d.concat("-");
     }
     }

     d=d.concat(" | Department: ");
     len = departments.length;
     for (var i=0;i<len;i++){
     d=d.concat(departments[i]);
     if (i<len-1){
     d=d.concat("-");
     }
     }

     s.eVar31 = d;
     s.prop19 = d;
     s.events = "event20";

     setOmnitureBWPageName();

     s.t();   */
};
//DONE
function setOmnitureSearchResults(type){
    // RED-1344: Turn into click event
    // s.linkTrackVars = "events,prop26,prop27,eVar22,eVar30";
    // s.linkTrackEvents = "event43";

    // var flag = new Boolean(false);
    // if (type==='upcoming') {
    //     flag = true;
    //     s.events = "event43";
    //     s.eVar30="Upcoming Lots";
    //     s.prop27="Upcoming Lots";
    // } else if (type==='sold'){
    //     flag = true;
    //     s.events = "event43";
    //     s.eVar30="Sold Lots";
    //     s.prop27="Sold Lots";
    // } else if (type==='content'){
    //     flag = true;
    //     s.events = "event43";
    //     s.eVar30="Related Content";
    //     s.prop27="Related Content";
    // }

    // if (flag){
    //     s.prop26 = s.eVar22 = undefined;
    //     s.tl(this, 'o', 'Search Results');
    // }
};


function setOmniturePreferencesChangedValues(prop36Values) {
    // for(var i=0;i<prop36Values.length;i++){
    //     var prop36Value = prop36Values[i];
    //     setOmniturePreferencesChanged(prop36Value);
    // }
};

function setOmniturePreferencesChanged(prop36Value) {
    //console.debug("inside setOmniturePreferencesChanged");
    // s.events = "";
    // s.prop36 = prop36Value;
    // s.eVar29 = prop36Value;
    // s.events = "event42";
    // var pageOld = s.pageName;
    // s.pageName = '';
    // s.t();
    // s.pageName = pageOld;
};
//DONE
function setOmnitureAsiaQuiz(url) {
    // var url = window.location +"";
    // var quizArr = [{page:'surveypage.html',pn:'The Prize'},
    //                {page:'asianartiq-quiz.html',pn:'Take the Quiz'},
    //                {page:'asianartiq-sponsors.html',pn:'Sponsors'},
    //                {page:'asianartiq-thankyou.html',pn:'Thank You'}];

    // for(var i=0;i<quizArr.length;i++){
    //     var el = quizArr[i];
    //     if(url.indexOf(el.page)!=-1){
    //         s.pageName = "Preferred: Indigare: " +el.pn;
    //         s.prop1="Preferred";
    //         s.prop2="Preferred: Special Offers";
    //         s.eVar1="Preferred";
    //         s.eVar2="Preferred: Special Offers";
    //         s.prop10="Indigare Quiz";
    //         s.eVar10="Indigare Quiz";
    //         s.events="event48";
    //     }
    // }
};
//DONE
function setOmnitureJeffKoons() {
    // var url = window.location.href;
    // if(url.indexOf('/preferred/koons.html') != -1) {
    //     s.pageName="Preferred: Shop Now: Koons Plates";
    //     s.prop1="Preferred";
    //     s.prop2="Preferred: Souk";
    //     s.eVar1="Preferred";
    //     s.eVar2="Preferred: Souk";
    //     s.prop10="Souk: Koons Plates";
    //     s.eVar10="Souk: Koons Plates";

    //     s.events="prodView";
    //     s.products="Souk;Koons Dinner Plate";
    // }
};
function setOmnitureIPadPromoPopup() {

};
function setOmnitureIPadAppstore() {

};

function setOmnitureIpadstorefrontDefaultData(client,clientLevel){

}

function restoreOmnitureIpadstorefrontDefaultData(){

}


function setOmnitureNewsletterSignUp(){
    /*    s.linkTrackVars = "eVar56,eVar23,events";
     s.linkTrackEvents = "event87";
     s.eVar56 = "Newsletter Signup: Studio";
     s.eVar23 = "Sign Up for Our Newsletter";
     s.events = "event87";
     s.tl(this, 'o', 'Recirculation'); */
}
function setOmnitureCalenderHero(url) {
    /*    s.linkTrackVars = "eVar50,events";
     s.linkTrackEvents = "event48";
     s.eVar50 = "Studio Auction Calendar: " + $( 'a[href="'+ url +'"]' ).siblings('h1.title').text();
     s.events = "event48";
     s.tl(this, 'o', 'Recirculation');*/
}
function setOmnitureFeaturedPageLanding(client,clientLevel){

}
function setOmnitureViewAllPageLanding(client,clientLevel){

}

function setOmnitureFeaturedPage_DownloadClickEvent(client,clientLevel,sale,issueName){

}

function setOmnitureFeaturedPage_JoinClickEvent(client,clientLevel){

}

function setOmnitureViewAll_DownloadClickEvent(client,clientLevel,sale,issueName){

}

function setOmnitureViewAll_JoinClickEvent(client,clientLevel){

}

function setOmnitureCreateAccount_JoinClickEvent(client,clientLevel){

}

function setOmnitureLoginRegisterOverlay_LoginLinkOnClick(client,clientLevel){

}

function setOmnitureLoginRegisterOverlay_RegisterButtonOnClick(client,clientLevel){

}

function setOmnitureRegistrationCreateAccount_CreateAccountOnclick_DATA_ERROR(client,clientLevel,errors, emailAddress){

}

function setOmnitureRegistrationCreateAccount_CreateAccountOnclick_VALID_DATA(client,clientLevel, emailAddress){

}


function setOmnitureRegistrationCreateAccount_PreviouslyTransacted(client,clientLevel,emailAddress,account){

}

function setOmnitureRegistrationAlmostThere_OnLoginClick_VALID_DATA(client,clientLevel){

}

function setOmnitureMemberLogin_LoginButtonOnclick_VALID_DATA(client,clientLevel){

}

function setOmnitureMemberLogin_LoginButtonOnclick_DATA_ERROR(client,clientLevel,errors){

}

// not used currently
function setOmnitureMemberLogin_LoginButtonOnclick_EMAIL_ALREADY_EXISTS(client,clientLevel){

}

function setOmnitureRegistrationValidationCode_OnLoad(){

};

function setOmnitureRegistrationValidationCode_CreateAccountOnclick_DATA_ERROR(client,clientLevel,errors, emailAddress, validationCode, clientNumber){

};

function setOmnitureRegistrationValidationCode_CreateAccountOnclick_VALID_DATA(client,clientLevel, emailAddress, validationCode, clientNumber){

};

function setOmnitureRegistrationValidationCode_Succeed(client,clientLevel, emailAddress, validationCode, clientNumber){

};

function setOmnitureRegistrationValidationCode_ContinueLaterOnclick(client,clientLevel, emailAddress, validationCode, clientNumber){

};

function setOmnitureIpadAlmostThereLoad() {

};
//$(document).ready(function(){
//    omniSiteCat.init();
//});