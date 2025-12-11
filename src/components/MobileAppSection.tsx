import appMockup1 from '@/assets/app-mockup-1.png';
import appMockup2 from '@/assets/app-mockup-2.png';

const MobileAppSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* App Mockups */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 min-h-[400px] lg:min-h-[500px] items-center">
            <div className="relative">
              <img
                src={appMockup1}
                alt="تطبيق معلمي - الشاشة الرئيسية"
                className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[420px] rounded-3xl shadow-large z-10 relative animate-float"
              />
              <img
                src={appMockup2}
                alt="تطبيق معلمي - قائمة المحاضرات"
                className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-[360px] rounded-3xl shadow-medium absolute -right-20 md:-right-28 lg:-right-32 xl:-right-40 top-20 lg:top-24 opacity-90 animate-float-delayed"
              />
              {/* Decorative gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl scale-150" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-right order-1 lg:order-2 flex flex-col justify-center">
            <span className="inline-block mb-5 px-5 py-2.5 bg-primary/10 rounded-full text-primary font-semibold text-sm sm:text-base">
              📱 تطبيق الجوال
            </span>
            <h2 className="heading-2 mb-8 lg:mb-10">
              تعلّم في أي وقت ومن أي مكان
            </h2>
            <p className="text-body mb-10 lg:mb-12 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl lg:text-2xl">
              حمّل تطبيق معلمي لتصل إلى محاضراتك ومذكراتك بسهولة، وتتابع تقدمك، 
              وتتلقى إشعارات بأهم المراجعات قبل الامتحان.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
              <button className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-5 text-base sm:text-lg">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-right">
                  <div className="text-xs sm:text-sm opacity-80">تحميل من</div>
                  <div className="font-bold text-base sm:text-lg">App Store</div>
                </div>
              </button>
              
              <button className="btn-secondary inline-flex items-center justify-center gap-3 px-8 py-5 text-base sm:text-lg">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-right">
                  <div className="text-xs sm:text-sm opacity-80">تحميل من</div>
                  <div className="font-bold text-base sm:text-lg">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
